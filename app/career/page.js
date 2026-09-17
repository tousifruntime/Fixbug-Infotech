import CareerPageClient from "./CareerPageClient";

export const metadata = {
  title: "Careers — Join Fixbug Infotech | AI & Full-Stack Engineering Jobs",
  description:
    "Explore open roles at Fixbug Infotech: Senior AI/ML Systems Engineer, Lead Full-Stack Engineer, Cloud & DevOps Architect, and AI Software Engineering Internship. Remote & hybrid positions in Mumbai and worldwide.",
  keywords: [
    "Fixbug Infotech careers",
    "AI engineer jobs India",
    "full stack engineer jobs remote",
    "DevOps architect jobs",
    "AI internship Mumbai",
    "machine learning engineer jobs",
    "Next.js developer jobs",
    "Software company in ponda",
    "IT company in ponda",
    "IT internship in ponda",
    "Software internship in ponda",
    
  ],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    type: "website",
    url: "https://fixbuginfotech.online/career",
    siteName: "Fixbug Infotech",
    title: "Careers — Join Fixbug Infotech",
    description:
      "We're hiring AI engineers, full-stack developers, and cloud architects. Explore open roles and internships at Fixbug Infotech.",
    images: [
      {
        url: "/og-career.jpg", // add a 1200x630 image to /public
        width: 1200,
        height: 630,
        alt: "Careers at Fixbug Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Join Fixbug Infotech",
    description:
      "We're hiring AI engineers, full-stack developers, and cloud architects. Explore open roles and internships.",
    images: ["/og-career.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareerPage() {
  return <CareerPageClient />;
}