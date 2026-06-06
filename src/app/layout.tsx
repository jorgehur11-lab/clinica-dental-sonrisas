import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clínica Dental Sonrisa Perfecta · Bolivia",
    template: "%s · Sonrisa Perfecta",
  },
  description:
    "Clínica dental de especialidades en Santa Cruz, Bolivia. Implantes, ortodoncia, blanqueamiento y más. Agenda tu cita en línea.",
  openGraph: {
    title: "Clínica Dental Sonrisa Perfecta",
    description: "Tu sonrisa, rediseñada. Clínica dental de especialidades en Santa Cruz, Bolivia.",
    type: "website",
    locale: "es_BO",
  },
  keywords: [
    "clínica dental Santa Cruz",
    "dentista Santa Cruz Bolivia",
    "implantes dentales Equipetrol",
    "ortodoncia Santa Cruz",
    "blanqueamiento dental Bolivia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-[#FAFAF8] text-[#0D0D0D] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
