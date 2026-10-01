# MTS Hijyen B2B Paneli – Ana Tanıtım Videosu (30 sn) · Kurgu

> **Durum:** Taslak kurgu. Panel ekranları henüz incelenemedi (ortam ağ politikası `panel.mtshijyen.com` erişimini engelliyor).
> Sahnelerdeki modül adları tipik B2B sipariş paneline göre yazıldı; panele erişince gerçek menü adları ve ekranlarla güncellenecek.

## Genel Bilgiler

| Özellik | Değer |
|---|---|
| Süre | 30 saniye |
| Format | 1920×1080 (16:9), 30 fps, MP4 (H.264) – ayrıca 1080×1920 dikey kesim opsiyonel |
| Dil | Tamamen Türkçe (ekran yazıları + opsiyonel seslendirme) |
| Hedef kitle | Bayiler / kurumsal müşteriler ve panelde çalışacak ekip |
| Ana mesaj | “Tüm B2B satış süreciniz tek panelde: sipariş, stok, cari, rapor.” |
| Stil | Gerçek ekran kayıtları + üzerine animasyonlu infografik katman (ikon, sayaç, ok, vurgu çerçevesi) |
| Renk | MTS Hijyen kurumsal renkleri (logo üzerinden alınacak); yoksa lacivert + turkuaz + beyaz |
| Müzik | Telifsiz, modern kurumsal, ~110 BPM; geçişler vuruşlara oturtulacak |
| Gizlilik | Gerçek müşteri adı, telefon, fiyat ve cari bakiyeleri bulanıklaştırılacak |

## Sahne Akışı

| # | Süre | Görsel / Ekran | Ekran Yazısı (Türkçe) | İnfografik Katman | Seslendirme (opsiyonel) |
|---|---|---|---|---|---|
| 1 | 0:00–0:03 | Logo animasyonu, koyu zemin, giriş ekranı silik arka planda | **MTS Hijyen B2B Paneli** · *Satışın dijital merkezi* | Logo içeri kayar, alt çizgi soldan sağa dolar | “MTS Hijyen B2B Paneli ile tanışın.” |
| 2 | 0:03–0:08 | **Gösterge Paneli (Dashboard)** – yavaş zoom-in | **Her şey tek bakışta** | Günlük sipariş, ciro, bekleyen sipariş kartlarında sayaçlar 0’dan yukarı sayar; grafik çizgisi çizilir | “Satışlarınızı, siparişlerinizi ve performansınızı tek ekranda izleyin.” |
| 3 | 0:08–0:13 | **Ürün Yönetimi** – ürün listesi, kategori filtresi, ürün kartı | **Ürün & Stok Yönetimi** | Ürün kartı listeden “çıkıp” büyür; yanında 3 ikon: 📦 Stok · 🏷️ Fiyat · 🗂️ Kategori | “Ürünleri, stokları ve fiyat listelerini kolayca yönetin.” |
| 4 | 0:13–0:19 | **Siparişler** – sipariş listesi → sipariş detayı → durum değişimi | **Siparişten teslimata, uçtan uca takip** | Yatay süreç şeridi: *Yeni → Onay → Hazırlanıyor → Kargoda → Teslim* – aktif adım yanar | “Bayi siparişlerini onaylayın, durumunu anlık takip edin.” |
| 5 | 0:19–0:24 | **Bayiler / Cari Hesaplar** – bayi listesi, bayiye özel fiyat/iskonto alanı | **Bayiye özel fiyat ve iskonto** | Bayi kartına “%” rozet animasyonu; cari bakiye kutusu vurgulanır (rakamlar bulanık) | “Her bayiye özel fiyat, iskonto ve cari takibi.” |
| 6 | 0:24–0:27 | **Raporlar** – grafik ekranı, hızlı kesitler | **Raporlarla doğru karar** | Bar grafik barları yükselir, “Excel’e aktar” butonuna tıklama efekti | “Detaylı raporlarla işinizi büyütün.” |
| 7 | 0:27–0:30 | Kapanış kartı, panel ekranı arka planda bulanık | **MTS Hijyen B2B** · panel.mtshijyen.com · *7/24 sipariş, tek panel* | Logo ortada, URL alttan belirir | “MTS Hijyen B2B – 7/24 sipariş, tek panel.” |

## Geçiş ve Hareket Kuralları
- Sahneler arası: 0,3 sn kaydırmalı (slide) geçiş, müzik vuruşlarında.
- Ekran kayıtlarında imleç büyütülmüş ve yumuşatılmış; tıklamalarda halka efekti.
- Her sahnede tek bir başlık + en fazla 3 kısa madde; yazı ekranda en az 2 sn kalır.
- Alt yazı: seslendirme varsa ekranın altında beyaz, yarı saydam koyu bant üzerinde.

## Üretim Planı
1. Panele giriş yapılıp tüm menüler gezilecek, gerçek modül listesi çıkarılacak (sadece görüntüleme – kayıt değiştirilmeyecek).
2. Her sahne için 1920×1080 ekran kaydı/ekran görüntüsü alınacak (Playwright ile otomatik).
3. İnfografik katmanlar HTML/CSS animasyonu olarak hazırlanıp ekran kayıtlarının üzerine bindirilecek.
4. ffmpeg ile birleştirme, müzik ve (istenirse) Türkçe seslendirme eklenmesi.
5. Bu ana videodan sonra her modül için 45–60 sn’lik detay videoları (Ürünler, Siparişler, Bayiler, Raporlar, Ayarlar).

## Onay Bekleyen Sorular
- Seslendirme istiyor musunuz, yoksa sadece müzik + ekran yazısı mı?
- Kurumsal renk kodları / logo dosyası paylaşılabilir mi?
- Kapanışta telefon, web sitesi veya slogan gibi ek bilgi olsun mu?
