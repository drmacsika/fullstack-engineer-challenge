import { useState, useContext, useEffect } from "react";
import { LOGIN_USER } from '../api/queries';
import { useForm } from "../hooks/form";
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../state/auth";


const Login = (props: any) => {
    const context: any = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {   
        context.user && navigate('/dashboard');
    }, [context.user, navigate])

    

    const [alert, setAlert] = useState("");

    const [errors, setErrors] = useState<any>({});

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: ''
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_: any, {data: { login: userData }}: any) {
            context.login(userData);
            navigate('/dashboard');
        },
        onError(err: any) {
          setErrors(err?.graphQLErrors[0]?.extensions?.exception?.errors);
        },
        variables: values
    });

    function loginUserCallback() {
        loginUser();
    }

    return (
            <>
              <section className="secton main-section place-items-center">
                <div className="flex-col h-screen b-gray-100">
                    <div className="place-items-center mx-2 my-20 sm:my-auto">
                        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                            px-6 py-10 sm:px-10 sm:py-6 
                            bg-white rounded-lg shadow-md lg:shadow-lg">
                            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Hello Admin<br/>Login
                            </h2>
                            {/* {Object.keys(errors).length > 0 && (
                                <div className="ui error message">
                                    <ul className="list">
                                        {Object.values(errors).map((value: any) => (
                                        <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )} */}
                            <form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                                <div className="text-center">
                                    { alert &&
                                    <div role="alert" aria-relevant="all">
                                        <h3 className="font-light text-center text-sm text-red-600">
                                            {alert}
                                        </h3>
                                    </div>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="username" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                        Username
                                    </label>
                                    <input 
                                        id="username" type="text" name="username" placeholder="Username"
                                        autoComplete="username"
                                        className="block w-full py-3 px-1 mt-2 mb-4
                                        text-gray-800 appearance-none 
                                        border-b-2 border-gray-100
                                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                        aria-required="true"
                                        value={values.username}
                                        onChange={onChange}
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                        Password
                                    </label>
                                    <input className="block w-full py-3 px-1 mt-2 mb-4
                                        text-gray-800 appearance-none 
                                        border-b-2 border-gray-100
                                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                    aria-required="true" 
                                    type="password" name="password" id="password" placeholder="Password" 
                                    value={values.password}
                                    onChange={onChange}
                                    required 
                                    />
                                </div>
                                <button className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                                    font-medium text-white uppercase
                                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                                    type="submit">Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login