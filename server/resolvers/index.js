import { getUsers } from "../db/users.js";

export const resolvers = {
  Query: {
    users: () => getUsers()
  }
}