export const schema = gql`
  type Notification {
    id: Int!
    user: User!
    userId: Int!
    type: String
    message: String
    createdAt: DateTime!
    read: Boolean!
  }

  type Query {
    notifications: [Notification!]! @requireAuth
    notification(id: Int!): Notification @requireAuth
  }

  input CreateNotificationInput {
    userId: Int!
    type: String
    message: String
    read: Boolean!
  }

  input UpdateNotificationInput {
    userId: Int
    type: String
    message: String
    read: Boolean
  }

  type Mutation {
    createNotification(input: CreateNotificationInput!): Notification!
      @requireAuth
    updateNotification(
      id: Int!
      input: UpdateNotificationInput!
    ): Notification! @requireAuth
    deleteNotification(id: Int!): Notification! @requireAuth
  }
`
