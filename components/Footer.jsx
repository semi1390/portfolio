'use client';

export default function Footer() {
  const links = [
    { label: 'Twitter', url: 'https://x.com/Semilore_Isaiah' },
    { label: 'WhatsApp', url: 'https://wa.me/2348071238316' },
    { label: 'Telegram', url: 'https://t.me/Semilor' },
    { label: 'GitHub', url: 'https://github.com/semi1390' },
  ];

  return (
    <footer style={{
      padding: '24px 40px',
      borderTop: '0.5px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg)',
    }}>
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'var(--text-muted)',
      }}>© 2026 semilore isaiah — lagos, nigeria</p>

      <div style={{ display: 'flex', gap: 24 }}>
        {links.map(function(link) {
          return ( <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={function(e) { e.target.style.color = 'var(--green)'; }}
              onMouseLeave={function(e) { e.target.style.color = 'var(--text-muted)'; }}
            >{link.label}</a>
          );
        })}
      </div>
    </footer>
  );
}