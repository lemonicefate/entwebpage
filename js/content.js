// =============================================================
// content.js — site data for 誠心醫療體系工學診所衛教專區
// Block 1: CONFIG
// Block 2: CATEGORIES_BASE (9 categories)
// Block 3: CATEGORIES Proxy wrapper (CVD-safe tone)
// Block 4: DOCTORS / FAQS / HOURS placeholders
// Block 5: window export
// =============================================================

// ── Block 1: CONFIG ──────────────────────────────────────────

const CONFIG = {
  siteName: '誠心醫療體系工學誠心診所衛教專區',
  siteNameShort: '工學誠心診所衛教專區',
  clinicName: '誠心醫療體系工學診所',
  clinicNameEn: 'GONGXUE ALLHEART CLINIC',
  description: '耳鼻喉科及家醫科衛教資訊平台，提供耳鼻喉科、家醫科、慢性病、兒童、預防醫學、功能醫學等健康照護知識。',
  gaId: '',
  defaultLang: 'zh-TW',
  contact: {
    address: '402 臺中市南區工學路159號1樓',
    phone: '(04) 2260-9600',
    email: '',
    hours: '',
    mapEmbedUrl: '',
    lineUrl: 'https://lin.ee/tlWbWm0',
    lineQrCode: 'https://qr-official.line.me/gs/M_288qqtru_GW.png?oat_content=qr',
    formEndpoint: '',
  },
  announcements: [],
};

// ── Block 2: CATEGORIES_BASE ──────────────────────────────────

