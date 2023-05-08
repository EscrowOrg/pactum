import { Progress } from 'antd'
import { useEffect, useState } from 'react'

const CircularProgress = ({percent = 1}) => {

    // STATES
    const [percentage, setPercentage] = useState(100)


    // SIDE EFFECTS
    useEffect(()=>{
        setPercentage(percent)
    }, [])

    return (
        <Progress
        type="circle"
        strokeColor={"#3A0CA3"}
        className='small-circular-progress'
        size={20}
        trailColor='#F4EFFE'
        strokeWidth={14}
        percent={percentage}
        format={(percent, successPercent)=>percent?`${percent}%`:successPercent && "100%"}
        success={{
            percent: percentage===100?percentage:null,
            strokeColor: "#10B981"
        }} />
    )
}

export default CircularProgress