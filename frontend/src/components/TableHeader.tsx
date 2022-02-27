

const TableHeader = () => {
    /**
     * Displays the table header from the given list of Headings
     */
    const tableHeadings = ["Customer", "Provider", "Insurance Type", "Status", "Policy Number", "Start", "End", "Created"];

    return (
        <>
            <tr>
                {
                    tableHeadings.map((heading: string) => {
                        return (
                            <th key={heading} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {heading}
                            </th>
                        )
                    })
                }
            </tr>
        </>
    )
}

export default TableHeader;
