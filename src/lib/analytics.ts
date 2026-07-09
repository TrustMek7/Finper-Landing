export type AnalyticsEventName =
  | 'cta_click'
  | 'waitlist_submit'
  | 'feature_interest'
  | 'pricing_click'
  | 'plan_selected'
  | 'download_click'
  | 'mockup_click'
  | 'scroll_depth'
  | 'page_engagement';

type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsProperties = Record<string, AnalyticsValue>;

type AnalyticsPayload = {
  event: AnalyticsEventName;
  properties: AnalyticsProperties;
  timestamp: string;
};

type AnalyticsWindow = Window & {
  gtag?: (command: 'event', eventName: string, params?: AnalyticsProperties) => void;
  plausible?: (eventName: string, options?: { props?: AnalyticsProperties }) => void;
  umami?: {
    track: (eventName: string, properties?: AnalyticsProperties) => void;
  };
};

let engagementTrackingStarted = false;

export function trackEvent(event: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  const cleanProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  ) as AnalyticsProperties;

  const payload: AnalyticsPayload = {
    event,
    properties: cleanProperties,
    timestamp: new Date().toISOString(),
  };

  if (import.meta.env.DEV) {
    console.info('[FinPer analytics]', payload);
  }

  if (typeof window === 'undefined') return;

  const analyticsWindow = window as AnalyticsWindow;
  window.dispatchEvent(new CustomEvent('finper:analytics', { detail: payload }));
  analyticsWindow.gtag?.('event', event, cleanProperties);
  analyticsWindow.plausible?.(event, { props: cleanProperties });
  analyticsWindow.umami?.track(event, cleanProperties);
}

export function initEngagementTracking() {
  if (typeof window === 'undefined' || engagementTrackingStarted) {
    return () => undefined;
  }

  engagementTrackingStarted = true;
  const startedAt = Date.now();
  const depthMarks = [25, 50, 75, 90];
  const sentDepthMarks = new Set<number>();
  let finalEventSent = false;

  const getScrollDepth = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return 100;
    return Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));
  };

  const handleScroll = () => {
    const currentDepth = getScrollDepth();
    depthMarks.forEach((mark) => {
      if (currentDepth >= mark && !sentDepthMarks.has(mark)) {
        sentDepthMarks.add(mark);
        trackEvent('scroll_depth', {
          depth_percent: mark,
        });
      }
    });
  };

  const sendEngagementEvent = (reason: string) => {
    if (finalEventSent) return;
    finalEventSent = true;
    trackEvent('page_engagement', {
      reason,
      time_on_page_seconds: Math.round((Date.now() - startedAt) / 1000),
      max_scroll_percent: getScrollDepth(),
    });
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      sendEngagementEvent('visibility_hidden');
    }
  };

  const handlePageHide = () => sendEngagementEvent('pagehide');

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('pagehide', handlePageHide);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('pagehide', handlePageHide);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    sendEngagementEvent('cleanup');
    engagementTrackingStarted = false;
  };
}
