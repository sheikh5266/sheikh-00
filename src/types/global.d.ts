declare global {
  interface Window {
    analytics?: {
      trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
      trackFormSubmission: (formType: string) => void;
      trackButtonClick: (buttonName: string, location: string) => void;
      trackPortfolioView: (projectName: string) => void;
      trackServiceInquiry: (serviceName: string) => void;
    };
    gtag?: (...args: any[]) => void;
  }
}

export {};