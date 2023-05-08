import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { hasUserTokenExpired, removeUserToken } from '../../../../../serivce/cookie.service'

const PrivateRoutes = () => {

    // STATES
    const [isCleared, setIsCleared] = useState(false)


    // HANDLERS
    const clearBiscuits = useCallback(() => {
        setIsCleared(true)
        removeUserToken()
    }, [])


    // SIDE EFFECTS
    // interval to check cookie
    useEffect(()=>{
        const interval = setInterval(() => {
            hasUserTokenExpired() && clearBiscuits()
        }, (10 * 1000));

        // clear interval using cleanup function
        return () => {
            clearInterval(interval)
        }
    }, [])


    // CONDITIONAL RETURN BLOCK
    // return user to the login page, if cookie has been cleared
    if(isCleared) {
        return (
            <Navigate to='/loginIndividual'/>
        )
    }

    // RETURN BLOCK
    return (
        <Outlet/>
    )
}

export default PrivateRoutes