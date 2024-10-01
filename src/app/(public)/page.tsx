import FadeIn from "@/components/animations/fadeIn";
import ProjectCard from "@/components/project-card";
import ToTop from "@/components/ui/to-top";
import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { GithubRepos } from "./interface/github.interface";
import About from "./components/About";

export default async function Home() {
  const projectsGithub = await fetch(
    "https://api.github.com/users/paolochmprojects/repos"
  );

  const projectsData = (await projectsGithub.json()) as GithubRepos[];

  return (
    <main className="relative flex-grow max-w-screen-lg mx-auto w-full px-6">
      <Hero />
      <About />
      <Services />
      <ToTop />
    </main>
  );
}
