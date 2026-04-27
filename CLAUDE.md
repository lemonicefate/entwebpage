# CLAUDE.md

本文件為 Claude Code (claude.ai/code) 在此專案中工作時的指引。

## 專案概述

誠心醫療體系工學診所的病人衛教 SPA 網站。供病患自行瀏覽了解疾病衛教，同時透過 SEO 曝光吸引不認識診所的民眾。行動裝置體驗為第一優先。所有介面文字為正體中文 (zh-TW)。

**技術棧：** React（UMD，CDN）+ esbuild 本地預編譯 + 純 HTML — 無 Node.js 開發伺服器、無套件管理器。

## 架構

**React SPA + 本地預編譯（B2）+ hash routing：**

- `js/content.js`（資料層）→ `src/components/*.jsx`（React 元件）→ `dist/app.js`（esbuild 編譯輸出）→ `index.html`（載入器）
- 載入順序：`js/content.js`（定義 window.CONFIG / CATEGORIES / DOCTORS / FAQS / HOURS）→ React UMD（CDN）→ DOMPurify UMD（CDN）→ `dist/app.js`
- 各 JSX 檔之間透過 `Object.assign(window, {...})` 分享元件；`app.jsx` render 時從 window 解構取用

**建置流程：**
- 原始碼：`src/components/*.jsx` + `src/styles/main.css`
- `./publish.sh --build` 呼叫 `tools/esbuild` 編譯 JSX → `dist/app.js`（約 60KB）
- `tools/esbuild` 首次執行時自動下載（10MB 單一執行檔，`.gitignore` 排除）
- `dist/app.js` **需要 commit 進 git**（GitHub Pages 直接服務）

**路由：** Hash-based（`#/{categoryId}`、`#/{categoryId}/{topicId}`、`#/favorites`、`#/recent`、`#/contact`）。由 `src/components/app.jsx` 的 `parseHash()` + `hashchange` 監聽處理。

**狀態：** 五個 localStorage 鍵：
- `theme` (light/dark) — `[data-theme]`
- `fontScale` (normal/senior) — `html.senior`
- `cvdMode` (on/off) — `[data-cvd]`
- `gx_favorites` (topic id 陣列)
- `gx_recent` (topic id 陣列，FIFO 最多 10)

**內容安全：** `content/*.html` 片段在注入 DOM 前先以 DOMPurify 清理，並透過 `createContextualFragment + replaceChildren` 掛載（`src/components/pages.jsx` 的 SafeHtml 元件），作為 XSS 的縱深防禦。

## 關鍵資料結構

`js/content.js` 中的 `CONFIG` 物件：診所基本資料、聯絡資訊、Formspree endpoint。空字串欄位為待診所填入的 TODO。

`js/content.js` 中的 `CATEGORIES` 陣列：每個分類包含 `{id, name, icon, topics[]}`。每個主題包含 `{id, title, summary}`（僅 metadata，不含內容）。文章 HTML 內容存放在 `content/{categoryId}/{topicId}.html`，由 `src/components/pages.jsx` 在使用者瀏覽時以 `fetch()` 按需載入並快取於記憶體中。新增主題步驟：(1) 在 `content/{categoryId}/` 建立 `{topicId}.html`（純 HTML 片段，不含 `<html>` 等外層標籤）；(2) 在 `js/content.js` 對應分類的 `topics` 陣列加一行 `{ id, title, summary }`。

## 設計系統

**Always read `DESIGN.md` before making any visual or UI decisions.**

設計方向：**Warm Teal × Peach**（暖青綠 × 桃橘）。品牌主色 `--teal #0e7c7b`，強調色桃橘 `--peach #e89661` + 金黃 `--gold #f2c94c`（Logo 十字色）。字體：Noto Sans TC（內文/UI）+ Instrument Serif（Logo 副標）。暖色中性色背景（#f5faf8 / #f0f7f4）取代純白。

CSS 變數定義於 `src/styles/main.css` 的 `:root`、`[data-theme="dark"]`、`html.senior`、`html[data-cvd="on"]`。

三個無障礙模式：
- **Dark mode**：`<html data-theme="dark">` — 暖深色調非純黑
- **Senior mode**：`html.senior` — `--base-size: 19px`
- **CVD mode**：`<html data-cvd="on">` — 分類色切換 Okabe–Ito CVD-safe 調色盤；左下浮動 FAB 切換

