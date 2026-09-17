import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

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
  title: "Fixbug Infotech — Software That Thinks",
  description:
    "AI-powered software solutions. We build, automate, and scale intelligent systems for businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
