import React, { useEffect } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton } from '../../../components/Button'
import SingleNotification from '../../../components/Dashboard/Home/SingleNotification'
import { messaging } from '../../../firebase/firebaseConfig'
import axios from 'axios'

const Notification = () => {
    useEffect(()=>{

    })

const handleMessage =()=>{
    messaging.requestPermission().then(() => {
    console.log('Notification permission granted.');
    // Get the device token
    return messaging.getToken();
  }).then((token) => {
    console.log('Device token:', token);
    // Send the token to your server to associate it with the user
     axios.post(`${VALIDATE_DEVICE_TOKEN}`, token)
    
  }).catch((error) => {
    console.error('Error obtaining permission:', error);
  });

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
                            
                            <SingleNotification
                            title='Send BTC Sucessully'
                            description='A login attempt was made from an unknown device. Change your password now.' />
                            
                            <SingleNotification
                            title='Send BTC Sucessully'
                            description='A login attempt was made from an unknown device. Change your password now.' />
                            
                            <SingleNotification
                            title='Send BTC Sucessully'
                            description='A login attempt was made from an unknown device. Change your password now.' />
                        </div>
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

export default Notification