import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김보성 | CV",
  description:
    "김보성의 CV/Portfolio — Mechanical Engineering & Physics, Research, Robotics, EdTech.",
  metadataBase: new URL("https://kbs-cv-2026.vercel.app"),
  openGraph: {
    title: "김보성 | CV",
    description:
      "Mechanical Engineering & Physics — Research / Robotics / EdTech",
    url: "https://kbs-cv-2026.vercel.app",
    siteName: "KBS CV",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "김보성 CV",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김보성 | CV",
    description:
      "Physics & Mechanical Engineering — Research / Robotics / EdTech",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
