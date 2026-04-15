import { PrismaClient } from '../../src/generated/prisma/client.js'
import { PrismaMssql } from '@prisma/adapter-mssql'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('Missing DATABASE_URL for Prisma connection')
}

const adapter = new PrismaMssql(connectionString)

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
