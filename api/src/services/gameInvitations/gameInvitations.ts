import type {
  QueryResolvers,
  MutationResolvers,
  GameInvitationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const gameInvitations: QueryResolvers['gameInvitations'] = () => {
  return db.gameInvitation.findMany()
}

export const gameInvitation: QueryResolvers['gameInvitation'] = ({ id }) => {
  return db.gameInvitation.findUnique({
    where: { id },
  })
}

export const createGameInvitation: MutationResolvers['createGameInvitation'] =
  ({ input }) => {
    return db.gameInvitation.create({
      data: input,
    })
  }

export const updateGameInvitation: MutationResolvers['updateGameInvitation'] =
  ({ id, input }) => {
    return db.gameInvitation.update({
      data: input,
      where: { id },
    })
  }

export const deleteGameInvitation: MutationResolvers['deleteGameInvitation'] =
  ({ id }) => {
    return db.gameInvitation.delete({
      where: { id },
    })
  }

export const GameInvitation: GameInvitationRelationResolvers = {
  game: (_obj, { root }) => {
    return db.gameInvitation.findUnique({ where: { id: root?.id } }).game()
  },
  user: (_obj, { root }) => {
    return db.gameInvitation.findUnique({ where: { id: root?.id } }).user()
  },
  ticket: (_obj, { root }) => {
    return db.gameInvitation.findUnique({ where: { id: root?.id } }).ticket()
  },
}
