# Kod İnceleme (Code Review) Checklist

Kurumsal kod kalitesini ve sürdürülebilirliği sağlamak için kod incelemelerinde aşağıdaki maddeler kontrol edilmelidir:

## 1. Genel
- [ ] Kod okunabilir, anlaşılır ve yeterince yorumlanmış mı?
- [ ] Fonksiyon, değişken ve dosya isimleri standartlara uygun mu?
- [ ] Gereksiz kod, yorum veya kullanılmayan dosya/bileşen var mı?
- [ ] Kodda gizli bilgi (şifre, anahtar vb.) bulunmuyor mu?

## 2. Mimari ve Tasarım
- [ ] Kod modüler mi, sorumluluklar doğru ayrılmış mı?
- [ ] Ortak kod ve tekrar eden yapılar `shared` veya `core` altında mı?
- [ ] Bağımlılıklar doğru yönetilmiş mi?
- [ ] Kod, mevcut mimari ve klasör standartlarına uygun mu?

## 3. Fonksiyonellik
- [ ] Tüm yeni/eklenen fonksiyonlar için testler yazılmış mı?
- [ ] Mevcut testler güncel ve başarılı mı?
- [ ] Hatalı durumlar ve edge-case’ler ele alınmış mı?

## 4. Stil ve Standartlar
- [ ] ESLint, Prettier ve Stylelint hatası yok mu?
- [ ] Kod stil rehberine ve isimlendirme standartlarına uygun mu?


## 5. Performans ve Güvenlik

### 5.1 Güvenli Header Kontrolleri
- [ ] Content-Security-Policy (CSP) tanımlı ve uygun mu?
- [ ] X-Frame-Options (clickjacking koruması) ayarlı mı?
- [ ] X-Content-Type-Options: nosniff kullanılıyor mu?
- [ ] Strict-Transport-Security (HSTS) aktif mi?
- [ ] Referrer-Policy ayarlı mı?
- [ ] Permissions-Policy (Feature-Policy) kullanılıyor mu?

### 5.2 CORS (Cross-Origin Resource Sharing) Kontrolleri
- [ ] Access-Control-Allow-Origin doğru şekilde kısıtlanmış mı?
- [ ] Access-Control-Allow-Methods ve Headers gereksiz izinler vermiyor mu?
- [ ] Access-Control-Allow-Credentials sadece gerekli ise açık mı?
- [ ] Preflight (OPTIONS) istekleri doğru yönetiliyor mu?

### 5.3 CSRF (Cross-Site Request Forgery) Kontrolleri
- [ ] CSRF token kullanılıyor ve her istekte doğrulanıyor mu?
- [ ] SameSite cookie özelliği (Lax veya Strict) kullanılıyor mu?
- [ ] State-changing işlemler (POST, PUT, DELETE) için koruma var mı?

### 5.4 Rate Limit ve Abuse Önleme
- [ ] API istekleri için rate limit uygulanıyor mu?
- [ ] Rate limit değerleri merkezi bir konfigürasyon dosyasında mı tutuluyor?
- [ ] Rate limit ihlali durumunda uygun hata mesajı ve HTTP status code (429) dönülüyor mu?
- [ ] Abuse tespiti için IP, kullanıcı veya token bazlı izleme yapılıyor mu?
- [ ] Rate limit ve abuse logları merkezi olarak kaydediliyor mu?
- [ ] Rate limit ve abuse politikaları dokümante edildi mi?
- [ ] Gereksiz API çağrısı, döngü veya büyük veri işlemi var mı?
- [ ] Giriş doğrulama ve hata yönetimi yeterli mi?
- [ ] Güvenlik açıkları (XSS, CSRF, injection vb.) kontrol edildi mi?
- [ ] Dependency scanning (bağımlılık güvenliği) raporları periyodik olarak inceleniyor ve gerekli aksiyonlar alınıyor mu?
- [ ] Tespit edilen güvenlik açıklarının hızlı kapatılması için tanımlı ve uygulanan bir süreç var mı?
- [ ] Güvenlik testleri (statik/dinamik analiz, dependency scanning vb.) otomatik olarak çalıştırılıyor ve sonuçları loglanıyor mu?

## 6. Dokümantasyon
## 7. Gözlemlenebilirlik (Observability)
- [ ] Uygulama logları merkezi bir sistemde toplanıyor ve erişilebiliyor mu?
- [ ] Log ve metrikler merkezi bir izleme sistemine (örn. ELK, Grafana, Prometheus, Sentry vb.) entegre edildi mi?
- [ ] Hata ve istisnalar (exceptions) otomatik olarak loglanıyor mu?
- [ ] Performans ve sağlık metrikleri (CPU, bellek, response time vb.) izleniyor mu?
- [ ] Dış servis ve API çağrıları izleniyor ve loglanıyor mu?
- [ ] İzleme (tracing) ile isteklerin uçtan uca takibi yapılabiliyor mu?
- [ ] Uyarı/alarm mekanizmaları tanımlı ve test edilmiş mi?
- [ ] Log ve metrikler için saklama ve erişim politikaları belirlenmiş mi?
- [ ] Fonksiyonlar, bileşenler ve önemli iş akışları yeterince dokümante edilmiş mi?
- [ ] Gerekli ise README veya ilgili dokümanlar güncellendi mi?
- [ ] Güvenlik ile ilgili dokümantasyon merkezi bir depoda güncel olarak tutuluyor mu?

---

> Bu checklist, kod inceleme süreçlerinde tüm ekip üyeleri tarafından aktif olarak kullanılmalıdır. Gerektiğinde proje ihtiyaçlarına göre güncellenmelidir.
