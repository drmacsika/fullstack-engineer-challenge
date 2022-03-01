import { gql } from "apollo-server";
const dateScalar = require("./utils/date");

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

    "Defines the admin user registration information"
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }

    "Defines the input for creating a new admin user"
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
   
    type Query {
        "Get all insurance policies"
        policies: [Policy!]!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
    }
`;
  
module.exports = {
    typeDefs, dateScalar
};