'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const links = [
    { label: 'Products', id: 'products' },
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }

  return (
    <div style={{ position: 'relative', zIndex: 100 }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '16px 20px' : '24px 40px',
        borderBottom: '0.5px solid rgba(0,255,163,0.15)',
        background: '#080b10',
      }}>
        <div style={{ fontSize: 14, color: '#00ffa3', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
          semilore.dev
        </div>

        {!isMobile && (
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
            {links.map(function(link) {
              return (
                <li key={link.id}>
                  <button
                    onClick={function() { scrollTo(link.id); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: 13,
                      color: 'rgba(232,234,240,0.5)',
                      cursor: 'pointer',
                      fontFamily: 'Syne, sans-serif',
                    }}
                  >{link.label}</button>
                </li>
              );
            })}
          </ul>
        )}

        {isMobile && (
          <button
            onClick={function() { setMenuOpen(!menuOpen); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            aria-label="menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? '#00ffa3' : '#e8eaf0', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ display: 'block', width: 22, height: 2, background: '#e8eaf0', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }}></span>
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? '#00ffa3' : '#e8eaf0', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{ background: '#0d1117', borderBottom: '0.5px solid rgba(0,255,163,0.15)', padding: '20px', position: 'absolute', width: '100%', top: '100%', left: 0 }}>
          {links.map(function(link) {
            return (
              <button
                key={link.id}
                onClick={function() { scrollTo(link.id); }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 0',
                  fontSize: 16,
                  color: 'rgba(232,234,240,0.7)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '0.5px solid rgba(232,234,240,0.06)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'Syne, sans-serif',
                }}
              >{link.label}</button>
            );
          })}
        </div>
      )}
    </div>
  );
}