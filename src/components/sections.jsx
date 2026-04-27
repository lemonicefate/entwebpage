// Main page sections

function SectionHeader({ eyebrow, title, desc, action, linkHref, onAction }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      marginBottom: 28, gap: 24, flexWrap: 'wrap',
    }}>
      <div style={{ maxWidth: 640 }}>
        {eyebrow && (
          <div style={{
            fontSize: 12, color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>{eyebrow}</div>
        )}
        <h2 className="r-section-head-title" style={{
          fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, color: 'var(--fg-heading)',
          letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0,
        }}>{title}</h2>
        {desc && <p style={{ color: 'var(--muted)', fontSize: 16, marginTop: 10, lineHeight: 1.65 }}>{desc}</p>}
      </div>
      {action && (
        <a href={linkHref || '#'} onClick={linkHref ? undefined : (e) => { e.preventDefault(); onAction?.(); }} style={{
          color: 'var(--teal)', fontWeight: 600, fontSize: 14, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, paddingBottom: 6,
          borderBottom: '1px solid var(--teal)',
        }}>
          {action} <Icon.ArrowRight style={{ width: 16, height: 16 }}/>
        </a>
      )}
    </div>
  );
}

// ───────────────────────── Featured (seasonal + editorial picks) ─────────────────────────
function FeaturedSection() {
  const featured = window.__data?.FEATURED || [];
  if (featured.length === 0) return null;

  const big = featured[0];
  const rest = featured.slice(1);

  return (
    <section className="r-section" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ padding: '80px 24px' }}>
        <SectionHeader
          eyebrow="FEATURED · 精選主題"
          title="本週編輯精選"
          desc="從門診最常被問到的問題出發，醫師與護理師共同審訂、定期更新。"
        />

        <div className="r-feat-grid" style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 20,
        }}>
          <FeatureCardLarge article={big}/>
          {rest.map((t) => <FeatureCardMedium key={t.id} article={t}/>)}
        </div>
      </div>
    </section>
  );
}

function FeatureCardLarge({ article }) {
  const href = `#/${article.categoryId}/${article.id}`;
  return (
    <a href={href}
      className="r-feat-big"
      style={{
        textDecoration: 'none',
        background: 'linear-gradient(165deg, var(--peach-light) 0%, var(--peach-dark) 100%)',
        borderRadius: 20, padding: 32, color: '#fff', position: 'relative',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 380,
      }}>
      {article.tag === '季節專題' && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'var(--gold)', color: 'var(--fg-heading)', fontWeight: 700, fontSize: 12,
          padding: '6px 12px', borderRadius: 999, letterSpacing: '0.08em',
        }}>季節專題</div>
      )}
      <div style={{
        width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.12)',
        display: 'grid', placeItems: 'center', marginBottom: 24,
      }}>
        <div style={{ width: 40, height: 40, color: 'var(--gold)' }}>
          <Illo.Virus tone="var(--gold)"/>
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.15em' }}>
        {article.tag}
      </div>
      <h3 style={{
        fontSize: 26, fontWeight: 700, lineHeight: 1.3, margin: '10px 0 14px',
        letterSpacing: '-0.005em', color: '#fff',
      }}>{article.title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.65, margin: 0, flex: 1 }}>
        {article.summary || article.excerpt || ''}
      </p>
      <div style={{
        marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.18)',
        display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: 13,
      }}>
        <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', color: '#fff', fontWeight: 600 }}>
          閱讀全文 <Icon.ArrowRight style={{ width: 14, height: 14 }}/>
        </span>
      </div>
    </a>
  );
}

function FeatureCardMedium({ article }) {
  const href = `#/${article.categoryId}/${article.id}`;
  const cat = (window.CATEGORIES || []).find(c => c.id === article.categoryId) || {};
  const I = Illo[cat.icon] || Illo.Shield;
  const tone = cvdResolveTone(cat);
  return (
    <a href={href}
      className="feat-med r-feat-med"
      style={{
        textDecoration: 'none', color: 'inherit',
        background: 'var(--cream-1)', borderRadius: 20, padding: 28,
        border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column',
        minHeight: 380, transition: 'transform .15s, box-shadow .15s',
      }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: 'var(--surface)',
        display: 'grid', placeItems: 'center', marginBottom: 22,
        border: '1px solid var(--border-soft)',
      }}>
        <div style={{ width: 36, height: 36 }}>
          <I tone={tone}/>
        </div>
      </div>
      <span style={{
        display: 'inline-block', fontSize: 11, color: 'var(--teal)',
        background: 'var(--teal-2)', padding: '3px 10px', borderRadius: 4,
        fontWeight: 600, width: 'fit-content', letterSpacing: '0.05em',
      }}>{article.tag}</span>
      <h3 style={{
        fontSize: 19, fontWeight: 700, lineHeight: 1.35, margin: '12px 0 10px',
        color: 'var(--fg-heading)',
      }}>{article.title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 }}>
        {article.summary || article.excerpt || ''}
      </p>
      <div style={{
        marginTop: 22, paddingTop: 16, borderTop: '1px dashed var(--border-soft)',
        fontSize: 12, color: 'var(--muted-2)', display: 'flex', justifyContent: 'flex-end',
      }}>
        <span>閱讀全文 →</span>
      </div>
    </a>
  );
}

