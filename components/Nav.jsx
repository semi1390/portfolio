export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 40px',
      borderBottom: '0.5px solid rgba(0,255,163,0.15)',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ fontSize: 14, color: '#00ffa3', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
        semilore.dev
      </div>
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
        {['Products', 'How it works', 'Pricing', 'Contact'].map(item => (
          <li key={item}>
            <a href="#" style={{
              fontSize: 13,
              color: 'rgba(232,234,240,0.5)',
              textDecoration: 'none',
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}