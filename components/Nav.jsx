'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

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
        borderBottom: '0.5px solid var(--border-green)',
        background: 'var(--bg)',
      }}>
        <div style={{ fontSize: 14, color: 'var(--green)', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
          semilore.dev
        </div>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
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
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        fontFamily: 'Syne, sans-serif',
                      }}
                    >{link.label}</button>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>
        )}

        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <ThemeToggle />
            <button
              onClick={function() { setMenuOpen(!menuOpen); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
              aria-label="menu"
            >
              <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? 'var(--green)' : 'var(--text)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }}></span>
              <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? 'var(--green)' : 'var(--text)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </button>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{ background: 'var(--surface)', borderBottom: '0.5px solid var(--border-green)', padding: '20px', position: 'absolute', width: '100%', top: '100%', left: 0 }}>
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
                  color: 'var(--text)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '0.5px solid var(--border)',
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