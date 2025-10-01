import { Star, TrendingUp, Users, Award } from 'lucide-react';
import techCorpLogo from '@/assets/client-techcorp.png';
import digitalAgencyLogo from '@/assets/client-digital-agency.png';
import ecommerceLogo from '@/assets/client-ecommerce.png';
import creativeStudioLogo from '@/assets/client-creative-studio.png';
import marketingProLogo from '@/assets/client-marketing-pro.png';
import webSolutionsLogo from '@/assets/client-web-solutions.png';

export const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Avg ROI Increase',
      color: 'text-green-600'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Satisfaction',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      value: '2+',
      label: 'Years Experience',
      color: 'text-purple-600'
    }
  ];

  const clientLogos = [
    { name: 'TechCorp', logo: techCorpLogo },
    { name: 'Digital Agency', logo: digitalAgencyLogo },
    { name: 'E-commerce Plus', logo: ecommerceLogo },
    { name: 'Creative Studio', logo: creativeStudioLogo },
    { name: 'Marketing Pro', logo: marketingProLogo },
    { name: 'Web Solutions', logo: webSolutionsLogo }
  ];

  const quickStats = [
    '95% of projects delivered on time',
    '24-hour average response time',
    '100+ successful campaigns launched',
    'Featured in top design communities'
  ];

  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container mx-auto">
        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-3 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-charcoal animate-counter">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-charcoal mb-8 animate-fade-in-up">
            Trusted by Amazing Clients
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-8 mx-auto filter hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-mint/5 to-mint-light/5 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {quickStats.map((stat, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-mint rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};