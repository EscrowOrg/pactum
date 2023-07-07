import axios from "axios"
import { useState } from "react"
import { getUserData } from "../../../../serivce/cookie.service"

const useMakeReq = () => {
    
    // STATES
    const [loading, setLoading] = useState(false)
    const [getLoading, setGetLoading] = useState(true)
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(false)
    const [data, setData] = useState(null)
    const [isSuccessful, setIsSuccessful] = useState(false)
   //const {token} = getUserData();
   //console.log(token);
    // MAKING POST REQUEST
    const makePostRequest = async (url, formData) => {

        setLoading(true)

        try {
            const {token} = getUserData()
            const {data} = await axios.post(url, formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ${token}`,
                }
            })
            setLoading(false)
            setData(data)
            setIsSuccessful(data.success)
        } catch(error) {
            console.log(error)
            setLoading(false)
            const errorMessage = error.response.data.message
            setError(errorMessage)
            setHasError(true)
            setTimeout(()=>{
                setError("")
            }, 5000)
        }
    }

    // MAKING GET REQUEST
    const makeGetRequest = async (url) => {

        // loading becomes true
        setGetLoading(true)

        // begin consumption
        try {
            const {token} =getUserData()
            const {data} = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ${token}`,
                }
            })
            setGetLoading(false)
            setData(data)
            setIsSuccessful(data.success)
        } catch(error) {
            console.log(error)
            setGetLoading(false)
            const errorMessage = error.response.data.message
            setError(errorMessage)
            setTimeout(()=>{setError("")}, 5000)
        }
    }

    return {
        loading,
        getLoading,
        data,
        error,
        makePostRequest,
        makeGetRequest,
        isSuccessful,
        hasError
    }
}

export default useMakeReq