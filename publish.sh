#!/usr/bin/env bash
# publish.sh — 衛教內容管線統一入口
#
# 用法：
#   ./publish.sh {slug}              # 路徑 A：轉換 + 更新 content.js
#   ./publish.sh {slug} --enhance    # 路徑 B：轉換 + AI 加工
#   ./publish.sh --all               # 批次轉換所有 drafts/
#   ./publish.sh --serve             # 啟動本地預覽 server（port 8000）
#   ./publish.sh --status            # 列出草稿轉換狀態

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

usage() {
  echo "用法："
  echo "  ./publish.sh {slug}              # 路徑 A：轉換 + 更新 content.js"
  echo "  ./publish.sh {slug} --enhance    # 路徑 B：轉換 + AI 加工"
  echo "  ./publish.sh --all               # 批次轉換所有 drafts/"
  echo "  ./publish.sh --serve             # 啟動 http://localhost:8000"
  echo "  ./publish.sh --status            # 列出尚未轉換的草稿"
  echo "  ./publish.sh --build             # 只編譯 JSX → dist/app.js"
}

# ── B2 build ──
ensure_esbuild() {
  if [[ -x ./tools/esbuild ]]; then return 0; fi
  echo "📦 Downloading esbuild (one-time)…"
  mkdir -p tools
  local pkg
  case "$(uname -s)-$(uname -m)" in
    Linux-x86_64)   pkg="@esbuild/linux-x64/-/linux-x64-0.21.5.tgz" ;;
    Linux-aarch64)  pkg="@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz" ;;
    Darwin-arm64)   pkg="@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz" ;;
    Darwin-x86_64)  pkg="@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz" ;;
    *)              echo "❌ Unsupported: $(uname -s)-$(uname -m)"; exit 1 ;;
  esac
  curl -fsSL "https://registry.npmjs.org/${pkg}" | tar -xz -C tools --strip-components=2 package/bin/esbuild
  chmod +x ./tools/esbuild
  echo "✅ $(./tools/esbuild --version)"
}

compile_jsx() {
  ensure_esbuild
  echo "🔨 Compiling JSX → dist/app.js"
  ./tools/esbuild src/components/app.jsx \
    --bundle --outfile=dist/app.js \
    --loader:.jsx=jsx --format=iife --target=es2020 --minify \
    --external:react --external:react-dom --external:dompurify \
    --define:process.env.NODE_ENV=\"production\"
  echo "✅ dist/app.js built ($(wc -c < dist/app.js) bytes)"
}

get_output_path() {
  local md_file="$1"
  python3 - "$md_file" <<'PYEOF'
import sys, re
try:
    import yaml
except ImportError:
    print("ERROR: PyYAML not installed", file=sys.stderr)
    sys.exit(1)
from pathlib import Path

text = Path(sys.argv[1]).read_text(encoding='utf-8')
m = re.match(r'^---\n(.*?)\n---', text, re.DOTALL)
if not m:
    print("ERROR: no frontmatter", file=sys.stderr)
    sys.exit(1)
fm = yaml.safe_load(m.group(1))
cat = fm.get('category', '')
slug = fm.get('slug', '')
if not cat or not slug:
    print("ERROR: missing category or slug", file=sys.stderr)
    sys.exit(1)
print(f"content/{cat}/{cat}-{slug}.html")
PYEOF
}

case "${1:-}" in
  --build)
    compile_jsx
    ;;

  --serve)
    PORT="${2:-9000}"
    echo "🌐 啟動預覽伺服器：http://localhost:${PORT}"
    python3 -m http.server "$PORT"
    ;;

  --dev)
    PORT="${2:-9000}"
    ensure_esbuild
    echo "🔨 esbuild watching src/components/*.jsx → dist/app.js"
    echo "🌐 Dev server with live-reload: http://localhost:${PORT}"
    ./tools/esbuild src/components/app.jsx \
      --bundle --outfile=dist/app.js \
      --loader:.jsx=jsx --format=iife --target=es2020 --sourcemap=inline \
      --external:react --external:react-dom --external:dompurify \
      --define:process.env.NODE_ENV=\"development\" \
      --watch=forever </dev/null &
    ESBUILD_PID=$!
    trap "kill $ESBUILD_PID 2>/dev/null; exit" INT TERM EXIT
    sleep 0.8
    python3 - "$PORT" <<'PYEOF'
import sys, os, http.server, threading, time

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 9000
WATCH = ['dist/app.js', 'src/styles/main.css', 'js/content.js']

