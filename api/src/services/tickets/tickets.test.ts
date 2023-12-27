import type { Ticket } from '@prisma/client'

import {
  tickets,
  ticket,
  createTicket,
  updateTicket,
  deleteTicket,
} from './tickets'
import type { StandardScenario } from './tickets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tickets', () => {
  scenario('returns all tickets', async (scenario: StandardScenario) => {
    const result = await tickets()

    expect(result.length).toEqual(Object.keys(scenario.ticket).length)
  })

  scenario('returns a single ticket', async (scenario: StandardScenario) => {
    const result = await ticket({ id: scenario.ticket.one.id })

    expect(result).toEqual(scenario.ticket.one)
  })

  scenario('creates a ticket', async (scenario: StandardScenario) => {
    const result = await createTicket({
      input: { issuingUserId: 3621718, ownerId: scenario.ticket.two.ownerId },
    })

    expect(result.issuingUserId).toEqual(3621718)
    expect(result.ownerId).toEqual(scenario.ticket.two.ownerId)
  })

  scenario('updates a ticket', async (scenario: StandardScenario) => {
    const original = (await ticket({ id: scenario.ticket.one.id })) as Ticket
    const result = await updateTicket({
      id: original.id,
      input: { issuingUserId: 2504113 },
    })

    expect(result.issuingUserId).toEqual(2504113)
  })

  scenario('deletes a ticket', async (scenario: StandardScenario) => {
    const original = (await deleteTicket({
      id: scenario.ticket.one.id,
    })) as Ticket
    const result = await ticket({ id: original.id })

    expect(result).toEqual(null)
  })
})
