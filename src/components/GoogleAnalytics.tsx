import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

const GoogleAnalytics = ({ trackingId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId && trackingId !== 'G-XXXXXXXXXX') {
      // Track page views
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, [trackingId]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('event', eventName, {
          event_category: 'User Interaction',
          event_label: window.location.pathname,
          ...parameters,
        });
      }
    }
  };

  // Track form submissions
  const trackFormSubmission = (formType: string) => {
    trackEvent('form_submit', {
      event_category: 'Lead Generation',
      form_type: formType,
      value: 1,
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      event_category: 'User Engagement',
      button_name: buttonName,
      button_location: location,
    });
  };

  // Track portfolio views
  const trackPortfolioView = (projectName: string) => {
    trackEvent('portfolio_view', {
      event_category: 'Content Engagement',
      project_name: projectName,
    });
  };

  // Track service inquiries
  const trackServiceInquiry = (serviceName: string) => {
    trackEvent('service_inquiry', {
      event_category: 'Lead Generation', 
      service_name: serviceName,
      value: 10,
    });
  };

  // Attach tracking functions to window for global access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).analytics = {
        trackEvent,
        trackFormSubmission,
        trackButtonClick,
        trackPortfolioView,
        trackServiceInquiry,
      };
    }
  }, []);

  // Only render Google Analytics script if we have a valid tracking ID
  if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <Helmet>
      {/* Google Analytics Global Site Tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });

          // Enhanced E-commerce tracking setup
          gtag('config', '${trackingId}', {
            custom_map: {
              'custom_parameter_1': 'service_type',
              'custom_parameter_2': 'project_value'
            }
          });

          // Track scroll depth
          let scrollDepthTracked = [];
          window.addEventListener('scroll', function() {
            let scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            [25, 50, 75, 90].forEach(function(milestone) {
              if (scrollPercent >= milestone && scrollDepthTracked.indexOf(milestone) === -1) {
                gtag('event', 'scroll_depth', {
                  event_category: 'User Engagement',
                  event_label: milestone + '%',
                  value: milestone
                });
                scrollDepthTracked.push(milestone);
              }
            });
          });

          // Track time on page
          let timeOnPage = Date.now();
          window.addEventListener('beforeunload', function() {
            let timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
            gtag('event', 'time_on_page', {
              event_category: 'User Engagement',
              event_label: window.location.pathname,
              value: timeSpent
            });
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;