import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import EntriesPage from './Pages/Entries'
import type { Entry, Mood } from './data/entries'
import './App.css'

/**
 * Root application component that manages global state and routing
 * Handles entry creation and navigation between pages (Home, Entries, About)
 */
export default function App() {
  const [entries, setEntries] = useState<Entry[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/entries')
      .then((r) => r.json())
      .then((data: Entry[]) => setEntries(data))
      .catch(console.error)
  }, [])

  async function handleAddEntry(
    title: string,
    content: string,
    mood: Mood,
    tags: string[]
  ) {
    const res = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, summary: content, mood, tags }),
    })
    if (res.ok) {
      const saved: Entry = await res.json()
      setEntries((prev) => [saved, ...prev])
    }
    navigate('/entries')
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/entries"
          element={<EntriesPage entries={entries} onAddEntry={handleAddEntry} />}
        />
      </Routes>
    </div>
  )
}