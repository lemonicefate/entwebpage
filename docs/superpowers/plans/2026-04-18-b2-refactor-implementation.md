# B2 React Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the patient education SPA to the new Warm Teal × Peach design system, using React 18 with pre-compiled JSX (esbuild), 9 new medical categories, and existing `content/*.html` fragments preserved.

**Architecture:** Pre-compile React JSX at publish time via a local `esbuild` binary, output to `dist/app.js`; React UMD loads from CDN. Hash routing, content-fragment loading, and SEO meta updates are implemented inside React. All HTML fragment content is sanitized with DOMPurify before DOM injection. Existing vanilla `js/app.js` is deleted at the end; `js/content.js` is rewritten with new categories. Old site keeps running on master until the final swap commit — all work on a feature branch.

**Tech Stack:** React 18.3.1 (UMD), esbuild 0.21+ (single binary), DOMPurify 3.1 (UMD), vanilla CSS with custom properties, existing `publish.sh` extended with a compile step. GitHub Pages static hosting.

**Reference materials:**
- Design spec: `docs/superpowers/specs/2026-04-18-b2-refactor-design.md`
- Design handoff: `docs/superpowers/design-handoff-2026-04-b2/` — **port JSX files from `components/` rather than retyping.**
- New DESIGN.md source: `docs/superpowers/design-handoff-2026-04-b2/DESIGN.md`
- Original HTML prototype: `docs/superpowers/design-handoff-2026-04-b2/工學誠心診所衛教網.html`

**Verification approach:** No unit-test infrastructure. Each task verifies with: (1) `node --check` / `bash -n` for syntax, (2) `./publish.sh --build` must succeed, (3) `./publish.sh --serve` + browser visual check with explicit expected outcome, (4) DevTools console = zero errors.

**Security invariant — HTML content injection:** Articles in `content/*.html` are first-party (reviewed by clinic owner before commit). Still, before injecting into the DOM, we sanitize them with DOMPurify and insert via `Range.createContextualFragment` + `el.replaceChildren(fragment)` on a ref — not through React props. This gives XSS defense-in-depth.

---

## Pre-Flight

### Task 0: Feature branch + clean starting state

- [ ] **Step 1: Stash stray changes**

```bash
git status
git stash push -m "pre-refactor stash" -- .claude css js  # only if needed
```

- [ ] **Step 2: Create refactor branch**

```bash
git checkout -b refactor/b2-react
git status   # expect "nothing to commit"
git tag pre-b2-refactor
```

---

## Phase A — Build Infrastructure

### Task A1: Scaffold directories and update .gitignore

- [ ] **Step 1: Create dirs**

```bash
mkdir -p src/components src/styles dist tools
touch src/components/.gitkeep src/styles/.gitkeep dist/.gitkeep tools/.gitkeep
```

- [ ] **Step 2: Append to `.gitignore`**

```
# esbuild binary — downloaded by publish.sh on first run
tools/esbuild
tools/esbuild.exe

# Keep dist/ and src/ tracked (dist/*.js is what GH Pages serves)
!dist/
!src/
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore src/ dist/ tools/
git commit -m "chore: scaffold src/dist/tools dirs for B2 refactor"
```

### Task A2: Add esbuild + JSX compile step to publish.sh

- [ ] **Step 1: Locate insertion point**

```bash
grep -n '^usage\|^case "${1:-}"' publish.sh
```

- [ ] **Step 2: Insert these bash functions after `usage()` and before the `case` dispatcher:**

```bash
# ── B2 build ──
ensure_esbuild() {
  if [[ -x ./tools/esbuild ]]; then return 0; fi
  echo "📦 Downloading esbuild (one-time)…"
  mkdir -p tools
  local pkg
  case "$(uname -s)-$(uname -m)" in
    Linux-x86_64)   pkg="@esbuild/linux-x64/-/linux-x64-0.21.5.tgz" ;;
    Linux-aarch64)  pkg="@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz" ;;
    Darwin-arm64)   pkg="@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz" ;;
    Darwin-x86_64)  pkg="@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz" ;;
    *)              echo "❌ Unsupported: $(uname -s)-$(uname -m)"; exit 1 ;;
  esac
  curl -fsSL "https://registry.npmjs.org/${pkg}" | tar -xz -C tools --strip-components=2 package/bin/esbuild
  chmod +x ./tools/esbuild
  echo "✅ $(./tools/esbuild --version)"
}

compile_jsx() {
  ensure_esbuild
  echo "🔨 Compiling JSX → dist/app.js"
  ./tools/esbuild \
    src/components/shared.jsx src/components/data.jsx \
    src/components/navbar.jsx src/components/heroes.jsx \
    src/components/sections.jsx src/components/pages.jsx \
    src/components/app.jsx \
    --bundle --outfile=dist/app.js \
    --loader:.jsx=jsx --format=iife --target=es2020 --minify \
    --external:react --external:react-dom --external:dompurify \
    --define:process.env.NODE_ENV=\"production\"
  echo "✅ dist/app.js built ($(wc -c < dist/app.js) bytes)"
}
```

- [ ] **Step 3: Add `--build` case above the `--serve` case**

```bash
  --build)
    compile_jsx
    ;;
```

- [ ] **Step 4: Call `compile_jsx` at the end of both `--all` and single-slug cases** (before their respective `;;`)

- [ ] **Step 5: Update usage() text**

Append to the usage() echo block:

```bash
  echo "  ./publish.sh --build             # 只編譯 JSX → dist/app.js"
```

- [ ] **Step 6: Syntax + commit**

```bash
bash -n publish.sh && echo OK
git add publish.sh
git commit -m "build: add esbuild download + JSX compile step to publish.sh"
```

