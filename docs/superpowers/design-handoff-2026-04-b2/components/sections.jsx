// Main page sections

function SectionHeader({ eyebrow, title, desc, action, onAction }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      marginBottom: 28, gap: 24, flexWrap: 'wrap',
    }}>
      <div style={{ maxWidth: 640 }}>
        {eyebrow && (
          <div style={{
            fontSize: 12, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>{eyebrow}</div>
        )}
        <h2 className="r-section-head-title" style={{
          fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, color: '#1a3942',
          letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0,
        }}>{title}</h2>
        {desc && <p style={{ color: '#56706c', fontSize: 16, marginTop: 10, lineHeight: 1.65 }}>{desc}</p>}
      </div>
      {action && (
        <a href="#" onClick={(e) => { e.preventDefault(); onAction?.(); }} style={{
          color: '#0e7c7b', fontWeight: 600, fontSize: 14, textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, paddingBottom: 6,
          borderBottom: '1px solid #0e7c7b',
        }}>
          {action} <Icon.ArrowRight style={{ width: 16, height: 16 }}/>
        </a>
      )}
    </div>
  );
}

// ───────────────────────── Featured (seasonal + editorial picks) ─────────────────────────
function FeaturedSection({ onNavigate, showSeasonal = true }) {
  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <SectionHeader
          eyebrow="FEATURED · 精選主題"
          title="本週編輯精選"
          desc="從門診最常被問到的問題出發,醫師與護理師共同審訂、定期更新。"
          action="看全部精選" onAction={() => onNavigate('list')}
        />

        <div className="r-feat-grid" style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 20,
        }}>
          {/* Big card */}
          <FeatureCardLarge article={FEATURED[0]} onNavigate={onNavigate} showSeasonal={showSeasonal}/>
          {/* 2 smaller cards */}
          <FeatureCardMedium article={FEATURED[1]} onNavigate={onNavigate}/>
          <FeatureCardMedium article={FEATURED[2]} onNavigate={onNavigate}/>
        </div>
      </div>
    </section>
  );
}

function FeatureCardLarge({ article, onNavigate, showSeasonal }) {
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('article');}}
      className="r-feat-big"
      style={{
        gridRow: 'span 1', textDecoration: 'none',
        background: 'linear-gradient(165deg, #f2b088 0%, #e5966a 100%)',
        borderRadius: 20, padding: 32, color: '#fff', position: 'relative',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 380,
      }}>
      {showSeasonal && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: '#f2c94c', color: '#1a3942', fontWeight: 700, fontSize: 12,
          padding: '6px 12px', borderRadius: 999, letterSpacing: '0.08em',
        }}>季節專題</div>
      )}
      <div style={{
        width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.12)',
        display: 'grid', placeItems: 'center', marginBottom: 24,
      }}>
        <div style={{ width: 40, height: 40, color: '#f2c94c' }}>
          <Illo.Virus tone="#f2c94c"/>
        </div>
      </div>
      <div style={{ fontSize: 12, color: '#fff3e8', fontWeight: 600, letterSpacing: '0.15em' }}>
        {article.category}
      </div>
      <h3 style={{
        fontSize: 26, fontWeight: 700, lineHeight: 1.3, margin: '10px 0 14px',
        letterSpacing: '-0.005em',
      }}>{article.title}</h3>
      <p style={{ color: '#fff3e8', fontSize: 15, lineHeight: 1.65, margin: 0, flex: 1 }}>
        {article.excerpt}
      </p>
      <div style={{
        marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.18)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13,
      }}>
        <span>{article.author} · {article.date}</span>
        <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center', color: '#fff', fontWeight: 600 }}>
          閱讀全文 <Icon.ArrowRight style={{ width: 14, height: 14 }}/>
        </span>
      </div>
    </a>
  );
}

