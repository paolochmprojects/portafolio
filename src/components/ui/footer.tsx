import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="py-10 flex flex-col items-center gap-10 justify-center">
            <div className="flex gap-10">
                <Link href="https://github.com/paolochmprojects" >
                    <FaGithub className="text-4xl hover:rotate-6 hover:text-red-600 transition-all delay-100 duration-300"/>
                </Link>
                <Link href="https://www.linkedin.com/in/paolocesarcharcamamani" >
                    <FaLinkedin className="text-4xl hover:rotate-6 hover:text-red-600 transition-all delay-100 duration-300" />
                </Link>
            </div>
            <small className="text-gray-400">
                &copy; Copyright 2024 <Link href="https://github.com/paolochmprojects">paolochmprojects</Link>
            </small>
        </footer>
    )
}

export default Footer