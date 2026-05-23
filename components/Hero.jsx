'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{
      position: 'relative',
      padding: isMobile ? '40px 20px 60px' : '80px 40px 100px',
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: 11,
        color: 'var(--green)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ display: 'block', width: 24, height: 1, background: 'var(--green)' }}></span>
        available for new projects
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ maxWidth: isMobile ? '100%' : '55%' }}>
          <h1 style={{
            fontSize: isMobile ? 32 : 64,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}>
            AI-powered bots for businesses that want to{' '}
            <span style={{ color: 'var(--green)' }}>grow</span>
          </h1>

          <p style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 440,
            lineHeight: 1.7,
            marginBottom: 40,
          }}>
            I build custom AI automations — lead qualifiers, appointment bots, support agents — that work 24/7 so you don't have to.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#products">
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
              }}>See my work</button>
            </a>
            <a href="#contact">
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
              }}>Book a call</button>
            </a>
          </div>
        </div>

        {!isMobile && (
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 280,
            opacity: 0.9,
          }}>
            <div style={{
              background: '#111',
              border: '0.5px solid var(--border-green)',
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
              <div style={{ marginBottom: 6 }}>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>$ </span>
                <span style={{ color: 'var(--green)' }}>node </span>
                <span style={{ color: '#fff' }}>lead-qualifier.js</span>
              </div>
              <div style={{ marginBottom: 6, color: 'rgba(255,255,255,0.3)' }}>Starting workflow...</div>
              <div style={{ marginBottom: 6 }}><span style={{ color: 'var(--green)' }}>✓ </span><span style={{ color: '#fff' }}>Lead scored 9/10</span></div>
              <div style={{ marginBottom: 6 }}><span style={{ color: 'var(--green)' }}>✓ </span><span style={{ color: '#fff' }}>Research complete</span></div>
              <div style={{ marginBottom: 6 }}><span style={{ color: '#79b8ff' }}>→ </span><span style={{ color: '#fff' }}>Proposal generated</span></div>
              <div style={{ marginBottom: 6 }}><span style={{ color: 'var(--green)' }}>✓ </span><span style={{ color: '#fff' }}>Saved to Airtable</span></div>
              <div style={{ color: 'rgba(255,255,255,0.3)' }}>Done in 4.2s <span style={{
                display: 'inline-block',
                width: 8,
                height: 14,
                background: 'var(--green)',
                verticalAlign: 'middle',
                animation: 'blink 1s infinite',
              }}></span></div>
            </div>
          </div>
        )}
      </div>

      <div style={{
        display: 'flex',
        gap: isMobile ? 16 : 40,
        marginTop: 60,
        paddingTop: 40,
        borderTop: '0.5px solid var(--border-green)',
        flexWrap: 'wrap',
      }}>
        {[
          { num: '10+', label: 'Workflows built' },
          { num: '50+', label: 'Hours saved per client' },
          { num: '24/7', label: 'Always running' },
          { num: '<60s', label: 'Lead to proposal' },
        ].map(stat => (
          <div key={stat.label} style={{ minWidth: isMobile ? '45%' : 'auto' }}>
            <span style={{
              display: 'block',
              fontSize: isMobile ? 24 : 32,
              fontWeight: 800,
              color: 'var(--green)',
              fontFamily: 'Space Mono, monospace',
            }}>{stat.num}</span>
            <span style={{
              fontSize: 11,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}