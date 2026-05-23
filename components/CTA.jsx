export default function CTA() {
  return (
    <section id="contact" style={{
      padding: '80px 40px',
      textAlign: 'center',
      borderTop: '0.5px solid var(--border-green)',
    }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'var(--green)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 16,
        display: 'block',
      }}>ready to automate?</div>

      <h2 style={{
        fontSize: 40,
        fontWeight: 800,
        marginBottom: 16,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
      }}>Let's build your bot</h2>

      <p style={{
        fontSize: 16,
        color: 'var(--text-muted)',
        marginBottom: 36,
      }}>
        Tell me what's eating your time. I'll build something that handles it.
      </p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://wa.me/2348071238316" target="_blank" rel="noopener noreferrer">
          <button style={{
            background: 'var(--green)',
            color: 'var(--bg)',
            border: 'none',
            padding: '14px 28px',
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 4,
          }}>Chat on WhatsApp</button>
        </a>
        <a href="#products">
          <button style={{
            background: 'transparent',
            color: 'var(--text)',
            border: '0.5px solid var(--border)',
            padding: '14px 28px',
            fontFamily: 'Syne, sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 4,
          }}>See live demos</button>
        </a>
      </div>
    </section>
  );
}