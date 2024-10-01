import FadeIn from "@/components/animations/fadeIn";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <FadeIn>
      <section
        id="about-me"
        className="flex flex-col gap-y-20 gap-x-10 py-10"
      >
        <div className="sticky top-20 z-20 p-2">
          <h2 className="text-4xl font-bold font-bebas">Sobre mi</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bebas tracking-wide">Mi experiencia</CardTitle>
              <CardDescription>
                Enfocado a crear software de calidad y mantenible, con el
                principal objetivo de solucionar problemas. Con más de 1 año en
                desarrollo de aplicaciones web y 2 años de experiencia en el
                desarrollo de software y despliegues de aplicaciones en
                plataformas y servidores VPS. Con mucho amor y dedicación.
              </CardDescription>
            </CardHeader>
          </Card>
          <ul className="grid grid-cols-4 gap-10 justify-center flex-wrap w-full">
            {/* TODO: Animacion individual */}
            <li className="flex transform -rotate-6 items-center justify-center">
              <Image
                src="/icons/css.svg"
                width={75}
                height={75}
                alt="react logo"
              />
            </li>
            <li className="flex transform rotate-6 items-center justify-center">
              <Image
                src="/icons/javascript.svg"
                width={75}
                height={75}
                alt="react logo"
              />
            </li>
            <li className="flex transform -rotate-6 items-center justify-center">
              <Image
                src="/icons/html.svg"
                width={75}
                height={75}
                alt="react logo"
              />
            </li>
            <li className="flex transform rotate-6 items-center justify-center">
              <Image
                src="/icons/python.svg"
                width={100}
                height={100}
                alt="react logo"
              />
            </li>
            <li className="flex transform -rotate-6 items-center justify-center">
              <Image
                src="/icons/docker.svg"
                width={75}
                height={75}
                alt="react logo"
              />
            </li>
            <li className="flex transform rotate-6 items-center justify-center col-span-2">
              <Image
                src="/icons/odoo.svg"
                width={200}
                height={100}
                alt="odoo logo"
              />
            </li>
            <li className="flex transform -rotate-6 items-center justify-center">
              <Image src="/icons/git.svg" width={75} height={75} alt=" logo" />
            </li>
          </ul>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul className="grid grid-cols-4 gap-10 justify-center items-center flex-wrap w-full">
            <li>
              <Image
                className="-rotate-6"
                src="/icons/typescript.svg"
                width={75}
                height={75}
                alt="typescript logo"
              />
            </li>
            <li>
              <Image
                className="rotate-6"
                src="/icons/react.svg"
                width={75}
                height={75}
                alt="react logo"
              />
            </li>
            <li>
              <Image
                className="-rotate-6 invert"
                src="/icons/nextlogo.svg"
                width={75}
                height={75}
                alt="next logo"
              />
            </li>
            <li>
              <Image
                className="rotate-6"
                src="/icons/nest.svg"
                width={75}
                height={75}
                alt="next logo"
              />
            </li>
            <li>
              <Image
                className="-rotate-6"
                src="/icons/tailwind.svg"
                width={75}
                height={75}
                alt="docker logo"
              />
            </li>
            <li>
              <Image
                className="rotate-6 invert"
                src="/icons/prisma.svg"
                width={75}
                height={75}
                alt="next logo"
              />
            </li>
            <li>
              <Image
                className="-rotate-6"
                src="/icons/node.svg"
                width={75}
                height={75}
                alt="node logo"
              />
            </li>
            <li>
              <Image
                className="rotate-6"
                src="/icons/docker.svg"
                width={75}
                height={75}
                alt="docker logo"
              />
            </li>
          </ul>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bebas tracking-wide">Mi Stack</CardTitle>
              <CardDescription>
                Para el backend con Nest y Typescript, ya que me proveen una
                forma de construir un backend de forma rapida y sacalable. Para
                el frontend con React con Next y Tailwind, ya que me permite
                crear interfaces increibles para mis usuarios de forma rapida y
                divertida.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
