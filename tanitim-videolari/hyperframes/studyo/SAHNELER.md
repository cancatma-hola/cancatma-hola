# Sahne tipleri (video tanım dili)

Her video bir nesnedir: `{ id, tur: "egitim" | "tanitim", baslik, etiket?, tohum?, ton?, sahneler: [...] }`.
- `id`: `egitim-NN-konu` ya da `tanitim-NN-konu` (numara tüm arşivde tek).
- `tohum`: arka plan ışıklarının yerleşimi (sayı). `ton`: müzik transpozu (−3…+3).
- `videolar/<klasör>/*.mjs` içindeki videolar `tanitim-videolari/videolar/<klasör>/<tür>/` altına yazılır.

Metin kuralları: kısa, düz cümle, fiil sonda (devrik cümle yok), anlamsız dolgu yok. `*yıldızlı*` kelimeler sarı vurgulanır.
Süreler otomatik hesaplanır (0,5 sn ızgarası). Okuma süresi kelime başına ~0,32 sn.

## Ekran sahneleri

### `ekran` (masaüstü panel, tarayıcı çerçevesi)
```js
{ tip: "ekran", ekran: "siparisler", adim: 1, metin: "Siparişlerinizi *tek listede* görün.",
  bolge: { x: 555, y: 205, w: 1095, h: 520 },          // ya da "[]metin" / ["a","b"]; dikey için bolgeD
  vurgu: [{ hedef: "[]MTS-2026-0027", not: "Her satırda durum yazar", kaydir?: true }],   // her vurgu 2,8 sn
  yaz: { hedef: "Ürün ara (ad veya kod)", metin: "555204" },                        // isteğe bağlı
  tikla: { hedef: "Sepete Ekle", sonuc: "Ürün sepete eklendi" },                    // yalnız canlandırılır
  yol?: "Hesabım › Siparişlerim",                      // konum çipi; verilmezse ekranlar.js'ten gelir, null kapatır
  ortu?: ["[]TKF-2026-0002"],                           // ayrıca gri bantla kapatılacak öğeler (test kayıtları)
  saat?: "09:00",                                       // çubukta saat çipi ("bir gün" kurgusu); telefonda durum çubuğu saati
  dikey?: { tip: "telefon", ekran: "m-...", vurgu: [...] } }   // dikey sürümde bu sahnenin yerine geçer
```
- `adim` verilirse başlıkta numara ve "ADIM x / n" etiketi çıkar; verilmezse büyük orta başlık (tanıtım).
- Hedef yazımı: `"Metin"` birebir, `"~parça"` içerir, `"[]metin"` o metni içeren en küçük kutu, `"#2"` ikinci eşleşme, dizi = birleşim, `{x,y,w,h}` ham kutu.
- Hedef bulmak için: `node araclar/bak.mjs <ekran> [metin]`, `node araclar/ozet.mjs <ekran>`.

### `telefon` (gerçek mobil panel ekranı, telefon çerçevesi)
```js
{ tip: "telefon", ekran: "m-onaylarim", adim: 2, metin: "Siparişi *tek dokunuşla* onaylayın.",
  vurgu: [{ hedef: "[]Sipariş tutarı: ₺1.779,56", not: "Tutar ve ürünler tek kartta", zoom?: 1.3 }],
  tikla: { hedef: "Onayla", sonuc: "Sipariş onaylandı" }, basY?: 0, ustSabit?: 65 }
```
- Yalnızca `m-` ile başlayan mobil çekimler (430 px genişlik). Hedef koordinatları CSS px.
- Kamera hedefe kaydırır ve yakınlaştırır; panelin üst çubuğu sabit kalır.
- Dikeyde telefon büyük ve alttan taşar; yatayda sağda, başlık ve notlar solda durur.
- Mobil ekranlar: m-ozet, m-siparisler, m-siparis-sevkiyat, m-onaylarim, m-hizli, m-periyodik, m-sadakat, m-faturalar, m-ekstre, m-butce, m-kategori, m-urun, m-teklifler, m-teklif-hazir, m-analitik, m-sozlesme, m-onay-kurallari, m-kullanicilar, m-departmanlar, m-projeler, m-listeler, m-favoriler, m-iadeler, m-iade-yeni, m-numune, m-kuponlar, m-davet, m-bildirimler, m-destek, m-ayarlar, m-kampanyalar, m-paketler, m-paket-ofis, m-katalog-tekrar, m-siparis-teslim, m-siparis-odeme, m-yardim, m-giris, m-menu-hesap, m-menu-bolum. (m-menu-hesap: hesap menüsü açık, m-menu-bolum: bölüm listesi açık)

