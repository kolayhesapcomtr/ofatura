import Image from "next/image";
import Link from "next/link";

export default function GizlilikPolitikasi() {
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
          <h1 className="text-4xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-xl text-primary-50">
            Son güncelleme: 08 Kasım 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Giriş</h2>
            <p>
              Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti. (&quot;oFatura&quot;) olarak,
              kullanıcılarımızın gizliliğini korumayı ve kişisel verilerini güvenli bir şekilde işlemeyi
              taahhüt ediyoruz. Bu Gizlilik Politikası, oFatura hizmetlerini kullanırken toplanan,
              işlenen ve saklanan kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2>2. Toplanan Bilgiler</h2>
            <p>oFatura platformunu kullanırken aşağıdaki bilgiler toplanabilir:</p>

            <h3>2.1. Hesap Bilgileri</h3>
            <ul>
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Şirket unvanı</li>
              <li>Vergi numarası ve vergi dairesi</li>
              <li>Şirket adresi</li>
            </ul>

            <h3>2.2. Fatura ve İşlem Bilgileri</h3>
            <ul>
              <li>Oluşturulan fatura bilgileri</li>
              <li>Müşteri bilgileri (alıcı firma bilgileri)</li>
              <li>Ürün/hizmet detayları</li>
              <li>Ödeme bilgileri (sadece tutar, kredi kartı bilgileri saklanmaz)</li>
            </ul>

            <h3>2.3. Teknik Bilgiler</h3>
            <ul>
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Giriş saatleri ve kullanım logları</li>
              <li>Çerez bilgileri</li>
            </ul>

            <h2>3. Bilgilerin Kullanım Amaçları</h2>
            <p>Toplanan kişisel veriler aşağıdaki amaçlarla kullanılır:</p>
            <ul>
              <li>Hizmet sağlamak ve fatura işlemlerini gerçekleştirmek</li>
              <li>GİB (Gelir İdaresi Başkanlığı) entegrasyonunu sağlamak</li>
              <li>Müşteri desteği sunmak</li>
              <li>Hizmet kalitesini iyileştirmek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
              <li>Sistem güvenliğini sağlamak</li>
              <li>İstatistiksel analiz ve raporlama yapmak</li>
            </ul>

            <h2>4. Bilgilerin Paylaşımı</h2>
            <p>
              Kişisel verileriniz, yasal zorunluluklar dışında üçüncü şahıslarla paylaşılmaz.
              Aşağıdaki durumlarda bilgileriniz paylaşılabilir:
            </p>
            <ul>
              <li>GİB ve diğer resmi kurumlarla yasal yükümlülükler gereği</li>
              <li>Ödeme işlemleri için güvenli ödeme sağlayıcıları ile</li>
              <li>Altyapı hizmetleri için bulut sunucu sağlayıcıları ile</li>
              <li>Mahkeme kararı veya yasal süreç gereği</li>
            </ul>

            <h2>5. Veri Güvenliği</h2>
            <p>Verilerinizin güvenliği için aşağıdaki önlemler alınmıştır:</p>
            <ul>
              <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
              <li>Düzenli güvenlik denetimleri</li>
              <li>Güvenlik duvarı ve anti-virüs koruması</li>
              <li>Sınırlı erişim yetkisi ve kimlik doğrulama</li>
              <li>Düzenli veri yedekleme</li>
              <li>ISO 27001 sertifikalı veri merkezlerinde barındırma</li>
            </ul>

            <h2>6. Çerezler (Cookies)</h2>
            <p>
              oFatura, kullanıcı deneyimini iyileştirmek ve hizmetlerin doğru çalışmasını sağlamak için
              çerezler kullanır. Çerezler şunlar için kullanılır:
            </p>
            <ul>
              <li>Oturum yönetimi (giriş yapmış kalma)</li>
              <li>Kullanıcı tercihlerini hatırlama</li>
              <li>Site performansını analiz etme</li>
              <li>Güvenlik önlemleri</li>
            </ul>
            <p>
              Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz, ancak bu durumda
              bazı özellikler çalışmayabilir.
            </p>

            <h2>7. Veri Saklama Süresi</h2>
            <ul>
              <li>Fatura bilgileri: Yasal saklama süresi (10 yıl)</li>
              <li>Hesap bilgileri: Hesap aktif olduğu sürece</li>
              <li>Log kayıtları: 1 yıl</li>
              <li>İletişim kayıtları: 3 yıl</li>
            </ul>

            <h2>8. Kullanıcı Hakları</h2>
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme veya yok edilme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>Otomatik sistemler ile analiz edilmesi sonucu aleyhte bir sonuç doğmasına itiraz etme</li>
              <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            </ul>

            <h2>9. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle ilgili talepleriniz için
              bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="font-semibold mb-2">Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti.</p>
              <p>Adres: Çıtak Mah. Kayalı Sok. No:24, Çivril / Denizli</p>
              <p>E-posta: destek@ofatura.com</p>
              <p>Telefon: 0850 303 51 54</p>
            </div>

            <h2>10. Politika Değişiklikleri</h2>
            <p>
              Bu Gizlilik Politikası, yasal gereklilikler veya hizmet değişiklikleri doğrultusunda
              güncellenebilir. Önemli değişiklikler e-posta yoluyla bildirilecektir. Politikayı
              düzenli olarak kontrol etmenizi öneririz.
            </p>

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
