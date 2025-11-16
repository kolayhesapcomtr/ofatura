import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) - oFatura",
  description: "oFatura hakkında en çok sorulan sorular ve cevapları. Paketler, fiyatlandırma, GİB entegrasyonu, güvenlik ve daha fazlası.",
  keywords: "oFatura SSS, sık sorulan sorular, e-fatura fiyatları, GİB güvenliği, paket seçimi, e-arşiv fatura sorular",
  openGraph: {
    title: "Sıkça Sorulan Sorular - oFatura",
    description: "oFatura hakkında en çok sorulan sorular ve cevapları.",
  },
};

export default function SSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
