# Günlük Proje Rutinleri

Her gün uygulamanız gereken adımlar ve komutlar:

## Günlük Güncellenmesi Gereken Başlıklar

- Katman Sınırları ve Sorumlulukları
- DTO ve Mapper Politikaları
- Katmanlar Arası Bağımlılık Diyagramı
- Ortam Bazlı Pipeline Varyasyonları
- CI/CD Pipeline'da Güvenlik Taramaları
- Test ve Coverage Raporlarının Merkezi Saklanması
- Sürüm Notlarının Merkezi Depoda Tutulması
- Kod Kalitesi Metriklerinin Periyodik Raporlanması

## Günlük Kontrollerin Yapılacağı Başlıklar

- Fail-Fast ve Notification Mekanizmaları
- Pipeline Adımlarının Loglanması ve İzlenebilirliği
- Otomatik Build ve Deploy Rollback Senaryoları
- CI/CD Pipeline Şeması ve Onay Akışları
- Geriye Dönük Sürüm İnceleme ve Rollback Prosedürleri
- Sürüm Etiketleme ve Geri Alma Prosedürleri
- Otomatik CHANGELOG ve Sürüm Yönetimi
- Otomatik Formatlama ve Linting Scriptleri
- OkiremSPA — Onboarding ve Kod Standartları
- TypeScript Strict Modu Politikası
- Editör ve Kod Stili Standartları
- Kod İnceleme (Code Review) Politikası

---

## Gün Başlangıcı
1. **Günlük görevleri ve proje özetini güncelle:**
   ```powershell
   npm run ai:context
   ```
   - Otomatik olarak AI_CONTEXT.md ve PROJECT_SNAPSHOT.md dosyaları güncellenir.
   - Gün başlangıcı logu eklenir.

2. **Günlük görevleri incele:**
   - AI_CONTEXT.md dosyasındaki "Bugünün Görevleri" bölümünü kontrol et.
   - Gerekirse ChatGPT'ye bu dosyayı gönder.

---

## Gün İçinde
- **Kod geliştirme:**
  - Yeni özellik, düzeltme veya görev üzerinde çalış.
- **Kodunuzu kaydedin:**
  ```powershell
  git add .
  git commit -m "Gün X: [Kısa açıklama]"
  git push origin feature/gun-X
  ```
  - X, bugünkü gün numarasıdır.

---

## Gün Sonu
1. **Kod değişikliklerini ana branch'e PR ile gönder:**
   ```powershell
   node scripts/ai/create-pr.mjs
   ```
   - Otomatik olarak PR açılır ve gün sonu logu eklenir.

2. **PR'ı GitHub'da incele:**
   - Açılan PR'ı kontrol et, açıklama ekle, reviewer ata.
   - Test ve CI sonuçlarını kontrol et.
   - Onayladıktan sonra PR'ı birleştir (merge).

3. **Issues ve görev takibi:**
   - Otomatik açılan Issue'ları incele.
   - Gerekirse açıklama, etiket, assignee ekle.
   - Tamamlanan Issue'ları kapat.

---

## Manuel Yapılması Gerekenler
- PR ve Issue açıklamalarını gözden geçir.
- PR'ı birleştir (merge) et.
- Gerekirse ChatGPT'ye günün özetini ve dosyaları gönder.
- Eksik veya hatalı log/görev varsa elle düzelt.

---

Bu adımları her gün uygularsan, proje takibi ve ekip koordinasyonu tam ve verimli olur.