頂部列展示完整 Logo 圖片（`assets/logo.jpg`）+ 副標題「工學診所衛教專區」。

字型：Noto Sans TC（內文/UI）、Instrument Serif（Logo 副標）、JetBrains Mono（數據）。

背景使用暖色中性色（#f5faf8）取代純白，所有中性色為暖色調。

字體大小切換：`html.senior` class 覆寫 `--base-size: 19px`（Senior mode）。

響應式斷點：桌面（>1023px，側邊欄顯示）、平板（768-1023px，窄側邊欄）、手機（<768px，漢堡選單 + overlay 側邊欄）。

## SEO

每次路由切換時，透過 `updateMeta()` 和 `updateJsonLd()` 動態更新 meta 標籤與 JSON-LD。JSON-LD 產生器會解析主題內容中的 `<h4>`/`<p>` 配對，建構 FAQPage schema。

`robots.txt` 和 `sitemap.xml` 部署於 `https://lemonicefate.github.io/entwebpage/`（GitHub Pages）。`sitemap.xml` 涵蓋首頁、`#/doctors`、`#/contact`、9 大分類入口（`chronic` / `respir` / `ortho` / `gi` / `kids` / `senior` / `preventiv` / `nutri` / `ent`）以及所有 topic 文章頁（`#/{categoryId}/{topicId}`）。新增/移除文章時須同步更新 `sitemap.xml` 的 `<loc>` 與 `<lastmod>`（與 `js/content.js` 中對應 topic 的 `lastUpdated` 一致）；hash routing 對 SEO 效果有限，但仍能避免索引舊路徑造成 404。

## 內容管線工作流程

新增衛教文章的標準流程：

**Stage 1：知識生成（自動，週一/四 22:00）**
由 Claude Code Schedule 讀取 `drafts/_PROMPT.md` 自動生成草稿至 `drafts/{slug}.md`。

**Stage 2：轉換（一鍵觸發）**

```bash
./publish.sh {slug}           # 轉換 + 更新 js/content.js + JSX 編譯
./publish.sh --all            # 批次轉換所有草稿
./publish.sh --build          # 只編譯 JSX → dist/app.js
./publish.sh --status         # 查看哪些草稿尚未轉換
./publish.sh --serve          # 啟動 http://localhost:8000
```

**draft frontmatter 必填**：
- `category`（實體資料夾名稱，決定 `content/{category}/` 檔案位置）
- `logical_category`（9 大新分類 id：`chronic/respir/ortho/gi/kids/senior/preventiv/nutri/ent`，決定網站上的分類歸屬）
- `slug`、`title`、`summary`、`last_updated`

**Stage 3：審閱**

```bash
./publish.sh --serve  # 啟動 http://localhost:8000 本地預覽
```

**Stage 4：發布**

```bash
git add content/ js/content.js dist/app.js
git commit -m "content: 新增 {主題名稱} 衛教頁面"
git push
```

GitHub Pages 自動部署（推送後約 1-2 分鐘上線）。

## 部署

靜態網站部署於 GitHub Pages。`.nojekyll` 停用 Jekyll 處理。所有路徑使用相對路徑（`./dist/app.js`、`./src/styles/main.css`）。**需先執行 `./publish.sh --build` 確保 `dist/app.js` 已更新**，再推送。

未來遷移至 Cloudflare Pages 不需修改任何設定（hash routing 在所有平台皆可運作）。

## 聯絡表單

使用 Formspree（免費方案，每月 50 封）。若 `CONFIG.contact.formEndpoint` 為空，則 fallback 至 `mailto:` 連結。表單處理邏輯位於 `src/components/pages.jsx` 的 Contact 元件中。

## Git 忽略規則

`.gitignore` 已設定忽略以下類型：
- **OS 系統檔案**：`.DS_Store`、`Thumbs.db`、`Desktop.ini`
- **IDE / 編輯器**：`.vscode/`、`.idea/`、`*.swp`、`*.swo`
- **Node 相關**（預留未來建置工具）：`node_modules/`、`package-lock.json`
- **暫存與日誌**：`*.log`、`*.tmp`、`*.bak`
- **環境變數**（預防性）：`.env`、`.env.*`

本專案不需要 `.env`。所有可調整設定統一放在 `js/content.js` 頂部的 `CONFIG` 物件中。`tools/esbuild` 執行檔（約 10MB）已加入 `.gitignore`，首次使用時由 `publish.sh` 自動下載。
