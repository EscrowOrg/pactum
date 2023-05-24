import { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import Tabs, { Tab } from 'react-best-tabs';
import { isEmpty } from '../../../helpers/isEmpty';
import useMakeReq from '../../../hooks/Global/useMakeReq';
import { COIN_GECKO_BASE } from '../../../../../serivce/url.serice';
import LoadingSpinner from '../../Global/LoadingSpinner';
import EmptyDataComp from '../../Global/EmptyDataComp';
import { roundToN } from '../../../helpers/roundToN';

const ChartBox = ({ assetId }) => {

    // STATES
    const [activeTab, setActiveTab] = useState(1)
    const [chartData, setChartData] = useState([])


    // DATA INITIALIZATION
    const chartOption = {
        chart: {
            // animations: {
            //     enabled: true,
            //     easing: 'easeinout',
            //     speed: 800,
            //     animateGradually: {
            //         enabled: true,
            //         delay: 150
            //     },
            //     dynamicAnimation: {
            //         enabled: true,
            //         speed: 350
            //     }
            // },
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            },
            toolbar: {
                show: false
            },
        },
        // annotations: {
        //     yaxis: [{
        //         y: 30,
        //         borderColor: '#999',
        //         label: {
        //             show: true,
        //             text: 'Support',
        //             style: {
        //                 color: "#fff",
        //                 background: '#00E396'
        //             }
        //         }
        //     }],
        //     xaxis: [{
        //         x: new Date('14 Nov 2012').getTime(),
        //         borderColor: '#999',
        //         yAxisIndex: 0,
        //         label: {
        //         show: true,
        //         text: 'Rally',
        //             style: {
        //                 color: "#fff",
        //                 background: '#775DD0'
        //             }
        //         }
        //     }]
        // },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
            strokeColors: '#EB9B00',
        },
        xaxis: {
            type: 'datetime',
            // min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        yaxis: {
            tickAmount: 6,
            labels: {
                formatter: (value)=> { return `$${new Intl.NumberFormat('en-US').format(roundToN(value, 0))}`}
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
    }
    const tabsHeadData = [
        {
            id: 1,
            title: "24h"
        },
        {
            id: 2,
            title: "7d"
        },
        {
            id: 3,
            title: "30d"
        },
        {
            id: 4,
            title: "3M"
        },
        {
            id: 5,
            title: "6M"
        },
        {
            id: 6,
            title: "1Y"
        },
    ]
    const dayEquiv = [
        1,7,30,90,180,365
    ]
    const {
        data,
        getLoading,
        makeGetRequest
    } = useMakeReq()


    // SIDE EFFECTS
    useEffect(()=>{

        // params object
        const params = new URLSearchParams();
        params.append('vs_currency', 'usd');
        params.append('days', `${dayEquiv[activeTab-1]}`);
        params.append('interval', `${dayEquiv[activeTab-1]===1?"hourly":"daily"}`);
        
        // contructing request url
        const queryString = params.toString();
        const apiUrl = `${COIN_GECKO_BASE}/api/v3/coins/${assetId}/market_chart`
        const urlWithQuery = `${apiUrl}?${queryString}`

        // making GET request
        makeGetRequest(urlWithQuery)
    }, [activeTab])

    // check for data presence
    useEffect(()=>{
        if(!isEmpty(data)) {
            setChartData([
                {
                    data: data.prices
                }
            ])
        }
    }, [data])

    return (
        <div className='flex flex-col w-full relative'>

            {/* tab header */}
            <div className='w-[92%] mx-auto'>
                <Tabs
                className='chart-tab w-[92%] mx-auto'
                onClick={(event, tab) => setActiveTab(tab)}
                activeTab={activeTab}>

                    {
                        tabsHeadData.map(tab=>(
                            <Tab
                            key={tab.id}
                            title={tab.title}>
                                {""}
                            </Tab>
                        ))
                    }

                </Tabs>
            </div>

            {/* chart */}
            <div className='w-full pr-2 pl-0.5'>
                {   
                    getLoading?
                    <div className='w-[92%] mx-auto'>
                        <LoadingSpinner
                        bgColor='bg-gray-100'
                        viewPortHeight='h-[30vh]' />
                    </div>:
                    !isEmpty(chartData)?
                        <Chart
                        options={chartOption} 
                        series={chartData} 
                        type="area" 
                        width={"100%"} />:
                    <div className='w-[92%] mx-auto'>
                        <EmptyDataComp
                        bgColor='bg-gray-100'
                        viewPortHeight='h-[30vh]' />
                    </div>
                }
            </div>
        </div>
    )
}

export default ChartBox