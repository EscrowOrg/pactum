import axios from "axios"
import { useState } from "react"

const useMakeReq = () => {
    
    // STATES
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState(null)
    const [isSuccessful, setIsSuccessful] = useState(false)
    const makePostRequest = async (url, formData) => {

        setLoading(true)

        try {
            const {data} = await axios.post(url, formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            setLoading(false)
            setData(data)
            setIsSuccessful(data.success)
            console.log(data.message)
        } catch(error) {
            setLoading(false)
            const errorMessage = error.response.data.message
            setError(errorMessage)
            setTimeout(()=>{setError("")}, 5000)
        }
    }
    const makeGetRequest = async (url) => {

        // loading becomes true
        setLoading(true)

        // begin consumption
        try {
            const {data} = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            setLoading(false)
            setData(data)
            setIsSuccessful(data.success)
        } catch(error) {
            setLoading(false)
            const errorMessage = error.response.data.message
            setError(errorMessage)
            setTimeout(()=>{setError("")}, 5000)
        }
    }

    return {
        loading,
        data,
        error,
        makePostRequest,
        makeGetRequest,
        isSuccessful,
    }
}

export default useMakeReq