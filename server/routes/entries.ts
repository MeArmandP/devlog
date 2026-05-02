import { Router } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, '../data/entries.json')

function readEntries() {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8'))
}

function writeEntries(entries: unknown[]) {
  writeFileSync(DB_PATH, JSON.stringify(entries, null, 2), 'utf-8')
}

const router = Router()

// GET /api/entries — return all entries, newest first
router.get('/', (_req, res) => {
  try {
    const entries = readEntries()
    res.json(entries)
  } catch {
    res.status(500).json({ error: 'Could not read entries.' })
  }
})

// POST /api/entries — add a new entry
router.post('/', (req, res) => {
  const { title, summary, mood, tags } = req.body

  if (!title || !summary || !mood) {
    res.status(400).json({ error: 'title, summary, and mood are required.' })
    return
  }

  const newEntry = {
    id: Date.now(),
    title: String(title).trim(),
    summary: String(summary).trim(),
    mood: String(mood),
    tags: Array.isArray(tags) ? tags.map(String) : [],
    createdAt: new Date().toISOString(),
  }

  try {
    const entries = readEntries()
    entries.unshift(newEntry)
    writeEntries(entries)
    res.status(201).json(newEntry)
  } catch {
    res.status(500).json({ error: 'Could not save entry.' })
  }
})

export default router
