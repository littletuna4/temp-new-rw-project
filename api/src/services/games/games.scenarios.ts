import type { Prisma, Game } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GameCreateArgs>({
  game: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Game, 'game'>