const CATEGORIES_BASE = [
  {
    id: 'chronic',
    name: '慢性病照護',
    icon: 'Heartbeat',
    desc: '高血壓、糖尿病、高血脂、痛風、代謝症候群',
    tone: '#e89661',
    toneCvd: '#E69F00',
    topics: [
      { id: 'chronic-ckd-early-signs', title: '慢性腎臟病 (Chronic Kidney Disease, CKD)', summary: '慢性腎臟病早期幾乎沒有症狀，等到感覺不對勁，腎功能往往已損失大半。「泡、水、高、貧、倦」五字訣是最重要的自我觀察警訊，尤其泡泡尿（蛋白尿）是腎臟最先發出的求救訊號，透過簡單的血尿檢查即可早期發現、早期介入。', lastUpdated: '2026-04-20', contentPath: 'content/internal/internal-ckd-early-signs.html' },
      { id: 'chronic-gout-diet-medication-principles', title: '痛風 (Gout)', summary: '痛風是尿酸結晶沉積在關節引起的劇烈發炎反應，常在夜間突然發作，以大腳趾根部最為典型。本文說明痛風的成因、飲食原則、急性發作處置，以及長期降尿酸藥物的使用時機。', lastUpdated: '2026-04-18', contentPath: 'content/internal/internal-gout-diet-medication-principles.html' },
      { id: 'chronic-hypertension-dash-diet', title: '高血壓 (Hypertension) 與得舒飲食 (DASH Diet)', summary: '高血壓常年無症狀，卻是心臟病、腦中風、腎臟病的頭號推手。了解血壓分級、認識得舒飲食 (DASH Diet) 的核心原則，搭配生活型態調整，讓血壓重回正常範圍。', lastUpdated: '2026-04-13', contentPath: 'content/internal/internal-hypertension-dash-diet.html' },
      { id: 'chronic-insulin-resistance-type2-diabetes-prevention', title: '胰島素阻抗與第2型糖尿病預防 (Insulin Resistance & Type 2 Diabetes Prevention)', summary: '台灣每4位成人就有1位是糖尿病前期，但多數人毫無感覺。了解胰島素阻抗如何悄悄演變成糖尿病，以及如何在「黃金期」採取行動逆轉風險，是每個成年人都應該知道的健康知識。', lastUpdated: '2026-04-15', contentPath: 'content/internal/internal-insulin-resistance-type2-diabetes-prevention.html' },
      { id: 'chronic-lipid-panel-interpretation', title: '脂質異常血症 (Dyslipidemia)', summary: '健檢報告上的膽固醇、LDL、HDL、三酸甘油酯，你真的看懂了嗎？很多人總膽固醇「剛剛好」，卻忽略更危險的組合：高三酸甘油酯 + 低好膽固醇。本文帶你一次看懂血脂報告的隱藏細節，以及什麼時候該進一步評估。', lastUpdated: '2026-04-16', contentPath: 'content/internal/internal-lipid-panel-interpretation.html' },
      { id: 'chronic-nafld-reversal-guide', title: '非酒精性脂肪肝 / 代謝功能障礙相關脂肪肝 (MASLD / NAFLD)', summary: '台灣超過一半的成人有不同程度的脂肪肝，多數人完全沒有症狀。脂肪肝不治療會一步步走向發炎、纖維化、肝硬化，甚至肝癌。好消息是：只要及早介入，大多數脂肪肝都可以逆轉。', lastUpdated: '2026-04-19', contentPath: 'content/internal/internal-nafld-reversal-guide.html' },
      { id: 'chronic-systemic-lupus-erythematosus', title: '全身性紅斑性狼瘡 (Systemic Lupus Erythematosus, SLE)', summary: '紅斑性狼瘡是一種免疫系統攻擊自身組織的慢性疾病，好發於年輕女性。蝴蝶狀臉部紅斑是最具代表性的症狀，但它同時可能影響腎臟、心臟、神經系統等全身器官。本文說明如何辨識症狀、何時就醫，以及現代治療如何幫助你穩定控制病情。', lastUpdated: '2026-04-24', contentPath: 'content/internal/internal-systemic-lupus-erythematosus.html' },
    ],
  },
  {
    id: 'respir',
    name: '感冒與呼吸道',
    icon: 'Lungs',
    desc: '流感、咳嗽、過敏性鼻炎、鼻竇炎、哮吼',
    tone: '#1f8e84',
    toneCvd: '#009E73',
    topics: [
      { id: 'respir-allergic-rhinitis', title: '過敏性鼻炎 (Allergic Rhinitis)', summary: '過敏性鼻炎是鼻黏膜接觸過敏原後產生的免疫反應，主要症狀為打噴嚏、流鼻水、鼻塞及鼻癢。', lastUpdated: '2026-04-05', contentPath: 'content/ent/ent-allergic-rhinitis.html' },
      { id: 'respir-asthma-management-inhaler-guide', title: '氣喘 (Bronchial Asthma)', summary: '氣喘是一種慢性呼吸道發炎疾病，台灣約 10% 的成人受其困擾。本文說明急性發作的處置步驟、吸入劑的 5 大常見操作錯誤，以及如何透過居家環境改造減少誘發因子，讓氣喘真正得到控制。', lastUpdated: '2026-04-22', contentPath: 'content/internal/internal-asthma-management-inhaler-guide.html' },
      { id: 'respir-croup', title: '哮吼 (Croup / Laryngotracheobronchitis)', summary: '哮吼是好發於嬰幼兒的病毒性上呼吸道感染，最典型的症狀是像海豹叫聲的犬吠咳嗽。大多數孩子屬輕症，可在家照護；但出現安靜時喘鳴或呼吸費力，就需要立即就醫。', lastUpdated: '2026-04-07', contentPath: 'content/pediatric/pediatric-croup.html' },
      { id: 'respir-lpr-chronic-pharyngitis', title: '逆流性咽喉炎 (Laryngopharyngeal Reflux, LPR)', summary: '喉嚨有異物感、常常需要清喉嚨、聲音沙啞——這些症狀合稱「慢性咽喉炎」，很多時候是胃酸逆流到咽喉（LPR）引起的。了解成因、調整生活習慣，多數人都能有效改善。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-lpr-chronic-pharyngitis.html' },
      { id: 'respir-sinusitis', title: '鼻竇炎 (Sinusitis / Rhinosinusitis)', summary: '鼻塞、頭痛加上黃綠色鼻涕，你可能以為只是感冒，但這些症狀持續超過一週，小心可能是鼻竇炎！本文帶你認識急性與慢性鼻竇炎的差異、正確治療方式，以及什麼時候需要做進一步檢查。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-sinusitis.html' },
    ],
  },
  {
    id: 'ortho',
    name: '骨骼關節',
    icon: 'Bone',
    desc: '肩頸痠痛、五十肩、膝蓋保養',
    tone: '#d4a82e',
    toneCvd: '#B8860B',
    topics: [],
  },
  {
    id: 'gi',
    name: '腸胃保健',
    icon: 'Apple',
    desc: '胃食道逆流、腸病毒、諾羅、腺病毒',
    tone: '#d96757',
    toneCvd: '#D55E00',
    topics: [
      { id: 'gi-adenovirus-fever-children', title: '腺病毒感染 (Adenovirus Infection)', summary: '腺病毒是兒童高燒最常見的元兇之一，體溫常超過 39°C 且可持續 5–10 天，俗稱「燒久姬」。除了高燒，還常合併眼睛紅、喉嚨痛、腸胃不適等多重症狀。目前無特效藥，了解正確的居家照護與就醫時機，是陪孩子安全度過病程的關鍵。', lastUpdated: '2026-04-07', contentPath: 'content/pediatric/pediatric-adenovirus-fever-children.html' },
      { id: 'gi-enterovirus', title: '腸病毒感染 (Enterovirus Infection)', summary: '腸病毒是台灣每年春末夏初的兒童公敵，多數孩子 7-10 天可自行恢復，但少數會演變成腦炎等重症。這篇文章教你辨識重症前兆、做好居家隔離，以及何時該直奔急診。', lastUpdated: '2026-04-07', contentPath: 'content/pediatric/pediatric-enterovirus.html' },
      { id: 'gi-norovirus-rotavirus-hydration', title: '諾羅病毒與輪狀病毒腸胃炎 (Norovirus & Rotavirus Gastroenteritis)', summary: '孩子突然上吐下瀉，是諾羅還是輪狀？兩種病毒都沒有特效藥，關鍵在於「補水」。本文帶你認識兩種病毒的差異、脫水的警示徵兆，以及正確的補水與飲食策略，讓孩子早日恢復。', lastUpdated: '2026-04-11', contentPath: 'content/pediatric/pediatric-norovirus-rotavirus-hydration.html' },
    ],
  },
  {
    id: 'kids',
    name: '兒童健康',
    icon: 'Baby',
    desc: '生長發育、疫苗、發燒、玫瑰疹、異位性皮膚炎',
    tone: '#4a9e94',
    toneCvd: '#56B4E9',
    topics: [
      { id: 'kids-atopic-dermatitis-infant', title: '嬰幼兒異位性皮膚炎 (Atopic Dermatitis / Infantile Eczema)', summary: '異位性皮膚炎是台灣最常見的嬰幼兒慢性皮膚病，影響約一成兒童，60% 在一歲前發病。文章說明症狀辨識、居家照護重點（正確泡澡與保濕技巧）、用藥原則，以及何時需要到診所進一步評估與治療。', lastUpdated: '2026-04-08', contentPath: 'content/pediatric/pediatric-atopic-dermatitis-infant.html' },
      { id: 'kids-growth-chart-guide', title: '兒童生長曲線解讀 (Child Growth Chart Interpretation)', summary: '生長曲線圖是追蹤孩子發育最重要的工具，但百分位數字常讓爸媽誤解。本文帶你看懂第3到97百分位的意義、生長速率警示、以及什麼情況真的需要帶孩子去看醫師。', lastUpdated: '2026-04-12', contentPath: 'content/pediatric/pediatric-growth-chart-guide.html' },
      { id: 'kids-roseola-infantum', title: '玫瑰疹 (Roseola Infantum / Exanthem Subitum)', summary: '玫瑰疹是嬰幼兒最常見的病毒感染之一，特徵是高燒 3-4 天、退燒後全身出現粉紅色皮疹。了解其病程、熱性痙攣的處理方式，以及何時需要立即就醫，幫助爸媽冷靜應對這個常見但讓人心驚的疾病。', lastUpdated: '2026-04-09', contentPath: 'content/pediatric/pediatric-roseola-infantum.html' },
    ],
  },
  {
    id: 'senior',
    name: '長者照護',
    icon: 'Family',
    desc: '跌倒預防、失智、多重用藥',
    tone: '#7aa83b',
    toneCvd: '#CC79A7',
    topics: [],
  },
  {
    id: 'preventiv',
    name: '預防保健',
    icon: 'Shield',
    desc: '成人健檢、疫苗、癌症篩檢、代謝症候群預防',
    tone: '#0e7c7b',
    toneCvd: '#0072B2',
    topics: [
      { id: 'preventiv-metabolic-syndrome', title: '代謝症候群 (Metabolic Syndrome)', summary: '腰圍超標只是外觀問題嗎？代謝症候群是五個指標同時出問題的組合，悄悄提高心臟病、腦中風和糖尿病風險。了解診斷標準、成因，以及如何透過生活改變逆轉它。', lastUpdated: '2026-04-17', contentPath: 'content/internal/internal-metabolic-syndrome.html' },
    ],
  },
  {
    id: 'nutri',
    name: '營養飲食',
    icon: 'Leaf',
    desc: 'DASH 飲食、痛風飲食、血脂解讀、均衡餐盤',
    tone: '#7aa83b',
    toneCvd: '#8E7CC3',
    topics: [],
  },
  {
    id: 'ent',
    name: '耳鼻喉專科',
    icon: 'Stethoscope',
    desc: '中耳炎、眩暈、耳鳴、睡眠呼吸中止症、鼻出血',
    tone: '#0e7c7b',
    toneCvd: '#0e7c7b',
    topics: [
      { id: 'ent-dengue-fever-prevention', title: '登革熱 (Dengue Fever)', summary: '登革熱由埃及斑蚊傳播，台灣每年夏秋季都可能爆發本土疫情。突然高燒、全身痠痛是典型症狀；退燒後 24-48 小時反而是最危險的階段。掌握警示症狀、落實「巡倒清刷」環境防蚊，才是最有效的保護策略。', lastUpdated: '2026-04-26', contentPath: 'content/ent/ent-dengue-fever-prevention.html' },
      { id: 'ent-herpes-zoster-shingles', title: '帶狀疱疹 (Herpes Zoster / Shingles)', summary: '帶狀疱疹（俗稱「皮蛇」）是水痘病毒潛伏多年後的再活化，以單側皮節性劇痛與水泡為特徵，可能引發長達數年的神經痛，甚至侵犯耳朵與眼睛。及早接種疫苗、48–72 小時內開始抗病毒藥物，是避免後遺症的關鍵。', lastUpdated: '2026-04-23', contentPath: 'content/ent/ent-herpes-zoster-shingles.html' },
      { id: 'ent-influenza-vs-cold-antiviral', title: '流行性感冒 (Influenza)', summary: '流感與感冒症狀相似，但嚴重程度天差地遠。突然高燒、全身痠痛、極度疲倦是流感的警報訊號。抗病毒藥在發病 48 小時內使用效果最佳，超過時限效力大幅下降。學會辨別，掌握黃金治療時機，保護自己與家人。', lastUpdated: '2026-04-25', contentPath: 'content/ent/ent-influenza-vs-cold-antiviral.html' },
      { id: 'ent-menieres-disease', title: '梅尼爾氏症 (Meniere\'s Disease)', summary: '梅尼爾氏症是一種內耳疾病，以反覆發作的劇烈眩暈、耳鳴、耳悶脹感與聽力起伏為四大核心症狀。發作無法預測，嚴重影響日常生活。本文說明成因、診斷方式、分階段治療選項，以及日常生活如何降低發作頻率。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-menieres-disease.html' },
      { id: 'ent-obstructive-sleep-apnea', title: '阻塞性睡眠呼吸中止症 (Obstructive Sleep Apnea)', summary: '打呼不是睡得好的象徵，可能是上呼吸道在夜間反覆塌陷的警訊。阻塞性睡眠呼吸中止症悄悄剝奪你的睡眠品質，增加高血壓、心臟病、腦中風風險。台灣估計有 230 萬人患病，但確診率僅一成——看完這篇，帶著清單去評估自己的風險。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-obstructive-sleep-apnea.html' },
      { id: 'ent-otitis-media', title: '急性中耳炎 (Acute Otitis Media, AOM)', summary: '急性中耳炎是兒童最常見的細菌感染之一，好發於 2 歲以下嬰幼兒。孩子因無法表達耳痛，常以半夜哭鬧、拒食、發燒等行為表現，讓父母不知所措。了解症狀辨識、就醫時機與照護原則，有助於減少不必要的抗生素使用，讓孩子更快康復。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-otitis-media.html' },
      { id: 'ent-tinnitus', title: '耳鳴 (Tinnitus)', summary: '耳鳴是在沒有外部聲源的情況下聽到嗡嗡聲、蟬鳴或鈴聲的症狀，盛行率高達 10–25%。本文說明常見原因、診斷方式、聲音療法與認知行為療法等治療選項，以及何時需要立即就醫。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-tinnitus.html' },
      { id: 'ent-urticaria', title: '急性與慢性蕁麻疹 (Urticaria / Hives)', summary: '蕁麻疹（風疹塊）是皮膚突然出現的紅色隆起疹子，癢到令人崩潰。急性蕁麻疹多由過敏引起，通常數天內消退；但若反覆發作超過六週，就進入「慢性蕁麻疹」，需要系統性治療策略。本文帶你看懂原因、治療步驟與何時該就醫。', lastUpdated: '2026-04-21', contentPath: 'content/ent/ent-urticaria.html' },
    ],
  },
];