### Task A3: Smoke-test build with minimal app.jsx + stubs

- [ ] **Step 1: Create six empty stubs**

```bash
for f in shared data navbar heroes sections pages; do
  echo "// stub — implemented later" > "src/components/${f}.jsx"
done
```

- [ ] **Step 2: Write minimal `src/components/app.jsx`**

```jsx
// Smoke test
const { createElement: h } = React;
const { createRoot } = ReactDOM;

function App() {
  return h('div', { style: { padding: 40, fontFamily: 'sans-serif' } }, 'B2 build: OK');
}

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(h(App));
```

- [ ] **Step 3: Build + verify**

```bash
./publish.sh --build
ls -la dist/app.js   # expect non-empty file
head -c 80 dist/app.js
```

- [ ] **Step 4: Commit**

```bash
git add src/components/*.jsx dist/app.js
git commit -m "build(smoke): minimal app.jsx + stubs verify esbuild pipeline"
```

---

## Phase B — Design System

### Task B1: Replace DESIGN.md

```bash
cp docs/superpowers/design-handoff-2026-04-b2/DESIGN.md DESIGN.md
head -3 DESIGN.md   # expect "工學誠心診所 · 衛教專區 — 設計規格書"
git add DESIGN.md
git commit -m "design: replace DESIGN.md with new Warm Teal x Peach design system"
```

### Task B2: Write src/styles/main.css

**Files:** Create `src/styles/main.css` (~280 lines).

- [ ] **Step 1: Write the stylesheet with the following sections in order:**

**Section 1 — `:root` custom properties:**
Colors: `--teal #0e7c7b`, `--teal-2 #4a9e94`, `--teal-mist-1 #b4ddd3`, `--teal-mist-2 #9dccc3`, `--teal-mist-3 #8fc3b9`, `--teal-deep #0a4d4d`, `--peach #e89661`, `--peach-dark #e5966a`, `--peach-light #f2b088`, `--gold #f2c94c`, `--bg #ffffff`, `--cream-1 #f5faf8`, `--cream-2 #f0f7f4`, `--cream-3 #e4ede9`, `--cream-4 #eaf2ef`, `--fg #0f2a42`, `--fg-heading #1a3942`, `--muted #56706c`, `--muted-2 #6d8481`, `--muted-3 #8aa3a0`, `--muted-4 #435754`, `--border-soft #eaf2ef`, `--border-medium #d6cfc6`.
Semantic: `--success-bg #e7f5ef / --success-fg #1a7a4a`, `--warn-bg #fdf4d9 / --warn-fg #a07a14`, `--danger-bg #fde6e0 / --danger-fg #c44a2e`.
Sizing: `--base-size 16px`, `--max-content 1200px`, `--max-article 720px`.
Shadows: `--shadow-soft 0 10px 22px -14px rgba(15,42,66,0.18)`, `--shadow-lift 0 16px 30px -20px rgba(15,42,66,0.2)`, `--shadow-hero 0 24px 44px -20px rgba(229,150,106,0.5)`.

**Section 2 — `[data-theme="dark"]` overrides** (warm dark, not pure black):
`--bg #17221f`, `--cream-1 #1e2b27`, `--cream-2 #243330`, `--cream-3 #2d3d39`, `--cream-4 #2a3a36`, `--fg #e8f0ec`, `--fg-heading #f5faf8`, `--muted #9dccc3`, `--muted-2 #8aa3a0`, `--muted-3 #6d8481`, `--border-soft #2d3d39`, `--border-medium #3d4d49`.

**Section 3 — Senior mode:**
```css
html.senior { --base-size: 19px; }
html.senior h1, html.senior h2 { letter-spacing: 0 !important; }
```

**Section 4 — CVD (color-vision-deficient) mode:** Copy verbatim from `docs/superpowers/design-handoff-2026-04-b2/工學誠心診所衛教網.html` lines 32–44 (the `html[data-cvd="on"]` block with `--cvd-red/green/amber` and six `[data-cvd-*]` attribute selectors).

**Section 5 — Base reset & typography:**
```css
* { box-sizing: border-box; }
html, body {
  margin: 0; padding: 0; background: var(--bg); color: var(--fg);
  font-family: 'Noto Sans TC', -apple-system, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  font-size: var(--base-size);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
h1, h2, h3, h4 { font-family: 'Noto Sans TC', sans-serif; color: var(--fg-heading); text-wrap: pretty; }
button:focus-visible, a:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
.container { max-width: var(--max-content); margin: 0 auto; }
```

**Section 6 — Callout system:**
```css
.callout { padding: 16px 20px; border-radius: 10px; margin: 16px 0; border-left: 4px solid var(--teal); background: rgba(14,124,123,0.06); }
.callout-recommend { border-left-color: var(--teal); background: rgba(14,124,123,0.08); }
.callout-caution { border-left-color: var(--peach-dark); background: rgba(232,150,97,0.10); }
.callout-danger { border-left-color: #c44a2e; background: var(--danger-bg); }
.callout-info { border-left-color: var(--teal-2); background: rgba(74,158,148,0.10); }
.callout > strong:first-child { display: block; font-weight: 700; margin-bottom: 4px; }
```

