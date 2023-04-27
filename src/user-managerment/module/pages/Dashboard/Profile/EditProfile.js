import React from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton } from '../../../components/Button'
import { Briefcase, Call, Sms } from 'iconsax-react'
import { TextInput } from '../../../components/Input'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-8 py-5 overflow-auto">

                {/* HEADER */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    <BackButton />

                    {/* title */}
                    <h4 className='font-bold text-lg text-black'>
                        Profile
                    </h4>

                    <span className='w-5' />
                </div>

                {/* BODY */}
                <div className='flex flex-col gap-6 min-h-fit pb-5 w-full'>

                    {/* profile photo */}
                    <div className='w-full flex flex-col items-center gap-2 px-4'>

                        {/* image */}
                        <div className='h-[64px] w-[64px] rounded-[50%] bg-[#3A0CA3] inline-flex items-center justify-center'>
                            <img
                            alt=""
                            src="/images/dashboard/profile-image.png"
                            className='h-full w-full rounded-[50%]' />
                        </div>

                        {/* texts */}
                        <h3 className='text-[#3A0CA3] text-xs font-semibold'>
                            Tap to change photo
                        </h3>
                    </div>
                    
                    {/* Profile details */}
                    <div className='flex flex-col gap-5 mt-2 px-5'>

                        {/* caption */}
                        <h3 className='font-bold text-base text-black'>
                            Profile Details
                        </h3>

                        {/* container */}
                        <div className='flex flex-col w-full gap-5'>

                            {/* first item */}
                            <div className='flex items-center justify-between gap-1 w-full'>

                                {/* icon container */}
                                <div className='flex items-center gap-2'>

                                    <Briefcase
                                    variant='Bulk'
                                    size={16}
                                    color='#48A9A6' />

                                    <h3 className='text-black text-x font-normal'>
                                        Company Name
                                    </h3>
                                </div>

                                {/* value */}
                                <h4 className='font-semibold text-sm text-black'>
                                    Pactum Ltd
                                </h4>
                            </div>

                            {/* second item */}
                            <div className='flex items-center justify-between gap-1 w-full'>

                                {/* icon container */}
                                <div className='flex items-center gap-2'>

                                    <Sms
                                    variant='Bulk'
                                    size={16}
                                    color='#48A9A6' />

                                    <h3 className='text-black text-x font-normal'>
                                        Email Address
                                    </h3>
                                </div>

                                {/* value */}
                                <h4 className='font-semibold text-sm text-black'>
                                    admin@pactum.app
                                </h4>
                            </div>

                            {/* third item */}
                            <div className='flex items-center justify-between gap-1 w-full'>

                                {/* icon container */}
                                <div className='flex items-center gap-1'>

                                    <Call
                                    variant='Bulk'
                                    size={16}
                                    color='#48A9A6' />

                                    <h3 className='text-black text-x font-normal'>
                                        Phone Number
                                    </h3>
                                </div>

                                {/* value */}
                                <h4 className='font-semibold text-sm text-black'>
                                    +234-4567928312
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* message */}
                    <div className='bg-[#FAFAFB] py-2 px-6 font-normal text-sm text-[#3C3746]'>
                        To make changes to the info above, contact the admin via email @pactum.app
                    </div>

                    {/* form */}
                    <form
                    className="flex flex-col gap-5 px-4 w-full h-full"
                    onSubmit={(e) => e.preventDefault()}>

                        {/* company's size container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Company Size
                            </span>

                            {/* input field */}
                            <TextInput
                            name={"companySize"}
                            type="number"
                            placeholderText={"Enter company size"} />
                        </label>

                        {/* company's physical address (optional) container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Company Physical Address
                            </span>

                            {/* input field */}
                            <TextInput
                            name={"address"}
                            placeholderText={"Enter address"} />
                        </label>

                        {/* container */}
                        <div className="flex w-full flex-col mt-5 items-center">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                onClick={()=>navigate("/individual-more-info")}
                                text={"Continue"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}

export default EditProfile