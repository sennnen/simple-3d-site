"use client";

import Script from "next/script";

// Replace with your own Viewer export URL after disabling the logo in Spline:
// Export → Spline Viewer → Play settings → hide Spline logo (Starter plan+)
const SPLINE_SCENE_URL =
  "https://prod.spline.design/HqdfCmOueigtautT/scene.splinecode";

export default function SplineScene() {
  return (
    <div className="relative h-full w-full">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <spline-viewer
        url={SPLINE_SCENE_URL}
        className="block h-full w-full"
      />
      {/* Demo scenes ship with a logo; mask it until you use your own export */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-11 w-[9.5rem] bg-zinc-950"
        aria-hidden
      />
    </div>
  );
}
