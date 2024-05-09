import AvatarAnimation from "@/components/animations/avatar";
import FadeIn from "@/components/animations/fadeIn";
import JsIconsAnimate from "@/components/animations/js-icons";
import PyIconsAnimate from "@/components/animations/python-icons";
import HomeTyping from "@/components/home-typing";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex-grow max-w-screen-xl mx-auto w-full px-6">
      <FadeIn>
        <section className="min-h-[80vh] flex flex-wrap justify-center items-center mt-15 lg:mt-0 lg:gap-10 bg-gradient-radial from-red-600/50 via-black to-transparent">
          <div className="w-[30rem] flex flex-col gap-8 justify-center">
            <h1 className="text-3xl lg:text-5xl font-bold">Hola soy, <HomeTyping /></h1>
            <p className="text-lg">
              Enfocado a crear software de calidad y mantenible, con el principal objetivo de solucionar problemas.
            </p>
            <div className="flex gap-4">
              <Link href="http://www.linkedin.com/in/paolocesarcharcamamani"
                className="flex gap-2 w-36 h-14 justify-around items-center text-lg bg-red-600 p-3 rounded-xl text-center font-semibold hover:scale-105 transition-all duration-500 delay-100"
              >
                <FaLinkedin className="text-3xl" />
                LinkedIn
              </Link>
              <Link href="https://github.com/paolochmprojects"
                className="flex gap-2 w-36 h-14 justify-around items-center text-lg bg-black p-3 rounded-xl text-center font-semibold hover:scale-105 transition-all duration-500 delay-100"
              >
                <FaGithub className="text-3xl" />
                Github
              </Link>
            </div>
          </div>
          <div className="flex items-start md:items-center min-w-56">
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
    </main >
  );
}
