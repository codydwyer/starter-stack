import cors from 'cors';
import express from 'express';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from 'node:fs/promises';

import { resolvers } from './resolvers/index.js';
import logger from './logs/logger.js';
import morganMiddleware from './logs/morgan.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json());

app.use(morganMiddleware);

const typeDefs = await readFile('./schema.graphql', 'utf8');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

app.use('/graphql', apolloMiddleware(apolloServer))

app.listen({port: PORT}, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
