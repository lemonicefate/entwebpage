# 工學誠心診所 · 衛教專區 — 設計規格書

> 這份文件記錄此衛教 SPA 的設計系統、決策脈絡與修改指南。
> 任何視覺 / UI 調整都應先閱讀此文以確保一致性。
>
> **架構備註**：本檔早期版本是寫給「單檔 Babel」原型；目前已遷移為 `index.html` + esbuild 編譯
> （見 §1 檔案結構），下方 §2 色票 / §3 字體 / §4 間距 / §7 a11y / §11 響應式仍是單一事實來源。

---

## 0. 產品定位

- **目標使用者**:社區診所患者,年齡跨度大(青壯年 → 長輩),需在看診前後自學衛教知識。
- **核心目標**:讓患者能快速找到「我的症狀該怎麼辦」、「醫師在看診時講的,我回家再複習一次」。
- **語氣**:溫暖、專業、平實。醫師不是神壇上的,而是鄰里家庭醫師。
- **不做**:華麗特效、AI 味濃厚的漸層堆疊、無意義的資訊圖表。

---

## 1. 檔案結構

```
index.html                    ← 入口、CDN 載入 React/DOMPurify、引用 dist/app.js
src/styles/main.css           ← CSS 變數系統（:root / [data-theme] / .senior / [data-cvd]）
src/components/
  shared.jsx                  ← Icon.* SVG、ClinicMark、共用小元件
  data.jsx                    ← 從 window.CATEGORIES / DOCTORS / FAQS 等讀取資料的 helper
  navbar.jsx                  ← TopStrip、Navbar、Mega Menu、漢堡選單
  heroes.jsx                  ← HeroBig / HeroSearch / HeroCategories
  sections.jsx                ← SectionHeader / FeaturedSection / CategoriesSection /
                                LatestSection / DoctorsSection / FaqSection /
                                InfoSection / Footer / HomePage
  pages.jsx                   ← ListPage、ArticlePage、Contact、SafeHtml（DOMPurify 清洗）
  app.jsx                     ← 根元件，hash router、theme/fontScale/cvdMode/favorites/recent state
js/content.js                 ← 資料層：CONFIG / CATEGORIES / DOCTORS / FAQS / HOURS（純資料）
content/{categoryId}/         ← 衛教文章 HTML 片段，按分類資料夾存放
dist/app.js                   ← esbuild 編譯輸出（commit 進 git，GitHub Pages 直接服務）
tools/esbuild                 ← 編譯工具（首次執行 publish.sh 自動下載，.gitignore 排除）
publish.sh                    ← 內容管線入口：草稿轉換、JSX 編譯、本地預覽
DESIGN.md                     ← (本檔)
```

**載入順序**（`index.html` 內）：`js/content.js`（定義 window 全域資料）→ React UMD（CDN）→ DOMPurify UMD（CDN）→ `dist/app.js`。
**元件分享**：每個 JSX 檔末尾用 `Object.assign(window, {...})` 掛全域，`app.jsx` render 時從 window 解構取用。

---

## 2. 色彩系統

### 2.1 主色(Warm Teal × Peach)

| 角色 | Hex | 說明 |
|---|---|---|
| Primary Teal `--teal` | `#0e7c7b` | 按鈕、品牌文字、重點連結 |
| Teal 2 `--teal-2` | `#4a9e94` | 次強調、Eyebrow 小標、Logo 副標 |
| Teal mist | `#b4ddd3` / `#9dccc3` / `#8fc3b9` | HeroSearch 的漸層背景 |
| 深藍字色 `--fg` | `#0f2a42` | 預設正文 |
| 標題深色 | `#1a3942` | H1、H2、標題專用,比 `--fg` 再重一些 |
| Muted `--muted` | `#56706c` | 敘述文字、metadata |
| 輔助灰 | `#6d8481` / `#8aa3a0` / `#435754` | 多層 muted |

