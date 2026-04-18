// Article list and single-article views

function ListPage({ onNavigate }) {
  const [cat, setCat] = React.useState('全部');
  const [sort, setSort] = React.useState('最新');
  const allArticles = [...FEATURED, ...LATEST, ...LATEST.map(a => ({...a, id: a.id+'b', title: a.title})), ...LATEST.map(a=>({...a,id: a.id+'c'}))];
  const filtered = cat === '全部' ? allArticles : allArticles.filter(a => (a.tag || a.category) === cat);
  return (
    <div style={{ background: '#f5faf8', minHeight: '100vh' }}>
      {/* Page header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eaf2ef' }}>
        <div className="container" style={{ padding: '36px 24px' }}>
          <div style={{ fontSize: 13, color: '#6d8481', marginBottom: 10 }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('home');}} style={{ color: '#6d8481', textDecoration: 'none' }}>首頁</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#1a3942' }}>衛教專區</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#1a3942',
            margin: 0, letterSpacing: '-0.01em',
          }}>衛教專區</h1>
          <p style={{ color: '#56706c', fontSize: 16, marginTop: 10, maxWidth: 560 }}>
            共 {allArticles.length} 篇文章 · 全部由院內醫師審訂,每月更新。
          </p>
        </div>
      </div>

      <div className="container" style={{
        padding: '40px 24px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40, alignItems: 'flex-start',
      }}>
        {/* Sidebar filters */}
        <aside style={{
          background: '#fff', borderRadius: 14, padding: 22, position: 'sticky', top: 120,
          border: '1px solid #eaf2ef',
        }}>
          <div style={{ fontSize: 11, color: '#8aa3a0', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
            分類
          </div>
          {['全部', ...CATEGORIES.map(c=>c.name)].map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              width: '100%', padding: '9px 12px', border: 0,
              background: cat === c ? '#e6f2ef' : 'transparent',
              color: cat === c ? '#0e7c7b' : '#435754',
              fontWeight: cat === c ? 600 : 500, borderRadius: 8,
              cursor: 'pointer', fontSize: 14, textAlign: 'left', marginBottom: 2,
            }}>
              <span>{c}</span>
              <span style={{ fontSize: 11, opacity: 0.6 }}>
                {c === '全部' ? allArticles.length : (CATEGORIES.find(x=>x.name===c)?.count || 0)}
              </span>
            </button>
          ))}
          <div style={{ height: 1, background: '#eaf2ef', margin: '16px -22px' }}/>
          <div style={{ fontSize: 11, color: '#8aa3a0', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
            排序
          </div>
          {['最新', '最熱門', '醫師精選'].map(s => (
            <label key={s} style={{
              display: 'flex', gap: 8, padding: '6px 0', cursor: 'pointer',
              fontSize: 14, color: '#435754',
            }}>
              <input type="radio" name="s" checked={sort === s} onChange={() => setSort(s)}/>
              {s}
            </label>
          ))}
        </aside>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {filtered.map((a, i) => {
            const catData = CATEGORIES.find(c => c.name === (a.tag || a.category)) || CATEGORIES[0];
            const I = Illo[catData.icon];
            return (
              <a key={i+a.id} href="#" onClick={(e)=>{e.preventDefault(); onNavigate('article');}}
                style={{
                  background: '#fff', borderRadius: 16, padding: 22, textDecoration: 'none',
                  color: 'inherit', border: '1px solid #eaf2ef', display: 'flex', gap: 16,
                }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 12, background: `${catData.tone}12`,
                  display: 'grid', placeItems: 'center', flexShrink: 0,
                }}>
                  <div style={{ width: 48, height: 48 }}><I tone={catData.tone}/></div>
                </div>
                <div>
                  <span style={{
                    fontSize: 11, color: catData.tone, background: `${catData.tone}12`,
                    padding: '2px 8px', borderRadius: 4, fontWeight: 600,
                  }}>{a.tag || a.category}</span>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#1a3942', marginTop: 8, lineHeight: 1.4 }}>
                    {a.title}
                  </div>
                  <div style={{ fontSize: 12, color: '#8aa3a0', marginTop: 8 }}>
                    {a.date || '4 月'} · {a.read || 5} 分鐘閱讀
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── Single article ─────────────────────────
function ArticlePage({ onNavigate }) {
  return (
    <article style={{ background: '#fff' }}>
      {/* Article header */}
      <div style={{ background: '#f5faf8', borderBottom: '1px solid #eaf2ef' }}>
        <div className="container" style={{ padding: '48px 24px', maxWidth: 780 }}>
          <div style={{ fontSize: 13, color: '#6d8481', marginBottom: 14 }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('home');}} style={{ color: '#6d8481', textDecoration: 'none' }}>首頁</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('list');}} style={{ color: '#6d8481', textDecoration: 'none' }}>衛教專區</a>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#1a3942' }}>慢性病照護</span>
          </div>
          <span style={{
            fontSize: 12, color: '#0e7c7b', background: '#e6f2ef',
            padding: '4px 12px', borderRadius: 4, fontWeight: 600,
          }}>慢性病照護</span>
          <h1 style={{
            fontSize: 'clamp(30px, 3.4vw, 42px)', fontWeight: 700, color: '#1a3942',
            margin: '16px 0 20px', letterSpacing: '-0.01em', lineHeight: 1.25,
          }}>在家量血壓的 722 原則:什麼時候量、怎麼量才準?</h1>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: '#56706c', fontSize: 14 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 99,
                background: 'linear-gradient(160deg, #1c3d5a, #0f2a42)', color: '#fff',
                display: 'grid', placeItems: 'center', fontWeight: 600,
              }}>林</div>
              <div>
                <div style={{ color: '#1a3942', fontWeight: 600 }}>林家綺 醫師</div>
                <div style={{ fontSize: 12, color: '#8aa3a0' }}>副院長 · 內科專科</div>
              </div>
            </div>
            <span style={{ color: '#c9ddda' }}>·</span>
            <span>2026 年 4 月 8 日</span>
            <span style={{ color: '#c9ddda' }}>·</span>
            <span>4 分鐘閱讀</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="container" style={{ padding: '56px 24px', maxWidth: 780, fontSize: 17, lineHeight: 1.85, color: '#2c3e3b' }}>
        <p style={{ fontSize: 19, color: '#1a3942', fontWeight: 500, borderLeft: '3px solid #f2c94c', paddingLeft: 18 }}>
          如果您被診斷為高血壓,醫師通常會建議您「自己在家量」。
          但什麼時候量?要量幾次?許多人回診時帶來的數字,其實沒辦法真的反映身體狀況。
        </p>

        <h2 style={h2Style}>為什麼「在家量」比「在診間量」更重要?</h2>
        <p>
          診間量血壓容易受到緊張、趕路、前一杯咖啡影響,出現短暫偏高的「白袍高血壓」。
          醫學研究指出,居家血壓比診間單次量測更能預測長期心血管風險。
        </p>

        <h2 style={h2Style}>「722 原則」是什麼?</h2>
        <p>
          722 原則是台灣高血壓學會推廣的居家量測標準:
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
          margin: '24px 0 32px',
        }}>
          {[
            ['7', '連續 7 天', '新診斷或治療調整期,每天都量'],
            ['2', '每日 2 次', '早上起床後一小時內、睡前各一次'],
            ['2', '每次 2 回', '間隔 1 分鐘,取平均值'],
          ].map(([n, t, d]) => (
            <div key={t} style={{
              background: '#f5faf8', borderRadius: 14, padding: '20px 18px',
              border: '1px solid #eaf2ef',
            }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: '#0e7c7b', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1a3942', marginTop: 10 }}>{t}</div>
              <div style={{ fontSize: 13, color: '#56706c', marginTop: 4, lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>量的時候還要注意什麼?</h2>
        <ul style={{ paddingLeft: 20, color: '#2c3e3b' }}>
          <li style={{ marginBottom: 10 }}>坐下休息 5 分鐘後再量,雙腳平放地面,背有靠。</li>
          <li style={{ marginBottom: 10 }}>手臂與心臟同高,袖帶貼合但不壓太緊。</li>
          <li style={{ marginBottom: 10 }}>量測當下不要說話、不要滑手機。</li>
          <li style={{ marginBottom: 10 }}>記錄「收縮壓 / 舒張壓 / 心跳」三個數字。</li>
        </ul>

        <div style={{
          background: 'linear-gradient(135deg, #7fc0b3, #5ea99b)', color: '#fff',
          borderRadius: 16, padding: 28, margin: '40px 0',
        }}>
          <div style={{ fontSize: 12, color: '#f2c94c', fontWeight: 600, letterSpacing: '0.12em' }}>
            醫師提醒
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, marginTop: 8, lineHeight: 1.6 }}>
            若連續數日居家收縮壓 ≥ 135 或舒張壓 ≥ 85,就建議回診與醫師討論。
            不必自行加減藥物。
          </div>
        </div>

        <h2 style={h2Style}>紅、黃、綠燈,哪個範圍?</h2>
        <p>
          居家血壓的判讀比診間略寬:
        </p>
        <div style={{ margin: '20px 0 32px', border: '1px solid #eaf2ef', borderRadius: 12, overflow: 'hidden' }}>
          {[
            ['●', '綠燈', '< 135 / 85',    '維持目前生活習慣',          '#e7f5ef', '#1a7a4a', 'green'],
            ['■', '黃燈', '135–149 / 85–94','飲食運動先調整,兩週後追蹤','#fdf4d9', '#a07a14', 'amber'],
            ['▲', '紅燈', '≥ 150 / 95',    '安排回診與醫師討論',        '#fde6e0', '#c44a2e', 'red'],
          ].map(([shape, n, r, a, bg, fg, tone], i) => (
            <div key={n} style={{
              display: 'grid', gridTemplateColumns: '44px 110px 160px 1fr',
              padding: '14px 18px', borderTop: i === 0 ? 0 : '1px solid #eaf2ef',
              alignItems: 'center', fontSize: 14, gap: 12,
            }}>
              <span className="tl-shape"
                    data-cvd-text={tone === 'red' ? 'red' : tone === 'green' ? 'green' : undefined}
                    style={{ color: fg }}>{shape}</span>
              <span
                data-cvd-tone={tone === 'red' ? 'red' : tone === 'green' ? 'green' : undefined}
                data-cvd-bg={tone === 'red' ? 'red' : tone === 'green' ? 'green' : undefined}
                style={{ color: fg, background: bg, padding: '4px 12px', borderRadius: 4, width: 'fit-content', fontWeight: 600 }}>{n}</span>
              <span style={{ color: '#1a3942', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{r}</span>
              <span style={{ color: '#56706c' }}>{a}</span>
            </div>
          ))}
        </div>

        {/* End of article */}
        <div style={{
          marginTop: 48, paddingTop: 32, borderTop: '1px solid #eaf2ef',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={articleBtn}><Icon.Heart style={{ width: 16, height: 16 }}/> 收藏</button>
            <button style={articleBtn}><Icon.Bookmark style={{ width: 16, height: 16 }}/> 列印</button>
          </div>
          <div style={{ fontSize: 13, color: '#8aa3a0' }}>本文經 陳志明院長、林家綺副院長 審閱</div>
        </div>
      </div>
    </article>
  );
}

const h2Style = {
  fontSize: 24, fontWeight: 700, color: '#1a3942',
  marginTop: 40, marginBottom: 14, letterSpacing: '-0.005em',
};
const articleBtn = {
  padding: '10px 18px', background: '#fff', color: '#1a3942', fontSize: 13,
  border: '1px solid #d0e5e1', borderRadius: 999, cursor: 'pointer',
  display: 'inline-flex', gap: 6, alignItems: 'center', fontWeight: 500,
};

Object.assign(window, { ListPage, ArticlePage });
