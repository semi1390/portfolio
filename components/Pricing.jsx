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
      price: '$150',
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
        color: '#00ffa3',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>investment</div>

      <h2 style={{
        fontSize: 36,
        fontWeight: 800,
        marginBottom: 48,
        letterSpacing: '-0.02em',
      }}>Pricing</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
      }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: plan.featured ? 'rgba(0,255,163,0.03)' : '#0d1117',
            border: plan.featured
              ? '0.5px solid rgba(0,255,163,0.3)'
              : '0.5px solid rgba(232,234,240,0.08)',
            borderRadius: 12,
            padding: '32px 24px',
          }}>
            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 32,
              fontWeight: 700,
              color: '#00ffa3',
              marginBottom: 4,
            }}>{plan.price}</div>

            <div style={{
              fontSize: 12,
              color: 'rgba(232,234,240,0.35)',
              marginBottom: 20,
              letterSpacing: '0.05em',
            }}>{plan.period}</div>

            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 16,
            }}>{plan.name}</h3>

            <ul style={{ listStyle: 'none', marginBottom: 24 }}>
              {plan.features.map(f => (
                <li key={f} style={{
                  fontSize: 13,
                  color: 'rgba(232,234,240,0.55)',
                  padding: '6px 0',
                  borderBottom: '0.5px solid rgba(232,234,240,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <span style={{ color: '#00ffa3', fontSize: 12 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>

            <button style={{
              width: '100%',
              padding: '12px',
              background: plan.featured ? '#00ffa3' : 'transparent',
              color: plan.featured ? '#080b10' : '#e8eaf0',
              border: plan.featured ? 'none' : '0.5px solid rgba(232,234,240,0.25)',
              borderRadius: 4,
              fontFamily: 'Syne, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}