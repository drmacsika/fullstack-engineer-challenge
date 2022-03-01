
/**
* IMPORTANT: Sever side filtering using the Apollo GraphQL for this project 
 * is the best and most efficient way
 * to filter data for performance and scalability. 
 * 
 * Client side filtering can handle a few thousand entries
 * but not hundreds of thousands of entries.
 */

interface ColumnFilterProps {
    column: any;
}

const ColumnFilter = (props: ColumnFilterProps) => {
    const {filterValue, setFilter} = props.column;

    return (
        <>
            <input 
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
                type="search" 
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Filter"
                aria-label="Filter" 
                aria-describedby="button-addon2"
            />
        </>
    );
}

export default ColumnFilter;