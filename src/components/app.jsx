// App root — hash router, theme/fontScale/cvdMode state, favorites/recent,
// mounts Navbar + route content + Footer + A11y FAB.

// Import sibling files for their side effects (Object.assign to window)
import './shared.jsx';
import './data.jsx';
import './navbar.jsx';
import './heroes.jsx';
import './sections.jsx';
import './pages.jsx';

const { useState, useEffect, createElement: h, Fragment } = React;
const { createRoot } = ReactDOM;

function parseHash() {
  const raw = (window.location.hash || '#/').replace(/^#/, '');
  const parts = raw.split('/').filter(Boolean);
  if (parts.length === 0) return { route: 'home' };
  if (parts[0] === 'favorites') return { route: 'list', view: 'favorites' };
  if (parts[0] === 'recent')    return { route: 'list', view: 'recent' };
  if (parts[0] === 'contact')   return { route: 'contact' };
  if (parts.length === 1)       return { route: 'list', categoryId: parts[0] };
  return { route: 'article', categoryId: parts[0], topicId: parts[1] };
}
function readLs(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw !== null ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}
function writeLs(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }

function App() {
  const [hashState, setHashState] = useState(parseHash);
  const [theme,     setTheme]     = useState(() => localStorage.getItem('theme')     || 'light');
  const [fontScale, setFontScale] = useState(() => localStorage.getItem('fontScale') || 'normal');
  const [cvdMode,   setCvdMode]   = useState(() => localStorage.getItem('cvdMode')   === 'on');
  const [favorites, setFavorites] = useState(() => readLs('gx_favorites', []));
  const [recent,    setRecent]    = useState(() => readLs('gx_recent', []));

  useEffect(() => {
    const onHash = () => { setHashState(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { localStorage.setItem('theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('fontScale', fontScale); document.documentElement.classList.toggle('senior', fontScale === 'senior'); }, [fontScale]);

  // cvdMode: apply synchronously during render so Proxy sees current value on first paint
  if (typeof document !== 'undefined') {
    if (cvdMode) document.documentElement.setAttribute('data-cvd', 'on');
    else document.documentElement.removeAttribute('data-cvd');
  }
  useEffect(() => { localStorage.setItem('cvdMode', cvdMode ? 'on' : 'off'); }, [cvdMode]);
  useEffect(() => writeLs('gx_favorites', favorites), [favorites]);
  useEffect(() => writeLs('gx_recent', recent), [recent]);

  const toggleFavorite = id => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const addRecent = id => setRecent(prev => [id, ...prev.filter(x => x !== id)].slice(0, 10));

  const ctx = { theme, setTheme, fontScale, setFontScale, cvdMode, setCvdMode, favorites, toggleFavorite, recent, addRecent, hashState };

  // Late-bind: each other JSX file assigns its component to window via Object.assign
  const { Navbar, HomePage, ListPage, ArticlePage, ContactPage, Footer } = window;

  return h(Fragment, null,
    Navbar && h(Navbar, { ctx }),
    hashState.route === 'home'    && HomePage    && h(HomePage,    { ctx }),
    hashState.route === 'list'    && ListPage    && h(ListPage,    { ctx }),
    hashState.route === 'article' && ArticlePage && h(ArticlePage, { ctx }),
    hashState.route === 'contact' && ContactPage && h(ContactPage, { ctx }),
    Footer && h(Footer, { ctx }),
    h('button', {
      className: `a11y-fab ${cvdMode ? 'on' : ''}`,
      onClick: () => setCvdMode(v => !v),
      'aria-pressed': cvdMode,
      title: '切換色弱友善模式',
    },
      h('span', { className: 'dot', 'aria-hidden': true }),
      `色弱友善模式${cvdMode ? ' · 已開啟' : ''}`
    )
  );
}

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(h(App));
