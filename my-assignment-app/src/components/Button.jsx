import React from 'react';

/**
 * Button component supports:
 * - Different variants: primary, secondary, danger
 * - Extra custom classes via `className`
 * - Additional props (onClick, type, etc.)
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  // Base classes: padding, rounded corners, font, shadow, transition
  const base = 'px-4 py-2 rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all inline-block';

  // Variant classes
  const variants = {
    primary: 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 cursor-pointer hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-600 text-white cursor-pointer hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
