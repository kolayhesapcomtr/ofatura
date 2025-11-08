"use client";

import Image from "next/image";
import Link from "next/link";
import { Book, FileText, HelpCircle, Mail, Phone, Settings, Upload } from "lucide-react";

export default function YardimMerkezi() {
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
          <h1 className="text-4xl font-bold mb-4">Yardım Merkezi</h1>
          <p className="text-xl text-primary-50">
            oFatura kullanımı ile ilgili tüm sorularınızın cevaplarını burada bulabilirsiniz
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Başlangıç Kılavuzu</h3>
              <p className="text-gray-600 mb-4">
                oFatura&apos;ya ilk kez mi başlıyorsunuz? Hızlı başlangıç kılavuzumuzu inceleyin.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fatura İşlemleri</h3>
              <p className="text-gray-600 mb-4">
                Fatura oluşturma, düzenleme ve gönderme işlemlerini öğrenin.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ayarlar</h3>
              <p className="text-gray-600 mb-4">
                Hesap ayarları, firma bilgileri ve entegrasyon ayarlarınızı yönetin.
              </p>
            </div>
          </div>

          {/* Help Topics */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popüler Yardım Konuları</h2>

            <div className="space-y-8">
              {/* Topic 1 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Upload className="w-5 h-5 text-primary mr-2" />
                  Nasıl fatura oluşturabilirim?
                </h3>
                <p className="text-gray-600 mb-3">
                  Fatura oluşturmak için panel ana sayfasından &quot;Yeni Fatura&quot; butonuna tıklayın.
                  Açılan formda müşteri bilgilerini, ürün/hizmet detaylarını ve tutar bilgilerini doldurun.
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  <li>Müşteri bilgilerini seçin veya yeni müşteri ekleyin</li>
                  <li>Ürün/hizmet satırlarını ekleyin</li>
                  <li>Vergi ve iskonto bilgilerini girin</li>
                  <li>&quot;Fatura Oluştur&quot; butonuna tıklayın</li>
                  <li>Sistem otomatik olarak faturanızı GİB&apos;e gönderecektir</li>
                </ol>
              </div>

              {/* Topic 2 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-2" />
                  E-posta ile fatura gönderimi nasıl çalışır?
                </h3>
                <p className="text-gray-600 mb-3">
                  Aylık ve Yıllık paket kullanıcılarımız faturalarını otomatik olarak müşterilerinin e-posta adreslerine gönderebilir.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Fatura oluştururken müşteri e-posta adresini belirtin</li>
                  <li>&quot;E-posta ile gönder&quot; seçeneğini işaretleyin</li>
                  <li>Sistem otomatik olarak PDF formatında faturayı müşterinize gönderecektir</li>
                  <li>Gönderim durumunu fatura detay sayfasından takip edebilirsiniz</li>
                </ul>
              </div>

              {/* Topic 3 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-primary mr-2" />
                  GİB entegrasyonu nasıl yapılır?
                </h3>
                <p className="text-gray-600 mb-3">
                  GİB (Gelir İdaresi Başkanlığı) entegrasyonu için firma bilgilerinizi eksiksiz doldurmanız gerekmektedir:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  <li>Ayarlar → Firma Bilgileri bölümüne gidin</li>
                  <li>Vergi numarası, vergi dairesi bilgilerini girin</li>
                  <li>GİB kullanıcı adı ve şifrenizi ekleyin</li>
                  <li>Test modu ile bağlantıyı kontrol edin</li>
                  <li>Onay aldıktan sonra canlı moda geçebilirsiniz</li>
                </ol>
              </div>

              {/* Topic 4 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary mr-2" />
                  Paket yükseltme nasıl yapılır?
                </h3>
                <p className="text-gray-600 mb-3">
                  Ücretsiz plandan Aylık veya Yıllık plana geçiş yapmak için:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
                  <li>Ayarlar → Paketler bölümüne gidin</li>
                  <li>Yükseltmek istediğiniz paketi seçin</li>
                  <li>Ödeme bilgilerinizi girin</li>
                  <li>Onayladıktan sonra paketiniz hemen aktif olur</li>
                </ol>
              </div>

              {/* Topic 5 */}
              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-5 h-5 text-primary mr-2" />
                  Raporlama özellikleri nelerdir?
                </h3>
                <p className="text-gray-600 mb-3">
                  oFatura detaylı raporlama özellikleri sunar:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Tarih aralığına göre fatura raporları</li>
                  <li>Müşteri bazlı satış raporları</li>
                  <li>Aylık/Yıllık gelir grafikleri</li>
                  <li>Excel ve PDF formatında rapor dışa aktarımı</li>
                  <li>KDV beyannamesi için hazır raporlar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-br from-primary-50 to-gray-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Aradığınız cevabı bulamadınız mı?
            </h2>
            <p className="text-gray-600 mb-6">
              Destek ekibimiz size yardımcı olmak için hazır
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#iletisim"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Bize Ulaşın
              </Link>
              <Link
                href="/sss"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                SSS&apos;lere Göz Atın
              </Link>
            </div>
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
