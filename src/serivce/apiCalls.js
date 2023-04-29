import axios from "axios";
import BASE_URL from "./url.serice";


// Login
export const LoginCall = async (userCre, dispatch) =>{
    dispatch({
        type: "LOGIN_START"
    });
    try {
        const res = await axios.post(`${BASE_URL}/api/User/Login`, userCre, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
        console.log(err)
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}

// User Basic Registration
// export const UserBasicRegCall = async (userData, dispatch) =>{
//     dispatch({
//         type: "USER_BASIC_REG_START"
//     });
//     try {
//         const res = await axios.post(`${BASE_URL}/api/User/BasicRegistration`, userData, {
//             headers: {
//                 'accept': 'text/plain',
//                 'Content-Type': 'application/json'
//             }
//         });
//         dispatch({type: "USER_BASIC_REG_SUCCESS", payload: res.data});
//     } catch (err) {
//         console.log(err)
//         dispatch({type: "USER_BASIC_REG_FAILURE", payload: err});
//     }
// }

// export const RegisterCall = async(userCre, dispatch) => {
//     dispatch({
//         type: "LOGIN_START"
//     });
    
// }