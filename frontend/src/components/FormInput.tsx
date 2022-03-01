type FormInputProps = {
    title: string,
    id: string,
    type: string,
    placeholder: string
}

const FormInput = (props: FormInputProps) => {
    const { title, id, type, placeholder } = props;
    return (
        <>
            <label htmlFor={id} className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                {title}
            </label>
            <input id={id} type={type} name={id} placeholder={placeholder}
                className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required />
        </>
    )
}

export default FormInput