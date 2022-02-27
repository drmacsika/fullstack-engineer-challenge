import { gql } from "apollo-server";
import { GraphQLScalarType, Kind } from 'graphql';
import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const typeDefs = gql`
    "Define a new custom scalar type for Date"
    scalar Date

    "Defines the type of the insurance."
    enum InsuranceType {
        LIABILITY
        HOUSEHOLD
        HEALTH
    }

    "Defines the current status of the insurance."
    enum PolicyStatus {
        ACTIVE
        PENDING
        CANCELLED
        DROPPED_OUT
    }

    "Defines the customer's information."
    type Customer {
        id: ID!

        "First name of the customer"
        first_name: String!

        "Last name of the customer"
        last_name: String!

        "Date of birth of the customer"
        date_of_birth: Date!
    }

    "Defines the insurance policy pertaining to a customer"
    type Policy {
        id: ID!

        "The customer to whom the policy belongs"
        customer: Customer!

        "Name of the insurance company"
        provider: String!

        "The type of insurance"
        insurance_type: InsuranceType!

        "The status of the policy"
        status: PolicyStatus!

        "Used to identify the policy"
        policy_number: String!

        "Date when the policy should start"
        start_date: Date!

        "Date when the policy should end"
        end_date: Date!

        "Date when this particular record was created"
        created_at: Date!
    }

    "Get the details of all insurance policies"
    type Query {
        policies: [Policy!]!
    }
`;

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
    typeDefs, dateScalar
};