**Section 7 — A11y FAB:**
```css
.a11y-fab {
  position: fixed; left: 20px; bottom: 20px; z-index: 998;
  background: var(--bg); border: 1px solid var(--border-soft); border-radius: 999px;
  padding: 10px 16px 10px 12px; font-size: 13px; font-weight: 600; color: var(--fg-heading);
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  box-shadow: 0 8px 20px -10px rgba(15,42,66,0.25);
  font-family: 'Noto Sans TC', sans-serif;
}
.a11y-fab:hover { background: var(--cream-1); }
.a11y-fab .dot { width: 10px; height: 10px; border-radius: 50%; background: #cbd5d2; box-shadow: inset 0 0 0 2px #fff, 0 0 0 1px #9ab3af; }
.a11y-fab.on .dot { background: var(--teal); box-shadow: inset 0 0 0 2px #fff, 0 0 0 1px var(--teal); }
.a11y-fab.on { background: #e7f3f1; border-color: var(--teal); color: var(--teal); }
```

**Section 8 — Hover transitions:**
```css
.topic-card, .feat-med { transition: transform .2s, box-shadow .2s; }
.topic-card:hover, .feat-med:hover { transform: translateY(-3px); box-shadow: var(--shadow-lift); }
.cat-tile { transition: transform .2s, box-shadow .2s; }
.cat-tile:hover { transform: translateY(-2px); box-shadow: var(--shadow-soft); }
.latest-row:hover { background: var(--cream-1); }
```

**Section 9 — Mobile drawer:**
```css
.r-nav-hamburger { display: none; }
.mobile-drawer { position: fixed; inset: 0; background: rgba(15,42,66,0.4); z-index: 100; opacity: 0; pointer-events: none; transition: opacity .2s; }
.mobile-drawer.open { opacity: 1; pointer-events: auto; }
.mobile-drawer-panel { position: absolute; top: 0; right: 0; bottom: 0; width: min(86vw, 360px); background: var(--bg); transform: translateX(100%); transition: transform .25s ease-out; display: flex; flex-direction: column; overflow-y: auto; }
.mobile-drawer.open .mobile-drawer-panel { transform: translateX(0); }
```

**Section 10 — Responsive `@media (max-width: 1023px)` + `@media (max-width: 639px)`:**
Copy the full responsive layer verbatim from `docs/superpowers/design-handoff-2026-04-b2/工學誠心診所衛教網.html` lines 71–215. Replace literal hex values with CSS var references where natural (e.g. `#eaf2ef` → `var(--cream-4)`, `#56706c` → `var(--muted)`).

- [ ] **Step 2: Commit**

```bash
git add src/styles/main.css
git commit -m "design: new CSS tokens (Warm Teal x Peach) + responsive layer"
```

---

## Phase C — Data Layer

### Task C1: Rewrite js/content.js

**Files:** Overwrite `js/content.js`.

- [ ] **Step 1: Write the new content.js with these sections:**

**Block 1 — `CONFIG` object:**
```js
const CONFIG = {
  siteName: '誠心醫療體系工學診所衛教專區',
  siteNameShort: '工學診所衛教專區',
  clinicName: '誠心醫療體系工學診所',
  clinicNameEn: 'GONGXUE FAMILY CLINIC',
  description: '家醫科衛教資訊平台，提供慢性病、呼吸道、腸胃、兒童、長者等健康照護知識。',
  gaId: '',
  defaultLang: 'zh-TW',
  contact: {
    address: '', phone: '', email: '', hours: '',
    mapEmbedUrl: '', lineUrl: '',
    lineQrCode: './assets/images/line-qrcode.png',
    formEndpoint: '',
  },
  announcements: [],
};
```

**Block 2 — `CATEGORIES_BASE` array** (9 entries). For each: `{ id, name, icon, desc, tone, toneCvd, topics: [] }`. Exact values:

| id | name | icon | desc | tone | toneCvd |
|---|---|---|---|---|---|
| chronic | 慢性病照護 | Heartbeat | 高血壓、糖尿病、高血脂、痛風、代謝症候群 | #e89661 | #E69F00 |
| respir | 感冒與呼吸道 | Lungs | 流感、咳嗽、過敏性鼻炎、鼻竇炎、哮吼 | #1f8e84 | #009E73 |
| ortho | 骨骼關節 | Bone | 肩頸痠痛、五十肩、膝蓋保養 | #d4a82e | #B8860B |
| gi | 腸胃保健 | Apple | 胃食道逆流、腸病毒、諾羅、腺病毒 | #d96757 | #D55E00 |
| kids | 兒童健康 | Baby | 生長發育、疫苗、發燒、玫瑰疹、異位性皮膚炎 | #4a9e94 | #56B4E9 |
| senior | 長者照護 | Family | 跌倒預防、失智、多重用藥 | #7aa83b | #CC79A7 |
| preventiv | 預防保健 | Shield | 成人健檢、疫苗、癌症篩檢、代謝症候群預防 | #0e7c7b | #0072B2 |
| nutri | 營養飲食 | Leaf | DASH 飲食、痛風飲食、血脂解讀、均衡餐盤 | #7aa83b | #8E7CC3 |
| ent | 耳鼻喉專科 | Stethoscope | 中耳炎、眩暈、耳鳴、睡眠呼吸中止症、鼻出血 | #0e7c7b | #0e7c7b |

**Block 3 — `CATEGORIES` Proxy wrapper:**
```js
const CATEGORIES = CATEGORIES_BASE.map(base => new Proxy(base, {
  get(target, prop) {
    if (prop === 'tone' && typeof document !== 'undefined'
        && document.documentElement.getAttribute('data-cvd') === 'on') {
      return target.toneCvd || target.tone;
    }
    return target[prop];
  }
}));
```

