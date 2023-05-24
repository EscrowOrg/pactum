import { useLayoutEffect, useState } from 'react'
import { 
    useLocation,
    useNavigationType 
} from 'react-router-dom';

const useBackListener = () => {

    // STATES
    const [isBackClicked, setBackClicked] = useState(false)

    // DATA INITIALIZATION
    const location = useLocation()
    const navigationType = useNavigationType()


    // SIDE EFFECT
    useLayoutEffect(() => {
        if (navigationType === "POP" && location.key !== "default") {
            // if (someCondition === true) callback();
            // else {
            //     doSomethingElse();
            // }
            console.log("Back WAS clicked", navigationType)
            setBackClicked(true)
        } else {
            console.log("Back wasn't clicked", navigationType)
            setBackClicked(false)
        }
    
    }, [location]);

    // return the state that checks is back was clicked
    return isBackClicked

}

export default useBackListener