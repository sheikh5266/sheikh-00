import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services isHomepage={true} />
      </section>
      
      <section id="portfolio">
        <Portfolio isHomepage={true} />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;