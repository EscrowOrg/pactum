import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isEmpty } from "../../helpers/isEmpty";
import { getUserId } from "../../../../serivce/cookie.service";

const AuthRoutes = () => {
    
    // DATA INITIALIZATION
    const location = useLocation(); // <-- get current location being accessed

    return (!isEmpty(getUserId()))
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