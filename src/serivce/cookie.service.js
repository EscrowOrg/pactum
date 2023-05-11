import { 
    deleteCookie, 
    getCookie, 
    setCookie 
} from "../user-managerment/module/helpers/cookieMethods"
import { isEmpty } from "../user-managerment/module/helpers/isEmpty";



// service to store/persist the userdata token
export const persistUserToken = (value) => {

    // expiry time
    const expires = new Date();
    const threshold = new Date(expires.getTime() + (60 * 1000));

    setCookie("userData", JSON.stringify(value), threshold)
    setCookie("dataTimeline", (threshold.toUTCString() || null), threshold)
}



// service to remove the userdata token
export const removeUserToken = () => {
    deleteCookie("userData")
    deleteCookie("dataTimeline")
}



// service that return true if the persisted userdata token has expired
export const hasUserTokenExpired = () => {

    const timeLine = getCookie("dataTimeline")

    if(isEmpty(timeLine)) {
        return true
    }

    return ((new Date().getTime() + 3000) > new Date(timeLine).getTime())
}



// return user's ID
export const getUserId = () => {
    const stringifyData = getCookie("userData")
    if(isEmpty(stringifyData)) {
        return null
    }
    const uData = JSON.parse(stringifyData)
    return uData.userId     
}



// return user's role
export const getUserRole = () => {
    const stringifyData = getCookie("userData")
    if(isEmpty(stringifyData)) {
        return null
    }
    const uData = JSON.parse(stringifyData)
    return uData.role
}



// return user's Data
export const getUserData = () => {
    const stringifyData = getCookie("userData")
    if(isEmpty(stringifyData)) {
        return null
    }
    
    return JSON.parse(stringifyData)
}