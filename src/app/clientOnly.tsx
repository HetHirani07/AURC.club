"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-3D3QCS21ZB" />
      {children}
    </>
  );
}
