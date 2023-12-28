export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    hashedPassword: String
    salt: String
    googleId: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
    emailVerified: Boolean!
    emailVerificationToken: String
    accountCreatedAt: DateTime!
    preferredCurrency: String!
    clubMemberships: [ClubMembership]!
    wallets: [Wallet]!

    tickets: [Ticket]!
    gameInvitation: [GameInvitation]!
    organization: Organization
    organizationId: Int
    notification: [Notification]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    hashedPassword: String
    salt: String
    googleId: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
    emailVerified: Boolean!
    emailVerificationToken: String
    accountCreatedAt: DateTime!
    preferredCurrency: String!
    organizationId: Int
  }

  input UpdateUserInput {
    email: String
    name: String
    hashedPassword: String
    salt: String
    googleId: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    webAuthnChallenge: String
    emailVerified: Boolean
    emailVerificationToken: String
    accountCreatedAt: DateTime
    preferredCurrency: String
    organizationId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
