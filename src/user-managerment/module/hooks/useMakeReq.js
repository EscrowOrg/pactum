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
            const {data} = await axios.post(url, 
            {
                basicRegistration: {
                    email: formData.emailAddress,
                    password: formData.password
                }
            }, 
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
            console.log(error)
            console.log(data.message)
        }
    }

    return {
        loading,
        data,
        error,
        makePostRequest,
        isSuccessful
    }
}

export default useMakeReq