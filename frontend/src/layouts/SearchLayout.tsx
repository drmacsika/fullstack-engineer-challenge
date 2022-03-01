type Props = {
    children: React.ReactNode;
};


const SearchLayout = ({ children }: Props) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchLayout;