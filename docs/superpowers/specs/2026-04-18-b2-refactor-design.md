# Refactor Spec — B2 (Pre-compiled React) + 新 DESIGN.md 重構

**Date:** 2026-04-18
**Scope:** 誠心醫療體系工學診所衛教 SPA 的完整視覺重構與架構升級
**Status:** Awaiting user review before implementation

---

## 0. 背景與目標

現行網站是純 vanilla JS 的 ENT 專科衛教 SPA，採 hash routing。本次重構目的：

- **品牌定位調整**：從「耳鼻喉專科展示」轉為「家醫科/綜合診所衛教入口」，ENT 作為其中一個專科分類
- **視覺重構**：套用 Claude Design 產出的 Warm Teal × Peach 設計系統（覆寫現行 Warm Editorial）
- **架構升級**：改用 React 18 + 本地預編譯（esbuild），保留 GitHub Pages 純靜態部署
- **保留現有內容**：`content/*.html` 片段零遷移，既有 draft pipeline (`publish.sh`) 繼續運作

---

## 1. 技術棧決策

### 選定：B2 — Pre-compiled JSX

| 組件 | 技術 |
|---|---|
| UI 框架 | React 18.3.1 (UMD production build) |
| JSX 編譯 | esbuild 單一執行檔（本地 `tools/esbuild`）|
| 執行時期載入 | React UMD (≈45KB gzipped) + 編譯後 `dist/app.js` |
| 開發時期 | 直接編輯 `src/components/*.jsx`，執行 `./publish.sh` 編譯 |
| 部署 | GitHub Pages，純靜態（commit `dist/app.js`）|

### 效能預期

- JS 總載入量 ≈ 150KB（vs 現行 ≈ 40KB；vs Babel standalone ≈ 1.3MB）
- 目標 LCP < 1.2s on 4G mid-tier mobile
- 無 runtime JSX 編譯

### 為何選 B2 而非 vanilla / Babel / Next.js

- Vanilla：設計稿 7 個 JSX 檔需全部翻譯回 vanilla，工作量極大
- Babel standalone：runtime 編譯 1.3MB，LCP 嚴重退化，違背「行動優先」原則
- Next.js + Vercel：對一人維護、純靜態衛教站過度設計；AI 內容管線已有 `publish.sh` 跑得穩定
- B2：設計稿 JSX 直接複用，編譯一次輸出靜態檔，同時享受元件化開發

---

## 2. 分類結構（8 + 1）

### 新分類（取代現行 9 類以專科劃分的分類）

實體目錄 `content/{speciality}/*.html` **不搬動**（避免動到所有文章 URL 與 SEO）。
改成**邏輯重新歸屬**：`content.js` 的 `CATEGORIES[].topics[].contentPath` 指向實際檔案位置。

| id | 分類名 | tone | toneCvd | 來源資料夾 |
|---|---|---|---|---|
| `chronic` | 慢性病照護 | `#e89661` | `#E69F00` | `internal/`（高血壓、糖尿病、高血脂、代謝、痛風）|
| `respir` | 感冒與呼吸道 | `#1f8e84` | `#009E73` | `ent/`（鼻竇炎、過敏鼻炎、咽喉逆流）+ `pediatric/`（哮吼、流感）|
| `ortho` | 骨骼關節 | `#d4a82e` | `#B8860B` | （暫空）|
| `gi` | 腸胃保健 | `#d96757` | `#D55E00` | `pediatric/`（腸病毒、諾羅、腺病毒）|
| `kids` | 兒童健康 | `#4a9e94` | `#56B4E9` | `pediatric/`（玫瑰疹、嬰異位皮炎、生長曲線）|
| `senior` | 長者照護 | `#7aa83b` | `#CC79A7` | （暫空）|
| `preventiv` | 預防保健 | `#0e7c7b` | `#0072B2` | `internal/`（代謝症候群、胰島素阻抗）|
| `nutri` | 營養飲食 | `#7aa83b` | `#8E7CC3` | `lifestyle/`（DASH、痛風飲食、血脂解讀）|
| `ent` | 耳鼻喉專科 | `#0e7c7b` | （不變）| `ent/`（中耳炎、BPPV、梅尼爾、耳鳴、OSA、耳蟬噪、鼻出血）|

### 首頁宮格

- **3×3 Grid**（9 格），「耳鼻喉專科」排最後（右下）
- Mega Menu 改 3 欄 × 3 列
- 手機版 3×3 → 兩欄堆疊

