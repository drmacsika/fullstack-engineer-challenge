import SearchLayout from '../layouts/SearchLayout';
import { useAsyncDebounce } from "react-table"
import { useState } from 'react';

/**
 * Filtering the table globally using search and column filtering
 * begs the need to debounce the filtering to prevent the table from continuous 
 * re-rendering.
 * It's okay with just a few hundred data. However, when the data grows to
 * thousands, there will be issues of scalability and performance.
 * 
 * The solution is simply to debounce the filtering onChangeEvents using
 * useAsyncDebounce.
 * 
 * IMPORTANT: Sever side filtering using the Apollo GraphQL for this project 
 * is the best and most efficient way
 * to filter data for performance and scalability. 
 * 
 * Client side filtering can handle a few thousand entries
 * but not hundreds of thousands of entries.
 */

interface SearchProps {
    search_input: string;
    searchFunction: (search_input: string | undefined) => void;
}

const Search = (props: SearchProps) => {
    const { search_input, searchFunction } = props;
    const [value, setValue] = useState(search_input);

    const onChange = useAsyncDebounce((value: string) => {
        searchFunction(value || undefined);
    }, 1000)

    return (
        <>
            <SearchLayout>
                <input 
                    value={value || ''}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    type="search" 
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search by name, provider, insurance type..."
                    aria-label="Search" 
                    aria-describedby="button-addon2"
                />
            </SearchLayout>
        </>
    );
}

export default Search;