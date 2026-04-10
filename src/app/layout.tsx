import "./globals.css";

import type { Metadata } from "next";

const siteTitle =
  "Aziz Dhifaoui | Full Stack JavaScript Developer & Network Expert";
const siteDescription =
  "Portfolio of Aziz Dhifaoui, a Full Stack JavaScript Developer and Network Expert building scalable web systems across software engineering, networking, AI, and IoT.";
const defaultSiteUrl = "http://localhost:3000";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Aziz Dhifaoui Portfolio",
  keywords: [
    "Aziz Dhifaoui",
    "Full Stack JavaScript Developer",
    "Network Expert",
    "Scalable Web Applications",
    "Web Systems",
    "Networking",
    "AI",
    "IoT",
    "System Design",
  ],
  authors: [{ name: "Aziz Dhifaoui" }],
  creator: "Aziz Dhifaoui",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Aziz Dhifaoui Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aziz Dhifaoui - Full Stack JavaScript Developer & Network Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@azizdhifaoui",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
