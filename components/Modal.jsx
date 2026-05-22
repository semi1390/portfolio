'use client';

export default function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0d1117',
          border: '0.5px solid rgba(0,255,163,0.2)',
          borderRadius: 16,
          maxWidth: 600,
          width: '100%',
          padding: 32,
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            color: 'rgba(232,234,240,0.4)',
            cursor: 'pointer',
            fontSize: 20,
          }}
        >✕</button>

        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: 11,
          color: '#00ffa3',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>{product.category}</div>

        <h2 style={{
          fontSize: 24,
          fontWeight: 800,
          marginBottom: 12,
          color: '#e8eaf0',
        }}>{product.title}</h2>

        <p style={{
          fontSize: 14,
          color: 'rgba(232,234,240,0.55)',
          lineHeight: 1.7,
          marginBottom: 24,
        }}>{product.fullDesc}</p>

        <div style={{
          background: '#080b10',
          border: '0.5px solid rgba(0,255,163,0.1)',
          borderRadius: 8,
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          overflow: 'hidden',
        }}>
          {product.videoUrl ? (
            <iframe
              src={product.videoUrl}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen
            />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>▶</div>
              <p style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: 12,
                color: 'rgba(0,255,163,0.4)',
              }}>demo video coming soon</p>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
          {product.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 10,
              padding: '3px 8px',
              borderRadius: 4,
              background: 'rgba(0,255,163,0.06)',
              color: '#00ffa3',
              border: '0.5px solid rgba(0,255,163,0.15)',
            }}>{tag}</span>
          ))}
        </div>

        <ul style={{ listStyle: 'none', marginBottom: 24 }}>
          {product.features.map(f => (
            <li key={f} style={{
              fontSize: 13,
              color: 'rgba(232,234,240,0.6)',
              padding: '8px 0',
              borderBottom: '0.5px solid rgba(232,234,240,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{ color: '#00ffa3', fontSize: 12 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 12 }}>
          <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
            <button style={{
              width: '100%',
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
              Try live demo →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}