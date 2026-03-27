# CLAUDE.md

本文件為 Claude Code (claude.ai/code) 在此專案中工作時的指引。

## 專案概述

誠心醫療體系工學診所的病人衛教 SPA 網站。供醫師在診間向病人展示衛教內容。所有介面文字為正體中文 (zh-TW)。

**技術棧：** 純 HTML + CSS + JavaScript — 無框架、無建置工具、無套件管理器。

## 架構

**三層 SPA + hash routing：**

- `content.js`（資料層）→ `app.js`（邏輯層）→ `index.html`（頁面骨架）→ `style.css`（設計系統）
- 載入順序：先載 `content.js`（定義全域變數 `CONFIG` 和 `CATEGORIES`），再載 `app.js`
- `app.js` 以 IIFE 包裹；內部使用 `$()` / `$$()` 作為 DOM 選取輔助函式

**路由：** Hash-based（`#/{categoryId}/{topicId}`、`#/contact`）。由 `handleHashChange()` 監聽 `hashchange` 事件處理，無需伺服器端路由。

**渲染：** 所有頁面內容透過 `innerHTML` 注入 `#main-content`。側邊欄與頂部列為固定元素（不隨頁面重新渲染）。

**狀態：** 兩個 localStorage 鍵值：`'theme'`（light/dark）和 `'fontSize'`（0/1/2）。預設永遠為亮色模式（診間展示用途）。

## 關鍵資料結構

`content.js` 中的 `CONFIG` 物件：診所基本資料、聯絡資訊、Formspree endpoint。空字串欄位為待診所填入的 TODO。

`content.js` 中的 `CATEGORIES` 陣列：每個分類包含 `{id, name, icon, topics[]}`。每個主題包含 `{id, title, summary}`（僅 metadata，不含內容）。文章 HTML 內容存放在 `content/{categoryId}/{topicId}.html`，由 `app.js` 在使用者瀏覽時以 `fetch()` 按需載入並快取於記憶體中。新增主題步驟：(1) 在 `content/{categoryId}/` 建立 `{topicId}.html`（純 HTML 片段，不含 `<html>` 等外層標籤）；(2) 在 `content.js` 對應分類的 `topics` 陣列加一行 `{ id, title, summary }`。

## 設計系統

CSS 變數定義於 `style.css` 的 `:root` 和 `[data-theme="dark"]`。色彩精準對應官方 Logo（`assets/logo.jpg`）三色系統：
- `--navy #1D3B72`：品牌海軍藍（Logo「誠心醫療體系」文字色）— 用於頁面標題
- `--blue #3080C4`：Logo 房屋外框藍 — 用於漸層色帶
- `--teal #2BAD9D`：Logo 醫療十字青綠 — 互動主色（連結、active 狀態、按鈕）
- `--orange #EF6028`：Logo 圓點橙紅 — 同官網「快速掛號」CTA 色
頂部列展示完整 Logo 圖片（`assets/logo.jpg`）+ 副標題「工學診所衛教專區」。字型：Noto Serif TC（標題）、Noto Sans TC（內文）、IBM Plex Mono（標籤）。

三段式字體大小由 `<html>` 上的 CSS class 控制：`font-normal`、`font-large`、`font-xlarge` — 各自覆寫 `--font-size-*` 變數。

響應式斷點：桌面（>1023px，側邊欄顯示）、平板（768-1023px，窄側邊欄）、手機（<768px，漢堡選單 + overlay 側邊欄）。

## SEO

每次路由切換時，透過 `updateMeta()` 和 `updateJsonLd()` 動態更新 meta 標籤與 JSON-LD。JSON-LD 產生器會解析主題內容中的 `<h4>`/`<p>` 配對，建構 FAQPage schema。

`robots.txt` 和 `sitemap.xml` 目前使用佔位網域 `your-domain.github.io/enrtwebpage` — 部署前須更新。

## 部署

靜態網站部署於 GitHub Pages。`.nojekyll` 停用 Jekyll 處理。所有路徑使用相對路徑（`./css/style.css`）。無建置步驟 — 推送即上線。

未來遷移至 Cloudflare Pages 不需修改任何設定（hash routing 在所有平台皆可運作）。

## 聯絡表單

使用 Formspree（免費方案，每月 50 封）。若 `CONFIG.contact.formEndpoint` 為空，則 fallback 至 `mailto:` 連結。表單處理函式為 `app.js` 中的 `handleFormSubmit()`。

## Git 忽略規則

`.gitignore` 已設定忽略以下類型：
- **OS 系統檔案**：`.DS_Store`、`Thumbs.db`、`Desktop.ini`
- **IDE / 編輯器**：`.vscode/`、`.idea/`、`*.swp`、`*.swo`
- **Node 相關**（預留未來建置工具）：`node_modules/`、`package-lock.json`
- **暫存與日誌**：`*.log`、`*.tmp`、`*.bak`
- **環境變數**（預防性）：`.env`、`.env.*`

本專案為純靜態網站，不需要 `.env`。所有可調整設定統一放在 `content.js` 頂部的 `CONFIG` 物件中。
