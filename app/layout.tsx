import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/components/Navbar";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Wake",
  description: "Your documents, awake. Upload any PDF and start a voice conversation — ask questions, explore ideas, and learn just by talking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.variable} ${monaSans.variable} antialiased`}>
        <ClerkProvider
          appearance={{
            layout: {
              socialButtonsVariant: "iconButton",
            },
            variables: {
              colorPrimary: "#6B2318",
              colorBackground: "#F0E6CE",
              colorText: "#1C2B3A",
              colorTextSecondary: "#3A4A5C",
              colorInputBackground: "#ffffff",
              colorInputText: "#1C2B3A",
              borderRadius: "0.625rem",
              fontFamily: "'Mona Sans', sans-serif",
            },
            elements: {
              modalBackdrop: "backdrop-blur-sm bg-black/50",
              card: "shadow-[var(--shadow-soft-lg)]",
              headerTitle: "font-serif",
              headerSubtitle: "text-[var(--text-secondary)]",
              formButtonPrimary:
                "bg-[#6B2318] hover:bg-[#7D2E1F] transition-colors",
            },
          }}
        >
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
