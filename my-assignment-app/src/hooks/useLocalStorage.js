import { useState, useEffect } from 'react';

/**
 * Custom hook to persist state in localStorage.
 * Mirrors useState API: [state, setState]
 *
 * @param {string} key - localStorage key
 * @param {*} initialValue - default value if no saved data
 */
export default function useLocalStorage(key, initialValue) {
  // Lazy initialize state from localStorage if present
  const [state, setState] = useState(() => {
    try {
      if (typeof window === 'undefined') return initialValue; // SSR safety
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch (e) {
      console.error('useLocalStorage parse error', e);
      return initialValue;
    }
  });

  // Write to localStorage whenever state changes
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return; // SSR safety
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error('useLocalStorage write error', e);
    }
  }, [key, state]);

  return [state, setState];
}
