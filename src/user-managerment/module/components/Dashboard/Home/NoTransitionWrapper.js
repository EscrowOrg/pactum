import React from 'react'

const NoTransitionWrapper = ({children}) => {
    return (
        <div className="h-screen overflow-y-scroll max-w-md mx-auto">
            {children}
        </div>
    )
}

export default NoTransitionWrapper