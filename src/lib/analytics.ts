// Google Analytics Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Google Analytics 4
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventConfig: Record<string, string | number | boolean> = {
      event_category: category,
    };
    
    if (label !== undefined) {
      eventConfig.event_label = label;
    }
    
    if (value !== undefined) {
      eventConfig.value = value;
    }
    
    window.gtag('event', action, eventConfig);
  }
};

// Game-specific events
export const trackGameEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'game',
      ...parameters,
    });
  }
};

// Download tracking
export const trackDownload = (fileType: string, fileName: string) => {
  event({
    action: 'download',
    category: 'game',
    label: `${fileType}_${fileName}`,
  });
};

// Social media tracking
export const trackSocialShare = (platform: string) => {
  event({
    action: 'share',
    category: 'social',
    label: platform,
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: metric,
      value: Math.round(value),
      event_category: 'performance',
    });
  }
};

// Error tracking
export const trackError = (error: string) => {
  event({
    action: 'error',
    category: 'error',
    label: error,
  });
};

// User engagement tracking
export const trackEngagement = (action: string, section: string) => {
  event({
    action,
    category: 'engagement',
    label: section,
  });
};

// SEO performance tracking
export const trackSEOPerformance = (keyword: string, position: number) => {
  event({
    action: 'search_impression',
    category: 'seo',
    label: keyword,
    value: position,
  });
};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
} 