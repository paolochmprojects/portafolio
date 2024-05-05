'use client'
import Image from 'next/image'
import React from 'react'
import { motion, type Variants } from 'framer-motion'

interface Icon {
    src: string,
    alt: string,
    className: string
}

const icons: Icon[] = [
    {
        className: "trasform hover:rotate-0 duration-500 -rotate-12",
        src: "/icons/fastapi.svg",
        alt: ""
    },
    {
        className: "trasform hover:rotate-0 duration-500 rotate-12",
        src: "/icons/django.svg",
        alt: ""
    },
]


const container: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const PyIconsAnimate = () => {
    return (
        <motion.ul className="my-6 flex justify-center gap-6 flex-wrap"
            variants={container}
            initial="hidden"
            whileInView="visible">
            {icons.map((icon, index) => (<motion.li variants={item} key={index}>
                <Image
                    className={icon.className}
                    src={icon.src}
                    height={100}
                    width={100}
                    alt={icon.alt} />
            </motion.li>))}
        </motion.ul>
    )
}

export default PyIconsAnimate