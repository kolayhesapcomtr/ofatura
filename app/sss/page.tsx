"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "oFatura nedir?",
      answer: "oFatura, işletmelerin e-arşiv faturalarını kolayca oluşturmasını, GİB'e göndermesini ve yönetmesini sağlayan bulut tabanlı bir fatura yönetim sistemidir. Web tarayıcınız üzerinden herhangi bir kurulum gerektirmeden kullanabilirsiniz."
    },
    {
      question: "Ücretsiz plan ile ne kadar fatura oluşturabilirim?",
      answer: "Ücretsiz planımız ile ayda 5 adet fatura oluşturabilirsiniz. Bu plan, yeni başlayan küçük işletmeler ve sistemi test etmek isteyenler için idealdir. Daha fazla faturaya ihtiyacınız varsa Aylık (₺250) veya Yıllık (₺1.500) paketlerimize geçebilirsiniz."
    },
    {
      question: "GİB entegrasyonu güvenli mi?",
      answer: "Evet, tüm GİB bağlantıları SSL sertifikası ile şifrelenmiş güvenli kanallar üzerinden gerçekleştirilir. Vergi kimlik numaranız ve GİB şifreniz bankacılık düzeyinde güvenlik ile korunmaktadır. Hiçbir şekilde üçüncü şahıslarla paylaşılmaz."
    },
    {
      question: "Yıllık pakette indirim var mı?",
      answer: "Evet! Yıllık paket seçtiğinizde %50 indirim kazanırsınız. Aylık ₺250 olan fiyat yerine yıllık ₺1.500 ödeyerek (aylık ₺125'e denk gelir) önemli bir tasarruf sağlarsınız."
    },
    {
      question: "E-posta ile fatura gönderimi nedir?",
      answer: "Aylık ve Yıllık paketlerimizde, oluşturduğunuz faturaları otomatik olarak müşterilerinizin e-posta adreslerine PDF formatında gönderebilirsiniz. Bu özellik sayesinde müşterileriniz faturalarını anında e-posta kutularında bulabilir."
    },
    {
      question: "Paket değiştirme işlemi nasıl yapılır?",
      answer: "Hesap ayarları bölümünden istediğiniz zaman paket yükseltme veya düşürme işlemi yapabilirsiniz. Yükseltme işleminde hemen yeni özelliklere erişebilirsiniz. Paket düşürme işleminde mevcut fatura limitiniz dönem sonuna kadar geçerli olur."
    },
    {
      question: "Faturalarımı ne kadar süre saklayabilirim?",
      answer: "Oluşturduğunuz tüm faturalar yasal saklama süresi boyunca (10 yıl) sistemimizde güvenle saklanır. İstediğiniz zaman geçmiş faturalarınıza erişebilir, görüntüleyebilir veya tekrar indirebilirsiniz."
    },
    {
      question: "Mobil cihazlardan kullanabilir miyim?",
      answer: "Evet, oFatura responsive tasarıma sahiptir. Akıllı telefon, tablet ve bilgisayar gibi tüm cihazlardan web tarayıcınız üzerinden kullanabilirsiniz. Ayrı bir mobil uygulama indirmenize gerek yoktur."
    },
    {
      question: "Toplu fatura oluşturabilir miyim?",
      answer: "Evet, Aylık ve Yıllık paketlerde toplu fatura oluşturma özelliği mevcuttur. Excel dosyası yükleyerek veya API entegrasyonu ile birden fazla faturayı tek seferde oluşturabilirsiniz."
    },
    {
      question: "İptal veya iade işlemleri nasıl yapılır?",
      answer: "Paket iptali için herhangi bir ceza veya ek ücret yoktur. İstediğiniz zaman paketinizi iptal edebilirsiniz. Ödediğiniz tutar dönem sonuna kadar geçerlidir ve kalan süre için kullanmaya devam edebilirsiniz."
    },
    {
      question: "Müşteri desteği nasıl alınır?",
      answer: "Destek ekibimize e-posta (destek@ofatura.com) veya telefon (0850 303 51 54) üzerinden ulaşabilirsiniz. Çalışma saatleri içinde ortalama 2 saat içinde dönüş sağlıyoruz. Acil durumlarda WhatsApp hattımızı da kullanabilirsiniz."
    },
    {
      question: "Fatura şablonlarını özelleştirebilir miyim?",
      answer: "Evet, firma logonuzu ekleyebilir, renk şemasını değiştirebilir ve varsayılan notlar ekleyebilirsiniz. Premium özellikler ile tamamen özel fatura şablonları da oluşturabilirsiniz."
    },
    {
      question: "Raporlama özellikleri nelerdir?",
      answer: "Detaylı satış raporları, müşteri bazlı analizler, aylık/yıllık gelir grafikleri ve KDV beyannamesi hazırlığı için gerekli raporlara erişebilirsiniz. Tüm raporları Excel veya PDF formatında indirebilirsiniz."
    },
    {
      question: "Verilerim güvende mi?",
      answer: "Tüm verileriniz düzenli olarak yedeklenir ve bankacılık seviyesinde şifreleme ile korunur. Sunucularımız Türkiye'de yerleşik, ISO 27001 sertifikalı veri merkezlerinde barındırılmaktadır."
    },
    {
      question: "API entegrasyonu mevcut mu?",
      answer: "Şu anda API hizmeti sunmuyoruz. Ancak e-ticaret platformları ve muhasebe yazılımları için entegrasyon çalışmalarımız devam etmektedir. Gelişmelerden haberdar olmak için bültenimize abone olabilirsiniz."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/ofatura/oFatura.png"
                alt="oFatura Logo"
                width={240}
                height={77}
                className="w-60 h-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition">Anasayfa</Link>
              <Link href="/#ozellikler" className="text-gray-700 hover:text-primary transition">Özellikler</Link>
              <Link href="/#paketler" className="text-gray-700 hover:text-primary transition">Fiyatlar</Link>
              <Link href="/#iletisim" className="text-gray-700 hover:text-primary transition">İletişim</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-primary-50">
            oFatura hakkında merak ettikleriniz
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full py-4 flex justify-between items-center text-left hover:text-primary transition"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="pb-4 text-gray-600 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-gray-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Başka bir sorunuz mu var?
            </h2>
            <p className="text-gray-600 mb-6">
              Size yardımcı olmaktan mutluluk duyarız
            </p>
            <Link
              href="/#iletisim"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition inline-block"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2025 oFatura. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
