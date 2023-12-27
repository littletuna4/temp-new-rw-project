export const schema = gql`
  type ClubMembership {
    id: Int!
    user: User!
    club: Club!
    roles: [ClubMembershipRole]!
    userId: Int!
    clubId: Int!
  }

  enum ClubMembershipRole {
    OWNER
    BILLINGADMIN
    GAMEADMIN
    MEMBER
  }

  type Query {
    clubMemberships: [ClubMembership!]! @requireAuth
    clubMembership(id: Int!): ClubMembership @requireAuth
  }

  input CreateClubMembershipInput {
    roles: [ClubMembershipRole]!
    userId: Int!
    clubId: Int!
  }

  input UpdateClubMembershipInput {
    roles: [ClubMembershipRole]!
    userId: Int
    clubId: Int
  }

  type Mutation {
    createClubMembership(input: CreateClubMembershipInput!): ClubMembership!
      @requireAuth
    updateClubMembership(
      id: Int!
      input: UpdateClubMembershipInput!
    ): ClubMembership! @requireAuth
    deleteClubMembership(id: Int!): ClubMembership! @requireAuth
  }
`
