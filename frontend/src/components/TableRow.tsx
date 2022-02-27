import TableData from './TableData';

enum InsuranceType {
    Liability = "LIABILITY",
    Household = "HOUSEHOLD", 
    Health = "HEALTH"
}

enum PolicyStatus {
    Active = "ACTIVE",
    Pending = "PENDING",
    Cancelled = "CANCELLED",
    Dropped_Out = "DROPPED_OUT"
}

interface Customer {
    first_name: string;
    last_name: string;
    date_of_birth: Date;
}

/**
 * Provides more context to understand the expected values from the graphql api
 * Not necessary to use, but it is good to have
 */
type RowProps = {
    customer: Customer;
    title: string;
    insurance_type: InsuranceType;
    status: PolicyStatus, 
    policy_number: string, 
    start_date: Date,
    end_date: Date,
    created_at: Date
}

type TableRowProps = {
    policy: string | {}
}

/**
 * Provides more context to understand the expected values from the graphql api
 * Not necessary to use, but it is good to have
 */
type ItemProps = {
    item: string | {} | Date
}

const TableRow = (props: TableRowProps) => {
   /**
    * This component renders each table row by passing 
    * each item in the policy object to the TableData component
    * 
    */
    return (
        <>
            {
                <tr>
                    {
                        Object.entries(props.policy).slice(1).map(([key, value]: [string, string | {first_name: string, last_name: string, date_of_birth: Date } | Date]) => (
                            <TableData key={String(key)+value} key_title={key} item={value} />
                        ))
                    }
                </tr>
            }
        </>
    );
}

export default TableRow;