// ListPage — category, favorites, recent

function ListPage({ ctx }) {
  const { hashState, favorites, recent } = ctx;
  let title, topics;

  if (hashState.view === 'favorites') {
    title = '我的收藏';
    topics = window.CATEGORIES.flatMap(c =>
      (c.topics || []).filter(t => favorites.includes(t.id))
        .map(t => ({ ...t, categoryId: c.id, categoryName: c.name, tone: c.tone }))
    );
  } else if (hashState.view === 'recent') {
    title = '最近瀏覽';
    const all = window.CATEGORIES.flatMap(c =>
      (c.topics || []).map(t => ({ ...t, categoryId: c.id, categoryName: c.name, tone: c.tone }))
    );
    topics = recent.map(id => all.find(t => t.id === id)).filter(Boolean);
  } else {
    const cat = window.CATEGORIES.find(c => c.id === hashState.categoryId);
    if (!cat) return <div className="container" style={{ padding: '80px 24px' }}>找不到此分類</div>;
    title = cat.name;
    topics = (cat.topics || []).map(t => ({ ...t, categoryId: cat.id, categoryName: cat.name, tone: cat.tone }));
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
  }, [html]);
  return <div ref={ref} className="article-content"/>;
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
      <div className="container r-article-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 240px', gap: 64, alignItems: 'start',
      }}>
        <article className="r-article-body" style={{ maxWidth: 'var(--max-article)' }}>
          <a href={`#/${category.id}`} style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: category.tone, textDecoration: 'none',
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
        </article>

        <aside className="r-article-toc" style={{
          position: 'sticky', top: 100, fontSize: 13, color: 'var(--muted)',
        }}>
          <div style={{ fontWeight: 600, color: 'var(--fg-heading)', marginBottom: 12 }}>本頁重點</div>
          <div style={{ color: 'var(--muted-3)', fontStyle: 'italic' }}>
            (自動目錄功能將於後續加入)
          </div>
        </aside>
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

Object.assign(window, { ListPage, ArticlePage, ContactPage });
