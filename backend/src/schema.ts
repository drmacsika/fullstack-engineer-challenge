const { gql } = require("apollo-server");

const typeDefs = gql`
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
        firstName: String!

        "Last name of the customer"
        lastName: String!

        "Date of birth of the customer"
        dateOfBirth: String!
    }

    "Defines the insurance policy pertaining to a customer"
    type Policy {
        id: ID!

        "The customer to whom the policy belongs"
        customer: Customer!

        "Name of the insurance company"
        provider: String!

        "The type of insurance"
        insuranceType: InsuranceType!

        "The status of the policy"
        status: PolicyStatus!

        "Used to identify the policy"
        policyNumber: String!

        "Date when the policy should start"
        startDate: String!

        "Date when the policy should end"
        endDate: String!

        "Date when this particular record was created"
        createdAt: String!
    }

    "Get the details of all insurance policies"
    type Query {
      allInsurancePolicies: [Policy!]!
    }
`;

// export default typeDefs;
module.exports = typeDefs;