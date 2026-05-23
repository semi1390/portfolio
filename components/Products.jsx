'use client';
import { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import Modal from './Modal';

export default function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="products" style={{ padding: '80px 40px', position: 'relative' }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'var(--green)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>what I build</div>

      <h2 style={{
        fontSize: 36,
        fontWeight: 800,
        marginBottom: 48,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
      }}>Products</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
      }}>
        {PRODUCTS.map((product, i) => (
          <div
            key={i}
            onClick={() => setSelected(product)}
            style={{
              background: 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderRadius: 12,
              padding: '28px 24px',
              cursor: 'pointer',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-green)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              background: 'rgba(0,255,163,0.08)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              fontSize: 20,
            }}>{product.icon}</div>

            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 8,
              color: 'var(--text)',
            }}>{product.title}</h3>

            <p style={{
              fontSize: 13,
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: 16,
            }}>{product.description}</p>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
              {product.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 10,
                  padding: '3px 8px',
                  borderRadius: 4,
                  background: 'rgba(0,255,163,0.06)',
                  color: 'var(--green)',
                  border: '0.5px solid var(--border-green)',
                }}>{tag}</span>
              ))}
            </div>

            <div style={{
              fontSize: 12,
              color: 'var(--green)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'Space Mono, monospace',
              opacity: 0.7,
            }}>
              ▶ {product.videoUrl ? 'watch demo' : 'view details'}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <Modal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}