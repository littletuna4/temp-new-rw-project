import type { Prisma, WalletTransaction } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WalletTransactionCreateArgs>({
  walletTransaction: {
    one: {
      data: {
        value: 4387616.806512058,
        description: 'String',
        wallet: { create: { user: { create: { email: 'String405197' } } } },
      },
    },
    two: {
      data: {
        value: 6960489.042099469,
        description: 'String',
        wallet: { create: { user: { create: { email: 'String4336815' } } } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  WalletTransaction,
  'walletTransaction'
>
