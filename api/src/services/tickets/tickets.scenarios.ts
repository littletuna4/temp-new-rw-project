import type { Prisma, Ticket } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TicketCreateArgs>({
  ticket: {
    one: {
      data: {
        issuingUserId: 2359221,
        owner: { create: { email: 'String130662' } },
      },
    },
    two: {
      data: {
        issuingUserId: 540355,
        owner: { create: { email: 'String3074555' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Ticket, 'ticket'>
