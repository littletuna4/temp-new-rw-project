import type { Room } from '@prisma/client'

import { rooms, room, createRoom, updateRoom, deleteRoom } from './rooms'
import type { StandardScenario } from './rooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rooms', () => {
  scenario('returns all rooms', async (scenario: StandardScenario) => {
    const result = await rooms()

    expect(result.length).toEqual(Object.keys(scenario.room).length)
  })

  scenario('returns a single room', async (scenario: StandardScenario) => {
    const result = await room({ id: scenario.room.one.id })

    expect(result).toEqual(scenario.room.one)
  })

  scenario('creates a room', async () => {
    const result = await createRoom({
      input: { location: 'String' },
    })

    expect(result.location).toEqual('String')
  })

  scenario('updates a room', async (scenario: StandardScenario) => {
    const original = (await room({ id: scenario.room.one.id })) as Room
    const result = await updateRoom({
      id: original.id,
      input: { location: 'String2' },
    })

    expect(result.location).toEqual('String2')
  })

  scenario('deletes a room', async (scenario: StandardScenario) => {
    const original = (await deleteRoom({ id: scenario.room.one.id })) as Room
    const result = await room({ id: original.id })

    expect(result).toEqual(null)
  })
})
