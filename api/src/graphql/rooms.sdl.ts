export const schema = gql`
  type Room {
    id: Int!
    location: String!
    games: [Game]!
    status: String!
  }

  type Query {
    rooms: [Room!]! @requireAuth
    room(id: Int!): Room @requireAuth
  }

  input CreateRoomInput {
    location: String!
    status: String!
  }

  input UpdateRoomInput {
    location: String
    status: String
  }

  type Mutation {
    createRoom(input: CreateRoomInput!): Room! @requireAuth
    updateRoom(id: Int!, input: UpdateRoomInput!): Room! @requireAuth
    deleteRoom(id: Int!): Room! @requireAuth
  }
`
