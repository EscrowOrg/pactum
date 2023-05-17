import { useState, useEffect } from 'react'
import Tabs,{Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import MarketList from './MarketList'
import useMakeReq from '../../../hooks/Global/useMakeReq';
import { isEmpty } from '../../../helpers/isEmpty';
import { GET_COIN_MARKETS, GET_CURRENCIES } from '../../../../../serivce/apiRoutes.service';

const HotlistDrawerView = () => {

    // DATA INITIALIZATION
    const {
        data,
        getLoading,
        makeGetRequest
    } = useMakeReq()


    // STATES
    const [cryptoAssets, setCryptoAssets] = useState([])


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(GET_COIN_MARKETS)
    }, [])
    useEffect(()=>{
        if(!isEmpty(data)) {
            setCryptoAssets(data)
        }
    }, [data])
    return (
        <div className='flex flex-col w-full h-full'>

            {/* Tabs Container */}
            <Tabs 
            activeTab="1" >

                {/* Tab 1 */}
                <Tab 
                title={"All"}>
                    <MarketList                    
                    data={cryptoAssets}
                    loading={getLoading} />

                </Tab>

                {/* Tab 2 */}
                <Tab 
                title={"Gainers"}>
                    <MarketList                    
                    data={cryptoAssets.filter((asset=>asset.price_change_percentage_1h_in_currency > 0))}
                    loading={getLoading} />
                </Tab>

                {/* Tab 3 */}
                <Tab 
                title={"Losers"}>
                    <MarketList                    
                    data={cryptoAssets.filter((asset=>asset.price_change_percentage_1h_in_currency < 0))}
                    loading={getLoading} />
                </Tab>
            </Tabs> 
        </div>
    )
}

export default HotlistDrawerView