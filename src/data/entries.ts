// Type definition for the emotional mood associated with an entry
export type Mood = 'happy' | 'curious' | 'frustrated' | 'neutral';

// Defines the structure of a single diary entry
export interface Entry {
  id: number;                    // Unique identifier (timestamp-based)
  title: string;                 // Title of the entry
  summary: string;               // Main content/body of the entry
  mood: Mood;                    // Emotional mood when the entry was written
  tags: string[];                // Array of categorization tags
  createdAt: string;             // ISO 8601 timestamp when entry was created
}

// Initial seed data containing sample entries for demonstration
const seedEntries: Entry[] = [
  {
    id: 1,
    title: 'Set up my DevLog project',
    summary: 'Scaffolded a Vite + React + TypeScript app and got everything running.',
    mood: 'happy',
    tags: ['setup', 'vite'],
    createdAt: '2025-06-01T09:00:00.000Z',
  },
  {
    id: 2,
    title: 'Built Entries Page',
    summary: 'Created a page to display all entries using reusable components.',
    mood: 'curious',
    tags: ['react', 'components'],
    createdAt: '2025-06-02T10:30:00.000Z',
  },
  {
    id: 3,
    title: 'Struggled with State',
    summary: 'Had trouble understanding useState but started getting the hang of it.',
    mood: 'frustrated',
    tags: ['react', 'state'],
    createdAt: '2025-06-03T14:15:00.000Z',
  },
  {
    id: 4,
    title: 'Refactored Components',
    summary: 'Cleaned up code and improved component structure.',
    mood: 'neutral',
    tags: ['refactor', 'cleanup'],
    createdAt: '2025-06-04T16:45:00.000Z',
  },
];

export default seedEntries;