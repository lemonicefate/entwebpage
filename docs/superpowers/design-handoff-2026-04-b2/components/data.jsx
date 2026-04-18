// Content for the clinic site

// Original tone = warm palette shown by default.
// toneCvd = Okabe–Ito inspired palette for 色弱/色盲 users — each category is
// distinguishable by hue AND lightness for protan/deutan/tritan vision.
const CATEGORIES_BASE = [
  { id: 'chronic',  name: '慢性病照護',   desc: '高血壓、糖尿病、高血脂日常管理',    icon: 'Heartbeat', count: 28, tone: '#e89661', toneCvd: '#E69F00' },
  { id: 'respir',   name: '感冒與呼吸道', desc: '流感、咳嗽、氣喘、新冠',            icon: 'Lungs',     count: 22, tone: '#1f8e84', toneCvd: '#009E73' },
  { id: 'ortho',    name: '骨骼關節',     desc: '肩頸痠痛、五十肩、膝蓋保養',        icon: 'Bone',      count: 15, tone: '#d4a82e', toneCvd: '#B8860B' },
  { id: 'gi',       name: '腸胃保健',     desc: '胃食道逆流、便祕、腹瀉',            icon: 'Apple',     count: 18, tone: '#d96757', toneCvd: '#D55E00' },
  { id: 'kids',     name: '兒童健康',     desc: '疫苗、發燒、生長發育',              icon: 'Baby',      count: 20, tone: '#4a9e94', toneCvd: '#56B4E9' },
  { id: 'senior',   name: '長者照護',     desc: '跌倒預防、失智、用藥安全',          icon: 'Family',    count: 14, tone: '#7aa83b', toneCvd: '#CC79A7' },
  { id: 'preventiv',name: '預防保健',     desc: '成人健檢、疫苗、癌症篩檢',          icon: 'Shield',    count: 12, tone: '#0e7c7b', toneCvd: '#0072B2' },
  { id: 'nutri',    name: '營養飲食',     desc: '三高飲食、減重、均衡營養',          icon: 'Leaf',      count: 16, tone: '#7aa83b', toneCvd: '#8E7CC3' },
];

// Proxy so every `c.tone` read checks the global CVD flag live.
// This keeps existing consumers working without threading context through.
const CATEGORIES = CATEGORIES_BASE.map(base => new Proxy(base, {
  get(target, prop) {
    if (prop === 'tone' && typeof document !== 'undefined'
        && document.documentElement.getAttribute('data-cvd') === 'on') {
      return target.toneCvd || target.tone;
    }
    return target[prop];
  }
}));

const FEATURED = [
  {
    id: 'flu-2026',
    tag: '季節專題',
    category: '感冒與呼吸道',
    title: '2026 流感季來了:疫苗、症狀與就醫時機一次看',
    excerpt: '今年公費流感疫苗自 10 月 1 日開打。本文整理 6 個族群的優先施打建議,以及與一般感冒的 5 個關鍵差異。',
    author: '陳志明 醫師',
    date: '4 月 12 日',
    read: 6,
    accent: '#0e7c7b',
  },
  {
    id: 'bp-home',
    tag: '慢性病照護',
    category: '慢性病照護',
    title: '在家量血壓的 722 原則:什麼時候量、怎麼量才準?',
    excerpt: '連續七天、每天早晚兩次、每次兩回。一張圖教你建立自己的血壓日誌,並判讀紅、黃、綠燈區間。',
    author: '林家綺 醫師',
    date: '4 月 8 日',
    read: 4,
  },
  {
    id: 'senior-fall',
    tag: '長者照護',
    category: '長者照護',
    title: '家中長輩一跌不起?居家 8 處改造與起身練習',
    excerpt: '跌倒是 65 歲以上長者住院的主因之一。物理治療師示範 5 分鐘起身練習,以及浴室、走道的安全盤點。',
    author: '張美惠 醫師',
    date: '4 月 3 日',
    read: 7,
  },
];