**Block 4 — Placeholder `DOCTORS` / `FAQS` / `HOURS`:**
- `DOCTORS`: 4 entries with fields `{ id, name, title, expertise[], bio, hue }`. Names `張OO/李OO/陳OO/王OO 醫師（TODO）`, bios `'TODO：請填寫醫師學經歷與專長簡介。'`, hues `#0e7c7b / #1f8e84 / #e89661 / #4a9e94`.
- `FAQS`: 6 entries with fields `{ id, q, a }`. Questions `第一次看診需要帶什麼？ / 沒有健保可以看診嗎？ / 慢性處方箋可以提前領藥嗎？ / 可以代家人掛號嗎？ / 打疫苗需要預約嗎？ / 診所有停車位嗎？`. All answers start with `TODO：`.
- `HOURS`: 7 entries with fields `{ day, am, pm, ev }`. Days 星期一–星期日. First 6 days all three fields = `'TODO'`. Sunday all `'休診'`.

**Block 5 — Export:**
```js
Object.assign(window, { CONFIG, CATEGORIES, DOCTORS, FAQS, HOURS });
```

- [ ] **Step 2: Syntax check + commit**

```bash
node --check js/content.js && echo OK
git add js/content.js
git commit -m "data: rewrite content.js with 9 categories + DOCTORS/FAQS/HOURS placeholders"
```

---

## Phase D — React Foundation

### Task D1: Port shared.jsx from design-refs

- [ ] **Step 1: Copy**

```bash
cp docs/superpowers/design-handoff-2026-04-b2/components/shared.jsx src/components/shared.jsx
```

- [ ] **Step 2: Replace `ClinicMark` to use the real logo file.**

Open `src/components/shared.jsx`. Find `function ClinicMark({ size = 40 })` (~line 82). Replace its body with:

```jsx
function ClinicMark({ size = 40 }) {
  return (
    <img
      src="./assets/logo.jpg"
      alt="誠心醫療體系工學診所"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: 10, objectFit: 'contain', background: '#fff' }}
    />
  );
}
```

- [ ] **Step 3: Build + commit**

```bash
./publish.sh --build
git add src/components/shared.jsx dist/app.js
git commit -m "component: port shared.jsx (icons, ClinicMark=real logo, Illo SVGs)"
```

### Task D2: Create data.jsx bridge

- [ ] **Step 1: Write `src/components/data.jsx`:**

```jsx
function computeFeed() {
  const CATEGORIES = window.CATEGORIES || [];
  const all = CATEGORIES.flatMap(cat =>
    (cat.topics || []).map(t => ({
      ...t, tag: cat.name, categoryId: cat.id, accent: cat.tone,
    }))
  ).sort((a, b) => (b.lastUpdated || '').localeCompare(a.lastUpdated || ''));
  return { FEATURED: all.slice(0, 3), LATEST: all.slice(3, 9) };
}
const { FEATURED, LATEST } = computeFeed();
Object.assign(window, { __data: { FEATURED, LATEST } });
```

- [ ] **Step 2: Build + commit**

```bash
./publish.sh --build
git add src/components/data.jsx dist/app.js
git commit -m "component: data.jsx — derive FEATURED/LATEST from CATEGORIES"
```

### Task D3: Write app.jsx — hash router, state, FAB

**Files:** Overwrite `src/components/app.jsx`.

Key design points to bake in:
1. `parseHash()` maps URL hash → route state.
2. Five localStorage atoms: `theme`, `fontScale`, `cvdMode`, `gx_favorites`, `gx_recent`.
3. `cvdMode` applies to `<html>` SYNCHRONOUSLY during render (not in useEffect) so the CATEGORIES Proxy sees current value on first paint.
4. Late-bind child components from `window.*` because esbuild wraps each JSX file in its own IIFE; late-binding inside the render function picks them up after all files have executed.

- [ ] **Step 1: Write app.jsx:**

```jsx
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

  // cvdMode: apply synchronously during render so Proxy sees current value
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
```

- [ ] **Step 2: Build + commit**

```bash
./publish.sh --build
git add src/components/app.jsx dist/app.js
git commit -m "component: app.jsx root + hash router + state + A11y FAB"
```

### Task D4: Create index-new.html testing target

- [ ] **Step 1: Write `index-new.html`:**

```html
<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>工學誠心診所 · 衛教專區</title>
<meta name="description" content="家醫科衛教資訊平台，提供慢性病、呼吸道、腸胃、兒童、長者等健康照護知識。"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Instrument+Serif&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="./src/styles/main.css"/>
<link rel="icon" href="./assets/logo.jpg" type="image/jpeg"/>
</head>
<body>
<div id="root">Loading…</div>
<script src="./js/content.js"></script>
<script crossorigin src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/dompurify@3.1.6/dist/purify.min.js"></script>
<script src="./dist/app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Build + visual check + commit**

```bash
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "Open http://localhost:8000/index-new.html. FAB bottom-left. Console clean."
read
kill %1
git add index-new.html
git commit -m "build: add index-new.html loading React + DOMPurify + new CSS"
```

---

## Phase E — Components

### Task E1: Navbar (port from design-refs with modifications)

**Files:** Overwrite `src/components/navbar.jsx`.

**Port strategy:** start from `docs/superpowers/design-handoff-2026-04-b2/components/navbar.jsx`, then apply modifications:

1. **TopStrip**: remove hardcoded phone/address/status. Instead render conditionally from `window.CONFIG?.contact?.phone / .address / .lineUrl`. If a field is empty, skip that element. Remove the English link (i18n shelved).
2. **Replace `NAV` array** with:
```js
const NAV = [
  { key: 'edu', label: '衛教專區', mega: true, target: '#/' },
  { key: 'doctors', label: '醫師團隊', target: '#/#doctors' },
  { key: 'info', label: '門診資訊', target: '#/#info' },
  { key: 'faq', label: '常見問答', target: '#/#faq' },
  { key: 'contact', label: '聯絡我們', target: '#/contact' },
];
```
3. **Change component signature** `function Navbar({ onNavigate, current, fontScale })` → `function Navbar({ ctx })`. Destructure: `const { theme, setTheme, fontScale, setFontScale, favorites } = ctx;` and `const current = ctx.hashState.route === 'list' ? 'edu' : '';`.
4. **Replace onNavigate calls** with real hash links `href="#/..."`. No custom click handlers.
5. **Replace the search icon button** with a theme-toggle button:
```jsx
<button aria-label="切換主題" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={iconBtn}>
  {theme === 'dark' ? '☀' : '🌙'}
