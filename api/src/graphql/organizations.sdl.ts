export const schema = gql`
  type Organization {
    id: Int!
    clubs: [Club]!
    wallet: [Wallet]!
    members: [User]!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(id: Int!): Organization @requireAuth
  }
`
