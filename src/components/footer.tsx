import Link from "next/link"

const Footer = () => {
    return (
        <footer className="py-8 flex justify-center">
            <small className="text-gray-400">
                &copy; Copyright 2024 <Link href="https://github.com/paolochmprojects">paolochmprojects</Link>
            </small>
        </footer>
    )
}

export default Footer