### 2.2 強調色(Warm 系)

| 角色 | Hex | 說明 |
|---|---|---|
| 黃(Primary Accent) | `#f2c94c` | Logo 十字、focus outline、季節標、CTA 點綴 |
| 桃橘 | `#f2b088` / `#e5966a` | Hero 前景卡、FeatureCardLarge 背景 |
| 奶油底 | `#f5faf8` / `#f0f7f4` / `#e4ede9` | 段落淺色分區、Card 內部淺底 |

### 2.3 十大分類色票(CATEGORIES.tone)

這組顏色是「類別識別」,不得任意修改。色票定義於 `js/content.js` 的 `CATEGORIES` 陣列，每個分類有 `tone` 與 `toneCvd` 兩組色，CVD 模式下自動切換到右欄：

| id | 分類名 | 預設 tone | CVD safe `toneCvd` |
|---|---|---|---|
| `chronic` | 慢性病管理 | `#e89661` 橘 | `#E69F00` amber |
| `allergy` | 過敏免疫 | （見 `js/content.js`） | （見 `js/content.js`） |
| `infect` | 感染症 | `#1f8e84` 深青 | `#009E73` 翠綠 |
| `ortho` | 骨骼關節 | `#d4a82e` 金黃 | `#B8860B` 深金 |
| `gi` | 腸胃保健 | `#d96757` 磚紅 | `#D55E00` 朱紅橘 |
| `kids` | 兒童健康 | `#4a9e94` 青綠 | `#56B4E9` 天空藍 |
| `senior` | 長者照護 | `#7aa83b` 草綠 | `#CC79A7` 桃紫 |
| `preventiv` | 預防保健 | `#0e7c7b` 品牌綠 | `#0072B2` 深藍 |
| `nutri` | 營養飲食 | `#7aa83b` 草綠 | `#8E7CC3` 薰衣草 |
| `ent` | 耳鼻喉 | （見 `js/content.js`） | （見 `js/content.js`） |

> 新增分類時：在 `js/content.js` 的 `CATEGORIES` 加 `tone` 與 `toneCvd`，並回填本表。

**通用使用規則**:
- 色票只用在該分類的識別元素:圖示襯底(`${tone}12` = 7% alpha)、分類標籤文字、分類 badge 背景
- **不得用於正文或大面積背景**(避免色彩壓過內容)
- 透明度慣例:`${tone}10` / `${tone}12` / `${tone}15` 用於淡底,實色用於文字或 badge

### 2.4 紅綠燈醫療狀態色(血壓表)

| 等級 | 背景 | 文字 | 形狀冗餘 |
|---|---|---|---|
| 綠(正常) | `#e7f5ef` | `#1a7a4a` | ● 圓 |
| 黃(注意) | `#fdf4d9` | `#a07a14` | ■ 方 |
| 紅(就醫) | `#fde6e0` | `#c44a2e` | ▲ 三角 |

> 開啟 CVD 模式時,紅背景 → `#e6f0fb`(淺藍)、綠背景 → `#f7e9f3`(淺桃紫),
> 色票文字自動切換;形狀永遠可見,即使完全不看顏色也能判讀。

---

## 3. 字體系統

### 3.1 字族
- 正文:`Noto Sans TC`(繁體中文主要字體)+ 英數 fallback `-apple-system / PingFang TC / Microsoft JhengHei`
- 襯線(少用,僅 Logo 英文副標):`Instrument Serif`
- 權重:400 / 500 / 600 / 700(只用這四個,不得引入其他)

### 3.2 字級層次(桌機)
| 用途 | 大小 | 權重 | letter-spacing |
|---|---|---|---|
| Hero H1 | `clamp(40px, 5vw, 56px)` | 700 | `-0.01em` |
| Section H1 / 大標 | 36–42px | 700 | `-0.01em` |
| Card 標題 H3 | 20–26px | 700 | `-0.005em` |
| 正文大 | 17–18px | 400 | 0 |
| 正文 | 15–16px | 400 | 0 |
| Metadata / 小標 | 12–13px | 500–600 | `0.08em`–`0.15em`(uppercase eyebrow) |
| 最小字 | 11px | 600 | 小標頂框專用 |