### 現有文章分類對應規則

在 `content.js` 的 `CATEGORIES[i].topics` 陣列明確指派：

```js
{
  id: 'respir',
  name: '感冒與呼吸道',
  tone: '#1f8e84',
  toneCvd: '#009E73',
  topics: [
    { id: 'sinusitis', title: '鼻竇炎', summary: '...',
      contentPath: 'content/ent/ent-sinusitis.html' },
    { id: 'croup', title: '哮吼', summary: '...',
      contentPath: 'content/pediatric/pediatric-croup.html' },
    // ...
  ]
}
```

`md_to_html.py` / `publish.sh` 需更新：draft frontmatter 新增 `logical_category` 欄位，決定歸屬哪個新分類（實體檔案仍存放在原 `category` 資料夾下）。

---

## 3. 檔案結構

```
entwebpage/
├── index.html                  ← 改：React 掛載點 + 預編譯產物載入
├── src/                        ← 新增
│   ├── components/
│   │   ├── shared.jsx          ← ClinicMark、Icon.*、Illo.* SVG 集合
│   │   ├── data.jsx            ← 從 window.CATEGORIES / CONFIG 橋接（不重複資料）
│   │   ├── navbar.jsx          ← Navbar + Mega Menu + 手機抽屜
│   │   ├── heroes.jsx          ← HeroBig only（其他版型不進 production）
│   │   ├── sections.jsx        ← Featured / Categories / Latest / Doctors / FAQ / Info / Footer
│   │   ├── pages.jsx           ← ListPage / ArticlePage（整合 content/*.html fetch）
│   │   └── app.jsx             ← App 根元件：hash router、theme/font/cvd 狀態、favorites/recent
│   └── styles/
│       └── main.css            ← 從設計稿 inline style 搬出的全域樣式（或併入 style.css）
├── dist/                       ← 新增：編譯產物，commit 進 git
│   └── app.js                  ← esbuild 輸出
├── css/style.css               ← 保留：reset + CSS 變數（大幅縮減）
├── js/
│   └── content.js              ← 保留但重寫：CONFIG 保留、CATEGORIES 改新 9 分類
├── content/                    ← 完全保留
│   ├── ent/*.html
│   ├── pediatric/*.html
│   ├── internal/*.html
│   └── ...（其他目錄）
├── tools/
│   └── esbuild                 ← 10MB binary，.gitignore 排除，publish.sh 首跑時下載
├── publish.sh                  ← 加 JSX 編譯步驟
├── md_to_html.py               ← 小改：支援 logical_category frontmatter
├── DESIGN.md                   ← 覆寫成新設計系統
├── CLAUDE.md                   ← 更新：B2 技術棧、新分類、新建置流程
├── sw.js                       ← 更新快取清單（新增 dist/app.js, React CDN）
├── robots.txt                  ← 不動
└── sitemap.xml                 ← 由 publish.sh 自動重產（連動分類變更）
```

**刪除：**
- `js/app.js`（1637 行）— 功能全搬進 React
- `package.json` + `node_modules/`（若存在且未使用）
- 現行 DESIGN.md 舊版（整檔覆寫）

---

## 4. 視覺/設計系統覆寫

### DESIGN.md 整檔替換

用設計稿的 347 行 DESIGN.md 覆寫現行 136 行版本。關鍵規格：

### 色票（CSS 變數，寫在 `css/style.css`）

```css
:root {
  /* Brand (Warm Teal × Peach) */
  --teal: #0e7c7b;
  --teal-2: #4a9e94;
  --teal-mist-1: #b4ddd3;
  --teal-mist-2: #9dccc3;
  --teal-mist-3: #8fc3b9;

  /* Accents */
  --peach: #e89661;
  --peach-dark: #e5966a;
  --peach-light: #f2b088;
  --gold: #f2c94c;

  /* Backgrounds */
  --cream-1: #f5faf8;
  --cream-2: #f0f7f4;
  --cream-3: #e4ede9;

  /* Text */
  --fg: #0f2a42;
  --fg-heading: #1a3942;
  --muted: #56706c;
  --muted-2: #6d8481;
  --muted-3: #8aa3a0;

  /* Borders */
  --border-soft: #eaf2ef;
  --border-medium: #d6cfc6;

  /* Sizing */
  --base-size: 16px;
  --max-content: 1200px;
  --max-article: 720px;
}

html.senior { --base-size: 19px; }

[data-theme="dark"] {
  --fg: #e8f0ec;
  --fg-heading: #f5faf8;
  --muted: #9dccc3;
  --bg-primary: #1a2a2c;  /* warm dark, not pure black */
  /* ... 其餘依 DESIGN.md §2.4 */
}

html[data-cvd="on"] {
  --cvd-red: #0072B2;
  --cvd-green: #CC79A7;
  --cvd-amber: #E69F00;
}
```

