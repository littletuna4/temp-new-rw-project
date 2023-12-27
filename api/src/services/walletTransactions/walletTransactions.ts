import type {
  QueryResolvers,
  MutationResolvers,
  WalletTransactionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const walletTransactions: QueryResolvers['walletTransactions'] = () => {
  return db.walletTransaction.findMany()
}

export const walletTransaction: QueryResolvers['walletTransaction'] = ({
  id,
}) => {
  return db.walletTransaction.findUnique({
    where: { id },
  })
}

export const createWalletTransaction: MutationResolvers['createWalletTransaction'] =
  ({ input }) => {
    return db.walletTransaction.create({
      data: input,
    })
  }

export const updateWalletTransaction: MutationResolvers['updateWalletTransaction'] =
  ({ id, input }) => {
    return db.walletTransaction.update({
      data: input,
      where: { id },
    })
  }

export const deleteWalletTransaction: MutationResolvers['deleteWalletTransaction'] =
  ({ id }) => {
    return db.walletTransaction.delete({
      where: { id },
    })
  }

export const WalletTransaction: WalletTransactionRelationResolvers = {
  wallet: (_obj, { root }) => {
    return db.walletTransaction.findUnique({ where: { id: root?.id } }).wallet()
  },
}
