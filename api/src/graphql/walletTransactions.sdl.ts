export const schema = gql`
  type WalletTransaction {
    id: Int!
    value: Float!
    description: String!
    createdAt: DateTime!
    wallet: Wallet!
    walletId: Int!
  }

  type Query {
    walletTransactions: [WalletTransaction!]! @requireAuth
    walletTransaction(id: Int!): WalletTransaction @requireAuth
  }

  input CreateWalletTransactionInput {
    value: Float!
    description: String!
    walletId: Int!
  }

  input UpdateWalletTransactionInput {
    value: Float
    description: String
    walletId: Int
  }

  type Mutation {
    createWalletTransaction(
      input: CreateWalletTransactionInput!
    ): WalletTransaction! @requireAuth
    updateWalletTransaction(
      id: Int!
      input: UpdateWalletTransactionInput!
    ): WalletTransaction! @requireAuth
    deleteWalletTransaction(id: Int!): WalletTransaction! @requireAuth
  }
`
