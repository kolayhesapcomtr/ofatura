"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FileText,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  BarChart3,
  Users,
  HeadphonesIcon,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Infinity,
  Smartphone
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3">
              <Image
                src="/ofatura/oFatura.png"
                alt="oFatura Logo"
                width={240}
                height={77}
                className="w-60 h-auto"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-primary transition">Anasayfa</a>
                <a href="#ozellikler" className="text-gray-700 hover:text-primary transition">Özellikler</a>
                <a href="#paketler" className="text-gray-700 hover:text-primary transition">Fiyatlar</a>
                <a href="#iletisim" className="text-gray-700 hover:text-primary transition">İletişim</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-6 py-2 rounded-lg font-medium transition">
                  Giriş Yap
                </button>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition">
                  Kayıt Ol
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col pt-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-primary transition py-3 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Anasayfa
                </a>
                <a
                  href="#ozellikler"
                  className="text-gray-700 hover:text-primary transition py-3 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Özellikler
                </a>
                <a
                  href="#paketler"
                  className="text-gray-700 hover:text-primary transition py-3 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fiyatlar
                </a>
                <a
                  href="#iletisim"
                  className="text-gray-700 hover:text-primary transition py-3 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  İletişim
                </a>
                <div className="flex flex-col space-y-3 pt-4">
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-6 py-2 rounded-lg font-medium transition">
                    Giriş Yap
                  </button>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition">
                    Kayıt Ol
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                E-Arşiv Fatura Yönetimi
                <span className="block text-primary mt-2">Artık Çok Kolay</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                oFatura ile e-arşiv faturalarınızı kolayca oluşturun, gönderin ve yönetin.
                GİB entegrasyonu ile güvenli ve hızlı fatura yönetimi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition shadow-lg">
                  Ücretsiz Dene
                </button>
                <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition">
                  Demo İzle
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Kurulum gerektirmez
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  7/24 destek
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center p-4">
                    <Image
                      src="/ofatura/icon-oFatura.png"
                      alt="oFatura"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ozellikler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden oFatura?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern ve kullanıcı dostu arayüzümüz ile fatura yönetiminizi kolaylaştırın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Entegrasyon</h3>
              <p className="text-gray-600">
                Dakikalar içinde sisteminizi kurun ve fatura göndermeye başlayın.
                Karmaşık kurulumlarla uğraşmayın.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kolay Fatura Oluşturma</h3>
              <p className="text-gray-600">
                Sezgisel arayüz ile saniyeler içinde fatura oluşturun.
                Şablon kaydetme ve toplu fatura özellikleri.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Infinity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sınırsız Fatura Oluşturma</h3>
              <p className="text-gray-600">
                Ücretli paketlerde sınırsız fatura oluşturun.
                İşletmeniz büyüdükçe sistemimiz yanınızda.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detaylı Raporlama</h3>
              <p className="text-gray-600">
                Faturalarınızı analiz edin, gelir-gider takibi yapın.
                Excel ve PDF export özellikleri.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Otomatik Gönderim</h3>
              <p className="text-gray-600">
                Faturalarınız otomatik olarak müşterilerinize e-posta ile gönderilir.
                Zaman kazanın.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tüm Cihazlardan Kullanım</h3>
              <p className="text-gray-600">
                Bilgisayar, tablet veya telefonunuzdan istediğiniz zaman erişin.
                Responsive tasarım ile her cihazda mükemmel deneyim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100 text-lg">Aktif Kullanıcı</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">10.000+</div>
              <div className="text-primary-100 text-lg">Gönderilen fatura</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">%99,99</div>
              <div className="text-primary-100 text-lg">Erişilebilirlik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="paketler" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fiyatlandırma</h2>
            <p className="text-xl text-gray-600">
              İhtiyacınıza uygun paketi seçin ve hemen başlayın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ücretsiz</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₺0</span>
                <span className="text-gray-600">/ay</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">5 Fatura/Ay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Müşteri Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ürün Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Fatura Geçmişi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">PDF/ZIP İndirme</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Ücretsiz Başla
              </button>
            </div>

            {/* Monthly Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aylık</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₺250</span>
                <span className="text-gray-600">/ay</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Sınırsız Fatura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Müşteri Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ürün Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Fatura Geçmişi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">PDF/ZIP İndirme</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Toplu Fatura İşlemleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ayrıntılı Raporlar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">E-Posta Desteği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Logo ve Kaşe/İmza Ekleme</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Aylık Paketi Seç
              </button>
            </div>

            {/* Yearly Package */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-primary relative transform scale-105">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                %50 İndirim
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Yıllık</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">₺1.500</span>
                  <span className="text-gray-600">/yıl</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Aylık <span className="line-through">₺250</span> → <span className="text-green-600 font-semibold">₺125</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Sınırsız Fatura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Müşteri Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ürün Kaydı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Fatura Geçmişi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">PDF/ZIP İndirme</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Toplu Fatura İşlemleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ayrıntılı Raporlar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">E-Posta Desteği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Logo ve Kaşe/İmza Ekleme</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition">
                Yıllık Paketi Seç
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hemen Başlayın, Tamamen Ücretsiz!
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Aylık 5 fatura ile ücretsiz kullanın. Kredi kartı gerektirmez, kurulum yok.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-xl">
            Ücretsiz Hesap Oluştur
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti.
            </p>
            <p className="text-xl text-gray-600">
              Sorularınız için bize ulaşın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
              <a href="mailto:destek@ofatura.com" className="text-primary hover:underline">
                destek@ofatura.com
              </a>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
              <div className="space-y-2">
                <a href="tel:+908503035154" className="text-primary hover:underline block">
                  0850 303 51 54
                </a>
                <a href="tel:+905468772620" className="text-primary hover:underline block">
                  0546 877 26 20
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600">
                Çıtak Mah. Kayalı Sok. No:24<br />
                Çivril / Denizli
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/ofatura/footer-logo.png"
                  alt="oFatura"
                  width={240}
                  height={77}
                  className="w-60 h-auto"
                />
              </div>
              <p className="text-gray-400">
                Profesyonel e-arşiv fatura yönetim sistemi
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#ozellikler" className="hover:text-white transition">Özellikler</a></li>
                <li><a href="#paketler" className="hover:text-white transition">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-white transition">Demo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Yardım Merkezi</a></li>
                <li><a href="#iletisim" className="hover:text-white transition">İletişim</a></li>
                <li><a href="#" className="hover:text-white transition">SSS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white transition">Kullanım Şartları</a></li>
                <li><a href="#" className="hover:text-white transition">KVKK</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 oFatura. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
