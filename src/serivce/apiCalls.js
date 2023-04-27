import axios from "axios";
import BASE_URL from "./url.serice";


export const LoginCall = async (userCre, dispatch) =>{
    dispatch({
        type: "LOGIN_START"
    });
    try {
        const res = await axios.post(`${BASE_URL}/api/User/Login`, userCre);
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