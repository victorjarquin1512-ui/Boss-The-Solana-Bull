import type { Metadata } from "next";
import { Inter } from "next/font/google"; // High-end tech font
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // --- SEO & Tab Title ---
  title: "$BOSS | Bullish On Solana Season",
  description: "The Official Solana Bull. Relentlessly bullish on the Solana Ecosystem. It's ALWAYS Solana Season for the herd.",
  
  // --- Favicons ---
  icons: {
    icon: "/favicon.ico", // Ensure your converted bull icon is in /public
    apple: "/apple-touch-icon.png",
  },

  // --- X (Twitter) & Telegram Card ---
  // This makes your link look like a professional ad when shared
  openGraph: {
    title: "$BOSS | Bullish On Solana Season",
    description: "Join the herd. The most bullish community on Solana.",
    url: "https://your-boss-site.vercel.app",
    siteName: "$BOSS Solana",
    images: [
      {
        url: "/boss-cyber.jpg", // The "Cyber Bull" image from /public
        width: 1200,
        height: 630,
        alt: "$BOSS The Solana Bull",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$BOSS | Bullish On Solana Season",
    description: "Always Bullish. Always Solana. Join $BOSS.",
    images: ["/boss-cyber.jpg"],
    site: "@SolanaBullBoss",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}

        {/* --- Jupiter Terminal Script --- */}
        {/* This loads the swap engine so your SwapSection.tsx can function */}
        <Script 
          src="https://terminal.jup.ag/main-v3.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}