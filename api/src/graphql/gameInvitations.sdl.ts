export const schema = gql`
  type GameInvitation {
    id: Int!
    game: Game!
    gameId: Int!
    user: User
    userId: Int
    status: GameInvitationStatus!
    ticket: Ticket
    ticketId: Int
  }

  enum GameInvitationStatus {
    PENDING
    ACCEPTED
    DECLINED
  }

  type Query {
    gameInvitations: [GameInvitation!]! @requireAuth
    gameInvitation(id: Int!): GameInvitation @requireAuth
  }

  input CreateGameInvitationInput {
    gameId: Int!
    userId: Int
    status: GameInvitationStatus!
    ticketId: Int
  }

  input UpdateGameInvitationInput {
    gameId: Int
    userId: Int
    status: GameInvitationStatus
    ticketId: Int
  }

  type Mutation {
    createGameInvitation(input: CreateGameInvitationInput!): GameInvitation!
      @requireAuth
    updateGameInvitation(
      id: Int!
      input: UpdateGameInvitationInput!
    ): GameInvitation! @requireAuth
    deleteGameInvitation(id: Int!): GameInvitation! @requireAuth
  }
`
