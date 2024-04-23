import cors from 'cors';
import express from 'express';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from 'node:fs/promises';

import { handleLogin, authMiddleware } from './auth/index.js';
import { resolvers } from './resolvers/index.js';
import logger from './logs/logger.js';
import morganMiddleware from './logs/morgan.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

app.use(morganMiddleware);

const typeDefs = await readFile('./schema.graphql', 'utf8');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

const getContext = ({req}) => {
  return {auth: req.auth};
}

app.use('/graphql', apolloMiddleware(apolloServer, {context: getContext}))

app.listen({port: PORT}, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
