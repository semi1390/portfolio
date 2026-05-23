'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <button
      onClick={toggle}
      style={{
        background: 'none',
        border: '0.5px solid var(--border-green)',
        borderRadius: 20,
        padding: '6px 12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        color: 'var(--green)',
        fontFamily: 'Space Mono, monospace',
        transition: 'all 0.2s',
      }}
      aria-label="toggle theme"
    >
      {isLight ? '◐ dark' : '◑ light'}
    </button>
  );
}