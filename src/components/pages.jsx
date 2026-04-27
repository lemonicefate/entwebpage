// ListPage — category, favorites, recent

function ListPage({ ctx }) {
  const { hashState, favorites, recent } = ctx;
  let title, topics;

  if (hashState.view === 'favorites') {
    title = '我的收藏';
    topics = window.CATEGORIES.flatMap(c =>
      (c.topics || []).filter(t => favorites.includes(t.id))
        .map(t => ({ ...t, categoryId: c.id, categoryName: c.name, tone: cvdResolveTone(c) }))
    );
  } else if (hashState.view === 'recent') {
    title = '最近瀏覽';
    const all = window.CATEGORIES.flatMap(c =>
      (c.topics || []).map(t => ({ ...t, categoryId: c.id, categoryName: c.name, tone: cvdResolveTone(c) }))
    );
    topics = recent.map(id => all.find(t => t.id === id)).filter(Boolean);
  } else {
    const cat = window.CATEGORIES.find(c => c.id === hashState.categoryId);
    if (!cat) return <div className="container" style={{ padding: '80px 24px' }}>找不到此分類</div>;
    title = cat.name;
    topics = (cat.topics || []).map(t => ({ ...t, categoryId: cat.id, categoryName: cat.name, tone: cvdResolveTone(cat) }));
  }

  return (
    <main className="container r-section" style={{ padding: '64px 24px' }}>
      <h1 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 700, margin: '0 0 12px', color: 'var(--fg-heading)' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 40 }}>共 {topics.length} 篇</p>

      {topics.length === 0 ? (
        <div style={{ padding: 48, textAlign: 'center', background: 'var(--cream-1)', borderRadius: 16, color: 'var(--muted)' }}>
          {hashState.view === 'favorites' && '您還沒有收藏任何文章。瀏覽文章時點擊愛心即可收藏。'}
          {hashState.view === 'recent' && '您還沒有瀏覽紀錄。'}
          {!hashState.view && '這個分類目前沒有文章。'}
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 16 }}>
          {topics.map(t => (
            <a key={t.id} href={`#/${t.categoryId}/${t.id}`} className="r-list-card topic-card" style={{
              display: 'flex', gap: 20, padding: 24, borderRadius: 14,
              background: 'var(--bg)', border: '1px solid var(--border-soft)',
              textDecoration: 'none', color: 'var(--fg)', boxShadow: 'var(--shadow-soft)',
            }}>
              <div style={{ width: 80, height: 80, flexShrink: 0, borderRadius: 12,
                            background: `${t.tone}15`, display: 'grid', placeItems: 'center', color: t.tone }}>
                <Icon.ArrowRight style={{ width: 24, height: 24 }}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                              textTransform: 'uppercase', color: t.tone, marginBottom: 6 }}>{t.categoryName}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-heading)', margin: 0, lineHeight: 1.45 }}>
                  {t.title}
                </h3>
                {t.summary && <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8, lineHeight: 1.6 }}>{t.summary}</p>}
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}

// ── SEO helpers ──
function updateMeta(title, description) {
  document.title = title;
  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'description');
    document.head.appendChild(el);
  }
  el.setAttribute('content', description);
}

function updateJsonLd(topic, category) {
  const old = document.getElementById('json-ld');
  if (old) old.remove();
  if (!topic) return;
  const data = {
    '@context': 'https://schema.org', '@type': 'MedicalWebPage',
    name: topic.title, description: topic.summary || '', inLanguage: 'zh-TW',
    about: { '@type': 'MedicalCondition', name: topic.title },
    publisher: { '@type': 'MedicalOrganization', name: (window.CONFIG || {}).clinicName || '' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: '#/' },
        { '@type': 'ListItem', position: 2, name: category.name, item: `#/${category.id}` },
        { '@type': 'ListItem', position: 3, name: topic.title },
      ],
    },
  };
  const s = document.createElement('script');
  s.id = 'json-ld'; s.type = 'application/ld+json';
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
}

const __contentCache = {};

// SafeHtml: sanitize with DOMPurify, then mount via DocumentFragment.
// Uses ref + replaceChildren — NOT React's prop-based HTML injection.
function SafeHtml({ html }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const clean = window.DOMPurify
      ? window.DOMPurify.sanitize(html, { USE_PROFILES: { html: true } })
      : '';
    const fragment = document.createRange().createContextualFragment(clean);
    el.replaceChildren(fragment);

    if (window.mermaid) {
      const nodes = el.querySelectorAll('.mermaid');
      if (nodes.length) {
        nodes.forEach(n => { n.removeAttribute('data-processed'); });
        Promise.resolve().then(() => window.mermaid.run({ nodes: Array.from(nodes) }))
          .catch(err => console.warn('[mermaid] render failed:', err));
      }
    }
  }, [html]);
  return <div ref={ref} className="article-content"/>;
}

