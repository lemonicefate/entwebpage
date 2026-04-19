# 工學誠心診所衛教專區

誠心醫療體系工學診所的病人衛教 SPA，供病患瀏覽衛教知識，並透過 SEO 吸引社區民眾。

🌐 **線上網址**：[lemonicefate.github.io/entwebpage](https://lemonicefate.github.io/entwebpage)

---

## 技術棧

| 層次 | 技術 |
|------|------|
| 前端框架 | React 18（UMD，CDN 載入，無 npm build） |
| 建置工具 | esbuild（單一執行檔，首次使用自動下載） |
| 路由 | Hash routing（`#/categoryId/topicId`） |
| 樣式 | 純 CSS，CSS 變數設計系統 |
| 內容安全 | DOMPurify（XSS 清洗） |
| 部署 | GitHub Pages |

---

## 專案結構

```
├── index.html              # 入口頁，載入順序：content.js → React UMD → DOMPurify → dist/app.js
├── js/
│   └── content.js          # 資料層：CONFIG / CATEGORIES / DOCTORS / FAQS / HOURS
├── src/
│   └── components/
│       ├── shared.jsx      # ClinicMark logo、SVG icon 集、插畫
│       ├── data.jsx        # 前端資料轉換
│       ├── navbar.jsx      # 頂部列、主導覽、Mega Menu
│       ├── heroes.jsx      # HeroBig / HeroSearch / HeroCategories
│       ├── sections.jsx    # FeaturedSection / DoctorsSection / FaqSection / Footer
│       ├── pages.jsx       # ListPage（文章列表）、ArticlePage（單篇）、Contact
│       └── app.jsx         # 根元件：hash router、theme/fontScale/cvdMode 狀態
├── dist/
│   └── app.js              # esbuild 編譯輸出（需 commit 進 git）
├── content/                # 衛教文章 HTML 片段，按分類子目錄存放
│   ├── ent/                # 耳鼻喉
│   ├── internal/           # 內科
│   ├── pediatric/          # 兒科
│   └── ...
├── assets/
│   ├── doctors/            # 醫師大頭照（{doc-id}.jpg）
│   └── images/             # 其他圖片資源
├── drafts/                 # 衛教草稿（Markdown，不進網站）
├── publish.sh              # 內容管線統一入口
└── md_to_html.py           # Markdown → HTML 片段轉換器
```

---

## 本地開發

```bash
# 啟動預覽伺服器（port 9000）
./publish.sh --serve

# 即時重載開發模式（esbuild watch + server）
./publish.sh --dev

# 只重新編譯 JSX
./publish.sh --build
```

> **注意**：`tools/esbuild` 執行檔首次使用時由 `publish.sh` 自動下載（約 10MB），已加入 `.gitignore`。

---

## 新增衛教文章

### 手動流程

1. 在 `content/{categoryId}/` 建立 `{topicId}.html`（純 HTML 片段，不含 `<html>` 等外層標籤）
2. 在 `js/content.js` 對應分類的 `topics` 陣列加一筆：`{ id, title, summary }`
3. 執行 `./publish.sh --build` 重建 `dist/app.js`

### Markdown 草稿流程

```bash
# 轉換單一草稿（更新 content/ + js/content.js + 重建 dist/app.js）
./publish.sh {slug}

# 批次轉換所有草稿
./publish.sh --all

# 查看哪些草稿尚未轉換
./publish.sh --status
```

草稿 frontmatter 必填欄位：

```yaml
---
category: ent                   # 對應 content/ 子目錄
logical_category: ent           # 網站分類 id
slug: topic-slug
title: 文章標題
summary: 一句話摘要
last_updated: 2026-01-01
---
```

### 發布

```bash
git add content/ js/content.js dist/app.js
git commit -m "content: 新增 {主題名稱} 衛教頁面"
git push
```

GitHub Pages 推送後約 1–2 分鐘自動上線。

---

## 路由

| URL 格式 | 頁面 |
|----------|------|
| `#/` | 首頁 |
| `#/{categoryId}` | 分類文章列表 |
| `#/{categoryId}/{topicId}` | 單篇衛教文章 |
| `#/doctors` | 醫師介紹 |
| `#/favorites` | 我的收藏 |
| `#/recent` | 最近瀏覽 |
| `#/contact` | 聯絡我們 |

---

## 無障礙模式

| 模式 | 切換方式 | 說明 |
|------|----------|------|
| Dark mode | `<html data-theme="dark">` | 暖深色調 |
| Senior mode | `html.senior` | 字體放大至 19px |
| CVD mode | `<html data-cvd="on">` | Okabe–Ito 色盲友善調色盤 |

狀態存於 localStorage（`theme`、`fontScale`、`cvdMode`、`gx_favorites`、`gx_recent`）。

---

## 設計系統

主色 **Warm Teal × Peach**：`--teal #0e7c7b`（品牌主色）、`--peach #e89661`（強調）、`--gold #f2c94c`（Logo 十字）。詳見 [`DESIGN.md`](DESIGN.md)。

---

## 衛教分類

| ID | 名稱 |
|----|------|
| `ent` | 耳鼻喉 |
| `respir` | 呼吸道 |
| `ortho` | 骨科／復健 |
| `gi` | 腸胃消化 |
| `kids` | 兒童健康 |
| `senior` | 銀髮族照護 |
| `preventiv` | 預防保健 |
| `nutri` | 營養飲食 |
| `chronic` | 慢性病管理 |

---

## 聯絡表單

使用 [Formspree](https://formspree.io/)（免費方案，每月 50 封）。若 `CONFIG.contact.formEndpoint` 為空，自動 fallback 為 `mailto:` 連結。
