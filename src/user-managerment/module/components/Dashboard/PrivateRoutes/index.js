import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { CRED_EXPIRATION_TIME, getUserData, hasUserTokenExpired, persistUserToken, removeUserToken } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { REFRESH_USER_TOKEN } from '../../../../../serivce/apiRoutes.service'
import useMakeReq from '../../../hooks/Global/useMakeReq'

const PrivateRoutes = () => {

    // DATA INITIALIZATION
    const {
        data,
        makePostRequest,
        hasError
    } = useMakeReq()
    const navigate = useNavigate()


    // STATES
    const [isCleared, setIsCleared] = useState(false)


    // HANDLERS
    const clearBiscuits = useCallback(() => {
        setIsCleared(true)
        removeUserToken()
    }, [])


    // SIDE EFFECTS
    // check if refresh token return a data or has Error message
    const {token} = getUserData();
    useEffect(()=>{
        if(!isEmpty(data)){
            if(data.success === true) {
                persistUserToken(data?.data, CRED_EXPIRATION_TIME)
            } else {
                clearBiscuits()
            }
        } 

        if(hasError) {
            clearBiscuits()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, hasError])

    // implement the interval for fetching data
    useEffect(()=>{
        const intervalId = setInterval(() => {

            // user's cred
            const uData = getUserData()

            if(hasUserTokenExpired()) {
                clearBiscuits()
            } else {
                makePostRequest(REFRESH_USER_TOKEN, {
                    refreshTokenRequest: {
                        userId: uData?.userId,
                        role: uData?.role,
                        token: uData?.token,
                        refreshToken: uData?.refreshToken
                    }
                })
            }
        }, (10000));

        // clear interval using cleanup function
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    // CONDITIONAL RETURN BLOCK
    // return user to login if user isn't logged in
    if(isEmpty(getUserData())) {
        return (
            <Navigate to='/loginIndividual'/>
        )
    }

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