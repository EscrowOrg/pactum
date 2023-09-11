import React, { useState } from 'react'
import PageWrapper from '../layouts/PageWrapper'
import SkipButton from '../components/SkipButton'
import MultiWalletView from '../components/MultiWalletView'

const Info = () => {

    // STATES
    const [pages, setPages] = useState(1)


    // HANDLERS
    const onNextClick = () => {
        setPages(pages+1)
    }

    // DATA INITIALIZATION
    const pageSlides = [
        <MultiWalletView
        title={"Multi-wallet"}
        message={"Create multiple wallets for USDT,BTC,ETH and USDC"}
        buttonText={"Next"}
        onNext={onNextClick} />,

        // <MultiWalletView
        // title={"Swap"}
        // message={"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. . "}
        // buttonText={"Next"}
        // onNext={onNextClick} />,

        <MultiWalletView
        title={"Escrow service"}
        message={"All P2P orders on our system are secured by escrow"}
        buttonText={"Proceed to Sign Up"}
        path={"/onboradings"} />,
    ]

    return (
        <PageWrapper>

            <div className='flex flex-col w-full gap-4 bg-white px-4 h-full py-12 relative'>

                {/* skip button */}
                <SkipButton />

                {/* multi wallet */}
                {
                    pageSlides[pages-1]
                }
            </div>
        </PageWrapper>
    )
}

export default Info