function FeatureCardMedium({ article, onNavigate }) {
  const cat = CATEGORIES.find(c => c.name === article.category) || CATEGORIES[0];
  const I = Illo[cat.icon];
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('article');}}
      style={{
        textDecoration: 'none', color: 'inherit',
        background: '#f5faf8', borderRadius: 20, padding: 28,
        border: '1px solid #eaf2ef', display: 'flex', flexDirection: 'column',
        minHeight: 380, transition: 'transform .15s, box-shadow .15s',
      }}
      className="feat-med r-feat-med">
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: '#fff',
        display: 'grid', placeItems: 'center', marginBottom: 22,
        border: '1px solid #e4ede9',
      }}>
        <div style={{ width: 36, height: 36 }}>
          <I tone="#0e7c7b"/>
        </div>
      </div>
      <span style={{
        display: 'inline-block', fontSize: 11, color: '#0e7c7b',
        background: '#e6f2ef', padding: '3px 10px', borderRadius: 4,
        fontWeight: 600, width: 'fit-content', letterSpacing: '0.05em',
      }}>{article.category}</span>
      <h3 style={{
        fontSize: 19, fontWeight: 700, lineHeight: 1.35, margin: '12px 0 10px',
        color: '#1a3942',
      }}>{article.title}</h3>
      <p style={{ color: '#56706c', fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 }}>
        {article.excerpt}
      </p>
      <div style={{
        marginTop: 22, paddingTop: 16, borderTop: '1px dashed #c9ddda',
        fontSize: 12, color: '#8aa3a0', display: 'flex', justifyContent: 'space-between',
      }}>
        <span>{article.author}</span>
        <span>{article.date} · {article.read} 分鐘</span>
      </div>
    </a>
  );
}

