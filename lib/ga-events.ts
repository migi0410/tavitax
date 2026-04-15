// lib/ga-events.ts

export const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  } else {
    console.warn("GA4 chưa sẵn sàng hoặc bị chặn bởi trình duyệt.");
  }
};