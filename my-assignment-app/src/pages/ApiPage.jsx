import React from 'react';
import ApiList from '../widgets/ApiList';

/**
 * ApiPage component:
 * - Displays a header and API data list
 * - Styled with Tailwind for spacing, typography, and responsiveness
 */
export default function ApiPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        API Demo (JSONPlaceholder)
      </h1>

      {/* API list component */}
      <div className="w-full">
        <ApiList />
      </div>
    </div>
  );
}