// ── Block 3: CATEGORIES Proxy wrapper ─────────────────────────
// When <html data-cvd="on"> is set, CATEGORIES[i].tone returns toneCvd.

const CATEGORIES = CATEGORIES_BASE.map(base => new Proxy(base, {
  get(target, prop) {
    if (prop === 'tone' && typeof document !== 'undefined'
      && document.documentElement.getAttribute('data-cvd') === 'on') {
      return target.toneCvd || target.tone;
    }
    return target[prop];
  },
}));

// ── Block 4: Placeholders ─────────────────────────────────────

const DOCTORS = [
  {
    id: 'doc-lee-minghung',
    name: '李名弘',
    photo: './assets/doctors/doc-lee-minghung.jpg',
    title: '工學誠心診所院長 · 耳鼻喉頭頸外科專科',
    expertise: ['鼻塞／鼻過敏／鼻竇炎', '中耳炎／耳鳴／暈眩', '睡眠呼吸中止症', '頭頸部超音波', '耳鼻喉局部手術'],
    bio: '臺中榮民總醫院耳鼻喉頭頸部專科主治醫師，高雄醫學大學醫學系畢業。擅長成人與兒童耳鼻喉疾病全方位診療，並提供口腔黏膜篩檢及戒菸服務。',
    hue: '#0e7c7b',
    experience: [
      '臺中榮民總醫院耳鼻喉頭頸部 專科主治醫師',
      '臺中榮民總醫院耳鼻喉頭頸部 研究醫師',
      '臺中榮民總醫院耳鼻喉頭頸部 總醫師',
      '衛福部南投醫院 特聘耳鼻喉科主治醫師',
      '誠心親子耳鼻喉科診所 駐診醫師',
      '高雄醫學大學醫學系 畢業',
    ],
    certification: ['耳鼻喉頭頸外科 部定專科'],
    specialty: [
      '耳鼻喉頭頸外科專科（成人與兒童）',
      '鼻塞、鼻過敏、鼻竇炎及鼻出血',
      '外耳炎、中耳炎、耳鳴、暈眩與聽力障礙',
      '打鼾及睡眠呼吸中止症 檢查評估與治療',
      '頭頸部／甲狀腺超音波檢查及穿刺',
      '耳道、鼻道、咽喉異物 檢查及取出',
      '耳鼻喉頭頸局部手術及穿耳洞手術',
      '口腔黏膜篩檢及戒菸服務',
    ],
  },
  {
    id: 'doc-hung-liqi',
    name: '洪麗期',
    photo: './assets/doctors/doc-hung-liqi.jpg',
    title: '工學誠心診所副院長 · 家庭醫學科專科',
    expertise: ['慢性病管理', '體重管理', '糖尿病共照', '皮膚疾病', '精神心理健康'],
    bio: '中山醫學大學附設醫院家庭醫學科專科醫師，曾任台中市新社衛生所主任及國際醫療服務，中西醫雙主修背景，提供全人整合照護。',
    hue: '#e89661',
    experience: [
      '中山醫學大學附設醫院 家庭醫學科專科醫師',
      '台中市新社衛生所 主任',
      '吐瓦魯國際醫療部',
      '中國醫藥大學 中醫學系暨醫學系雙主修 畢業',
    ],
    certification: ['家庭醫學科 部定專科'],
    specialty: [
      '家醫科專科',
      '慢性病管理',
      '體重管理',
      '皮膚疾病診療',
      '腸胃消化系統照護',
      '糖尿病共同照護',
      '精神心理健康評估與治療',
    ],
  },
  {
    id: 'doc-chi-fanxiang',
    name: '齊凡翔',
    photo: './assets/doctors/doc-chi-fanxiang.jpg',
    title: '誠心醫療體系總院長 · 耳鼻喉頭頸外科專科',
    expertise: ['過敏性鼻炎', '耳鼻喉專科手術', '微創手術', '自然與功能醫學', '國際醫療技術'],
    bio: '臺大醫院耳鼻喉科主治醫師，曾任多家醫學中心耳鼻喉科主任，赴美國哥倫比亞附設醫院及韓國峨山醫院進修，融合整合醫學提供全人照護。',
    hue: '#1a6b6a',
    experience: [
      '國立臺灣大學醫學院附設醫院 耳鼻喉科主治醫師',
      '臺大醫院雲林分院 耳鼻喉部及美容中心主治醫師',
      '衛福部豐原醫院 耳鼻喉科主任醫師',
      '李綜合醫院 耳鼻喉科主任醫師',
      '童綜合醫院 耳鼻喉科主任醫師',
      '法務部矯正署雲林監獄 特約主治醫師',
      '臺大醫院耳鼻喉部 總醫師／住院醫師',
      '美國哥倫比亞附設醫院 進修',
      '韓國峨山醫院 進修',
      '中國醫藥大學醫學系 畢業',
    ],
    certification: ['耳鼻喉頭頸外科 部定專科'],
    specialty: [
      '成人與兒童耳鼻喉疾病診斷、過敏性鼻炎治療',
      '耳鼻喉專科手術、微創手術',
      '自然醫學及功能醫學治療',
      '國際醫療最新技術應用',
    ],
  },
  {
    id: 'doc-lee-tzuchiang',
    name: '李自強',
    photo: './assets/doctors/doc-lee-tzuchiang.jpg',
    title: '誠心親子耳鼻喉科診所院長 · 耳鼻喉頭頸外科專科',
    expertise: ['鼻整形手術', '甲狀腺消融(RFA)', '小兒耳鼻喉', '頭頸超音波導引', '顏面整形重建'],
    bio: '臺大醫院耳鼻喉科專科醫師，曾赴美國 MSKCC 及韓國峨山醫院進修，為甲狀腺腫瘤 RFA 消融原廠培訓醫師，《JAMA》國際期刊第一作者。',
    hue: '#2a8a9a',
    experience: [
      '霧峰澄清醫院 耳鼻喉科部主任',
      '臺大醫院 耳鼻喉科專科醫師',
      '臺大兒童醫院 小兒耳鼻喉科醫師',
      '美國紐約 MSKCC 紀念斯隆-凱特琳癌症中心 進修',
      '韓國首爾峨山醫院 鼻整形手術進修',
      '歐洲顏面鼻整形手術 研修醫師',
      '台灣甲狀腺腫瘤消融（RFA）原廠培訓醫師',
      '中山醫學大學醫學系 畢業',
      '國際期刊《JAMA》第一作者 發表',
    ],
    certification: [
      '耳鼻喉頭頸外科 部定專科',
      '台灣顏面整重建外科醫學會 專科會員',
      '台灣介入治療超音波／中華民國醫用超音波學會 會員',
    ],
    specialty: [
      '耳鼻喉專科手術、小兒耳鼻喉疾病',
      '呼吸打鼾 RF 治療',
      '甲狀腺腫瘤消融治療（RFA）',
      '頭頸部超音波導引治療',
      '顏面整形及重建、鼻整形手術',
      '自體脂肪移植、傷口外科',
    ],
  },
  {
    id: 'doc-hung-chianhui',
    name: '洪千惠',
    photo: './assets/doctors/doc-hung-chianhui.jpg',
    title: '誠心親子耳鼻喉科診所兒科部部長 · 兒科專科',
    expertise: ['小兒耳鼻喉', '兒童過敏性鼻炎', '氣喘', '兒童風濕免疫', '兒童成長發育'],
    bio: '臺大醫院小兒科專科醫師訓練，具兒童過敏風濕免疫專科資格，從一般小兒科到免疫風濕疾病均有豐富診療經驗。',
    hue: '#5a7fa0',
    experience: [
      '衛福部臺中醫院 小兒科主治醫師',
      '國立臺灣大學醫學院附設醫院 小兒科專科醫師訓練',
      '中華民國免疫學會 會員',
      '台灣兒童過敏氣喘免疫及風濕病醫學會 會員',
      '台灣過敏氣喘暨臨床免疫醫學會 會員',
      '中國醫藥大學醫學系 畢業',
    ],
    certification: [
      '兒科 部定專科',
      '兒童過敏風濕免疫 專科',
    ],
    specialty: [
      '一般小兒科疾病、小兒耳鼻喉疾病',
      '兒童成長發育評估',
      '兒童過敏性鼻炎、氣喘、免疫力調整',
      '兒童風濕疾病、免疫系統相關診治與照護',
    ],
  },
  {
    id: 'doc-ku-tingyu',
    name: '古庭瑜',
    photo: './assets/doctors/doc-ku-tingyu.png',
    title: '家庭醫學科主治醫師 · 老年醫學專科',
    expertise: ['三高慢性病照護', '老年醫學', '勞工健檢', '戒菸治療', '預防保健諮詢'],
    bio: '中山醫學大學附設醫院家庭醫學科訓練，具老年醫學及職業醫學專科資格，專注全人健康管理、慢性疾病整合照護與預防醫學。',
    hue: '#5a8c6a',
    experience: [
      '中山醫學大學附設醫院 家庭暨社區醫學部研究醫師',
      '中山醫學大學附設醫院 家庭醫學科總醫師',
      '中山醫學大學附設醫院 家庭醫學科住院醫師',
      '職業醫學勞工健康服務醫師',
      '戒菸服務專科醫師',
      '中山醫學大學醫學系 畢業',
    ],
    certification: [
      '家庭醫學科 部定專科',
      '老年醫學 專科',
    ],
    specialty: [
      '三高（血壓、血糖、血脂）慢性疾病整合照護',
      '全人健康管理',
      '成人／青少年健康檢查',
      '勞工健康檢查及職業醫學',
      '老年醫學專業照護',
      '戒菸治療與衛教',
    ],
  },
];

