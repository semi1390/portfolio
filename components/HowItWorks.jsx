export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'We talk',
      desc: 'You tell me your business, your customers, and what\'s eating your time.',
    },
    {
      num: '02',
      title: 'I build',
      desc: 'I build a custom AI bot tailored to your business. Delivered in 3-5 days.',
    },
    {
      num: '03',
      title: 'You test',
      desc: 'You test with real scenarios. We refine until it\'s exactly right.',
    },
    {
      num: '04',
      title: 'Goes live',
      desc: 'Bot deploys to WhatsApp or Telegram. Runs 24/7. You get notified for anything important.',
    },
  ];

  return (
    <section id="how-it-works" style={{
      background: '#0d1117',
      padding: '80px 40px',
    }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: '#00ffa3',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>the process</div>

      <h2 style={{
        fontSize: 36,
        fontWeight: 800,
        marginBottom: 48,
        letterSpacing: '-0.02em',
      }}>How it works</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            padding: '32px 24px',
            borderRight: i < steps.length - 1
              ? '0.5px solid rgba(232,234,240,0.06)'
              : 'none',
          }}>
            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 48,
              fontWeight: 700,
              color: 'rgba(0,255,163,0.08)',
              lineHeight: 1,
              marginBottom: 16,
            }}>{step.num}</div>
            <h4 style={{
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 8,
              color: '#e8eaf0',
            }}>{step.title}</h4>
            <p style={{
              fontSize: 13,
              color: 'rgba(232,234,240,0.4)',
              lineHeight: 1.6,
            }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}