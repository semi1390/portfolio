export default function Pricing() {
  const plans = [
    {
      name: 'Starter Bot',
      price: '$400',
      period: 'one-time setup',
      featured: false,
      features: [
        'Single bot (Telegram or WhatsApp)',
        'Up to 3 conversation flows',
        'Airtable integration',
        'Owner notifications',
        '1 month support',
      ],
      cta: 'Get started',
    },
    {
      name: 'Growth Bot',
      price: '$800',
      period: 'one-time setup',
      featured: true,
      features: [
        'Telegram + WhatsApp',
        'Full AI workflow automation',
        'Airtable dashboard',
        'Lead scoring + proposals',
        '3 months support',
      ],
      cta: 'Most popular',
    },
    {
      name: 'Maintenance',
      price: '$100',
      period: 'per month',
      featured: false,
      features: [
        '24/7 uptime monitoring',
        'API cost coverage',
        'Bug fixes included',
        'Monthly updates',
        'Priority support',
      ],
      cta: 'Add to any plan',
    },
  ];

  return (
    <section id="pricing" style={{ padding: '80px 40px' }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'var(--green)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>investment</div>

      <h2 style={{
        fontSize: 36,
        fontWeight: 800,
        marginBottom: 48,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
      }}>Pricing</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
      }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: plan.featured ? 'rgba(0,255,163,0.03)' : 'var(--surface)',
            border: plan.featured
              ? '0.5px solid var(--border-green)'
              : '0.5px solid var(--border)',
            borderRadius: 12,
            padding: '32px 24px',
          }}>
            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 32,
              fontWeight: 700,
              color: 'var(--green)',
              marginBottom: 4,
            }}>{plan.price}</div>

            <div style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              marginBottom: 20,
              letterSpacing: '0.05em',
            }}>{plan.period}</div>

            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 16,
              color: 'var(--text)',
            }}>{plan.name}</h3>

            <ul style={{ listStyle: 'none', marginBottom: 24 }}>
              {plan.features.map(f => (
                <li key={f} style={{
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  padding: '6px 0',
                  borderBottom: '0.5px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <span style={{ color: 'var(--green)', fontSize: 12 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>

          <a 
  href="https://wa.me/2348071238316?text=Hi%20Semilore%2C%20I%27m%20interested%20in%20the%20AI%20bot%20service" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ display: 'block' }}
>
  <button style={{
    width: '100%',
    padding: '12px',
    background: plan.featured ? 'var(--green)' : 'transparent',
    color: plan.featured ? 'var(--bg)' : 'var(--text)',
    border: plan.featured ? 'none' : '0.5px solid var(--border)',
    borderRadius: 4,
    fontFamily: 'Syne, sans-serif',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  }}>{plan.cta}</button>
</a>
          </div>
        ))}
      </div>
    </section>
  );
}