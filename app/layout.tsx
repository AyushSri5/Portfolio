import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Srivastava — Software & AI Engineer",
  description:
    "Software engineer building scalable backend systems and AI-powered applications. Backend & distributed systems, RAG and LLM applications. Open to SDE, AI Engineer and Forward Deployed Engineer roles.",
  openGraph: {
    title: "Ayush Srivastava — Software & AI Engineer",
    description: "Backend & Distributed Systems | AI/RAG Applications",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
