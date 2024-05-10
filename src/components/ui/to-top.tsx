'use client'
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 200) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        return () => {
            window.onscroll = null
        }
    })

    return (
        <Link href="/" className={clsx(
            "fixed p-2 bottom-10 right-10 transition-all transform duration-500 delay-100 bg-red-600 rounded-full shadow-lg shadow-red-600/55 animate-bounce",
            show ? "opacity-100" : "opacity-0")}>
            <FaArrowUp className="text-2xl text-white" />
        </Link>
    )
}

export default ToTop