// ───────────────────────── Categories showcase ─────────────────────────
function CategoriesSection() {
  const categories = window.CATEGORIES || [];
  return (
    <section className="r-section" style={{ background: 'var(--cream-2)' }}>
      <div className="container" style={{ padding: '80px 24px' }}>
      <SectionHeader
        eyebrow="TOPICS · 主題分類"
        title="從您關心的主題開始讀起"
        desc="多類別，醫師審訂文章。每個主題都含有基本認識、日常照護、何時就醫等內容。"
      />

      <div className="r-cat-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }}>
        {categories.map((c) => {
          const I = Illo[c.icon] || Illo.Shield;
          const tone = cvdResolveTone(c);
          const count = (c.topics || []).length;
          return (
            <a key={c.id} href={`#/${c.id}`}
              className="topic-card r-cat-tile"
              style={{
                background: 'var(--surface)', borderRadius: 18, padding: 24,
                border: '1px solid var(--border-soft)', textDecoration: 'none',
                color: 'inherit', position: 'relative', overflow: 'hidden',
                transition: 'transform .2s, box-shadow .2s',
                minHeight: 180,
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${tone}12`,
                  display: 'grid', placeItems: 'center',
                }}>
                  <div style={{ width: 34, height: 34 }}>
                    <I tone={tone}/>
                  </div>
                </div>
                <span style={{
                  fontSize: 12, color: 'var(--muted-2)', fontWeight: 500,
                }}>{count} 篇</span>
              </div>
              <div className="r-cat-tile-name" style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-heading)', marginTop: 20 }}>
                {c.name}
                <span style={{ fontWeight: 400, fontSize: 13, color: 'var(--muted-2)', marginLeft: 6 }}>({count})</span>
              </div>
              <div className="r-cat-tile-desc" style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, lineHeight: 1.55 }}>
                {c.desc || c.description || ''}
              </div>
              <div className="r-cat-tile-arrow" style={{
                position: 'absolute', bottom: 20, right: 20,
                width: 32, height: 32, borderRadius: 99, background: `${tone}10`,
                display: 'grid', placeItems: 'center', color: tone,
                opacity: 0.8,
              }}>
                <Icon.ArrowRight style={{ width: 16, height: 16 }}/>
              </div>
            </a>
          );
        })}
      </div>
      </div>
    </section>
  );
}

// ───────────────────────── Latest articles ─────────────────────────
function LatestSection() {
  const latest = window.__data?.LATEST || [];
  if (latest.length === 0) return null;

  const categories = window.CATEGORIES || [];

  return (
    <section className="r-section" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ padding: '80px 24px' }}>
        <SectionHeader
          eyebrow="LATEST · 最新文章"
          title="這週新上線"
          desc="醫師每週更新，跟著季節與流行病一起轉換話題。"
          action="文章列表"
          linkHref="#/"
        />

        <div className="r-latest-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: '1px solid var(--border-soft)', borderRadius: 16, overflow: 'hidden',
        }}>
          {latest.map((a, i) => {
            const cat = categories.find(c => c.id === a.categoryId) || categories[0] || {};
            const I = Illo[cat.icon] || Illo.Shield;
            const tone = cvdResolveTone(cat) || a.accent || 'var(--teal)';
            const col = i % 3, row = Math.floor(i / 3);
            const totalRows = Math.ceil(latest.length / 3);
            return (
              <a key={a.id} href={`#/${a.categoryId}/${a.id}`}
                className="latest-row"
                style={{
                  padding: '22px 24px', textDecoration: 'none', color: 'inherit',
                  borderRight: col < 2 ? '1px solid var(--border-soft)' : 'none',
                  borderBottom: row < totalRows - 1 ? '1px solid var(--border-soft)' : 'none',
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  transition: 'background .15s',
                }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: `${tone}12`,
                  display: 'grid', placeItems: 'center', flexShrink: 0,
                }}>
                  <div style={{ width: 28, height: 28 }}><I tone={tone}/></div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: 11, color: tone, fontWeight: 600,
                    letterSpacing: '0.06em',
                  }}>{a.tag}</span>
                  <div style={{
                    fontSize: 16, fontWeight: 600, color: 'var(--fg-heading)', marginTop: 6,
                    lineHeight: 1.45,
                  }}>{a.title}</div>
                  {a.lastUpdated && (
                    <div style={{ fontSize: 12, color: 'var(--muted-2)', marginTop: 10 }}>
                      {a.lastUpdated}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Doctors ─────────────────────────
function DoctorsSection() {
  const doctors = window.DOCTORS || [];
  if (doctors.length === 0) return null;
  return (
    <section className="r-section" style={{ background: 'var(--cream-2)' }}>
      <div className="container" style={{ padding: '80px 24px' }}>
        <SectionHeader
          eyebrow="DOCTORS · 醫師團隊"
          title="認識您的醫師"
          desc="每位醫師都會花時間聽您說話。看診前多了解一點，溝通時就更有效率。"
        />

        <div className="r-docs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {doctors.map(d => (
            <div key={d.id || d.name} style={{
              background: 'var(--surface)', borderRadius: 18, overflow: 'hidden',
              border: '1px solid var(--border-soft)',
            }}>
              {/* Portrait */}
              <div style={{
                aspectRatio: '1/1', background: `linear-gradient(155deg, ${d.hue}22 0%, ${d.hue}05 100%)`,
                position: 'relative', display: 'grid', placeItems: 'center',
                overflow: 'hidden',
              }}>
                {d.photo
                  ? <img src={d.photo} alt={`${d.name} 醫師`} style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'top center',
                    }}/>
                  : <div style={{
                      width: '62%', aspectRatio: '1', borderRadius: '50%',
                      background: `linear-gradient(160deg, ${d.hue} 0%, ${shade(d.hue)} 100%)`,
                      display: 'grid', placeItems: 'center', color: '#fff',
                      boxShadow: `0 20px 40px -20px ${d.hue}88`,
                    }}>
                      <div style={{ width: 72, height: 72 }}>
                        <Illo.Doctor tone="rgba(255,255,255,0.85)"/>
                      </div>
                    </div>
                }
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-heading)' }}>
                  {d.name} <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: 14 }}>醫師</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 600, marginTop: 4, lineHeight: 1.6 }}>
                  {d.title?.split(' · ').map((part, i) => <div key={i}>{part}</div>)}
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.55, margin: '12px 0 0' }}>{d.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 12 }}>
                  {(d.expertise || []).map(x => (
                    <span key={x} style={{
                      fontSize: 11, color: 'var(--muted)', background: 'var(--cream-2)',
                      padding: '3px 8px', borderRadius: 4,
                    }}>{x}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function shade(hex) {
  return hex.replace(/^#/, '').match(/.{2}/g)
    .map(x => Math.max(0, parseInt(x, 16) - 25).toString(16).padStart(2, '0'))
    .reduce((s, x) => s + x, '#');
}

// ───────────────────────── FAQ ─────────────────────────
function FaqSection() {
  const [open, setOpen] = React.useState(0);
  const faqs = window.FAQS || [];
  const lineUrl = window.CONFIG?.contact?.lineUrl || '';

  return (
    <section id="faq" className="r-section" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ padding: '80px 24px' }}>
      <div className="r-faq-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'flex-start',
      }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            fontSize: 12, color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>FAQ · 常見問題</div>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, color: 'var(--fg-heading)',
            letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0,
          }}>看診前，<br/>先把疑問解決</h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 16, lineHeight: 1.7 }}>
            整理自櫃台與門診最常被問到的問題。
            {lineUrl
              ? '若您的問題不在這裡，歡迎透過 LINE 官方帳號直接詢問。'
              : '若有其他疑問，歡迎來電或親洽診所詢問。'}
          </p>
          {lineUrl && (
            <div style={{ marginTop: 24 }}>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 20px', background: '#06C755', color: '#fff',
                borderRadius: 999, textDecoration: 'none', fontWeight: 600, fontSize: 14,
              }}>
                <Icon.Line style={{ width: 18, height: 18 }}/>
                加入 LINE 詢問
              </a>
              {window.CONFIG?.contact?.lineQrCode && (
                <img
                  src={window.CONFIG.contact.lineQrCode}
                  alt="LINE QR Code"
                  style={{ display: 'block', marginTop: 16, width: 120, height: 120, borderRadius: 8 }}
                />
              )}
            </div>
          )}
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.id || i} style={{
                borderTop: i === 0 ? '1px solid var(--border-soft)' : 'none',
                borderBottom: '1px solid var(--border-soft)',
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', background: 'transparent', border: 0,
                  padding: '22px 0', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16, cursor: 'pointer',
                  textAlign: 'left', color: 'var(--fg-heading)', fontSize: 17, fontWeight: 600,
                }}>
                  <span>{f.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: 99, flexShrink: 0,
                    border: '1px solid var(--border-soft)', color: 'var(--teal)',
                    display: 'grid', placeItems: 'center',
                    background: isOpen ? 'var(--teal)' : '#fff',
                  }}>
                    {isOpen
                      ? <Icon.Minus style={{ width: 14, height: 14, color: '#fff' }}/>
                      : <Icon.Plus style={{ width: 14, height: 14 }}/>}
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingBottom: 22, color: 'var(--muted)', fontSize: 15, lineHeight: 1.75,
                    maxWidth: 620,
                  }}>{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}

