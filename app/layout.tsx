import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Navbar from "./navbar";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sahani Blog",
  description: "Our Blog Website for Sahil & Dhwani",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Navbar />
        </div>
        </Providers>
      </body>
    </html>
  );
}
