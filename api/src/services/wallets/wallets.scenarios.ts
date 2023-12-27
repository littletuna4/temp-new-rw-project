import type { Prisma, Wallet } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WalletCreateArgs>({
  wallet: {
    one: { data: { user: { create: { email: 'String7461396' } } } },
    two: { data: { user: { create: { email: 'String4032654' } } } },
  },
})

export type StandardScenario = ScenarioData<Wallet, 'wallet'>
