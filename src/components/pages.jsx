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

Object.assign(window, { ListPage });
