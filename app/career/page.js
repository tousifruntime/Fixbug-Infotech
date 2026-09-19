import CareerPageClient from "./CareerPageClient";

const SITE_URL = "https://fixbuginfotech.online";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Careers, Internships & Training in Ponda, Goa | Fixbug Infotech",
  description:
    "Explore IT jobs, internships and software training programs at Fixbug Infotech, a software company in Ponda, Goa. Freshers and final-year students welcome.",
  keywords: [
    "IT jobs in Ponda",
    "software jobs in Goa",
    "internship in Ponda",
    "software internship in Goa",
    "fresher jobs in Goa",
    "software training in Ponda",
    "MERN stack training in Goa",
    "Python course in Ponda",
    "IT training institute in Ponda",
    "careers at Fixbug Infotech",
  ],
  alternates: { canonical: "/career" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/career`,
    siteName: "Fixbug Infotech",
    locale: "en_IN",
    title: "Careers, Internships & Training in Ponda, Goa | Fixbug Infotech",
    description:
      "IT jobs, software internships and hands-on training programs at a software company in Ponda, Goa.",
    images: [
      {
        url: "/og-career.jpg", // TODO: add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Careers, internships and training at Fixbug Infotech, Ponda, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers, Internships & Training in Ponda, Goa | Fixbug Infotech",
    description:
      "IT jobs, software internships and training programs in Ponda, Goa.",
    images: ["/og-career.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function CareerPage() {
  return <CareerPageClient />;
}