import React from 'react';

/**
 * Footer component:
 * - Displays copyright and links
 * - Supports dark mode
 * - Responsive layout with proper spacing
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        
        {/* Copyright text */}
        <div className="text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} My Task Manager App. All rights reserved.
        </div>

        {/* Footer links */}
        <div className="flex gap-4">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Terms
          </a>
        </div>

      </div>
    </footer>
  );
}
