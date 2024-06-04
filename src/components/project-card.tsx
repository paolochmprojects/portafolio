import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

interface Props {
    title: string,
    languageUrl: string,
    description: string | null,
    url: string
}

const logosLangs: Record<string, string> = {
    Python: "/icons/python.svg",
    JavaScript: "/icons/javascript.svg",
    TypeScript: "/icons/typescript.svg",
    HTML: "/icons/html.svg",
    Go: "/icons/go.svg",
    CSS: "/icons/css.svg",
    Dockerfile: "/icons/docker.svg",
    Astro: "/icons/astro.svg",
}
const ProjectCard = async ({ title, languageUrl, url, description }: Props) => {

    const response = await fetch(languageUrl)
    const data = await response.json() as Record<string, number>
    const languages = Object.keys(data)
    
    return (
        <div className="flex flex-col w-72 p-4 bg-gray-500/50 rounded-xl">

            <div className="flex justify-between">
                <h1 className="font-bebas text-xl">{title}</h1>
            </div>

            <p className="text-sm py-2 flex-grow">{description}</p>

            <Link className="flex gap-4" href={url}>
                <FaArrowRight />
                Ir al repositorio
            </Link>

            {languages.length > 0 && <div className="py-2 flex flex-col">
                <h3 className="text-sm">Lenguajes: </h3>
                <div className="flex gap-2 py-4">
                    {languages.map((language) => (
                        <Image
                            key={language}
                            src={logosLangs[language]}
                            width={25} height={25}
                            alt={language + " logo"} />
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default ProjectCard