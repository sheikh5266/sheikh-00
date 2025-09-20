import { useEffect } from 'react';

interface PerformanceEntryWithProcessingStart extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (window.analytics?.trackEvent) {
                window.analytics.trackEvent('performance_lcp', {
                  value: Math.round(entry.startTime),
                  rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor'
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const fidEntry = entry as PerformanceEntryWithProcessingStart;
              if (fidEntry.processingStart && window.analytics?.trackEvent) {
                const fidValue = Math.round(fidEntry.processingStart - entry.startTime);
                window.analytics.trackEvent('performance_fid', {
                  value: fidValue,
                  rating: fidValue < 100 ? 'good' : fidValue < 300 ? 'needs-improvement' : 'poor'
                });
              }
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift (CLS)
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const layoutEntry = entry as LayoutShiftEntry;
              if (!layoutEntry.hadRecentInput) {
                clsValue += layoutEntry.value;
              }
            }
            
            if (window.analytics?.trackEvent) {
              window.analytics.trackEvent('performance_cls', {
                value: Math.round(clsValue * 1000) / 1000,
                rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }

      // Page Load Performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation && window.analytics?.trackEvent) {
            window.analytics.trackEvent('performance_page_load', {
              load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
              dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
              first_byte: Math.round(navigation.responseStart - navigation.fetchStart)
            });
          }
        }, 0);
      });
    };

    observePerformance();

    // Monitor JavaScript errors
    const handleError = (event: ErrorEvent) => {
      if (window.analytics?.trackEvent) {
        window.analytics.trackEvent('javascript_error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (window.analytics?.trackEvent) {
        window.analytics.trackEvent('unhandled_promise_rejection', {
          reason: event.reason?.toString() || 'Unknown error'
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null; // This component doesn't render anything
};