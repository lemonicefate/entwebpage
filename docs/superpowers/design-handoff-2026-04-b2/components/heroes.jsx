// Three hero variants

function HeroBig({ onNavigate }) {
  return (
    <section style={{ background: '#fff8ec', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative soft shapes */}
      <div aria-hidden style={{
        position: 'absolute', right: -120, top: -120, width: 520, height: 520,
        borderRadius: '50%', background: 'radial-gradient(circle, #c7e8e1 0%, rgba(199,232,225,0) 70%)',
      }}/>
      <div aria-hidden style={{
        position: 'absolute', left: -80, bottom: -140, width: 360, height: 360,
        borderRadius: '50%', background: 'radial-gradient(circle, #fde2c8 0%, rgba(253,226,200,0) 70%)',
      }}/>

      <div className="container r-hero-grid" style={{
        padding: '72px 24px 96px', display: 'grid',
        gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center',
        position: 'relative',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            background: '#ffffff', border: '1px solid #d0e5e1',
            fontSize: 13, color: '#0e7c7b', fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#f2c94c' }}/>
            給每個家庭的衛教知識庫
          </div>
          <h1 className="r-hero-h1" style={{
            fontSize: 'clamp(40px, 5vw, 56px)', lineHeight: 1.15,
            margin: '20px 0 20px', color: '#1a3942', fontWeight: 700,
            letterSpacing: '-0.01em',
          }}>
            把看診結束後的<br/>
            <span style={{ color: '#0e7c7b', position: 'relative' }}>
              那一段路
              <svg viewBox="0 0 200 10" style={{
                position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10,
              }}>
                <path d="M2 6 Q 50 2, 100 6 T 198 6" stroke="#f2c94c" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            ,走得更踏實。
          </h1>
          <p className="r-hero-p" style={{
            fontSize: 18, lineHeight: 1.7, color: '#435754', maxWidth: 520,
            margin: '0 0 32px',
          }}>
            工學誠心診所的衛教專區,收錄醫師親自審訂的 140+ 篇文章,
            從「這樣是不是該看醫生」到「長期怎麼照顧自己」,都為您整理清楚。
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list');}}
               style={primaryBtn}>
              進入衛教專區 <Icon.ArrowRight style={{ width: 18, height: 18 }}/>
            </a>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('appointment');}}
               style={secondaryBtn}>
              <Icon.Calendar style={{ width: 18, height: 18 }}/> 線上預約門診
            </a>
          </div>
          <div className="r-hero-stats" style={{
            marginTop: 40, display: 'flex', gap: 28,
            borderTop: '1px dashed #c9ddda', paddingTop: 24,
          }}>
            <Stat n="140+" label="衛教文章"/>
            <Stat n="8"    label="專科醫師"/>
            <Stat n="12 年" label="社區服務"/>
          </div>
        </div>

        {/* Illustration stack */}
        <div className="r-hero-illus">
          <HeroIllustration/>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, color: '#1a3942', letterSpacing: '-0.01em' }}>{n}</div>
      <div style={{ fontSize: 13, color: '#6d8481', marginTop: 2 }}>{label}</div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div style={{ position: 'relative', aspectRatio: '1/1', width: '100%', maxWidth: 500, marginLeft: 'auto' }}>
      {/* Back card: chart */}
      <div style={{
        position: 'absolute', left: '4%', top: '8%', width: '62%', aspectRatio: '1/1.1',
        background: '#fff', borderRadius: 22, padding: 22,
        boxShadow: '0 20px 40px -22px rgba(15,42,66,0.25)',
        border: '1px solid #eaf2ef',
        transform: 'rotate(-3deg)',
      }}>
        <div style={{ fontSize: 11, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.12em' }}>
          本週精選
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#1a3942', marginTop: 4, lineHeight: 1.4 }}>
          在家量血壓的722原則
        </div>
        <div style={{
          marginTop: 14, height: 120, background: '#f5faf8', borderRadius: 12, padding: 12,
          display: 'grid', gridTemplateRows: '1fr auto', gap: 6,
        }}>
          <svg viewBox="0 0 120 60" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4a9e94" stopOpacity="0.35"/>
                <stop offset="100%" stopColor="#4a9e94" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22 L120 60 L0 60 Z" fill="url(#hg)"/>
            <path d="M0 50 L15 40 L30 45 L45 30 L60 32 L75 22 L90 26 L105 18 L120 22" stroke="#0e7c7b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            {[[15,40],[45,30],[75,22],[105,18]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#0e7c7b" strokeWidth="1.5"/>
            ))}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#8aa3a0' }}>
            <span>週一</span><span>週三</span><span>週五</span><span>週日</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10, fontSize: 10 }}>
          <span style={tagChip('#e6f2ef','#0e7c7b')}>血壓</span>
          <span style={tagChip('#fdf4d9','#a07a14')}>健檢</span>
        </div>
      </div>

      {/* Front card: illustration */}
      <div style={{
        position: 'absolute', right: '2%', bottom: '6%', width: '58%', aspectRatio: '1/1.15',
        background: 'linear-gradient(170deg, #f2b088, #e5966a)', borderRadius: 22, padding: 22,
        color: '#fff', transform: 'rotate(2deg)',
        boxShadow: '0 24px 44px -20px rgba(229,150,106,0.5)',
      }}>
        <div style={{
          width: 42, height: 42, borderRadius: 99, background: '#f2c94c',
          display: 'grid', placeItems: 'center', color: '#1a3942', fontWeight: 700, fontSize: 18,
        }}>+</div>
        <div style={{ fontSize: 13, color: '#c9ede9', marginTop: 18, letterSpacing: '0.1em' }}>
          季節專題 ‧ 04月
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginTop: 6 }}>
          流感季來了,<br/>別把重症當小感冒
        </div>
        <div style={{ marginTop: 'auto', position: 'absolute', bottom: 18, left: 22, right: 22 }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.2)' }}/>
          <div style={{ marginTop: 12, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>
            <span>陳志明 醫師</span>
            <span style={{ opacity: 0.7 }}>6 分鐘閱讀</span>
          </div>
        </div>
      </div>

      {/* Floating pill: search */}
      <div style={{
        position: 'absolute', left: '-6%', bottom: '18%',
        background: '#fff', borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 14px 30px -12px rgba(15,42,66,0.25)',
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 13,
        border: '1px solid #eaf2ef',
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8, background: '#f5faf8', display: 'grid', placeItems: 'center',
        }}>
          <Icon.Heart style={{ width: 16, height: 16, color: '#d96757' }}/>
        </div>
        <div>
          <div style={{ fontSize: 11, color: '#6d8481' }}>已收藏</div>
          <div style={{ fontWeight: 600, color: '#1a3942' }}>糖尿病飲食 12 篇</div>
        </div>
      </div>
    </div>
  );
}

