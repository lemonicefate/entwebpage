// Shared icons and small primitives for 工學誠心診所

const Icon = {
  Search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
    </svg>
  ),
  Menu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  ArrowUpRight: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
    </svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Minus: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M5 12h14"/>
    </svg>
  ),
  Line: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v3l4-3h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-9 9H8v-4h2v4Zm4 0h-2V9h2v4Zm4 0h-2V9h2v4Z"/>
    </svg>
  ),
  Heart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/>
    </svg>
  ),
  Bookmark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
  X: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <path d="M6 6l12 12M18 6 6 18"/>
    </svg>
  ),
};

// Clinic logo - real raster logo
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

// Line illustrations — used throughout the site
const Illo = {
  Stethoscope: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 20v28a18 18 0 0 0 36 0V20"/>
      <path d="M30 20h-6M66 20h6"/>
      <path d="M48 66v10a18 18 0 0 0 36 0v-4"/>
      <circle cx="84" cy="64" r="8"/>
      <circle cx="84" cy="64" r="3" fill={tone} stroke="none"/>
    </svg>
  ),
  Pills: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="44" width="56" height="28" rx="14" transform="rotate(-20 44 58)"/>
      <path d="M32 36 56 68" />
      <circle cx="86" cy="78" r="18"/>
      <path d="M74 72h24"/>
    </svg>
  ),
  Heartbeat: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 62h22l8-16 10 32 10-24 6 8h44"/>
      <path d="M60 94c18-12 38-26 38-46a14 14 0 0 0-26-6 14 14 0 0 0-26 6c0 6 2 12 6 18"/>
    </svg>
  ),
  Leaf: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M98 20C56 22 26 48 24 88c0 8 4 12 12 12 40-2 66-34 68-72 0-4-2-8-6-8Z"/>
      <path d="M36 100 84 44"/>
    </svg>
  ),
  Shield: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 14 22 28v28c0 22 16 42 38 50 22-8 38-28 38-50V28L60 14Z"/>
      <path d="M48 60l8 8 18-18"/>
    </svg>
  ),
  Thermometer: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M62 14a10 10 0 0 1 10 10v46a14 14 0 1 1-20 0V24a10 10 0 0 1 10-10Z"/>
      <path d="M62 30v40"/>
      <circle cx="62" cy="84" r="6" fill={tone} stroke="none"/>
    </svg>
  ),
  Lungs: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 16v48"/>
      <path d="M60 28c-8 8-28 14-32 30-4 16 2 34 14 36 10 2 14-6 18-18"/>
      <path d="M60 28c8 8 28 14 32 30 4 16-2 34-14 36-10 2-14-6-18-18"/>
      <path d="M54 18h12"/>
    </svg>
  ),
  Baby: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="44" r="22"/>
      <circle cx="52" cy="44" r="2" fill={tone} stroke="none"/>
      <circle cx="68" cy="44" r="2" fill={tone} stroke="none"/>
      <path d="M54 52c2 4 10 4 12 0"/>
      <path d="M32 100c4-16 14-26 28-26s24 10 28 26"/>
    </svg>
  ),
  Apple: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 34c6-6 18-10 26-6 8 4 12 16 10 28-2 12-10 30-22 38-4 2-10 2-14 0-12-8-20-26-22-38-2-12 2-24 10-28 8-4 20 0 26 6"/>
      <path d="M60 34c-2-8 4-16 12-18"/>
    </svg>
  ),
  Bone: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 30c-6 0-10 4-10 10 0 4 2 6 4 8-2 2-4 4-4 8 0 6 4 10 10 10 4 0 6-2 8-4l40 40c2 2 4 4 8 4 6 0 10-4 10-10 0-4-2-6-4-8 2-2 4-4 4-8 0-6-4-10-10-10-4 0-6 2-8 4L38 34c-2-2-4-4-8-4Z"/>
    </svg>
  ),
  Doctor: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="36" r="14"/>
      <path d="M32 100c2-18 14-28 28-28s26 10 28 28"/>
      <path d="M46 74v16M74 74v16"/>
      <path d="M46 82h28"/>
      <circle cx="60" cy="90" r="3"/>
    </svg>
  ),
  Family: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="36" cy="42" r="12"/>
      <circle cx="84" cy="42" r="12"/>
      <circle cx="60" cy="64" r="8"/>
      <path d="M14 102c2-16 10-26 22-26s20 10 22 26"/>
      <path d="M62 102c2-16 10-26 22-26s20 10 22 26"/>
      <path d="M48 102c2-10 6-16 12-16s10 6 12 16"/>
    </svg>
  ),
  Virus: ({ tone = '#0a4d4d' }) => (
    <svg viewBox="0 0 120 120" fill="none" stroke={tone} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="60" cy="60" r="22"/>
      <circle cx="60" cy="60" r="4" fill={tone} stroke="none"/>
      <circle cx="48" cy="54" r="2.5" fill={tone} stroke="none"/>
      <circle cx="72" cy="66" r="2.5" fill={tone} stroke="none"/>
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = a*Math.PI/180;
        const x1 = 60 + Math.cos(rad)*22, y1 = 60 + Math.sin(rad)*22;
        const x2 = 60 + Math.cos(rad)*34, y2 = 60 + Math.sin(rad)*34;
        const cx = 60 + Math.cos(rad)*38, cy = 60 + Math.sin(rad)*38;
        return <g key={a}><path d={`M${x1} ${y1} ${x2} ${y2}`}/><circle cx={cx} cy={cy} r="3"/></g>;
      })}
    </svg>
  ),
};

// Resolve a category's tone with CVD-safe fallback when CVD mode is on.
// Reads document attribute synchronously so it stays in sync with the latest render.
function cvdResolveTone(cat) {
  if (!cat) return 'var(--teal)';
  const cvd = typeof document !== 'undefined' && document.documentElement.dataset.cvd === 'on';
  return cvd && cat.toneCvd ? cat.toneCvd : (cat.tone || 'var(--teal)');
}

Object.assign(window, { Icon, Illo, ClinicMark, cvdResolveTone });
