import express from 'express'
import cors from 'cors'
import entriesRouter from './routes/entries.ts'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/entries', entriesRouter)

app.listen(PORT, () => {
  console.log(`  Server running on http://localhost:${PORT}`)
})