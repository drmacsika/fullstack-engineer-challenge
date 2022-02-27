import dayjs from "dayjs";

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
type DataProps = {
    customer: Customer;
    title: string;
    insurance_type: InsuranceType;
    status: PolicyStatus, 
    policy_number: string, 
    start_date: Date,
    end_date: Date,
    created_at: Date
}

/**
 * Default props of this component
*/
type TableDataProps = {
    key_title: string;
    item: any
}


const TableData = (props: TableDataProps) => {
    /**
    * This component renders each table data in three ways:
    * 1. If it is a customer, it renders the customer's information using a diffent design
    * 2. If it is a date, it renders the date in a different, readable format
    * 3. If it is a string, it renders the string as is
    *
    */
    const { key_title, item } = props;
    const convertToReadableDate = (date: string | Date) => dayjs(date).format("MMM DD, YYYY");

    return (
        <>
            {
                key_title === "customer" ? 
                <th scope="col" className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {item.first_name} {item.last_name}<br/>
                    <div className="px-2 mt-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> 
                        { convertToReadableDate(item.date_of_birth) }
                    </div>
                </th>
                :
                (key_title === "start_date" || key_title === "end_date" || key_title === "created_at" ?
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        { convertToReadableDate(item) }
                    </th>
                    :
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        { item }
                    </th>
                )
            }
        </>
    )
}

export default TableData;
