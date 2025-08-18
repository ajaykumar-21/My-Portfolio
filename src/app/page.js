import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
