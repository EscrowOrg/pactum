// SET COOKIE
export const setCookie = (name, value, time) => {

    // setting the cookie
    document.cookie = `${name}=${value};expires=${time?.toUTCString() || null};path=/;Secure`;
}


// GET COOKIE
export const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }

    return null;
}


// DELETE COOKIE
export const deleteCookie = (name) => {
    const expiresTime = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = `${name}=;${expiresTime};path=/;Secure`;
};