// ArticleQR: render a self-contained QR + copy-link card at the article tail.
// URL is derived from current location so it travels correctly between
// localhost / GitHub Pages / future custom domain without config edits.
function ArticleQR({ category, topic }) {
  const ref = React.useRef(null);
  const [copied, setCopied] = React.useState(false);
  const url = (typeof window !== 'undefined')
    ? `${window.location.origin}${window.location.pathname}#/${category.id}/${topic.id}`
    : '';

  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.qrcode) return;
    try {
      const qr = window.qrcode(0, 'M');
      qr.addData(url);
      qr.make();
      const svgString = qr.createSvgTag({ cellSize: 5, margin: 2, scalable: true });
      const clean = window.DOMPurify
        ? window.DOMPurify.sanitize(svgString, { USE_PROFILES: { svg: true, svgFilters: true } })
        : '';
      const fragment = document.createRange().createContextualFragment(clean);
      host.replaceChildren(fragment);
      const svg = host.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', '160');
        svg.setAttribute('height', '160');
        svg.style.display = 'block';
        svg.style.borderRadius = '8px';
      }
    } catch (e) {
      host.textContent = 'QR 產生失敗';
    }
  }, [url]);

  function copyLink() {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <section aria-label="頁面 QR Code" className="r-article-qr" style={{
      marginTop: 56,
      padding: '32px 28px',
      background: 'var(--cream-2)',
      border: '1px solid var(--border-soft)',
      borderRadius: 18,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 28,
      alignItems: 'center',
    }}>
      <div style={{
        background: '#fff',
        padding: 12,
        borderRadius: 12,
        boxShadow: '0 2px 10px rgba(14,124,123,0.08)',
        lineHeight: 0,
      }}>
        <div ref={ref} style={{ width: 160, height: 160 }}/>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
          color: 'var(--peach)', textTransform: 'uppercase', marginBottom: 6,
        }}>SHARE · 分享本頁</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-heading)', marginBottom: 8 }}>
          隨時查閱 · 分享給家人
        </div>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 14px' }}>
          手機相機掃描左側 QR Code，即可在手機上開啟本頁；也可以加入書籤或複製連結分享給家人。
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={copyLink} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 999,
            border: '1px solid var(--border-soft)',
            background: copied ? 'rgba(14,124,123,0.12)' : 'var(--surface)',
            color: copied ? 'var(--teal)' : 'var(--fg)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>{copied ? '已複製連結 ✓' : '複製連結'}</button>
          <a href={url} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 999,
            border: '1px solid var(--border-soft)',
            background: 'var(--surface)', color: 'var(--fg)',
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
          }}>本頁網址</a>
        </div>
      </div>
    </section>
  );
}

function ArticlePage({ ctx }) {
  const { hashState, favorites, toggleFavorite, addRecent } = ctx;
  const [html,  setHtml]  = React.useState(null);
  const [error, setError] = React.useState(null);

  const category = window.CATEGORIES.find(c => c.id === hashState.categoryId);
  const topic    = category?.topics.find(t => t.id === hashState.topicId);

  React.useEffect(() => {
    if (!topic) return;
    addRecent(topic.id);
    updateMeta(`${topic.title} | ${window.CONFIG?.siteNameShort || ''}`, topic.summary || '');
    updateJsonLd(topic, category);

    if (__contentCache[topic.id]) { setHtml(__contentCache[topic.id]); return; }
    const path = topic.contentPath;
    if (!path) { setError('本文尚無內容檔案'); return; }
    fetch(path)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
      .then(text => { __contentCache[topic.id] = text; setHtml(text); setError(null); })
      .catch(e => setError(`載入失敗：${e.message}`));
  }, [topic?.id]);

  if (!category || !topic) {
    return <div className="container" style={{ padding: '80px 24px' }}>找不到此文章</div>;
  }
  const isFav = favorites.includes(topic.id);

  return (
    <main className="r-article-pad" style={{ padding: '64px 24px' }}>
      <div className="container r-article-grid">
        <article className="r-article-body" style={{ maxWidth: 'var(--max-article)', margin: '0 auto' }}>
          <a href={`#/${category.id}`} style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: cvdResolveTone(category), textDecoration: 'none',
          }}>← {category.name}</a>
          <h1 className="r-article-h1" style={{
            fontSize: 'clamp(28px,3.2vw,40px)', fontWeight: 700,
            margin: '12px 0 20px', lineHeight: 1.25, letterSpacing: '-0.01em',
            color: 'var(--fg-heading)',
          }}>{topic.title}</h1>
          {topic.summary && (
            <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
              {topic.summary}
            </p>
          )}
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            margin: '28px 0', paddingBottom: 24, borderBottom: '1px solid var(--border-soft)',
          }}>
            <button onClick={() => toggleFavorite(topic.id)} aria-pressed={isFav} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 999, border: '1px solid var(--border-soft)',
              background: isFav ? 'rgba(232,150,97,0.12)' : 'var(--bg)',
              color: isFav ? 'var(--peach)' : 'var(--muted)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>
              <Icon.Heart style={{ width: 14, height: 14 }}/>
              {isFav ? '已收藏' : '收藏'}
            </button>
            {topic.lastUpdated && (
              <span style={{ fontSize: 13, color: 'var(--muted-3)' }}>
                最後更新：{topic.lastUpdated}
              </span>
            )}
          </div>

          {error && <div className="callout callout-danger"><strong>載入錯誤</strong>{error}</div>}
          {!error && html === null && <div style={{ color: 'var(--muted)' }}>載入中…</div>}
          {html !== null && <SafeHtml html={html}/>}
          {html !== null && <ArticleQR category={category} topic={topic}/>}
        </article>
      </div>
    </main>
  );
}

