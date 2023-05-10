import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getUserData, hasUserTokenExpired, persistUserToken, removeUserToken } from '../../../../../serivce/cookie.service'
import useBrowserTabState from '../../../hooks/Dashboard/useBrowserTabState'
import useMakeReq from '../../../hooks/useMakeReq'
import { isEmpty } from '../../../helpers/isEmpty'
import { REFRESH_USER_TOKEN } from '../../../../../serivce/apiRoutes.service'
import { toast } from 'react-toastify'

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
            data.success === true? persistUserToken(data?.data):clearBiscuits()
        }
    }, [data])

    // interval to check cookie
    useEffect(()=>{

        // interval function
        const interval = setInterval(() => {

            if(hasUserTokenExpired) {
                if(isActive) {

                    // get new token
                    const data = getUserData()

                    makePostRequest(REFRESH_USER_TOKEN, {
                        refreshTokenRequest: {
                            userId: data.userId,
                            role: data.role,
                            token: data.token,
                            refreshToken: data.refreshToken
                        }
                    })
                } else {
                    clearBiscuits()
                }
            }
        }, (5 * 1000));

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