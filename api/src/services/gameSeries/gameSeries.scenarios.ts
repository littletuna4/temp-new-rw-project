import type { Prisma, GameSerie } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GameSerieCreateArgs>({
  gameSerie: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<GameSerie, 'gameSerie'>
