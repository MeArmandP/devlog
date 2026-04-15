import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { prisma } from './lib/prisma.ts'
import entries from './data/entries.ts'
// --- Startup guard -------------------------------------------
const required = ['CORS_ORIGIN', 'DATABASE_URL'] as const
for (const key of required) {
  if (!process.env[key]) {
    console.error(`  Missing required env var: ${key}`)
    console.error('   Copy .env.example to .env and fill in the values.')
    process.exit(1)
  }
}

// Initialize Express server instance
const app = express()
const PORT = process.env.PORT || 4000

// Configure CORS middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }))

// Enable JSON request body parsing
app.use(express.json())

// Basic health check
app.get('/api/health', (_req: express.Request, res: express.Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Readiness check (database connection)
app.get('/api/health/ready', async (_req: express.Request, res: express.Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ready', timestamp: new Date().toISOString() })
  } catch {
    res.status(503).json({
      status: 'unavailable',
      timestamp: new Date().toISOString(),
    })
  }
})

// Start the Express server
app.listen(PORT, () => {
  console.log(`  Server running on http://localhost:${PORT}`)
  console.log(`   Health:  http://localhost:${PORT}/api/health`)
  console.log(`   Ready:   http://localhost:${PORT}/api/health/ready`)
})

app.use('/api/entries', entriesRouter)