function ContactPage({ ctx }) {
  return (
    <main style={{ padding: '64px 0' }}>
      <div className="container" style={{ padding: '0 24px', marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: 'var(--fg-heading)', margin: '0 0 32px' }}>
          聯絡我們
        </h1>
      </div>
      {window.InfoSection && React.createElement(window.InfoSection)}
    </main>
  );
}

function DoctorsPage() {
  const doctors = window.DOCTORS || [];
  const { h: _h } = { h: React.createElement };

  function Section({ label, items, hue }) {
    if (!items || items.length === 0) return null;
    return (
      <div style={{ marginTop: 18 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          color: hue, textTransform: 'uppercase', marginBottom: 6,
        }}>{label}</div>
        <ul style={{ margin: 0, padding: '0 0 0 16px', listStyle: 'disc' }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: 13, color: 'var(--fg)', lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <main style={{ background: 'var(--cream-1)', minHeight: '100vh', padding: '64px 0 80px' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--teal)', marginBottom: 8 }}>
            DOCTORS · 醫師團隊
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: 'var(--fg-heading)', margin: 0 }}>
            認識您的醫師
          </h1>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {doctors.map(d => (
            <div key={d.id} style={{
              background: 'var(--surface)',
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid var(--border-soft)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Card header */}
              <div style={{
                background: `linear-gradient(135deg, ${d.hue}18 0%, ${d.hue}08 100%)`,
                borderBottom: `3px solid ${d.hue}`,
                padding: '20px 24px 16px',
              }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--fg-heading)' }}>
                  {d.name} <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--muted)' }}>醫師</span>
                </div>
                <div style={{ fontSize: 13, color: d.hue, fontWeight: 600, marginTop: 4, lineHeight: 1.6 }}>
                  {d.title?.split(' · ').map((part, i) => <div key={i}>{part}</div>)}
                </div>
              </div>

              {/* Photo area */}
              <div style={{
                background: `linear-gradient(160deg, ${d.hue}22 0%, ${d.hue}06 100%)`,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                padding: '24px 0',
                borderBottom: '1px solid var(--border-soft)',
              }}>
                {d.photo
                  ? <img src={d.photo} alt={`${d.name} 醫師`} style={{
                      width: 240, height: 240, borderRadius: '50%',
                      objectFit: 'cover', objectPosition: 'top',
                      border: `3px solid ${d.hue}44`,
                      boxShadow: `0 8px 24px -8px ${d.hue}66`,
                    }}/>
                  : <div style={{
                      width: 240, height: 240, borderRadius: '50%',
                      background: `linear-gradient(160deg, ${d.hue} 0%, ${d.hue}bb 100%)`,
                      display: 'grid', placeItems: 'center',
                      boxShadow: `0 8px 24px -8px ${d.hue}66`,
                    }}>
                      <div style={{ width: 64, height: 64 }}>
                        {window.Illo && <window.Illo.Doctor tone="rgba(255,255,255,0.85)"/>}
                      </div>
                    </div>
                }
              </div>

              {/* Card body */}
              <div style={{ padding: '16px 24px 24px', flex: 1 }}>
                <Section label="醫師經歷" items={d.experience} hue={d.hue} />
                <Section label="專科資格" items={d.certification} hue={d.hue} />
                <Section label="專長" items={d.specialty} hue={d.hue} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { ListPage, ArticlePage, ContactPage, DoctorsPage });
