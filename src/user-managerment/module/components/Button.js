import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { TransactionMinus } from 'iconsax-react';
import React from 'react';
import { SlArrowLeft } from "react-icons/sl";
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

export const WhiteButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-white rounded-[32px] text-base text-center flex items-center justify-center ${height} px-[14px] text-[#3A0CA3] tracking-wider font-bold hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const PrimaryButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[#3A0CA3] rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] text-white tracking-wider font-medium hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const InfoButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[#48A9A6] rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] text-white tracking-wider font-medium hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const PrimaryButtonLight = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[#F4EFFE] rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] text-[#3A0CA3] tracking-wider font-medium hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const CustomButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    bg="bg-[#F4EFFE]",
    height="h-16",
    textColor="text-[#3A0CA3]"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${bg} rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] ${textColor} tracking-wider font-bold hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const ErrorButton = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[#D1292D] rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] text-white tracking-wider font-medium hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
            {loading ? (
                <Spin indicator={antIcon} />
            ) : (
                text
            )}
        </button>
    )
}

export const WarningButton1 = ({
    type="button",
    disabled,
    onClick,
    loading,
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-[#FBE9EA] rounded-[32px] text-base text-center flex items-center justify-center ${height} px-[14px] text-[#D1292D] font-bold tracking-wider hover:opacity-70 transition-all duration-500 disabled:opacity-40`}>
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
    text,
    height="h-16"
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`bg-white border border-[rgb(58,12,163)] rounded-[32px] text-sm text-center flex items-center justify-center ${height} px-[14px] text-[#3A0CA3] font-body tracking-wider font-medium hover:bg-[rgba(58,12,163,0.2)] transition-all duration-500 disabled:opacity-40`}>
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

export const SkipButtonVendor = () => {

    // DATA INITIALZIATION
    const navigate = useNavigate()

    return (
        <button 
        onClick={()=>navigate('/vendon-profile')}
        className='text-[#3A0CA3] font-semibold text-sm hover:no-underline focus:no-underline hover:text-[text-[#3A0CA3] flex justify-end bg-transparent h-fit'>
            Skip
        </button>
    )
}

export const SkipButtonIndividual = () => {

    // DATA INITIALZIATION
    const navigate = useNavigate()

    return (
        <button 
        onClick={()=>navigate('/individual-profile')}
        className='text-[#3A0CA3] font-semibold text-sm hover:no-underline focus:no-underline hover:text-[text-[#3A0CA3] flex justify-end bg-transparent h-fit'>
            Skip
        </button>
    )
}

export const TransactionsListButton = () => {

    // DATA INITIALZIATION
    const navigate = useNavigate()

    return (
        <button
        onClick={()=>navigate("/portfolio/transactions")}
        className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <TransactionMinus
            size="14"
            color="#16053D" />
        </button>
    )
}