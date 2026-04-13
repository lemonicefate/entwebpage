# 衛教網站內容管線設計 (Content Pipeline Design)

**日期：** 2026-04-14
**狀態：** 已核准，待實作

---

## 背景

誠心醫療體系工學診所的病患衛教 SPA 網站，需要建立一條從「知識生成 → 格式轉換 → 審閱 → 發布」的低摩擦內容管線。

**現況問題：**
- Schedule prompt 過時，路徑錯誤，格式規範不足
- `patient-edu-content-generator` agent 路徑有 typo（`enrtwebpage`），風格與 `_PROMPT.md` 不一致
- `md_to_html.py` 缺少 IMAGE_PLACEHOLDER 轉換、QR Code 附加、自動更新 content.js
- 各環節需要手動銜接，缺乏統一入口

---

## 管線架構

```
Stage 1: 知識生成（Schedule，週一/四 22:00）
  → 讀 drafts/_PROMPT.md + Obsidian 主題清單
  → 產出 MD 至 drafts/{slug}.md + 標記清單 [x]

Stage 2: 轉換（一鍵觸發）
  路徑 A: ./publish.sh {slug}            → 純格式轉換
  路徑 B: ./publish.sh {slug} --enhance  → 格式轉換 + AI 加工

Stage 3: 審閱
  本地瀏覽器預覽 / Claude Code 摘要 / Discord bot 遠端審閱

Stage 4: 發布
  git add → commit → push → Cloudflare 自動部署
```

---

## 元件設計

### `md_to_html.py`（增強）

新增三項功能至現有轉換器：

**1. IMAGE_PLACEHOLDER 轉換**
```
輸入：<!-- IMAGE_PLACEHOLDER: 鼻腔構造示意圖 -->
輸出：<div class="image-placeholder">
        <div class="image-placeholder-icon">🖼️</div>
        <p>【圖片準備中】鼻腔構造示意圖</p>
      </div>
```

**2. QR Code 區塊**
每篇末尾自動附加 `<div class="qrcode-section">`，樣式由 CSS class 管理。

**3. `--update-content-js` flag**
- 讀取 `js/content.js`，找對應 category 的 `topics[]`
- topic ID 已存在則警告並跳過
- 插入 `{ id, title, summary, lastUpdated }`

**指令範例：**
```bash
python3 md_to_html.py drafts/tinnitus.md --update-content-js
python3 md_to_html.py drafts/ --dry-run
python3 md_to_html.py drafts/ --update-content-js
```

---

### `publish.sh`（新增）

統一入口腳本：

```bash
./publish.sh {slug}              # 路徑 A：純格式轉換 + 更新 content.js
./publish.sh {slug} --enhance    # 路徑 B：格式轉換 + AI 加工
./publish.sh --all               # 批次轉換所有 drafts/
./publish.sh --serve             # 啟動 python3 -m http.server 8000
./publish.sh --status            # 列出尚未轉換的草稿
```

**路徑 A 流程：**
1. 找到 `drafts/{slug}.md`
2. 執行 `python3 md_to_html.py drafts/{slug}.md --update-content-js`
3. 印出產出路徑 + `git diff --stat` 摘要
4. 提示預覽指令

**路徑 B 流程（`--enhance`）：**
1. 先執行路徑 A
2. 呼叫 `patient-edu-content-generator` agent，傳入 HTML 檔案路徑
3. Agent 進入潤飾模式（見下方 Agent 設計）
4. 印出 agent 修改摘要 + `git diff --stat`

---

### `patient-edu-content-generator` Agent（修正）

**檔案：** `.claude/agents/patient-edu-content-generator.md`

**修正項目：**
1. 路徑 typo：`enrtwebpage` → `entwebpage`（全域取代，約 7 處）
2. 稱謂：`您` → `你`
3. Flowchart：numbered-step div → `<div class="mermaid">`
4. Callout：inline-style → `<div class="callout callout-{type}">`

