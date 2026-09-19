import ContactPageClient from "./ContactPageClient";

const SITE_URL = "https://fixbuginfotech.online";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contact Fixbug Infotech | Software Company in Ponda, Goa",
  description:
    "Contact Fixbug Infotech, a software company & IT training institute in Ponda, Goa. Get a free quote or enquire about software training courses.",
  keywords: [
    "contact software company in Ponda",
    "IT company in Ponda contact",
    "software company in Ponda Goa phone number",
    "website development quote Ponda",
    "software training in Ponda enquiry",
    "internship in Ponda",
    "custom software consultation Goa",
    "Fixbug Infotech contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: "Fixbug Infotech",
    locale: "en_IN",
    title: "Contact Fixbug Infotech | Software Company in Ponda, Goa",
    description:
      "Get in touch for software development, websites, apps, AI automation or software training in Ponda, Goa.",
    images: [
      {
        url: "/og-contact.jpg", // TODO: add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Contact Fixbug Infotech, software company in Ponda, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fixbug Infotech | Software Company in Ponda, Goa",
    description:
      "Get in touch for software development, websites, apps, AI automation or software training in Ponda, Goa.",
    images: ["/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}