</button>
```
6. **Add a font-scale button next to it:**
```jsx
<button aria-label="切換字級" onClick={() => setFontScale(fontScale === 'senior' ? 'normal' : 'senior')}
        style={{ ...iconBtn, fontWeight: 700, fontSize: fontScale === 'senior' ? 18 : 14 }}>A</button>
```
7. **Add a favorites link with badge:**
```jsx
<a href="#/favorites" aria-label={`我的收藏（${favorites.length} 篇）`}
   style={{ ...iconBtn, position: 'relative', textDecoration: 'none' }}>
  <Icon.Heart style={{ width: 18, height: 18 }}/>
  {favorites.length > 0 && (
    <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--peach)', color: '#fff',
                   borderRadius: 99, fontSize: 10, fontWeight: 700, minWidth: 18, height: 18,
                   display: 'grid', placeItems: 'center', padding: '0 4px' }}>
      {favorites.length}
    </span>
  )}
</a>
```
8. **Replace teal `線上預約` anchor** with LINE-green CTA (background `#06C755`, `Icon.Line`), shown only if `CONFIG.contact.lineUrl` is set.
9. **Mega menu grid**: change `repeat(4, 1fr)` → `repeat(3, 1fr)` (9 categories). Remove the bottom "本月專題" promotional block (keep the grid only).
10. **Mobile drawer**: change the drawer's `<nav>` contents to iterate `window.CATEGORIES` instead of the `NAV` array. Remove the bottom LINE CTA block.
11. **Hex → CSS var substitutions**: `#1a3942` → `var(--fg-heading)`, `#0e7c7b` → `var(--teal)`, `#4a9e94` → `var(--teal-2)`, `#eaf2ef` → `var(--border-soft)`, `#8aa3a0` → `var(--muted-3)`, `#6d7c79` → `var(--muted-2)`.

- [ ] **Step 1: Apply all the above modifications**

- [ ] **Step 2: Build + browser check**

```bash
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "http://localhost:8000/index-new.html — Navbar, logo, 5 items, theme/font/heart icons. Hover 衛教專區 for 3-col mega. Resize < 1024px for hamburger."
read
kill %1
```

- [ ] **Step 3: Commit**

```bash
git add src/components/navbar.jsx dist/app.js
git commit -m "component: Navbar with theme/font/heart toggles, 3x3 mega, mobile drawer"
```

### Task E2: HeroBig

**Files:** Overwrite `src/components/heroes.jsx`.

**Port strategy:** start from `docs/superpowers/design-handoff-2026-04-b2/components/heroes.jsx`, **keep only `HeroBig`** — discard `HeroSearch` and `HeroCategories`.

Modifications:
1. Signature: `function HeroBig({ ctx })`.
2. Replace hardcoded stats `140+ / 8 / 12`. Compute:
   - `const topicCount = window.CATEGORIES.reduce((a,c) => a + (c.topics||[]).length, 0);` → display `${topicCount}+`
   - `window.CATEGORIES.length` → display directly (9)
   - `12` → leave static
3. Replace hardcoded headline copy with: `用看得懂的話，<br/>陪您了解健康`.
4. Replace the description paragraph body with `{window.CONFIG?.description}`.
5. Replace the two CTA buttons:
   - Primary: `<a href="#/chronic">瀏覽衛教主題</a>` (teal pill background).
   - Secondary: if `window.CONFIG?.contact?.lineUrl`, render `<a href={...}>LINE 預約</a>` (white pill, border). Otherwise omit.
6. Replace hex colors with CSS vars where natural.
7. Final line: `Object.assign(window, { HeroBig });`.

- [ ] **Step 1: Apply modifications**

- [ ] **Step 2: Build + commit**

```bash
./publish.sh --build
git add src/components/heroes.jsx dist/app.js
git commit -m "component: HeroBig — headline, stats, peach illustration collage"
```

### Task E3: sections.jsx — all home sections + Footer + HomePage

**Files:** Overwrite `src/components/sections.jsx`.

**Port strategy:** start from `docs/superpowers/design-handoff-2026-04-b2/components/sections.jsx`. Keep all section exports. Add a new `HomePage` wrapper at the end.

Modifications:

1. **SectionHeader:** keep as-is. Replace literal hexes with CSS vars.
2. **FeaturedSection:**
   - Replace hardcoded `FEATURED` import with `const featured = window.__data?.FEATURED || [];`.
   - If `featured.length === 0`, return `null`.
   - `featured[0]` → big card; `featured.slice(1)` → small cards.
   - All hrefs become `` `#/${t.categoryId}/${t.id}` ``.
3. **CategoriesSection:**
   - Grid: `repeat(4, 1fr)` → `repeat(3, 1fr)` (9 cats = 3×3).
   - Use `window.CATEGORIES` directly.
   - Tile href = `` `#/${c.id}` ``.
   - Count display = `(c.topics || []).length`.
