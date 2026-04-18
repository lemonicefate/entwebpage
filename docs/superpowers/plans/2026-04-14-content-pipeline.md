# 衛教內容管線 (Content Pipeline) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立從草稿 → 轉換 → 審閱 → 發布的低摩擦衛教內容管線，包含 `md_to_html.py` 三項功能增強、CSS 新樣式、`publish.sh` 統一入口、agent 修正與 enhance 模式。

**Architecture:** `md_to_html.py` 新增三個功能（IMAGE_PLACEHOLDER 轉換、QR Code 附加、`--update-content-js` 自動更新）；`publish.sh` 作為統一入口封裝這些功能；`patient-edu-content-generator` agent 修正路徑 typo 並新增 enhance 模式。

**Tech Stack:** Python 3 (markdown, PyYAML), Bash, CSS variables (已有設計系統), Claude Code CLI

---

## 檔案變更地圖

| 操作 | 路徑 | 說明 |
|------|------|------|
| 修改 | `md_to_html.py` | +3 功能：ImagePlaceholder preprocessor、QR code 附加、`--update-content-js` flag |
| 修改 | `.claude/agents/patient-edu-content-generator.md` | 修正 7 處 path typo、`您`→`你`、HTML template 改 CSS class、新增 enhance 模式 |
| 修改 | `css/style.css` | 新增 `.image-placeholder`、`.qrcode-section` 及 dark mode 變體 |
| 新增 | `publish.sh` | 統一入口：slug / --enhance / --all / --serve / --status |
| 修改 | `CLAUDE.md` | 新增「內容管線工作流程」段落 |

---

## Task 1: 修正 agent — path typo + 您→你

**Files:**
- Modify: `.claude/agents/patient-edu-content-generator.md`

- [ ] **Step 1: 確認 typo 位置**

```bash
grep -n "enrtwebpage" .claude/agents/patient-edu-content-generator.md
```

預期輸出：約 7 行含 `enrtwebpage`（Step 1 Write/Read/Edit 路徑欄位等）

- [ ] **Step 2: 全域取代 enrtwebpage → entwebpage**

使用 Edit 工具，`replace_all: true`：
- `old_string`: `enrtwebpage`
- `new_string`: `entwebpage`

- [ ] **Step 3: 全域取代 您 → 你（僅在 Writing style rules 段落）**

找到 `- Use \`「您」\`` 那行，修改為：

```
- Use `「你」` (informal you) throughout
```

同樣找到 `「請您放心」`、`「如有任何疑問，歡迎隨時詢問醫師」` 改為 `「請你放心」`、`「如有任何疑問，歡迎隨時詢問醫師」`。

- [ ] **Step 4: 驗證**

```bash
grep -c "enrtwebpage" .claude/agents/patient-edu-content-generator.md
```

預期輸出：`0`

- [ ] **Step 5: Commit**

```bash
git add .claude/agents/patient-edu-content-generator.md
git commit -m "fix(agent): correct path typo enrtwebpage→entwebpage, 您→你"
```

---

## Task 2: 修正 agent — HTML templates 改用 CSS class

**Files:**
- Modify: `.claude/agents/patient-edu-content-generator.md`

- [ ] **Step 1: 取代 Flowchart 模板**

找到現有的 numbered-step `div style="display:flex..."` 區塊（在 `**Flowcharts / process diagrams:**` 下）：

```html
<div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.5rem;">
  <div style="min-width:2.5rem;height:2.5rem;border-radius:50%;background:var(--primary,#2BAD9D);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:1.1rem;">1</div>
  <div><h4 style="margin:0 0 0.3rem 0;">步驟標題</h4><p style="margin:0;color:var(--text-secondary);">步驟說明文字</p></div>
</div>
```

取代為：

```html
<div class="mermaid">
flowchart TD
    A[開始] --> B[步驟一]
    B --> C[步驟二]
    C --> D[結束]
</div>
```

（說明：流程圖一律改用 Mermaid，由 app.js 的 mermaid.js 渲染）

- [ ] **Step 2: 取代 Image placeholder 模板**

找到現有的 `**Image placeholder:**` 下的 inline-style div：

