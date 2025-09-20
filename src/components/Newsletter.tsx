import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual newsletter service
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
      
      // Track newsletter signup
      if (window.analytics?.trackEvent) {
        window.analytics.trackEvent('newsletter_signup', { email });
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-mint/10 to-mint-light/10 rounded-xl p-8 text-center animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">You're all set!</h3>
        <p className="text-gray-600">
          Thank you for subscribing. You'll receive our latest updates and exclusive content.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-mint/5 to-mint-light/5 rounded-xl p-8 animate-fade-in-up">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-mint/10 rounded-full mb-4">
          <Mail className="h-6 w-6 text-mint" />
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-2">Stay Updated</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Get the latest insights on digital marketing, web development tips, and exclusive project case studies delivered to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 bg-white border-mint/20 focus:border-mint focus:ring-mint/20"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          className="bg-mint hover:bg-mint-dark text-white px-6 group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  );
};