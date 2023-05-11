import { persistUserToken, removeUserToken } from "../serivce/cookie.service";

const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGOUT":

            // clear persisted data upon logout
            removeUserToken()

            // return new state value
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

            // persist data upon login
            persistUserToken(action.payload.data)

            // return new state value
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