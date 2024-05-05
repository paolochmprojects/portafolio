'use client'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

interface Icon {
    src: string,
    alt: string,
    className: string
}

const icons: Icon[] = [
    { className: "", alt: "Javascript logo", src: "/icons/javascript.svg" },
    { className: "", alt: "Typescript log", src: "/icons/typescript.svg" },
    { className: "", alt: "Html logo", src: "/icons/html.svg" },
    { className: "", alt: "Css logo", src: "/icons/css.svg" },
    { className: "", alt: "React logo", src: "/icons/react.svg" },
    { className: "invert", alt: "Next logo", src: "/icons/nextlogo.svg" },
    { className: "", alt: "Astro logo", src: "/icons/astro.svg" },
    { className: "invert", alt: "Prisma logo", src: "/icons/prisma.svg" },
    { className: "", alt: "Tailwind", src: "/icons/tailwind.svg" }
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

const JsIconsAnimate = () => {
    return (
        <motion.ul
            className="my-6 flex justify-center gap-6 flex-wrap"
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
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

export default JsIconsAnimate