const FAQS = [
  {
    id: 'faq-1',
    q: '第一次看診需要帶什麼？',
    a: 'TODO：請填寫初診所需攜帶文件，例如健保卡、轉診單、過去病歷或用藥紀錄等。',
  },
  {
    id: 'faq-2',
    q: '沒有健保可以看診嗎？',
    a: 'TODO：請說明自費看診的費用方式及掛號流程。',
  },
  {
    id: 'faq-3',
    q: '慢性處方箋可以提前領藥嗎？',
    a: 'TODO：請說明慢性病連續處方箋的領藥時間規定與例外情形。',
  },
  {
    id: 'faq-4',
    q: '可以代家人掛號嗎？',
    a: 'TODO：請說明代理掛號的條件，例如需攜帶健保卡及委託人身分證明等。',
  },
  {
    id: 'faq-5',
    q: '打疫苗需要預約嗎？',
    a: 'TODO：請說明疫苗施打是否需事先預約、提供哪些疫苗項目及注意事項。',
  },
  {
    id: 'faq-6',
    q: '診所有停車位嗎？',
    a: 'TODO：請說明診所停車位數量、收費方式或鄰近停車場資訊。',
  },
];

const HOURS = [
  { day: '星期一', am: '08:00–12:00', pm: '14:30–17:30', ev: '18:00–21:00' },
  { day: '星期二', am: '08:00–12:00', pm: '14:30–17:30', ev: '18:00–21:00' },
  { day: '星期三', am: '08:00–12:00', pm: '14:30–17:30', ev: '18:00–21:00' },
  { day: '星期四', am: '08:00–12:00', pm: '14:30–17:30', ev: '18:00–21:00' },
  { day: '星期五', am: '08:00–12:00', pm: '14:30–17:30', ev: '18:00–21:00' },
  { day: '星期六', am: '休診', pm: '休診', ev: '休診' },
  { day: '星期日', am: '08:00–12:00', pm: '14:30–18:00', ev: '休診', pmSpecial: true },
];