### 3.3 長輩友善模式
`html.senior` → `--base-size: 19px`(整體放大 + 關閉 letter-spacing);由 navbar 字體切換按鈕觸發,狀態存於 localStorage `fontScale`。

### 3.4 行高
- 正文:`1.65`–`1.7`
- 標題:`1.15`–`1.35`
- Card 敘述:`1.5`–`1.55`

---

## 4. 間距 & 圓角

### 4.1 圓角
- 大型容器(Hero 前景卡、FeatureCardLarge):`20–22px`
- 一般卡片:`14–18px`
- 小元件(按鈕 icon box、tag):`8–12px`
- 藥丸按鈕 / chip:`999px`
- Badge 小方塊:`4px`

### 4.2 間距節奏
- Section 上下:`80–96px`(大型 section)、`56–64px`(較緊湊)
- Section 內 heading 與內容:`32–40px`
- Card 內 padding:`22–32px`
- Grid gap:`20–28px`

### 4.3 陰影
- 柔浮卡:`0 10px 22px -14px rgba(15,42,66,0.18)`
- 重要浮出:`0 16px 30px -20px rgba(15,42,66,0.2)`
- Hero 前景卡:`0 24px 44px -20px rgba(229,150,106,0.5)`

---

## 5. 版面總覽

首頁由上往下:
1. **TopStrip**(navbar.jsx):地址、電話、營業狀態;淺霧綠漸層底
2. **Navbar**:Logo / 主導覽(含 Mega Menu)/ LINE 預約 CTA
3. **Hero**(三選一版型):
   - `big` 大圖 × 插畫拼貼(預設)
   - `search` 搜尋優先(青霧漸層底 + 中央大搜尋框)
   - `categories` 分類優先(熱門問題 + 八大主題縮圖)
4. **FeaturedSection**:1 大 + 2 小卡;大卡為桃橘漸層(FeatureCardLarge)、兩張小卡為白底配圖
5. **CategoriesSection**:八宮格主題卡片(用 CATEGORIES tone 作 icon 淺底)
6. **LatestSection**:最新文章列表(左側 filter、右側卡片 row)
7. **DoctorsSection**:醫師團隊
8. **FaqSection**:六題常見問答,手風琴展開
9. **InfoSection**:門診時間表 + 聯絡資訊(淺綠底 + 白卡)
10. **Footer**:極淺綠漸層

單篇文章頁(ArticlePage)採「單欄閱讀 + 右側浮動目錄」,最大寬 720px。

---

## 6. 元件規則

### 6.1 按鈕
- **Primary**(teal 實心藥丸):品牌綠 `#0e7c7b` + 白字 + 右內陰高光
- **Secondary**(白藥丸):白底 + 深藍字 + 邊線
- **LINE CTA**:保持 LINE 官方綠 `#06C755`,非品牌色(不得改)
- 最小點擊面積:44px 高(長輩友善模式放更大)

### 6.2 卡片
- 預設白底 + 淺陰影 + hover 上浮 3px + 加深陰影
- `border-radius: 16–20px`
- 圖文卡上方放類別 eyebrow(`tone` 色 + 12% 底),下方分隔線以 `#eaf2ef` 為主
- 日期/作者固定擺 card 底部,分隔線 `#eaf2ef` 或 `rgba(255,255,255,0.18)`(深底卡)

### 6.3 Logo 規則(`<ClinicMark>`)
- 十字符號填 `#f2c94c` 黃;右上角小點 `#e89661` 橘
- 副標「GONGXUE FAMILY CLINIC」→ 色 `#4a9e94` + `letter-spacing: 0.18em`

