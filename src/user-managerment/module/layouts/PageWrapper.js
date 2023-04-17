import React from 'react'
import { motion } from 'framer-motion'

const PageWrapper = ({children, xInitial = 100, xExit = -100}) => {

    // DATA INITIALIZATION
    const animations = {
        initial: {
            opacity: 0,
            x: xInitial
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: xExit
        }
    }

    return (
        <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit" 
        transition={{
            type: "spring",
            damping: 12,
            duration: 0.8,
        }}
        className="h-screen overflow-y-scroll max-w-md mx-auto">
            {children}
        </motion.div>
    )
}

export default PageWrapper