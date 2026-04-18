// Smoke test — imports the other bundled files so esbuild pulls them in
import './shared.jsx';
import './data.jsx';
import './navbar.jsx';
import './heroes.jsx';
import './sections.jsx';
import './pages.jsx';

const { createElement: h } = React;
const { createRoot } = ReactDOM;

function App() {
  return h('div', { style: { padding: 40, fontFamily: 'sans-serif' } }, 'B2 build: OK');
}

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(h(App));
