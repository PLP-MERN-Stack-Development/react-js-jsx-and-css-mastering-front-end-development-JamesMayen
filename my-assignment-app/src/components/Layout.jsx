import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component:
 * - Wraps pages with Navbar and Footer
 * - Provides background, text color, and min-height
 * - Centers content and handles responsive padding
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
