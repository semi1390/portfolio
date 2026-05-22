export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 40px 100px',
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: '#00ffa3',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ display: 'block', width: 24, height: 1, background: '#00ffa3' }}></span>
        available for new projects
      </div>

      <h1 style={{
        fontSize: 64,
        fontWeight: 800,
        lineHeight: 1.05,
        maxWidth: 600,
        marginBottom: 24,
        letterSpacing: '-0.02em',
      }}>
        AI-powered bots for businesses that want to{' '}
        <span style={{ color: '#00ffa3' }}>grow</span>
      </h1>

      <p style={{
        fontSize: 16,
        color: 'rgba(232,234,240,0.55)',
        maxWidth: 440,
        lineHeight: 1.7,
        marginBottom: 40,
      }}>
        I build custom AI automations — lead qualifiers, appointment bots, support agents — that work 24/7 so you don't have to.
      </p>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#products">
          <button style={{
            background: '#00ffa3',
            color: '#080b10',
            border: 'none',
            padding: '14px 28px',
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 4,
          }}>
            See my work
          </button>
        </a>
        <a href="#contact">
          <button style={{
            background: 'transparent',
            color: '#e8eaf0',
            border: '0.5px solid rgba(232,234,240,0.25)',
            padding: '14px 28px',
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 4,
          }}>
            Book a call
          </button>
        </a>
      </div>

      <div style={{
        position: 'absolute',
        right: 40,
        top: 60,
        width: 280,
        opacity: 0.8,
      }}>
        <div style={{
          background: '#0d1117',
          border: '0.5px solid rgba(0,255,163,0.2)',
          borderRadius: 8,
          padding: 20,
          fontFamily: 'Space Mono, monospace',
          fontSize: 12,
        }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}></div>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41' }}></div>
          </div>
          {[
            { c: 'rgba(232,234,240,0.3)', t: '$ ' },
            { c: '#00ffa3', t: 'node ' },
            { c: '#e8eaf0', t: 'lead-qualifier.js' },
          ].map((s, i) => (
            <span key={i} style={{ color: s.c }}>{s.t}</span>
          ))}
          <br />
          {[
            ['rgba(232,234,240,0.3)', 'Starting workflow...'],
            ['#00ffa3', '✓ '],
            ['#e8eaf0', 'Lead scored 9/10'],
          ].map((line, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <span style={{ color: line[0] }}>{line[1]}</span>
              {line[2] && <span style={{ color: line[2] }}>{line[2]}</span>}
            </div>
          ))}
          <div style={{ marginBottom: 6 }}><span style={{ color: '#00ffa3' }}>✓ </span><span style={{ color: '#e8eaf0' }}>Research complete</span></div>
          <div style={{ marginBottom: 6 }}><span style={{ color: '#79b8ff' }}>→ </span><span style={{ color: '#e8eaf0' }}>Proposal generated</span></div>
          <div style={{ marginBottom: 6 }}><span style={{ color: '#00ffa3' }}>✓ </span><span style={{ color: '#e8eaf0' }}>Saved to Airtable</span></div>
          <div style={{ color: 'rgba(232,234,240,0.3)' }}>Done in 4.2s <span style={{
            display: 'inline-block',
            width: 8,
            height: 14,
            background: '#00ffa3',
            verticalAlign: 'middle',
            animation: 'blink 1s infinite',
          }}></span></div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 40,
        marginTop: 80,
        paddingTop: 40,
        borderTop: '0.5px solid rgba(0,255,163,0.1)',
      }}>
        {[
          { num: '10+', label: 'Workflows built' },
          { num: '50+', label: 'Hours saved per client' },
          { num: '24/7', label: 'Always running' },
          { num: '<60s', label: 'Lead to proposal' },
        ].map(stat => (
          <div key={stat.label}>
            <span style={{
              display: 'block',
              fontSize: 32,
              fontWeight: 800,
              color: '#00ffa3',
              fontFamily: 'Space Mono, monospace',
            }}>{stat.num}</span>
            <span style={{
              fontSize: 12,
              color: 'rgba(232,234,240,0.4)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}