### 6.4 圖示(Icon.*)
- 全數來自 `shared.jsx`,stroke-based(非 filled),`stroke-width: 1.5–2`
- 使用 `currentColor`,靠 parent 設色
- **禁止使用 emoji 代替圖示**(除非已做形狀冗餘且有明確語意)

---

## 7. 無障礙(A11y)

### 7.1 色弱友善模式(CVD Mode)
**觸發方式**:
- 左下角固定浮動 FAB「色弱友善模式」(隨時可見);狀態存於 localStorage `cvdMode`,寫入 `<html data-cvd="on">`

**運作機制**:
1. `<html>` 加上 `data-cvd="on"` 屬性
2. `CATEGORIES` 是 Proxy array,每次讀 `.tone` 時會檢查 `data-cvd`,on 時回傳 `toneCvd`
3. CSS 屬性選擇器 `html[data-cvd="on"] [data-cvd-tone="red"]` 等,處理血壓紅綠燈表等寫死 hex 的 inline style
4. 形狀冗餘(▲ ■ ●)永遠可見,不依賴 CVD 模式

**選擇 Okabe–Ito 調色盤的原因**:這套八色調色盤是色覺研究學界公認的 CVD-safe palette,在 protanopia / deuteranopia / tritanopia 三種色盲下都能靠 hue + luminance 雙軸分辨。

### 7.2 其他 A11y
- Focus outline:`2px solid #f2c94c` + `outline-offset: 2px`(所有可聚焦元素)
- 文字對比:正文 `#0f2a42` on `#fff` > 15:1,muted `#56706c` on `#fff` ≈ 7:1(AA Large 通過)
- 可調字級(長輩友善模式)
- Button/Link 皆有 `aria-pressed` / `aria-label`(FAB 已加)

---

## 8. ~~Tweaks(在地編輯)~~（已移除）

> 早期單檔原型有右下「Tweaks」面板可切換 hero 版型 / showDoctors / showSeasonal，
> 遷移到 SPA 後已拿掉。目前可由使用者切換的設定僅剩三個無障礙模式（`theme` / `fontScale` / `cvdMode`），
> 都存於 localStorage（見 §9）。Hero 版型 / showDoctors 等已固定在原始碼，不再執行期可調。

---

## 9. 導覽與資料結構

### 9.1 Route（hash-based，由 `app.jsx` 的 `parseHash()` 解析 `window.location.hash`）

| Hash | 頁面 |
|---|---|
| `#/` 或空 | 首頁 |
| `#/{categoryId}` | 該分類文章列表 |
| `#/{categoryId}/{topicId}` | 單篇文章 |
| `#/doctors` | 醫師介紹 |
| `#/favorites` | 我的收藏（讀 `gx_favorites` localStorage） |
| `#/recent` | 最近瀏覽（讀 `gx_recent` localStorage，FIFO 最多 10 筆） |
| `#/contact` | 聯絡我們（Formspree 表單） |

`hashchange` 監聽器收到變化時 `setHashState(parseHash()) + scrollTo(0,0)`。SEO 端透過 `updateMeta()` / `updateJsonLd()` 在每次切換時更新 `<title>` / `<meta description>` / FAQPage JSON-LD。

### 9.2 內容資料（`js/content.js`）
- `CONFIG` — 診所基本資料、聯絡資訊、Formspree endpoint；空字串 = 待填 TODO
- `CATEGORIES` — 十大邏輯分類，每個 `{id, name, icon, tone, toneCvd, topics[]}`，`topics` 只含 metadata（`{id, title, summary, lastUpdated, contentPath}`），HTML 內容由 `pages.jsx` `fetch()` 按需載入
- `DOCTORS` — 醫師列表（`#/doctors` 頁渲染）
- `FAQS` — 首頁 FAQ section
- `HOURS` — 門診時間表（首頁 InfoSection）

---

## 10. 修改時的檢查清單

