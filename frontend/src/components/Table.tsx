import { Column, useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { COLUMNS } from './ColumnSchema';
import { useMemo, useState, ChangeEvent, useEffect } from 'react';
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import Search from './Search';
import ColumnFilter from './ColumnFilter';
import Pagination from './Pagination';
import ShowHideColumns from './ShowHideColumns';
import { TableProps, EditableCellProps } from '../types/table-components'; 
import { EditableCell } from '../utils/editTableCell';


const Table = (props: TableProps) => {
    /* 
    * React Table library recommends using useMemo hook from React here to ensure
    * that our data isn't recreated on every render. If we didn't use
    * React.useMemo, the table would think it was receiving new data on
    * every render and attempt to recalculate a lot of logic every single
    * time. Not cool!
    */
    const { policies } = props;
    const [skipPageReset, setSkipPageReset] = useState(false);
    const [data, setData] = useState(() => policies);
    const [originalData] = useState(policies);
    // const data: Array<any> = useMemo(() => policies, []);
    const columns: Array<Column> = useMemo(() => COLUMNS, []);
    const defaultColumn: any = useMemo(() => {
        return {
            Cell: EditableCell,
            Filter: ColumnFilter
        }
    }, [])

    /**
     * When the cell renderer "EditableCell" calls updateMyData, we'll use
     * the rowIndex, columnId and new value to update the
     * original data
     */
    const updateMyData = (
        rowIndex: number | string, 
        columnId: number | string, 
        value: any) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                    return row
            })
        )
        // ...
        // mutate the GraphQL backend of some external data source such
        // as MongoDB, FireStore or a Rest API.
    }

    /**
     * After data changes, we turn the flag back off,
     * so that if data actually changes when we're not,
     * editing it, the page is reset
     */
    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    /**
     * Add a data resetter to help illustrate that flow
     */
    const resetData = () => setData(originalData)

    const tableInstance = useTable({
        columns: columns,
        data: data,
        defaultColumn: defaultColumn,
        
        // use the skipPageReset option to disable page resetting temporarily
        autoResetPage: !skipPageReset,

        /**
         * updateMyData isn't part of the API, but
         * anything we put into these options in React Table will
         * automatically be available on the instance.
         * That way we can call this function from our cell renderer
         */
        updateMyData: updateMyData,
    }, useFilters, useGlobalFilter, useSortBy, usePagination);
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
        setPageSize,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <>
            <Search search_input={globalFilter} searchFunction={setGlobalFilter} />
            <ShowHideColumns 
                allColumns={allColumns}
                getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
            />
            <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            { headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div>
                                        {
                                            column.canFilter ? 
                                            column.render('Filter') : null
                                        }
                                    </div>
                                    { column.render('Header') }
                                    <span className="text-center">
                                    {
                                        column.isSorted ? 
                                        (column.isSortedDesc ? <FaSortDown />
                                            : <FaSortUp />)
                                        : <FaSort />
                                    }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody 
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200">
                    {
                        page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}
                                                scope="col"
                                                className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        }
                                    )}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <Pagination 
                nextPage={nextPage}
                previousPage={previousPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                currentIndex={pageIndex + 1}
                totalPages={pageOptions.length}
                gotoPage={gotoPage}
                pageCount={pageCount}
                setPageSize={setPageSize}
                pageSize={pageSize}
            />
        </>
    );
}

export default Table;