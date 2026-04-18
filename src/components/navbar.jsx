// Nav bar — sticky, announcement strip, mega-menu on 衛教專區

function TopStrip() {
  const phone   = window.CONFIG?.contact?.phone;
  const address = window.CONFIG?.contact?.address;
  const lineUrl = window.CONFIG?.contact?.lineUrl;
  return (
    <div className="r-nav-topstrip" style={{
      background: 'linear-gradient(90deg, #f0f7f4 0%, #e4ede9 100%)', color: '#5a7370', fontSize: 13, letterSpacing: 0.2, borderBottom: '1px solid var(--border-soft)',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 24px', gap: 24,
      }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          {phone && (
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <Icon.Phone style={{ width: 14, height: 14, opacity: 0.85 }}/>
              {phone}
            </span>
          )}
          {address && (
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <Icon.Pin style={{ width: 14, height: 14, opacity: 0.85 }}/>
              {address}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href="#" style={linkStyle}>院所公告</a>
          {lineUrl && (
            <a href={lineUrl} target="_blank" rel="noreferrer" style={linkStyle}>LINE 官方帳號</a>
          )}
        </div>
      </div>
    </div>
  );
}
const linkStyle = { color: '#5a7370', textDecoration: 'none', opacity: 0.9 };

const NAV = [
  { key: 'edu',     label: '衛教專區', mega: true, target: '#/' },
  { key: 'doctors', label: '醫師團隊', target: '#/doctors' },
  { key: 'info',    label: '門診資訊', target: '#/#info' },
  { key: 'faq',     label: '常見問答', target: '#/#faq' },
  { key: 'contact', label: '聯絡我們', target: '#/contact' },
];

function Navbar({ ctx }) {
  const { theme, setTheme, fontScale, setFontScale, favorites } = ctx;
  const current = ctx.hashState.route === 'list' ? 'edu' : '';

  const [openMega, setOpenMega] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <TopStrip/>
      <div style={{
        background: '#ffffffee', backdropFilter: 'saturate(140%) blur(8px)',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        transition: 'border-color .2s',
      }}>
        <div className="container r-nav-grid" style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center', padding: '14px 24px', gap: 32,
        }}>
          {/* Logo block */}
          <a href="#/"
             style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
            <ClinicMark size={44}/>
            <div style={{ lineHeight: 1.1 }}>
              <div className="r-logo-title" style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-heading)', letterSpacing: '0.02em' }}>
                工學誠心診所
              </div>
              <div className="r-logo-sub" style={{ fontSize: 11, color: 'var(--teal-2)', fontWeight: 600, letterSpacing: '0.18em', marginTop: 2 }}>
                GONGXUE FAMILY CLINIC
              </div>
            </div>
          </a>

          {/* Primary nav — hides on mobile */}
          <nav className="r-nav-primary" style={{ display: 'flex', justifyContent: 'center', gap: 4 }}
               onMouseLeave={() => setOpenMega(false)}>
            {NAV.map(item => {
              const active = current === item.key;
              return (
                <a key={item.key} href={item.target}
                  onMouseEnter={() => setOpenMega(item.mega ? item.key : false)}
                  onClick={() => { if (!item.mega) setOpenMega(false); }}
                  style={{
                    padding: '10px 16px', borderRadius: 8, textDecoration: 'none',
                    color: active ? 'var(--teal)' : 'var(--fg-heading)', fontWeight: 600,
                    background: active ? 'rgba(74,158,148,0.10)' : 'transparent',
                    fontSize: 15, display: 'inline-flex', gap: 4, alignItems: 'center',
                    transition: 'background .15s',
                  }}>
                  {item.label}
                  {item.mega && <Icon.Chevron style={{ width: 14, height: 14, opacity: 0.5 }}/>}
                </a>
              );
            })}
          </nav>

          {/* CTA cluster */}
          <div className="r-cta-cluster" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {/* Theme toggle */}
            <button aria-label="切換主題" title="切換亮/暗主題"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    style={iconBtn}>
              {theme === 'dark' ? '☀' : '🌙'}
            </button>
            {/* Font-scale toggle */}
            <button aria-label="切換字級" title="切換標準/長輩字級"
                    onClick={() => setFontScale(fontScale === 'senior' ? 'normal' : 'senior')}
                    style={{ ...iconBtn, fontWeight: 700, fontSize: fontScale === 'senior' ? 18 : 14 }}>
              A
            </button>
            {/* Favorites link with badge */}
            <a href="#/favorites" aria-label={`我的收藏（${favorites.length} 篇）`}
               style={{ ...iconBtn, position: 'relative', textDecoration: 'none' }}>
              <Icon.Heart style={{ width: 18, height: 18 }}/>
              {favorites.length > 0 && (
                <span style={{
                  position: 'absolute', top: -4, right: -4,
                  background: 'var(--peach)', color: '#fff', borderRadius: 99,
                  fontSize: 10, fontWeight: 700, minWidth: 18, height: 18,
                  display: 'grid', placeItems: 'center', padding: '0 4px',
                }}>
                  {favorites.length}
                </span>
              )}
            </a>
            {/* LINE CTA — only if lineUrl is set */}
            {window.CONFIG?.contact?.lineUrl && (
              <a href={window.CONFIG.contact.lineUrl} target="_blank" rel="noreferrer"
                 style={{
                   padding: '10px 20px', background: '#06C755', color: '#fff',
                   borderRadius: 999, textDecoration: 'none', fontWeight: 600, fontSize: 14,
                   display: 'inline-flex', alignItems: 'center', gap: 6,
                 }}>
                <Icon.Line style={{ width: 16, height: 16 }}/>
                <span className="r-cta-text">LINE 預約</span>
              </a>
            )}
            {/* Hamburger — shows on tablet & mobile only */}
            <button className="r-nav-hamburger" onClick={() => setDrawerOpen(true)} aria-label="開啟選單"
              style={{ ...iconBtn, marginLeft: 2 }}>
              <Icon.Menu style={{ width: 18, height: 18 }}/>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {openMega === 'edu' && (
          <div onMouseEnter={() => setOpenMega('edu')} onMouseLeave={() => setOpenMega(false)}
               style={{
            position: 'absolute', left: 0, right: 0, top: '100%',
            background: '#ffffff', borderTop: '1px solid var(--border-soft)',
            boxShadow: '0 20px 40px -20px rgba(15,42,66,0.18)',
          }}>
            <div className="container" style={{ padding: '28px 24px' }}>
              <div className="r-mega-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
              }}>
                {(window.CATEGORIES || []).map(c => {
                  const I = Illo[c.icon];
                  return (
                    <a key={c.id} href={`#/${c.id}`}
                       onClick={() => setOpenMega(false)}
                       style={megaCell}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${c.tone}15`, display: 'grid', placeItems: 'center',
                        flexShrink: 0,
                      }}>
                        <div style={{ width: 28, height: 28 }}>
                          {I ? <I tone={c.tone}/> : null}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--fg-heading)', fontSize: 15 }}>
                          {c.name}
                          <span style={{ color: 'var(--muted-3)', fontWeight: 400, marginLeft: 6, fontSize: 12 }}>
                            {(c.topics || []).length} 篇
                          </span>
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--muted-2)', marginTop: 2 }}>{c.desc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)}>
        <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border-soft)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <ClinicMark size={36}/>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg-heading)' }}>工學誠心診所</div>
            </div>
            <button onClick={() => setDrawerOpen(false)} aria-label="關閉" style={{ ...iconBtn, width: 36, height: 36 }}>
              <Icon.X style={{ width: 16, height: 16 }}/>
            </button>
          </div>
          <nav style={{ padding: 12 }}>
            {(window.CATEGORIES || []).map(c => {
              const count = (c.topics || []).length;
              return (
                <a key={c.id} href={`#/${c.id}`}
                   onClick={() => setDrawerOpen(false)}
                   style={{
                     display: 'block', padding: '14px 16px', borderRadius: 10, textDecoration: 'none',
                     color: 'var(--fg-heading)', fontWeight: 600, fontSize: 16,
                   }}>
                  {c.name} ({count})
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

const iconBtn = {
  width: 40, height: 40, borderRadius: 99, border: '1px solid var(--border-soft)',
  background: 'transparent', color: 'var(--fg-heading)', cursor: 'pointer',
  display: 'grid', placeItems: 'center',
};
const megaCell = {
  display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 10,
  textDecoration: 'none', transition: 'background .15s',
  alignItems: 'flex-start',
};

Object.assign(window, { Navbar });
