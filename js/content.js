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
  contact: {
    address: '',                // TODO: 填入診所地址
    phone: '',                  // TODO: 填入診所電話
    email: '',                  // TODO: 填入官方信箱
    hours: '',                  // TODO: 填入門診時間
    mapEmbedUrl: '',            // TODO: 填入 Google Maps 嵌入 URL
    lineUrl: '',                // TODO: 填入 LINE 官方帳號連結
    lineQrCode: './assets/images/line-qrcode.png',
    formEndpoint: '',           // TODO: 填入 Formspree endpoint (例: https://formspree.io/f/xxxxxxxx)
  }
};

const CATEGORIES = [
  {
    id: 'ent',
    name: '耳鼻喉科',
    icon: '👂',
    topics: [
      { id: 'ent-sinusitis', title: '鼻竇炎', summary: '鼻竇炎是鼻竇黏膜的發炎反應，常見症狀包括鼻塞、流鼻涕、臉部脹痛及嗅覺減退。' },
      { id: 'ent-otitis', title: '中耳炎', summary: '中耳炎是中耳腔的發炎反應，好發於兒童，常見症狀為耳痛、聽力下降及發燒。' },
      { id: 'ent-tonsillitis', title: '扁桃腺炎', summary: '扁桃腺炎是扁桃腺的急性或慢性發炎，主要症狀為喉嚨痛、吞嚥困難及發燒。' },
      { id: 'ent-allergic-rhinitis', title: '過敏性鼻炎', summary: '過敏性鼻炎是鼻黏膜接觸過敏原後產生的免疫反應，主要症狀為打噴嚏、流鼻水、鼻塞及鼻癢。' },
      { id: 'ent-hearing', title: '聽力保健', summary: '聽力是重要的感官功能，了解聽力保健知識有助於預防聽力損失。' },
      { id: 'ent-vertigo', title: '眩暈', summary: '眩暈是感覺自身或周圍環境旋轉的症狀，常見原因包括良性陣發性姿勢性眩暈及梅尼爾氏症。' },
      { id: 'ent-snoring', title: '打呼看診流程', summary: '打呼不只是噪音問題，可能是睡眠呼吸中止症的警訊。了解完整的看診評估流程，從初診理學檢查到居家睡眠檢測，幫助您找到最適合的治療方案。' },
    ]
  },
  {
    id: 'internal',
    name: '內科',
    icon: '🏥',
    topics: [
      { id: 'internal-hypertension', title: '高血壓', summary: '高血壓是血壓持續偏高的慢性疾病，是心血管疾病的主要危險因子。' },
      { id: 'internal-diabetes', title: '糖尿病', summary: '糖尿病是血糖調控異常的代謝性疾病，需要長期管理以預防併發症。' },
      { id: 'internal-cold', title: '感冒', summary: '感冒是上呼吸道的病毒感染，通常症狀輕微，可自行緩解。' },
      { id: 'internal-flu', title: '流感', summary: '流行性感冒是由流感病毒引起的急性呼吸道感染，症狀比普通感冒嚴重。' },
      { id: 'internal-asthma', title: '氣喘', summary: '氣喘是慢性氣道發炎疾病，會造成反覆的喘鳴、呼吸困難、胸悶及咳嗽。' },
    ]
  },
  {
    id: 'surgical',
    name: '外科',
    icon: '🔪',
    topics: [
      { id: 'surgical-wound', title: '傷口照護', summary: '正確的傷口照護是預防感染、促進癒合的關鍵。' },
      { id: 'surgical-postop', title: '術後注意事項', summary: '手術後的照護與注意事項對於順利恢復至關重要。' },
    ]
  },
  {
    id: 'pediatric',
    name: '兒科',
    icon: '👶',
    topics: [
      { id: 'pediatric-fever', title: '小兒發燒', summary: '發燒是兒童常見的症狀，瞭解正確的處理方式有助於家長安心照護。' },
      { id: 'pediatric-otitis', title: '小兒中耳炎', summary: '中耳炎是兒童最常見的細菌感染之一，及早治療可避免聽力影響。' },
      { id: 'pediatric-medication', title: '兒童用藥', summary: '兒童用藥需特別注意劑量計算和給藥方式，確保用藥安全。' },
    ]
  },
  {
    id: 'gynecology',
    name: '婦科',
    icon: '👩',
    topics: [
      { id: 'gyn-pregnancy-med', title: '孕期用藥注意', summary: '懷孕期間用藥需格外謹慎，某些藥物可能影響胎兒發育。' },
      { id: 'gyn-menopause', title: '更年期保健', summary: '更年期是女性自然的生理過程，了解相關知識有助於順利度過這個階段。' },
    ]
  },
  {
    id: 'examination',
    name: '檢驗',
    icon: '🔬',
    topics: [
      { id: 'exam-hearing', title: '聽力檢查', summary: '聽力檢查是評估聽覺功能的重要工具，有助於早期發現聽力問題。' },
      { id: 'exam-blood', title: '血液檢查', summary: '血液檢查是最基本也最重要的健康篩檢工具，可反映多種身體狀況。' },
      { id: 'exam-allergy', title: '過敏原檢測', summary: '過敏原檢測有助於找出引起過敏反應的特定物質，進而採取有效的預防措施。' },
    ]
  },
  {
    id: 'surgery',
    name: '手術',
    icon: '🏥',
    topics: [
      { id: 'surgery-tonsil', title: '扁桃腺手術', summary: '扁桃腺手術是治療反覆性扁桃腺炎和扁桃腺肥大的有效方式。' },
      { id: 'surgery-septum', title: '鼻中隔手術', summary: '鼻中隔矯正手術可改善因鼻中隔彎曲造成的鼻塞和相關症狀。' },
      { id: 'surgery-preop', title: '術前準備', summary: '充分的術前準備是手術順利進行和術後良好恢復的基礎。' },
      { id: 'surgery-postop', title: '術後照護', summary: '正確的術後照護有助於傷口癒合和身體恢復，減少併發症風險。' },
    ]
  },
  {
    id: 'medication',
    name: '用藥衛教',
    icon: '💊',
    topics: [
      { id: 'med-antibiotics', title: '抗生素使用', summary: '正確使用抗生素是治療細菌感染的關鍵，濫用會導致抗藥性。' },
      { id: 'med-nasal-spray', title: '鼻噴劑使用', summary: '鼻噴劑是治療鼻炎和鼻塞的常用藥物，正確的使用方法可提升療效。' },
      { id: 'med-ear-drops', title: '耳滴劑使用', summary: '耳滴劑是治療外耳道疾病的常用藥物，正確的使用方法非常重要。' },
    ]
  },
  {
    id: 'lifestyle',
    name: '生活衛教',
    icon: '🌿',
    topics: [
      { id: 'life-noise', title: '噪音防護', summary: '長期暴露於高分貝噪音環境會造成不可逆的聽力損害，正確防護至關重要。' },
      { id: 'life-nasal-irrigation', title: '鼻腔沖洗', summary: '鼻腔沖洗是安全有效的鼻部保健方法，有助於緩解鼻塞和預防鼻竇炎。' },
      { id: 'life-throat', title: '喉嚨保養', summary: '日常喉嚨保養有助於預防聲帶損傷和喉部疾病，特別適合用聲需求高的人。' },
    ]
  },
];
