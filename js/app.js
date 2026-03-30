/**
 * 誠心醫療體系工學診所衛教專區 — SPA 核心邏輯
 */

(function () {
  'use strict';

  /* ============================================
     DOM 元素引用
     ============================================ */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const mainContent = $('#main-content');
  const sidebarNav = $('#sidebar-nav');
  const sidebar = $('#sidebar');
  const sidebarOverlay = $('#sidebar-overlay');
  const hamburgerBtn = $('#hamburger-btn');
  const themeToggle = $('#theme-toggle');
  const fontIncBtn = $('#font-inc');
  const fontDecBtn = $('#font-dec');
  const fontLabel = $('#font-label');

  /* ============================================
     狀態管理
     ============================================ */
  const FONT_SIZES = ['font-normal', 'font-large', 'font-xlarge'];
  const FONT_LABELS = ['標準', '大', '特大'];
  let currentFontIndex = 0;
  let currentLang = localStorage.getItem('lang') || CONFIG.defaultLang || 'zh-TW';

  /** 內容快取：{ 'ent/ent-sinusitis': '<h2>...' } */
  const contentCache = {};

  /* ============================================
     多語系翻譯函式
     ============================================ */
  function t(key) {
    const strings = CONFIG.i18n && CONFIG.i18n[currentLang];
    if (strings && strings[key]) return strings[key];
    // Fallback to zh-TW
    const fallback = CONFIG.i18n && CONFIG.i18n['zh-TW'];
    if (fallback && fallback[key]) return fallback[key];
    return key;
  }

  /* ============================================
     初始化
     ============================================ */
  function init() {
    initGA();
    initLang();
    buildSidebar();
    buildSidebarFavorites();
    buildSidebarRecent();
    restoreTheme();
    restoreFontSize();
    bindEvents();
    bindSearchEvents();
    bindSidebarSectionEvents();
    bindLangSwitcher();
    handleHashChange();
    registerServiceWorker();
  }

  /* ============================================
     側邊欄建構
     ============================================ */
  function buildSidebar() {
    let html = '';

    CATEGORIES.forEach((cat) => {
      html += `
        <div class="sidebar-category" data-category="${cat.id}">
          <div class="sidebar-category-header" data-id="${cat.id}">
            <span class="sidebar-category-icon">${cat.icon}</span>
            <span class="sidebar-category-name">${cat.name}</span>
            <span class="sidebar-category-arrow">▸</span>
          </div>
          <div class="sidebar-topics">
            ${cat.topics.map((t) => `
              <a class="sidebar-topic" data-topic="${t.id}" href="#/${cat.id}/${t.id}">
                ${t.title}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    });

    sidebarNav.innerHTML = html;
  }

  /* ============================================
     事件綁定
     ============================================ */
  function bindEvents() {
    // Hash 路由
    window.addEventListener('hashchange', handleHashChange);

    // 側邊欄分類展開/收合
    sidebarNav.addEventListener('click', (e) => {
      const header = e.target.closest('.sidebar-category-header');
      if (header) {
        const cat = header.closest('.sidebar-category');
        toggleCategory(cat);
        return;
      }

      const topic = e.target.closest('.sidebar-topic');
      if (topic) {
        closeSidebarMobile();
      }
    });

    // 聯絡我們
    const contactLink = $('#sidebar-contact-link');
    if (contactLink) {
      contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/contact';
        closeSidebarMobile();
      });
    }

    // 漢堡選單
    hamburgerBtn.addEventListener('click', toggleSidebarMobile);
    sidebarOverlay.addEventListener('click', closeSidebarMobile);

    // 深色模式切換
    themeToggle.addEventListener('click', toggleTheme);

    // 字體大小
    fontIncBtn.addEventListener('click', () => changeFontSize(1));
    fontDecBtn.addEventListener('click', () => changeFontSize(-1));

    // 首頁 logo 點擊
    const topbarLeft = $('.topbar-left');
    if (topbarLeft) {
      topbarLeft.style.cursor = 'pointer';
      topbarLeft.addEventListener('click', () => {
        window.location.hash = '';
      });
    }
  }

  /* ============================================
     路由處理
     ============================================ */
  function handleHashChange() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');

    // 停止語音朗讀（切換頁面時）
    stopTTS();

    if (!hash || hash === '/') {
      renderHome();
      updateActiveSidebar(null, null);
      updateMeta(CONFIG.siteName, CONFIG.description);
      trackPageView();
      return;
    }

    if (hash === 'contact') {
      renderContact();
      updateActiveSidebar(null, 'contact');
      updateMeta('聯絡我們 — ' + CONFIG.siteName, '聯絡' + CONFIG.clinicName + '，歡迎來信或加入LINE官方帳號。');
      trackPageView();
      return;
    }

    const parts = hash.split('/');
    if (parts.length === 2) {
      const [catId, topicId] = parts;
      const category = CATEGORIES.find((c) => c.id === catId);
      if (category) {
        const topic = category.topics.find((t) => t.id === topicId);
        if (topic) {
          renderTopic(category, topic);
          updateActiveSidebar(catId, topicId);
          updateMeta(
            topic.title + ' — ' + CONFIG.siteName,
            topic.summary
          );
          trackPageView();
          return;
        }
      }
    }

    // Fallback: 嘗試匹配分類
    const catOnly = CATEGORIES.find((c) => c.id === hash);
    if (catOnly) {
      expandAndShowCategory(catOnly);
      trackPageView();
      return;
    }

    renderHome();
    trackPageView();
  }

  /** GA4 page_view 事件 */
  function trackPageView() {
    if (window.gtag) {
      gtag('event', 'page_view', { page_path: location.hash || '#/' });
    }
  }

  /* ============================================
     渲染：首頁
     ============================================ */
  function renderHome() {
    const announcementsHtml = renderAnnouncements();

    let html = `
      <div class="home-view">
        ${announcementsHtml}
        <div class="home-welcome">
          <span class="home-welcome-icon">🏥</span>
          <h1>${CONFIG.siteName}</h1>
          <p>歡迎使用衛教資訊系統。請從左側選單選擇衛教主題，或點選以下分類快速瀏覽。</p>
        </div>

        <h2 class="home-section-title">衛教分類</h2>
        <div class="category-grid">
          ${CATEGORIES.map((cat) => `
            <a class="category-card" href="#/${cat.id}" data-category="${cat.id}">
              <span class="category-card-icon">${cat.icon}</span>
              <div class="category-card-title">${cat.name}</div>
              <div class="category-card-count">${cat.topics.length} 篇衛教資訊</div>
            </a>
          `).join('')}
        </div>

        <footer class="footer">
          <p class="medical-review">本衛教內容由專業醫療團隊審閱</p>
          <p>&copy; ${new Date().getFullYear()} ${CONFIG.clinicName} 版權所有</p>
        </footer>
      </div>
    `;

    mainContent.innerHTML = html;

    // 公告事件綁定
    bindAnnouncementEvents();

    // 分類卡片點擊
    mainContent.querySelectorAll('.category-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const catId = card.dataset.category;
        const cat = CATEGORIES.find((c) => c.id === catId);
        if (cat) {
          expandAndShowCategory(cat);
        }
      });
    });
  }

  function expandAndShowCategory(cat) {
    // 展開對應的側邊欄分類
    const sidebarCat = sidebarNav.querySelector(`[data-category="${cat.id}"]`);
    if (sidebarCat && !sidebarCat.classList.contains('expanded')) {
      toggleCategory(sidebarCat);
    }

    // 導航到第一個主題
    if (cat.topics.length > 0) {
      window.location.hash = `#/${cat.id}/${cat.topics[0].id}`;
    }
  }

  /* ============================================
     內容載入（按需 fetch + 記憶體快取）
     ============================================ */
  async function fetchContent(categoryId, topicId) {
    const key = categoryId + '/' + topicId;
    if (contentCache[key]) return contentCache[key];

    const url = './content/' + key + '.html';
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      const html = await res.text();
      contentCache[key] = html;
      return html;
    } catch (err) {
      console.warn('內容載入失敗:', url, err);
      return '<p style="color:var(--text-muted);">內容載入失敗，請重新整理頁面。</p>';
    }
  }

  /* ============================================
     渲染：衛教主題
     ============================================ */
  async function renderTopic(category, topic) {
    // 先渲染骨架（header + loading），再填入內容
    const shell = `
      <div class="topic-view">
        <nav class="topic-breadcrumb">
          <a href="#/">首頁</a>
          <span class="separator">›</span>
          <a href="#/${category.id}">${category.icon} ${category.name}</a>
          <span class="separator">›</span>
          <span>${topic.title}</span>
        </nav>

        <div class="topic-header">
          <h1>${topic.title}</h1>
          <div class="topic-summary">${topic.summary}</div>
          <div class="topic-meta">由專業醫療團隊審閱 ・ ${CONFIG.clinicName}</div>
        </div>

        <div class="topic-actions">
          <button class="topic-action-btn" id="btn-print" title="點擊後選擇「儲存為 PDF」即可匯出">📄 匯出 PDF</button>
          <button class="topic-action-btn" id="btn-qrcode" title="產生 QR Code 分享給病人">📱 QR Code</button>
          <button class="topic-action-btn" id="btn-favorite" title="收藏此主題">${isFavorite(topic.id) ? '⭐ 已收藏' : '☆ 收藏'}</button>
          ${window.speechSynthesis ? `<button class="topic-action-btn" id="btn-tts" title="語音朗讀本頁內容">${t('ttsPlay')}</button>` : ''}
        </div>

        <div class="topic-content" id="topic-body">
          <p style="color:var(--text-muted);">${t('loading')}</p>
        </div>

        ${renderQuiz(topic.id)}
        ${renderRating(topic.id)}

        <footer class="footer">
          <p class="medical-review">${t('medicalReview')}</p>
          <p>&copy; ${new Date().getFullYear()} ${CONFIG.clinicName} ${t('copyright')}</p>
        </footer>
      </div>
    `;

    mainContent.innerHTML = shell;
    mainContent.scrollTop = 0;
    window.scrollTo(0, 0);

    // 非同步載入文章內容
    const content = await fetchContent(category.id, topic.id);
    const body = $('#topic-body');
    if (body) body.innerHTML = content;

    // 後處理：YouTube 嵌入
    processVideoEmbeds();

    // 後處理：圖片 lightbox
    bindImageLightbox();

    // 綁定動作按鈕
    const printBtn = $('#btn-print');
    if (printBtn) printBtn.addEventListener('click', () => window.print());

    const qrBtn = $('#btn-qrcode');
    if (qrBtn) qrBtn.addEventListener('click', showQRCodeModal);

    // 收藏按鈕
    const favBtn = $('#btn-favorite');
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        const nowFav = toggleFavorite(topic.id);
        favBtn.textContent = nowFav ? '⭐ 已收藏' : '☆ 收藏';
      });
    }

    // 版本標示（lastUpdated）
    if (topic.lastUpdated) {
      const topicBody = $('#topic-body');
      if (topicBody) {
        const updatedEl = document.createElement('div');
        updatedEl.className = 'topic-last-updated';
        updatedEl.textContent = '最後更新：' + topic.lastUpdated;
        topicBody.parentElement.insertBefore(updatedEl, topicBody.nextSibling);
      }
    }

    // 語音朗讀按鈕
    const ttsBtn = $('#btn-tts');
    if (ttsBtn) ttsBtn.addEventListener('click', toggleTTS);

    // 問卷事件
    bindQuizEvents(topic.id);

    // 評分事件
    bindRatingEvents(topic.id);

    // 記錄最近瀏覽
    addRecentView(category.id, topic.id, topic.title);

    // 更新 JSON-LD（需要用載入後的內容）
    updateJsonLd(category, topic, content);
  }

  /* ============================================
     渲染：聯絡我們
     ============================================ */
  function renderContact() {
    const c = CONFIG.contact;
    const hasInfo = c.address || c.phone || c.email;
    const hasMap = !!c.mapEmbedUrl;
    const hasLine = !!c.lineUrl;

    let html = `
      <div class="contact-view">
        <div class="contact-header">
          <h1>📞 聯絡我們</h1>
          <p style="color: var(--text-secondary);">歡迎透過以下方式與我們聯繫</p>
        </div>

        <div class="contact-grid">
          <!-- 診所資訊 -->
          <div class="contact-card">
            <h2>🏥 診所資訊</h2>
            ${hasInfo ? `
              <ul class="contact-info-list">
                ${c.address ? `<li><span class="contact-info-label">地址</span><span>${c.address}</span></li>` : ''}
                ${c.phone ? `<li><span class="contact-info-label">電話</span><span>${c.phone}</span></li>` : ''}
                ${c.email ? `<li><span class="contact-info-label">信箱</span><span>${c.email}</span></li>` : ''}
                ${c.hours ? `<li><span class="contact-info-label">門診時間</span><span>${c.hours}</span></li>` : ''}
              </ul>
            ` : '<p style="color: var(--text-muted);">診所資訊設定中，請稍後再查看。</p>'}
          </div>

          <!-- 留言表單 -->
          <div class="contact-card">
            <h2>✉️ 線上留言</h2>
            <form class="contact-form" id="contact-form">
              <div class="form-group">
                <label>姓名 <span class="required">*</span></label>
                <input type="text" name="name" class="form-input" required placeholder="請輸入您的姓名">
              </div>
              <div class="form-group">
                <label>電話 <span class="required">*</span></label>
                <input type="tel" name="phone" class="form-input" required placeholder="請輸入聯絡電話">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-input" placeholder="選填">
              </div>
              <div class="form-group">
                <label>留言內容 <span class="required">*</span></label>
                <textarea name="message" class="form-textarea" required placeholder="請輸入您的留言內容"></textarea>
              </div>
              <button type="submit" class="form-submit">送出留言</button>
              <div class="form-message" id="form-message"></div>
            </form>
          </div>

          ${hasMap ? `
            <!-- Google 地圖 -->
            <div class="contact-card">
              <h2>📍 交通位置</h2>
              <div class="map-container">
                <iframe
                  src="${c.mapEmbedUrl}"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="診所位置地圖">
                </iframe>
              </div>
            </div>
          ` : ''}

          <!-- LINE 官方帳號 -->
          <div class="contact-card line-section">
            <h2>💬 LINE 官方帳號</h2>
            <p>掃描 QR Code 或點擊下方按鈕加入好友</p>
            ${hasLine ? `
              <img src="${c.lineQrCode}" alt="LINE QR Code" class="line-qrcode"
                   onerror="this.style.display='none'">
              <br>
              <a href="${c.lineUrl}" target="_blank" rel="noopener noreferrer" class="line-btn">
                加入 LINE 好友
              </a>
            ` : '<p style="color: var(--text-muted); margin-top: 16px;">LINE 官方帳號設定中，請稍後再查看。</p>'}
          </div>
        </div>

        <footer class="footer">
          <p>&copy; ${new Date().getFullYear()} ${CONFIG.clinicName} 版權所有</p>
        </footer>
      </div>
    `;

    mainContent.innerHTML = html;
    mainContent.scrollTop = 0;
    window.scrollTo(0, 0);

    // 綁定表單
    const form = $('#contact-form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
  }

  /* ============================================
     表單送出（Formspree）
     ============================================ */
  async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formMessage = $('#form-message');
    const submitBtn = form.querySelector('.form-submit');
    const formData = new FormData(form);

    const endpoint = CONFIG.contact.formEndpoint;

    if (!endpoint) {
      // Fallback: mailto
      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email') || '未提供';
      const message = formData.get('message');
      const subject = encodeURIComponent(`[網站留言] 來自 ${name}`);
      const body = encodeURIComponent(
        `姓名：${name}\n電話：${phone}\nEmail：${email}\n\n留言內容：\n${message}`
      );
      const mailto = CONFIG.contact.email || 'clinic@example.com';
      window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;

      formMessage.className = 'form-message success';
      formMessage.textContent = '已開啟郵件應用程式，請完成寄送。';
      return;
    }

    // Formspree AJAX 送出
    submitBtn.disabled = true;
    submitBtn.textContent = '送出中...';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMessage.className = 'form-message success';
        formMessage.textContent = '留言已成功送出，我們會盡快回覆您！';
        form.reset();
      } else {
        throw new Error('送出失敗');
      }
    } catch (err) {
      formMessage.className = 'form-message error';
      formMessage.textContent = '送出失敗，請稍後再試或直接撥打診所電話。';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '送出留言';
    }
  }

  /* ============================================
     側邊欄：展開/收合
     ============================================ */
  function toggleCategory(catEl) {
    // 手風琴模式：收合其他
    const allCats = sidebarNav.querySelectorAll('.sidebar-category');
    allCats.forEach((c) => {
      if (c !== catEl && c.classList.contains('expanded')) {
        c.classList.remove('expanded');
      }
    });
    catEl.classList.toggle('expanded');
  }

  /* ============================================
     側邊欄：更新選中狀態
     ============================================ */
  function updateActiveSidebar(catId, topicId) {
    // 清除所有 active
    sidebarNav.querySelectorAll('.sidebar-category-header.active').forEach(
      (el) => el.classList.remove('active')
    );
    sidebarNav.querySelectorAll('.sidebar-topic.active').forEach(
      (el) => el.classList.remove('active')
    );
    const contactLink = $('#sidebar-contact-link');
    if (contactLink) contactLink.classList.remove('active');

    if (topicId === 'contact') {
      if (contactLink) contactLink.classList.add('active');
      return;
    }

    if (!catId) return;

    // 展開並高亮分類
    const catEl = sidebarNav.querySelector(`[data-category="${catId}"]`);
    if (catEl) {
      if (!catEl.classList.contains('expanded')) {
        toggleCategory(catEl);
      }
      catEl.querySelector('.sidebar-category-header').classList.add('active');
    }

    // 高亮主題
    if (topicId) {
      const topicEl = sidebarNav.querySelector(`[data-topic="${topicId}"]`);
      if (topicEl) topicEl.classList.add('active');
    }
  }

  /* ============================================
     側邊欄：手機版開關
     ============================================ */
  function toggleSidebarMobile() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  }

  function closeSidebarMobile() {
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /* ============================================
     深色模式
     ============================================ */
  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }

  function restoreTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      updateThemeIcon(saved);
    } else {
      // 預設亮色模式（診間展示用，保持明亮清晰）
      document.documentElement.removeAttribute('data-theme');
      updateThemeIcon('light');
    }
  }

  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.title = theme === 'dark' ? '切換至亮色模式' : '切換至深色模式';
    }
  }

  /* ============================================
     字體大小
     ============================================ */
  function changeFontSize(delta) {
    const newIndex = currentFontIndex + delta;
    if (newIndex < 0 || newIndex >= FONT_SIZES.length) return;

    document.documentElement.classList.remove(FONT_SIZES[currentFontIndex]);
    currentFontIndex = newIndex;
    document.documentElement.classList.add(FONT_SIZES[currentFontIndex]);
    localStorage.setItem('fontSize', currentFontIndex);
    updateFontLabel();
  }

  function restoreFontSize() {
    const saved = localStorage.getItem('fontSize');
    if (saved !== null) {
      currentFontIndex = parseInt(saved, 10);
      if (isNaN(currentFontIndex) || currentFontIndex < 0 || currentFontIndex >= FONT_SIZES.length) {
        currentFontIndex = 0;
      }
    }
    document.documentElement.classList.add(FONT_SIZES[currentFontIndex]);
    updateFontLabel();
  }

  function updateFontLabel() {
    if (fontLabel) {
      const keys = ['fontNormal', 'fontLarge', 'fontXLarge'];
      fontLabel.textContent = t(keys[currentFontIndex]);
    }
  }

  /* ============================================
     SEO：動態更新 Meta
     ============================================ */
  function updateMeta(title, description) {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }

  /* ============================================
     SEO：動態更新 JSON-LD
     ============================================ */
  function updateJsonLd(category, topic, contentHtml) {
    let ldScript = document.getElementById('dynamic-jsonld');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'dynamic-jsonld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }

    const faqItems = [];
    const faqMatches = (contentHtml || '').match(/<h4>(.*?)<\/h4>\s*<p>(.*?)<\/p>/gs);
    if (faqMatches) {
      faqMatches.forEach((match) => {
        const q = match.match(/<h4>(.*?)<\/h4>/);
        const a = match.match(/<p>(.*?)<\/p>/);
        if (q && a) {
          faqItems.push({
            '@type': 'Question',
            'name': q[1].replace(/<[^>]*>/g, ''),
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': a[1].replace(/<[^>]*>/g, '')
            }
          });
        }
      });
    }

    const data = {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      'name': topic.title + ' — ' + CONFIG.siteName,
      'description': topic.summary,
      'about': {
        '@type': 'MedicalCondition',
        'name': topic.title
      },
      'publisher': {
        '@type': 'MedicalOrganization',
        'name': CONFIG.clinicName
      },
      'inLanguage': 'zh-TW',
      'lastReviewed': new Date().toISOString().split('T')[0]
    };

    if (faqItems.length > 0) {
      data['mainEntity'] = faqItems;
      data['@type'] = ['MedicalWebPage', 'FAQPage'];
    }

    ldScript.textContent = JSON.stringify(data);
  }

  /* ============================================
     功能：YouTube 影片嵌入
     ============================================ */
  function processVideoEmbeds() {
    const embeds = mainContent.querySelectorAll('.video-embed[data-youtube]');
    embeds.forEach((el) => {
      const videoId = el.dataset.youtube;
      if (!videoId) return;
      el.innerHTML = `
        <div class="video-responsive">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${videoId}"
            title="YouTube 影片"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      `;
    });
  }

  /* ============================================
     功能：QR Code 分享 Modal
     ============================================ */
  function showQRCodeModal() {
    const url = window.location.href;
    const encoded = encodeURIComponent(url);
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`;

    // 移除舊 modal
    const old = $('#qrcode-modal');
    if (old) old.remove();

    const modal = document.createElement('div');
    modal.id = 'qrcode-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" aria-label="關閉">&times;</button>
        <h3>📱 QR Code 分享</h3>
        <p class="modal-desc">掃描 QR Code 即可在手機上閱讀</p>
        <img src="${qrSrc}" alt="QR Code" class="qrcode-img" width="200" height="200">
        <div class="modal-url">${url}</div>
        <button class="modal-copy-btn" id="btn-copy-url">📋 複製連結</button>
      </div>
    `;

    document.body.appendChild(modal);
    // 下一幀再加 active 讓動畫生效
    requestAnimationFrame(() => modal.classList.add('active'));

    // 關閉
    const closeModal = () => {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 250);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handler);
      }
    });

    // 複製連結
    const copyBtn = modal.querySelector('#btn-copy-url');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(url).then(() => {
        copyBtn.textContent = '✅ 已複製！';
        setTimeout(() => { copyBtn.textContent = '📋 複製連結'; }, 2000);
      }).catch(() => {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = '✅ 已複製！';
        setTimeout(() => { copyBtn.textContent = '📋 複製連結'; }, 2000);
      });
    });
  }

  /* ============================================
     功能：圖片 Lightbox
     ============================================ */
  function bindImageLightbox() {
    const images = mainContent.querySelectorAll('#topic-body img');
    if (images.length === 0) return;

    const imgArray = Array.from(images);

    imgArray.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(imgArray, idx));
    });
  }

  function openLightbox(images, startIndex) {
    let currentIndex = startIndex;

    // 移除舊 lightbox
    const old = $('#lightbox-overlay');
    if (old) old.remove();

    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="關閉">&times;</button>
      ${images.length > 1 ? `
        <button class="lightbox-nav lightbox-prev" aria-label="上一張">‹</button>
        <button class="lightbox-nav lightbox-next" aria-label="下一張">›</button>
        <div class="lightbox-counter"><span id="lb-current">${startIndex + 1}</span> / ${images.length}</div>
      ` : ''}
      <img class="lightbox-img" id="lightbox-img" src="${images[startIndex].src}" alt="${images[startIndex].alt || ''}">
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('active'));

    const lbImg = overlay.querySelector('#lightbox-img');
    const lbCounter = overlay.querySelector('#lb-current');

    const updateImage = () => {
      lbImg.src = images[currentIndex].src;
      lbImg.alt = images[currentIndex].alt || '';
      if (lbCounter) lbCounter.textContent = currentIndex + 1;
    };

    const closeLightbox = () => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 250);
      document.removeEventListener('keydown', keyHandler);
    };

    const keyHandler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
      }
    };

    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', keyHandler);

    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
    if (nextBtn) nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  }

  /* ============================================
     功能：公告系統
     ============================================ */
  function renderAnnouncements() {
    const announcements = CONFIG.announcements || [];
    const dismissed = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '[]');
    const active = announcements.filter((a) => a.active && !dismissed.includes(a.id));
    if (active.length === 0) return '';

    return `
      <div class="announcements">
        ${active.map((a) => `
          <div class="announcement announcement-${a.type || 'info'}" data-ann-id="${a.id}">
            <div class="announcement-header">
              <span class="announcement-type-icon">${a.type === 'urgent' ? '🚨' : a.type === 'warning' ? '⚠️' : 'ℹ️'}</span>
              <span class="announcement-title">${a.title}</span>
              <span class="announcement-date">${a.date || ''}</span>
              <button class="announcement-toggle" aria-label="展開/收合">▸</button>
              <button class="announcement-dismiss" aria-label="關閉公告" title="不再顯示">&times;</button>
            </div>
            <div class="announcement-body">${a.content}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function bindAnnouncementEvents() {
    mainContent.querySelectorAll('.announcement').forEach((el) => {
      const toggleBtn = el.querySelector('.announcement-toggle');
      const header = el.querySelector('.announcement-header');
      const dismissBtn = el.querySelector('.announcement-dismiss');

      // 點擊標題或 toggle 按鈕展開/收合
      header.addEventListener('click', (e) => {
        if (e.target === dismissBtn || e.target.closest('.announcement-dismiss')) return;
        el.classList.toggle('expanded');
      });

      // 關閉公告
      dismissBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const annId = el.dataset.annId;
        const dismissed = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '[]');
        if (!dismissed.includes(annId)) {
          dismissed.push(annId);
          localStorage.setItem('dismissedAnnouncements', JSON.stringify(dismissed));
        }
        el.style.transition = 'opacity 0.3s, max-height 0.3s';
        el.style.opacity = '0';
        el.style.maxHeight = '0';
        el.style.overflow = 'hidden';
        setTimeout(() => el.remove(), 300);
      });
    });
  }

  /* ============================================
     功能：搜尋
     ============================================ */
  function bindSearchEvents() {
    const searchInput = $('#search-input');
    const searchResults = $('#search-results');
    const searchToggle = $('#search-toggle');
    const searchWrapper = $('#search-wrapper');
    if (!searchInput || !searchResults) return;

    // 手機版：點擊搜尋圖示展開搜尋框
    if (searchToggle) {
      searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        searchWrapper.classList.toggle('expanded');
        if (searchWrapper.classList.contains('expanded')) {
          searchInput.focus();
        }
      });
    }

    // 即時搜尋
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('visible');
        return;
      }

      const results = [];
      CATEGORIES.forEach((cat) => {
        cat.topics.forEach((t) => {
          if (t.title.toLowerCase().includes(query) || t.summary.toLowerCase().includes(query)) {
            results.push({ category: cat, topic: t });
          }
        });
      });

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-empty">找不到相關主題</div>';
      } else {
        searchResults.innerHTML = results.map((r) =>
          `<a class="search-result-item" href="#/${r.category.id}/${r.topic.id}">
            <span class="search-result-cat">${r.category.icon} ${r.category.name}</span>
            <span class="search-result-title">${r.topic.title}</span>
          </a>`
        ).join('');
      }
      searchResults.classList.add('visible');
    });

    // 點擊搜尋結果後關閉
    searchResults.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item) {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('visible');
        searchWrapper.classList.remove('expanded');
      }
    });

    // 點擊外部關閉搜尋結果
    document.addEventListener('click', (e) => {
      if (!searchWrapper.contains(e.target)) {
        searchResults.classList.remove('visible');
        searchWrapper.classList.remove('expanded');
      }
    });
  }

  /* ============================================
     功能：收藏管理
     ============================================ */
  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch { return []; }
  }

  function saveFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
  }

  function isFavorite(topicId) {
    return getFavorites().includes(topicId);
  }

  function toggleFavorite(topicId) {
    const favs = getFavorites();
    const idx = favs.indexOf(topicId);
    if (idx > -1) {
      favs.splice(idx, 1);
    } else {
      favs.push(topicId);
    }
    saveFavorites(favs);
    buildSidebarFavorites();
    return favs.includes(topicId);
  }

  function buildSidebarFavorites() {
    const list = $('#favorites-list');
    if (!list) return;
    const favs = getFavorites();
    if (favs.length === 0) {
      list.innerHTML = '<p class="sidebar-section-empty">尚未收藏任何主題</p>';
      return;
    }

    let html = '';
    favs.forEach((topicId) => {
      CATEGORIES.forEach((cat) => {
        const topic = cat.topics.find((t) => t.id === topicId);
        if (topic) {
          html += `<a class="sidebar-topic" href="#/${cat.id}/${topic.id}">${topic.title}</a>`;
        }
      });
    });
    list.innerHTML = html || '<p class="sidebar-section-empty">尚未收藏任何主題</p>';
  }

  /* ============================================
     功能：最近瀏覽紀錄
     ============================================ */
  function getRecentViews() {
    try {
      return JSON.parse(localStorage.getItem('recentViews') || '[]');
    } catch { return []; }
  }

  function addRecentView(categoryId, topicId, title) {
    let recent = getRecentViews();
    // 移除重複
    recent = recent.filter((r) => r.id !== topicId);
    // 加到最前面
    recent.unshift({ id: topicId, categoryId: categoryId, title: title, timestamp: Date.now() });
    // 最多保留 10 筆
    if (recent.length > 10) recent = recent.slice(0, 10);
    localStorage.setItem('recentViews', JSON.stringify(recent));
    buildSidebarRecent();
  }

  function buildSidebarRecent() {
    const list = $('#recent-list');
    if (!list) return;
    const recent = getRecentViews();
    if (recent.length === 0) {
      list.innerHTML = '<p class="sidebar-section-empty">尚未瀏覽任何主題</p>';
      return;
    }

    list.innerHTML = recent.map((r) =>
      `<a class="sidebar-topic" href="#/${r.categoryId}/${r.id}">${r.title}</a>`
    ).join('');
  }

  /* ============================================
     側邊欄：收藏/最近瀏覽區塊展開/收合
     ============================================ */
  function bindSidebarSectionEvents() {
    const sections = [
      { header: '#favorites-header', section: '#sidebar-favorites' },
      { header: '#recent-header', section: '#sidebar-recent' }
    ];
    sections.forEach(({ header, section }) => {
      const headerEl = $(header);
      const sectionEl = $(section);
      if (headerEl && sectionEl) {
        headerEl.addEventListener('click', () => {
          sectionEl.classList.toggle('expanded');
        });
      }
    });

    // 點擊收藏/最近瀏覽的項目，手機版關閉側邊欄
    const favList = $('#favorites-list');
    const recentList = $('#recent-list');
    [favList, recentList].forEach((list) => {
      if (list) {
        list.addEventListener('click', (e) => {
          if (e.target.closest('.sidebar-topic')) {
            closeSidebarMobile();
          }
        });
      }
    });
  }

  /* ============================================
     功能：Google Analytics 條件式載入
     ============================================ */
  function initGA() {
    const gaId = CONFIG.gaId;
    if (!gaId) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);

    gtag('js', new Date());
    gtag('config', gaId, { send_page_view: false });
  }

  /* ============================================
     功能：語音朗讀 (Web Speech API)
     ============================================ */
  let ttsUtterance = null;

  function stopTTS() {
    if (window.speechSynthesis) {
      speechSynthesis.cancel();
    }
    ttsUtterance = null;
    const btn = $('#btn-tts');
    if (btn) {
      btn.textContent = t('ttsPlay');
      btn.classList.remove('tts-active');
    }
  }

  function toggleTTS() {
    if (!window.speechSynthesis) return;

    if (speechSynthesis.speaking) {
      stopTTS();
      return;
    }

    const content = $('#topic-body');
    if (!content) return;

    const text = content.innerText;
    if (!text.trim()) return;

    ttsUtterance = new SpeechSynthesisUtterance(text);
    ttsUtterance.rate = 0.9;
    ttsUtterance.lang = 'zh-TW';

    const voices = speechSynthesis.getVoices();
    const zhVoice = voices.find((v) => v.lang === 'zh-TW') || voices.find((v) => v.lang.startsWith('zh'));
    if (zhVoice) ttsUtterance.voice = zhVoice;

    ttsUtterance.onend = () => {
      const btn = $('#btn-tts');
      if (btn) {
        btn.textContent = t('ttsPlay');
        btn.classList.remove('tts-active');
      }
      ttsUtterance = null;
    };

    speechSynthesis.speak(ttsUtterance);

    const btn = $('#btn-tts');
    if (btn) {
      btn.textContent = t('ttsStop');
      btn.classList.add('tts-active');
    }
  }

  /* ============================================
     功能：Service Worker 離線模式
     ============================================ */
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.warn('Service Worker 註冊失敗:', err);
      });
    }
  }

  /* ============================================
     功能：衛教問卷
     ============================================ */
  function getCompletedQuizzes() {
    try {
      return JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
    } catch { return []; }
  }

  function renderQuiz(topicId) {
    const completed = getCompletedQuizzes();
    const isDone = completed.includes(topicId);

    return `
      <div class="quiz-section" id="quiz-section">
        <h3 class="quiz-title">\u{1F4CB} ${t('quizTitle')}</h3>
        ${isDone ? `
          <div class="quiz-complete-msg">\u2705 ${t('quizComplete')}</div>
        ` : `
          <div class="quiz-questions">
            <label class="quiz-item">
              <input type="checkbox" class="quiz-checkbox" data-q="1">
              <span>${t('quizQ1')}</span>
            </label>
            <label class="quiz-item">
              <input type="checkbox" class="quiz-checkbox" data-q="2">
              <span>${t('quizQ2')}</span>
            </label>
            <label class="quiz-item">
              <input type="checkbox" class="quiz-checkbox" data-q="3">
              <span>${t('quizQ3')}</span>
            </label>
          </div>
          <div class="quiz-complete-msg" id="quiz-result" style="display:none;">\u2705 ${t('quizComplete')}</div>
        `}
      </div>
    `;
  }

  function bindQuizEvents(topicId) {
    const checkboxes = mainContent.querySelectorAll('.quiz-checkbox');
    if (checkboxes.length === 0) return;

    checkboxes.forEach((cb) => {
      cb.addEventListener('change', () => {
        const allChecked = Array.from(checkboxes).every((c) => c.checked);
        if (allChecked) {
          const completed = getCompletedQuizzes();
          if (!completed.includes(topicId)) {
            completed.push(topicId);
            localStorage.setItem('completedQuizzes', JSON.stringify(completed));
          }
          const result = $('#quiz-result');
          if (result) result.style.display = 'block';
          const questions = mainContent.querySelector('.quiz-questions');
          if (questions) questions.style.display = 'none';
        }
      });
    });
  }

  /* ============================================
     功能：滿意度評分
     ============================================ */
  function getRatings() {
    try {
      return JSON.parse(localStorage.getItem('ratings') || '{}');
    } catch { return {}; }
  }

  function renderRating(topicId) {
    const ratings = getRatings();
    const existing = ratings[topicId];

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      const filled = existing && i <= existing;
      starsHtml += `<span class="rating-star ${filled ? 'filled' : ''}" data-star="${i}">\u2605</span>`;
    }

    return `
      <div class="rating-section" id="rating-section">
        <h3 class="rating-title">\u2B50 ${t('ratingTitle')}</h3>
        <p class="rating-hint">${t('ratingHint')}</p>
        <div class="rating-stars" id="rating-stars" ${existing ? 'data-rated="true"' : ''}>
          ${starsHtml}
        </div>
        ${existing ? `<p class="rating-done">${t('ratingDone')}\uFF1A${'\u2B50'.repeat(existing)}</p>` : ''}
      </div>
    `;
  }

  function bindRatingEvents(topicId) {
    const starsContainer = $('#rating-stars');
    if (!starsContainer || starsContainer.dataset.rated === 'true') return;

    const stars = starsContainer.querySelectorAll('.rating-star');

    stars.forEach((star) => {
      star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.star);
        stars.forEach((s) => {
          s.classList.toggle('hover', parseInt(s.dataset.star) <= val);
        });
      });
      star.addEventListener('mouseleave', () => {
        stars.forEach((s) => s.classList.remove('hover'));
      });

      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.star);
        const ratings = getRatings();
        ratings[topicId] = val;
        localStorage.setItem('ratings', JSON.stringify(ratings));

        stars.forEach((s) => {
          s.classList.toggle('filled', parseInt(s.dataset.star) <= val);
        });
        starsContainer.dataset.rated = 'true';

        const section = $('#rating-section');
        if (section && !section.querySelector('.rating-done')) {
          const p = document.createElement('p');
          p.className = 'rating-done';
          p.textContent = t('ratingDone') + '\uFF1A' + '\u2B50'.repeat(val);
          section.appendChild(p);
        }
      });
    });
  }

  /* ============================================
     功能：多語系切換
     ============================================ */
  function initLang() {
    currentLang = localStorage.getItem('lang') || CONFIG.defaultLang || 'zh-TW';
    document.documentElement.lang = currentLang;
  }

  function bindLangSwitcher() {
    const toggle = $('#lang-toggle');
    const dropdown = $('#lang-dropdown');
    if (!toggle || !dropdown) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('visible');
    });

    dropdown.addEventListener('click', (e) => {
      const option = e.target.closest('.lang-option');
      if (!option) return;

      const lang = option.dataset.lang;
      if (lang === currentLang) {
        dropdown.classList.remove('visible');
        return;
      }

      currentLang = lang;
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;

      updateUIStrings();
      dropdown.classList.remove('visible');
      handleHashChange();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#lang-switcher')) {
        dropdown.classList.remove('visible');
      }
    });

    updateLangHighlight();
  }

  function updateLangHighlight() {
    const options = $$('.lang-option');
    options.forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
  }

  function updateUIStrings() {
    const topbarTitle = $('.topbar-title');
    if (topbarTitle) topbarTitle.textContent = t('subtitle');

    const topbarTitleShort = $('.topbar-title-short');
    if (topbarTitleShort) topbarTitleShort.textContent = t('siteNameShort');

    const contactName = $('.sidebar-contact-name');
    if (contactName) contactName.textContent = t('contact');

    const searchInput = $('#search-input');
    if (searchInput) searchInput.placeholder = t('search');

    const favName = $('#sidebar-favorites .sidebar-section-name');
    if (favName) favName.textContent = t('favorites');
    const recentName = $('#sidebar-recent .sidebar-section-name');
    if (recentName) recentName.textContent = t('recentViews');

    updateFontLabel();
    updateLangHighlight();
  }

  /* ============================================
     啟動
     ============================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
