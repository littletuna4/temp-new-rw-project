export const schema = gql`
  type Club {
    id: Int!
    name: String!
    description: String!
    memberships: [ClubMembership]!
    organization: Organization
    organizationId: Int
    privacy: ClubPrivacy!
    wallets: [Wallet]!
  }

  enum ClubPrivacy {
    PUBLIC
    INVITEONLYVISIBLE
    INVITEONLYSECRET
    ONREFERRAL
    ONREQUEST
  }

  type Query {
    clubs: [Club!]! @requireAuth
    club(id: Int!): Club @requireAuth
  }

  input CreateClubInput {
    name: String!
    description: String!
    organizationId: Int
    privacy: ClubPrivacy!
  }

  input UpdateClubInput {
    name: String
    description: String
    organizationId: Int
    privacy: ClubPrivacy
  }

  type Mutation {
    createClub(input: CreateClubInput!): Club! @requireAuth
    updateClub(id: Int!, input: UpdateClubInput!): Club! @requireAuth
    deleteClub(id: Int!): Club! @requireAuth
  }
`