4. **LatestSection:**
   - `LATEST` → `window.__data?.LATEST || []`.
   - Return `null` if empty.
   - Remove any "檢視全部" link, or update its href to `#/`.
5. **DoctorsSection:** use `window.DOCTORS`. Wrap `Illo.Doctor` in a 72×72 container inside the circle avatar.
6. **FaqSection:** use `window.FAQS`. Replace hardcoded Q/A content.
7. **InfoSection:**
   - Schedule table: iterate `window.HOURS`.
   - Contact block: pull from `window.CONFIG.contact` — show only fields with values. If all empty, show the text `TODO: 請於 js/content.js 的 CONFIG.contact 填入聯絡資訊`.
8. **Footer:**
   - Signature: `function Footer({ ctx })`.
   - Use `window.CONFIG` and `window.CATEGORIES`.
   - Four columns: clinic info, 衛教分類 (first 5 cats), 診所 (doctors/info/faq/contact anchors), 個人化 (favorites/recent).
9. **New `HomePage` wrapper:**

```jsx
function HomePage({ ctx }) {
  return (
    <main>
      <HeroBig ctx={ctx}/>
      <FeaturedSection/>
      <CategoriesSection/>
      <LatestSection/>
      <DoctorsSection/>
      <FaqSection/>
      <InfoSection/>
    </main>
  );
}
```

10. Final export:
```js
Object.assign(window, { HomePage, FeaturedSection, CategoriesSection, LatestSection, DoctorsSection, FaqSection, InfoSection, Footer });
```

- [ ] **Step 1: Apply all modifications**

- [ ] **Step 2: Build + browser check**

```bash
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "Full home page renders. Featured/Latest empty until Phase G. Console clean."
read
kill %1
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections.jsx dist/app.js
git commit -m "component: HomePage + Featured/Categories/Latest/Doctors/FAQ/Info/Footer"
```

---

## Phase F — Pages

### Task F1: ListPage

**Files:** Overwrite `src/components/pages.jsx`.

- [ ] **Step 1: Write the file:**

```jsx
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
```

- [ ] **Step 2: Build + commit**

```bash
./publish.sh --build
git add src/components/pages.jsx dist/app.js
git commit -m "component: ListPage (category, favorites, recent)"
```

### Task F2: ArticlePage + SafeHtml + ContactPage

**Files:** Modify `src/components/pages.jsx`.

**SafeHtml design:** Use DOMPurify to sanitize, then create a `DocumentFragment` via `Range.createContextualFragment` and mount it using `el.replaceChildren(fragment)`. This sidesteps both React's prop-based HTML API and any direct string-to-element assignment, while giving us XSS defense-in-depth on first-party content.

- [ ] **Step 1: Before `Object.assign(window, { ListPage });`, append:**

```jsx
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

// Sanitize then mount via DocumentFragment (no direct HTML string → element assignment)
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
      <InfoSection/>
    </main>
  );
}
```

Update the final export to:

```jsx
Object.assign(window, { ListPage, ArticlePage, ContactPage });
```

- [ ] **Step 2: Build + commit**

```bash
./publish.sh --build
git add src/components/pages.jsx dist/app.js
git commit -m "component: ArticlePage (fetch + DOMPurify + fragment mount) + ContactPage"
```

---

## Phase G — Content Migration

### Task G1: Extend md_to_html.py

**Files:** Modify `md_to_html.py`.

- [ ] **Step 1: Find the main conversion function**

```bash
grep -n "^def \|fm\[\|write_text\|output_path\|\.html" md_to_html.py | head -30
```

- [ ] **Step 2: Add the helper at module top (after imports):**

```python
import re as _re_contentjs

def update_content_js(logical_category: str, slug: str, title: str,
                      summary: str, last_updated: str, content_path: str,
                      content_js_path: str = 'js/content.js') -> None:
    """Insert or replace a topic entry in CATEGORIES_BASE[logical_category].topics."""
    with open(content_js_path, 'r', encoding='utf-8') as f:
        src = f.read()

    cat_pattern = _re_contentjs.compile(
        r"(\{\s*id:\s*'" + _re_contentjs.escape(logical_category) + r"'[^}]*topics:\s*\[)([^\]]*)(\])",
        _re_contentjs.DOTALL,
    )
    m = cat_pattern.search(src)
    if not m:
        raise RuntimeError(f"Category '{logical_category}' not found in {content_js_path}")

    topic_id = f"{logical_category}-{slug}"
    esc = lambda s: (s or '').replace("\\", "\\\\").replace("'", "\\'")
    entry = (
        f"\n      {{ id: '{topic_id}', title: '{esc(title)}', "
        f"summary: '{esc(summary)}', "
        f"lastUpdated: '{esc(last_updated)}', "
        f"contentPath: '{esc(content_path)}' }},"
    )

    topics_body = m.group(2)
    topics_body = _re_contentjs.sub(
        r"\s*\{\s*id:\s*'" + _re_contentjs.escape(topic_id) + r"'[^}]*\},?",
        '',
        topics_body,
    )
    new_body = topics_body.rstrip() + entry + "\n    "
    new_src = src[:m.start()] + m.group(1) + new_body + m.group(3) + src[m.end():]

    with open(content_js_path, 'w', encoding='utf-8') as f:
        f.write(new_src)
```

- [ ] **Step 3: Call `update_content_js` right after the HTML output file is written**

Find the line writing the output (likely `Path(output_path).write_text(html, encoding='utf-8')` or similar). Directly after, add:

