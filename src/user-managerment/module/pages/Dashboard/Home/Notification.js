import React, { useEffect, useState } from 'react'
import { AUTH_GET_USER_NOTIFICATIONS } from '../../../../../serivce/apiRoutes.service'
import { getUserData } from '../../../../../serivce/cookie.service'
import { BackButton } from '../../../components/Button'
import SingleNotification from '../../../components/Dashboard/Home/SingleNotification'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import PageWrapper from '../../../layouts/PageWrapper'

const Notification = () => {
   
    const [notifications, setNotification] = useState([])

const {data, makeAuthGetReq, isSuccessful} = useMakeReq()
const {token, userId}= getUserData();


useEffect(()=>{
  getNotification()
},[data])



const getNotification = async() =>{
    try {
        await makeAuthGetReq(`${AUTH_GET_USER_NOTIFICATIONS}/${userId}`)
       setNotification(data?.data) 
    } catch (error) {
        setNotification(error)
    }
}

return (
        <PageWrapper>

            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <h3 className='font-bold text-lg text-black'>
                        Notifications
                    </h3>

                    {/* empty */}
                    <span className='w-[5%]'>{" "}</span>
                </div>

                {/* body */}
                <div className='w-[92%] flex flex-col mx-auto gap-8'>

                    {/* notifications */}
                    <div className='w-full flex flex-col gap-3'>

                        {/* title */}
                        <h3 className='text-[#8D85A0] text-xs font-normal'>
                            TODAY
                        </h3>

                        {/* list of notifications */}
                        <div className='bg-[#FCFCFC] rounded-t-[20px] flex flex-col gap-3 py-2 px-1 w-full'>
                            {notifications?.map((notification, index)=>{
                               return(
                                <SingleNotification
                                key={index}
                                 title={notification.title}
                                 body={notification.body} 
                                 />
                               )
                            })}
                            
                        </div>
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

export default Notification