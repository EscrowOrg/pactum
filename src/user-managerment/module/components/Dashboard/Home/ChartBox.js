import { Diagram } from 'iconsax-react';
import React, { useState } from 'react'
import Chart from "react-apexcharts";
import Tabs, { Tab } from 'react-best-tabs';

const ChartBox = ({dataSeries}) => {

    // DATA INITIALIZATION
    const series2 = [{
        data: [
            [1344808800000,32.27],
            [1344895200000,32.10],
            [1344981600000,32.91],
            [1345068000000,33.65],
            [1345154400000,33.80],
            [1345413600000,33.92],
            [1345500000000,33.75],
            [1345586400000,33.84],
            [1345672800000,33.50],
            [1345759200000,32.26],
            [1346018400000,32.32],
            [1346104800000,32.06],
            [1346191200000,31.96],
            [1346277600000,31.46],
            [1346364000000,31.27],
            [1346709600000,31.43],
            [1346796000000,32.26],
            [1346882400000,32.79],
            [1346968800000,32.46],
            [1347228000000,32.13],
            [1347314400000,32.43],
            [1347400800000,32.42],
            [1347487200000,32.81],
            [1347573600000,33.34],
            [1347832800000,33.41],
            [1347919200000,32.57],
            [1348005600000,33.12],
            [1348092000000,34.53],
            [1348178400000,33.83],
            [1348437600000,33.41],
            [1348524000000,32.90],
            [1348610400000,32.53],
            [1348696800000,32.80],
            [1348783200000,32.44],
            [1349042400000,32.62],
            [1349128800000,32.57],
            [1349215200000,32.60],
            [1349301600000,32.68],
            [1349388000000,32.47],
            [1349647200000,32.23],
            [1349733600000,31.68],
            [1349820000000,31.51],
            [1349906400000,31.78],
            [1349992800000,31.94],
            [1350252000000,32.33],
            [1350338400000,33.24],
            [1350424800000,33.44],
            [1350511200000,33.48],
            [1350597600000,33.24],
            [1350856800000,33.49],
            [1350943200000,33.31],
            [1351029600000,33.36],
            [1351116000000,33.40],
            [1351202400000,34.01],
            [1351638000000,34.02],
            [1351724400000,34.36],
            [1351810800000,34.39],
            [1352070000000,34.24],
            [1352156400000,34.39],
            [1352242800000,33.47],
            [1352329200000,32.98],
            [1352415600000,32.90],
            [1352674800000,32.70],
            [1352761200000,32.54],
            [1352847600000,32.23],
            [1352934000000,32.64],
            [1353020400000,32.65],
            [1353279600000,32.92],
            [1353366000000,32.64],
            [1353452400000,32.84],
            [1353625200000,33.40],
            [1353884400000,33.30],
            [1353970800000,33.18],
            [1354057200000,33.88],
            [1354143600000,34.09],
            [1354230000000,34.61],
            [1354489200000,34.70],
            [1354575600000,35.30],
            [1354662000000,35.40],
            [1354748400000,35.14],
            [1354834800000,35.48],
            [1355094000000,35.75],
            [1355180400000,35.54],
            [1355266800000,35.96],
            [1355353200000,35.53],
            [1355439600000,37.56],
            [1355698800000,37.42],
            [1355785200000,37.49],
            [1355871600000,38.09],
            [1355958000000,37.87],
            [1356044400000,37.71],
            [1356303600000,37.53],
            [1356476400000,37.55],
            [1356562800000,37.30],
            [1356649200000,36.90],
            [1356908400000,37.68],
            [1357081200000,38.34],
            [1357167600000,37.75],
            [1357254000000,38.13],
            [1357513200000,37.94],
            [1357599600000,38.14],
            [1357686000000,38.66],
            [1357772400000,38.62],
            [1357858800000,38.09],
            [1358118000000,38.16],
            [1358204400000,38.15],
            [1358290800000,37.88],
            [1358377200000,37.73],
            [1358463600000,37.98],
            [1358809200000,37.95],
            [1358895600000,38.25]
        ]
    }]
    const options2 = {
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
            title: "1h"
        },
        {
            id: 2,
            title: "24h"
        },
        {
            id: 3,
            title: "7d"
        },
        {
            id: 4,
            title: "30d"
        },
        {
            id: 5,
            title: "3M"
        },
        {
            id: 6,
            title: "6M"
        },
        {
            id: 7,
            title: "1Y"
        },
    ]


    // STATES
    const [activeTab, setActiveTab] = useState(4)

    return (
        <div className='flex flex-col w-full relative'>

            {/* tab header */}
            <Tabs
            className='chart-tab'
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

            {/* chart */}
            <div className='w-full'>
                <Chart
                options={options2} 
                series={series2} 
                type="area" 
                width={"100%"} />
            </div>
        </div>
    )
}

export default ChartBox