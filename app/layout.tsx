import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oFatura - E-Arşiv Fatura Yönetim Sistemi",
  description: "Profesyonel e-arşiv fatura yönetim sistemi. Kolay kullanım, hızlı entegrasyon ve güvenilir hizmet. Aylık ₺125'den başlayan paketler.",
  keywords: "e-fatura, e-arşiv, fatura yönetimi, oFatura, GİB entegrasyonu, e-arşiv fatura, online fatura, fatura oluşturma",
  authors: [{ name: "Kolay Hesap Bilgi Teknolojileri Ltd. Şti." }],
  creator: "oFatura",
  publisher: "oFatura",
  metadataBase: new URL('https://kolayhesapcomtr.github.io/ofatura'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kolayhesapcomtr.github.io/ofatura',
    title: 'oFatura - E-Arşiv Fatura Yönetim Sistemi',
    description: 'Profesyonel e-arşiv fatura yönetim sistemi. Kolay kullanım, hızlı entegrasyon ve güvenilir hizmet. Aylık ₺125\'den başlayan paketler.',
    siteName: 'oFatura',
    images: [
      {
        url: '/ofatura/oFatura.png',
        width: 1200,
        height: 630,
        alt: 'oFatura - E-Arşiv Fatura Yönetim Sistemi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oFatura - E-Arşiv Fatura Yönetim Sistemi',
    description: 'Profesyonel e-arşiv fatura yönetim sistemi. Kolay kullanım, hızlı entegrasyon ve güvenilir hizmet.',
    images: ['/ofatura/oFatura.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
