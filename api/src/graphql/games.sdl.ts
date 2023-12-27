export const schema = gql`
  type Game {
    id: Int!
    location: String
    series: GameSerie
    gameSerieId: Int
    room: Room
    roomId: Int
    gameType: GameType!
    ticketingPolicy: TicketingPolicy!
    status: GameStatus!
    gameInvitation: [GameInvitation]!
  }

  enum GameType {
    CASH
    TOURNAMENT
    OTHER
  }

  enum TicketingPolicy {
    INVITEONLY
    PUBLIC
    ONREQUEST
    UNTICKETED
  }

  enum GameStatus {
    DRAFT
    PUBLISHED
    CANCELLED
  }

  type Query {
    games: [Game!]! @requireAuth
    game(id: Int!): Game @requireAuth
  }

  input CreateGameInput {
    location: String
    gameSerieId: Int
    roomId: Int
    gameType: GameType!
    ticketingPolicy: TicketingPolicy!
    status: GameStatus!
  }

  input UpdateGameInput {
    location: String
    gameSerieId: Int
    roomId: Int
    gameType: GameType
    ticketingPolicy: TicketingPolicy
    status: GameStatus
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game! @requireAuth
    updateGame(id: Int!, input: UpdateGameInput!): Game! @requireAuth
    deleteGame(id: Int!): Game! @requireAuth
  }
`