// ── Block 5-A: 本週精選（後方圖表卡）── 依週數循環 ────────────
// 新增文章後直接在陣列尾端加條目；系統自動依 ISO 週數輪換。
// 建議主題：慢性病、健康檢查、數據解讀（視覺與血壓圖吻合）

const HERO_WEEKLY = [
  {
    eyebrow: '本週精選',
    title: '高血壓，\n沉默的健康殺手',
    tags: ['血壓', '得舒飲食'],
    href: '#/chronic/chronic-hypertension-dash-diet',
    readingMinutes: 7,
  },
  {
    eyebrow: '本週精選',
    title: '健檢報告的\n膽固醇數字怎麼看？',
    tags: ['血脂', '健檢'],
    href: '#/chronic/chronic-lipid-panel-interpretation',
    readingMinutes: 6,
  },
  {
    eyebrow: '本週精選',
    title: '糖尿病前期，\n你可能不知道自己中獎',
    tags: ['血糖', '預防'],
    href: '#/chronic/chronic-insulin-resistance-type2-diabetes-prevention',
    readingMinutes: 8,
  },
  {
    eyebrow: '本週精選',
    title: '腰圍超標，\n五個警訊同時亮紅燈',
    tags: ['代謝', '慢性病'],
    href: '#/preventiv/preventiv-metabolic-syndrome',
    readingMinutes: 6,
  },
  {
    eyebrow: '本週精選',
    title: '痛風發作，\n不只是大腳趾的問題',
    tags: ['尿酸', '飲食'],
    href: '#/chronic/chronic-gout-diet-medication-principles',
    readingMinutes: 6,
  },
];

