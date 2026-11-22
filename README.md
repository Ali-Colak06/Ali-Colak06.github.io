# Ali Çolak Portfolio

Bu repository, yayımlanmış V0 portfolyo sitesini ve bağımsız Sanity Studio'yu içerir.
Altı Astro sayfası yayımlanmış Sanity içeriğini ortak Navbar/footer ve çalışan
açık/koyu tema ile gösterir. Home/About/Contact bölümlerinin onaylı mobil ve
masaüstü düzenleri, geçici profil placeholder'ı ve dil seçilebilir 404 uygulandı. Son erişilebilirlik
kontrollerinin teknik teslim turu tamamlandı; sonuçlar ve sınırlar planda kayıtlıdır.
Public site GitHub Pages'te, Studio Sanity hosting'de yayındadır. Sanity Publish
→ otomatik GitHub Pages yayını ve onaylı kontrast düzeltmesi doğrulanmıştır.

Site: [ali-colak06.github.io](https://ali-colak06.github.io/)
Repository: [Ali-Colak06.github.io](https://github.com/Ali-Colak06/Ali-Colak06.github.io)

Studio: [ali-colak-portfolio.sanity.studio](https://ali-colak-portfolio.sanity.studio/)
Durum ve karar kapıları için [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

## Gereksinimler ve kurulum

Node.js 24 LTS kullanılır; doğrulanan sürüm `.nvmrc` içinde kayıtlıdır.
Node'un yerleşik TypeScript desteği ve test çalıştırıcısı kullanıldığı için ek bir
test framework'ü veya TypeScript runtime paketi yoktur.

Kök dizinde:

```sh
npm ci
```

Kök `.env.example` dosyasını `.env` olarak kopyalayıp `SANITY_PROJECT_ID`
değerini gerçek proje kimliğiyle doldur. Ardından:

```sh
npm run dev
```

Public uygulama Astro'nun varsayılan yerel geliştirme adresinde çalışır.
İçerik rotaları:

| Sayfa | EN | TR |
| --- | --- | --- |
| Home | `/` | `/tr` |
| About | `/about` | `/tr/about` |
| Contact | `/contact` | `/tr/contact` |

Build ayrıca tek `dist/404.html` üretir. İlk açılış İngilizcedir; EN/TR kontrolü
metinleri, dil metadata'sını ve Home hedefini değiştirir. Tema kontrolü çalışır.
JavaScript kapalıysa İngilizce içerik ve çalışan Home bağlantısı kullanılabilir.
`/en`, Projects, `/admin` ve public `/studio` rotaları yoktur.

## Kontroller

```sh
npm run check
npm test
npm run build
npm run check:routes
npm run preview
```

`check:routes`, build sonrasında çalışır. Yedi HTML çıktısını, dil metadata'sını,
başlıkları, içerik yapısını, CTA/iletişim bağlantılarını, eğitim tarihlerini ve
ortak Navbar/footer çıktısını kontrol eder. Tarayıcıda CMS sorgusu veya
framework hydration yoktur; küçük tema script'leri çalışır.
Kök testleri rota eşlemesini, lokalizasyonu, veri doğrulamasını, hata davranışını
ve gerçek GROQ sorgusunun draft/release/unpublish davranışını kapsar.

Kısıtlı bir ortam Astro telemetry ayar klasörüne erişemiyorsa yalnızca ilgili
PowerShell oturumunda `$env:ASTRO_TELEMETRY_DISABLED='1'` ayarlanabilir.
Bu, kullanıcı hesabının kalıcı ayarlarını değiştirmez.

## Bağımsız Sanity Studio

Studio aynı Git repository'sinde ayrı bir Node projesidir. Paketleri ve kilit
dosyası bağımsızdır; kök kurulumu Studio kurulumunun yerine geçmez.

```sh
cd studio
npm ci
npm run check
npm test
npm run build:scaffold
```

`build:scaffold` yalnızca derlemeyi doğrular. Alt sürece açık bir derleme bayrağı
verir ve gerçek proje kimliği yerine `scaffold` kullanır. Ürettiği çıktı canlı bir
CMS değildir ve yayımlanmamalıdır. Dataset/proje oluşturmaz, içerik yazmaz veya
yetkilendirilmiş bir CMS bağlantısını doğrulamaz.

Gerçek projeye bağlanılacağı zaman `studio/.env.example`, `studio/.env` olarak
kopyalanıp `SANITY_STUDIO_PROJECT_ID` gerçek, onaylı proje kimliğiyle doldurulur.
Ardından Studio dizininde `npm run dev` veya `npm run build` kullanılabilir.
Bu normal komutlar, kimlik yoksa açık hata verir. Dataset sabit `production`'dır.
Studio 22 Kasım 2026'da [ali-colak-portfolio.sanity.studio](https://ali-colak-portfolio.sanity.studio/)
adresinde yayımlandı. Mevcut Google hesabınla giriş yapabilirsin; dört belge ve
önceki içeriklerin göründüğü kullanıcı tarafından doğrulandı.

Şema veya Studio yapılandırması değiştiğinde manuel yeniden yayın:

```sh
cd studio
npx --no-install sanity login --provider google
npm run check
npm test
npm run deploy
```

CLI oturumu zaten açıksa login adımını atlayabilirsin. `npm run deploy` gerçek
proje build'ini alır, şemayı ve Studio'yu yayımlar. CLI yapılandırmasında hostname
ve public appId kayıtlıdır; sonraki deploy aynı Studio'yu günceller. Otomatik
Studio sürüm güncellemeleri kapalıdır (`deployment.autoUpdates: false`); paket
güncellemeleri test edilip manuel deploy edilir. `build:scaffold` çıktısını deploy
etme. İçerikte Publish yapmak Studio deploy'u gerektirmez.

23 Eylül 2026: Kullanıcının oluşturduğu gerçek Sanity projesi kök `.env` ve
`studio/.env` dosyalarına bağlandı. `production` dataset'ine tokensız, yayımlanmış
içerik sorgusu başarılı. Kullanıcı Studio erişimini tamamladı ve dört V0
belgesini yayımladı. Home, About ve Contact içerikleri iki dilde sayfalara
bağlandı. Eğitimde şimdilik yalnızca üniversite kaydı yayımlanıyor.

Studio testleri Sanity'nin gerçek doğrulama motorunu kullanır. Test istemcisinin
adresi yerel, kapalı bir porttur; testler gerçek dataset'e erişmez.

### V0 modeli

- Singleton'lar: `siteSettings`, `homePage`, `aboutPage`, `contactPage`.
- Nesneler: `localizedString`, `localizedText`, `educationEntry`.
- Singleton belge kimlikleri tip adlarıyla aynıdır; GROQ sorguları bunları kullanır.
- Singleton oluşturma şablonları ve çoğaltma/silme eylemleri gizlenmiştir.
  Yayımdan kaldırma kullanılabilir; bu kurallar Studio arayüzü içindir, API yetkisi değildir.
- Education bir About dizisidir; dizi sırası korunur. Boş `endYear` devam eden
  eğitimi temsil eder; sayfalarda Present/Günümüz gösterilir.
- Fotoğrafın `public/` altında statik dosya olarak tutulması onaylandı;
  Sanity şemasında fotoğraf alanı yoktur. Şu an Hero ve About'ta geçici CSS
  placeholder gösterilir. Kullanıcı gerçek fotoğrafı kaldırdı (22 Kasım 2026);
  kaynakta ve güncel build çıktısında gerçek fotoğraf yoktur. İleride gerçek
  görsele dönülecekse onaylı dosya eklenip `ProfileImage` bileşenine bağlanır.

## Astro içerik erişimi

Geliştirme ve build için gerçek Sanity kimliği ve yayımlanmış içerik gerekir. Kök `.env.example` yalnızca
`SANITY_PROJECT_ID` adını belgeler; gerçek proje bağlantısı sırasında `.env`
içinde veya süreç ortamında ayarlanır. Proje kimliği bir secret değildir.
V0 public-read veri erişimi için read token tanımlanmamıştır.

Kimlik verildiğinde `@sanity/astro` entegrasyonu açılır. Yapılandırma:

- Dataset: `production`.
- API sürümü: sabit `2026-09-01`.
- `useCdn: false`, `perspective: 'published'`.
- Embedded Studio ve Visual Editing kapalıdır.

Ortak Home/About/Contact view'larının Astro frontmatter bloklarında
`getSiteContent()` çağrılarak dört singleton okunur. Veri build sırasında
(geliştirmede sayfa isteğinde) alınır; tarayıcı Sanity'ye sorgu göndermez.
Fonksiyon istemci script'ine import edilmemelidir.

Fonksiyon `sanity:client` sanal modülündeki entegrasyon istemcisini kullanır;
ikinci bir istemci oluşturmaz. Dönen veriyi `unknown` olarak alıp zorunlu
alanları doğrular. Eksik içerik, çeviri veya erişim hatasında hata fırlatır;
fallback içerik döndürmez. Yayımlanan değişiklikler statik çıktıya yeni bir
build ile yansır. Geliştirmede değişikliği görmek için sayfayı yenile.

`tests/fixtures` yalnızca sentetik test verisidir. Bu veriler CMS'ye aktarılmaz
ve public sayfalarda kullanılmaz. Gerçek metin kaynağı `CONTENT.md`'dir.

## Dosya sorumlulukları

```text
src/pages/          Fiziksel EN/TR rotaları ve global 404
src/views/          İki dilin kullandığı, CMS içeriğini gösteren ortak sayfalar
src/layouts/        Ortak HTML belgesi, Navbar/footer ve main landmark
src/i18n/           Locale, UI metinleri, route eşlemesi, lokalizasyon
src/lib/sanity/     GROQ, sonuç tipleri, doğrulama, content access
src/components/    Global Navbar, Footer ve ThemeToggle bileşenleri
src/styles/        Onaylı ortak görünüm ve responsive shell stilleri
studio/            Bağımsız Studio, şemalar, singleton yapısı ve testler
tests/             Public uygulamanın veri ve route testleri
scripts/           Build çıktısı kontrolü
```

## Bağımlılık kararları

- Astro, TypeScript ve `@astrojs/check`: onaylı SSG mimarisi ve tür kontrolü.
- `@sanity/astro` ve `@sanity/client`: onaylı build-time entegrasyonu ve zorunlu
  istemci peer bağımlılığı. Kök istemci sürümü entegrasyonun peer aralıklarıyla uyumludur.
- Studio'da `sanity`, React/React DOM ve styled-components: Studio'nun zorunlu
  UI bağımlılıklarıdır. Public Astro'da React entegrasyonu/hydration yoktur.
  `@sanity/astro` da kendi dependency/peer ağacında bu paketleri getirebilir;
  bu, public HTML'ye React runtime'ı eklemez.
- `groq-js`: ağ erişimi olmadan gerçek sorguyu çalıştırarak yayımlanmış içerik
  sınırını test eder. Yalnızca geliştirme bağımlılığıdır.
- Studio'daki `@sanity/validation` ve test istemcisi: özel bir validator taklidi
  yazmadan şemaları gerçek Sanity kurallarıyla sınar; geliştirme bağımlılığıdır.
- Sanity CLI'ın kullandığı `@vercel/frameworks`, eski parser sürümlerini tam
  sürümle sabitliyor. Bu pakete özel `js-yaml: 3.15.2` ve `smol-toml: 1.9.1`
  override'ları aynı ana sürümdeki güvenlik düzeltmelerini sağlar. Üst paket
  düzeldiğinde bu override'lar yeniden değerlendirilmeli. `npm audit fix --force`
  uygulanmaz.

Son kontrol sonuçları ve kalan bağımlılık bulguları için
[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) içindeki doğrulama kaydına bakın.

## Güncel teslim durumu

Gerçek Sanity içerikleri ve ortak layout, Navbar, footer, tema davranışı hazırdır.
Home/About/Contact bölüm tasarımları ve global 404 uygulanmıştır. Kullanıcı
yayın hazırlığına geçilmesini istedi. Yayın yol haritasının M1 repository
hazırlığı, M2 workflow'u ve M3 ilk GitHub Pages yayını tamamlandı.
M4 Studio, M5 webhook ve M6 son teknik kontroller tamamlandı. Onaylı kontrast
düzeltmesi yayımlandı ve canlı sitede de doğrulandı. Bu teslim tam WCAG
sertifikasyonu değildir.
Hero ve About'ta masaüstünde 320px, mobilde 240px kare placeholder gösterilir.
Klavye, temel semantik yapı, reduced motion, JavaScript/storage kapalı davranışı
ve onaylı metin kontrastları kontrol edildi. Daha geniş yardımcı teknoloji ve
tarayıcı kapsamı otomatik olarak tamamlanmış sayılmaz.

Navbar 1024 px altında iki satır, üzerinde tek satırdır. Ortalanmış site en fazla
1240 px genişliğindedir. Bölüm düzenleri de aynı geçişi kullanır: Currently
mobilde tek, masaüstünde üç sütun; eğitim tarihleri mobilde altta, masaüstünde
sağdadır. Tema ilk ziyarette sistem tercihini kullanır; düğmeyle
seçilen tema tarayıcıda saklanır. Dil bağlantıları aynı sayfanın karşılığına gider.

Onaylanan tasarım kararları `DESIGN.md` içinde kayıtlıdır. Ortak görünümün
responsive ölçüleri kullanıcının verdiği yetkiyle belirlendi. Fotoğraf kararları
onaylandı; şu anda kullanıcının isteğiyle placeholder kullanılır. Kalan tasarım
kontrolleri açık kalır. GitHub Pages ve Sanity webhook'u ayrı milestone'larla
ele alınır.

## Yayın hazırlığı kontrolü — 22 Kasım 2026

- Node 24.14.1 ve npm 11.11.0 ile iki projenin tür kontrolü ve build'i geçti.
- Kök projede 12, Studio'da 5 test geçti; iki bağımlılık ağacı geçerli.
- Altı içerik rotası ve global 404 çıktı kontrolünden geçti.
- `.env`, `studio/.env`, bağımlılıklar ve build klasörleri Git dışında.
- İlk commit için 72 dosya mevcut; henüz commit, remote veya deployment yok.
- Güncelleme öncesi `npm audit`: kökte 29 (12 high), Studio'da 25 (10 high) paket
  bulgusu; critical yok. Bu sayılar benzersiz açık veya doğrudan site riski
  sayısı değildir. Eski "yalnızca 5 moderate" kaydı güncel değildir.
  Ardından uyumlu sürüm güncellemeleri ve hedefli parser override'ları uygulandı.
  Son taramada her iki projede **13 moderate, 0 high, 0 critical** bulunuyor.
  Kalan kayıtlar Sanity CLI → oclif → minimatch zincirine ait; paket sayısı
  13 olsa da temel advisory aynıdır. Ayrıntılı etki değerlendirmesi plandadır.

Ayrıntılı sonuçlar ve ilk commit kapsamı `IMPLEMENTATION_PLAN.md` içindedir.

Güvenlik güncellemesi sonrası iki lockfile da temiz `npm ci` ile doğrulandı.
İki tür kontrolü ve build, 17 test, route kontrolü ve bağımlılık bütünlüğü
kontrolleri geçti. Sanity doğrulama testleri yeni API'nin `markers` ve `complete`
alanlarına uyarlandı.

## GitHub Pages workflow'u (M2)

Workflow: `.github/workflows/deploy-pages.yml`.
Hedef repository `Ali-Colak06.github.io`, hedef adres
`https://ali-colak06.github.io/`, yayın branch'i `main`.
Astro `site` ayarı bu adresi kullanır; alt dizin `base` ayarı yoktur.
22 Kasım 2026'da ilk push yayını ve manuel yeniden yayın başarıyla doğrulandı.

- `main` push'u ve manuel `workflow_dispatch` aynı workflow'u çalıştırır.
  Başka bir branch üzerinden manuel çalıştırılırsa build/deploy atlanır.
- Node `.nvmrc` üzerinden seçilir; npm cache anahtarı kök lockfile'a bağlıdır.
- Build işi `npm ci`, tür kontrolü, 15 test, yayımlanmış Sanity içeriğiyle
  build ve route/yerel dosya bağlantısı kontrollerini sırayla çalıştırır.
- Sadece `dist/` Pages artifact'i olarak yüklenir. Studio ayrıca deploy edilir.
- Deployment işi build'e bağımlıdır. Build başarısızsa artifact yayımlanmaz.
- `contents: read` ve `pages: read` build işindedir; `pages: write` ve
  `id-token: write` yalnızca deployment işine verilir. Ayrı GitHub PAT gerekmez.
- Tek concurrency grubu çalışan yayını kesmez; bekleyen eski çalışmanın
  yerine yenisi geçer. Aktif çalışma bitince son bekleyen istek çalışır.

M3'te GitHub üzerinde tamamlanan kurulum (yeniden kurulum için başvuru):

1. Hedef repository'yi oluştur/varsa içeriğini kontrol et ve `main` branch'ini bağla.
2. Settings → Secrets and variables → Actions → **Variables** altında
   `SANITY_PROJECT_ID` repository değişkenini mevcut proje kimliğiyle tanımla.
   Proje kimliği public yapılandırmadır; read token gerekmez. Değişken boşsa
   workflow açıklayıcı hata ile durur; `.env` GitHub'a gönderilmez.
3. Settings → Pages → Build and deployment → Source: **GitHub Actions** seç.
4. `github-pages` environment'ının yayın branch'ini `main` ile sınırla.
5. İlk push/yayını ve ardından Actions üzerinden `Run workflow` ile manuel
   yayını doğrula. Manuel tetikleme için workflow'un default branch'te bulunması
   gerekir; `main` default branch olarak kullanılacak.

Sanity webhook'u M5'te bu workflow'un `workflow_dispatch` girişine bağlanacak.
M2 yalnızca yerel hazırlıktı; M3'te repository oluşturuldu, ilk commit/push,
GitHub Actions build/deploy, OIDC, HTTPS ve Pages yayını doğrulandı. Canlı sitede
24 rota/viewport/tema kontrolü, dil geçişi, tema kalıcılığı ve nested 404 geçti.
Gerçek fotoğraf adresi `/images/profile.jpg` HTTP 404 döndürüyor.

Doğrulanan çalışmalar:
[ilk push](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45021724306),
[manuel yayın](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45021885669).
Sanity Publish webhook'u etkin ve gerçek teslim/yayın testi başarılı.
Manuel yedek yol: içerik yayımladıktan sonra Actions → Deploy portfolio to GitHub
Pages → Run workflow → main üzerinden yeniden yayın başlatılabilir.

## Sanity Publish webhook'u (M5 — etkin ve doğrulandı)

Sanity'de `Portfolio - GitHub Pages rebuild` webhook'u oluşturuldu
(ID `6v5diYv8bbiDBWks`). Authorization başlığı ve etkinlik ayarı 22 Kasım 2026'da
doğrulandı. Secret değeri kaynaklara kaydedilmedi. Kullanıcının İngilizce Hero'ya
eklediği geçici `Test1` metniyle Publish → webhook HTTP 200 →
[başarılı workflow](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45025683397)
→ canlı İngilizce sayfa zinciri doğrulandı. Türkçe sayfa bu testten etkilenmedi.
Kullanıcı Test1'i kaldırıp yeniden Publish yaptı;
[geri dönüş yayını](https://github.com/Ali-Colak06/Ali-Colak06.github.io/actions/runs/45025864459)
da başarılı. Onaylı İngilizce metnin geri geldiği ve Test1'in canlı siteden
kaldırıldığı doğrulandı.

Kaynak yapılandırma `studio/webhooks/github-pages.json` içindedir; token içermez.
Bu dosya ilk kurulum için devre dışı bir şablondur. Yapılandırılmış canlı hook'un
üzerine yeniden uygulama; uzak Authorization başlığını veya etkinlik durumunu
sıfırlayabilir. Studio deploy'u webhook'u değiştirmez.

- Dataset `production`, olaylar create/update/delete.
- `before()` / `after()` ile dört V0 singleton'ın yayımlanmış değişiklikleri
  kapsanır; silme/unpublish öncesindeki belge de dikkate alınır.
- Taslaklar, release sürümleri, farklı kimlikteki kopyalar ve ilgisiz belge
  tipleri filtrelenir. Ek olarak includeDrafts/includeAllVersions kapalıdır.
- Payload sadece `{"ref":"main"}`; editorial içerik GitHub'a gönderilmez.
- Hedef, mevcut `deploy-pages.yml` workflow'unun dispatch endpoint'idir.
  Yeni workflow, backend veya bağımlılık eklenmez.

Yeniden kurulum veya token yenileme için (ilk bağlantı tamamlandı):

1. GitHub Settings → Developer settings → Personal access tokens →
   **Fine-grained tokens** altında yeni token oluştur. Resource owner:
   `Ali-Colak06`; Repository access: **Only select repositories** →
   `Ali-Colak06.github.io`; Repository permissions: **Actions: Read and write**.
   Otomatik Metadata read dışında başka yetki ekleme. Örneğin 90 günlük son
   kullanım tarihi seç ve token'ı yalnızca Sanity'de sakla.
2. [Sanity proje API ayarlarında](https://www.sanity.io/manage/project/n3mwz4q6/api)
   yukarıdaki webhook'u düzenle. HTTP headers'a `Authorization` anahtarıyla
   `Bearer <oluşturduğun token>` değerini ekle; mevcut başlıkları koru. Bu değeri
   sohbete, Markdown'a veya `.env` dosyasına yazma. İmza için olan Secret alanı
   GitHub Authorization başlığının yerine geçmez.
3. Webhook'u etkinleştirip kaydet. Proje secret değeri içeren hook paylaşım
   bağlantısı/export'u üretme. Token süresi dolduğunda aynı başlığı yeni token'la
   güncelle; otomatik yayın çalışmazsa manuel workflow yedek yoludur.
4. Webhook ayarlarını secret değerini göstermeden kontrol et; ardından onaylı
   bir Publish olayıyla Sanity attempt ve GitHub run sonucunu eşleştir.

## Günlük kullanım ve sorun giderme

- **İçerik:** Studio'ya Google hesabınla gir, belgeyi düzenle ve Publish yap.
  Taslağı kaydetmek yayını değiştirmez. Actions'ta build/deploy tamamlanınca
  canlı sayfayı yenile. Kalıcı onaylı metin değişikliklerini CONTENT.md'ye de kaydet.
- **Kod/UI:** yerelde ilgili kontrolleri çalıştır, commit/push yap; main push'u
  Pages workflow'unu tetikler. Sabit UI etiketleri src/i18n/ui.ts içindedir.
- **Studio şeması/yapılandırması:** studio/ altında check/test sonrası
  `npm run deploy` çalıştır. İçerik Publish'i için bu komut gerekmez.
- **Publish sonrası güncellenmiyor:** Sanity API → Webhooks → ilgili hook'un
  attempt kaydını, ardından GitHub Actions sonucunu incele. HTTP 401/403/404
  durumunda token süresini, repository/Actions yetkisini ve hedef URL'yi kontrol
  et. Token'ı yalnızca uzaktaki Authorization başlığında yenile.
- **Build başarısız:** GitHub log'undaki ilk hatayı düzelt. Zorunlu belge/çeviri
  eksikse Studio'da tamamla ve Publish yap; fallback içerik ekleme. Başarısız build
  deployment işine geçmez. Gerekirse Actions → Run workflow → main ile yeniden dene.
- **Yerel preview eski içerik gösteriyor:** yeniden `npm run build` al. Dev
  sunucusunda sayfayı yenile. Canlı yayında workflow tamamlandıktan sonra gerekirse
  önbelleksiz yenileme yap.

Geleceğe kalanlar: gerçek profil fotoğrafına dönüş (şimdilik owner-approved
placeholder), ertelenen lise kaydı, daha geniş erişilebilirlik/tarayıcı incelemesi
ve Sanity CLI zincirindeki 13 moderate bulgunun üst paket düzeltmesi geldiğinde
yeniden değerlendirilmesi. High/critical bulgu son taramada yoktu. Bunlar yeni
özellik veya otomatik paket yükseltme yetkisi değildir.

GitHub'ın gerekli token yetkisi:
[workflow dispatch API](https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event).
Filtre ve başlık yapılandırması:
[Sanity Webhooks API](https://www.sanity.io/docs/http-reference/webhooks).

Başvuru: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages),
[Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

Kanonik belgeler `PROJECT_SPEC.md`, `ARCHITECTURE.md`, `SANITY.md`, `CONTENT.md`,
`DESIGN.md` ve `AGENTS.md` olarak korunur.

Teknik başvuru: [Astro i18n](https://docs.astro.build/en/guides/internationalization/),
[Sanity Astro entegrasyonu](https://www.sanity.io/docs/astro/configure-sanity-astro),
[Sanity singleton rehberi](https://www.sanity.io/guides/singleton-document),
[Sanity doğrulama](https://www.sanity.io/docs/studio/validation).
