import Link from "next/link"

const links = [
    {
        name: "Sobre Mi",
        url: "#",
    },
    {
        name: "Mis proyectos",
        url: "#",
    },
    {
        name: "Contáctame",
        url: "#",
    }
]

const Navbar = () => {
    return (
        <nav className="max-w-screen-xl p-6 w-full flex mx-auto justify-between">
            <h1 className="font-bebas text-3xl">
                PaoloChM
            </h1>
            <ul className="hidden md:flex md:gap-6">
                {links.map((link, index) => <Link
                    className="hover:text-red-600 font-medium transition-all duration-500 hover:scale-110"
                    key={index}
                    href={link.url}
                >
                    {link.name}
                </Link>)}
            </ul>
        </nav>
    )
}

export default Navbar