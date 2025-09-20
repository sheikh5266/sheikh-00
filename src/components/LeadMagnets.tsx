import { Button } from '@/components/ui/button';
import { Download, FileText, Video, CheckCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

export const LeadMagnets = () => {
  const magnets = [
    {
      id: 1,
      title: 'Digital Marketing Checklist',
      description: 'Complete 47-point checklist to optimize your digital marketing campaigns',
      type: 'PDF Guide',
      icon: CheckCircle,
      color: 'bg-blue-500',
      downloadUrl: '#',
      features: ['Campaign Setup', 'Targeting Guide', 'Optimization Tips']
    },
    {
      id: 2,
      title: 'Web Design Brief Template',
      description: 'Professional project brief template to streamline your web development projects',
      type: 'Editable Template',
      icon: FileText,
      color: 'bg-green-500',
      downloadUrl: '#',
      features: ['Client Requirements', 'Timeline Planning', 'Budget Breakdown']
    },
    {
      id: 3,
      title: 'Video Marketing Masterclass',
      description: 'Free 30-minute video course on creating engaging social media content',
      type: 'Video Course',
      icon: Video,
      color: 'bg-purple-500',
      downloadUrl: '#',
      features: ['Content Strategy', 'Editing Techniques', 'Platform Optimization']
    }
  ];

  const handleDownload = (magnet: typeof magnets[0]) => {
    // Track download
    if (window.analytics?.trackEvent) {
      window.analytics.trackEvent('lead_magnet_download', { 
        title: magnet.title,
        type: magnet.type 
      });
    }
    
    toast.success(`${magnet.title} will be sent to your email!`);
    
    // In real implementation, this would trigger email capture and download
    console.log('Downloading:', magnet.title);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            Free <span className="gradient-text">Resources</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            Download these valuable resources to boost your digital marketing and web development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magnets.map((magnet, index) => (
            <div 
              key={magnet.id}
              className="portfolio-card p-6 group hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className={`${magnet.color} p-3 rounded-lg`}>
                    <magnet.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-mint/10 text-mint px-2 py-1 rounded-full text-xs font-medium">
                    FREE
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {magnet.type}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-mint transition-colors">
                    {magnet.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {magnet.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {magnet.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="h-3 w-3 text-mint fill-current" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <Button 
                  onClick={() => handleDownload(magnet)}
                  className="w-full bg-gradient-to-r from-mint to-mint-light hover:from-mint-dark hover:to-mint group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-600 mb-6">
            Want personalized advice for your project? Let's chat!
          </p>
          <Button 
            className="btn-hero"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};