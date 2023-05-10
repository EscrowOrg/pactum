const useValidateToken = () => {
    
    // DATA INITIALIZATION
    const isActive = useBrowserTabState()

    
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

export default useValidateToken