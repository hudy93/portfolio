import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Work />
      <Blog />
      <Contact />
    </section>
  );
}
