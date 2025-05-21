import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import HeroSection from "@/components/hero";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career Path Pilot",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p>AMITH</p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
