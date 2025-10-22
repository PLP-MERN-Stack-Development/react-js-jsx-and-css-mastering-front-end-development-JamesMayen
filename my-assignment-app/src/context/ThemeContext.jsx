import React, { createContext, useState, useEffect } from 'react';

/**
 * ThemeContext provides current theme ('light' or 'dark') 
 * and a setter function to switch themes.
 */
export const ThemeContext = createContext();

/**
 * ThemeProvider wraps the app and manages theme state
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Try to load saved theme from localStorage (if in browser)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;

      // Fallback: system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    return 'light';
  });

  // Side-effect: update <html> class and persist theme
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark'); // enables Tailwind dark styles
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
