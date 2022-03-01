import { Column } from 'react-table';

/**
 * Provides more context to understand the expected values from the graphql api
 * Not necessary to use, but it is good to have
 */
export interface Customer {
    first_name: string;
    last_name: string;
    date_of_birth: Date;
}

export interface DataInterface { 
    customer: Customer;
    provider: string; 
    insurance_type: string;
    status: string;
    policy_number: string;
    start_date: string;
    end_date: string; 
    created_at: string;
}

export interface TableProps {
    /**
     * The "policies" parameter 
     * ideally returns a list of Stringified JSON object
     * but we are using "Array<any>" instead of "Array<string | Object>"
     * to ensure the component does not break when the data changes
     * Since the data can be of arbitrary type.
     */
    policies: Array<any>;
    columns?: Array<Column>;
}

export interface EditableCellProps {
    value: number | string;
    row: {index: number | string};
    column: {id: number | string};
    updateMyData: (index: number | string, id: number | string, value: any) => void;
}