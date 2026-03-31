# Design System — 誠心醫療體系工學診所衛教專區

## Product Context
- **What this is:** 病人衛教 SPA 網站，供病患自行瀏覽了解疾病衛教，同時透過 SEO 曝光吸引不認識診所的民眾
- **Who it's for:** 一般民眾與病患（主要在手機上自行閱讀），不需要醫師在旁解釋
- **Space/industry:** 醫療衛教，台灣地區耳鼻喉科 / 內科 / 婦科 / 小兒科診所
- **Project type:** 單頁應用（SPA），純靜態，hash routing
- **Key priority:** 行動裝置體驗優先（Mobile-first），SEO 曝光，內容自解釋性

## Aesthetic Direction
- **Direction:** Warm Editorial（溫暖編輯風）
- **Decoration level:** Intentional — 微妙的紋理感，淡淡的紙質底色，有溫度但不花俏
- **Mood:** 像一本精心排版的健康雜誌，在手機上隨時翻閱。專業但不冰冷，有人情味但不隨便。「被照顧」的感覺而不是「在醫院」的感覺。行動裝置上的閱讀體驗是第一優先。
- **Reference sites:** Mayo Clinic（結構參考）、NHS UK（callout 色塊模式）、Cleveland Clinic（分類導航）

## Typography
- **Display/Hero:** Noto Serif TC — 宋體傳達權威感與可信度，中文醫療語境的標準選擇
- **Body:** LXGW WenKai（霞鶩文楷）— 開源楷書風格字型，比黑體溫暖、比傳統楷書更現代。注意：中文字型檔較大，需使用子集化或分片載入策略以確保行動裝置上的 LCP 表現。備用字型 Noto Sans TC 確保快速渲染。
- **UI/Labels:** Noto Sans TC（思源黑體）— 乾淨精確的 UI 字型，用於導航、按鈕、標籤、breadcrumb
- **Data/Tables:** JetBrains Mono — 等寬字型，用於劑量、體溫、血壓等數據展示，支援 tabular-nums
- **Code:** JetBrains Mono
- **Loading:** Google Fonts (Noto Serif TC, Noto Sans TC, JetBrains Mono) + jsDelivr CDN (LXGW WenKai)
- **Scale:**
  - h1: 1.9em (約 32px)
  - h2: 1.4em (約 24px)
  - h3: 1.1em (約 19px)
  - body: 17px
  - small: 14px
  - xs: 12px
  - line-height: 1.85

## Color
- **Approach:** Warm Balanced — 品牌四色 + 暖色中性色取代冷灰

### Brand Colors (from Logo)
- **Navy:** #1D3B72 — 品牌海軍藍，Logo「誠心醫療體系」文字色，用於頁面標題
  - navy-deep: #162E59
- **Blue:** #3080C4 — Logo 房屋外框藍，用於漸層色帶、資訊提示
  - blue-light: #5298D0
- **Teal:** #2BAD9D — Logo 醫療十字青綠，互動主色（連結、active 狀態、按鈕）
  - teal-light: #4DC2B4
  - teal-soft: #7DD4C8
  - teal-pale: rgba(43, 173, 157, 0.08)
  - teal-deep: #1B7568
- **Orange:** #EF6028 — Logo 圓點橙紅，CTA 主色、注意提示
  - orange-light: #F07A44
  - orange-pale: rgba(239, 96, 40, 0.08)

### Warm Neutrals
- **bg-primary:** #FDFBF7 — 暖白（奶油色），取代純白
- **bg-secondary:** #F8F5EF — 暖米色
- **bg-sidebar:** #FAF8F3
- **bg-topbar:** #FFFFFF
- **bg-card:** #FBF9F4
- **bg-card-hover:** #F5F2EB
- **text-primary:** #2D2A26 — 暖深灰
- **text-secondary:** #6B6560 — 暖灰
- **text-muted:** #9E9690
- **border-light:** #E8E2DA — 暖米邊框
- **border-medium:** #D6CFC6
- **border-hover:** #C4BCB2

