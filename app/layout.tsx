import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// components
import Navbar from "@/components/main-nav";
import Footer from "@/components/main-footer";

const inter = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TinkerPro",
    default: "TinkerPro | Simple. Easy. Modern POS",
  },
  description:
    "To sell POS hardware and software. Point-of-Sale packages particularly for Retail, Food & Beverage business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang='en'>
      <body className='subpixel-antialiased'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
