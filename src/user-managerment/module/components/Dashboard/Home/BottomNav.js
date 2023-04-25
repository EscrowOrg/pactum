import React from 'react'
import ActiveLink from './ActiveLink'
import { Home3, Profile, TableDocument, Wallet2 } from 'iconsax-react'

const BottomNav = () => {
    return (
        <div className='w-full fixed bottom-0 right-[50%] translate-x-[50%] [box-shadow:0_-7px_17px_rgba(0,0,0,.1126)] max-w-md bg-white'>

            {/* container */}
            <div className='w-[92%] mx-auto h-[75px] flex items-center justify-center'>
                <div className='w-full flex items-center gap-3 justify-center bg-white'>

                    {/* home */}
                    <ActiveLink
                    to={"/home"}
                    text={"Home"}
                    Icon={Home3} />

                    {/* portfolio */}
                    <ActiveLink
                    to={"/portfolio"}
                    text={"Portfolio"}
                    Icon={Wallet2} />

                    {/* listing */}
                    <ActiveLink
                    to={"/listing"}
                    text={"Settings"}
                    Icon={TableDocument} />

                    {/* settings */}
                    <ActiveLink
                    to={"/profile"}
                    text={"Profile"}
                    Icon={Profile} />
                </div>   
            </div>      
        </div>
    )
}

export default BottomNav