// ── Block 5-B: 季節專題（前方主題卡）── 依月份 1–12 ───────────
// 一年設定一次；每月一日自動切換。
// 建議主題：時令疾病、當月衛教焦點。

const HERO_MONTHLY = {
  1: {
    eyebrow: '冬季健康 · 一月',
    title: '冬天鼻塞流鼻水，\n感冒還是鼻竇炎？',
    author: '李名弘 醫師', readingMinutes: 5,
    href: '#/respir/respir-sinusitis',
  },
  2: {
    eyebrow: '過年健康 · 二月',
    title: '年節大魚大肉後，\n關節突然劇痛發作',
    author: '古庭瑜 醫師', readingMinutes: 6,
    href: '#/chronic/chronic-gout-diet-medication-principles',
  },
  3: {
    eyebrow: '春季過敏 · 三月',
    title: '春天來了，\n鼻子又開始造反？',
    author: '李名弘 醫師', readingMinutes: 5,
    href: '#/respir/respir-allergic-rhinitis',
  },
  4: {
    eyebrow: '春季過敏 · 四月',
    title: '鼻塞頭痛超過一週，\n小心是鼻竇炎',
    author: '李名弘 醫師', readingMinutes: 5,
    href: '#/respir/respir-sinusitis',
  },
  5: {
    eyebrow: '兒童健康 · 五月',
    title: '腸病毒高峰期，\n重症前兆要認識',
    author: '洪千惠 醫師', readingMinutes: 6,
    href: '#/gi/gi-enterovirus',
  },
  6: {
    eyebrow: '兒童健康 · 六月',
    title: '發燒五天退不了？\n腺病毒「燒久姬」攻略',
    author: '洪千惠 醫師', readingMinutes: 6,
    href: '#/gi/gi-adenovirus-fever-children',
  },
  7: {
    eyebrow: '暑期腸胃 · 七月',
    title: '上吐下瀉來得急，\n補水才是關鍵',
    author: '洪千惠 醫師', readingMinutes: 5,
    href: '#/gi/gi-norovirus-rotavirus-hydration',
  },
  8: {
    eyebrow: '暑期兒童 · 八月',
    title: '開學前，\n認識孩子的生長曲線',
    author: '洪千惠 醫師', readingMinutes: 5,
    href: '#/kids/kids-growth-chart-guide',
  },
  9: {
    eyebrow: '秋季保健 · 九月',
    title: '喉嚨老是有痰，\n可能是胃酸在作怪',
    author: '李名弘 醫師', readingMinutes: 5,
    href: '#/respir/respir-lpr-chronic-pharyngitis',
  },
  10: {
    eyebrow: '秋季睡眠 · 十月',
    title: '打呼不是睡好，\n可能是呼吸在夜間暫停',
    author: '李名弘 醫師', readingMinutes: 7,
    href: '#/ent/ent-obstructive-sleep-apnea',
  },
  11: {
    eyebrow: '秋冬保健 · 十一月',
    title: '耳鳴像蟬叫，\n什麼時候該看醫師？',
    author: '李名弘 醫師', readingMinutes: 5,
    href: '#/ent/ent-tinnitus',
  },
  12: {
    eyebrow: '冬季兒童 · 十二月',
    title: '孩子突然犬吠咳嗽，\n哮吼怎麼處理？',
    author: '洪千惠 醫師', readingMinutes: 5,
    href: '#/respir/respir-croup',
  },
};

// ── 自動組合 HERO ──────────────────────────────────────────────
const _isoWeek = Math.floor(Date.now() / 604800000);
const _month = new Date().getMonth() + 1; // 1–12

const HERO = {
  featured: HERO_WEEKLY[_isoWeek % HERO_WEEKLY.length],
  seasonal: HERO_MONTHLY[_month],
  pill: { label: '慢性病照護', count: 4 },
};

// ── Block 6: Export to window ─────────────────────────────────

Object.assign(window, { CONFIG, CATEGORIES, DOCTORS, FAQS, HOURS, HERO, HERO_WEEKLY, HERO_MONTHLY });
