import type { GameInvitation } from '@prisma/client'

import {
  gameInvitations,
  gameInvitation,
  createGameInvitation,
  updateGameInvitation,
  deleteGameInvitation,
} from './gameInvitations'
import type { StandardScenario } from './gameInvitations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gameInvitations', () => {
  scenario(
    'returns all gameInvitations',
    async (scenario: StandardScenario) => {
      const result = await gameInvitations()

      expect(result.length).toEqual(Object.keys(scenario.gameInvitation).length)
    }
  )

  scenario(
    'returns a single gameInvitation',
    async (scenario: StandardScenario) => {
      const result = await gameInvitation({
        id: scenario.gameInvitation.one.id,
      })

      expect(result).toEqual(scenario.gameInvitation.one)
    }
  )

  scenario('creates a gameInvitation', async (scenario: StandardScenario) => {
    const result = await createGameInvitation({
      input: { gameId: scenario.gameInvitation.two.gameId },
    })

    expect(result.gameId).toEqual(scenario.gameInvitation.two.gameId)
  })

  scenario('updates a gameInvitation', async (scenario: StandardScenario) => {
    const original = (await gameInvitation({
      id: scenario.gameInvitation.one.id,
    })) as GameInvitation
    const result = await updateGameInvitation({
      id: original.id,
      input: { gameId: scenario.gameInvitation.two.gameId },
    })

    expect(result.gameId).toEqual(scenario.gameInvitation.two.gameId)
  })

  scenario('deletes a gameInvitation', async (scenario: StandardScenario) => {
    const original = (await deleteGameInvitation({
      id: scenario.gameInvitation.one.id,
    })) as GameInvitation
    const result = await gameInvitation({ id: original.id })

    expect(result).toEqual(null)
  })
})
