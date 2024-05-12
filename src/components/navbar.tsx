'use client'
import Link from "next/link"
import NavLink from "./navlink"
import clsx from "clsx"
import { FaHamburger } from "react-icons/fa"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"

const links = [
    {
        name: "Sobre mi",
        url: "#about-me",
    },
    {
        name: "Mis proyectos",
        url: "#my-projects",
    },
    {
        name: "Mis servicios",
        url: "#my-services",
    }
]

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="z-30 fixed bg-black w-full top-0 p-6 justify-between">
            <div className="flex justify-between w-full max-w-screen-lg mx-auto">
                <Link href="#" className="font-bebas text-3xl">
                    PaoloChM
                </Link>
                <ul className="hidden md:flex md:gap-6">
                    {links.map((link, index) => <NavLink close={() => setOpen(false)} key={index} url={link.url} name={link.name} />)}
                </ul>
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <IoMdClose className="text-3xl" /> : <FaHamburger className="text-3xl" />}
                </button>
                <ul className={clsx("absolute md:hidden top-16 right-0 flex flex-col gap-6 bg-black p-6 left-0 transition-all delay-75 duration-300", open ? "translate-x-0" : "translate-x-full")}>
                    {links.map((link, index) => <NavLink close={() => setOpen(false)} key={index} url={link.url} name={link.name} />)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar