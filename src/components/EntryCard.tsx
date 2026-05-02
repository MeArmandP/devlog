import type { Entry, Mood } from '../data/entries'

// Mythology-themed mood icons: each mood maps to a deity + emoji
const moodConfig: Record<Mood, { emoji: string; deity: string }> = {
  happy:       { emoji: '☀️', deity: 'Apollo' },
  curious:     { emoji: '📜', deity: 'Thoth' },
  frustrated:  { emoji: '⚡', deity: 'Zeus' },
  neutral:     { emoji: '🌙', deity: 'Selene' },
}

function EntryCard({ entry }: { entry: Entry }) {
  const { emoji, deity } = moodConfig[entry.mood]

  return (
    <article className={`entry-card mood-${entry.mood}`}>
      <h3>{entry.title}</h3>

      <p>
        <time dateTime={entry.createdAt}>
          {new Date(entry.createdAt).toLocaleDateString()}
        </time>
        <span className={`mood-badge mood-${entry.mood}`}>
          {emoji} {deity}
        </span>
      </p>

      <p>{entry.summary}</p>

      {entry.tags.length > 0 && (
        <p>
          {entry.tags.map((tag) => (
            <span key={tag} className="tag-pill">#{tag}</span>
          ))}
        </p>
      )}
    </article>
  )
}

export default EntryCard