// ───────────────────────── Clinic info ─────────────────────────
const hdrCell = {
  padding: '10px 12px', borderBottom: '1px solid var(--border-soft)',
  fontSize: 11, color: 'var(--muted-2)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
};
const cell = {
  padding: '12px 12px', borderBottom: '1px solid var(--border-soft)',
  fontVariantNumeric: 'tabular-nums',
};

function InfoSection() {
  const hours = window.HOURS || [];
  const contact = window.CONFIG?.contact || {};
  const hasAddress = contact.address && contact.address !== '';
  const hasPhone = contact.phone && contact.phone !== '';
  const lineUrl = contact.lineUrl || '';

  return (
    <section
      id="info"
      className="r-section"
      style={{
        padding: '80px 0',
        background: 'var(--cream-2)',
        color: 'var(--fg-heading)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <svg aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.05 }} width="100%" height="100%">
        <defs>
          <pattern id="pplus" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 20v20M20 30h20" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pplus)"/>
      </svg>

      <div className="container r-info-grid" style={{
        padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60,
        position: 'relative', alignItems: 'flex-start',
      }}>
        {/* Contact block (left) */}
        <div>
          <div style={{
            fontSize: 12, color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>INFO · 門診資訊</div>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700,
            letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0, color: 'var(--fg-heading)',
          }}>就在您家巷口，<br/>看診更自在</h2>

          <div style={{ marginTop: 32, display: 'grid', gap: 20 }}>
            {hasAddress && (
              <InfoRow icon={Icon.Pin} label="診所地址" value={contact.address} sub={contact.addressSub || ''}/>
            )}
            {hasPhone && (
              <InfoRow icon={Icon.Phone} label="聯絡電話" value={contact.phone} sub={contact.phoneSub || ''}/>
            )}
            {lineUrl && (
              <InfoRow icon={Icon.Line} label="線上預約" value="LINE 官方帳號" sub="亦可網站預約"/>
            )}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {lineUrl && (
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '12px 22px', background: 'var(--teal)', color: '#fff', borderRadius: 999,
                textDecoration: 'none', fontWeight: 600, fontSize: 14,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <Icon.Line style={{ width: 16, height: 16 }}/> 立即預約
              </a>
            )}
            <a href="#/contact" style={{
              padding: '12px 22px', background: 'var(--surface)', color: 'var(--fg-heading)', borderRadius: 999,
              textDecoration: 'none', fontWeight: 600, fontSize: 14,
              border: '1px solid var(--border-soft)',
            }}>交通指引</a>
          </div>
        </div>

        {/* Schedule table (right) */}
        <div style={{
          background: 'var(--surface)', borderRadius: 20, padding: 28,
          border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-soft)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg-heading)' }}>每週門診時段</div>
            <span style={{
              fontSize: 11, color: 'var(--warn-fg)', border: '1px solid color-mix(in srgb, var(--warn-fg) 35%, transparent)',
              padding: '3px 10px', borderRadius: 4, letterSpacing: '0.08em', fontWeight: 600,
              background: 'var(--warn-bg)',
            }}>本週</span>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.1fr 1.1fr 1.1fr', gap: 0,
            fontSize: 13,
          }}>
            <div style={hdrCell}></div>
            <div style={hdrCell}>上午診</div>
            <div style={hdrCell}>下午診</div>
            <div style={hdrCell}>晚診</div>
            {hours.map((h) => {
              const isMuted = (v) => v === '休診' || v === 'TODO';
              return (
                <React.Fragment key={h.day}>
                  <div style={{ ...cell, fontWeight: 600, color: 'var(--fg-heading)' }}>{h.day}</div>
                  <div style={{ ...cell, color: isMuted(h.am) ? 'var(--muted-3)' : 'var(--muted)' }}>{h.am}</div>
                  <div style={{
                    ...cell,
                    color: h.pmSpecial ? 'var(--warn-fg)' : isMuted(h.pm) ? 'var(--muted-3)' : 'var(--muted)',
                    fontWeight: h.pmSpecial ? 600 : undefined,
                  }}>{h.pm}</div>
                  <div style={{ ...cell, color: isMuted(h.ev) ? 'var(--muted-3)' : 'var(--muted)' }}>{h.ev}</div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: I, label, value, sub }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: 'var(--warn-bg)', color: 'var(--warn-fg)',
        display: 'grid', placeItems: 'center', border: '1px solid color-mix(in srgb, var(--warn-fg) 25%, transparent)',
      }}>
        <I style={{ width: 20, height: 20 }}/>
      </div>
      <div>
        <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4, color: 'var(--fg-heading)' }}>{value}</div>
        {sub && <div style={{ fontSize: 13, color: 'var(--muted-2)', marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

// ───────────────────────── Footer ─────────────────────────
function Footer({ ctx }) {
  const config = window.CONFIG || {};
  const categories = window.CATEGORIES || [];
  const clinicName = config.clinicName || '誠心醫療體系工學診所';
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--cream-2) 0%, var(--border-soft) 100%)',
      color: 'var(--muted)', padding: '56px 0 32px', fontSize: 13,
      borderTop: '1px solid var(--border-soft)',
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div className="r-footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 40, marginBottom: 40,
        }}>
          {/* Column 1: Branding */}
          <div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <ClinicMark size={36}/>
              <div>
                <div style={{ color: 'var(--fg-heading)', fontWeight: 700, fontSize: 16 }}>{clinicName}</div>
                {config.clinicNameEn && (
                  <div style={{ color: 'var(--muted-2)', fontSize: 11, letterSpacing: '0.05em' }}>{config.clinicNameEn}</div>
                )}
              </div>
            </div>
            <p style={{ marginTop: 14, lineHeight: 1.7 }}>
              {config.description || '為每一個家庭打造值得信賴的醫療服務，以誠心聆聽，用醫學知識陪您走一段長遠的健康旅程。'}
            </p>
          </div>

          {/* Column 2: 衛教分類 */}
          <div>
            <div style={{ color: 'var(--fg-heading)', fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: '0.05em' }}>衛教分類</div>
            {categories.slice(0, 5).map(c => (
              <a key={c.id} href={`#/${c.id}`} style={{
                display: 'block', color: 'var(--muted)', textDecoration: 'none',
                padding: '6px 0', fontSize: 13,
              }}>{c.name}</a>
            ))}
          </div>

          {/* Column 3: 診所 */}
          <div>
            <div style={{ color: 'var(--fg-heading)', fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: '0.05em' }}>診所</div>
            {[
              { label: '醫師團隊', href: '#/#doctors' },
              { label: '門診資訊', href: '#/#info' },
              { label: '常見問題', href: '#/#faq' },
              { label: '聯絡我們', href: '#/contact' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                display: 'block', color: 'var(--muted)', textDecoration: 'none',
                padding: '6px 0', fontSize: 13,
              }}>{label}</a>
            ))}
          </div>

          {/* Column 4: 個人化 */}
          <div>
            <div style={{ color: 'var(--fg-heading)', fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: '0.05em' }}>個人化</div>
            {[
              { label: '我的收藏', href: '#/favorites' },
              { label: '最近瀏覽', href: '#/recent' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                display: 'block', color: 'var(--muted)', textDecoration: 'none',
                padding: '6px 0', fontSize: 13,
              }}>{label}</a>
            ))}
          </div>
        </div>

        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(26,57,66,0.1)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontSize: 12, opacity: 0.7,
        }}>
          <span>© {year} {clinicName}. All rights reserved.</span>
          <span>本站內容由專業醫療團隊審閱</span>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────── HomePage wrapper ─────────────────────────
function HomePage({ ctx }) {
  React.useEffect(() => {
    const t = window.__scrollTarget;
    if (!t) return;
    window.__scrollTarget = null;
    setTimeout(() => {
      const el = document.getElementById(t);
      if (!el) return;
      const navH = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 16, behavior: 'smooth' });
    }, 80);
  }, []);

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

Object.assign(window, {
  HomePage,
  FeaturedSection, CategoriesSection, LatestSection,
  DoctorsSection, FaqSection, InfoSection, Footer,
});
