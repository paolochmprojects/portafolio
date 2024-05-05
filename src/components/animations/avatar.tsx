'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion'

interface Props {
    children: React.ReactNode
}

const variants: Variants = {
    hidden: {
        rotate: 180,
        opacity: 0
    },
    visible: {
        rotate: 0,
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
                delay: 0.5,
                duration: 0.7
            }}
        >
            {children}
        </motion.div>
    )
}

export default AvatarAnimation