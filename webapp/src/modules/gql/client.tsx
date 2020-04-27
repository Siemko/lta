import ApolloClient from "apollo-boost";

export const gqlClient = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_HOST}/graphql`,
});