```python
    update_content_js(
        logical_category=fm.get('logical_category', fm.get('category', '')),
        slug=fm.get('slug', ''),
        title=fm.get('title', ''),
        summary=fm.get('summary', fm.get('description', '')),
        last_updated=fm.get('last_updated', fm.get('date', '')),
        content_path=str(output_path).replace('\\', '/'),
    )
```

Adjust variable names (`fm`, `output_path`) to match your actual code.

- [ ] **Step 4: Syntax + commit**

```bash
python3 -c "import ast; ast.parse(open('md_to_html.py').read()); print('OK')"
git add md_to_html.py
git commit -m "build: md_to_html updates content.js CATEGORIES on each conversion"
```

### Task G2: Tag each draft with `logical_category`

- [ ] **Step 1: Run the bash mapping**

```bash
declare -A MAP=(
  [sinusitis]=respir
  [allergic-rhinitis]=respir
  [lpr-chronic-pharyngitis]=respir
  [croup]=respir
  [enterovirus]=gi
  [adenovirus-fever-children]=gi
  [otitis-media]=ent
  [menieres-disease]=ent
  [tinnitus]=ent
  [bppv]=ent
  [obstructive-sleep-apnea]=ent
  [roseola-infantum]=kids
  [growth-chart-guide]=kids
  [atopic-dermatitis-infant]=kids
  [norovirus-rotavirus-hydration]=gi
  [hypertension-dash-diet]=chronic
  [insulin-resistance-type2-diabetes-prevention]=chronic
  [lipid-panel-interpretation]=chronic
  [gout-diet-medication-principles]=chronic
  [metabolic-syndrome]=preventiv
)
for slug in "${!MAP[@]}"; do
  file="drafts/${slug}.md"
  [[ -f "$file" ]] || { echo "⚠ missing: $file"; continue; }
  if grep -q "^logical_category:" "$file"; then
    echo "- skip: $file"
  else
    sed -i "/^category:/a logical_category: ${MAP[$slug]}" "$file"
    echo "✓ $file → ${MAP[$slug]}"
  fi
done
```

- [ ] **Step 2: Verify + commit**

```bash
head -10 drafts/sinusitis.md
git add drafts/
git commit -m "content: tag each draft with logical_category for 9-cat structure"
```

### Task G3: Batch-convert drafts; verify feed

- [ ] **Step 1: Batch convert**

```bash
./publish.sh --all 2>&1 | tee /tmp/publish-log.txt
tail -30 /tmp/publish-log.txt
```

If any draft errors, fix its frontmatter and re-run: `./publish.sh {slug}`.

- [ ] **Step 2: Verify content.js populated**

```bash
grep -c "contentPath:" js/content.js   # expect ~15-20
```

- [ ] **Step 3: Visual check**

```bash
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "http://localhost:8000/index-new.html — Categories show real counts; Featured & Latest show real articles. Click a category and then an article — content loads via DOMPurify fragment."
read
kill %1
```

- [ ] **Step 4: Commit**

```bash
git add js/content.js content/
git commit -m "content: regenerate content.js with all drafts mapped to 9 new categories"
```

### Task G4: Update sw.js

- [ ] **Step 1: Update `STATIC_ASSETS` and bump `CACHE_NAME`**

```javascript
const CACHE_NAME = 'gxent-v2-b2-react';

const STATIC_ASSETS = [
  './',
  './index.html',
  './src/styles/main.css',
  './js/content.js',
  './dist/app.js',
  './assets/logo.jpg',
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/dompurify@3.1.6/dist/purify.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Instrument+Serif&display=swap',
];
```

- [ ] **Step 2: Syntax + commit**

```bash
node --check sw.js
git add sw.js
git commit -m "pwa: update sw.js cache manifest for new React build"
```

---

## Phase H — Swap & Cleanup

### Task H1: Swap index.html

```bash
cp index-new.html index.html
rm index-new.html
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "http://localhost:8000/ — root should now show new React site."
read
kill %1
git add index.html
git rm index-new.html
git commit -m "release: swap index.html to load new React build"
```

### Task H2: Delete old js/app.js and css/style.css

- [ ] **Step 1: Verify no references**

```bash
grep -rn "js/app.js\|css/style.css" . \
  --include="*.html" --include="*.js" --include="*.md" 2>/dev/null \
  | grep -v design-refs | grep -v node_modules | grep -v docs/superpowers
```

Expected: no output.

- [ ] **Step 2: Delete + verify + commit**

```bash
git rm js/app.js css/style.css
./publish.sh --build
./publish.sh --serve &
sleep 2
echo "http://localhost:8000/ — styles still correct?"
read
kill %1
git commit -m "chore: delete old js/app.js and css/style.css"
```

### Task H3: Update CLAUDE.md

**Files:** Modify `CLAUDE.md`.

- [ ] **Step 1: Replace body of `## 架構` section with:**

