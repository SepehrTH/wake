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
  title: "Bookified",
  description: "Transform your books into interactive AI conversations. Upload your PDFs and chat with them via voice.",
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
              colorPrimary: "#663820",
              colorBackground: "#f8f4e9",
              colorText: "#212a3b",
              colorTextSecondary: "#3d485e",
              colorInputBackground: "#ffffff",
              colorInputText: "#212a3b",
              borderRadius: "0.625rem",
              fontFamily: "'Mona Sans', sans-serif",
            },
            elements: {
              modalBackdrop: "backdrop-blur-sm bg-black/50",
              card: "shadow-[var(--shadow-soft-lg)]",
              headerTitle: "font-serif",
              headerSubtitle: "text-[var(--text-secondary)]",
              formButtonPrimary:
                "bg-[#663820] hover:bg-[#7a4528] transition-colors",
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
