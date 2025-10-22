import React, { useState, useMemo, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * TaskManager component:
 * - Handles CRUD operations for tasks
 * - Supports filtering: all, active, completed
 * - Persists tasks using useLocalStorage
 * - Styled with Tailwind and supports dark mode
 */
export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    return { total, completed };
  }, [tasks]);

  const addTask = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask = { id: Date.now(), title: trimmed, completed: false };
    setTasks(prev => [newTask, ...prev]);
    setTitle('');
  };

  const toggleCompleted = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  useEffect(() => {
    if (tasks.length === 0) {
      setTasks([
        { id: Date.now() - 3000, title: 'Welcome to TaskManager', completed: false },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        {/* Input row */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="New task title"
            className="flex-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={addTask} className="w-full sm:w-auto">Add</Button>
        </div>

        {/* Filters and counts */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'active' ? 'primary' : 'secondary'}
              onClick={() => setFilter('active')}
            >
              Active
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'secondary'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {counts.completed} / {counts.total} completed
          </div>
        </div>

        {/* List of tasks */}
        <ul className="space-y-2">
          {filtered.map(t => (
            <li
              key={t.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-2 p-2 border rounded-md bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleCompleted(t.id)}
                  className="w-4 h-4"
                />
                <span className={`${t.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-100'}`}>
                  {t.title}
                </span>
              </div>
              <div>
                <Button variant="danger" onClick={() => deleteTask(t.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
