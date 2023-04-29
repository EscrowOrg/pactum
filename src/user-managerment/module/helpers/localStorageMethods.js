export const saveToLocalStorage = (keyStr, value) => {
    localStorage.setItem(keyStr, JSON.stringify(value))
}

export const getFromLocalStorage = (keyStr) => {
    const item = JSON.parse(localStorage.getItem(keyStr))
    return item || ""
}

export const deleteItemFromLocalStorage = (keyStr) => {
    localStorage.removeItem(keyStr)
}

export const clearAllLocalStorageInstaces = () => {
    localStorage.clear()
}