import 'reflect-metadata'
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { createSchema } from './utils/createSchema';


async function bootstrap() {
  const app = express()

  const apolloServer = new ApolloServer({
    schema: await createSchema(),
    context: ({ req, res }) => ({
      req,
      res
    }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground()
    ]
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log('graphql is running at 4000'))
}

bootstrap()
  .catch((err) => { console.error(err) })

