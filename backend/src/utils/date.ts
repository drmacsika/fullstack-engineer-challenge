import { GraphQLScalarType, Kind } from 'graphql';
import dayjs from "dayjs";

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom scalar type for Date',
    serialize(value) {
      return dayjs(value).format(); // This is what is sent to the frontend.
    },
    parseValue(value) {
      return dayjs(value).format("MM-DD-YYYY"); // This what is received from the frontend.
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return dayjs(ast.value); // Convert hard-coded AST string to Date
      }
      return null; // Invalid hard-coded value (not an integer or String)
    },
});

module.exports = {
    dateScalar: dateScalar
}