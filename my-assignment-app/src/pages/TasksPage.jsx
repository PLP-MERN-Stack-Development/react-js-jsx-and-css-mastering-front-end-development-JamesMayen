import React from 'react';
import TaskManager from '../widgets/TaskManager';

/**
 * TasksPage component:
 * - Displays a header and TaskManager widget
 * - Styled with Tailwind for spacing, typography, and responsiveness
 */
export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Task Manager
      </h1>

      {/* Task manager component */}
      <div className="w-full">
        <TaskManager />
      </div>
    </div>
  );
}
