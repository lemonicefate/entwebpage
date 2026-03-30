/**
 * 誠心醫療體系工學診所衛教專區 — 設定與內容索引
 *
 * 文章 HTML 內容已移至 content/{categoryId}/{topicId}.html
 * 本檔案只保留 metadata（id, title, summary），由 app.js 按需載入內容。
 */

const CONFIG = {
  siteName: '誠心醫療體系工學診所衛教專區',
  siteNameShort: '工學診所衛教專區',
  clinicName: '誠心醫療體系工學診所',
  description: '提供耳鼻喉科、內科、外科等專業衛教資訊，協助您了解疾病與健康照護知識。',

  // Google Analytics 4 — 填入 Measurement ID 後自動啟用
  // 取得方式：Google Analytics → 管理 → 資料串流 → 評估 ID（格式：G-XXXXXXXXXX）
  gaId: '', // TODO: 填入 Google Analytics Measurement ID (G-XXXXXXXXXX)

  // 多語系預設語言
  defaultLang: 'zh-TW',

  // TODO: 子帳號管理 - 不同醫師可有不同的常用衛教設定
  // 未來可在此新增 profiles 物件

  // UI 介面翻譯字串
  i18n: {
    'zh-TW': {
      siteName: '誠心醫療體系工學診所衛教專區',
      siteNameShort: '工學診所衛教專區',
      subtitle: '工學診所衛教專區',
      search: '搜尋衛教主題...',
      favorites: '我的收藏',
      recentViews: '最近瀏覽',
      print: '列印此頁',
      contact: '聯絡我們',
      home: '首頁',
      welcomeTitle: '歡迎使用衛教資訊系統。請從左側選單選擇衛教主題，或點選以下分類快速瀏覽。',
      categoryTitle: '衛教分類',
      topicCount: '篇衛教資訊',
      loading: '載入中…',
      loadError: '內容載入失敗，請重新整理頁面。',
      reviewedBy: '由專業醫療團隊審閱',
      copyright: '版權所有',
      medicalReview: '本衛教內容由專業醫療團隊審閱',
      contactUs: '聯絡我們',
      contactSubtitle: '歡迎透過以下方式與我們聯繫',
      clinicInfo: '診所資訊',
      onlineMessage: '線上留言',
      name: '姓名',
      phone: '電話',
      email: 'Email',
      message: '留言內容',
      submit: '送出留言',
      location: '交通位置',
      lineOA: 'LINE 官方帳號',
      lineScanHint: '掃描 QR Code 或點擊下方按鈕加入好友',
      lineAdd: '加入 LINE 好友',
      openMenu: '開啟選單',
      fontNormal: '標準',
      fontLarge: '大',
      fontXLarge: '特大',
      ttsPlay: '🔊 語音朗讀',
      ttsStop: '⏹ 停止朗讀',
      quizTitle: '衛教理解確認',
      quizQ1: '我已經閱讀完本頁衛教內容',
      quizQ2: '我了解本頁說明的注意事項',
      quizQ3: '如有不清楚的地方，我會詢問醫師',
      quizComplete: '感謝您的確認！如有任何疑問歡迎隨時詢問醫師。',
      ratingTitle: '滿意度評分',
      ratingHint: '您的回饋對我們很重要',
      ratingDone: '您已評分',
      offlineNotice: '您目前處於離線狀態，部分內容可能無法載入。',
      langLabel: '語言',
    },
    'en': {
      siteName: 'Allheart Medical ENT Clinic Health Education',
      siteNameShort: 'Health Education',
      subtitle: 'Health Education Center',
      search: 'Search topics...',
      favorites: 'My Favorites',
      recentViews: 'Recent Views',
      print: 'Print This Page',
      contact: 'Contact Us',
      home: 'Home',
      welcomeTitle: 'Welcome to our Health Education System. Please select a topic from the menu or browse categories below.',
      categoryTitle: 'Categories',
      topicCount: 'articles',
      loading: 'Loading…',
      loadError: 'Failed to load content. Please refresh the page.',
      reviewedBy: 'Reviewed by medical professionals',
      copyright: 'All rights reserved',
      medicalReview: 'Content reviewed by professional medical team',
      contactUs: 'Contact Us',
      contactSubtitle: 'Feel free to reach out through the following channels',
      clinicInfo: 'Clinic Information',
      onlineMessage: 'Online Message',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      location: 'Location',
      lineOA: 'LINE Official Account',
      lineScanHint: 'Scan QR Code or click button below to add friend',
      lineAdd: 'Add LINE Friend',
      openMenu: 'Open Menu',
      fontNormal: 'Normal',
      fontLarge: 'Large',
      fontXLarge: 'X-Large',
      ttsPlay: '🔊 Read Aloud',
      ttsStop: '⏹ Stop Reading',
      quizTitle: 'Comprehension Check',
      quizQ1: 'I have finished reading this page',
      quizQ2: 'I understand the precautions described',
      quizQ3: 'I will consult my doctor if anything is unclear',
      quizComplete: 'Thank you for confirming! Please feel free to ask your doctor if you have any questions.',
      ratingTitle: 'Satisfaction Rating',
      ratingHint: 'Your feedback is important to us',
      ratingDone: 'You rated',
      offlineNotice: 'You are currently offline. Some content may not be available.',
      langLabel: 'Language',
    },
    'vi': {
      siteName: 'Giáo dục sức khỏe - Phòng khám Tai Mũi Họng Allheart',
      siteNameShort: 'Giáo dục sức khỏe',
      subtitle: 'Trung tâm giáo dục sức khỏe',
      search: 'Tìm kiếm chủ đề...',
      favorites: 'Yêu thích',
      recentViews: 'Xem gần đây',
      print: 'In trang này',
      contact: 'Liên hệ',
      home: 'Trang chủ',
      welcomeTitle: 'Chào mừng đến với hệ thống giáo dục sức khỏe. Vui lòng chọn chủ đề từ menu hoặc duyệt danh mục bên dưới.',
      categoryTitle: 'Danh mục',
      topicCount: 'bài viết',
      loading: 'Đang tải…',
      loadError: 'Không thể tải nội dung. Vui lòng tải lại trang.',
      reviewedBy: 'Được đánh giá bởi đội ngũ y tế chuyên nghiệp',
      copyright: 'Bảo lưu mọi quyền',
      medicalReview: 'Nội dung được đội ngũ y tế chuyên nghiệp đánh giá',
      contactUs: 'Liên hệ chúng tôi',
      contactSubtitle: 'Hãy liên hệ qua các kênh sau',
      clinicInfo: 'Thông tin phòng khám',
      onlineMessage: 'Nhắn tin trực tuyến',
      name: 'Họ tên',
      phone: 'Điện thoại',
      email: 'Email',
      message: 'Nội dung',
      submit: 'Gửi',
      location: 'Vị trí',
      lineOA: 'Tài khoản LINE chính thức',
      lineScanHint: 'Quét mã QR hoặc nhấn nút bên dưới để thêm bạn',
      lineAdd: 'Thêm bạn LINE',
      openMenu: 'Mở menu',
      fontNormal: 'Bình thường',
      fontLarge: 'Lớn',
      fontXLarge: 'Rất lớn',
      ttsPlay: '🔊 Đọc to',
      ttsStop: '⏹ Dừng đọc',
      quizTitle: 'Xác nhận hiểu biết',
      quizQ1: 'Tôi đã đọc xong nội dung trang này',
      quizQ2: 'Tôi hiểu các lưu ý được mô tả',
      quizQ3: 'Tôi sẽ hỏi bác sĩ nếu có điều gì chưa rõ',
      quizComplete: 'Cảm ơn bạn đã xác nhận! Hãy hỏi bác sĩ nếu bạn có bất kỳ câu hỏi nào.',
      ratingTitle: 'Đánh giá hài lòng',
      ratingHint: 'Phản hồi của bạn rất quan trọng',
      ratingDone: 'Bạn đã đánh giá',
      offlineNotice: 'Bạn đang ngoại tuyến. Một số nội dung có thể không khả dụng.',
      langLabel: 'Ngôn ngữ',
    }
  },

  contact: {
    address: '',                // TODO: 填入診所地址
    phone: '',                  // TODO: 填入診所電話
    email: '',                  // TODO: 填入官方信箱
    hours: '',                  // TODO: 填入門診時間
    mapEmbedUrl: '',            // TODO: 填入 Google Maps 嵌入 URL
    lineUrl: '',                // TODO: 填入 LINE 官方帳號連結
    lineQrCode: './assets/images/line-qrcode.png',
    formEndpoint: '',           // TODO: 填入 Formspree endpoint (例: https://formspree.io/f/xxxxxxxx)
  },
  announcements: [
    { id: 'ann-1', title: '門診時間異動', content: '農曆春節期間（2/8-2/12）休診，2/13 恢復正常門診。', type: 'info', active: true, date: '2026-03-28' },
  ]
};

