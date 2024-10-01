import AvatarAnimation from "@/components/animations/avatar";
import FadeIn from "@/components/animations/fadeIn";
import HomeTyping from "@/components/home-typing";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import ProfilePhoto from "@/public/1719106933472.jpeg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <FadeIn>
      <section
        id="#"
        className="relative md:min-h-screen gap-20 md:gap-15 flex flex-wrap justify-center items-center py-20 lg:py-0"
      >
        <div className="absolute z-0 gap-4 grid grid-cols-2 md:grid-cols-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/icons/react.svg"
            width={100}
            height={100}
            alt="react logo"
            className="grayscale opacity-15"
          />
          <Image
            src="/icons/html.svg"
            width={100}
            height={100}
            alt="css logo"
            className="grayscale opacity-15"
          />
          <Image
            src="/icons/css.svg"
            width={100}
            height={100}
            alt="css logo"
            className="grayscale opacity-15"
          />
          <Image
            src="/icons/javascript.svg"
            width={75}
            height={75}
            alt="js logo"
            className="grayscale opacity-15"
          />
          <Image
            src="/icons/python.svg"
            width={100}
            height={100}
            alt="python logo"
            className="grayscale opacity-15"
          />
          <Image
            src="/icons/go.svg"
            width={100}
            height={100}
            alt="go logo"
            className="grayscale opacity-15"
          />
        </div>
        <div className="z-10 w-[30rem] flex flex-col gap-8 justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Hola soy, <HomeTyping />
          </h1>
          <p className="text-lg">
            Enfocado a crear software de calidad y mantenible, con el principal
            objetivo de solucionar problemas.
          </p>
          <div className="flex gap-4">
            <Button className="flex items-center gap-2" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/paolocesarcharcamamani">
                <FaLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
            </Button>
            <Button
              className="flex items-center gap-2"
              variant="secondary"
              size="lg"
              asChild
            >
              <Link href="https://github.com/paolochmprojects">
                <FaGithub className="h-4 w-4" />
                Github
              </Link>
            </Button>
          </div>
        </div>
        <div className="z-10 flex items-start md:items-center min-w-56">
          <AvatarAnimation>
            <NeonGradientCard
              borderRadius={99999}
              neonColors={{ firstColor: "#DC2626", secondColor: "#2596BE" }}
              className="rounded-full"
            >
              <div className="w-72 h-72 p-[1px]">
                <AspectRatio ratio={1}>
                  <Image
                    className="rounded-full"
                    src={ProfilePhoto}
                    alt="paolochmprojects profile avatar"
                  />
                </AspectRatio>
              </div>
            </NeonGradientCard>
          </AvatarAnimation>
        </div>
      </section>
    </FadeIn>
  );
};

export default Hero;