```html
<div style="background:var(--bg-secondary,#f0f4f8);border:2px dashed var(--border-color,#ccc);border-radius:12px;padding:2rem;text-align:center;margin:1.5rem 0;color:var(--text-secondary,#666);">
  <div style="font-size:2.5rem;margin-bottom:0.5rem;">🖼️</div>
  <p style="margin:0;font-size:0.95rem;">【圖片預留位置】描述這裡應放什麼圖片</p>
</div>
```

取代為：

```html
<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <p>【圖片準備中】描述這裡應放什麼圖片</p>
</div>
```

- [ ] **Step 3: 取代 QR Code section 模板**

找到現有的 `**QR Code section (always include at bottom):**` 下的 inline-style div：

```html
<div style="margin-top:3rem;padding:2rem;background:var(--bg-secondary,#f0f4f8);border-radius:16px;text-align:center;">
  ...（整個 QR code 區塊）
</div>
```

取代為：

```html
<div class="qrcode-section">
  <h4>📱 隨時查閱本頁內容</h4>
  <p>掃描下方 QR Code，即可在手機上隨時查看本頁衛教資訊</p>
  <div class="qrcode-placeholder">
    <span>QR Code<br>預留位置</span>
  </div>
  <p class="qrcode-hint">💡 小提示：你也可以將此頁加入書籤，方便日後查閱</p>
</div>
```

- [ ] **Step 4: Commit**

```bash
git add .claude/agents/patient-edu-content-generator.md
git commit -m "fix(agent): replace inline styles with CSS class templates"
```

---

## Task 3: 新增 agent Enhance 模式

**Files:**
- Modify: `.claude/agents/patient-edu-content-generator.md`

- [ ] **Step 1: 在 `## Workflow (Follow This Order)` 前面插入 Enhance 模式說明**

在現有 `## Primary Mission` 段落後、`## Workflow` 段落前，插入：

```markdown
## Enhance Mode

當輸入為 HTML 檔案路徑（格式：`enhance: content/{cat}/{topicId}.html`）時，進入 **Enhance 模式**。

### Enhance 模式規則

| 允許 | 禁止 |
|------|------|
| 潤飾文案表達（讓文字更溫暖易懂） | 改動任何醫學事實或數據 |
| 補充 Mermaid 流程圖（如無） | 刪除任何現有段落 |
| 搜尋 CC 授權圖片替換 `.image-placeholder` | 改動 callout 類型 |
| 下載圖片並加 figcaption | 碰 `js/content.js` |

### 圖片搜尋規則（Enhance 模式）

- **來源白名單：** Wikimedia Commons、OpenStax
- **授權白名單：** CC0、CC-BY、CC-BY-SA、Public Domain
- **儲存路徑：** `content/{categoryId}/img/{topicId}-{n}.{ext}`（自動建立 `img/` 目錄）
- **HTML 引用格式：**
  ```html
  <figure>
    <img src="./img/{topicId}-{n}.{ext}" alt="圖片描述">
    <figcaption>圖片來源：{作者}, {授權}, via Wikimedia Commons</figcaption>
  </figure>
  ```
- 若搜尋不到合適圖片，保留 `.image-placeholder` div，不強行替換

### Enhance 模式工作流程

1. 讀取指定 HTML 檔案
2. 分析現有內容結構
3. 潤飾文案（不改事實）
4. 為每個 `.image-placeholder` 搜尋 CC 授權圖片
5. 下載圖片到 `content/{cat}/img/` 目錄
6. 更新 HTML：替換 placeholder 為 `<figure>` 標籤
7. 儲存更新後的 HTML
8. 報告：修改摘要 + 圖片清單（含授權）
```

- [ ] **Step 2: Commit**

```bash
git add .claude/agents/patient-edu-content-generator.md
git commit -m "feat(agent): add enhance mode with CC image search rules"
```

---

## Task 4: md_to_html.py — 新增 ImagePlaceholderPreprocessor

**Files:**
- Modify: `md_to_html.py`

- [ ] **Step 1: 在 `MermaidPreprocessor` 類別後面新增 `ImagePlaceholderPreprocessor`**

