import type {
  QueryResolvers,
  MutationResolvers,
  GameSerieRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const gameSeries: QueryResolvers['gameSeries'] = () => {
  return db.gameSerie.findMany()
}

export const gameSerie: QueryResolvers['gameSerie'] = ({ id }) => {
  return db.gameSerie.findUnique({
    where: { id },
  })
}

export const createGameSerie: MutationResolvers['createGameSerie'] = ({
  input,
}) => {
  return db.gameSerie.create({
    data: input,
  })
}

export const updateGameSerie: MutationResolvers['updateGameSerie'] = ({
  id,
  input,
}) => {
  return db.gameSerie.update({
    data: input,
    where: { id },
  })
}

export const deleteGameSerie: MutationResolvers['deleteGameSerie'] = ({
  id,
}) => {
  return db.gameSerie.delete({
    where: { id },
  })
}

export const GameSerie: GameSerieRelationResolvers = {
  games: (_obj, { root }) => {
    return db.gameSerie.findUnique({ where: { id: root?.id } }).games()
  },
}
