export const schema = gql`
  type Ticket {
    id: Int!
    issuingUserId: Int!
    owner: User!
    ownerId: Int!
    gameInvitation: [GameInvitation]!
  }

  type Query {
    tickets: [Ticket!]! @requireAuth
    ticket(id: Int!): Ticket @requireAuth
  }

  input CreateTicketInput {
    issuingUserId: Int!
    ownerId: Int!
  }

  input UpdateTicketInput {
    issuingUserId: Int
    ownerId: Int
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket! @requireAuth
    updateTicket(id: Int!, input: UpdateTicketInput!): Ticket! @requireAuth
    deleteTicket(id: Int!): Ticket! @requireAuth
  }
`
