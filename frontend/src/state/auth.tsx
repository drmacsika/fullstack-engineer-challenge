import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

/**
 * DISCLAIMER: The use of local storage to hold the jwt token for state
 * persistent login is NOT recommended for production.
 * This is only for demonstration purposes.
 */

const initialState = {
    user: null
};

const getJWTToken: string | null = localStorage.getItem('jwtToken');

if (getJWTToken) {
    const decodedToken: any = jwtDecode(getJWTToken);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('jwtToken');
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData: any) => {},
    logout: () => {}
});

function authReducer(state: any, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

const AuthProvider = (props: any) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData: any) => {
        localStorage.setItem('jwtToken', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }

  const logout = () => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: 'LOGOUT' });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };