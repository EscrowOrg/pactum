import { useState, useEffect } from 'react'
import Tabs,{Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import MarketList from './MarketList'
import useMakeReq from '../../../hooks/useMakeReq';
import { isEmpty } from '../../../helpers/isEmpty';
import { GET_CURRENCIES } from '../../../../../serivce/apiRoutes.service';

const HotlistDrawerView = () => {

    // DATA INITIALIZATION
    const {
        data,
        loading,
        makeGetRequest
    } = useMakeReq()


    // STATES
    const [cryptoAssets, setCryptoAssets] = useState([])


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(GET_CURRENCIES)
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
                title={"Starred"}>
                    <MarketList
                    data={cryptoAssets}
                    loading={loading} />
                </Tab>

                {/* Tab 2 */}
                <Tab 
                title={"All"}>
                    <MarketList                    
                    data={cryptoAssets}
                    loading={loading} />

                </Tab>

                {/* Tab 3 */}
                <Tab 
                title={"Gainers"}>
                    <MarketList                    
                    data={cryptoAssets}
                    loading={loading} />
                </Tab>

                {/* Tab 4 */}
                <Tab 
                title={"Losers"}>
                    <MarketList                    
                    data={cryptoAssets}
                    loading={loading} />
                </Tab>
            </Tabs> 
        </div>
    )
}

export default HotlistDrawerView