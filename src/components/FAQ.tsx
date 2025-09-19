import { useState } from "react";
import { ChevronDown, MessageCircle, Clock, DollarSign, Zap, Shield, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "What's included in your Meta Ads management service?",
      answer: "Complete campaign setup, audience research and targeting, creative production (images/videos), ad copywriting, daily optimization, weekly performance reports, and monthly strategy calls. I handle everything from initial audit to scaling successful campaigns.",
      icon: MessageCircle,
      category: "Meta Ads"
    },
    {
      id: 2,
      question: "How long does website development typically take?",
      answer: "Simple portfolio/business websites: 5-10 days. E-commerce sites: 2-3 weeks. Complex web applications: 3-6 weeks. Timeline depends on features, content readiness, and revision rounds. I provide detailed project timelines upfront.",
      icon: Clock,
      category: "Web Development"
    },
    {
      id: 3,
      question: "What are your pricing models and payment terms?",
      answer: "Project-based pricing for web development and video editing. Monthly retainer for Meta Ads management (starting at $1,500/month + ad spend). 50% upfront, 50% on completion. Custom quotes based on project scope and requirements.",
      icon: DollarSign,
      category: "Pricing"
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! All projects include 30 days of free support and bug fixes. Ongoing maintenance packages available for websites. Meta Ads clients receive continuous optimization and support as part of monthly retainer.",
      icon: Headphones,
      category: "Support"
    },
    {
      id: 5,
      question: "What makes your video editing services unique?",
      answer: "I specialize in performance-driven video content for social media and ads. This includes hook optimization, retention editing techniques, call-to-action integration, and format optimization for different platforms (TikTok, Instagram, YouTube, Facebook).",
      icon: Zap,
      category: "Video Editing"
    },
    {
      id: 6,
      question: "How do you ensure project confidentiality and data security?",
      answer: "All client projects are covered by comprehensive NDAs. I use secure project management tools, encrypted file sharing, and follow industry-standard data protection practices. Your business information and creative assets are completely secure.",
      icon: Shield,
      category: "Security"
    },
    {
      id: 7,
      question: "Can you work with existing brand guidelines and assets?",
      answer: "Absolutely! I work seamlessly with existing brand guidelines, style guides, and asset libraries. If you don't have formal guidelines, I can help establish them as part of the project to ensure consistent brand representation.",
      icon: MessageCircle,
      category: "Branding"
    },
    {
      id: 8,
      question: "What's your process for Meta Ads campaign optimization?",
      answer: "Daily monitoring and micro-adjustments, weekly performance analysis and reporting, bi-weekly creative refreshes, monthly strategic reviews and scaling decisions. I focus on improving key metrics: CTR, CPM, conversion rates, and overall ROAS.",
      icon: Zap,
      category: "Meta Ads"
    }
  ];

  const categories = ["All", "Meta Ads", "Web Development", "Video Editing", "Pricing", "Support"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-mint rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-primary rounded-full animate-drift"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            Frequently Asked <span className="gradient-text animate-gradient-shift">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Get answers to common questions about my services, process, and pricing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === category
                  ? 'bg-mint text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-mint hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card 
              key={faq.id} 
              className="card-3d animate-scale-in transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-start space-x-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-mint/10 rounded-lg flex items-center justify-center">
                    <faq.icon className="h-4 w-4 text-mint" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-charcoal group-hover:text-mint transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <span className="skill-tag text-xs mt-2 inline-block">{faq.category}</span>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <div className="pl-12 pr-8">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-mint/10 to-primary/10 rounded-2xl animate-fade-in-up">
          <MessageCircle className="h-12 w-12 text-mint mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-charcoal mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Can't find the answer you're looking for? I'm here to help with any specific questions about your project.
          </p>
          <button 
            className="btn-hero"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;