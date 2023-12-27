import type { Prisma, ClubMembership } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ClubMembershipCreateArgs>({
  clubMembership: {
    one: {
      data: {
        user: { create: { email: 'String5723066' } },
        club: { create: { name: 'String', description: 'String' } },
      },
    },
    two: {
      data: {
        user: { create: { email: 'String512109' } },
        club: { create: { name: 'String', description: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ClubMembership, 'clubMembership'>
