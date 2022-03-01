/**
 * IMPORTANT: Just like filtering, pagination can best be handled at the server
 * side using Apollo GRAPGQL Pagination.
 * Client side pagination might be efficient for small data sets, but
 * tend to be inefficient for large data sets.
 */

interface PaginationProps {
    nextPage: () => void;
    previousPage: () => void;
    canNextPage: boolean;
    canPreviousPage: boolean;
    currentIndex: number;
    totalPages: number;
    gotoPage: (page_num: number) => void;
    pageCount: number;
    pageSize: number;
    setPageSize: (size: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { nextPage, previousPage, canNextPage, canPreviousPage, currentIndex, totalPages, gotoPage, pageCount, pageSize, setPageSize } = props;

    return (
        <>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing&nbsp;page&nbsp;
                        <span className="font-medium">{currentIndex}</span>
                        &nbsp;of&nbsp;
                        <span className="font-medium">{totalPages}</span>
                    </p>
                </div>
                <div>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}>
                    {[5, 10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                        </option>
                    ))}
                    </select>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button 
                            onClick={() => gotoPage(0)} 
                            disabled={!canPreviousPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            &lt;&lt;
                        </button>
                        <button 
                            onClick={() => previousPage()} 
                            disabled={!canPreviousPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        <div>
                            <label className="form-label" htmlFor="gotopage"></label>
                            <input 
                                type="number"
                                name="gotopage"
                                id="gotopage"
                                placeholder="1"
                                defaultValue={currentIndex} 
                                onChange={(e) => {
                                    const pageNum = e.target.value ?
                                    Number(e.target.value) - 1 : 0
                                    gotoPage(pageNum);
                                }}
                                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            />
                        </div>
                        <button 
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        <button 
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                            &gt;&gt;
                        </button>
                    </nav>
                </div>
            </div>
            </div>
        </>
    );
}

export default Pagination;