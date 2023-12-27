import type { ClubMembership } from '@prisma/client'

import {
  clubMemberships,
  clubMembership,
  createClubMembership,
  updateClubMembership,
  deleteClubMembership,
} from './clubMemberships'
import type { StandardScenario } from './clubMemberships.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clubMemberships', () => {
  scenario(
    'returns all clubMemberships',
    async (scenario: StandardScenario) => {
      const result = await clubMemberships()

      expect(result.length).toEqual(Object.keys(scenario.clubMembership).length)
    }
  )

  scenario(
    'returns a single clubMembership',
    async (scenario: StandardScenario) => {
      const result = await clubMembership({
        id: scenario.clubMembership.one.id,
      })

      expect(result).toEqual(scenario.clubMembership.one)
    }
  )

  scenario('creates a clubMembership', async (scenario: StandardScenario) => {
    const result = await createClubMembership({
      input: {
        userId: scenario.clubMembership.two.userId,
        clubId: scenario.clubMembership.two.clubId,
      },
    })

    expect(result.userId).toEqual(scenario.clubMembership.two.userId)
    expect(result.clubId).toEqual(scenario.clubMembership.two.clubId)
  })

  scenario('updates a clubMembership', async (scenario: StandardScenario) => {
    const original = (await clubMembership({
      id: scenario.clubMembership.one.id,
    })) as ClubMembership
    const result = await updateClubMembership({
      id: original.id,
      input: { userId: scenario.clubMembership.two.userId },
    })

    expect(result.userId).toEqual(scenario.clubMembership.two.userId)
  })

  scenario('deletes a clubMembership', async (scenario: StandardScenario) => {
    const original = (await deleteClubMembership({
      id: scenario.clubMembership.one.id,
    })) as ClubMembership
    const result = await clubMembership({ id: original.id })

    expect(result).toEqual(null)
  })
})
