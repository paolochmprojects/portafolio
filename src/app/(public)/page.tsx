import FadeIn from "@/components/animations/fadeIn";
import HomeTyping from "@/components/home-typing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow max-w-screen-xl mx-auto w-full px-6">
      <FadeIn>
        <section className="mt-28 mb-20 flex flex-wrap justify-center gap-10 min-h-[26rem] bg-gradient-radial from-red-600/50 via-black to-transparent">
          <div className="w-[30rem] flex flex-col gap-8 justify-center">
            <h1 className="text-3xl lg:text-5xl font-bold">Hola soy, <HomeTyping /></h1>
            <p className="text-lg">
              Enfocado a crear software de calidad y mantenible, con el principal objetivo de solucionar problemas.
            </p>
            <Link href="http://www.linkedin.com/in/paolocesarcharcamamani"
              className="flex justify-around items-center w-40 text-lg bg-red-600 p-2 rounded-xl text-center font-semibold hover:scale-105 transition-all duration-500 delay-100"
            >
              <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
              </svg>
              Contáctame
            </Link>
          </div>
          <div className="flex items-center min-w-56">
            <Image className="rounded-full shadow-2xl shadow-red-600/30"
              src="/101404226.webp"
              width={300}
              height={300}
              alt="paolochmprojects profile avatar"
            />
          </div>
        </section>
      </FadeIn>
      <section id="about-me" className="mt-32 flex gap-4 mx-auto max-w-screen-lg">
        <div className="flex-grow text-nowrap md:w-72">
          <h2 className="sticky top-20 transform font-bebas text-2xl md:text-5xl" >Sobre Mi</h2>
        </div>
        <div className="w-full bg-gradient-radial from-red-600/50 via-black to-transparent">
          <h3 className="text-3xl font-bebas font-semibold mb-6">
            Mi experiencia
          </h3>
          <h4 className="font-bebas text-2xl mb-6">Odoo ERP</h4>
          <p className="text-justify">
            Tengo un poco mas de un año de experiencia, desarrollando soluciones para software ERP en el ecosistema de odoo
            en sus versiones community y enterprise, diseñando páginas, creando de módulos personalizados, integración de
            módulos desarrollados por terceros, en la odoo store, usando lenguajes como python y javascript, con base de datos
            postgresql, desarrollando conceptos sólidos en POO, manejo y administración de dependencias y usando docker como
            mi herramienta de desarrollo portátil y seguro.
          </p>
          <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex justify-center drop-shadow-2xl shadow-red-500 items-center transform -rotate-12">
                <Image className="hover:scale-110 transition-all duration-500" src="/icons/javascript.svg" width={100} height={100} alt="javascript logo" />
              </div>
              <div className="flex justify-center items-center transform rotate-0">
                <Image className="hover:scale-110 transition-all duration-500" src="/icons/postgresql.svg" width={100} height={100} alt="postgresql" />
              </div>
              <div className="flex justify-center items-center transform rotate-12">
                <Image className="hover:scale-110 transition-all duration-500" src="/icons/python.svg" width={150} height={150} alt="python logo" />
              </div>
              <div className="md:col-span-3 h-16 md:h-32 overflow-hidden flex justify-center items-center transform rotate-6">
                <Image className="hover:scale-110 transition-all duration-500" src="/icons/odoo.svg" width={500} height={500} alt="odoo logo" />
              </div>
            </div>
          </div>
          <h4 className="font-bebas text-2xl mb-6">Python</h4>
          <p className="text-justify">
            En paralelo, extendí mi conocimientos en backend, con los frameworks backend, como Django y FastAPI, creando proyectos
            personales. Actualmente con python estoy aprendiendo temas de machine learning para aplicar soluciones inteligentes en
            ingienería.
          </p>
          <div className="my-6 flex justify-center gap-6 flex-wrap">
            <Image className="trasform hover:rotate-0 duration-500 -rotate-12" src="/icons/fastapi.svg" height={100} width={100} alt="FastApi Logo" />
            <Image className="trasform hover:rotate-0 duration-500 rotate-12" src="/icons/django.svg" height={100} width={100} alt="Django Logo" />
          </div>
          <h4 className="font-bebas text-2xl mb-6">TypeScript</h4>
          <p className="text-justify">
            Para un siguiente nivel decidí profundizar mucho más en el ambiente de javascript con typescript, y conocer las herramientas
            más populares en este ecosistema para el diseño de páginas estáticas y dinámicas en frontend, como también el desarrollo de
            backend para desarrollar aplicaciones fullstack.
          </p>
          <div className="my-6 flex justify-center gap-6 flex-wrap">
            <Image className="" src="/icons/javascript.svg" height={100} width={100} alt="Javascript logo" />
            <Image className="" src="/icons/typescript.svg" height={100} width={100} alt="Typescript logo" />
            <Image className="" src="/icons/html.svg" height={100} width={100} alt="Html logo" />
            <Image className="" src="/icons/css.svg" height={100} width={100} alt="Css logo" />
            <Image className="" src="/icons/react.svg" height={100} width={100} alt="React logo" />
            <Image className="invert" src="/icons/nextlogo.svg" height={100} width={100} alt="Next logo" />
            <Image className="" src="/icons/astro.svg" height={100} width={100} alt="Astro logo" />
            <Image className="invert" src="/icons/prisma.svg" height={100} width={100} alt="Prisma logo" />
            <Image className="" src="/icons/tailwind.svg" height={100} width={100} alt="Tailwind logo" />
          </div>
          <div className="h-10"></div>
        </div>
      </section>
      <section id="mi-projects" className="flex mx-auto max-w-screen-lg min-h-[48rem]">
        <div className="h-[96rem] w-full max-w-72">
          <h3 className="sticky top-20 transform font-bebas text-5xl" >Mis proyectos</h3>
        </div>
        <div className="">paolo</div>
      </section>
      <section id="contact-me" className="flex mx-auto max-w-screen-lg min-h-[48rem]">
        <div className="h-[96rem] w-full max-w-72">
          <h3 className="sticky top-20 transform font-bebas text-5xl" >Contacto</h3>
        </div>
        <div className="">paolo</div>
      </section>
    </main>
  );
}