const LATEST = [
  { id: 'a1', tag: '腸胃保健',   title: '胃食道逆流:日常飲食要避開這 7 種食物', date: '4 月 16 日', read: 5 },
  { id: 'a2', tag: '兒童健康',   title: '孩子發燒幾度要就醫?家長的三段判斷法',   date: '4 月 14 日', read: 4 },
  { id: 'a3', tag: '骨骼關節',   title: '久坐族的肩頸僵硬:辦公室三分鐘伸展',     date: '4 月 11 日', read: 3 },
  { id: 'a4', tag: '預防保健',   title: '40 歲以後,成人健檢該做哪些項目?',       date: '4 月 9 日',  read: 6 },
  { id: 'a5', tag: '營養飲食',   title: '減重卡關?從「一掌一拳一碗」重新分配餐盤', date: '4 月 7 日',  read: 5 },
  { id: 'a6', tag: '慢性病照護', title: '糖尿病友的春季保養:飲食、運動、腳部照護', date: '4 月 5 日',  read: 6 },
];

const DOCTORS = [
  {
    name: '陳志明', title: '院長 ‧ 家庭醫學科專科醫師',
    expertise: ['慢性病照護', '成人健檢', '疫苗接種'],
    bio: '臺大醫院家醫部主治醫師 12 年,擅長將複雜醫學知識轉譯成患者能理解的日常。',
    hue: '#0e7c7b',
  },
  {
    name: '林家綺', title: '副院長 ‧ 內科專科醫師',
    expertise: ['高血壓', '糖尿病', '心血管風險評估'],
    bio: '三高整合門診負責人,推動「一年一次完整健檢 + 每季追蹤」的慢性病長期照護模式。',
    hue: '#1c3d5a',
  },
  {
    name: '張美惠', title: '主治醫師 ‧ 老年醫學專長',
    expertise: ['長者整合照護', '多重用藥', '失智早期徵兆'],
    bio: '關注高齡病人「一人多病、多藥」的困境,提供用藥簡化與生活機能評估。',
    hue: '#2d6b66',
  },
  {
    name: '黃允倫', title: '主治醫師 ‧ 家庭醫學',
    expertise: ['兒童發展', '青少年健康', '過敏'],
    bio: '陪伴家庭從新生兒到青春期。門診時間彈性,友善雙薪家庭。',
    hue: '#3a8a7a',
  },
];

const FAQS = [
  {
    q: '第一次到診所需要帶什麼?',
    a: '初診請備妥健保卡、身分證或戶口名簿影本。若有正在服用的藥物或他院病歷摘要,也請一併帶來,有助於醫師完整了解您的狀況。',
  },
  {
    q: '沒有健保可以看診嗎?',
    a: '可以,我們提供自費門診服務。初診自費掛號費 $350,診療與用藥另計。如需收據申報保險,請於現場告知櫃台。',
  },
  {
    q: '慢性病處方箋可以提前領藥嗎?',
    a: '連續處方箋須於用藥結束前後 10 日內領取。可透過 LINE 官方帳號預約領藥時間,到診所直接取藥不需重新掛號。',
  },
  {
    q: '可以幫家人代掛號嗎?',
    a: '可以。線上掛號時輸入家人的健保卡號即可。初診患者建議由本人來診,以便填寫完整病史表。',
  },
  {
    q: '打疫苗需要預約嗎?',
    a: '公費流感與新冠疫苗請先線上預約,以免白跑一趟。自費疫苗(如 HPV、帶狀疱疹、肺炎鏈球菌)到診諮詢後即可施打。',
  },
  {
    q: '診所有停車位嗎?',
    a: '診所騎樓兩側有 15 分鐘臨停格。鄰近工學路平面停車場走路約 3 分鐘。行動不便者可於門口下車,工作人員將協助您。',
  },
];

const HOURS = [
  { day: '星期一', am: '08:30–12:00', pm: '14:30–17:30', ev: '18:30–21:00' },
  { day: '星期二', am: '08:30–12:00', pm: '14:30–17:30', ev: '休診' },
  { day: '星期三', am: '08:30–12:00', pm: '14:30–17:30', ev: '18:30–21:00' },
  { day: '星期四', am: '08:30–12:00', pm: '14:30–17:30', ev: '休診' },
  { day: '星期五', am: '08:30–12:00', pm: '14:30–17:30', ev: '18:30–21:00' },
  { day: '星期六', am: '08:30–12:00', pm: '休診',        ev: '休診' },
  { day: '星期日', am: '休診',         pm: '休診',        ev: '休診' },
];

Object.assign(window, { CATEGORIES, FEATURED, LATEST, DOCTORS, FAQS, HOURS });
