import AvatarAnimation from "@/components/animations/avatar";
import FadeIn from "@/components/animations/fadeIn";
import HomeTyping from "@/components/home-typing";
import OnBuild from "@/components/onbuild";
import ProjectCard from "@/components/project-card";
import ToTop from "@/components/ui/to-top";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Starfield from "react-starfield";
import { GithubRepos } from "./interface/github.interface";

export default async function Home() {

  const projectsGithub = await fetch("https://api.github.com/users/paolochmprojects/repos")

  const projectsData = await projectsGithub.json() as GithubRepos[]

  return (
    <main className="relative flex-grow max-w-screen-lg mx-auto w-full px-6">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Section 1 */}

      <FadeIn>
        <section id="#" className="relative md:min-h-screen gap-20 md:gap-15 flex flex-wrap justify-center items-center py-20 lg:py-0 bg-gradient-radial from-red-600/50 via-black to-transparent">
          <div className="absolute z-0 gap-4 grid grid-cols-2 md:grid-cols-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/icons/react.svg"
              width={100} height={100} alt="react logo"
              className="grayscale opacity-15"
            />
            <Image
              src="/icons/html.svg"
              width={100} height={100} alt="css logo"
              className="grayscale opacity-15"
            />
            <Image
              src="/icons/css.svg"
              width={100} height={100} alt="css logo"
              className="grayscale opacity-15"
            />
            <Image
              src="/icons/javascript.svg"
              width={75} height={75} alt="js logo"
              className="grayscale opacity-15"
            />
            <Image
              src="/icons/python.svg"
              width={100} height={100} alt="python logo"
              className="grayscale opacity-15"
            />
            <Image
              src="/icons/go.svg"
              width={100} height={100} alt="go logo"
              className="grayscale opacity-15"
            />
          </div>
          <div className="z-10 w-[30rem] flex flex-col gap-8 justify-center">
            <h1 className="text-3xl lg:text-5xl font-bold">Hola soy, <HomeTyping /></h1>
            <p className="text-lg">
              Enfocado a crear software de calidad y mantenible, con el principal objetivo de solucionar problemas.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/paolocesarcharcamamani"
                className="flex gap-2 w-36 h-14 justify-around items-center text-lg bg-red-600 p-3 rounded-xl text-center font-semibold hover:scale-105 hover:shadow-red-600/30 shadow-lg transition-all duration-500 delay-100"
              >
                <FaLinkedin className="text-3xl" />
                LinkedIn
              </Link>
              <Link href="https://github.com/paolochmprojects"
                className="flex gap-2 w-36 h-14 justify-around items-center text-lg bg-black p-3 rounded-xl text-center font-semibold hover:scale-105 hover:shadow-red-600/30 shadow-lg transition-all duration-500 delay-100"
              >
                <FaGithub className="text-3xl" />
                Github
              </Link>
            </div>
          </div>
          <div className="z-10 flex items-start md:items-center min-w-56">
            <AvatarAnimation>
              <Image className="rounded-full shadow-2xl shadow-red-600/30"
                src="/101404226.webp"
                width={250}
                height={250}
                alt="paolochmprojects profile avatar"
              />
            </AvatarAnimation>
          </div>
        </section>
      </FadeIn>

      {/* Section 2 */}
      <FadeIn>
        <section id="about-me" className="flex flex-col gap-y-20 gap-x-10 mt-10 min-h-screen">
          <div className="sticky top-20 z-20 bg-black p-2">
            <h2 className="text-4xl font-bold font-bebas">Sobre mi</h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-red-600/70 p-6">
              <h4 className="text-2xl font-bebas">Mi Experiencia</h4>
              <p className="mt-4">
                Enfocado a crear software de calidad y mantenible, con el principal objetivo de solucionar problemas. Con más de
                1 año en desarrollo de aplicaciones web y 2 años de experiencia en el desarrollo de software y despliegues de aplicaciones
                en plataformas y servidores VPS. Con mucho amor y dedicación.
              </p>
            </div>
            <ul className="grid grid-cols-4 gap-10 justify-center flex-wrap w-full">
              {/* TODO: Animacion individual */}
              <li className="flex transform -rotate-6 items-center justify-center"><Image src="/icons/css.svg" width={75} height={75} alt="react logo" /></li>
              <li className="flex transform rotate-6 items-center justify-center"><Image src="/icons/javascript.svg" width={75} height={75} alt="react logo" /></li>
              <li className="flex transform -rotate-6 items-center justify-center"><Image src="/icons/html.svg" width={75} height={75} alt="react logo" /></li>
              <li className="flex transform rotate-6 items-center justify-center"><Image src="/icons/python.svg" width={100} height={100} alt="react logo" /></li>
              <li className="flex transform -rotate-6 items-center justify-center"><Image src="/icons/docker.svg" width={75} height={75} alt="react logo" /></li>
              <li className="flex transform rotate-6 items-center justify-center col-span-2"><Image src="/icons/odoo.svg" width={200} height={100} alt="odoo logo" /></li>
              <li className="flex transform -rotate-6 items-center justify-center"><Image src="/icons/git.svg" width={75} height={75} alt=" logo" /></li>
            </ul>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <ul className="grid grid-cols-4 gap-10 justify-center items-center flex-wrap w-full">
              <li><Image className="-rotate-6" src="/icons/typescript.svg" width={75} height={75} alt="typescript logo" /></li>
              <li><Image className="rotate-6" src="/icons/react.svg" width={75} height={75} alt="react logo" /></li>
              <li><Image className="-rotate-6 invert" src="/icons/nextlogo.svg" width={75} height={75} alt="next logo" /></li>
              <li><Image className="rotate-6" src="/icons/nest.svg" width={75} height={75} alt="next logo" /></li>
              <li><Image className="-rotate-6" src="/icons/tailwind.svg" width={75} height={75} alt="docker logo" /></li>
              <li><Image className="rotate-6 invert" src="/icons/prisma.svg" width={75} height={75} alt="next logo" /></li>
              <li><Image className="-rotate-6" src="/icons/node.svg" width={75} height={75} alt="node logo" /></li>
              <li><Image className="rotate-6" src="/icons/docker.svg" width={75} height={75} alt="docker logo" /></li>
            </ul>
            <div className="bg-black/85 z-10 p-6">
              <h4 className="text-2xl font-bebas">Mi Stack de desarrollo</h4>
              <p>
                Para el backend con Nest y Typescript, ya que me proveen una forma de construir un backend de forma rapida y sacalable.
                Para el frontend con React con Next y Tailwind, ya que me permite crear interfaces increibles para mis usuarios
                de forma rapida y divertida.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 3 */}
      <FadeIn>
        <section id="my-projects" className="my-10 min-h-screen">
          <div className="sticky top-20 bg-black p-2 z-20">
            <h2 className="text-4xl font-bold font-bebas">Mis proyectos</h2>
          </div>
          <div className="p-2 flex gap-10 flex-wrap">
            {
              projectsData.map((project) => <ProjectCard
                key={project.id}
                title={project.name}
                languageUrl={project.languages_url}
                description={project.description}
                url={project.html_url}
              />)
            }
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section id="my-services" className="my-10 min-h-screen">
          <div className="sticky top-20 bg-black p-2 z-20">
            <h2 className="text-4xl font-bold font-bebas">Mis servicios</h2>
          </div>
          <OnBuild />
        </section>
      </FadeIn>
      <ToTop />
    </main >
  );
}
