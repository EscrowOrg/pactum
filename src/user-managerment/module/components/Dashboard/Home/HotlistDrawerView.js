import React from 'react'
import Tabs,{Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import MarketList from './MarketList'

const HotlistDrawerView = () => {
    return (
        <div className='flex flex-col w-full h-full'>

            {/* Tabs Container */}
            <Tabs 
            activeTab="1" >
                
                {/* Tab 1 */}
                <Tab 
                title={"Starred"}>
                    <MarketList />
                </Tab>

                {/* Tab 2 */}
                <Tab 
                title={"All"}>
                    <MarketList />
                </Tab>

                {/* Tab 3 */}
                <Tab 
                title={"Gainers"}>
                    <MarketList />
                </Tab>

                {/* Tab 4 */}
                <Tab 
                title={"Losers"}>
                    <MarketList />
                </Tab>
            </Tabs> 
        </div>
    )
}

export default HotlistDrawerView