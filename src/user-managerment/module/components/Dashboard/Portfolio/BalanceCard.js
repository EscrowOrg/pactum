import React from 'react'
import { CustomButton } from '../../Button'

const BalanceCard = ({
    bgColor="bg-[#3A0CA3]",
    textColor="text-[#F4EFFE]",
    btnBgColor="bg-[#6D34F0]",
    btnTextColor='text-[#F4EFFE]',
    buttonText,
    title,
    padding="p-6",
    onClick
}) => {
    return (
        <div className={`flex flex-col w-full ${padding} gap-4 rounded-lg ${bgColor}`}>

            {/* text */}
            <div className={`flex flex-col items-center text-center gap-2 ${textColor}`}>
                <h3 className='text-xs font-normal'>
                    {title}
                </h3>
                <h3 className='text-[22px] font-bold'>
                    $0.00
                </h3>
                <h3 className='text-xs font-semibold'>
                    BTC Equivalent: 0.0000
                </h3>
            </div>

            <div className='flex flex-col items-stretch w-full'>
                <CustomButton
                onClick={onClick}
                height='h-10'
                bg={btnBgColor}
                textColor={btnTextColor}
                text={buttonText} />
            </div>
        </div>  
    )
}

export default BalanceCard