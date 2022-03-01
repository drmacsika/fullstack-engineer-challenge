import { ApolloServer } from "apollo-server";
const { typeDefs } = require("./schema");
import resolvers from "./resolvers";
const mongoose = require('mongoose');
const { MONGODB } = require('./config/config.ts');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// // MongoDB connection
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
      console.log('MongoDB Connected');
      return server.listen({ port: 4000 });
  })
  .then((res: any) => {
    console.log(`Server running at ${res.url}`);
});

// The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });
