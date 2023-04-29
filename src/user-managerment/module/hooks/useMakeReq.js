import axios from "axios"
import { useState } from "react"
import BASE_URL from "../../../serivce/url.serice"

const useMakeReq = (url, postData) => {
    
    // STATES
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState(null)
    const makePostRequest = async () => {
        setLoading(true)
        console.log(postData)
        try {
            const response = await axios.post(`${BASE_URL}/api/User/BasicRegistration`, postData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                }
            })
            setLoading(false)
            setData(response.data)
        } catch(error) {
            setLoading(false)
            console.log(error)
        }
    }

    // MAKING HTTP REQUEST
    // setLoading(true) 
    // axios.post(`${BASE_URL}${url}`, postData, {
    //     headers: {
    //         'accept': 'text/plain',
    //         'Content-Type': 'application/json'
    //     }
    // }).then((response)=>{
    //     setLoading(false)
    //     setData(response.data)
    // }, (error) => {
    //     setLoading(false)
    //     console.log(error)
    // })

    return {
        loading,
        data,
        error,
        makePostRequest
    }
}

export default useMakeReq