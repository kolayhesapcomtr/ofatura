import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oFatura - E-Arşiv Fatura Yönetim Sistemi",
  description: "Profesyonel e-arşiv fatura yönetim sistemi. Kolay kullanım, hızlı entegrasyon ve güvenilir hizmet.",
  keywords: "e-fatura, e-arşiv, fatura yönetimi, oFatura, GİB entegrasyonu",
  icons: {
    icon: "/ofatura/icon-oFatura.png",
    apple: "/ofatura/icon-oFatura.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
