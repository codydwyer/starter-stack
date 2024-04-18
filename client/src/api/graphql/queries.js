import { GraphQLClient, gql } from 'graphql-request';

const gqlurl = 'http://localhost:9000/graphql';

const client = new GraphQLClient(gqlurl);

export const getUsers = async () => {
  const query = gql`
    query {
      users {
        id
        username
      }
    }
  `

  const { users } = await client.request(query);
  return users
}
