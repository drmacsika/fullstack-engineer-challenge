import Checkbox from './Checkbox';

interface ShowHideColumnsProps {
    allColumns: any;
    getToggleHideAllColumnsProps: () => any;
}

const ShowHideColumns = (props: ShowHideColumnsProps) => {
    /**
     * Function to show and hide columns 
     * for the purpose of organizing the table data
     */
    const { allColumns, getToggleHideAllColumnsProps } = props;
    return (
        <>
            <div className="flex justify-center pt-6 mb-7">
                <div className="form-check form-check-inline pl-6">
                    <Checkbox {...getToggleHideAllColumnsProps()} /> 
                    Toggle All
                </div>
                {allColumns.map((column: any) => (
                    <div key={column.id} className="form-check form-check-inline pl-6">
                        <label>
                            <input type='checkbox' {...column.getToggleHiddenProps()} />
                            {' '}
                            {column.Header}
                        </label>
                    </div>
                ))}
                <br />
            </div>
        </>
    );
}

export default ShowHideColumns;