// LOGIN
export const LoginStart = (userCre) =>({
    type: "LOGIN_START",
})

export const LoginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = (error) =>({
    type: "LOGIN_FAILURE",
    payload: error
})

// USER BASIC REGISTRATION
export const UserBasicRegStart = (userCre) =>({
    type: "USER_BASIC_REG_START",
})

export const UserBasicRegSuccess = (user) =>({
    type: "USER_BASIC_REG_SUCCESS",
    payload: user
})

export const UserBasicRegFailure = (error) =>({
    type: "USER_BASIC_REG_FAILURE",
    payload: error
})

// export const UploadStart = (file)=>({
//     type: "UPLOAD_START",
// })

// export const UploadSuccess = (file) =>({
//     type: "UPLOAD_SUCCESS ",
//     payload: file
// })

// export const UploadFailure = (error) =>({
//     type: "UPLOAD_FAILURE",
//     payload: error
// })
