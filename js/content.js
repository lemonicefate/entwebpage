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
    topics: [],
  },
  {
    id: 'respir',
    name: '感冒與呼吸道',
    icon: 'Lungs',
    desc: '流感、咳嗽、過敏性鼻炎、鼻竇炎、哮吼',
    tone: '#1f8e84',
    toneCvd: '#009E73',
    topics: [],
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
    topics: [],
  },
  {
    id: 'kids',
    name: '兒童健康',
    icon: 'Baby',
    desc: '生長發育、疫苗、發燒、玫瑰疹、異位性皮膚炎',
    tone: '#4a9e94',
    toneCvd: '#56B4E9',
    topics: [],
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
    topics: [],
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
    topics: [],
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
