import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "core banking",
    "ledger",
    "double-entry accounting",
    "fintech",
    "open source",
    "self-hosted",
    "event sourcing",
    "AGPL",
    "gRPC",
    "Kafka",
  ],
  authors: [{ name: site.company }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  // Icons and social images are wired automatically from the app-dir file
  // conventions: icon.svg, apple-icon.png, favicon.ico, opengraph-image.png,
  // twitter-image.png. The web app manifest comes from app/manifest.ts.
};

export const viewport: Viewport = {
  themeColor: "#0a0d12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
