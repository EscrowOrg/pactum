import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
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