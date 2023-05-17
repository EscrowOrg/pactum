import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { CRED_EXPIRATION_TIME, getUserData, hasUserTokenExpired, persistUserToken, removeUserToken } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { REFRESH_USER_TOKEN } from '../../../../../serivce/apiRoutes.service'
import useMakeReq from '../../../hooks/Global/useMakeReq'

const PrivateRoutes = () => {

    // DATA INITIALIZATION
    const {
        data,
        error,
        makePostRequest,
    } = useMakeReq()


    // STATES
    const [isCleared, setIsCleared] = useState(false)


    // HANDLERS
    const clearBiscuits = useCallback(() => {
        setIsCleared(true)
        removeUserToken()
    }, [])


    // SIDE EFFECTS
    useEffect(()=>{
        if(!isEmpty(data)){
            if(data.success === true) {
                persistUserToken(data?.data, CRED_EXPIRATION_TIME)
            } else {
                clearBiscuits()
            }
        } 

        if(error) {
            console.log(error)
            clearBiscuits()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

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