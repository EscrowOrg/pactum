import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import { Bank, Document, Like1, Lock1, Logout, Messages, ProfileCircle, Receipt1, Security, Star1, TableDocument } from 'iconsax-react'
import SettingOptionCards from '../../../components/Dashboard/Profile/SettingOptionCards'
import UnverifiedLabel from '../../../components/Dashboard/Profile/UnverifiedLabel'
import { Link } from 'react-router-dom'
import { Logout as logUserOut } from '../../../../../serivce/apiCalls'
import { useContext } from 'react'
import { AuthContext } from '../../../../../context/AuthContext'
import { deleteCookie } from '../../../helpers/cookieMethods'


const Profile = () => {

    // DATA INITIALIZATION
    const {dispatch} = useContext(AuthContext)


    // HANDLERS
    const handleLogout = () => {
        // Cookies.remove('userData')
        deleteCookie("userData")
        logUserOut(dispatch)
    }


    return (  
        <NoTransitionWrapper>
            <div className="w-full h-full flex flex-col gap-8 py-5 overflow-auto">
                                
                {/* HEADER */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* title */}
                    <h4 className='text-[22px] font-bold text-black'>
                        @pacpac
                    </h4>

                    {/* user button */}
                    <div className='flex items-center bg-[#F4EFFE] gap-1 px-3 rounded-[32px] h-10' onClick={handleLogout}>

                    <Logout
                        color='#3A0CA3'
                        size={18}
                        variant='TwoTone'  />

                            <a href='/loginIndividual' >
                        <h4 className='text-sm font-bold text-[#3A0CA3]' >
                            Logout
                        </h4> </a>
                    </div>
                </div>
                
                {/* BODY */}
                <div className='flex flex-col gap-6 w-full min-h-fit pb-20 px-4'>

                    {/* profile photo */}
                    <div className='w-full flex flex-col items-center gap-2'>

                        {/* image */}
                        <div className='h-[64px] w-[64px] rounded-[50%] bg-[#3A0CA3] inline-flex items-center justify-center'>
                            <img
                            alt=""
                            src="/images/dashboard/profile-image.png"
                            className='h-full w-full rounded-[50%]' />
                        </div>

                        {/* texts */}
                        <div className='flex flex-col gap-1 items-center'>

                            {/* name */}
                            <h4 className='text-base font-semibold text-black'>
                                Pactum Ltd
                            </h4>

                            {/* edit profile button */}
                            <Link
                            to="/profile/edit-profile"
                            className='text-[#48A9A6] flex items-center bg-[#F6FBFB] justify-center px-4 rounded-[32px] h-10 hover:no-underline'>
                                Edit Profile
                            </Link>
                        </div>
                    </div>

                    {/* account group */}
                    <div className='flex flex-col gap-3 w-full'>

                        {/* title */}
                        <h4 className='text-[#8D85A0] font-normal text-xs'>
                            ACCOUNT
                        </h4>

                        {/* container */}
                        <div className='p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg'>

                            <SettingOptionCards
                            Icon={Security}
                            title={"Identity Verification"}>
                                <UnverifiedLabel />
                            </SettingOptionCards>

                            <SettingOptionCards
                            Icon={ProfileCircle}
                            title={"My Users"} />

                            <SettingOptionCards
                            Icon={Bank}
                            title={"Banks"} />

                            <SettingOptionCards
                            Icon={Receipt1}
                            title={"Transactions"} />

                            <SettingOptionCards
                            Icon={Lock1}
                            title={"Change Password"} />

                            <SettingOptionCards
                            Icon={Lock1}
                            title={"Change Pin"} />
                        </div>
                    </div>

                    {/* legal group */}
                    <div className='flex flex-col gap-3 w-full'>

                        {/* title */}
                        <h4 className='text-[#8D85A0] font-normal text-xs'>
                            SUPPORT
                        </h4>

                        {/* container */}
                        <div className='p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg'>

                            <SettingOptionCards
                            Icon={Like1}
                            title={"Recommend Pactum"} />

                            <SettingOptionCards
                            Icon={Star1}
                            title={"Review on Playstore"} />

                            <SettingOptionCards
                            Icon={Messages}
                            title={"Send us a Chat"} />
                        </div>
                    </div>

                    {/* support group */}
                    <div className='flex flex-col gap-3 w-full'>

                        {/* title */}
                        <h4 className='text-[#8D85A0] font-normal text-xs'>
                            LEGAL
                        </h4>

                        {/* container */}
                        <div className='p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg'>

                            <SettingOptionCards
                            Icon={Document}
                            title={"Terms & Conditions"} 
                            pathTo="/profile/terms-and-conditions"/>

                            <SettingOptionCards
                            Icon={TableDocument}
                            title={"Privacy Policy"}
                            pathTo="/profile/privacy-policy" />
                        </div>
                    </div>
                </div>

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Profile