在 `class MermaidPreprocessor` 結尾（約 97 行）後插入：

```python
class ImagePlaceholderPreprocessor(Preprocessor):
    """Convert <!-- IMAGE_PLACEHOLDER: desc --> to .image-placeholder div."""

    PLACEHOLDER_RE = re.compile(r'<!--\s*IMAGE_PLACEHOLDER:\s*(.+?)\s*-->')

    def run(self, lines):
        new_lines = []
        for line in lines:
            m = self.PLACEHOLDER_RE.search(line)
            if m:
                desc = m.group(1).strip()
                new_lines.append(
                    f'<div class="image-placeholder">'
                    f'<div class="image-placeholder-icon">🖼️</div>'
                    f'<p>【圖片準備中】{desc}</p>'
                    f'</div>'
                )
            else:
                new_lines.append(line)
        return new_lines
```

- [ ] **Step 2: 在 `ClinicExtensions.extendMarkdown` 中註冊新 preprocessor**

找到：

```python
        md.preprocessors.register(
            MermaidPreprocessor(md), 'mermaid', 29
        )
```

在其後插入：

```python
        md.preprocessors.register(
            ImagePlaceholderPreprocessor(md), 'image_placeholder', 28
        )
```

- [ ] **Step 3: 測試 IMAGE_PLACEHOLDER 轉換**

先在 tinnitus.md 的 `## 症狀` 段落前插入一行測試用 placeholder（暫時修改，測試完還原）：

```bash
python3 md_to_html.py --preview drafts/tinnitus.md | grep -A3 "image-placeholder"
```

若 tinnitus.md 無 placeholder，直接用 --preview 另一個有的草稿，或建立臨時測試：

```bash
echo '<!-- IMAGE_PLACEHOLDER: 耳鳴機制示意圖 -->' > /tmp/test_placeholder.md
cat >> /tmp/test_placeholder.md << 'EOF'
---
title: "test"
slug: test
category: ent
summary: "test"
date_generated: 2026-04-14
---

<!-- IMAGE_PLACEHOLDER: 耳鳴機制示意圖 -->

正文段落。
EOF
python3 md_to_html.py --preview /tmp/test_placeholder.md
```

預期輸出包含：
```
<div class="image-placeholder">
<div class="image-placeholder-icon">🖼️</div>
<p>【圖片準備中】耳鳴機制示意圖</p>
</div>
```

- [ ] **Step 4: Commit**

```bash
git add md_to_html.py
git commit -m "feat(md_to_html): add ImagePlaceholderPreprocessor"
```

---

## Task 5: md_to_html.py — 新增 QR Code section 附加

**Files:**
- Modify: `md_to_html.py`

- [ ] **Step 1: 新增 `QR_CODE_HTML` 常數**

在檔案頂部常數區（`CALLOUT_MAP` 之前）插入：

```python
QR_CODE_HTML = """\n<div class="qrcode-section">
  <h4>📱 隨時查閱本頁內容</h4>
  <p>掃描下方 QR Code，即可在手機上隨時查看本頁衛教資訊</p>
  <div class="qrcode-placeholder">
    <span>QR Code<br>預留位置</span>
  </div>
  <p class="qrcode-hint">💡 小提示：你也可以將此頁加入書籤，方便日後查閱</p>
</div>"""
```

- [ ] **Step 2: 在 `convert_file()` 中附加 QR Code section**

找到 `convert_file()` 中：

```python
    html = demote_headings(html)

    # Prepend title block
    title_html = build_title_html(fm)
    html = title_html + '\n\n' + html
```

在 `html = title_html + '\n\n' + html` 後插入：

```python
    # Append QR code section
    html = html + QR_CODE_HTML
```

- [ ] **Step 3: 測試 QR Code section 出現**

```bash
python3 md_to_html.py --preview drafts/tinnitus.md | grep -c "qrcode-section"
```

預期輸出：`1`

- [ ] **Step 4: Commit**

```bash
git add md_to_html.py
git commit -m "feat(md_to_html): auto-append qrcode-section to converted HTML"
```

---

## Task 6: md_to_html.py — 新增 `--update-content-js` flag

