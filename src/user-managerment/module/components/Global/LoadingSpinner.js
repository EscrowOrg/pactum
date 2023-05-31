import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

    // ant-design spinner icon
    const antIcon = (
        <LoadingOutlined
        style={{
            fontSize: 26,
            color: '#3A0CA3'
        }}
        spin />
    )

const LoadingSpinner = ({viewPortHeight="h-[25vh]", bgColor="bg-white"}) => {

    return (
        <div className={`flex ${bgColor} rounded-md m-auto w-full ${viewPortHeight} justify-center items-center`}>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default LoadingSpinner