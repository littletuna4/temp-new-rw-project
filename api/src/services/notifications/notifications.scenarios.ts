import type { Prisma, Notification } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.NotificationCreateArgs>({
  notification: {
    one: { data: { user: { create: { email: 'String943223' } } } },
    two: { data: { user: { create: { email: 'String4184467' } } } },
  },
})

export type StandardScenario = ScenarioData<Notification, 'notification'>
