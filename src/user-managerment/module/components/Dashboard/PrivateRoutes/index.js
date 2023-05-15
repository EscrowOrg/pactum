import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getUserData, hasUserTokenExpired, persistUserToken, removeUserToken } from '../../../../../serivce/cookie.service'
import useBrowserTabState from '../../../hooks/Dashboard/useBrowserTabState'
import useMakeReq from '../../../hooks/useMakeReq'
import { isEmpty } from '../../../helpers/isEmpty'
import { REFRESH_USER_TOKEN } from '../../../../../serivce/apiRoutes.service'

const PrivateRoutes = () => {

    // DATA INITIALIZATION
    const isActive = useBrowserTabState()
    const {
        data,
        makePostRequest,
        isSuccessful
    } = useMakeReq()


    // STATES
    const [isCleared, setIsCleared] = useState(false)


    // HANDLERS
    const clearBiscuits = useCallback(() => {
        setIsCleared(true)
        removeUserToken()
    }, [])


    // SIDE EFFECTS
    // if fetching refresh token fails, Log user out
    useEffect(()=>{
        if(!isEmpty(data)){
            if(data.success === true) {
                persistUserToken(data?.data, 10 * 1000)
            } else {
                clearBiscuits()
            }
        }
    }, [data])

    // interval to check cookie
    useEffect(()=>{

        // interval function
        const intervalId = setInterval(() => {

            // check if token has expired
            if(hasUserTokenExpired()===true) {

                const uData = getUserData()

                makePostRequest(REFRESH_USER_TOKEN, {
                    refreshTokenRequest: {
                        userId: uData.userId,
                        role: uData.role,
                        token: uData.token,
                        refreshToken: uData.refreshToken
                    }
                })
            }
        }, (1000));

        // clear interval using cleanup function
        return () => {
            clearInterval(intervalId)
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