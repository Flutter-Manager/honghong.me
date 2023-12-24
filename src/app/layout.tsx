import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Toaster from "@/components/toaster";
import site from "@/config/site";
import "@/styles/globals.css";
import cn from "@/utils/cn";

import Providers from "./providers";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  keywords: site.keywords,
  creator: "GTU Smashers",
  openGraph: {
    url: site.url,
    type: "website",
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: "en-US",
    images: [
      {
        url: `${site.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [...site.favicons],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calcom = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calcom",
});

const monaspaceNeon = localFont({
  src: "../../public/fonts/MonaspaceNeon-Regular.woff",
  variable: "--font-monaspace-neon",
});

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html
      lang="en-US"
      className={cn(
        inter.variable,
        calcom.variable,
        monaspaceNeon.variable,
        "scroll-smooth",
      )}
      suppressHydrationWarning
    >
      <body className="relative font-default min-h-screen min-w-screen">
        <Providers>
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main
              id="skip-nav"
              className="mx-auto max-w-5xl px-6 py-24 sm:px-8"
            >
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
          <Image
            width={1512}
            height={550}
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
            src="/images/gradient-background-top.png"
            alt="Gradient background"
            priority
          />
          <Image
            width={1512}
            height={447}
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
            src="/images/gradient-background-bottom.png"
            alt="Gradient background"
            priority
          />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
