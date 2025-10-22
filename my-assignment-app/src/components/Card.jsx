import React from 'react';

/**
 * Card component:
 * - Wraps content in a boxed layout
 * - Supports dark mode and shadows
 * - Accepts additional Tailwind classes via `className`
 */
export default function Card({ children, className = '' }) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        shadow-md hover:shadow-lg 
        rounded-lg 
        p-4 sm:p-6 
        transition-shadow 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
