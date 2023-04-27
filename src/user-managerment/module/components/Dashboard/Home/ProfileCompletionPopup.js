import { ArrowRight2 } from 'iconsax-react'
import React from 'react'

const ProfileCompletionPopup = () => {
    return (
        <div className='bg-[#48A9A6] w-full py-3 px-4 flex items-center gap-4 justify-center rounded'>

            <h3 className='font-normal text-xs text-[#F6FBFB] w-[90%]'>
                Your profile is 60% complete. Complete your profile to increase your transaction limit. <span className='text-sm font-bold'>Complete now</span>.
            </h3>

            {/* icon */}
            <ArrowRight2
            size="24"
            color="#F4EFFE"
            variant="TwoTone" />
        </div>
    )
}

export default ProfileCompletionPopup