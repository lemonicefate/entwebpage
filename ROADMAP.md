# entwebpage Roadmap

**Status**: 🟡 Maintenance
**Last updated**: 2026-04-30
**Current state**: 27 篇衛教文章上線於 GitHub Pages（10 大邏輯分類；多數分類仍待補內容）

---

## 🔧 Active maintenance

- [ ] 內容定期擴充（依 `drafts/_PROMPT.md` 自動排程，週一/四 22:00 由 Claude Code Schedule 生成草稿）
- [ ] 新草稿 → `./publish.sh {slug}` 轉換 → review → push 例行流程
- [ ] `medical-topic-list-for-ai.md` 主題清單持續勾選與補充

---

## 📅 Up next

- [ ] **空分類補內容**：`ortho` / `gi` / `senior` / `nutri` 目前沒有任何文章，導致這四個分類點進去是空頁；優先補 1–2 篇代表作
- [ ] **sitemap 自動產生器**：`sitemap.xml` 仍需手動同步；`publish.sh` 加一個 `--sitemap` 步驟掃描 `js/content.js` 自動寫回
- [ ] **列印功能**（高優）：衛教頁加「列印此頁」按鈕，方便診間印給病患
- [ ] **頂部搜尋框**（高優）：全文搜尋衛教標題 / 摘要
- [ ] **YouTube 影片嵌入**（高優）：手術說明、衛教短片

---

## 🗂️ Backlog

### 內容
- 內容更新自動化排程細節整合（Stage 1 → Stage 4 一鍵流程）
- 衛教內容版本標示（顯示每篇 `last_updated`）
- 多語系（英／越／印）給外籍病人
- PDF 匯出 / 每篇 QR Code 分享

### 技術
- 前端效能監測（Lighthouse / Web Vitals 基線）
- SEO 完整化：OpenGraph 圖片、社群分享卡、結構化資料涵蓋率
- 文章瀏覽統計（GA4 或自架輕量方案）
- 圖片輪播 / 點擊放大
- Web Speech API 語音朗讀
- Service Worker 強化離線模式（已有 `sw.js`，需擴充快取策略）

### 醫師端
- 子帳號 / 個人化常用衛教設定
- 衛教理解度問卷
- 公告系統（門診異動、疫苗資訊）
- 滿意度星級評分

### 無障礙
- CVD mode 對比強化覆蓋率審視
- Senior mode 與 Dark mode 組合測試

---

## ✅ Recently done

- [x] 分類體系重組（2026-04-29）：新增「過敏免疫」(`allergy`)、原「呼吸道」(`respir`) 改名「感染症」(`infect`)；總分類由 9 → 10
- [x] Senior mode 字級切換修復（2026-04-28）：`html.senior` toggle 失效問題
- [x] markdown → html 轉換修補（2026-04-27）：「段落直接接列表」正確渲染為 `<ul><li>`
- [x] 收藏 / 最近瀏覽功能：`#/favorites`、`#/recent` 路由 + `gx_favorites` / `gx_recent` localStorage（FIFO 10 筆）
- [x] 新增 8 篇衛教文章：氣喘吸入器、CKD 早期警訊、登革熱預防、皮蛇（herpes zoster）、流感 vs 一般感冒、NAFLD 脂肪肝逆轉、SLE 紅斑性狼瘡、蕁麻疹（2026-04）
- [x] Logo 設計系統遷移：Warm Teal × Peach（暖青綠 × 桃橘），主色 `--teal #0e7c7b`、強調 `--peach #e89661`、Logo 十字 `--gold #f2c94c`
- [x] 首頁重新設計：topstrip + InfoSection + 即時掛號時間 + scroll nav
- [x] Navbar 改用 `assets/logo_pic.jpg`（取代 SVG ClinicMark）+ favicon 同步更新
- [x] B2 React 架構遷移（`src/components/*.jsx` + esbuild → `dist/app.js`）
- [x] `#/doctors` 頁面：6 位醫師完整 bullet-point 卡片 + 大頭照 slot
- [x] `publish.sh --dev` live-reload 模式 + `--serve PORT` 修正
- [x] Hash routing + 9 大邏輯分類重組（`chronic/respir/ortho/gi/kids/senior/preventiv/nutri/ent`）
- [x] DOMPurify XSS 縱深防禦（`SafeHtml` 元件 + `createContextualFragment`）

---

## ⚠️ Known concerns

- **sitemap.xml 手動維護**：每次新增文章都要記得手動加 URL；忘記加會影響 Google 索引（追蹤項目見 Up next 自動產生器）
- **空分類點進去是空頁**：`ortho` / `gi` / `senior` / `nutri` 目前無內容
- **無前端效能監測**：無 Lighthouse / Web Vitals 自動化基線
- **文章純手動維護**：`js/content.js` 無 CMS、無分類自動化
- **Formspree 50 封/月上限**：若聯絡量增加需升級或自架
- **`dist/app.js` 必須 commit**：忘記 `./publish.sh --build` 推上去會導致線上版不一致（無 CI 把關）
- **`tools/esbuild` 10MB 二進位**：首次使用自動下載，內網環境可能受限
