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
  siteName: '誠心醫療體系工學診所衛教專區',
  siteNameShort: '工學診所衛教專區',
  clinicName: '誠心醫療體系工學診所',
  clinicNameEn: 'GONGXUE FAMILY CLINIC',
  description: '家醫科衛教資訊平台，提供慢性病、呼吸道、腸胃、兒童、長者等健康照護知識。',
  gaId: '',
  defaultLang: 'zh-TW',
  contact: {
    address: '',
    phone: '',
    email: '',
    hours: '',
    mapEmbedUrl: '',
    lineUrl: '',
    lineQrCode: './assets/images/line-qrcode.png',
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
      { id: 'chronic-gout-diet-medication-principles', title: '痛風 (Gout)', summary: '痛風是尿酸結晶沉積在關節引起的劇烈發炎反應，常在夜間突然發作，以大腳趾根部最為典型。本文說明痛風的成因、飲食原則、急性發作處置，以及長期降尿酸藥物的使用時機。', lastUpdated: '2026-04-18', contentPath: 'content/internal/internal-gout-diet-medication-principles.html' },
      { id: 'chronic-hypertension-dash-diet', title: '高血壓 (Hypertension) 與得舒飲食 (DASH Diet)', summary: '高血壓常年無症狀，卻是心臟病、腦中風、腎臟病的頭號推手。了解血壓分級、認識得舒飲食 (DASH Diet) 的核心原則，搭配生活型態調整，讓血壓重回正常範圍。', lastUpdated: '2026-04-13', contentPath: 'content/internal/internal-hypertension-dash-diet.html' },
      { id: 'chronic-insulin-resistance-type2-diabetes-prevention', title: '胰島素阻抗與第2型糖尿病預防 (Insulin Resistance & Type 2 Diabetes Prevention)', summary: '台灣每4位成人就有1位是糖尿病前期，但多數人毫無感覺。了解胰島素阻抗如何悄悄演變成糖尿病，以及如何在「黃金期」採取行動逆轉風險，是每個成年人都應該知道的健康知識。', lastUpdated: '2026-04-15', contentPath: 'content/internal/internal-insulin-resistance-type2-diabetes-prevention.html' },
      { id: 'chronic-lipid-panel-interpretation', title: '脂質異常血症 (Dyslipidemia)', summary: '健檢報告上的膽固醇、LDL、HDL、三酸甘油酯，你真的看懂了嗎？很多人總膽固醇「剛剛好」，卻忽略更危險的組合：高三酸甘油酯 + 低好膽固醇。本文帶你一次看懂血脂報告的隱藏細節，以及什麼時候該進一步評估。', lastUpdated: '2026-04-16', contentPath: 'content/internal/internal-lipid-panel-interpretation.html' },
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
      { id: 'ent-menieres-disease', title: '梅尼爾氏症 (Meniere\'s Disease)', summary: '梅尼爾氏症是一種內耳疾病，以反覆發作的劇烈眩暈、耳鳴、耳悶脹感與聽力起伏為四大核心症狀。發作無法預測，嚴重影響日常生活。本文說明成因、診斷方式、分階段治療選項，以及日常生活如何降低發作頻率。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-menieres-disease.html' },
      { id: 'ent-obstructive-sleep-apnea', title: '阻塞性睡眠呼吸中止症 (Obstructive Sleep Apnea)', summary: '打呼不是睡得好的象徵，可能是上呼吸道在夜間反覆塌陷的警訊。阻塞性睡眠呼吸中止症悄悄剝奪你的睡眠品質，增加高血壓、心臟病、腦中風風險。台灣估計有 230 萬人患病，但確診率僅一成——看完這篇，帶著清單去評估自己的風險。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-obstructive-sleep-apnea.html' },
      { id: 'ent-otitis-media', title: '急性中耳炎 (Acute Otitis Media, AOM)', summary: '急性中耳炎是兒童最常見的細菌感染之一，好發於 2 歲以下嬰幼兒。孩子因無法表達耳痛，常以半夜哭鬧、拒食、發燒等行為表現，讓父母不知所措。了解症狀辨識、就醫時機與照護原則，有助於減少不必要的抗生素使用，讓孩子更快康復。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-otitis-media.html' },
      { id: 'ent-tinnitus', title: '耳鳴 (Tinnitus)', summary: '耳鳴是在沒有外部聲源的情況下聽到嗡嗡聲、蟬鳴或鈴聲的症狀，盛行率高達 10–25%。本文說明常見原因、診斷方式、聲音療法與認知行為療法等治療選項，以及何時需要立即就醫。', lastUpdated: '2026-04-06', contentPath: 'content/ent/ent-tinnitus.html' },
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
    id: 'doc-1',
    name: '張OO 醫師（TODO）',
    title: '院長 · 家庭醫學專科',
    expertise: ['慢性病照護', '成人健檢'],
    bio: 'TODO：請填寫醫師學經歷與專長簡介。',
    hue: '#0e7c7b',
  },
  {
    id: 'doc-2',
    name: '李OO 醫師（TODO）',
    title: '副院長 · 耳鼻喉科專科',
    expertise: ['過敏性鼻炎', '眩暈', '睡眠呼吸中止症'],
    bio: 'TODO：請填寫醫師學經歷與專長簡介。',
    hue: '#1f8e84',
  },
  {
    id: 'doc-3',
    name: '陳OO 醫師（TODO）',
    title: '主治醫師 · 內科',
    expertise: ['高血壓', '糖尿病', '心血管風險評估'],
    bio: 'TODO：請填寫醫師學經歷與專長簡介。',
    hue: '#e89661',
  },
  {
    id: 'doc-4',
    name: '王OO 醫師（TODO）',
    title: '主治醫師 · 兒科',
    expertise: ['兒童發展', '疫苗', '過敏'],
    bio: 'TODO：請填寫醫師學經歷與專長簡介。',
    hue: '#4a9e94',
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
  { day: '星期一', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期二', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期三', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期四', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期五', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期六', am: 'TODO', pm: 'TODO', ev: 'TODO' },
  { day: '星期日', am: '休診', pm: '休診', ev: '休診' },
];

// ── Block 5: Export to window ─────────────────────────────────

Object.assign(window, { CONFIG, CATEGORIES, DOCTORS, FAQS, HOURS });