**新增 Enhance 模式：**

當輸入為 HTML 檔案路徑時（由 `publish.sh --enhance` 觸發）：

| 允許 | 禁止 |
|------|------|
| 潤飾文案表達 | 改動醫學事實 |
| 補充 Mermaid 流程圖 | 刪除任何現有段落 |
| 搜尋 CC 授權圖片替換 placeholder | 改動 callout 類型 |
| 下載圖片、加 figcaption | 碰 content.js |

**圖片搜尋規則：**
- 來源：Wikimedia Commons、OpenStax
- 授權白名單：CC0、CC-BY、CC-BY-SA、Public Domain
- 儲存路徑：`content/{cat}/img/{topicId}-{n}.{ext}`
- HTML 引用：`<img src="./img/{topicId}-{n}.{ext}" alt="...">`
- figcaption 格式：`圖片來源：{作者}, {授權}, via Wikimedia Commons`

---

### CSS 樣式（新增）

**檔案：** `css/style.css`

```css
/* IMAGE_PLACEHOLDER 樣式 */
.image-placeholder { ... }           /* 虛線框、柔和背景 */
.image-placeholder-icon { ... }
[data-theme="dark"] .image-placeholder { ... }

/* QR Code 區塊 */
.qrcode-section { ... }
.qrcode-placeholder { ... }
.qrcode-hint { ... }
[data-theme="dark"] .qrcode-section { ... }
```

---

### Schedule 設定（Stage 1）

- **工具：** Claude Code `/schedule`
- **Cron：** `0 22 * * 1,4`（週一、四 22:00）
- **Prompt 來源：** `drafts/_PROMPT.md` 內容（已是最完整版，不修改）
- **主題清單路徑（正確）：** `D:\iCloudDrive\iCloud~md~obsidian\Obsidian-note\1-Projects\診所網頁建置\medical-topic-list-for-ai.md`

---

## 圖片管理規則

```
content/
  ent/
    ent-tinnitus.html
    img/
      ent-tinnitus-1.jpg
      ent-tinnitus-2.svg
  pediatric/
    img/
      ...
```

- 路徑格式：`content/{categoryId}/img/{topicId}-{n}.{ext}`
- 僅接受 CC0/CC-BY/CC-BY-SA/Public Domain 授權
- 每張圖片必須有 `<figcaption>` 標註出處
- `img/` 目錄納入 git 追蹤

---

## 實作順序

| 步驟 | 工作 | 依賴 |
|------|------|------|
| 1 | 修正 agent（typo + 風格 + enhance 模式 + 圖片指引） | 無 |
| 2 | 增強 `md_to_html.py`（+3 項功能） | 無（可與 1 平行） |
| 3 | 新增 CSS 樣式（`.image-placeholder`、`.qrcode-section`） | 2 |
| 4 | 建立 `publish.sh` | 1、2 |
| 5 | 更新 `CLAUDE.md`（+工作流段落） | 4 |
| 6 | 端到端測試（tinnitus.md，路徑 A + B） | 4 |
| 7 | 設定 Schedule（Stage 1） | 5 |
| 8 | 批次轉換 15 篇現有草稿 | 6 通過 |

---

## 驗證清單

- [ ] `--preview` 輸出包含 callout div、mermaid div、image-placeholder div、qrcode-section
- [ ] `--update-content-js` 正確插入 entry，重複執行不覆蓋
- [ ] 瀏覽器確認 Mermaid 渲染、callout 樣式、placeholder 顯示、QR 區塊、手機排版
- [ ] `--enhance` 確認：文案潤飾未改醫學事實、圖片為 CC 授權、figcaption 正確
- [ ] commit → push → Cloudflare 正確顯示

---

## 暫不處理

- Gen1 舊文章（28 篇）升級：功能正常，未來再批次處理
- `_PROMPT.md` 內容修改：已是最完整版，直接使用