**Files:**
- Modify: `md_to_html.py`

- [ ] **Step 1: 新增 `update_content_js()` 函式**

在 `convert_file()` 函式之前插入：

```python
def update_content_js(topic_id, title, summary, last_updated, category,
                      content_js_path=None):
    """Insert topic entry into js/content.js if not already present.

    Returns True if inserted, False if skipped (duplicate).
    """
    if content_js_path is None:
        # Resolve relative to this script's directory
        content_js_path = Path(__file__).parent / 'js' / 'content.js'
    content_js_path = Path(content_js_path)

    content = content_js_path.read_text(encoding='utf-8')

    # Check if already exists
    if f"id: '{topic_id}'" in content:
        print(f'⚠ {topic_id} already exists in content.js — skipping')
        return False

    lines = content.split('\n')

    # Find the line with this category's id
    cat_line = None
    for i, line in enumerate(lines):
        if f"id: '{category}'" in line:
            cat_line = i
            break

    if cat_line is None:
        print(f'✕ Category "{category}" not found in content.js')
        return False

    # Find "topics: [" within this category
    topics_line = None
    for i in range(cat_line, min(cat_line + 20, len(lines))):
        if 'topics: [' in lines[i] or "topics:[" in lines[i]:
            topics_line = i
            break

    if topics_line is None:
        print(f'✕ topics[] not found for category "{category}"')
        return False

    # Find closing ] of the topics array by bracket depth counting
    depth = 1
    close_line = None
    for i in range(topics_line + 1, len(lines)):
        depth += lines[i].count('[') - lines[i].count(']')
        if depth <= 0:
            close_line = i
            break

    if close_line is None:
        print(f'✕ Could not find closing ] for topics in "{category}"')
        return False

    # Escape single quotes to avoid breaking JS string literals
    safe_title = title.replace("'", "\\'")
    safe_summary = summary.replace("'", "\\'")

    entry = (
        f"      {{ id: '{topic_id}', title: '{safe_title}', "
        f"summary: '{safe_summary}', lastUpdated: '{last_updated}' }},"
    )
    lines.insert(close_line, entry)
    content_js_path.write_text('\n'.join(lines), encoding='utf-8')
    print(f'✓ Added {topic_id} to content.js [{category}]')
    return True
```

- [ ] **Step 2: 在 `convert_file()` 簽名中加入 `update_content_js_flag` 參數，並在寫檔後呼叫**

找到：

```python
def convert_file(md_path, output_dir=None, preview=False, dry_run=False):
```

改為：

```python
def convert_file(md_path, output_dir=None, preview=False, dry_run=False,
                 update_js=False):
```

找到 `convert_file()` 中寫完檔案後的 `print(f'✓ {out_path}')` 那行，在其後、現有「📝 請在 content.js...」提示之前插入：

```python
    if update_js:
        title = fm.get('title', slug)
        summary = fm.get('summary') or fm.get('seo_description', '')
        date = fm.get('date_generated', '')
        update_content_js(topic_id, title, summary, str(date), category)
        return out_path

    # Print content.js registration hint (only when --update-content-js not used)
```

（保留原有的 `📝 請在 content.js...` print 區塊，但改為 `else` 分支，讓兩者互斥）

- [ ] **Step 3: 在 `main()` 中加入 `--update-content-js` argument**

找到：

```python
    parser.add_argument('-o', '--output-dir',
                        help='Override output directory')
    args = parser.parse_args()
```

在 `--output-dir` argument 後插入：

```python
    parser.add_argument('--update-content-js', action='store_true',
                        help='Auto-insert topic entry into js/content.js')
```

- [ ] **Step 4: 在 `main()` 呼叫 `convert_file()` 時傳入 `update_js` 參數**

找到兩處 `convert_file(f, output_dir=args.output_dir,` 和 `convert_file(path, output_dir=args.output_dir,`，都加上：

```python
                     update_js=args.update_content_js)
```

- [ ] **Step 5: 測試 --update-content-js（dry 流程）**

先確認 content.js 中 `ent-tinnitus` 不存在：

```bash
grep "ent-tinnitus" js/content.js
```

