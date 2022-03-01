
type ButtonProps = {
    title: string,
    isSubmitting: boolean
}

const FormButton = ({ title, isSubmitting }: ButtonProps) => {
    return (
        <>
            <button disabled={isSubmitting} 
                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                font-medium text-white uppercase
                focus:outline-none hover:bg-gray-700 hover:shadow-none"
                type="submit">
                { !isSubmitting ?
                    "Register"
                    :
                    "Loading..."
                }
            </button>
        </>
    )
}

export default FormButton