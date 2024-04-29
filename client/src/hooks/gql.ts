import { useMutation, useQuery } from '@apollo/client';
import { getUsersQuery } from '../api/graphql/queries.js';

export const useUsers = () => {
  const { data, loading, error } = useQuery(getUsersQuery, {
    fetchPolicy: 'network-only',
  });

  return { users: data?.users, loading, error: Boolean(error) };
};
