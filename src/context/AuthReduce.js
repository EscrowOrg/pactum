import { deleteCookie, setCookie } from "../user-managerment/module/helpers/cookieMethods";

const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGOUT":
            deleteCookie("userData")
            deleteCookie("tLine")
            return{
                user: null,
                isfetching: false,
                error: false,
            };
        case "LOGIN_START":
            return{
                user: null,
                isfetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            setCookie("userData", JSON.stringify(action.payload.data))
            return{
                user: action.payload,
                isfetching: false,
                error: false
            };
        case "LOGIN_SUCCESS_CLEAR":
            return {
                user: {...action.payload, success: false},
                isfetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                isfetching: false,
                error: action.payload,
            };
        case "REGISTRATION_START":
            return{
                user: null,
                isfetching: true,
                error: false
            };
        case "REGISTRATION_SUCCESS":
            return{
                user: action.payload,
                isfetching: false,
                error: false
            };
        case "REGISTRATION_FAILURE":
            return{
                user: null,
                isfetching: false,
                error: true
            };
        default: {
            return {
                state
            }
        }
    }
}


export default AuthReducer;