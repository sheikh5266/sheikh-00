import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Sheikh Momin | Creative Projects & Case Studies</title>
        <meta name="description" content="Explore Sheikh Momin's portfolio featuring web development, video editing, motion graphics, and digital marketing projects. View live case studies and creative work showcasing 50+ successful projects." />
        <meta name="keywords" content="portfolio, web development, video editing, motion graphics, digital marketing, case studies, React projects, Meta ads campaigns" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Portfolio - Sheikh Momin | Creative Projects & Case Studies" />
        <meta property="og:description" content="Explore Sheikh Momin's portfolio featuring web development, video editing, motion graphics, and digital marketing projects. View live case studies and creative work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sheikhmomin.site/portfolio" />
        <meta property="og:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Sheikh Momin | Creative Projects & Case Studies" />
        <meta name="twitter:description" content="50+ successful projects in web development, video editing, and digital marketing." />
        <meta name="twitter:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        <link rel="canonical" href="https://www.sheikhmomin.site/portfolio" />
      </Helmet>
      
      <StructuredData 
        type="portfolio" 
        pageData={{
          title: "Portfolio - Sheikh Momin",
          description: "Creative projects and case studies showcasing web development, video editing, and digital marketing expertise",
          url: "https://www.sheikhmomin.site/portfolio"
        }}
      />
      <GoogleAnalytics />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <Portfolio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;