import React, { useEffect, useState } from 'react';
import { AUTH_GET_ESTIMATE_GAS_FEE } from '../../../../../serivce/apiRoutes.service';
import { isEmpty } from '../../../helpers/isEmpty';
import useMakeReq from '../../../hooks/Global/useMakeReq';
import { PrimaryButton, WarningButton1 } from '../../Button';
import EmptyDataComp from '../../Global/EmptyDataComp';
import LoadingSpinner from '../../Global/LoadingSpinner';

const VerifyGasFee = ({
    closeModal, 
    networkId, 
    recipientAddress,
    virtualAccountId,
    amount, 
    assetId, 
    transferLoading,
    handleTransfer
}) => {

    // STATES
    const [gasFeeData, setGasFeeData] = useState(null)

    // DATA INITIALIZATION
    const {
        data,
        isSuccessful,
        error,
        getLoading,
        makeAuthGetReq,
      } = useMakeReq();

    // SIDE EFFECTS
    useEffect(() => {

        // params search object
        const params = new URLSearchParams()
        params.append("network", networkId)
        params.append("to", recipientAddress)
        params.append("virtualAccountId", virtualAccountId)
        params.append("amount", amount)
        params.append("asset", assetId)

        // query string
        const queryString = params.toString()
        const urlWithQuery = `${AUTH_GET_ESTIMATE_GAS_FEE}?${queryString}`
        
        makeAuthGetReq(urlWithQuery);
      }, []);
      useEffect(()=>{
        if(!isEmpty(data?.data)){
            setGasFeeData(data?.data)
        }
      }, [data])

    return (
        <div className='text-center flex flex-col w-full gap-5 p-5 bg-white rounded-xl'>
            {
                getLoading ? 
                <LoadingSpinner viewPortHeight="h-[20vh]" />
                : !isEmpty(gasFeeData) ? 
                <>
                    {/* texts */}
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-sm text-gray-800 font-normal'>
                            Here's the gas fee for 0.56 ETH
                        </h2>
                        <h3 className='text-2xl text-green-500 font-semibold'>
                            0.57 ETH
                        </h3>
                    </div>

                    {/* buttons */}
                    <div className='w-full grid grid-cols-2 gap-x-3 items-center'>
                        <WarningButton1
                        height='h-12'
                        text={"Cancel"}
                        onClick={closeModal} />
                        <PrimaryButton
                        onClick={()=>handleTransfer()}
                        loading={transferLoading}
                        height='h-12'
                        text={"Proceed"} />
                    </div>
                </>:
                <EmptyDataComp viewPortHeight="h-[20vh]" />
            }
        </div>
    )
}

export default VerifyGasFee