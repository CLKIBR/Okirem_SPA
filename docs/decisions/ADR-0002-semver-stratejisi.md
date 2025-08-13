# ADR-0002: SemVer (Semantic Versioning) Stratejisi

- Tarih: 2025-08-13
- Durum: Accepted
- Bağlam:
  Projede sürüm yönetimi, değişikliklerin izlenebilirliği ve otomasyon süreçlerinin sağlıklı işlemesi için bir sürümleme standardına ihtiyaç duyulmaktadır. Sürüm numaralarının anlamlı ve tutarlı olması, ekip içi iletişim ve dışa açık sürüm yönetimi açısından kritiktir.

- Karar:
  Projede [Semantic Versioning (SemVer) 2.0.0](https://semver.org/lang/tr/) standardı zorunlu olarak uygulanacaktır.

- Sonuçlar (Pozitif/Negatif etkiler):
  **Pozitif:**
  - Sürüm numaraları anlamlı ve öngörülebilir olur.
  - Otomatik changelog ve release süreçleri kolaylaşır.
  - Geriye dönük uyumluluk (backward compatibility) net şekilde yönetilir.
  - Dışa açık API ve paketlerde kullanıcı beklentisi yönetimi kolaylaşır.
  **Negatif:**
  - Sürüm numarası belirlerken dikkat ve disiplin gerektirir.

- İlgili Belgeler/PR'lar:
  - [SemVer Resmi Dokümantasyon](https://semver.org/lang/tr/)
  - `README.md` — Sürüm yönetimi ve tagging prosedürleri