// ───────────────────────── Categories showcase ─────────────────────────
function CategoriesSection({ onNavigate }) {
  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#f5faf8' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <SectionHeader
          eyebrow="TOPICS · 主題分類"
          title="從您關心的主題開始讀起"
          desc="八大類別,140+ 篇醫師審訂文章。每個主題都含有「基本認識」、「日常照護」、「何時就醫」三段內容。"
        />

        <div className="r-cat-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {CATEGORIES.map((c) => {
            const I = Illo[c.icon];
            return (
              <a key={c.id} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list');}}
                className="topic-card r-cat-tile"
                style={{
                  background: '#fff', borderRadius: 18, padding: 24,
                  border: '1px solid #eaf2ef', textDecoration: 'none',
                  color: 'inherit', position: 'relative', overflow: 'hidden',
                  transition: 'transform .2s, box-shadow .2s',
                  minHeight: 180,
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${c.tone}12`,
                    display: 'grid', placeItems: 'center',
                  }}>
                    <div style={{ width: 34, height: 34 }}>
                      <I tone={c.tone}/>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 12, color: '#8aa3a0', fontWeight: 500,
                  }}>{c.count} 篇</span>
                </div>
                <div className="r-cat-tile-name" style={{ fontSize: 18, fontWeight: 700, color: '#1a3942', marginTop: 20 }}>
                  {c.name}
                </div>
                <div className="r-cat-tile-desc" style={{ fontSize: 13, color: '#56706c', marginTop: 6, lineHeight: 1.55 }}>
                  {c.desc}
                </div>
                <div className="r-cat-tile-arrow" style={{
                  position: 'absolute', bottom: 20, right: 20,
                  width: 32, height: 32, borderRadius: 99, background: `${c.tone}10`,
                  display: 'grid', placeItems: 'center', color: c.tone,
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
function LatestSection({ onNavigate }) {
  const [filter, setFilter] = React.useState('全部');
  const filters = ['全部', '慢性病照護', '兒童健康', '長者照護', '預防保健'];
  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <SectionHeader
          eyebrow="LATEST · 最新文章"
          title="這週新上線"
          desc="醫師每週更新,跟著季節與流行病一起轉換話題。"
          action="文章列表" onAction={() => onNavigate('list')}
        />

        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '7px 16px', borderRadius: 999,
              border: '1px solid ' + (filter === f ? '#0e7c7b' : '#d0e5e1'),
              background: filter === f ? '#0e7c7b' : '#fff',
              color: filter === f ? '#fff' : '#435754',
              fontWeight: 500, fontSize: 13, cursor: 'pointer',
            }}>{f}</button>
          ))}
        </div>

        <div className="r-latest-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid #eaf2ef', borderRadius: 16, overflow: 'hidden' }}>
          {LATEST.map((a, i) => {
            const cat = CATEGORIES.find(c => c.name === a.tag) || CATEGORIES[0];
            const I = Illo[cat.icon];
            const col = i % 3, row = Math.floor(i / 3);
            return (
              <a key={a.id} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('article');}}
                className="latest-row"
                style={{
                  padding: '22px 24px', textDecoration: 'none', color: 'inherit',
                  borderRight: col < 2 ? '1px solid #eaf2ef' : 'none',
                  borderBottom: row === 0 ? '1px solid #eaf2ef' : 'none',
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  transition: 'background .15s',
                }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: `${cat.tone}12`,
                  display: 'grid', placeItems: 'center', flexShrink: 0,
                }}>
                  <div style={{ width: 28, height: 28 }}><I tone={cat.tone}/></div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: 11, color: cat.tone, fontWeight: 600,
                    letterSpacing: '0.06em',
                  }}>{a.tag}</span>
                  <div style={{
                    fontSize: 16, fontWeight: 600, color: '#1a3942', marginTop: 6,
                    lineHeight: 1.45,
                  }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: '#8aa3a0', marginTop: 10 }}>
                    {a.date} · {a.read} 分鐘閱讀
                  </div>
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
function DoctorsSection({ onNavigate, showDoctors = true }) {
  if (!showDoctors) return null;
  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#f5faf8' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <SectionHeader
          eyebrow="DOCTORS · 醫師團隊"
          title="認識您的家庭醫師"
          desc="每位醫師都會花時間聽您說話。看診前多了解一點,溝通時就更有效率。"
          action="完整團隊介紹" onAction={() => onNavigate('doctors')}
        />

        <div className="r-docs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {DOCTORS.map(d => (
            <div key={d.name} style={{
              background: '#fff', borderRadius: 18, overflow: 'hidden',
              border: '1px solid #eaf2ef',
            }}>
              {/* Portrait placeholder */}
              <div style={{
                aspectRatio: '1/1', background: `linear-gradient(155deg, ${d.hue}22 0%, ${d.hue}05 100%)`,
                position: 'relative', display: 'grid', placeItems: 'center',
              }}>
                <div style={{
                  width: '62%', aspectRatio: '1', borderRadius: '50%',
                  background: `linear-gradient(160deg, ${d.hue} 0%, ${shade(d.hue)} 100%)`,
                  display: 'grid', placeItems: 'center', color: '#fff',
                  fontSize: 48, fontWeight: 300, letterSpacing: '-0.02em',
                  boxShadow: `0 20px 40px -20px ${d.hue}88`,
                }}>
                  {d.name[0]}
                </div>
                <span style={{
                  position: 'absolute', top: 14, left: 14,
                  background: '#fff', color: d.hue, fontWeight: 600,
                  fontSize: 11, padding: '4px 10px', borderRadius: 4,
                  letterSpacing: '0.05em',
                }}>家醫科</span>
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#1a3942' }}>
                  {d.name} <span style={{ fontWeight: 400, color: '#6d8481', fontSize: 14 }}>醫師</span>
                </div>
                <div style={{ fontSize: 12, color: '#4a9e94', fontWeight: 600, marginTop: 4 }}>{d.title}</div>
                <p style={{ fontSize: 13, color: '#56706c', lineHeight: 1.55, margin: '12px 0 0' }}>{d.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 12 }}>
                  {d.expertise.map(x => (
                    <span key={x} style={{
                      fontSize: 11, color: '#435754', background: '#f0f5f3',
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
  // return slightly darker version — crude hash darkening
  return hex.replace(/^#/, '').match(/.{2}/g)
    .map(x => Math.max(0, parseInt(x, 16) - 25).toString(16).padStart(2, '0'))
    .reduce((s, x) => s + x, '#');
}

// ───────────────────────── FAQ + Hours + CTA ─────────────────────────
function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container r-faq-grid" style={{ padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'flex-start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            fontSize: 12, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>FAQ · 常見問題</div>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700, color: '#1a3942',
            letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0,
          }}>看診前,<br/>先把疑問解決</h2>
          <p style={{ color: '#56706c', fontSize: 15, marginTop: 16, lineHeight: 1.7 }}>
            整理自櫃台與門診最常被問到的問題。
            若您的問題不在這裡,歡迎透過 LINE 官方帳號直接詢問。
          </p>
          <a href="#" style={{
            marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 20px', background: '#06C755', color: '#fff',
            borderRadius: 999, textDecoration: 'none', fontWeight: 600, fontSize: 14,
          }}>
            <Icon.Line style={{ width: 18, height: 18 }}/>
            加入 LINE 詢問
          </a>
        </div>

        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderTop: i === 0 ? '1px solid #eaf2ef' : 'none',
                borderBottom: '1px solid #eaf2ef',
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', background: 'transparent', border: 0,
                  padding: '22px 0', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', gap: 16, cursor: 'pointer',
                  textAlign: 'left', color: '#1a3942', fontSize: 17, fontWeight: 600,
                }}>
                  <span>{f.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: 99, flexShrink: 0,
                    border: '1px solid #d0e5e1', color: '#0e7c7b',
                    display: 'grid', placeItems: 'center',
                    background: isOpen ? '#0e7c7b' : '#fff',
                  }}>
                    {isOpen
                      ? <Icon.Minus style={{ width: 14, height: 14, color: '#fff' }}/>
                      : <Icon.Plus style={{ width: 14, height: 14 }}/>}
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingBottom: 22, color: '#56706c', fontSize: 15, lineHeight: 1.75,
                    maxWidth: 620,
                  }}>{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Clinic info ─────────────────────────
function InfoSection() {
  return (
    <section className="r-section" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #f0f7f4 0%, #e4ede9 100%)', color: '#1a3942', position: 'relative', overflow: 'hidden' }} data-screen-label="InfoSection">
      <svg aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.05 }} width="100%" height="100%">
        <defs>
          <pattern id="pplus" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 20v20M20 30h20" stroke="#0e7c7b" strokeWidth="1" strokeLinecap="round"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pplus)"/>
      </svg>

      <div className="container r-info-grid" style={{
        padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60,
        position: 'relative', alignItems: 'flex-start',
      }}>
        <div>
          <div style={{
            fontSize: 12, color: '#b38a1a', fontWeight: 600, letterSpacing: '0.18em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>INFO · 門診資訊</div>
          <h2 style={{
            fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 700,
            letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0, color: '#1a3942',
          }}>就在您家巷口,<br/>看診更自在</h2>

          <div style={{ marginTop: 32, display: 'grid', gap: 20 }}>
            <InfoRow icon={Icon.Pin} label="診所地址"
              value="台北市大安區工學路 168 號 1F"
              sub="捷運科技大樓站 3 號出口步行 5 分鐘"/>
            <InfoRow icon={Icon.Phone} label="聯絡電話"
              value="(02) 2345-6789"
              sub="平日 08:30–21:00 / 週六 08:30–12:00"/>
            <InfoRow icon={Icon.Calendar} label="線上預約"
              value="line.me/gongxue"
              sub="LINE 官方帳號 · 亦可網站預約"/>
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#" style={{
              padding: '12px 22px', background: '#0e7c7b', color: '#fff', borderRadius: 999,
              textDecoration: 'none', fontWeight: 600, fontSize: 14,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <Icon.Calendar style={{ width: 16, height: 16 }}/> 立即預約
            </a>
            <a href="#" style={{
              padding: '12px 22px', background: '#fff', color: '#1a3942', borderRadius: 999,
              textDecoration: 'none', fontWeight: 600, fontSize: 14,
              border: '1px solid #d0e5e1',
            }}>交通指引</a>
          </div>
        </div>

        {/* Schedule */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: 28,
          border: '1px solid #d7e7e0', boxShadow: '0 10px 24px -18px rgba(15,42,66,0.15)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#1a3942' }}>每週門診時段</div>
            <span style={{
              fontSize: 11, color: '#b38a1a', border: '1px solid #e5cf7c',
              padding: '3px 10px', borderRadius: 4, letterSpacing: '0.08em', fontWeight: 600,
              background: '#fdf4d9',
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
            {HOURS.map((h, i) => (
              <React.Fragment key={h.day}>
                <div style={{ ...cell, fontWeight: 600, color: '#1a3942' }}>{h.day}</div>
                <div style={{ ...cell, color: h.am === '休診' ? '#a8bcb9' : '#435754' }}>{h.am}</div>
                <div style={{ ...cell, color: h.pm === '休診' ? '#a8bcb9' : '#435754' }}>{h.pm}</div>
                <div style={{ ...cell, color: h.ev === '休診' ? '#a8bcb9' : '#435754' }}>{h.ev}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const hdrCell = {
  padding: '10px 12px', borderBottom: '1px solid #eaf2ef',
  fontSize: 11, color: '#8aa3a0', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
};
const cell = {
  padding: '12px 12px', borderBottom: '1px solid #f3f8f5',
  fontVariantNumeric: 'tabular-nums',
};

function InfoRow({ icon: I, label, value, sub }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: '#fff8ec', color: '#b38a1a',
        display: 'grid', placeItems: 'center', border: '1px solid #f0e5c4',
      }}>
        <I style={{ width: 20, height: 20 }}/>
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#5a7370', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4, color: '#1a3942' }}>{value}</div>
        <div style={{ fontSize: 13, color: '#6d8481', marginTop: 2 }}>{sub}</div>
      </div>
    </div>
  );
}

// ───────────────────────── Footer ─────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #eef6f2 0%, #e0ece7 100%)', color: '#5a7370', padding: '56px 0 32px', fontSize: 13, borderTop: '1px solid #d7e7e0' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <div className="r-footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 40, marginBottom: 40,
        }}>
          <div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <ClinicMark size={36}/>
              <div style={{ color: '#1a3942', fontWeight: 700, fontSize: 16 }}>工學誠心診所</div>
            </div>
            <p style={{ marginTop: 14, lineHeight: 1.7 }}>
              為每一個家庭打造值得信賴的家庭醫師。
              以誠心聆聽,用醫學知識陪您走一段長遠的健康旅程。
            </p>
          </div>
          <FooterCol title="衛教主題" items={['慢性病照護', '感冒與呼吸道', '兒童健康', '長者照護', '預防保健']}/>
          <FooterCol title="診所資訊" items={['門診時間', '醫師團隊', '診療項目', '交通指引', '院所公告']}/>
          <FooterCol title="聯絡我們" items={['(02) 2345-6789', 'LINE 官方帳號', '電子信箱', '線上預約', '意見回饋']}/>
        </div>
        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(26,57,66,0.1)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontSize: 12, opacity: 0.7,
        }}>
          <span>© 2026 工學誠心診所 GONGXUE FAMILY CLINIC. All rights reserved.</span>
          <span>衛部醫字第 1234567 號 · 網站內容僅供衛教參考,不能取代醫師診斷</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ color: '#1a3942', fontWeight: 600, marginBottom: 14, fontSize: 13, letterSpacing: '0.05em' }}>{title}</div>
      {items.map(i => (
        <a key={i} href="#" style={{
          display: 'block', color: '#5a7370', textDecoration: 'none',
          padding: '6px 0', fontSize: 13,
        }}>{i}</a>
      ))}
    </div>
  );
}

Object.assign(window, {
  FeaturedSection, CategoriesSection, LatestSection,
  DoctorsSection, FaqSection, InfoSection, Footer,
});