function tagChip(bg, fg) {
  return { background: bg, color: fg, padding: '3px 8px', borderRadius: 4, fontWeight: 600 };
}

const primaryBtn = {
  padding: '14px 24px', background: '#0e7c7b', color: '#fff', borderRadius: 999,
  textDecoration: 'none', fontWeight: 600, fontSize: 15,
  display: 'inline-flex', alignItems: 'center', gap: 8,
  boxShadow: '0 1px 0 rgba(255,255,255,0.25) inset, 0 8px 20px -6px rgba(14,124,123,0.4)',
};
const secondaryBtn = {
  padding: '14px 24px', background: '#fff', color: '#1a3942', borderRadius: 999,
  textDecoration: 'none', fontWeight: 600, fontSize: 15,
  display: 'inline-flex', alignItems: 'center', gap: 8,
  border: '1px solid #d0e5e1',
};

// ───────────────────────── Search-first hero ─────────────────────────
function HeroSearch({ onNavigate }) {
  const [q, setQ] = React.useState('');
  const popular = ['糖尿病飲食', '小孩發燒', '肩頸痠痛', '成人健檢', '流感疫苗', '胃食道逆流'];
  return (
    <section style={{
      background: 'linear-gradient(160deg, #b4ddd3 0%, #9dccc3 50%, #8fc3b9 100%)',
      position: 'relative', overflow: 'hidden', color: '#fff',
    }}>
      {/* Decorative grid of soft plus signs */}
      <svg aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.08 }} width="100%" height="100%">
        <defs>
          <pattern id="plus" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plus)"/>
      </svg>
      <div aria-hidden style={{
        position: 'absolute', right: -100, bottom: -100, width: 420, height: 420,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,201,76,0.18), rgba(242,201,76,0) 70%)',
      }}/>

      <div className="container r-hero-pad" style={{
        padding: '80px 24px 96px', textAlign: 'center', position: 'relative',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', borderRadius: 999,
          background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
          fontSize: 13, color: '#cfe5e2', fontWeight: 500,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#f2c94c' }}/>
          140 篇醫師審訂衛教 · 8 大主題
        </div>
        <h1 style={{
          fontSize: 'clamp(40px, 5.5vw, 60px)', fontWeight: 700, lineHeight: 1.15,
          margin: '20px auto 18px', maxWidth: 880, letterSpacing: '-0.01em',
        }}>
          有問題別上網亂查,<br/>
          <span style={{ color: '#f2c94c' }}>先問工學誠心。</span>
        </h1>
        <p style={{ fontSize: 18, color: '#cfe5e2', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
          從症狀、疾病到日常保養,快速找到您需要的答案。
        </p>

        {/* Search box */}
        <div className="r-hero-search r-hero-search-flex" style={{
          maxWidth: 640, margin: '0 auto', background: '#fff', borderRadius: 16,
          padding: 8, display: 'flex', gap: 8,
          boxShadow: '0 24px 50px -20px rgba(0,0,0,0.35)',
        }}>
          <div style={{ width: 48, display: 'grid', placeItems: 'center', color: '#0e7c7b' }}>
            <Icon.Search style={{ width: 22, height: 22 }}/>
          </div>
          <input value={q} onChange={e => setQ(e.target.value)}
            placeholder="輸入症狀、疾病或關鍵字,例如:量血壓"
            style={{
              flex: 1, border: 0, outline: 'none', fontSize: 16, color: '#1a3942',
              background: 'transparent',
            }}/>
          <button onClick={() => onNavigate('list')} style={{
            padding: '0 22px', borderRadius: 12, background: '#0e7c7b', color: '#fff',
            border: 0, fontWeight: 600, fontSize: 15, cursor: 'pointer',
            display: 'inline-flex', gap: 6, alignItems: 'center',
          }}>
            搜尋 <Icon.ArrowRight style={{ width: 16, height: 16 }}/>
          </button>
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          <span style={{ fontSize: 13, color: '#a6c7c3', alignSelf: 'center' }}>熱門搜尋</span>
          {popular.map(p => (
            <button key={p} onClick={() => setQ(p)} style={{
              padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 13, cursor: 'pointer',
            }}>{p}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Category-first hero ─────────────────────────
function HeroCategories({ onNavigate }) {
  return (
    <section style={{ background: '#f5faf8', padding: '56px 0 32px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', right: -120, top: -100, width: 420, height: 420,
        borderRadius: '50%', background: 'radial-gradient(circle, #b8dcd6 0%, rgba(184,220,214,0) 70%)',
      }}/>
      <div className="container" style={{ padding: '0 24px', position: 'relative' }}>
        <div className="r-hero-search-top" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center',
          marginBottom: 36,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: '#ffffff', border: '1px solid #d0e5e1',
              fontSize: 13, color: '#0e7c7b', fontWeight: 600,
            }}>
              衛教知識庫
            </div>
            <h1 style={{
              fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.15,
              margin: '16px 0 18px', color: '#1a3942', fontWeight: 700,
              letterSpacing: '-0.01em',
            }}>
              從哪裡開始,<br/>
              <span style={{ color: '#0e7c7b' }}>就從哪裡聊。</span>
            </h1>
            <p style={{ fontSize: 17, color: '#435754', lineHeight: 1.65 }}>
              選擇您想了解的主題,所有文章由院內醫師審訂,
              並依照「認識、預防、日常、就醫」四個階段重新整理。
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#fff', borderRadius: 20, padding: 24,
              boxShadow: '0 20px 40px -20px rgba(15,42,66,0.18)',
              border: '1px solid #eaf2ef',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: '#4a9e94', fontWeight: 600, letterSpacing: '0.12em' }}>
                  本週最多人問
                </div>
                <span style={{ fontSize: 12, color: '#8aa3a0' }}>更新於 04/16</span>
              </div>
              {[
                ['1', '量血壓沒固定時間,數值會差很多嗎?', '48 次提問'],
                ['2', '打流感疫苗需要空腹嗎?', '36 次提問'],
                ['3', '孩子連續發燒第三天,要換醫院嗎?', '29 次提問'],
              ].map(([n, q, v]) => (
                <a key={n} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('article');}}
                  style={{
                  display: 'flex', gap: 14, padding: '12px 0',
                  borderTop: n === '1' ? 'none' : '1px solid #f0f5f3',
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, background: '#f5faf8',
                    color: '#0e7c7b', fontWeight: 700, display: 'grid', placeItems: 'center', fontSize: 13,
                    flexShrink: 0,
                  }}>{n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: '#1a3942', fontWeight: 500, lineHeight: 1.5 }}>{q}</div>
                    <div style={{ fontSize: 12, color: '#8aa3a0', marginTop: 2 }}>{v}</div>
                  </div>
                  <Icon.ArrowUpRight style={{ width: 16, height: 16, color: '#8aa3a0' }}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Category grid */}
        <div className="r-hero-search-cat-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12,
        }}>
          {CATEGORIES.map(c => {
            const I = Illo[c.icon];
            return (
              <a key={c.id} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list');}}
                 className="cat-tile"
                 style={{
                  background: '#fff', borderRadius: 14, padding: '20px 18px',
                  border: '1px solid #eaf2ef', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 14,
                  transition: 'transform .15s, box-shadow .15s',
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${c.tone}12`, display: 'grid', placeItems: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{ width: 32, height: 32 }}><I tone={c.tone}/></div>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#1a3942' }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: '#6d8481', marginTop: 2 }}>{c.count} 篇文章</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroBig, HeroSearch, HeroCategories });
