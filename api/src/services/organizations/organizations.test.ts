import type { Organization } from '@prisma/client'

import {
  organizations,
  organization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from './organizations'
import type { StandardScenario } from './organizations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organizations', () => {
  scenario('returns all organizations', async (scenario: StandardScenario) => {
    const result = await organizations()

    expect(result.length).toEqual(Object.keys(scenario.organization).length)
  })

  scenario(
    'returns a single organization',
    async (scenario: StandardScenario) => {
      const result = await organization({ id: scenario.organization.one.id })

      expect(result).toEqual(scenario.organization.one)
    }
  )

  scenario('deletes a organization', async (scenario: StandardScenario) => {
    const original = (await deleteOrganization({
      id: scenario.organization.one.id,
    })) as Organization
    const result = await organization({ id: original.id })

    expect(result).toEqual(null)
  })
})
