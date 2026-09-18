import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { GoogleAnalytics } from '@next/third-parties/google'

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://fixbuginfotech.online"),
  title: {
    default: "Fixbug Infotech — AI Software Development & Automation Agency",
    template: "%s | Fixbug Infotech",
  },
  description:
    "Fixbug Infotech builds AI-powered software, autonomous workflows, and high-performance web platforms for enterprises. Custom LLMs, RAG pipelines, Next.js apps, and cloud-native architecture.",
  keywords: [
  "Fixbug Infotech",
  "web development company in Ponda",
  "website designer in Ponda",
  "IT company in Ponda",
  "software company in Ponda",
  "web development company in Goa",
  "AI software development",
  "AI automation agency",
  "custom LLM development",
  "RAG pipeline development",
  "Next.js development",
  "enterprise software development",
  "IT support in Ponda",
],
  authors: [{ name: "Fixbug Infotech" }],
  creator: "Fixbug Infotech",
  publisher: "Fixbug Infotech",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fixbuginfotech.online",
    siteName: "Fixbug Infotech",
     default: "Fixbug Infotech | Web Development & IT Company in Ponda, Goa",
     template: "%s | Fixbug Infotech",
    description:  "Fixbug Infotech is a web development and IT company in Ponda, Goa, providing website development, AI software, automation, IT solutions, and technology services for businesses and individuals.",
     images: [
      {
        url: "/og-image.jpg", // add a real 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Fixbug Infotech — Software That Thinks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixbug Infotech — AI Software Development & Automation Agency",
    description:
      "We engineer AI-powered digital products, autonomous workflows, and modern web platforms for forward-thinking enterprises.",
    images: ["/og-image.jpg"],
    // creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // verification: {
  //   google: "your-google-search-console-verification-code",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en" className={`${plusJakarta.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
        <GoogleAnalytics gaId="G-4GH13Y33VR" />
      </body>
    </html>
  );
}