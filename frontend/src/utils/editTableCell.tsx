import { EditableCellProps } from '../types/table-components';
import { useState, ChangeEvent, useEffect } from 'react';


/**
 *  Make the table data cells editable
 */
export const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // Custom function given to the table instance
    }: EditableCellProps) => {

    /**
    * Maintain and update the state of the cell normally
    */
    const [value, setValue] = useState(initialValue)

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }

    /**
     * This is where the magic happens.
     * We would use the updateMyData function that was passed
     * to mutate the GraphQL backend of some external data source such
     * as MongoDB, FireStore or a Rest API.
     * if we were implementing a database.
     * We'll only update the external data when the input is blurred
    */
    const onBlur = () => {
        updateMyData(index, id, value);
    }

    /**
     * If the initialValue is changed externally, we sync it up with our state.
     */
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue])

    return <input value={value} onChange={onChange} onBlur={onBlur} />
}

