import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {SlArrowLeft} from "react-icons/sl"
import { useNavigate } from 'react-router';

// ant icon
const antIcon = (
    <LoadingOutlined
    style={{
        fontSize: 26,
        color: 'white'
    }}
    spin />
)

export const PrimaryButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={"bg-[#3A0CA3] rounded-[32px] text-sm text-center flex items-center justify-center h-16 px-[14px] text-white font-body tracking-wider font-medium hover:opacity-70 transition-all duration-500 disabled:opacity-[0.15]"}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const SecondaryButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={"bg-white border border-[rgb(58,12,163)] rounded-[32px] text-sm text-center flex items-center justify-center h-16 px-[14px] text-[#3A0CA3] font-body tracking-wider font-medium hover:bg-[rgba(58,12,163,0.2)] transition-all duration-500 disabled:opacity-[0.15]"}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const BackButton = () => {

    // DATA INITIALZIATION
    const navigate = useNavigate()

    return(
        <button
        onClick={()=>navigate(-1)}
        className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <SlArrowLeft
            className='text-xs' />
        </button>
    )
}