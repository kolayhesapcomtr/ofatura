import Image from "next/image";
import Link from "next/link";

export default function KullanimSartlari() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/ofatura/oFatura.png"
              alt="oFatura Logo"
              width={240}
              height={77}
              className="w-60 h-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Kullanım Şartları</h1>
          <p className="text-xl text-primary-50">
            Son güncelleme: 08 Kasım 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Hizmet Tanımı ve Kabul</h2>
            <p>
              oFatura, Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti. tarafından
              sunulan bulut tabanlı e-arşiv fatura yönetim sistemidir. Bu hizmeti kullanarak,
              aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.
            </p>

            <h2>2. Hizmet Kapsamı</h2>
            <p>oFatura aşağıdaki hizmetleri sunar:</p>
            <ul>
              <li>E-arşiv fatura oluşturma, düzenleme ve gönderme</li>
              <li>GİB (Gelir İdaresi Başkanlığı) entegrasyonu</li>
              <li>Fatura arşivleme ve yönetimi</li>
              <li>Raporlama ve analiz araçları</li>
              <li>E-posta ile fatura gönderimi (ücretli paketlerde)</li>
              <li>Müşteri yönetimi</li>
            </ul>

            <h2>3. Hesap Oluşturma ve Kullanıcı Sorumlulukları</h2>
            <h3>3.1. Hesap Bilgileri</h3>
            <ul>
              <li>Hesap oluştururken doğru ve güncel bilgiler sağlamalısınız</li>
              <li>Vergi numarası ve firma bilgileriniz yasal kayıtlarla uyumlu olmalıdır</li>
              <li>Hesap bilgilerinizi güncel tutmakla yükümlüsünüz</li>
            </ul>

            <h3>3.2. Güvenlik</h3>
            <ul>
              <li>Şifrenizi güvenli tutmak sizin sorumluluğunuzdadır</li>
              <li>Hesabınızda gerçekleşen tüm işlemlerden siz sorumlusunuz</li>
              <li>Şüpheli bir aktivite fark ederseniz derhal bize bildirmelisiniz</li>
              <li>Hesabınızı başkalarıyla paylaşamazsınız</li>
            </ul>

            <h2>4. Paket ve Ücretlendirme</h2>
            <h3>4.1. Paket Türleri</h3>
            <ul>
              <li><strong>Ücretsiz Plan:</strong> Ayda 5 fatura, temel özellikler</li>
              <li><strong>Aylık Plan:</strong> ₺250/ay, sınırsız fatura, tüm özellikler</li>
              <li><strong>Yıllık Plan:</strong> ₺1.500/yıl, %50 indirimli, tüm özellikler</li>
            </ul>

            <h3>4.2. Ödeme Koşulları</h3>
            <ul>
              <li>Ücretli paketler ön ödemeli olarak çalışır</li>
              <li>Aylık planlar her ay otomatik olarak yenilenir</li>
              <li>Yıllık planlar yıl sonunda otomatik olarak yenilenir</li>
              <li>Tüm fiyatlar KDV dahildir</li>
            </ul>

            <h3>4.3. İptal ve İade</h3>
            <ul>
              <li>Ücretsiz plan kullanıcıları istediği zaman hesaplarını kapatabilir</li>
              <li>Ücretli paketler, dönem sonuna kadar kullanılabilir ve otomatik yenileme iptal edilebilir</li>
              <li>İlk 14 gün içinde memnun kalmazsanız tam iade alabilirsiniz</li>
              <li>İade talepleri destek@ofatura.com adresine bildirilmelidir</li>
            </ul>

            <h2>5. Kullanım Kuralları</h2>
            <h3>5.1. İzin Verilen Kullanım</h3>
            <p>Hizmeti yalnızca yasal ve ticari amaçlarla kullanabilirsiniz:</p>
            <ul>
              <li>Kendi işletmeniz adına fatura oluşturma</li>
              <li>GİB mevzuatına uygun fatura düzenleme</li>
              <li>Müşterilerinize yasal fatura gönderme</li>
            </ul>

            <h3>5.2. Yasak Kullanım</h3>
            <p>Aşağıdaki kullanımlar kesinlikle yasaktır:</p>
            <ul>
              <li>Sahte veya yanıltıcı fatura oluşturma</li>
              <li>Başkası adına yetkisiz fatura düzenleme</li>
              <li>Sistemin güvenliğini tehlikeye atmaya çalışma</li>
              <li>Otomatik botlar veya scraperlar kullanma</li>
              <li>Aşırı sayıda istek göndererek sistemi yavaşlatma</li>
              <li>Diğer kullanıcıların verilerine erişmeye çalışma</li>
              <li>Hizmeti yeniden satma veya lisanslama</li>
            </ul>

            <h2>6. Fikri Mülkiyet Hakları</h2>
            <ul>
              <li>oFatura platformu, logosu, tasarımı ve kaynak kodu Kolay Hesap Bilgi Teknolojileri Ltd. Şti.'ye aittir</li>
              <li>Kullanıcılar, sadece hizmeti kullanma hakkına sahiptir</li>
              <li>Platform kodunu kopyalama, değiştirme veya tersine mühendislik yapma yasaktır</li>
              <li>Oluşturduğunuz fatura verileri size aittir</li>
            </ul>

            <h2>7. Hizmet Garanti ve Sorumluluk Sınırlamaları</h2>
            <h3>7.1. Hizmet Sürekliliği</h3>
            <ul>
              <li>%99,9 uptime hedefliyoruz ancak garanti vermiyoruz</li>
              <li>Planlı bakımlar önceden duyurulur</li>
              <li>Acil bakımlar anlık yapılabilir</li>
            </ul>

            <h3>7.2. Sorumluluk Sınırı</h3>
            <p>oFatura aşağıdaki durumlardan sorumlu değildir:</p>
            <ul>
              <li>Kullanıcı hatası nedeniyle oluşan yanlış faturalar</li>
              <li>GİB sisteminden kaynaklanan gecikmeler veya hatalar</li>
              <li>İnternet bağlantısı kesintileri</li>
              <li>Üçüncü parti hizmet sağlayıcıların hataları</li>
              <li>Kullanıcının şifresini paylaşması nedeniyle oluşan güvenlik ihlalleri</li>
            </ul>

            <h3>7.3. Veri Yedekleme</h3>
            <ul>
              <li>Verileriniz düzenli olarak yedeklenir</li>
              <li>Ancak kendi yedeklerinizi almanızı öneririz</li>
              <li>Kritik faturalarınızı PDF olarak indirip saklayın</li>
            </ul>

            <h2>8. Gizlilik ve Veri Koruma</h2>
            <p>
              Kişisel verilerinizin işlenmesi <Link href="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikamızda</Link> detaylı
              olarak açıklanmıştır. Hizmeti kullanarak Gizlilik Politikamızı da kabul etmiş olursunuz.
            </p>

            <h2>9. Hesap Askıya Alma ve Sonlandırma</h2>
            <h3>9.1. oFatura'nın Hakları</h3>
            <p>Aşağıdaki durumlarda hesabınızı askıya alabilir veya sonlandırabiliriz:</p>
            <ul>
              <li>Kullanım şartlarını ihlal etmeniz</li>
              <li>Yasadışı aktivite şüphesi</li>
              <li>Ödeme yapılmaması</li>
              <li>Sisteme zarar verici davranışlar</li>
            </ul>

            <h3>9.2. Kullanıcı Hakları</h3>
            <ul>
              <li>İstediğiniz zaman hesabınızı kapatabilirsiniz</li>
              <li>Hesap kapatmadan önce verilerinizi dışa aktarabilirsiniz</li>
              <li>Hesap kapandıktan sonra verileriniz 30 gün içinde silinir</li>
            </ul>

            <h2>10. Değişiklikler</h2>
            <p>
              oFatura, bu Kullanım Şartlarını önceden bildirerek değiştirme hakkını saklı tutar.
              Önemli değişiklikler e-posta ile bildirilecektir. Değişikliklerden sonra hizmeti
              kullanmaya devam ederseniz, yeni şartları kabul etmiş sayılırsınız.
            </p>

            <h2>11. Uygulanacak Hukuk ve Yetki</h2>
            <ul>
              <li>Bu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir</li>
              <li>Ortaya çıkabilecek anlaşmazlıklarda Denizli Mahkemeleri ve İcra Daireleri yetkilidir</li>
            </ul>

            <h2>12. İletişim</h2>
            <p>
              Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="font-semibold mb-2">Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti.</p>
              <p>Adres: Çıtak Mah. Kayalı Sok. No:24, Çivril / Denizli</p>
              <p>E-posta: destek@ofatura.com</p>
              <p>Telefon: 0850 303 51 54</p>
            </div>

            <p className="mt-8 text-gray-600">
              <strong>Yürürlük Tarihi:</strong> 08 Kasım 2025
            </p>
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
