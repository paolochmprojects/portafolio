'use client'
import { motion, type Variants } from 'framer-motion'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const container: Variants = {
    hidden: {
        opacity: 0,
        scale: 1,
        translateX: -100,
    },
    visible: {
        opacity: 1,
        scale: 1,
        translateX: 0,
    }
}

const FadeIn = ({ children }: Props) => {
    return (<motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{
            duration: 0.5
        }}
    >
        {children}
    </motion.div>)
}

export default FadeIn