```markdown
**React SPA + 本地預編譯（B2）+ hash routing：**

- `js/content.js`（資料層）→ `src/components/*.jsx`（React 元件）→ `dist/app.js`（esbuild 編譯輸出）→ `index.html`（載入器）
- 載入順序：`js/content.js`（定義 window.CONFIG / CATEGORIES / DOCTORS / FAQS / HOURS）→ React UMD（CDN）→ DOMPurify UMD（CDN）→ `dist/app.js`
- 各 JSX 檔之間透過 `Object.assign(window, {...})` 分享元件；`app.jsx` render 時從 window 解構取用

**建置流程：**
- 原始碼：`src/components/*.jsx` + `src/styles/main.css`
- `./publish.sh --build` 呼叫 `tools/esbuild` 編譯 JSX → `dist/app.js`（約 150KB）
- `tools/esbuild` 首次執行時自動下載（10MB 單一執行檔，`.gitignore` 排除）
- `dist/app.js` **需要 commit 進 git**（GitHub Pages 直接服務）

**路由：** Hash-based（`#/{categoryId}`、`#/{categoryId}/{topicId}`、`#/favorites`、`#/recent`、`#/contact`）。由 `src/components/app.jsx` 的 `parseHash()` + `hashchange` 監聽處理。

**狀態：** 五個 localStorage 鍵：
- `theme` (light/dark) — `[data-theme]`
- `fontScale` (normal/senior) — `html.senior`
- `cvdMode` (on/off) — `[data-cvd]`
- `gx_favorites` (topic id 陣列)
- `gx_recent` (topic id 陣列，FIFO 最多 10)

**內容安全：** `content/*.html` 片段在注入 DOM 前先以 DOMPurify 清理，並透過 `createContextualFragment + replaceChildren` 掛載（`src/components/pages.jsx` 的 SafeHtml 元件），作為 XSS 的縱深防禦。
```

- [ ] **Step 2: Replace first paragraph of `## 設計系統` with:**

```markdown
**Always read `DESIGN.md` before making any visual or UI decisions.**

設計方向：**Warm Teal × Peach**（暖青綠 × 桃橘）。品牌主色 `--teal #0e7c7b`，強調色桃橘 `--peach #e89661` + 金黃 `--gold #f2c94c`（Logo 十字色）。字體：Noto Sans TC（內文/UI）+ Instrument Serif（Logo 副標）。暖色中性色背景（#f5faf8 / #f0f7f4）取代純白。

CSS 變數定義於 `src/styles/main.css` 的 `:root`、`[data-theme="dark"]`、`html.senior`、`html[data-cvd="on"]`。

三個無障礙模式：
- **Dark mode**：`<html data-theme="dark">` — 暖深色調非純黑
- **Senior mode**：`html.senior` — `--base-size: 19px`
- **CVD mode**：`<html data-cvd="on">` — 分類色切換 Okabe–Ito CVD-safe 調色盤；左下浮動 FAB 切換
```

- [ ] **Step 3: Replace `## 內容管線工作流程` Stage 2 with:**

````markdown
**Stage 2：轉換（一鍵觸發）**

```bash
./publish.sh {slug}           # 轉換 + 更新 js/content.js + JSX 編譯
./publish.sh --all            # 批次轉換所有草稿
./publish.sh --build          # 只編譯 JSX → dist/app.js
./publish.sh --status         # 查看哪些草稿尚未轉換
./publish.sh --serve          # 啟動 http://localhost:8000
```

**draft frontmatter 必填**：
- `category`（實體資料夾名稱，決定 `content/{category}/` 檔案位置）
- `logical_category`（9 大新分類 id：`chronic/respir/ortho/gi/kids/senior/preventiv/nutri/ent`，決定網站上的分類歸屬）
- `slug`、`title`、`summary`、`last_updated`
````

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for B2 React architecture + new categories"
```

### Task H4: Final QA + merge to master

- [ ] **Step 1: Manual QA pass in browser**

Start: `./publish.sh --serve &`. Verify each:

- [ ] `/` loads without console errors
- [ ] Desktop (≥1024px): mega menu, 3×3 categories grid, all sections visible
- [ ] Tablet (≤1023px): hamburger appears, hero illustration hidden, 2-col grids
- [ ] Mobile (≤639px): single-column, drawer opens
- [ ] Click category tile → ListPage with articles
- [ ] Click article → ArticlePage loads sanitized HTML from `content/*.html`
- [ ] Heart button toggles; `#/favorites` shows that article
- [ ] `#/recent` shows recently visited
- [ ] Dark mode (🌙 button): whole site flips; persists
- [ ] Senior font (A button): text enlarges; persists
- [ ] CVD FAB (bottom-left): category tile colors change; persists
- [ ] `#/contact` renders

Stop: `kill %1`

- [ ] **Step 2: Lighthouse audit** (DevTools → mobile). Expected: Performance ≥ 85, A11y ≥ 95, SEO ≥ 95.

- [ ] **Step 3: Merge to master**

```bash
git checkout master
git merge --no-ff refactor/b2-react -m "refactor: migrate to B2 React + new Warm Teal x Peach design

- React 18 pre-compiled via local esbuild
- 9-category structure (8 general-practice + 1 ENT specialty)
- New design system from Claude Design handoff
- Preserve content/*.html (sanitized via DOMPurify), hash routing, SW
- Add senior mode, CVD mode, favorites, recent views
- Remove TTS, quiz, rating, print, announcements, i18n switch

Spec: docs/superpowers/specs/2026-04-18-b2-refactor-design.md
Plan: docs/superpowers/plans/2026-04-18-b2-refactor-implementation.md"

git log --oneline -10
```

- [ ] **Step 4: Push ONLY after user explicitly approves**

```bash
# Do NOT push until the user says "push" or "deploy"
git push origin master
```

- [ ] **Step 5: Smoke-test GH Pages after deploy (~2 min)**

---

## Self-Review Checklist

_(Run by the implementing agent at the end.)_

- [ ] All tasks committed on `refactor/b2-react`
- [ ] `./publish.sh --build` completes with zero warnings
- [ ] Browser console zero errors on home / list / article / contact
- [ ] Three responsive breakpoints tested
- [ ] Dark / senior / CVD modes persist across reloads
- [ ] At least one article per populated category loads with sanitized content
- [ ] `favorites` and `recent` persist
- [ ] `sw.js` cache manifest paths match real files
- [ ] `CLAUDE.md` + `DESIGN.md` reflect final state
- [ ] Merged to master but NOT pushed unless user approved
