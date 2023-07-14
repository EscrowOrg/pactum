import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isEmpty } from "../../helpers/isEmpty";
import { getUserId } from "../../../../serivce/cookie.service";
import { useEffect, useState } from "react";

const AuthRoutes = () => {

    // STATES
    const [isExpired, setIsExpired] = useState(false)
    
    // DATA INITIALIZATION
    const location = useLocation(); // <-- get current location being accessed

    // SIDE EFFECTS
    useEffect(()=>{
        const intervalId = setInterval(() => {
            if(isEmpty(getUserId())) {
                setIsExpired(true)
            }
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (!isExpired)
        ? <Outlet />
        :(
            <Navigate
                to={'/loginIndividual'}
                state={{ from: location }} // <-- pass in route state
                replace
            />
        );
    };

export default AuthRoutes