import Image from "next/image";
import Link from "next/link";

export default function KVKK() {
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
          <h1 className="text-4xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
          <p className="text-xl text-primary-50">
            Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Veri Sorumlusunun Kimliği</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-2">Kolay Hesap Bilgi Teknolojileri ve Aracılık Hizmetleri Ltd. Şti.</p>
              <p>Adres: Çıtak Mah. Kayalı Sok. No:24, Çivril / Denizli</p>
              <p>E-posta: destek@ofatura.com</p>
              <p>Telefon: 0850 303 51 54</p>
              <p>Mersis No: [Mersis numarası]</p>
            </div>

            <h2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz
              aşağıdaki amaçlarla işlenmektedir:
            </p>

            <h3>2.1. İşleme Amaçları</h3>
            <ul>
              <li>E-arşiv fatura hizmetinin sunulması</li>
              <li>Sözleşme ilişkisinin kurulması ve ifası</li>
              <li>GİB (Gelir İdaresi Başkanlığı) ile entegrasyonun sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi (vergi kanunları, ticaret kanunu vb.)</li>
              <li>Müşteri ilişkileri yönetimi ve destek hizmetlerinin sunulması</li>
              <li>Finansal ve muhasebe işlemlerinin yürütülmesi</li>
              <li>Hizmet kalitesinin geliştirilmesi ve analiz çalışmaları</li>
              <li>Bilgi güvenliğinin sağlanması</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
            </ul>

            <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
            <h3>3.1. Kimlik Bilgileri</h3>
            <ul>
              <li>Ad, soyad</li>
              <li>T.C. kimlik numarası (gerekli durumlarda)</li>
              <li>Vergi numarası</li>
            </ul>

            <h3>3.2. İletişim Bilgileri</h3>
            <ul>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Adres bilgileri</li>
            </ul>

            <h3>3.3. Müşteri İşlem Bilgileri</h3>
            <ul>
              <li>Fatura bilgileri</li>
              <li>Alıcı/satıcı firma bilgileri</li>
              <li>Ürün/hizmet bilgileri</li>
              <li>Tutar ve ödeme bilgileri</li>
            </ul>

            <h3>3.4. İşlem Güvenliği Bilgileri</h3>
            <ul>
              <li>IP adresi</li>
              <li>Çerez kayıtları</li>
              <li>Giriş/çıkış logları</li>
              <li>İşlem geçmişi</li>
            </ul>

            <h3>3.5. Finansal Bilgiler</h3>
            <ul>
              <li>Banka hesap bilgileri (IBAN)</li>
              <li>Fatura ve ödeme bilgileri</li>
              <li>Vergi dairesi bilgileri</li>
            </ul>

            <h2>4. Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
            <p>Kişisel verileriniz aşağıdaki kişi ve kuruluşlara aktarılabilir:</p>

            <h3>4.1. Kamu Kurum ve Kuruluşları</h3>
            <ul>
              <li>GİB (Gelir İdaresi Başkanlığı) - E-fatura/E-arşiv fatura gönderimi</li>
              <li>Vergi daireleri - Yasal yükümlülükler</li>
              <li>Mahkemeler ve icra daireleri - Hukuki süreçler</li>
              <li>Diğer yetkili kamu kurum ve kuruluşları - Yasal talepler</li>
            </ul>

            <h3>4.2. Özel Hukuk Kişileri</h3>
            <ul>
              <li>Bulut hizmet sağlayıcıları - Veri barındırma</li>
              <li>Ödeme kuruluşları - Ödeme işlemleri</li>
              <li>Denetim ve hukuk danışmanlık firmaları - Yasal danışmanlık</li>
              <li>İş ortakları - Hizmet sunumu</li>
            </ul>

            <h2>5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
            <h3>5.1. Toplama Yöntemleri</h3>
            <ul>
              <li>Web sitesi ve mobil uygulama üzerinden</li>
              <li>Kayıt formları aracılığıyla</li>
              <li>E-posta ve telefon iletişimi ile</li>
              <li>Fatura oluşturma sürecinde</li>
              <li>Otomatik log kayıtları ile</li>
            </ul>

            <h3>5.2. Hukuki Sebepler</h3>
            <p>Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:</p>
            <ul>
              <li>Açık rızanızın bulunması</li>
              <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
              <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</li>
              <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
              <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
            </ul>

            <h2>6. KVKK Kapsamındaki Haklarınız</h2>
            <p>KVKK'nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
              <li>Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
            </ul>

            <h2>7. Başvuru Yöntemi</h2>
            <p>
              Yukarıda belirtilen haklarınızı kullanmak için başvurunuzu aşağıdaki yöntemlerden biriyle
              yapabilirsiniz:
            </p>

            <h3>7.1. Yazılı Başvuru</h3>
            <p>
              İmzalı başvuru dilekçenizi "Çıtak Mah. Kayalı Sok. No:24, Çivril / Denizli" adresine
              elden teslim edebilir veya noter aracılığıyla gönderebilirsiniz.
            </p>

            <h3>7.2. Güvenli Elektronik İmza ile E-posta</h3>
            <p>
              Güvenli elektronik imza ile imzalanmış başvurunuzu destek@ofatura.com adresine
              gönderebilirsiniz.
            </p>

            <h3>7.3. Başvuruda Bulunması Gereken Bilgiler</h3>
            <ul>
              <li>Ad, soyad</li>
              <li>T.C. kimlik numarası</li>
              <li>İletişim bilgileri (e-posta, telefon, adres)</li>
              <li>Talep konusu</li>
            </ul>

            <h2>8. Cevaplama Süresi</h2>
            <p>
              Başvurularınız, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak
              sonuçlandırılacaktır. Ancak işlemin ayrıca bir maliyeti gerektirmesi hâlinde,
              Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
            </p>

            <h2>9. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için gerekli tüm teknik ve idari tedbirleri
              almaktayız:
            </p>
            <ul>
              <li>SSL/TLS şifreleme protokolleri</li>
              <li>Güvenlik duvarı ve antivirüs sistemleri</li>
              <li>Erişim kontrol ve yetkilendirme mekanizmaları</li>
              <li>Düzenli güvenlik testleri ve denetimleri</li>
              <li>Veri yedekleme sistemleri</li>
              <li>Personel eğitim ve farkındalık programları</li>
            </ul>

            <h2>10. Veri Saklama Süreleri</h2>
            <p>
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama
              yükümlülüklerine uygun olarak saklanmaktadır:
            </p>
            <ul>
              <li>Fatura bilgileri: 10 yıl (Vergi Usul Kanunu gereği)</li>
              <li>Sözleşme ve ödeme kayıtları: Zamanaşımı süreleri</li>
              <li>İletişim kayıtları: 3 yıl</li>
              <li>Log kayıtları: 1 yıl</li>
            </ul>

            <h2>11. Güncellemeler</h2>
            <p>
              Bu aydınlatma metni, yasal düzenlemeler ve şirket politikalarındaki değişiklikler
              doğrultusunda güncellenebilir. Güncellemeler web sitemizde yayımlanacaktır.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">
                Sorularınız için:
              </p>
              <p className="text-gray-700">
                KVKK kapsamındaki haklarınız ve kişisel verilerinizin işlenmesi hakkında
                sorularınız için destek@ofatura.com adresinden bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <p className="mt-8 text-gray-600">
              <strong>Son Güncelleme:</strong> 08 Kasım 2025
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
