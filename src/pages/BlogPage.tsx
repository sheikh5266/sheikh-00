import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { BlogSection } from "@/components/BlogSection";
import { Newsletter } from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Sheikh Momin - Digital Marketing & Web Development Insights</title>
        <meta 
          name="description" 
          content="Latest insights, tips, and tutorials on digital marketing, web development, video editing, and motion graphics. Expert advice from Sheikh Momin." 
        />
        <meta name="keywords" content="digital marketing blog, web development tutorials, video editing tips, Meta ads guide, React development, motion graphics" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Blog | Sheikh Momin - Digital Marketing & Web Development Insights" />
        <meta property="og:description" content="Latest insights and tutorials on digital marketing, web development, and creative services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sheikhmomin.site/blog" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Sheikh Momin - Digital Marketing Insights" />
        <meta name="twitter:description" content="Expert insights on digital marketing, web development, and creative services." />
        
        <link rel="canonical" href="https://www.sheikhmomin.site/blog" />
      </Helmet>
      
      <StructuredData type="organization" />
      <GoogleAnalytics />
      
      <main className="min-h-screen relative">
        <Navigation />
        
        <div className="pt-20">
          <BlogSection />
          
          <div className="container mx-auto px-6 mb-16">
            <Newsletter />
          </div>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default BlogPage;