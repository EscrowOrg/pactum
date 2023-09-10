import React from 'react'
import { WhiteButton } from '../../../components/Button'
import PageWrapper from '../../../layouts/PageWrapper'
import { useNavigate } from 'react-router-dom'
import { ExportCircle } from 'iconsax-react'

const SellTransactionSuccess = () => {

     // DATA INITIALIZATION
     const navigate =useNavigate()

  return (
    <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-5 bg-[#450EC2] pt-16">

                {/* image and message */}
                <div className='w-[92%] flex flex-col items-center mx-auto gap-4 pt-8'>

                    <img
                    alt=""
                    src="/images/dashboard/transaction-success.png"
                    className='w-[157px]' />

                    {/* message */}
                    <div className='flex flex-col gap-3 items-center text-[#F4EFFE]'>
                        <h3 className='font-normal text-xs text-[#D2C1FA] text-center'>
                            TRANSACTION COMPLETED
                        </h3>

                        <h3 className='text-[22px] font-bold text-center'>
                           Funds have been deducted to your wallet!
                        </h3>

                        <h3 className='text-sm font-bold text-center inline-flex items-center gap-2'>
                            View Transaction History
                            <ExportCircle
                            variant='Bulk'
                            size={16}
                            color="#F4EFFE" />
                        </h3>
                    </div>
                </div>

                {/* button */}
                <div className='flex flex-col items-stretch w-[92%] mx-auto mt-auto'>
                    <WhiteButton
                    onClick={()=>navigate("/home")}
                    text="Go to Home" />
                </div>
            </div>
        </PageWrapper>
  )
}

export default SellTransactionSuccess