import axios from "axios"
import { useState } from "react"
import { getUserData } from "../../../../serivce/cookie.service"
import api from "../../../../serivce/api"

const useMakeReq = () => {
    
    // STATES
    const [loading, setLoading] = useState(false)
    const [getLoading, setGetLoading] = useState(true)
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(false)
    const [data, setData] = useState(null)
    const [isSuccessful, setIsSuccessful] = useState(false)
    
    // MAKING POST REQUEST
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
                }
            })
            setGetLoading(false)
            setData(data)
            setIsSuccessful(data.success)
        } catch(error) {
            console.log(error)
            setGetLoading(false)
            const errorMessage = error.response.data?.message && error.response.data?.message
            setError(errorMessage)
            setTimeout(()=>{setError("")}, 5000)
        }
    }
    
    // MAKING AUTHENTICATED POST REQUEST
    const makeAuthPostReq = async (url, formData) => {

        setLoading(true)

        try {
            const {data} = await api.post(url, formData)
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

    // MAKING AUTHENTICATED GET REQUEST
    const makeAuthGetReq = async (url) => {

        // loading becomes true
        setGetLoading(true)

        // begin consumption
        try {
            const {data} = await api.get(url)
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
        hasError,
        makeAuthPostReq,
        makeAuthGetReq
    }
}

export default useMakeReq