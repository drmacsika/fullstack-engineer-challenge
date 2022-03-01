import { gql } from '@apollo/client';

/**
 * This file is intended to be used as a template for creating new queries.
 * And holding all queries in one place.
 */

// Query for getting all insurance policies
export const POLICY = gql`
    query getPolicy {
        policies {
        customer {
            first_name
            last_name
            date_of_birth
        }
        provider
        insurance_type
        status
        policy_number
        start_date
        end_date
        created_at
        }
    }
`;

// Register a new admin
export const REGISTER_ADMIN = gql`
    mutation register(
        $username: String!,
        $email: String!,
        $password: String!,
        $confirmPassword: String!
    ){
        register(
            registerInput: {
                username: $username,
                email: $email,
                password: $password,
                confirmPassword: $confirmPassword
            }
        ) {
            username
            email
            token
            createdAt
        }
    } 
`;

// Login an admin
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
