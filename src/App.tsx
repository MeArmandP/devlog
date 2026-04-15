import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import EntriesPage from './Pages/Entries'
import seedEntries from './data/entries'
import type { Entry, Mood } from './data/entries'
import './App.css'

/**
 * Root application component that manages global state and routing
 * Handles entry creation and navigation between pages (Home, Entries, About)
 */
export default function App() {
  // Manages the list of all diary entries
  const [entries, setEntries] = useState<Entry[]>(seedEntries)
  const navigate = useNavigate()

  /**
   * Creates a new entry with the provided title, content, mood, and tags
   * Adds the new entry to the beginning of the entries list
   * Navigates to the Entries page to display all entries
   */
  function handleAddEntry(
    title: string,
    content: string,
    mood: Mood,
    tags: string[]
  ) {
    const newEntry: Entry = {
      id: Date.now(),
      title,
      summary: content,
      mood,
      tags,
      createdAt: new Date().toISOString(),
    }

    setEntries((prev) => [newEntry, ...prev])
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