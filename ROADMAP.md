# entwebpage Roadmap

**Status**: 🟡 Maintenance
**Last updated**: 2026-04-27
**Current state**: 37 篇衛教文章上線於 GitHub Pages（8 大科別）

---

## 🔧 Active maintenance

- [ ] 內容定期擴充（依 `drafts/_PROMPT.md` 自動排程，週一/四 22:00 由 Claude Code Schedule 生成草稿）
- [ ] 新草稿 → `./publish.sh {slug}` 轉換 → review → push 例行流程
- [ ] `medical-topic-list-for-ai.md` 主題清單持續勾選與補充

---

## 📅 Up next

- [ ] **sitemap.xml 重建**：目前仍使用舊的 4 類分類路徑（`internal/`、`surgery/`、`medication/`、`ent/`），未對應到新 9 大邏輯分類（`chronic/respir/ortho/gi/kids/senior/preventiv/nutri/ent`）— 需依 `js/content.js` 重新生成
- [ ] **CLAUDE.md 修正**：文中「`robots.txt` / `sitemap.xml` 使用佔位網域 `your-domain.github.io/enrtwebpage`」描述已過時，實際檔案已是 `lemonicefate.github.io/entwebpage`
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

- **sitemap.xml 結構過時**：仍使用舊 4 類路徑，與線上 9 大分類不一致 — 影響 SEO 索引正確性
- **CLAUDE.md 部署備註過時**：placeholder 說明與實際檔案不符
- **無前端效能監測**：無 Lighthouse / Web Vitals 自動化基線
- **39+ 文章手動分類**：純手動維護 `js/content.js`，無 CMS / 無分類自動化
- **Formspree 50 封/月上限**：若聯絡量增加需升級或自架
- **`dist/app.js` 必須 commit**：忘記 `./publish.sh --build` 推上去會導致線上版不一致（無 CI 把關）
- **`tools/esbuild` 10MB 二進位**：首次使用自動下載，內網環境可能受限
