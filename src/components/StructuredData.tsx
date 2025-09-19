import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: 'person' | 'organization' | 'service' | 'portfolio';
  pageData?: {
    title: string;
    description: string;
    url: string;
  };
}

const StructuredData = ({ type = 'person', pageData }: StructuredDataProps) => {
  const baseUrl = 'https://www.sheikhmomin.site';
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sheikh Momin",
    "url": baseUrl,
    "image": `${baseUrl}/sheikh-momin-profile.png`,
    "jobTitle": "Digital Marketing Specialist, Web Developer, Video Editor",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Digital Services"
    },
    "alumniOf": {
      "@type": "Organization", 
      "name": "Digital Marketing Institute"
    },
    "knowsAbout": [
      "Digital Marketing",
      "Meta Advertising", 
      "Web Development",
      "Video Editing",
      "Motion Graphics",
      "React Development",
      "SEO",
      "Social Media Marketing"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/sheikhmomin",
      "https://github.com/sheikhmomin",
      "https://www.facebook.com/sheikhmomin.digital"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sheikh Momin Digital Services",
    "url": baseUrl,
    "logo": `${baseUrl}/sheikh-momin-profile.png`,
    "image": `${baseUrl}/sheikh-momin-profile.png`,
    "description": "Professional digital marketing, web development, and video editing services. Specializing in Meta advertising, React development, and motion graphics.",
    "founder": {
      "@type": "Person",
      "name": "Sheikh Momin"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management",
            "description": "Complete Meta advertising campaigns with setup, optimization, and reporting"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom websites and web applications using modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Video Editing",
            "description": "Professional video editing and motion graphics for marketing content"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "30",
      "bestRating": "5"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801829444533",
      "contactType": "Customer Service",
      "email": "sheikh@sheikhmomin.site"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing & Web Development Services",
    "description": "Comprehensive digital services including Meta advertising, web development, video editing, and motion graphics",
    "provider": {
      "@type": "Person",
      "name": "Sheikh Momin",
      "url": baseUrl
    },
    "areaServed": {
      "@type": "Place", 
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Advertising Campaign Management",
            "description": "End-to-end Meta ads management including strategy, creative production, targeting, and optimization"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "1500",
            "unitCode": "MON"
          }
        }
      ]
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Sheikh Momin Portfolio",
    "description": "Portfolio showcasing web development, video editing, motion graphics and digital marketing projects",
    "creator": {
      "@type": "Person", 
      "name": "Sheikh Momin"
    },
    "url": `${baseUrl}/portfolio`,
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "Restaurant Website Development",
        "description": "Modern responsive restaurant website with online ordering system"
      },
      {
        "@type": "CreativeWork", 
        "name": "E-commerce Video Campaign",
        "description": "Product showcase videos for e-commerce marketing"
      }
    ]
  };

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'service': 
        return serviceSchema;
      case 'portfolio':
        return portfolioSchema;
      default:
        return personSchema;
    }
  };

  const webPageSchema = pageData ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "mainEntity": getSchema(),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": pageData.title,
          "item": pageData.url
        }
      ]
    }
  } : null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
      {webPageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;