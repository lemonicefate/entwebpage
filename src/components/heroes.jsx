// HeroBig component — headline, stats, peach illustration collage

function HeroBig({ ctx }) {
  // Compute topic count dynamically
  const topicCount = window.CATEGORIES.reduce((a, c) => a + (c.topics || []).length, 0);
  const categoryCount = window.CATEGORIES.length;
  const clinicalYears = 12;

  // CTA button styles
  const primaryBtn = {
    padding: '14px 24px',
    background: 'var(--teal)',
    color: '#fff',
    borderRadius: 999,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 15,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0 1px 0 rgba(255,255,255,0.25) inset, 0 8px 20px -6px rgba(14,124,123,0.4)',
  };

  const secondaryBtn = {
    padding: '14px 24px',
    background: '#fff',
    color: 'var(--fg-heading)',
    borderRadius: 999,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 15,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid var(--cream-4)',
  };

  // Determine if LINE button should render
  const showLineBtn = window.CONFIG?.contact?.lineUrl;

  return (
    <section
      style={{
        background: '#fff8ec',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative soft shapes */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -120,
          top: -120,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c7e8e1 0%, rgba(199,232,225,0) 70%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: -80,
          bottom: -140,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fde2c8 0%, rgba(253,226,200,0) 70%)',
        }}
      />

      <div
        className="container r-hero-grid"
        style={{
          padding: '72px 24px 96px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 999,
              background: '#ffffff',
              border: '1px solid var(--cream-4)',
              fontSize: 13,
              color: 'var(--teal)',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: 'var(--gold)',
              }}
            />
            給每個家庭的衛教知識庫
          </div>

          {/* Headline */}
          <h1
            className="r-hero-h1"
            style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              lineHeight: 1.15,
              margin: '20px 0 20px',
              color: 'var(--fg-heading)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            用看得懂的話，
            <br />
            陪您了解健康
          </h1>

          {/* Description */}
          <p
            className="r-hero-p"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: 'var(--muted-4)',
              maxWidth: 520,
              margin: '0 0 32px',
            }}
          >
            {window.CONFIG?.description || '家醫科衛教資訊平台'}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#/chronic" style={primaryBtn}>
              瀏覽衛教主題{' '}
              <Icon.ArrowRight style={{ width: 18, height: 18 }} />
            </a>
            {showLineBtn && (
              <a href={window.CONFIG.contact.lineUrl} style={secondaryBtn}>
                <Icon.Line style={{ width: 18, height: 18 }} /> LINE 預約
              </a>
            )}
          </div>

          {/* Stats */}
          <div
            className="r-hero-stats"
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 28,
              borderTop: '1px dashed var(--cream-4)',
              paddingTop: 24,
            }}
          >
            <Stat n={`${topicCount}+`} label="衛教主題" />
            <Stat n={categoryCount} label="專業分類" />
            <Stat n={clinicalYears} label="年臨床經驗" />
          </div>
        </div>

        {/* Illustration stack */}
        <div className="r-hero-illus">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--fg-heading)',
          letterSpacing: '-0.01em',
        }}
      >
        {n}
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted-2)', marginTop: 2 }}>
        {label}
      </div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '1/1',
        width: '100%',
        maxWidth: 500,
        marginLeft: 'auto',
      }}
    >
      {/* Back card: chart */}
      <div
        style={{
          position: 'absolute',
          left: '4%',
          top: '8%',
          width: '62%',
          aspectRatio: '1/1.1',
          background: '#fff',
          borderRadius: 22,
          padding: 22,
          boxShadow: 'var(--shadow-lift)',
          border: '1px solid var(--border-soft)',
          transform: 'rotate(-3deg)',
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: 'var(--teal-2)',
            fontWeight: 600,
            letterSpacing: '0.12em',
          }}
        >
          本週精選
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--fg-heading)',
            marginTop: 4,
            lineHeight: 1.4,
          }}
        >
          在家量血壓的722原則
        </div>
        <div
          style={{
            marginTop: 14,
            height: 120,
            background: 'var(--cream-1)',
            borderRadius: 12,
            padding: 12,
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gap: 6,
          }}
        >
          <svg
            viewBox="0 0 120 60"
            style={{ width: '100%', height: '100%' }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--teal-2)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--teal-2)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22 L120 60 L0 60 Z"
              fill="url(#hg)"
            />
            <path
              d="M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22"
              stroke="var(--teal)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[[15, 40], [45, 30], [75, 22], [105, 18]].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.5"
                fill="#fff"
                stroke="var(--teal)"
                strokeWidth="1.5"
              />
            ))}
          </svg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 10,
              color: 'var(--muted-3)',
            }}
          >
            <span>週一</span>
            <span>週三</span>
            <span>週五</span>
            <span>週日</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10, fontSize: 10 }}>
          <span style={tagChip('var(--success-bg)', 'var(--teal)')}>
            血壓
          </span>
          <span style={tagChip('var(--warn-bg)', 'var(--warn-fg)')}>
            健檢
          </span>
        </div>
      </div>

      {/* Front card: illustration */}
      <div
        style={{
          position: 'absolute',
          right: '2%',
          bottom: '6%',
          width: '58%',
          aspectRatio: '1/1.15',
          background: 'linear-gradient(170deg, var(--peach-light), var(--peach-dark))',
          borderRadius: 22,
          padding: 22,
          color: '#fff',
          transform: 'rotate(2deg)',
          boxShadow: 'var(--shadow-hero)',
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 99,
            background: 'var(--gold)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--fg-heading)',
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          +
        </div>
        <div
          style={{
            fontSize: 13,
            color: '#c9ede9',
            marginTop: 18,
            letterSpacing: '0.1em',
          }}
        >
          季節專題 ‧ 04月
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginTop: 6 }}>
          流感季來了,
          <br />
          別把重症當小感冒
        </div>
        <div
          style={{
            marginTop: 'auto',
            position: 'absolute',
            bottom: 18,
            left: 22,
            right: 22,
          }}
        >
          <div style={{ height: 1, background: 'rgba(255,255,255,0.2)' }} />
          <div
            style={{
              marginTop: 12,
              fontSize: 13,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>陳志明 醫師</span>
            <span style={{ opacity: 0.7 }}>6 分鐘閱讀</span>
          </div>
        </div>
      </div>

      {/* Floating pill: search */}
      <div
        style={{
          position: 'absolute',
          left: '-6%',
          bottom: '18%',
          background: '#fff',
          borderRadius: 14,
          padding: '10px 14px',
          boxShadow: 'var(--shadow-lift)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 13,
          border: '1px solid var(--border-soft)',
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'var(--cream-1)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Icon.Heart style={{ width: 16, height: 16, color: '#d96757' }} />
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--muted-2)' }}>已收藏</div>
          <div style={{ fontWeight: 600, color: 'var(--fg-heading)' }}>
            糖尿病飲食 12 篇
          </div>
        </div>
      </div>
    </div>
  );
}

function tagChip(bg, fg) {
  return {
    background: bg,
    color: fg,
    padding: '3px 8px',
    borderRadius: 4,
    fontWeight: 600,
  };
}

Object.assign(window, { HeroBig });
