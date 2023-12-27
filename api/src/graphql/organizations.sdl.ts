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

  
  input CreateOrganizationInput {
    
  }

  
  input UpdateOrganizationInput {
    
  }

  
  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization! @requireAuth
    updateOrganization(id: Int!, input: UpdateOrganizationInput!): Organization! @requireAuth
    deleteOrganization(id: Int!): Organization! @requireAuth
  }
`
