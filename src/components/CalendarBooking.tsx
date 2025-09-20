import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export const CalendarBooking = () => {
  const [selectedService, setSelectedService] = useState('');

  const consultationTypes = [
    {
      id: 'strategy',
      title: 'Strategy Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Discuss your project goals and get actionable insights',
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      id: 'project',
      title: 'Project Planning',
      duration: '60 minutes',
      price: '$50',
      description: 'Deep dive into project requirements and timeline',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      id: 'review',
      title: 'Portfolio Review',
      duration: '45 minutes',
      price: '$75',
      description: 'Get feedback on your current digital presence',
      icon: Video,
      color: 'bg-purple-500'
    }
  ];

  const handleBooking = (type: string) => {
    setSelectedService(type);
    
    // Track booking attempt
    if (window.analytics?.trackEvent) {
      window.analytics.trackEvent('calendar_booking_attempt', { 
        service_type: type 
      });
    }
    
    // In real implementation, this would open Calendly or Cal.com
    toast.success('Redirecting to calendar booking...');
    
    // Simulate external calendar link
    console.log('Opening calendar for:', type);
  };

  return (
    <div className="bg-gradient-to-r from-mint/5 to-mint-light/5 rounded-xl p-8 animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-mint/10 rounded-full mb-4">
          <Calendar className="h-6 w-6 text-mint" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-2">Book a Consultation</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Schedule a personalized consultation to discuss your project needs and goals
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        {consultationTypes.map((type) => (
          <div
            key={type.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              selectedService === type.id
                ? 'border-mint bg-mint/5 shadow-md'
                : 'border-gray-200 hover:border-mint/50 hover:bg-mint/2'
            }`}
            onClick={() => setSelectedService(type.id)}
          >
            <div className="flex items-start space-x-4">
              <div className={`${type.color} p-2 rounded-lg`}>
                <type.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-charcoal">{type.title}</h4>
                  <span className="text-mint font-bold">{type.price}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>{type.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <Button 
          onClick={() => selectedService && handleBooking(selectedService)}
          disabled={!selectedService}
          className="w-full bg-mint hover:bg-mint-dark text-white group relative overflow-hidden disabled:opacity-50"
        >
          <span className="relative z-10 flex items-center">
            <Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            {selectedService ? 'Schedule Now' : 'Select a consultation type'}
          </span>
          {selectedService && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          All consultations are conducted via Google Meet or Zoom
        </p>
      </div>
    </div>
  );
};