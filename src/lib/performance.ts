export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure page load time
  measurePageLoad(): void {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        this.recordMetric("pageLoad", loadTime);
      });
    }
  }

  // Measure component render time
  measureComponentRender(componentName: string, startTime: number): void {
    const renderTime = performance.now() - startTime;
    this.recordMetric(`component_${componentName}`, renderTime);
  }

  // Record custom metrics
  recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(value);

    // Send to analytics if needed
    this.sendToAnalytics(name, value);
  }

  // Get average metric
  getAverageMetric(name: string): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  // Send metrics to analytics
  private sendToAnalytics(name: string, value: number): void {
    // Implement your analytics service here
    if (process.env.NODE_ENV === "development") {
      console.log(`📊 ${name}: ${value.toFixed(2)}ms`);
    }
  }

  // Measure Core Web Vitals
  measureCoreWebVitals(): void {
    if (typeof window !== "undefined") {
      // LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric("LCP", lastEntry.startTime);
      }).observe({ entryTypes: ["largest-contentful-paint"] });

      // FID (First Input Delay)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.recordMetric("FID", entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ["first-input"] });

      // CLS (Cumulative Layout Shift)
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0;
          }
        });
        this.recordMetric('CLS', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Get all metrics
  getMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    for (const [name] of this.metrics) {
      result[name] = this.getAverageMetric(name);
    }
    return result;
  }

  // Reset metrics
  resetMetrics(): void {
    this.metrics.clear();
  }
}

// Performance hook
export const usePerformance = () => {
  const monitor = PerformanceMonitor.getInstance();

  const measureRender = (componentName: string) => {
    const startTime = performance.now();
    return () => monitor.measureComponentRender(componentName, startTime);
  };

  const measureInteraction = (name: string, startTime: number) => {
    const duration = performance.now() - startTime;
    monitor.recordMetric(`interaction_${name}`, duration);
  };

  const measureApiCall = (name: string, startTime: number) => {
    const duration = performance.now() - startTime;
    monitor.recordMetric(`api_${name}`, duration);
  };

  return {
    measureRender,
    measureInteraction,
    measureApiCall,
    recordMetric: monitor.recordMetric.bind(monitor),
    getMetrics: monitor.getMetrics.bind(monitor),
  };
};

export const performanceMonitor = PerformanceMonitor.getInstance();
 