### 字體載入（`index.html` head）

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet">
```

**移除 LXGW WenKai、Noto Serif TC、JetBrains Mono。**

### Logo

- 頂部 Navbar 顯示 `assets/logo.jpg`（實際 Logo，不換成設計稿的 SVG `<ClinicMark>`）
- 若 JPG 旁邊需要文字標題，依 Navbar 設計：主標「工學誠心診所」+ 副標「GONGXUE FAMILY CLINIC」（Instrument Serif）

### Callout 色塊系統

保留現行 `.callout.callout-*` class，但對應到新色票：

| class | 底色 | 左邊框 |
|---|---|---|
| `.callout-recommend` | rgba(14, 124, 123, 0.08) | `--teal` 4px |
| `.callout-caution` | rgba(232, 150, 97, 0.1) | `--peach-dark` 4px |
| `.callout-danger` | `#fde6e0` | `#c44a2e` 4px |
| `.callout-info` | rgba(74, 158, 148, 0.1) | `--teal-2` 4px |

---

## 5. 元件設計（React）

### `src/components/app.jsx`（根元件）

管四個 localStorage 鍵：

| key | 值 | 套用位置 |
|---|---|---|
| `theme` | `'light'` / `'dark'` | `document.documentElement.dataset.theme` |
| `fontScale` | `'normal'` / `'senior'` | `html.senior` class toggle |
| `cvdMode` | `'on'` / `'off'` | `document.documentElement.dataset.cvd` |
| `gx_route` | `'home'` / `'list'` / `'article'` | hash routing |

額外狀態（保留自 app.js 搬過來的）：

| key | 型別 | 用途 |
|---|---|---|
| `gx_favorites` | `string[]`（topic ids）| 我的收藏 |
| `gx_recent` | `string[]`（topic ids，FIFO 最多 10）| 最近瀏覽 |

**Hash routing 對應**：
- `#/` → home
- `#/{categoryId}` → list（分類文章列表）
- `#/{categoryId}/{topicId}` → article
- `#/favorites` → list（我的收藏）
- `#/recent` → list（最近瀏覽）
- `#/contact` → contact 頁或 InfoSection 錨點

### Home 頁組成（依 DESIGN.md §5，移除 Tweaks 面板）

```
<Navbar/>
<HeroBig/>                 (big 版型，插畫拼貼；移除 search/categories 版型)
<FeaturedSection/>         (1 大 + 2 小，大卡為桃橘漸層)
<CategoriesSection/>       (3×3 宮格)
<LatestSection/>           (最新 6 篇)
<DoctorsSection/>          (佔位資料，TODO)
<FaqSection/>              (佔位資料，TODO)
<InfoSection/>             (門診時間 + 聯絡表單，佔位 TODO)
<Footer/>
<A11yFab/>                 (CVD toggle，左下浮動)
```

### ListPage（`#/{categoryId}`、`#/favorites`、`#/recent`）

- 左側：分類 sidebar（可篩選）
- 右側：文章卡片列表
- 行動版：sidebar 置頂

### ArticlePage（`#/{categoryId}/{topicId}`）

- 單欄閱讀，最大寬 720px
- 右側：浮動 TOC（桌機），隱藏（平板/手機）
- 內容載入：`useEffect + fetch(contentPath) + setInnerHtml`
- 首次進入時：加入 `gx_recent` FIFO，更新 meta 標籤與 JSON-LD
- 收藏按鈕：toggle `gx_favorites`

### Navbar 右側控制項

從左到右：
1. 主題切換（🌓 明/暗）
2. 字級切換（A 小 / A 大）— 2 段
3. 我的收藏（❤ + 數量徽章）
4. LINE 預約 CTA（綠底藥丸）

---

## 6. Accessibility 功能

### 雙段字級（取代現行三段）

- `normal`: `--base-size: 16px`
- `senior`: `--base-size: 19px` + 關閉 letter-spacing + 按鈕 padding 放大

### CVD 色弱模式

