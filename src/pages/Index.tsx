import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { BlogSection } from "@/components/BlogSection";
import { SocialProof } from "@/components/SocialProof";
import { LeadMagnets } from "@/components/LeadMagnets";
import { Newsletter } from "@/components/Newsletter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sheikh Momin | Digital Marketing Specialist · Web Developer · Video Editor</title>
        <meta 
          name="description" 
          content="Professional digital marketing, web development, and video editing services. Specializing in Meta advertising, React development, and motion graphics. 50+ successful projects delivered." 
        />
        <meta name="keywords" content="digital marketing, Meta ads, Facebook advertising, web development, React developer, video editing, motion graphics, SEO, social media marketing, Bangladesh" />
        <meta name="google-site-verification" content="sYe1j8HzMbggXwP5X-HlNZA9Mx5rRPEU12fuIhnpccE" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sheikh Momin | Digital Marketing Specialist · Web Developer · Video Editor" />
        <meta property="og:description" content="Professional digital marketing, web development, and video editing services. Specializing in Meta advertising, React development, and motion graphics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sheikhmomin.site" />
        <meta property="og:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Sheikh Momin Digital Services" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sheikh Momin | Digital Marketing Specialist · Web Developer · Video Editor" />
        <meta name="twitter:description" content="Professional digital marketing, web development, and video editing services. 50+ successful projects delivered." />
        <meta name="twitter:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Sheikh Momin" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.sheikhmomin.site" />
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Bangladesh" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/sheikh-momin-profile.png" as="image" />
        <link rel="preload" href="/portfolio-ecommerce-video.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        
        {/* Performance Hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Helmet>
      
      <StructuredData type="person" />
      <GoogleAnalytics />
      <ThemeToggle />
      <SearchBar />
      <PerformanceMonitor />
      
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
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
        
        <section id="blog">
          <BlogSection isHomepage={true} />
        </section>
        
        <section id="social-proof">
          <SocialProof />
        </section>
        
        <section id="lead-magnets">
          <LeadMagnets />
        </section>
        
        <section id="newsletter" className="container mx-auto px-6 mb-16">
          <Newsletter />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Index;