const CATEGORIES = [
  {
    id: 'ent',
    name: '耳鼻喉科',
    icon: '👂',
    topics: [
      { id: 'ent-sinusitis', title: '鼻竇炎', summary: '鼻竇炎是鼻竇黏膜的發炎反應，常見症狀包括鼻塞、流鼻涕、臉部脹痛及嗅覺減退。', lastUpdated: '2026-03-28' },
      { id: 'ent-otitis', title: '中耳炎', summary: '中耳炎是中耳腔的發炎反應，好發於兒童，常見症狀為耳痛、聽力下降及發燒。', lastUpdated: '2026-03-28' },
      { id: 'ent-tonsillitis', title: '扁桃腺炎', summary: '扁桃腺炎是扁桃腺的急性或慢性發炎，主要症狀為喉嚨痛、吞嚥困難及發燒。', lastUpdated: '2026-03-28' },
      { id: 'ent-allergic-rhinitis', title: '過敏性鼻炎', summary: '過敏性鼻炎是鼻黏膜接觸過敏原後產生的免疫反應，主要症狀為打噴嚏、流鼻水、鼻塞及鼻癢。', lastUpdated: '2026-03-28' },
      { id: 'ent-hearing', title: '聽力保健', summary: '聽力是重要的感官功能，了解聽力保健知識有助於預防聽力損失。', lastUpdated: '2026-03-28' },
      { id: 'ent-vertigo', title: '眩暈', summary: '眩暈是感覺自身或周圍環境旋轉的症狀，常見原因包括良性陣發性姿勢性眩暈及梅尼爾氏症。', lastUpdated: '2026-03-28' },
      { id: 'ent-snoring', title: '打呼看診流程', summary: '打呼不只是噪音問題，可能是睡眠呼吸中止症的警訊。了解完整的看診評估流程，從初診理學檢查到居家睡眠檢測，幫助您找到最適合的治療方案。', lastUpdated: '2026-03-28' },
      { id: 'ent-bppv', title: '良性陣發性姿勢性眩暈（耳石症）', summary: '翻身或起床時突然天旋地轉？耳石脫落是最常見原因。了解耳石症的症狀、Epley 等復位術治療方式，以及復位後的居家注意事項。', lastUpdated: '2026-03-31' },
    ]
  },
  {
    id: 'internal',
    name: '內科',
    icon: '🏥',
    topics: [
      { id: 'internal-hypertension', title: '高血壓', summary: '高血壓是血壓持續偏高的慢性疾病，是心血管疾病的主要危險因子。', lastUpdated: '2026-03-28' },
      { id: 'internal-diabetes', title: '糖尿病', summary: '糖尿病是血糖調控異常的代謝性疾病，需要長期管理以預防併發症。', lastUpdated: '2026-03-28' },
      { id: 'internal-cold', title: '感冒', summary: '感冒是上呼吸道的病毒感染，通常症狀輕微，可自行緩解。', lastUpdated: '2026-03-28' },
      { id: 'internal-flu', title: '流感', summary: '流行性感冒是由流感病毒引起的急性呼吸道感染，症狀比普通感冒嚴重。', lastUpdated: '2026-03-28' },
      { id: 'internal-asthma', title: '氣喘', summary: '氣喘是慢性氣道發炎疾病，會造成反覆的喘鳴、呼吸困難、胸悶及咳嗽。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'surgical',
    name: '外科',
    icon: '🔪',
    topics: [
      { id: 'surgical-wound', title: '傷口照護', summary: '正確的傷口照護是預防感染、促進癒合的關鍵。', lastUpdated: '2026-03-28' },
      { id: 'surgical-postop', title: '術後注意事項', summary: '手術後的照護與注意事項對於順利恢復至關重要。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'pediatric',
    name: '兒科',
    icon: '👶',
    topics: [
      { id: 'pediatric-fever', title: '小兒發燒', summary: '發燒是兒童常見的症狀，瞭解正確的處理方式有助於家長安心照護。', lastUpdated: '2026-03-28' },
      { id: 'pediatric-otitis', title: '小兒中耳炎', summary: '中耳炎是兒童最常見的細菌感染之一，及早治療可避免聽力影響。', lastUpdated: '2026-03-28' },
      { id: 'pediatric-medication', title: '兒童用藥', summary: '兒童用藥需特別注意劑量計算和給藥方式，確保用藥安全。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'gynecology',
    name: '婦科',
    icon: '👩',
    topics: [
      { id: 'gyn-pregnancy-med', title: '孕期用藥注意', summary: '懷孕期間用藥需格外謹慎，某些藥物可能影響胎兒發育。', lastUpdated: '2026-03-28' },
      { id: 'gyn-menopause', title: '更年期保健', summary: '更年期是女性自然的生理過程，了解相關知識有助於順利度過這個階段。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'examination',
    name: '檢驗',
    icon: '🔬',
    topics: [
      { id: 'exam-hearing', title: '聽力檢查', summary: '聽力檢查是評估聽覺功能的重要工具，有助於早期發現聽力問題。', lastUpdated: '2026-03-28' },
      { id: 'exam-blood', title: '血液檢查', summary: '血液檢查是最基本也最重要的健康篩檢工具，可反映多種身體狀況。', lastUpdated: '2026-03-28' },
      { id: 'exam-allergy', title: '過敏原檢測', summary: '過敏原檢測有助於找出引起過敏反應的特定物質，進而採取有效的預防措施。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'surgery',
    name: '手術',
    icon: '🏥',
    topics: [
      { id: 'surgery-tonsil', title: '扁桃腺手術', summary: '扁桃腺手術是治療反覆性扁桃腺炎和扁桃腺肥大的有效方式。', lastUpdated: '2026-03-28' },
      { id: 'surgery-septum', title: '鼻中隔手術', summary: '鼻中隔矯正手術可改善因鼻中隔彎曲造成的鼻塞和相關症狀。', lastUpdated: '2026-03-28' },
      { id: 'surgery-preop', title: '術前準備', summary: '充分的術前準備是手術順利進行和術後良好恢復的基礎。', lastUpdated: '2026-03-28' },
      { id: 'surgery-postop', title: '術後照護', summary: '正確的術後照護有助於傷口癒合和身體恢復，減少併發症風險。', lastUpdated: '2026-03-28' },
      { id: 'surgery-turbinate-rfa', title: '下鼻甲射頻消融術', summary: '下鼻甲射頻消融術（RFA）是治療慢性鼻塞的微創門診手術，局部麻醉、15–20 分鐘、當天可正常生活，適合藥物治療效果不佳的下鼻甲肥大患者。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'medication',
    name: '用藥衛教',
    icon: '💊',
    topics: [
      { id: 'med-antibiotics', title: '抗生素使用', summary: '正確使用抗生素是治療細菌感染的關鍵，濫用會導致抗藥性。', lastUpdated: '2026-03-28' },
      { id: 'med-nasal-spray', title: '鼻噴劑使用', summary: '鼻噴劑是治療鼻炎和鼻塞的常用藥物，正確的使用方法可提升療效。', lastUpdated: '2026-03-28' },
      { id: 'med-ear-drops', title: '耳滴劑使用', summary: '耳滴劑是治療外耳道疾病的常用藥物，正確的使用方法非常重要。', lastUpdated: '2026-03-28' },
      { id: 'med-steroid-nasal-spray', title: '鼻用類固醇噴劑', summary: '類固醇鼻噴劑是治療過敏性鼻炎最安全有效的第一線藥物，全身吸收量極少，與口服類固醇截然不同。本頁說明正確噴藥方向、兩類鼻噴劑差異、孕婦兒童注意事項及常見問題。', lastUpdated: '2026-03-28' },
    ]
  },
  {
    id: 'lifestyle',
    name: '生活衛教',
    icon: '🌿',
    topics: [
      { id: 'life-noise', title: '噪音防護', summary: '長期暴露於高分貝噪音環境會造成不可逆的聽力損害，正確防護至關重要。', lastUpdated: '2026-03-28' },
      { id: 'life-nasal-irrigation', title: '鼻腔沖洗', summary: '鼻腔沖洗是安全有效的鼻部保健方法，有助於緩解鼻塞和預防鼻竇炎。', lastUpdated: '2026-03-28' },
      { id: 'life-throat', title: '喉嚨保養', summary: '日常喉嚨保養有助於預防聲帶損傷和喉部疾病，特別適合用聲需求高的人。', lastUpdated: '2026-03-28' },
    ]
  },
];
