import type { Prisma, Room } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoomCreateArgs>({
  room: {
    one: { data: { location: 'String' } },
    two: { data: { location: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Room, 'room'>
