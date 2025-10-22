import React, { useEffect, useState, useMemo } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * ApiList component:
 * - Fetches posts from JSONPlaceholder
 * - Supports search, pagination, and responsive grid
 * - Fully styled with Tailwind
 */
export default function ApiList() {
  // Data & UI state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [query, setQuery] = useState('');

  const totalPages = useMemo(() => Math.ceil(items.length / limit) || 1, [items, limit]);

  // Fetch all posts
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (!cancelled) setItems(data);
      })
      .catch(err => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  // Filter and paginate posts
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q ? items.filter(i => i.title.toLowerCase().includes(q) || i.body.toLowerCase().includes(q)) : items;
    const start = (page - 1) * limit;
    return base.slice(start, start + limit);
  }, [items, page, limit, query]);

  const next = () => setPage(p => Math.min(totalPages, p + 1));
  const prev = () => setPage(p => Math.max(1, p - 1));

  // Reset page when query changes
  useEffect(() => setPage(1), [query]);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        {/* Search input */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={() => setQuery('')} variant="secondary">
            Clear
          </Button>
        </div>

        {/* Loading and error states */}
        {loading && <div className="text-gray-600 dark:text-gray-300">Loading...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}

        {/* Posts list */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(post => (
              <div
                key={post.id}
                className="p-4 border rounded-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{post.body.slice(0, 120)}...</p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-4">
          <div className="text-gray-700 dark:text-gray-300">Page {page} / {totalPages}</div>
          <div className="flex gap-2">
            <Button onClick={prev} disabled={page === 1} variant="secondary">Prev</Button>
            <Button onClick={next} disabled={page === totalPages} variant="secondary">Next</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
