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

  /** 內容快取：{ 'ent/ent-sinusitis': '<h2>...' } */
  const contentCache = {};

  /* ============================================
     初始化
     ============================================ */
  function init() {
    buildSidebar();
    restoreTheme();
    restoreFontSize();
    bindEvents();
    handleHashChange();
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

    if (!hash || hash === '/') {
      renderHome();
      updateActiveSidebar(null, null);
      updateMeta(CONFIG.siteName, CONFIG.description);
      return;
    }

    if (hash === 'contact') {
      renderContact();
      updateActiveSidebar(null, 'contact');
      updateMeta('聯絡我們 — ' + CONFIG.siteName, '聯絡' + CONFIG.clinicName + '，歡迎來信或加入LINE官方帳號。');
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
          return;
        }
      }
    }

    // Fallback: 嘗試匹配分類
    const catOnly = CATEGORIES.find((c) => c.id === hash);
    if (catOnly) {
      expandAndShowCategory(catOnly);
      return;
    }

    renderHome();
  }

  /* ============================================
     渲染：首頁
     ============================================ */
  function renderHome() {
    let html = `
      <div class="home-view">
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

        <div class="topic-content" id="topic-body">
          <p style="color:var(--text-muted);">載入中…</p>
        </div>

        <footer class="footer">
          <p class="medical-review">本衛教內容由專業醫療團隊審閱</p>
          <p>&copy; ${new Date().getFullYear()} ${CONFIG.clinicName} 版權所有</p>
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
      fontLabel.textContent = FONT_LABELS[currentFontIndex];
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
     啟動
     ============================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
