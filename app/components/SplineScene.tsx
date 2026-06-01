"use client";

import Script from "next/script";

// Official Spline docs example scene (public Viewer export)
const SPLINE_SCENE_URL =
  "https://prod.spline.design/HqdfCmOueigtautT/scene.splinecode";

export default function SplineScene() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <spline-viewer
        url={SPLINE_SCENE_URL}
        className="block h-full w-full"
      />
    </>
  );
}
