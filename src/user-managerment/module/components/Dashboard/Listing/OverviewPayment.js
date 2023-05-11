import React from 'react'

const OverviewPayment = () => {

   
  return (
    <div>
        {/* PAYMENT LISTS */}
        <div className="flex justify-between mt-2 py-3 border-b border-solid">
            <div>
              <p className="font-normal text-xs text-[#8D85A0] pb-1">
                09/06/38 - 10:56AM
              </p>
              <h4 className="text-base font-bold text-black">
                #100,000.00(BTC)
              </h4>
              <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
                ASEMOTA JOEL
              </h4>
            </div>

            {/* view more button */}
            <span className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
              View More
            </span>
          </div>
    </div>
  )
}

export default OverviewPayment
