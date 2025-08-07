import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoping cart test - prueba tecnica",
  description:
    "Prueba Técnica: API y Carrito de Compras, Contruccion del frontend para consumir la Api para mostrar productos y añadirlos al carrito de compras",
  keywords: ["shoping", "cart", "prueba", "frontend", "api"],
  authors: [
    {
      name: "Leonardo Gomez",
      url: "https://portafolio-leonardogomez.netlify.app/es/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
