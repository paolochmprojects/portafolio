import Link from "next/link"
import NavLink from "./navlink"

const links = [
    {
        name: "Sobre Mi",
        url: "#about-me",
    },
    {
        name: "Mis proyectos",
        url: "#mi-projects",
    },
    {
        name: "Mis servicios",
        url: "#my-services",
    }
]

const Navbar = () => {
    return (
        <nav className="z-30 fixed bg-black/70 w-full top-0 p-6 justify-between">
            <div className="flex justify-between w-full max-w-screen-lg mx-auto">
                <Link href="/" className="font-bebas text-3xl">
                    PaoloChM
                </Link>
                <ul className="hidden md:flex md:gap-6">
                    {links.map((link, index) => <NavLink key={index} url={link.url} name={link.name}/>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar