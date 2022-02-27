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