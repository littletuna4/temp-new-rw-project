import type { Prisma, Club } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ClubCreateArgs>({
  club: {
    one: { data: { name: 'String', description: 'String' } },
    two: { data: { name: 'String', description: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Club, 'club'>
