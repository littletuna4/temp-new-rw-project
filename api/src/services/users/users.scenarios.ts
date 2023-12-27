import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String2240045' } },
    two: { data: { email: 'String5817767' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
