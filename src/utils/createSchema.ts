import { buildSchema } from 'type-graphql'

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [__dirname + '/../resolvers/*.ts'],
    validate: false
  })
}