def get_stamp():
    t = 0
    for f in WATCH:
        try: t = max(t, os.path.getmtime(f))
        except: pass
    return t

_stamp = [get_stamp()]
_lock  = threading.Lock()

INJECT = b'\n<script>!function(){var s=new EventSource("/__live");s.onmessage=function(e){e.data==="reload"&&location.reload()}}();</script>\n'

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.split('?')[0] == '/__live':
            self._sse(); return
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, 'index.html')
        if os.path.isfile(path) and path.endswith('.html'):
            with open(path, 'rb') as f:
                body = f.read()
            body = body.replace(b'</body>', INJECT + b'</body>', 1)
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def _sse(self):
        self.send_response(200)
        self.send_header('Content-Type',  'text/event-stream')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Connection',    'keep-alive')
        self.end_headers()
        try:
            last = _stamp[0]
            while True:
                time.sleep(0.25)
                with _lock:
                    cur = _stamp[0]
                if cur != last:
                    last = cur
                    self.wfile.write(b'data: reload\n\n')
                    self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError):
            pass

    def log_message(self, fmt, *args):
        if '/__live' not in (args[0] if args else ''):
            print(f'  {args[1] if len(args)>1 else ""} {args[0]}')

def _watch():
    while True:
        time.sleep(0.25)
        s = get_stamp()
        with _lock:
            if s != _stamp[0]:
                _stamp[0] = s
                print('  ↺ 偵測到變更，通知瀏覽器重載')

threading.Thread(target=_watch, daemon=True).start()
http.server.ThreadingHTTPServer(('', PORT), Handler).serve_forever()
PYEOF
    ;;

  --status)
    echo "📋 草稿轉換狀態："
    python3 - <<'PYEOF'
import re
try:
    import yaml
except ImportError:
    import sys
    print("ERROR: PyYAML not installed", file=sys.stderr)
    sys.exit(1)
from pathlib import Path

drafts = sorted(Path('drafts').glob('*.md'))
drafts = [f for f in drafts if not f.name.startswith('_')]

done = []
missing = []
for f in drafts:
    text = f.read_text(encoding='utf-8')
    m = re.match(r'^---\n(.*?)\n---', text, re.DOTALL)
    if not m:
        continue
    fm = yaml.safe_load(m.group(1))
    cat = fm.get('category', '')
    slug = fm.get('slug', '')
    if not cat or not slug:
        continue
    out = Path(f'content/{cat}/{cat}-{slug}.html')
    if out.exists():
        done.append(f'  ✓ {f.name} → {out}')
    else:
        missing.append(f'  ✗ {f.name}  (目標：{out})')

print(f'\n已轉換 ({len(done)})：')
for line in done:
    print(line)
print(f'\n尚未轉換 ({len(missing)})：')
for line in missing:
    print(line)
PYEOF
    ;;

  --all)
    echo "🔄 批次轉換所有草稿..."
    python3 md_to_html.py drafts/ --update-content-js
    echo ""
    git diff --stat || true
    echo ""
    echo "✅ 批次轉換完成。執行 git add . && git commit 發布。"
    compile_jsx
    ;;

  "")
    usage
    ;;

  *)
    SLUG="${1}"
    ENHANCE="${2:-}"
    MD_FILE="drafts/${SLUG}.md"

    if [ ! -f "$MD_FILE" ]; then
      echo "✕ 找不到草稿：$MD_FILE"
      echo "  執行 ./publish.sh --status 查看可用草稿"
      exit 1
    fi

    # 路徑 A：轉換 + 更新 content.js
    echo "🔄 轉換 ${SLUG}..."
    python3 md_to_html.py "$MD_FILE" --update-content-js

    echo ""
    git diff --stat || true

    OUT_PATH=$(get_output_path "$MD_FILE")
    echo ""
    echo "📄 輸出：$OUT_PATH"
    echo "👀 預覽：./publish.sh --serve  → http://localhost:8000"

    if [ "$ENHANCE" = "--enhance" ]; then
      echo ""
      echo "🤖 啟動 AI 加工（patient-edu-content-generator enhance 模式）..."
      # 呼叫 Claude Code CLI 執行 agent
      # 若 claude CLI 不在 PATH，顯示手動提示
      if command -v claude &>/dev/null; then
        claude -p "enhance: $OUT_PATH"
      else
        echo "⚠ claude CLI 不可用。請在 Claude Code 中手動執行："
        echo "   使用 patient-edu-content-generator agent，輸入：enhance: $OUT_PATH"
      fi
      echo ""
      git diff --stat || true
    fi
    compile_jsx
    ;;
esac
