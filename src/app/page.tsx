import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { TechnicalToolkit } from "@/components/sections/TechnicalToolkit";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <TechnicalToolkit />
      <Contact />
    </>
  );
}
