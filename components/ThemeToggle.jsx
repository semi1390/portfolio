'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
    >
      {isDark ? '◑ light' : '◐ dark'}
    </button>
  );
}