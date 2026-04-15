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
        <h2>All Entries ({entries.length})</h2>

        {/* Form for creating new entries */}
        <NewEntryForm onAddEntry={onAddEntry} />

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