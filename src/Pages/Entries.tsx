import EntryCard from '../components/EntryCard.tsx'
import type { Entry } from '../data/entries'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import NewEntryForm from '../components/NewEntryForm.tsx'

type Props = {
  entries: Entry[]                                                                      // All diary entries to display
  onAddEntry: (title: string, content: string, mood: import('../data/entries').Mood, tags: string[]) => void  // Callback for adding new entries
}

/**
 * Entries page component
 * Displays all diary entries and provides form to create new entries
 * Shows total entry count and displays message when no entries exist
 */
export default function EntriesPage({ entries, onAddEntry }: Props) {
  return (
    <>
      {/* Navigation header */}
      <Header />
      <main>
        {/* Title showing total number of entries */}
        <div className="entries-header">
          <span className="entries-count">All Entries ({entries.length})</span>
        </div>

        {/* Form for creating new entries */}
        <div className="new-entry-card">
          <h3>New Entry</h3>
          <NewEntryForm onAddEntry={onAddEntry} />
        </div>

        {/* Show message if no entries exist */}
        {entries.length === 0 && <p>No entries yet. Add one!</p>}

        {/* Display all entries as cards */}
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}