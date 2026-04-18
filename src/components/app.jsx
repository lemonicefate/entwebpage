// Smoke test
const { createElement: h } = React;
const { createRoot } = ReactDOM;

function App() {
  return h('div', { style: { padding: 40, fontFamily: 'sans-serif' } }, 'B2 build: OK');
}

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(h(App));
