import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sheikh transformed our digital presence completely. The Meta ad campaigns delivered 300% ROI in just 2 months. His attention to detail and creative approach is exceptional.",
      project: "Meta Ads & Website Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Fusion Restaurant",
      role: "Owner",
      image: "/api/placeholder/80/80", 
      rating: 5,
      text: "The website Sheikh built for us is stunning and functional. Orders increased by 150% since launch. He understood our vision perfectly and delivered beyond expectations.",
      project: "Restaurant Website & Branding"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "Creative Agency Co.",
      role: "Creative Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sheikh's video editing and motion graphics work is top-tier. He completed our corporate video series ahead of schedule and the quality exceeded our highest expectations.",
      project: "Video Production & Motion Graphics"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "E-commerce Plus",
      role: "CEO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Professional, responsive, and incredibly talented. Sheikh's automation solutions saved us 20+ hours per week. The ROI was immediate and substantial.",
      project: "E-commerce Automation & Ads"
    }
  ];

  const stats = [
    { label: "Client Satisfaction", value: "98%", icon: "👥" },
    { label: "Projects Completed", value: "50+", icon: "✅" },
    { label: "Average ROI Increase", value: "250%", icon: "📈" },
    { label: "Response Time", value: "< 2hrs", icon: "⚡" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mint rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            Client <span className="gradient-text animate-gradient-shift">Success Stories</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Real results from real clients. See how I've helped businesses grow and succeed.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 stagger-container">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center card-3d animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 stagger-container">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="p-8 card-3d animate-scale-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-mint opacity-60" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-mint font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="skill-tag text-xs">{testimonial.project}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Footer */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex justify-center items-center space-x-2 text-gray-600 mb-4">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="font-semibold">4.9/5 average rating</span>
            <span>•</span>
            <span>Based on 30+ client reviews</span>
          </div>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Join these successful businesses and take your digital presence to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;