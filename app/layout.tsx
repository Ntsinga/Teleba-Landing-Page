import type { Metadata } from "next";
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

const BASE_URL = "https://teleba.io";
const ICON_VERSION = "20260617a";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Teleba",
  title: {
    default: "Teleba",
    template: "%s | Teleba",
  },
  description:
    "Teleba digitizes telecom and banking agent operations in Uganda. Reconcile accounts instantly, track commissions, manage float, and grow your business — all from one app.",
  keywords: [
    "mobile money agent Uganda",
    "MTN agent app",
    "Airtel Money agent",
    "telecom agent reconciliation",
    "banking agent software",
    "float management Uganda",
    "commission tracking agents",
    "agent business app Uganda",
    "Teleba",
  ],
  authors: [{ name: "Teleba", url: BASE_URL }],
  creator: "Teleba",
  publisher: "Teleba",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: BASE_URL,
    siteName: "Teleba",
    title: "Teleba | Telecom and Agent Banking Platform",
    description:
      "Stop drowning in paperwork. Teleba helps mobile money and banking agents in Uganda reconcile accounts, track commissions, and grow their business.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Teleba — The Agent-First Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teleba | Telecom and Agent Banking Platform",
    description:
      "Stop drowning in paperwork. Teleba helps mobile money and banking agents in Uganda reconcile accounts, track commissions, and grow their business.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [{ url: `/icon.png?v=${ICON_VERSION}`, type: "image/png" }],
    apple: [{ url: `/apple-icon.png?v=${ICON_VERSION}`, type: "image/png" }],
    shortcut: `/icon.png?v=${ICON_VERSION}`,
  },
  appleWebApp: {
    title: "Teleba",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
