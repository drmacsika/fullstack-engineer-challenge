import { ApolloServer } from "apollo-server";
const { typeDefs, dateScalar } = require("./schema");
import policies_data from "./mock_data/mock_data";

// This resolver retrieves policies from the mock_data or firestore db
// depending on what we pass to it.
// It resolves the custom date type going from the firestore to the graphql
// from graphql to the client and vice versa.
const resolvers = {
  Date: dateScalar,
  Query: {
    policies: () => policies_data,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});