import type { Prisma, GameInvitation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GameInvitationCreateArgs>({
  gameInvitation: {
    one: { data: { game: { create: {} } } },
    two: { data: { game: { create: {} } } },
  },
})

export type StandardScenario = ScenarioData<GameInvitation, 'gameInvitation'>
