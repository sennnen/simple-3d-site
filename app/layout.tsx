import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple 3D Site",
  description: "A minimal landing page with an embedded Spline 3D scene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
