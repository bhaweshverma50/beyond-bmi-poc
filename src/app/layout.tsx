import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeyondBMI - 3D Morphological Health",
  description: "Replace flawed BMI metrics with 3D morphological health and longevity risk assessments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