預期：無輸出（未存在）。

然後執行轉換：

```bash
python3 md_to_html.py drafts/tinnitus.md --update-content-js
```

預期輸出包含：
```
✓ content/ent/ent-tinnitus.html
✓ Added ent-tinnitus to content.js [ent]
```

驗證 content.js 已更新：

```bash
grep "ent-tinnitus" js/content.js
```

預期輸出：包含 `{ id: 'ent-tinnitus', title: '耳鳴 (Tinnitus)', ...` 的一行。

- [ ] **Step 6: 測試重複執行不覆蓋**

再執行一次相同指令：

```bash
python3 md_to_html.py drafts/tinnitus.md --update-content-js
```

預期輸出包含：
```
⚠ ent-tinnitus already exists in content.js — skipping
```

- [ ] **Step 7: Commit**

```bash
git add md_to_html.py js/content.js content/ent/ent-tinnitus.html
git commit -m "feat(md_to_html): add --update-content-js flag; convert tinnitus.md"
```

---

## Task 7: 新增 CSS 樣式 — `.image-placeholder` 與 `.qrcode-section`

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: 在 style.css 結尾的 `@media print` 區塊前插入新樣式**

找到：

```css
/* ============================================
   列印時隱藏互動元素
   ============================================ */
@media print {
```

在其**前面**插入：

```css
/* ============================================
   Image Placeholder
   ============================================ */
.image-placeholder {
  background: var(--bg-secondary);
  border: 2px dashed var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 1.5rem 0;
  color: var(--text-secondary);
}

.image-placeholder-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.image-placeholder p {
  margin: 0;
  font-size: 0.95rem;
}

[data-theme="dark"] .image-placeholder {
  background: var(--bg-secondary);
  border-color: var(--border-color);
  color: var(--text-secondary);
}

/* ============================================
   QR Code Section
   ============================================ */
.qrcode-section {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  text-align: center;
}

.qrcode-section h4 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.qrcode-section > p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.qrcode-placeholder {
  background: #fff;
  display: inline-block;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qrcode-placeholder span {
  display: flex;
  width: 150px;
  height: 150px;
  background: #f9f9f9;
  border: 2px dashed #ccc;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #999;
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.5;
}

.qrcode-hint {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

[data-theme="dark"] .qrcode-section {
  background: var(--bg-secondary);
}

[data-theme="dark"] .qrcode-placeholder {
  background: var(--bg-elevated, #2a2a2a);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .qrcode-placeholder span {
  background: var(--bg-secondary);
  border-color: var(--border-color);
  color: var(--text-secondary);
}
```

- [ ] **Step 2: 用瀏覽器驗證樣式（啟動開發伺服器）**

```bash
python3 -m http.server 8000
```

開啟 `http://localhost:8000`，導覽至耳鳴衛教頁（若已建立），確認：
- QR Code 區塊出現在頁尾
- 框線、圓角、背景色符合 DESIGN.md 暖色調設計系統
- 切換 dark mode 後樣式正確

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat(css): add .image-placeholder and .qrcode-section styles"
```

---

## Task 8: 建立 `publish.sh`

**Files:**
- Create: `publish.sh`

- [ ] **Step 1: 建立 publish.sh**

```bash
#!/usr/bin/env bash
# publish.sh — 衛教內容管線統一入口
# 用法：
#   ./publish.sh {slug}              # 路徑 A：轉換 + 更新 content.js
#   ./publish.sh {slug} --enhance    # 路徑 B：轉換 + AI 加工（需 Claude Code CLI）
#   ./publish.sh --all               # 批次轉換所有 drafts/
#   ./publish.sh --serve             # 啟動本地預覽 server（port 8000）
#   ./publish.sh --status            # 列出尚未轉換的草稿

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
import sys, re, yaml
from pathlib import Path
text = Path(sys.argv[1]).read_text(encoding='utf-8')
m = re.match(r'^---\n(.*?)\n---', text, re.DOTALL)
if not m:
    sys.exit(1)
fm = yaml.safe_load(m.group(1))
cat = fm.get('category', '')
slug = fm.get('slug', '')
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
import re, yaml
from pathlib import Path

