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
  --serve)
    echo "🌐 啟動預覽伺服器：http://localhost:8000"
    python3 -m http.server 8000
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
    git diff --stat
    echo ""
    echo "✅ 批次轉換完成。執行 git add . && git commit 發布。"
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
    ;;
esac
