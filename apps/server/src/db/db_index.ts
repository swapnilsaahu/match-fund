
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Env } from '../types/env.d'

export const createPrismaClient = (env: Env) => {
    return new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate())
}

export type PrismaClientType = ReturnType<typeof createPrismaClient>
