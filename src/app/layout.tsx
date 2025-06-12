import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Sous-Loc Académie | École Supérieure de Formation",
  description: "Découvrez Sous-Loc Académie, votre école supérieure de formation avec plus de 20 diplômes et cursus. Formations en Informatique, Commerce, Marketing et Communication.",
  keywords: "école supérieure, formation, diplômes, informatique, commerce, marketing, communication, BTS, Bachelor, Master",
  authors: [{ name: "Sous-Loc Académie" }],
  creator: "Sous-Loc Académie",
  publisher: "Sous-Loc Académie",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sous-loc-academie.com",
    title: "Sous-Loc Académie | École Supérieure de Formation",
    description: "Découvrez Sous-Loc Académie, votre école supérieure de formation avec plus de 20 diplômes et cursus.",
    siteName: "Sous-Loc Académie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sous-Loc Académie | École Supérieure de Formation",
    description: "Découvrez Sous-Loc Académie, votre école supérieure de formation avec plus de 20 diplômes et cursus.",
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
      </body>
    </html>
  );
}