做改動前先問:
- [ ] 是否破壞 warm-teal × peach 調性?新增色有沒有先列入 §2?
- [ ] 新元件是否照 §4 圓角 / 陰影規則?
- [ ] 是否動到 CATEGORIES tone 數值?動了要同步更新 `toneCvd` 與本文件 §2.3
- [ ] 寫死紅綠色 hex 時,有沒有加 `data-cvd-tone` 屬性 + 形狀冗餘?
- [ ] 有沒有新增 emoji?原則上不允許,除非有形狀冗餘 + 明確語意
- [ ] 如果加入新 section,是否更新 §5 版面總覽?
- [ ] 是否在 `src/styles/main.css` 而非 inline style 加入新樣式?
- [ ] 新加的 grid / flex 容器,有沒有掛對應的 `r-*` className,並在 HTML `<style>` 補媒體查詢?(§11)
- [ ] 新 section 需要加 `r-section`,新卡片容器需要加對應 `r-*-grid` 以便手機降階

---

## 11. 響應式設計(Responsive)

網站採「Desktop First + 兩段降階」的斷點策略,所有響應式規則集中於
`src/styles/main.css`,JSX 元件只負責掛 className,不寫 inline 的 media query。

### 11.1 斷點

| 名稱 | 寬度 | 行為概覽 |
|---|---|---|
| Desktop | `≥ 1024px` | 原始多欄佈局;插畫、TOC、Mega Menu 完整顯示 |
| Tablet | `≤ 1023px` | 主導覽收為漢堡選單;Hero 插畫隱藏;Grid 從 3–4 欄降為 2 欄 |
| Mobile | `≤ 639px` | 幾乎全部降為單欄;字級微縮;A11y FAB 字級縮小 |

### 11.2 響應式 className 一覽

元件在掛 className 時不寫樣式,樣式全部在 HTML 的 media query 裡。這樣才能透過 `!important` 覆蓋 JSX 的 inline `style`。

| className | 用途 | 寫在哪個元件 |
|---|---|---|
| `.container` | 內寬 1200px + 水平 padding | 所有 section |
| `.r-section` | 大 section 上下留白降階 | Featured / Categories / Latest / Doctors / FAQ / Info |
| `.r-nav-grid` / `.r-nav-primary` / `.r-nav-topstrip` / `.r-nav-hamburger` | Navbar 桌機主導覽 ↔ 漢堡 | `navbar.jsx` |
| `.r-cta-cluster` / `.r-cta-text` / `.r-cta-search` | CTA 按鈕組合(手機省略搜尋 icon) | Navbar |
| `.r-logo-title` / `.r-logo-sub` | Logo 文字在手機收為單行 | Navbar |
| `.r-hero-grid` / `.r-hero-illus` / `.r-hero-stats` / `.r-hero-h1` / `.r-hero-p` | HeroBig 內欄位 | `heroes.jsx` HeroBig |
| `.r-hero-pad` / `.r-hero-search` / `.r-hero-search-flex` | HeroSearch 搜尋框 | HeroSearch |
| `.r-hero-search-top` / `.r-hero-search-cat-grid` | HeroCategories 上下區塊 | HeroCategories |
| `.r-feat-grid` / `.r-feat-big` / `.r-feat-med` | 精選 1 大 + 2 小 → 單欄 | `sections.jsx` FeaturedSection |
| `.r-cat-grid` / `.r-cat-tile` / `.r-cat-tile-name` / `.r-cat-tile-desc` / `.r-cat-tile-arrow` | 八大分類卡片 | CategoriesSection |
| `.r-latest-grid` | 最新文章 3 欄 → 2 → 1 | LatestSection |
| `.r-docs-grid` | 醫師 4 欄 → 2 → 1 | DoctorsSection |
| `.r-faq-grid` | FAQ 兩欄 → 單欄,sticky 解除 | FaqSection |
| `.r-info-grid` | Info 兩欄 → 單欄 | InfoSection |
| `.r-tl-row` | 血壓紅綠燈 table 行 | InfoSection 中的血壓表 |
| `.r-footer-grid` | Footer 4 欄 → 2 → 1 | Footer |
| `.r-list-grid` / `.r-list-sidebar` / `.r-list-card` | 文章列表頁 | `pages.jsx` ListPage |
| `.r-article-grid` / `.r-article-toc` / `.r-article-body` / `.r-article-pad` / `.r-article-h1` / `.r-article-hero-grid` | 文章頁 | ArticlePage |
| `.r-section-head-title` | SectionHeader 大標字級 | `sections.jsx` SectionHeader |
| `.a11y-fab` | 左下 A11y FAB（CVD 切換） | `app.jsx` 根層 |

