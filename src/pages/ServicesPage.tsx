import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Sheikh Momin | Web Development, Video Editing & Digital Marketing</title>
        <meta name="description" content="Professional services including Meta ad management, web development, video editing, and 2D illustrations. Get expert digital marketing and creative solutions with 98% client satisfaction." />
        <meta name="keywords" content="web development, video editing, digital marketing, Meta ads, motion graphics, illustration services, React development, SEO services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Services - Sheikh Momin | Web Development, Video Editing & Digital Marketing" />
        <meta property="og:description" content="Professional digital marketing and creative services with proven results. Meta ads, web development, video editing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sheikhmomin.site/services" />
        <meta property="og:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Sheikh Momin | Digital Marketing & Creative Solutions" />
        <meta name="twitter:description" content="Meta ads management, web development, video editing services with 98% client satisfaction rate." />
        <meta name="twitter:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        <link rel="canonical" href="https://www.sheikhmomin.site/services" />
      </Helmet>
      
      <StructuredData 
        type="service" 
        pageData={{
          title: "Services - Sheikh Momin",
          description: "Professional digital marketing, web development, and creative services",
          url: "https://www.sheikhmomin.site/services"
        }}
      />
      <GoogleAnalytics />
      
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />
        <main className="pt-14 sm:pt-16 lg:pt-20">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;