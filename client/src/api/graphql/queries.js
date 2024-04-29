import { ApolloClient, ApolloLink, concat, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { getAccessToken } from '../auth'

const gqlurl = 'http://localhost:9000/graphql';

const httpLink = createHttpLink({
  uri: gqlurl  
})

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();

  if(accessToken) {
    operation.setContext({
      headers: {'Authorization': `Bearer ${accessToken}` },
    })    
  }
    
  return forward(operation);
})

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache()
})

const userDetailFragment = gql`
  fragment UserDetail on User {
    id
    username
  }
`;

export const getUser = async (id) => {
  const query = gql`
    query UserById($id: ID!){
      user(id: $id) {
       ...UserDetail
      }
    }
    ${userDetailFragment}
  `

  const { data } = await client.query({query, variables: { id }});
  return data.user
}

export const getUsersQuery = gql`
  query {
    users {
      ...UserDetail
    }
  }
  ${userDetailFragment}
`;

export const getUsers = async () => {
  const query = getUsersQuery;

  const { data } = await client.query({query});
  return data.users
}

export const createUser = async ({ username }) => {
  const mutation = gql`
    mutation CreateUser($input: CreateUserInput!) {
      user: createUser(input: $input) {
        ...UserDetail
      }
    }
    ${userDetailFragment}
  `

  const { data } = await client.mutate({mutation, variables: {
    input: { username } 
  }});

  return data.user
}

export const deleteUser = async ({ id }) => {
  const mutation = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
      user: deleteUser(input: $input) {
        ...UserDetail
      }
    }
    ${userDetailFragment}
  `

  const { data } = await client.mutate({mutation, variables: {
    input: { id } 
  }});

  return data.user
}

export const updateUser = async ({ id, username }) => {
  const mutation = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
      user: updateUser(input: $input) {
        ...UserDetail
      }
    }
    ${userDetailFragment}
  `

  const { data } = await client.mutate({mutation, variables: {
    input: { id, username } 
  }});

  return { user: data.user, updatedFields: data.updatedFields }
}
