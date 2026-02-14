

# 🎵 Spotify Benzeri Müzik Platformu

Tamamen React ile geliştirilecek, Spotify'dan ilham alan modern bir müzik platformu.

---

## 🎨 Tasarım & Tema
- **Koyu tema** (Spotify benzeri siyah/koyu gri arka plan, yeşil vurgular)
- Sol tarafta sabit **navigasyon sidebar'ı**
- Alt kısımda sabit **müzik çalar barı** (şarkı bilgisi, oynat/duraklat/ileri/geri, ses kontrolü, ilerleme çubuğu)
- Responsive tasarım (mobil uyumlu)

---

## 👤 Kullanıcı Sistemi
- **Kayıt ol / Giriş yap** sayfaları
- Kullanıcı profil sayfası (avatar, bio, dinleme istatistikleri)
- **Rol sistemi**: Admin, Sanatçı, Normal Kullanıcı

---

## 🎶 Müzik Özellikleri
- **Ana sayfa**: Öne çıkan şarkılar, yeni eklenenler, popüler çalma listeleri
- **Şarkı dinleme**: Tam işlevli müzik çalar (oynat, duraklat, ileri/geri, karıştır, tekrarla)
- **Beğeni sistemi**: Şarkıları kalp ile beğenme, "Beğenilen Şarkılar" otomatik listesi
- **Arama**: Şarkı, sanatçı, albüm ve çalma listesi arama

---

## 📋 Çalma Listeleri & Albümler
- Kullanıcılar kendi **çalma listelerini** oluşturabilir (isim, kapak resmi, açıklama)
- Çalma listesine şarkı ekleme/çıkarma
- **Albüm** sayfaları (kapak, sanatçı bilgisi, şarkı listesi)

---

## 🎤 Sanatçı Özellikleri
- Sanatçı profil sayfası (bio, albümler, popüler şarkılar)
- Sanatçı rolüne sahip kullanıcılar **müzik yükleyebilir** (şarkı adı, kapak resmi, ses dosyası)
- Albüm oluşturma ve şarkı ekleme

---

## ⚙️ Yönetici Paneli
- **Kullanıcı yönetimi**: Kullanıcıları görüntüle, rol ata (admin/sanatçı/kullanıcı), engelle
- **İçerik yönetimi**: Şarkıları, albümleri, çalma listelerini düzenle/sil
- **Site ayarları**: Logo, site adı, renk teması değiştirme
- **İstatistikler**: Toplam kullanıcı, şarkı, dinlenme sayıları

---

## 🗄️ Backend (Supabase)
- Kullanıcı kimlik doğrulama (e-posta/şifre)
- Veritabanı tabloları: kullanıcılar, şarkılar, albümler, çalma listeleri, beğeniler, roller
- Ses dosyası ve kapak resmi depolama (Supabase Storage)
- Güvenlik politikaları (RLS)

---

## 📱 Sayfalar Özeti
1. **Ana Sayfa** – Keşfet, öne çıkanlar
2. **Arama** – Şarkı/sanatçı/albüm arama
3. **Kütüphane** – Kendi çalma listeleri ve beğenilen şarkılar
4. **Şarkı/Albüm/Sanatçı** detay sayfaları
5. **Profil** – Kullanıcı profili
6. **Giriş/Kayıt** sayfaları
7. **Yönetici Paneli** – Site yönetimi