### `cihaz` (aynı panel masaüstünde ve telefonda)
```js
{ tip: "cihaz", metin: "Panel *cebinizde.*", alt: "Masaüstünde ve telefonda aynı panel",
  masa: { ekran: "ozet", bolge: { x: 555, y: 205, w: 1095, h: 620 } }, tel: { ekran: "m-ozet", basY: 60 } }
```

## Anlatım sahneleri
| Tip | Alanlar | Ne zaman |
|---|---|---|
| `kapak` | `ust`, `baslik`, `alt`, `ikon`, `sure` | Eğitim açılışı |
| `gundem` | `ust?`, `baslik?` ("Bu videoda"), `maddeler: [..]` (2–4 kısa madde), `ikon?` | Eğitimin başında yol haritası |
| `karakter` | `avatar: {sac, ten, sacRenk, giysi, yaka, sakal, gozluk, ruh}`, `ad`, `rol`, `ikon`, `metin` | Sorun ya da sonuç cümlesi (kurgusal kişi; müşteri yorumu değil) |
| `kelime` | `ust?`, `kelimeler: [..]` (2–4), `ciz: true` (üstünü çiz), `son` | Tanıtım kancası, ilk 3 sn |
| `soru` | `metin`, `alt?`, `cipler: [[ikon, metin]]` | Sorunu sorma |
| `akis` | `baslik`, `adimlar: [[ikon, baslik, alt?]]` (3–6) | Süreç |
| `karsilastir` | `baslik`, `once`, `sonra`, `sol: [..]`, `sag: [..]` | Önce / sonra |
| `sayac` | `baslik`, `deger`, `para?`, `ondalik?`, `onek?`, `sonek?`, `alt?`, `cipler?` | Tek büyük rakam |
| `rakamlar` | `baslik`, `kartlar: [{ikon, deger, para?, ondalik?, sonek?, etiket}]` (2–4) | Birden çok rakam |
| `cubuk` | `baslik`, `satirlar: [[ad, kullanılan, limit]]`, `para?`, `vurgu?` | Bütçe çubukları |
| `test` | `ust?` ("Mini test"), `soru`, `secenekler: [..]` (3), `dogru` (0 tabanlı), `aciklama` | Pekiştirme sorusu (3 sn geri sayım) |
| `kontrol` | `baslik`, `maddeler: [..]` (2–4) | Özet / kontrol listesi |
| `ipucu` | `baslik`, `maddeler: [[ikon, metin]]` | Unutmayın |
| `kapanis` | `slogan` | Tanıtım kapanışı (logo + telefon) |
| `son` | `metin?`, `sonraki?` | Eğitim kapanışı |

Avatar seçenekleri: `sac`: kisa, uzun, topuz, kivircik, kel · `ten`: acik, bugday, esmer, koyu · `yaka`: gomlek, kravat, yelek · `sakal`, `gozluk`: true · `ruh`: mutlu, dertli, notr.

İkonlar: cart check clock chart users wallet doc repeat bell gift truck search shield box percent mail building list star back flask calendar table userplus tag eye key phone link bolt approve x heart gear help download upload filter sparkle home pin lock user chat edit plus trend sun package undo sample invoice map.

## Geçişler
- Eğitim: kapaktan sonra ve tıklamalı ekrandan sonraki ekrana yakınlaşarak geçiş (cinematic-zoom); diğerleri yumuşak geçiş.
- Tanıtım: sırayla shader geçişleri. Kapanışa cross-warp-morph.

## Dikey güvenli alan
Reels/TikTok/Shorts arayüzü üstte ~210 px, altta ~410 px yer kaplar. Motor önemli metni 210–1510 px arasında tutar.

## Kurallar (panel güvenliği)
- Kayıt değiştiren işlemler (Onayla, Sepete Ekle, Kaydet, Gönder) panelde yapılmaz; motor tıklamayı ve sonucu canlandırır.
- Kişisel e-posta, telefon ve "asd" test kayıtları gri bantla kapatılır (otomatik).
- ₺0,00 fiyatlı paketler, boş sepet, mobil sipariş geçmişi kodları, yana kayan tablolar gösterilmez.
- Faturalarda PDF henüz yok ("PDF yakında yüklenecek"); "PDF indirin" denmez, "Yazdır" denebilir.
