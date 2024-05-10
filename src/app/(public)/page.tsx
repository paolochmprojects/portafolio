import AvatarAnimation from "@/components/animations/avatar";
import FadeIn from "@/components/animations/fadeIn";
import JsIconsAnimate from "@/components/animations/js-icons";
import PyIconsAnimate from "@/components/animations/python-icons";
import HomeTyping from "@/components/home-typing";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Starfield from "react-starfield";

export default function Home() {
  return (
    <main className="relative flex-grow max-w-screen-xl mx-auto w-full px-6">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <FadeIn>
        <section className="md:min-h-screen gap-20 md:gap-15 flex flex-wrap justify-center items-center pt-20 lg:pt-0 bg-gradient-radial from-red-600/50 via-black to-transparent">
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
    </main >
  );
}
