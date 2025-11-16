import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yardım Merkezi - oFatura",
  description: "oFatura kullanımı ile ilgili tüm sorularınızın cevaplarını burada bulabilirsiniz. Fatura oluşturma, GİB entegrasyonu, paket yükseltme ve daha fazlası.",
  keywords: "oFatura yardım, e-fatura nasıl oluşturulur, GİB entegrasyonu, fatura yönetimi, kullanım kılavuzu",
  openGraph: {
    title: "Yardım Merkezi - oFatura",
    description: "oFatura kullanımı ile ilgili tüm sorularınızın cevaplarını burada bulabilirsiniz.",
  },
};

export default function YardimMerkeziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
