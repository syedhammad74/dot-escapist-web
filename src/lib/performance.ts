// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load performance
  measurePageLoad: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'ms');
        }
      });
    }
  },

  // Measure Core Web Vitals
  measureCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime, 'ms');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime, 'ms');
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  },

  // Optimize images
  optimizeImages: () => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" to images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }
  },

  // Preload critical resources
  preloadCriticalResources: () => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/GeistVF.woff';
      fontLink.as = 'font';
      fontLink.type = 'font/woff';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'preload';
      cssLink.href = '/globals.css';
      cssLink.as = 'style';
      document.head.appendChild(cssLink);
    }
  },

  // Optimize animations
  optimizeAnimations: () => {
    if (typeof window !== 'undefined') {
      // Use Intersection Observer to pause animations when not visible
      const animatedElements = document.querySelectorAll('[data-animate]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach((el) => observer.observe(el));
    }
  },

  // Debounce function for performance
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for performance
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Initialize all performance optimizations
  init: () => {
    performanceMonitor.measurePageLoad();
    performanceMonitor.measureCoreWebVitals();
    performanceMonitor.optimizeImages();
    performanceMonitor.preloadCriticalResources();
    performanceMonitor.optimizeAnimations();
  }
};

// Export performance utilities
export default performanceMonitor;
 