import type { GameSerie } from '@prisma/client'

import {
  gameSeries,
  gameSerie,
  createGameSerie,
  updateGameSerie,
  deleteGameSerie,
} from './gameSeries'
import type { StandardScenario } from './gameSeries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gameSeries', () => {
  scenario('returns all gameSeries', async (scenario: StandardScenario) => {
    const result = await gameSeries()

    expect(result.length).toEqual(Object.keys(scenario.gameSerie).length)
  })

  scenario('returns a single gameSerie', async (scenario: StandardScenario) => {
    const result = await gameSerie({ id: scenario.gameSerie.one.id })

    expect(result).toEqual(scenario.gameSerie.one)
  })

  scenario('creates a gameSerie', async () => {
    const result = await createGameSerie({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a gameSerie', async (scenario: StandardScenario) => {
    const original = (await gameSerie({
      id: scenario.gameSerie.one.id,
    })) as GameSerie
    const result = await updateGameSerie({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a gameSerie', async (scenario: StandardScenario) => {
    const original = (await deleteGameSerie({
      id: scenario.gameSerie.one.id,
    })) as GameSerie
    const result = await gameSerie({ id: original.id })

    expect(result).toEqual(null)
  })
})
