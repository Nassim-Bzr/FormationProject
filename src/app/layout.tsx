import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sous-Loc Académie | Formation Sous-Location Immobilière",
  description: "Apprenez la sous-location immobilière sans devenir propriétaire. Formations de 249€ à 3000€ - Techniques éprouvées, accompagnement personnalisé, résultats garantis.",
  keywords: "sous-location, immobilier, investissement, formation, airbnb, location courte durée, revenus passifs, indépendance financière",
  authors: [{ name: "Sous-Loc Académie" }],
  creator: "Sous-Loc Académie",
  publisher: "Sous-Loc Académie",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sous-loc-academie.com",
    title: "Sous-Loc Académie | Formation Sous-Location Immobilière",
    description: "Maîtrisez la sous-location immobilière sans devenir propriétaire. Formations complètes de 249€ à 3000€ avec accompagnement personnalisé.",
    siteName: "Sous-Loc Académie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sous-Loc Académie | Formation Sous-Location Immobilière",
    description: "Générez des revenus avec la sous-location immobilière. Formations de 249€ à 3000€ - Techniques éprouvées et accompagnement.",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-neutral-900`}>
        <div className="min-h-screen">
          {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
