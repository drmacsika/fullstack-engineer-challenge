import TableHeader from './TableHeader';
import TableRow from './TableRow';

/**
 * Default props of this component
*/
type PolicyTableProps = {
    /**
     * This ideally returns a list or Stringified JSON object
     * but we using "any" to ensure the component does
     * not break when the data changes
     */
    policies: [];
}

/**
 * Add types to each returned item in the policies array
*/

type PolicyProps = {
    id: string | number;
    policy_number: string;
    policy: {}
}

const PolicyTable = (props: PolicyTableProps) => {
    /**
     * This component renders the table header and each row of the table
     * Starting point for the table
     */
    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <TableHeader />
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        props.policies.map((policy: PolicyProps) => (
                                            <TableRow key={policy.policy_number} policy={policy} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PolicyTable;