import Link from "next/link"

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
        name: "Contáctame",
        url: "#contact-me",
    }
]

const Navbar = () => {
    return (
        <nav className="z-30 fixed bg-black w-full top-0 p-6 justify-between">
            <div className="flex justify-between w-full max-w-screen-lg mx-auto">
                <Link href="/" className="font-bebas text-3xl">
                    PaoloChM
                </Link>
                <ul className="hidden md:flex md:gap-6">
                    {links.map((link, index) => <Link
                        className="hover:text-red-600 active:text-red-600 text-sm font-medium transition-all duration-500 hover:scale-110"
                        key={index}
                        href={link.url}
                    >
                        {link.name}
                    </Link>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar