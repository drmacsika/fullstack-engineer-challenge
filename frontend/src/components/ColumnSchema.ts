import dayjs from "dayjs";
import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

/**
 * Define the column schema for the table
 * Such as headings, cell structure, filter options, etc.
 * 
 */
export const COLUMNS = [
  {
    Header: 'Customer',
    accessor: (row: any) => `${row.customer.first_name} ${row.customer.last_name}`,
  },
  {
    Header: 'Provider',
    accessor: 'provider',
  },
  {
    Header: 'Insurance Type',
    accessor: 'insurance_type',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Policy Number',
    accessor: 'policy_number',
  },
  {
    Header: 'Start Date',
    accessor: 'start_date',
    Cell: ({ value }: any) => {
        return format(new Date(value), 'MM/dd/yyyy');
    },
    disableFilters: true
  },
  {
    Header: 'End Date',
    accessor: 'end_date',
    Cell: ({ value }: any) => {
        return format(new Date(value), 'MM/dd/yyyy');
    },
    disableFilters: true
  },
  {
    Header: 'Created At',
    accessor: 'created_at',
    Cell: ({ value }: any) => {
        return format(new Date(value), 'MM/dd/yyyy');
    },
    disableFilters: true
  },
]