drafts = sorted(Path('drafts').glob('*.md'))
drafts = [f for f in drafts if not f.name.startswith('_')]

missing = []
done = []
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
        missing.append(f'  ✗ {f.name} (目標：{out})')

print(f'\n已轉換 ({len(done)})：')
for l in done:
    print(l)
print(f'\n尚未轉換 ({len(missing)})：')
for l in missing:
    print(l)
PYEOF
    ;;

  --all)
    echo "🔄 批次轉換所有草稿..."
    python3 md_to_html.py drafts/ --update-content-js
    echo ""
    echo "完成。執行 git diff --stat 確認變更。"
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
      exit 1
    fi

    # 路徑 A：轉換 + 更新 content.js
    echo "🔄 轉換 ${SLUG}..."
    python3 md_to_html.py "$MD_FILE" --update-content-js
    echo ""
    git diff --stat
    echo ""

    OUT_PATH=$(get_output_path "$MD_FILE")
    echo "👀 預覽：./publish.sh --serve  → http://localhost:8000"
    echo "📄 輸出：$OUT_PATH"

    if [ "$ENHANCE" = "--enhance" ]; then
      echo ""
      echo "🤖 啟動 AI 加工（patient-edu-content-generator enhance 模式）..."
      # 呼叫 Claude Code CLI 執行 agent（需要 claude CLI 在 PATH 中）
      # 若 CLI 語法不同，請調整下方指令
      claude -p "enhance: $OUT_PATH" 2>/dev/null || {
        echo "⚠ claude CLI 不可用。請在 Claude Code 中手動執行："
        echo "   使用 patient-edu-content-generator agent，輸入：enhance: $OUT_PATH"
      }
      echo ""
      git diff --stat
    fi
    ;;
esac
```

將上述內容寫入 `publish.sh`，然後：

```bash
chmod +x publish.sh
```

- [ ] **Step 2: 測試 --status**

```bash
./publish.sh --status
```

預期：列出已轉換（✓）和尚未轉換（✗）的草稿清單。

- [ ] **Step 3: 測試 --serve（背景確認後 Ctrl+C）**

```bash
./publish.sh --serve &
sleep 1
curl -s http://localhost:8000 | head -5
kill %1
```

預期：回傳 HTML 內容（`<!DOCTYPE html>` 開頭）。

- [ ] **Step 4: Commit**

```bash
git add publish.sh
git commit -m "feat: add publish.sh unified pipeline entry point"
```

---

## Task 9: 更新 CLAUDE.md — 新增工作流程段落

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: 在 `## 部署` 段落前插入新段落**

找到 CLAUDE.md 中的：

```markdown
## 部署
```

在其**前面**插入：

```markdown
## 內容管線工作流程

新增衛教文章的標準流程（低摩擦版）：

**Stage 1：知識生成（自動，週一/四 22:00）**
- 由 Claude Code Schedule 讀取 `drafts/_PROMPT.md` 自動生成草稿至 `drafts/{slug}.md`

**Stage 2：轉換（手動觸發）**

```bash
# 單篇：轉換 + 自動更新 content.js
./publish.sh {slug}

# 單篇 + AI 加工（圖片搜尋、文案潤飾）
./publish.sh {slug} --enhance

# 批次轉換所有草稿
./publish.sh --all

