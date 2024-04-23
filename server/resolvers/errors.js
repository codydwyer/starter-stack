import { GraphQLError } from "graphql";

export const notFoundError = (message) => {
  return new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
};

export const unauthorizedError = (message) => {
  return new GraphQLError(message, {
    extensions: { code: "UNAUTHORIZED" },
  });
};
