import { useState, useEffect, useCallback } from "react";

const useBrowserTabState = () => {

    // STATES
    const [isActive, setIsActive] = useState(true);


    // HANDLERS
    // user is currently on the App
    const onFocus = useCallback(() => {
        setIsActive(true)
    }, [])
    
    // User has switched away from the tab (AKA tab is hidden)
    const onBlur = useCallback(() => {
        setIsActive(false)
    }, [])


    // SIDE EFFECTS
    useEffect(() => {

        // set event listeners
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);

        // Calls onFocus when the window first loads
        onFocus();

        // remove both event listeners in the cleanup function
        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
    }, []);

    return isActive
}

export default useBrowserTabState