import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReduce"

const INITIAL_STATE = {
    user: null,
    isfetching: false,
    error: false,
    vender: null
}


export const AuthContext =  createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isfetching: state.isfetching,
            error: state.error,
            dispatch,
        }}
        
        >
        {children}

        </AuthContext.Provider>
    );
}


