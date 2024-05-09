import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="py-8 flex flex-col items-center gap-4 justify-center">
            <div className="flex gap-4">
                <Link href="https://github.com/paolochmprojects" 
                className="text-lg">
                    <FaGithub className="text-3xl" />
                </Link>
                <Link href="https://www.linkedin.com/in/paolocesarcharcamamani" 
                className="text-lg">
                    <FaLinkedin className="text-3xl" />
                </Link>
            </div>
            <small className="text-gray-400">
                &copy; Copyright 2024 <Link href="https://github.com/paolochmprojects">paolochmprojects</Link>
            </small>
        </footer>
    )
}

export default Footer