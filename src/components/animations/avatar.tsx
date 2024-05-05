'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion'

interface Props {
    children: React.ReactNode
}

const variants: Variants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}

const AvatarAnimation = ({ children }: Props) => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
                delay: 0.5
            }}
        >
            {children}
        </motion.div>
    )
}

export default AvatarAnimation