### 11.3 降階行為

**Tablet(≤ 1023px)**
- Navbar:主導覽與 TopStrip 隱藏,顯示漢堡;Logo 副標在極窄時可能換行(交由 flex-wrap 處理)
- Hero:grid 從 `1.05fr 1fr` 改為 `1fr`,插畫收合(`r-hero-illus { display: none }`)
- Hero 統計(140+ / 8 / 12 年):`flex-wrap: wrap` 並擴展 gap
- 分類卡(CATEGORIES)4 → 2 欄
- Latest 3 → 2 欄,第 5 張起加上上邊線避免孤行
- 醫師 4 → 2 欄
- FAQ 左欄(sticky 標題)解除 sticky,與右欄依序堆疊
- 血壓紅綠燈表 `r-tl-row`:第 4 欄(建議)掉到下一列並左縮

**Mobile(≤ 639px)**
- `html { font-size: 15px }` 全域微縮
- Hero 主標 `.r-hero-h1` 降為 32px
- 所有主要 grid 改為單欄(精選、最新、醫師、Footer)
- 分類卡內的敘述與箭頭箭頭隱藏,只保留 icon + 名稱 + 計數
- Footer 欄位 2 → 1 欄
- A11y FAB 字級縮小,維持左下浮動
- HeroSearch 搜尋框:輸入框獨佔一行,按鈕與搜尋 icon 併排下方
- 文章頁 H1 降為 26px,hero 圖文網格單欄

### 11.4 維護原則

1. **JSX 裡不要寫 `@media`**:所有斷點規則都放在 HTML 的 `<style>`,才能集中管理。
2. **要降階就加 className,並在 HTML `<style>` 補規則**:不要嘗試在 inline style 做條件判斷。
3. **降階優先刪除而非壓縮**:插畫、TOC、分類卡敘述這種「非必要」元素直接 `display: none`,不要硬塞。
4. **小於 44px 的點擊區域不允許**:手機斷點下 button / link padding 要維持足夠的觸控區。
5. **Logo 不得裁切**:Navbar 採 `gridTemplateColumns: auto 1fr auto`,讓 Logo 與 CTA 靠邊,中間區域彈性收縮。
6. **手機版不改變資訊架構**:導覽隱去不代表砍掉功能,漢堡選單內容須與桌機一致(Mega Menu 子項全數保留)。

---

## 12. 已知設計取捨(design debt)

- **LINE CTA 用 LINE 官方綠**:與 teal 稍有衝突,但品牌辨識度優先
- **HeroBig 右側插畫拼貼**:目前是 SVG + 漸層卡,未來若換實照片要保留同樣旋轉角度與陰影
- **Proxy 方式處理 CVD**:能運作於 React 因為 cvdMode 改變會觸發 App re-render,子元件重讀 tone;若未來有 memoized 元件切斷依賴鏈,需改為 Context 傳遞
- **文章頁 TOC 目前是靜態**:尚未 scroll-spy,已列為 follow-up
- **搜尋按鈕目前只 fallback 回首頁**:未接上實際搜尋

---

_最後更新:隨程式碼同步;修改 `components/*.jsx` 請一併維護本文件對應章節。_
