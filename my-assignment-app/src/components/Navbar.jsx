import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

/**
 * Navbar component:
 * - Provides navigation links and theme toggle
 * - Fully responsive: hides links on small screens and shows a mobile menu
 * - Dark mode support
 */
export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and main links */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            My Task Manager App
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex gap-4">
            <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tasks
            </Link>
            <Link to="/api" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              API Demo
            </Link>
          </div>
        </div>

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <Button variant="secondary" onClick={toggleTheme} aria-label="Toggle theme">
  {theme === 'dark' ? (
    // Light mode icon (sun)
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg> 
  ) : (
    // Dark mode icon (moon)
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  )}
</Button>


          {/* Mobile menu toggle */}
          <button
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link to="/tasks" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Tasks
          </Link>
          <Link to="/api" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            API Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
