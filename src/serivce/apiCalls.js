import axios from "axios";
import { LOGIN_USER } from "./apiRoutes.service";


// Login
export const LoginCall = async (userCre, dispatch) =>{
    dispatch({
        type: "LOGIN_START"
    });
    try {
        const res = await axios.post(LOGIN_USER, 
        {
            loginRequest: {
                email: userCre.emailAddress,
                password: userCre.password
            }
        }, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        setTimeout(()=>{
            dispatch({type: "LOGIN_SUCCESS_CLEAR", payload: res.data})
        }, 3000)
    } catch (err) {
        console.log(err)
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}

// Logout
export const Logout = (dispatch) => {
    dispatch({
        type: "LOGOUT"
    })
}

