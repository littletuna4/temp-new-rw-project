import type { WalletTransaction } from '@prisma/client'

import {
  walletTransactions,
  walletTransaction,
  createWalletTransaction,
  updateWalletTransaction,
  deleteWalletTransaction,
} from './walletTransactions'
import type { StandardScenario } from './walletTransactions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('walletTransactions', () => {
  scenario(
    'returns all walletTransactions',
    async (scenario: StandardScenario) => {
      const result = await walletTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.walletTransaction).length
      )
    }
  )

  scenario(
    'returns a single walletTransaction',
    async (scenario: StandardScenario) => {
      const result = await walletTransaction({
        id: scenario.walletTransaction.one.id,
      })

      expect(result).toEqual(scenario.walletTransaction.one)
    }
  )

  scenario(
    'creates a walletTransaction',
    async (scenario: StandardScenario) => {
      const result = await createWalletTransaction({
        input: {
          value: 28865.34033285093,
          description: 'String',
          walletId: scenario.walletTransaction.two.walletId,
        },
      })

      expect(result.value).toEqual(28865.34033285093)
      expect(result.description).toEqual('String')
      expect(result.walletId).toEqual(scenario.walletTransaction.two.walletId)
    }
  )

  scenario(
    'updates a walletTransaction',
    async (scenario: StandardScenario) => {
      const original = (await walletTransaction({
        id: scenario.walletTransaction.one.id,
      })) as WalletTransaction
      const result = await updateWalletTransaction({
        id: original.id,
        input: { value: 3467168.500703686 },
      })

      expect(result.value).toEqual(3467168.500703686)
    }
  )

  scenario(
    'deletes a walletTransaction',
    async (scenario: StandardScenario) => {
      const original = (await deleteWalletTransaction({
        id: scenario.walletTransaction.one.id,
      })) as WalletTransaction
      const result = await walletTransaction({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