# 查看轉換狀態
./publish.sh --status
```

**Stage 3：審閱**
```bash
./publish.sh --serve    # http://localhost:8000
```

**Stage 4：發布**
```bash
git add .
git commit -m "content: 新增 {主題名稱} 衛教頁面"
git push
```

**Cloudflare Pages 自動部署**（推送後約 1 分鐘上線）。

---
```

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(CLAUDE.md): add content pipeline workflow section"
```

---

## Task 10: 端對端測試 — tinnitus 路徑 A

**Files:** (已在 Task 6 建立 `content/ent/ent-tinnitus.html`)

- [ ] **Step 1: 確認輸出檔案存在且結構正確**

```bash
grep -c "callout\|mermaid\|qrcode-section" content/ent/ent-tinnitus.html
```

預期：`>= 1`（至少包含其中一個 class）

```bash
grep "qrcode-section" content/ent/ent-tinnitus.html
```

預期：有 `<div class="qrcode-section">` 一行。

- [ ] **Step 2: 確認 content.js 中 ent-tinnitus 已存在**

```bash
grep "ent-tinnitus" js/content.js
```

預期：`{ id: 'ent-tinnitus', title: '耳鳴 (Tinnitus)', summary: '...', lastUpdated: '2026-04-06' },`

- [ ] **Step 3: 瀏覽器驗證（啟動伺服器）**

```bash
./publish.sh --serve
```

開啟 `http://localhost:8000`，點擊側邊欄「耳鼻喉科」→「耳鳴 (Tinnitus)」，確認：
- [ ] 頁面標題顯示「耳朵裡有蟬鳴？耳鳴的成因與調適」
- [ ] Callout 區塊樣式正確（有色彩邊框）
- [ ] QR Code 區塊出現在頁尾
- [ ] 手機寬度（375px）下排版無破版

- [ ] **Step 4: 測試重複執行保護**

```bash
python3 md_to_html.py drafts/tinnitus.md --update-content-js
```

預期：`⚠ ent-tinnitus already exists in content.js — skipping`（不重複寫入）。

---

## Task 11: 設定 Schedule（Stage 1）

- [ ] **Step 1: 確認 drafts/_PROMPT.md 內容符合需求**

```bash
head -20 drafts/_PROMPT.md
```

確認 Obsidian 主題清單路徑為正確的 Windows 路徑：
`D:\iCloudDrive\iCloud~md~obsidian\Obsidian-note\1-Projects\診所網頁建置\medical-topic-list-for-ai.md`

- [ ] **Step 2: 在 Claude Code 中執行 /schedule**

於 Claude Code 中執行：

```
/schedule
```

依照 schedule skill 指引，設定：
- **Cron：** `0 22 * * 1,4`（週一、四 22:00）
- **Prompt：** `drafts/_PROMPT.md` 的完整內容

- [ ] **Step 3: 驗證 schedule 已建立**

```bash
/schedule list
```

預期：顯示 cron `0 22 * * 1,4` 的排程項目。

---

## Task 12: 批次轉換 15 篇現有草稿

**前提：** Task 10 端對端測試通過。

- [ ] **Step 1: 執行批次轉換**

```bash
./publish.sh --all
```

預期：每篇草稿各印出 `✓ content/{cat}/{topicId}.html` 及 `✓ Added {topicId} to content.js [{cat}]`。

- [ ] **Step 2: 確認轉換結果**

```bash
./publish.sh --status
```

預期：所有 `drafts/*.md`（排除 `_*.md`）均顯示 `✓`。

- [ ] **Step 3: 瀏覽器快速巡覽**

```bash
./publish.sh --serve
```

開啟 `http://localhost:8000`，點擊至少 3 篇不同分類的文章（例如耳科、兒科、內科），確認：
- 各篇頁面可正常載入（無 404）
- QR Code 區塊出現在頁尾
- 側邊欄分類顯示正確主題數

- [ ] **Step 4: Commit 全部新內容**

```bash
git add content/ js/content.js
git commit -m "content: batch convert 15 draft articles via publish.sh --all"
```

- [ ] **Step 5: Push to GitHub Pages**

```bash
git push
```

等待約 1 分鐘後，至 Cloudflare Pages 部署 URL 確認上線。

---

## 驗證清單（總覽）

- [ ] `--preview` 輸出包含 `.callout`、`.mermaid`、`.image-placeholder`、`.qrcode-section`
- [ ] `--update-content-js` 正確插入 entry，重複執行不覆蓋
- [ ] 瀏覽器確認：Mermaid 渲染、callout 樣式、QR 區塊、手機排版
- [ ] `--enhance` 路徑觸發 agent（或顯示正確的手動提示）
- [ ] `publish.sh --status` 正確區分已轉換 / 未轉換
- [ ] agent 路徑 typo 已全數修正（`enrtwebpage` 出現次數為 0）
- [ ] commit → push → Cloudflare 正確部署