- 左下浮動 FAB（隨時可見，不受任何面板控制）
- `<html data-cvd="on">` 觸發 CSS 屬性選擇器切換
- CATEGORIES 用 Proxy 包裝，讀 `.tone` 時依 `data-cvd` 回傳 `toneCvd`
- 血壓/紅綠燈表使用形狀冗餘（▲ ■ ●）+ 文字標籤，不單靠顏色

### Dark mode

- `<html data-theme="dark">` 觸發暖深色調（非純黑，依 DESIGN.md §2.4）
- 預設亮色（診間展示 + 多數衛教閱讀情境）
- Navbar 右側 icon 切換

### 移除

- 三段字級 (`font-xlarge` 獨立等級)
- `theme` 之外的多主題 class

---

## 7. 建置與發佈流程

### publish.sh 新增流程

```bash
# 首次跑時自動下載 esbuild（根據 OS）
ensure_esbuild() {
  if [[ ! -x ./tools/esbuild ]]; then
    mkdir -p tools
    case "$(uname -s)" in
      Linux*)   URL="https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz" ;;
      Darwin*)  URL="https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz" ;;
      *)        echo "不支援的 OS，請手動安裝 esbuild"; exit 1 ;;
    esac
    curl -fsSL "$URL" | tar -xz -C tools --strip-components=2 package/bin/esbuild
    chmod +x ./tools/esbuild
  fi
}

# 編譯 JSX
compile_jsx() {
  ./tools/esbuild \
    src/components/app.jsx \
    --bundle \
    --outfile=dist/app.js \
    --loader:.jsx=jsx \
    --format=iife \
    --target=es2020 \
    --minify \
    --external:react --external:react-dom \
    --define:process.env.NODE_ENV=\"production\"
}

# 所有 publish 指令前都跑 ensure_esbuild + compile_jsx
```

新增指令：
- `./publish.sh --build`：只編譯 JSX，不動內容
- `./publish.sh --dev`：起本地 server 並 watch JSX 變更（esbuild watch mode）

