# ADR-0003: Temel Mimari Kararlar

- Tarih: 2025-08-13
- Durum: Accepted
- Bağlam:
  Projenin sürdürülebilirliği, ekip içi iletişim ve kod kalitesinin artırılması için temel mimari kararların açıkça belgelenmesi gerekmektedir. Bu kararlar, kod tabanının organizasyonu, katman sınırları, bağımlılık yönetimi ve kurumsal standartları kapsar.

- Karar:
  Tüm önemli mimari kararlar, Architecture Decision Record (ADR) formatında, `docs/decisions/` klasöründe, numaralandırılmış ve açıklamalı olarak belgelenir. Her yeni karar için ayrı bir ADR dosyası oluşturulur.

  Bu kapsamda aşağıdaki mimari kararlar ve uygulamalar zorunlu olarak dokümante edilmiştir:
  - Katmanlar arası bağımlılıkların diyagram ile gösterilmesi
  - DTO/Mapper politikalarının kod örnekleriyle dokümantasyonu
  - DDD/CQRS eğitim oturumu ve kayıtlarının paylaşılması
  - Katman sınırlarının kodda ve dokümantasyonda netleştirilmesi
  - Domain servislerinin ve entity’lerin ayrıştırılması
  - Mapper ve DTO test senaryolarının hazırlanması

- Sonuçlar (Pozitif/Negatif etkiler):
  **Pozitif:**
  - Mimari değişiklikler ve gerekçeleri ekip tarafından kolayca takip edilir.
  - Onboarding ve bilgi transferi süreçleri hızlanır.
  - Mimari tutarlılık ve şeffaflık sağlanır.
  **Negatif:**
  - ADR dokümantasyonunun güncel tutulması ek disiplin gerektirir.

- İlgili Belgeler/PR'lar:
  - `docs/decisions/ADR_TEMPLATE.md`
  - `README.md` — Mimari ve organizasyonel standartlar
