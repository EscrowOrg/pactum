import React from 'react'

const NoTransitionWrapper = ({children, padding}) => {
    return (
        <div className={`h-screen overflow-y-scroll max-w-md mx-auto ${padding}`}>
            {children}
        </div>
    )
}

export default NoTransitionWrapper