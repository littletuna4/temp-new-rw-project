export const schema = gql`
  type GameSerie {
    id: Int!
    name: String!
    games: [Game]!
  }

  type Query {
    gameSeries: [GameSerie!]! @requireAuth
    gameSerie(id: Int!): GameSerie @requireAuth
  }

  input CreateGameSerieInput {
    name: String!
  }

  input UpdateGameSerieInput {
    name: String
  }

  type Mutation {
    createGameSerie(input: CreateGameSerieInput!): GameSerie! @requireAuth
    updateGameSerie(id: Int!, input: UpdateGameSerieInput!): GameSerie!
      @requireAuth
    deleteGameSerie(id: Int!): GameSerie! @requireAuth
  }
`
