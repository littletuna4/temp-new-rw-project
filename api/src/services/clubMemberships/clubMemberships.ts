import type {
  QueryResolvers,
  MutationResolvers,
  ClubMembershipRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const clubMemberships: QueryResolvers['clubMemberships'] = () => {
  return db.clubMembership.findMany()
}

export const clubMembership: QueryResolvers['clubMembership'] = ({ id }) => {
  return db.clubMembership.findUnique({
    where: { id },
  })
}

export const createClubMembership: MutationResolvers['createClubMembership'] =
  ({ input }) => {
    return db.clubMembership.create({
      data: input,
    })
  }

export const updateClubMembership: MutationResolvers['updateClubMembership'] =
  ({ id, input }) => {
    return db.clubMembership.update({
      data: input,
      where: { id },
    })
  }

export const deleteClubMembership: MutationResolvers['deleteClubMembership'] =
  ({ id }) => {
    return db.clubMembership.delete({
      where: { id },
    })
  }

export const ClubMembership: ClubMembershipRelationResolvers = {
  user: (_obj, { root }) => {
    return db.clubMembership.findUnique({ where: { id: root?.id } }).user()
  },
  club: (_obj, { root }) => {
    return db.clubMembership.findUnique({ where: { id: root?.id } }).club()
  },
}
