import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TasksPage from './pages/TasksPage'
import ApiPage from './pages/ApiPage'
import { ThemeProvider } from './context/ThemeContext'


// App component sets up ThemeProvider and routing for pages
export default function App() {
return (
// ThemeProvider exposes theme context (light/dark) to the whole app
<ThemeProvider>
{/* Layout contains Navbar and Footer and wraps pages */}
<Layout>
{/* Define routes for Home, Tasks, and API demo */}
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TasksPage />} />
<Route path="/api" element={<ApiPage />} />
</Routes>
</Layout>
</ThemeProvider>
)
}