### index.html 載入

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin></script>
<script src="./js/content.js"></script>
<script src="./dist/app.js"></script>
```

（React 透過 UMD 注入 window，esbuild 以 `--external` 排除不打包，減小 dist 體積）

### Service Worker 更新

`sw.js` 快取清單新增：
- `./dist/app.js`
- React / ReactDOM CDN URL（用 stale-while-revalidate）

---

## 8. 現行功能處置

| 功能 | 處置 | 備註 |
|---|---|---|
| Hash routing | 保留 | 移進 React |
| `content/*.html` 片段 fetch | 保留 | React `useEffect` |
| SEO meta / JSON-LD 動態更新 | 保留 | 路由變更時觸發 |
| Service Worker | 保留 | 更新快取清單 |
| Formspree 聯絡表單 | 保留 | 放在 InfoSection |
| Dark mode | 保留 | 暖深色調 |
| 字級三段 → 雙段 | **改** | normal / senior |
| i18n（zh-TW/en/vi）| **擱置** | 不進本次 refactor，字串目前只用 zh-TW |
| 收藏 | **保留** | `gx_favorites` localStorage |
| 最近瀏覽 | **保留** | `gx_recent` localStorage |
| 列印功能 | **移除** | |
| TTS 語音朗讀 | **移除** | |
| 閱讀確認 Quiz | **移除** | |
| 滿意度評分 | **移除** | |
| 公告橫幅 | **移除** | |

### 設計稿的 Tweaks 面板

**完全移除**。設計稿的 Tweaks 是設計師迭代工具，非使用者功能。保留的部分（字級 / CVD / 主題）改做成 Navbar / FAB 的正式 UI 元件。

### 設計稿的 Hero 三版型

**只保留 HeroBig**。search / categories 版型不進 production（`heroVariant` state 不存在）。

### 設計稿的 DOCTORS / FAQS / HOURS

**用佔位資料**（TODO 標記），您日後在 `content.js` 更新實際內容即可：

```js
// content.js 新增
const DOCTORS = [
  { id: 'doc-1', name: '張XX 醫師', title: '院長', specialty: '耳鼻喉科', photo: null,
    bio: '（TODO：請填寫醫師學經歷）' },
  // ...共 4 筆佔位
];

const FAQS = [
  { id: 'faq-1', q: '看診需要預約嗎？', a: '（TODO：請填寫實際答覆）' },
  // ...共 6 筆佔位
];

const HOURS = [
  { day: '週一', morning: '08:30-12:00', afternoon: '14:30-17:30', evening: '18:30-21:00' },
  // ...共 7 天，TODO 標記
];
```

---

## 9. 內容管線調整

### draft frontmatter 新增欄位

現行：
```yaml
---
category: pediatric      # 實體資料夾
slug: roseola
title: 玫瑰疹
---
```

新增：
```yaml
---
category: pediatric                # 實體資料夾（不變，決定檔案位置）
logical_category: kids             # 新增：決定在網站上歸屬哪個新分類
slug: roseola
title: 玫瑰疹
---
```

### md_to_html.py 更新

- 讀取 `logical_category`，若缺省則報 warning（或 fallback 到 `category`）
- 更新 `content.js` 時，把 topic 寫進 `logical_category` 對應的 `CATEGORIES[i].topics`

### publish.sh --all 批次轉換

新流程：
1. 確認 esbuild 存在（首次下載）
2. 編譯 JSX → `dist/app.js`
3. 轉換所有 drafts
4. 重產 sitemap.xml

---

## 10. 實作順序（供 writing-plans 參考）

預計分這幾個階段：

1. **基礎建設**：下載 esbuild、建立 `src/components/` 目錄、`publish.sh` 加編譯步驟
2. **DESIGN.md 覆寫**：刪舊版，寫入設計稿版本
3. **content.js 改寫**：新 9 分類、加 DOCTORS/FAQS/HOURS 佔位
4. **CSS 重建**：新色票變數、新字體、callout 系統
5. **React 骨架**：app.jsx + Navbar + Footer（先能渲染一個空頁面）
6. **Hero + 首頁 sections**（Featured / Categories / Latest / Doctors / FAQ / Info）
7. **ListPage + ArticlePage**：整合 content/*.html 載入、SEO meta 更新
8. **A11y**：Dark mode、senior 字級、CVD FAB、收藏、最近瀏覽
9. **Service Worker 更新**：新快取清單
10. **CLAUDE.md 更新**：記錄新架構
11. **內容遷移**：把每篇文章正確歸到新 9 分類
12. **QA**：桌機 / 平板 / 手機三斷點、Dark mode、CVD mode、各路由

---

## 11. 風險與折衷

| 風險 | 處置 |
|---|---|
| 實體目錄 `content/{speciality}/` 與邏輯分類不一致，日後維護混淆 | 在 CLAUDE.md 與 DESIGN.md 明文說明對應關係 + draft frontmatter 強制 `logical_category` |
| esbuild binary 10MB commit 進 git 會膨脹 repo | 放 `.gitignore`，publish.sh 首次執行自動下載 |
| React UMD 從 CDN 載入，CDN 斷線時網站壞 | Service Worker 快取 React UMD |
| i18n 字串（en/vi）目前在 content.js，重構後先放著但不用 | 保留 `CONFIG.i18n` 結構，日後可接回 |
| 現行 `assets/logo.jpg` 尺寸可能不適合新 Navbar | 實作時確認，若不合再提 |
| 既有 URL hash pattern（`#/{categoryId}/{topicId}`）改變可能影響 SEO | 保留完全相同 pattern，category id 改變需在 sitemap.xml 同步更新 |
| 現有 content 連結散落在多處（article 內文互連？）需檢查 | 實作階段用 grep 掃過所有 `href="#/"` |

---

## 12. 非本次 scope

以下明確**不做**：
- 多語系 i18n 切換 UI（保留 CONFIG.i18n 結構但不啟用）
- 病患預約系統、線上問診
- 搜尋功能（設計稿的 HeroSearch 版型不啟用）
- 實際醫師 / FAQ / 門診時間資料填寫（使用者日後自行填）
- 圖片 srcset / WebP 自動優化
- 舊內容 URL redirect（既有 hash pattern 不變，無需 redirect）

---

## 13. 完成標準

- [ ] `./publish.sh --build` 成功輸出 `dist/app.js`
- [ ] `./publish.sh --serve` 在 localhost:8000 能渲染新首頁（HeroBig + 3×3 宮格）
- [ ] 既有 `#/ent/ent-otitis` 等路由仍可顯示舊文章內容
- [ ] 切換 dark mode / senior mode / CVD mode 皆生效且持久化
- [ ] 桌機 / 平板（≤1023px）/ 手機（≤639px）三斷點無 overflow
- [ ] Lighthouse 行動版分數：Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95
- [ ] Service Worker 成功快取所有新資源
- [ ] CLAUDE.md、DESIGN.md 皆已同步更新

---

_本 spec 待使用者審閱後進入 writing-plans skill 產出實作計畫。_
