import axios from "axios";
import {LOGIN_USERS} from "./url.serice";


export const LoginCall = async (userCre, dispatch) =>{
    dispatch({
        type: "LOGIN_START"
    });
    try {
        const res = await axios.post(LOGIN_USERS, userCre);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
        
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}

// export const RegisterCall = async(userCre, dispatch) => {
//     dispatch({
//         type: "LOGIN_START"
//     });
    
// }