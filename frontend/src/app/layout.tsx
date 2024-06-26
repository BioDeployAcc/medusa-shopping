import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MedusaWrapper } from "@/utils/wrappers/medusaWrapper";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E commerce site",
  description: "E commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MedusaWrapper>
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </MedusaWrapper>
    </html>
  );
}
