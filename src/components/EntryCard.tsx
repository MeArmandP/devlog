import type { Entry } from '../data/entries'

/**
 * Displays a single diary entry as a card component
 * Shows title, creation date, mood, content summary, and tags
 */
function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="entry-card">
      {/* Entry title */}
      <h3>{entry.title}</h3>

      {/* Display creation date and associated mood */}
      <p>
        <time dateTime={entry.createdAt}>
          {new Date(entry.createdAt).toLocaleDateString()}
        </time>
        {' · '}
        {entry.mood}
      </p>

      {/* Entry content summary */}
      <p>{entry.summary}</p>

      {/* Display tags if any exist, prefixed with # */}
      {entry.tags.length > 0 && (
        <p>
          {entry.tags.map((tag) => (
            <small key={tag}>{' '}#{tag}</small>
          ))}
        </p>
      )}
    </article>
  )
}

export default EntryCard