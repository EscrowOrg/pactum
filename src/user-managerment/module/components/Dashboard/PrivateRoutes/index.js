import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isEmpty } from '../../../helpers/isEmpty'
import { deleteCookie, getCookie } from '../../../helpers/cookieMethods'
import useBrowserTabState from '../../../hooks/Dashboard/useBrowserTabState'

const PrivateRoutes = () => {

    // STATES
    const [isCleared, setIsCleared] = useState(false)


    // DATA INITIALIZATION
    const retrieved = getCookie("userData")
    const tLine = getCookie("tLine")
    const usrData = isEmpty(retrieved)?"":JSON.parse(retrieved)
    const isActive = useBrowserTabState()


    // HANDLERS
    const clearBiscuits = () => {
        if(isActive) {
            // refresh the token
        } else {
            setIsCleared(true)
            deleteCookie("userData")
            deleteCookie("tLine")
        }
    }



    // SIDE EFFECTS
    // interval to check cookie
    useEffect(()=>{
        const interval = setInterval(() => {
            new Date().getTime() > new Date(tLine).getTime() && clearBiscuits()
        }, (10 * 1000));

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

    return (
        !(isEmpty(usrData))? <Outlet/> : <Navigate to='/loginIndividual'/>
    )
}

export default PrivateRoutes