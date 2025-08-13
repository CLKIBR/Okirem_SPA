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
- [ ] Gereksiz API çağrısı, döngü veya büyük veri işlemi var mı?
- [ ] Giriş doğrulama ve hata yönetimi yeterli mi?
- [ ] Güvenlik açıkları (XSS, CSRF, injection vb.) kontrol edildi mi?

## 6. Dokümantasyon
- [ ] Fonksiyonlar, bileşenler ve önemli iş akışları yeterince dokümante edilmiş mi?
- [ ] Gerekli ise README veya ilgili dokümanlar güncellendi mi?

---

> Bu checklist, kod inceleme süreçlerinde tüm ekip üyeleri tarafından aktif olarak kullanılmalıdır. Gerektiğinde proje ihtiyaçlarına göre güncellenmelidir.