### Semantic Colors
- success: #2BAD9D (teal) / bg: #F0FAF8
- warning: #EF6028 (orange) / bg: #FEF6F2
- error: #D94452 / bg: #FDF2F3
- info: #3080C4 (blue) / bg: #F0F6FC

### Shadows (warm-tinted)
- shadow-sm: 0 1px 3px rgba(45, 42, 38, 0.06)
- shadow-md: 0 4px 12px rgba(45, 42, 38, 0.08)
- shadow-lg: 0 8px 28px rgba(45, 42, 38, 0.10)
- shadow-card: 0 1px 4px rgba(45, 42, 38, 0.05)
- shadow-card-hover: 0 6px 20px rgba(43, 173, 157, 0.10)

### Dark Mode Strategy
- 背景轉為暖深色調（#1A1714 系）而非純黑
- 品牌色微調提高深色背景上的可見度
- Teal: #3EC4B5, Orange: #F07848, Navy: #6B8EC4
- 減少對比度以降低眼睛疲勞

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable on desktop, Compact on mobile — 桌面版寬鬆閱讀，行動版適當緊湊以減少捲動
- **Scale:**
  - 2xs: 2px
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px
  - 2xl: 48px
  - 3xl: 64px

## Layout
- **Approach:** Editorial Hybrid — 側邊欄嚴格對齊，內容區寬鬆留白
- **Grid:** 桌面 sidebar(268px) + content; 平板 sidebar(200px) + content; 手機 full-width + hamburger
- **Max content width:** 760px（文章內容區）
- **Border radius:**
  - sm: 6px
  - md: 10px
  - lg: 14px
  - pill: 100px
- **Topbar height:** 64px
- **Sidebar width:** 268px

## Motion
- **Approach:** Intentional — 柔和的淡入轉場，微妙的 hover 效果，增加質感但不搶戲
- **Easing:** enter(ease-out) exit(ease-in) move(cubic-bezier(0.16, 1, 0.3, 1))
- **Duration:**
  - fast: 150ms (hover, focus)
  - normal: 240ms (展開/收合)
  - slow: 420ms (頁面切換)

## Callout System (NHS-inspired)
衛教內容使用色塊 callout 區分行動建議層級：
- **建議 (recommend):** teal 底 + 左側 4px teal 邊框，「✓ 建議」標題
- **注意 (caution):** orange 底 + 左側 4px orange 邊框，「⚠ 注意」標題
- **警告 (danger):** 紅底 + 左側 4px 紅邊框，「✕ 警告」標題
- **小知識 (info):** blue 底 + 左側 4px blue 邊框，「ℹ 小知識」標題

HTML 使用 class: `.callout.callout-recommend`, `.callout.callout-caution`, `.callout.callout-danger`, `.callout.callout-info`

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-31 | 初始設計系統建立 | /design-consultation 基於競品研究（Mayo Clinic, Cleveland Clinic, NHS UK）與產品情境分析 |
| 2026-03-31 | 暖色中性色取代冷灰 | 「被照顧」的感覺優於「在醫院」的制度感 |
| 2026-03-31 | LXGW WenKai 作為內文字型 | 比黑體更有人情味，比宋體更好讀，行動裝置上閱讀體驗更佳 |
| 2026-03-31 | NHS 風格 callout 色塊 | 用顏色直覺區分行動建議層級，衛教內容中非常有效 |
| 2026-03-31 | 產品定位轉變 | 從「醫師診間展示」轉為「病患自行瀏覽 + SEO 曝光」，行動裝置體驗成為第一優先 |
| 2026-03-31 | /design-review 實裝暖色系統 | 套用 DESIGN.md 定義的暖色 CSS 變數至 style.css |
| 2026-03-31 | 觸控目標修正 | 所有按鈕 min 44px，搜尋欄 44px，字型 16px 防 iOS 放大 |
| 2026-03-31 | 行動版分類卡片 2 欄 | 減少捲動量，適合手機快速瀏覽 |
| 2026-03-31 | 新增 --font-ui 變數 | UI 元素用 Noto Sans TC，內文用 LXGW WenKai，分離關注點 |
