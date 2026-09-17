import ContactPageClient from "./ContactPageClient.js";

export const metadata = {
  title: "Contact Us — Fixbug Infotech | AI & Software Development Inquiries",
  description:
    "Get in touch with Fixbug Infotech for AI product development, automation, and custom software projects. Guaranteed response within 1 business day. Based in Mumbai, working with clients worldwide.",
  keywords: [
    "contact Fixbug Infotech",
    "AI software development inquiry",
    "hire software development agency",
    "custom software consultation Mumbai",
    "AI product development contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://fixbuginfotech.online/contact",
    siteName: "Fixbug Infotech",
    title: "Contact Fixbug Infotech",
    description:
      "Reach out to discuss AI products, automation, or custom software projects. We respond within 1 business day.",
    images: [
      {
        url: "/og-contact.jpg", // add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Contact Fixbug Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fixbug Infotech",
    description:
      "Reach out to discuss AI products, automation, or custom software projects. We respond within 1 business day.",
    images: ["/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}