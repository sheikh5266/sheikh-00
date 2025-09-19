import { Helmet } from "react-helmet-async";
import Resume from "@/components/Resume";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const ResumePage = () => {
  return (
    <>
      <Helmet>
        <title>Resume - Sheikh Momin | Digital Marketer · Web Developer · Video Editor</title>
        <meta 
          name="description" 
          content="View Sheikh Momin's professional resume - Digital Marketing Specialist, Web Developer, Video Editor, and Motion & Graphic Designer. Experienced in SEO, React, and creative design with 50+ successful projects." 
        />
        <meta name="keywords" content="Sheikh Momin, resume, digital marketing, web development, video editing, graphic design, SEO, React, CV, professional experience" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Resume - Sheikh Momin | Digital Marketer · Web Developer · Video Editor" />
        <meta property="og:description" content="Professional resume showcasing expertise in digital marketing, web development, video editing, and graphic design with proven results." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.sheikhmomin.site/resume" />
        <meta property="og:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume - Sheikh Momin | Digital Marketing & Development Expert" />
        <meta name="twitter:description" content="Digital marketing specialist and web developer with 50+ successful projects and proven ROI results." />
        <meta name="twitter:image" content="https://www.sheikhmomin.site/sheikh-momin-profile.png" />
        
        <link rel="canonical" href="https://www.sheikhmomin.site/resume" />
      </Helmet>
      
      <StructuredData 
        type="person" 
        pageData={{
          title: "Resume - Sheikh Momin",
          description: "Professional resume showcasing digital marketing, web development, and creative expertise",
          url: "https://www.sheikhmomin.site/resume"
        }}
      />
      <GoogleAnalytics />
      
      <Resume />
    </>
  );
};

export default ResumePage;