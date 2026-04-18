// Nav bar — sticky, announcement strip, mega-menu on 衛教專區

function TopStrip() {
  return (
    <div className="r-nav-topstrip" style={{
      background: 'linear-gradient(90deg, #f0f7f4 0%, #e4ede9 100%)', color: '#5a7370', fontSize: 13, letterSpacing: 0.2, borderBottom: '1px solid #e4ede9',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 24px', gap: 24,
      }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <Icon.Phone style={{ width: 14, height: 14, opacity: 0.85 }}/>
            (02) 2345-6789
          </span>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <Icon.Pin style={{ width: 14, height: 14, opacity: 0.85 }}/>
            台北市大安區工學路 168 號
          </span>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: '#b38a1a' }}>
            <span style={{
              width: 6, height: 6, borderRadius: 99, background: '#4fb39a',
              boxShadow: '0 0 0 4px rgba(79,179,154,0.25)',
            }}/>
            今日門診中 · 18:30 晚診
          </span>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href="#" style={linkStyle}>院所公告</a>
          <a href="#" style={linkStyle}>LINE 官方帳號</a>
          <a href="#" style={linkStyle}>English</a>
        </div>
      </div>
    </div>
  );
}
const linkStyle = { color: '#5a7370', textDecoration: 'none', opacity: 0.9 };

const NAV = [
  { key: 'edu',       label: '衛教專區',   mega: true },
  { key: 'doctors',   label: '醫師團隊' },
  { key: 'services',  label: '診療項目' },
  { key: 'info',      label: '門診資訊' },
  { key: 'resources', label: '診間小叮嚀' },
];

function Navbar({ onNavigate, current, fontScale }) {
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
        borderBottom: scrolled ? '1px solid #e4ede9' : '1px solid transparent',
        transition: 'border-color .2s',
      }}>
        <div className="container r-nav-grid" style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center', padding: '14px 24px', gap: 32,
        }}>
          {/* Logo block */}
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
             style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
            <ClinicMark size={44}/>
            <div style={{ lineHeight: 1.1 }}>
              <div className="r-logo-title" style={{ fontSize: 18, fontWeight: 700, color: '#1a3942', letterSpacing: '0.02em' }}>
                工學誠心診所
              </div>
              <div className="r-logo-sub" style={{ fontSize: 11, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.18em', marginTop: 2 }}>
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
                <a key={item.key} href="#"
                  onMouseEnter={() => setOpenMega(item.mega ? item.key : false)}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.key); if (item.mega) setOpenMega(openMega === item.key ? false : item.key); }}
                  style={{
                    padding: '10px 16px', borderRadius: 8, textDecoration: 'none',
                    color: active ? '#0e7c7b' : '#1a3942', fontWeight: 600,
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
            <button className="r-cta-search" onClick={() => onNavigate('search')} aria-label="搜尋" style={iconBtn}>
              <Icon.Search style={{ width: 18, height: 18 }}/>
            </button>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('appointment');}}
               style={{
              padding: '10px 20px', background: '#0e7c7b', color: '#fff', borderRadius: 999,
              textDecoration: 'none', fontWeight: 600, fontSize: 14,
              boxShadow: '0 1px 0 rgba(255,255,255,0.3) inset, 0 4px 10px rgba(14,124,123,0.25)',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <Icon.Calendar style={{ width: 16, height: 16 }}/>
              <span className="r-cta-text">線上預約</span>
            </a>
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
            background: '#ffffff', borderTop: '1px solid #e4ede9',
            boxShadow: '0 20px 40px -20px rgba(15,42,66,0.18)',
          }}>
            <div className="container" style={{ padding: '28px 24px' }}>
              <div className="r-mega-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
              }}>
                {CATEGORIES.map(c => {
                  const I = Illo[c.icon];
                  return (
                    <a key={c.id} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list'); setOpenMega(false);}}
                       style={megaCell}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: `${c.tone}15`, display: 'grid', placeItems: 'center',
                        flexShrink: 0,
                      }}>
                        <div style={{ width: 28, height: 28 }}>
                          <I tone={c.tone}/>
                        </div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#1a3942', fontSize: 15 }}>
                          {c.name}
                          <span style={{ color: '#8aa3a0', fontWeight: 400, marginLeft: 6, fontSize: 12 }}>
                            {c.count} 篇
                          </span>
                        </div>
                        <div style={{ fontSize: 13, color: '#6d7c79', marginTop: 2 }}>{c.desc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div style={{
                marginTop: 20, padding: '16px 20px',
                background: 'linear-gradient(95deg, #f0f8f6, #e6f2ef)',
                borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 12, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.1em' }}>
                    本月專題
                  </div>
                  <div style={{ fontSize: 16, color: '#1a3942', fontWeight: 600, marginTop: 2 }}>
                    2026 春季流感與過敏季專區
                  </div>
                </div>
                <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list'); setOpenMega(false);}}
                   style={{ color: '#0e7c7b', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                  閱讀專題 <Icon.ArrowRight style={{ width: 16, height: 16 }}/>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)}>
        <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #eaf2ef' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <ClinicMark size={36}/>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1a3942' }}>工學誠心診所</div>
            </div>
            <button onClick={() => setDrawerOpen(false)} aria-label="關閉" style={{ ...iconBtn, width: 36, height: 36 }}>
              <Icon.X style={{ width: 16, height: 16 }}/>
            </button>
          </div>
          <nav style={{ padding: 12 }}>
            {NAV.map(item => (
              <a key={item.key} href="#" onClick={(e)=>{ e.preventDefault(); onNavigate(item.key); setDrawerOpen(false); }}
                style={{
                  display: 'block', padding: '14px 16px', borderRadius: 10, textDecoration: 'none',
                  color: '#1a3942', fontWeight: 600, fontSize: 16,
                }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ padding: '16px 20px', marginTop: 'auto', borderTop: '1px solid #eaf2ef', background: '#f5faf8' }}>
            <a href="#" onClick={(e)=>{ e.preventDefault(); onNavigate('appointment'); setDrawerOpen(false); }}
              style={{
                display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center',
                padding: '14px 20px', background: '#0e7c7b', color: '#fff', borderRadius: 12,
                textDecoration: 'none', fontWeight: 600, fontSize: 15,
              }}>
              <Icon.Calendar style={{ width: 16, height: 16 }}/>
              線上預約
            </a>
            <div style={{ marginTop: 12, fontSize: 13, color: '#56706c', textAlign: 'center' }}>
              (02) 2345-6789 · 今日門診中
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const iconBtn = {
  width: 40, height: 40, borderRadius: 99, border: '1px solid #e4ede9',
  background: 'transparent', color: '#1a3942', cursor: 'pointer',
  display: 'grid', placeItems: 'center',
};
const megaCell = {
  display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 10,
  textDecoration: 'none', transition: 'background .15s',
  alignItems: 'flex-start',
};

Object.assign(window, { Navbar });
