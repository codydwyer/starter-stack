import { notFoundError, unauthorizedError } from "./errors.js";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../db/users.js";

export const resolvers = {
  Query: {
    user: async (_root, { id }) => {
      const user = await getUser(id)
      
      if(!user) {
        throw notFoundError(`No User found with id ${id}`)
      }

      return user;
    },
    users: () => getUsers(),
  },

  Mutation: {
    createUser: (_root, { input: { username } }, {auth}) => {
      if (!auth) {
        throw unauthorizedError('Missing authentication');
      }
      return createUser({ username })
    },
    deleteUser: (_root, { input: { id } }) => {
      return deleteUser({ id })
    },
    updateUser: (_root, { input: { id, username } }) => {
      return updateUser({ id, username })
    }
  }
}
