export const schema = gql`
  type Wallet {
    id: Int!
    user: User!
    userId: Int!
    walletTransactions: [WalletTransaction]!
    club: Club
    organization: Organization
    organizationId: Int
    clubId: Int
    currency: String
  }

  type Query {
    wallets: [Wallet!]! @requireAuth
    wallet(id: Int!): Wallet @requireAuth
  }

  input CreateWalletInput {
    userId: Int!
    organizationId: Int
    clubId: Int
    currency: String
  }

  input UpdateWalletInput {
    userId: Int
    organizationId: Int
    clubId: Int
    currency: String
  }

  type Mutation {
    createWallet(input: CreateWalletInput!): Wallet! @requireAuth
    updateWallet(id: Int!, input: UpdateWalletInput!): Wallet! @requireAuth
    deleteWallet(id: Int!): Wallet! @requireAuth
  }
`
