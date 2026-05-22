'use client';


export default function Footer() {
  return (
    <footer style={{
      padding: '24px 40px',
      borderTop: '0.5px solid rgba(232,234,240,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'rgba(232,234,240,0.25)',
      }}>© 2026 semilore isaiah — lagos, nigeria</p>

      <div style={{ display: 'flex', gap: 24 }}>
       {[
  { label: 'Twitter', url: 'https://x.com/Semilore_Isaiah' },
  { label: 'WhatsApp', url: 'https://wa.me/2348071238316' },
  { label: 'Telegram', url: 'https://t.me/Semilor' },
  { label: 'GitHub', url: 'https://github.com/semi1390' },
].map(link => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 12,
            color: 'rgba(232,234,240,0.3)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.target.style.color = '#00ffa3'}
          onMouseLeave={e => e.target.style.color = 'rgba(232,234,240,0.3)'}
          >{link.label}</a>
        ))}
      </div>
    </footer>
  );
}