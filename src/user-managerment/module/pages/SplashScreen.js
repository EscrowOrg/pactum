import { useEffect } from 'react'
import PageWrapper from '../layouts/PageWrapper'
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()


    // SIDE EFFECT
    useEffect(()=>{
        const timeOutObj = setTimeout(()=>{
            navigate("/info", {
                replace: true
            })
        }, 4000)

        return () => {
            clearTimeout(timeOutObj)
        }
    }, [])

    return (
        <PageWrapper>
            <div className="flex h-full w-full bg-[#450EC2] items-center justify-center">
                
                {/* title */}
                <p className='text-2xl text-white font-bold'>
                    CoinAmix
                </p>
            </div>
        </PageWrapper>
    )
}

export default SplashScreen