import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

/**
 * Home component:
 * - Landing page with welcome message and quick links
 * - Uses responsive grid layout and Tailwind styling
 */
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Welcome Card */}
      <Card className="hover:scale-105 transform transition-transform duration-200">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-blue-700 dark:text-gray-100">
          Welcome!
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          This sample app demonstrates React component architecture, hooks, state management, and API integration.
        </p>
      </Card>

      {/* Quick Links Card */}
      <Card className="hover:scale-105 transform transition-transform duration-200">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Quick Links
        </h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/tasks"
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              Tasks Manager
            </Link>
          </li>
          <li>
            <Link
              to="/api"
              className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              API Demonstration
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}
