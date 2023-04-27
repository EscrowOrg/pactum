import React from 'react'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'

const Profile = () => {
    return (
        <NoTransitionWrapper>
            <div className="w-full h-full flex flex-col gap-8 px-4 py-10">
                
                Profile

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Profile