# <p align="center">
  <img src="docs/okirem-logo.png" alt="Okirem Kurumsal Logo" width="180" />
</p>

# OkiremSPA

## Proje Özeti
OkiremSPA, modern yazılım geliştirme standartlarına uygun, katmanlı mimari ve güçlü CI/CD süreçleriyle kurumsal projeler için tasarlanmış bir Angular uygulamasıdır. Proje, sürdürülebilirlik, güvenlik, kod kalitesi ve ekip işbirliğini ön planda tutar.

## Amaç
Bu doküman, OkiremSPA projesinin mimari yapısını, geliştirme ve sürümleme süreçlerini, kod standartlarını ve ekip içi işleyişi kurumsal düzeyde tanımlamak amacıyla hazırlanmıştır.

## İçindekiler
1. [Katman Sınırları ve Sorumlulukları](#katman-sınırları-ve-sorumlulukları)
2. [DTO ve Mapper Politikaları](#dto-ve-mapper-politikaları)
3. [Katmanlar Arası Bağımlılık Diyagramı](#katmanlar-arası-bağımlılık-diyagramı)
4. [Ortam Bazlı Pipeline Varyasyonları](#ortam-bazlı-pipeline-varyasyonları)
5. [Fail-Fast ve Notification Mekanizmaları](#fail-fast-ve-notification-mekanizmaları)
6. [Pipeline Adımlarının Loglanması ve İzlenebilirliği](#pipeline-adımlarının-loglanması-ve-izlenebilirliği)
7. [CI/CD Pipeline'da Güvenlik Taramaları](#cicd-pipeline-da-güvenlik-taramaları)
8. [Otomatik Build ve Deploy Rollback Senaryoları](#otomatik-build-ve-deploy-rollback-senaryoları)
9. [Test ve Coverage Raporlarının Merkezi Saklanması](#test-ve-coverage-raporlarının-merkezi-saklanması)
10. [CI/CD Pipeline Şeması ve Onay Akışları](#cicd-pipeline-şeması-ve-onay-akışları)
11. [Geriye Dönük Sürüm İnceleme ve Rollback Prosedürleri](#geriye-dönük-sürüm-inceleme-ve-rollback-prosedürleri)
12. [Sürüm Notlarının Merkezi Depoda Tutulması](#sürüm-notlarının-merkezi-depoda-tutulması)
13. [Sürüm Etiketleme ve Geri Alma Prosedürleri](#sürüm-etiketleme-ve-geri-alma-prosedürleri)
14. [Otomatik CHANGELOG ve Sürüm Yönetimi](#otomatik-changelog-ve-sürüm-yönetimi)
15. [Kod Kalitesi Metriklerinin Periyodik Raporlanması](#kod-kalitesi-metriklerinin-periyodik-raporlanması)
16. [Otomatik Formatlama ve Linting Scriptleri](#otomatik-formatlama-ve-linting-scriptleri)
17. [OkiremSPA — Onboarding ve Kod Standartları](#okiremspa--onboarding-ve-kod-standartları)
18. [TypeScript Strict Modu Politikası](#typescript-strict-modu-politikası)
19. [Editör ve Kod Stili Standartları](#editör-ve-kod-stili-standartları)
20. [Kod İnceleme (Code Review) Politikası](#kod-inceleme-code-review-politikası)
21. [SSS ve Destek](#sss-ve-destek)

# Katman Sınırları ve Sorumlulukları

Proje kod tabanında katmanlar ve sorumlulukları aşağıdaki gibi netleştirilmiştir:

| Katman         | Klasör/Yol                | Sorumluluk |
|----------------|---------------------------|------------|
| UI/Pages       | `src/app/pages`           | Kullanıcıya gösterilen arayüz ve sayfa bileşenleri |
| Features       | `src/app/features`        | İşlevsel modüller, domain mantığı |
| Shared         | `src/app/shared`          | Ortak bileşenler, pipe'lar, directive'ler, yardımcılar |
| Shared/DTO     | `src/app/shared/dto`      | Katmanlar arası ve dış API veri transfer nesneleri |
| Shared/Mappers | `src/app/shared/mappers`  | DTO <-> Domain model dönüşüm fonksiyonları |
| Core           | `src/app/core`            | Uygulama genel servisleri, guard'lar, interceptor'lar |
| Infrastructure | (gerekirse)               | Dış bağımlılıklar, API, veri erişim katmanı |

Her katmanın sorumluluğu ve sınırı kodda ve dokümantasyonda açıkça belirtilmiştir. Katmanlar arası bağımlılıklar yukarıdaki diyagram ve açıklamalara uygun olmalıdır.
# DTO ve Mapper Politikaları

## Politika
- Tüm dış API/servis entegrasyonlarında ve katmanlar arası veri iletiminde DTO (Data Transfer Object) kullanımı zorunludur.
- Domain modeli ile dış veri formatı arasında dönüşüm için ayrı Mapper fonksiyonları veya sınıfları tanımlanır.
- Mapper fonksiyonları, veri doğrulama ve tip güvenliğini garanti altına alır.
- DTO ve Mapper'lar `shared/dto` ve `shared/mappers` klasörlerinde tutulur.

## TypeScript Kod Örneği
```typescript
// shared/dto/user.dto.ts
export interface UserDto {
	id: string;
	name: string;
	email: string;
}

// domain model
export interface User {
	id: string;
	fullName: string;
	email: string;
}

// shared/mappers/user.mapper.ts
export function mapUserDtoToUser(dto: UserDto): User {
	return {
		id: dto.id,
		fullName: dto.name,
		email: dto.email,
	};
}

export function mapUserToUserDto(user: User): UserDto {
	return {
		id: user.id,
		name: user.fullName,
		email: user.email,
	};
}
```

> DTO ve Mapper kullanımı, kodun sürdürülebilirliği, tip güvenliği ve dış sistemlerle entegrasyonun sağlıklı olması için zorunludur.
# Katmanlar Arası Bağımlılık Diyagramı

<p align="center">
  <img src="docs/ai/katman-diyagrami.png" alt="Katmanlar Arası Bağımlılık Diyagramı" width="420" />
</p>

**Açıklama:**
- UI/Pages katmanı, uygulamanın kullanıcıya gösterilen arayüzünü ve sayfa bileşenlerini içerir.
- Features katmanı, işlevsel modülleri ve domain mantığını barındırır.
- Shared katmanı, ortak bileşenler, pipe'lar ve yardımcıları içerir.
- Core katmanı, uygulama genelinde kullanılan servisler, guard'lar ve altyapı kodlarını içerir.
- En alt katmanda ise dış bağımlılıklar, API ve altyapı servisleri yer alır.
# Ortam Bazlı Pipeline Varyasyonları

Proje CI/CD pipeline'ı, farklı ortamlar (development, staging, production) için aşağıdaki varyasyonlara sahiptir:

## Development (Geliştirme)
- Her commit/push sonrası otomatik olarak build, lint, test ve coverage adımları çalışır.
- Deploy işlemi yapılmaz, sadece kalite ve entegrasyon kontrolleri uygulanır.

## Staging (Ön Prod)
- Ana branch'e (main) veya belirli bir branch'e merge sonrası pipeline tetiklenir.
- Build, lint, test, coverage ve güvenlik taramaları zorunludur.
- Başarılı ise staging ortamına otomatik deploy yapılır.
- Gerekirse manuel onay adımı eklenebilir.

## Production (Canlı)
- Sadece onaylanmış ve testleri geçen kodlar production pipeline'ına alınır.
- Build, lint, test, coverage, güvenlik taramaları ve release/tag adımları zorunludur.
- Başarılı ise production ortamına otomatik veya manuel onay ile deploy yapılır.
- Rollback ve notification mekanizmaları aktif olarak uygulanır.

> Her ortam için pipeline adımları ve kuralları düzenli olarak gözden geçirilir ve güncellenir.
# Fail-Fast ve Notification Mekanizmaları

## Fail-Fast
- CI/CD pipeline'ında herhangi bir adım (lint, test, build, deploy, security scan vb.) başarısız olursa süreç anında durdurulur (fail-fast).
- Başarısız adım sonrası kalan adımlar çalıştırılmaz, hata hızlıca tespit edilir ve müdahale edilir.

## Notification (Bildirim)
- Pipeline başarısız olduğunda veya kritik bir hata oluştuğunda ekip üyelerine otomatik bildirim (örn. e-posta, Slack, Teams) gönderilir.
- Bildirimler, hızlı aksiyon alınmasını ve şeffaflığı sağlar.
- Bildirim entegrasyonları CI/CD platformunun native özellikleri veya ek aksiyonlar ile sağlanır.

> Fail-fast ve notification mekanizmaları, hızlı geri bildirim ve yüksek yazılım kalitesi için zorunludur.
# Pipeline Adımlarının Loglanması ve İzlenebilirliği

Tüm CI/CD pipeline adımları detaylı şekilde loglanır ve izlenebilirlik sağlanır:

- Her adımda (build, test, lint, deploy, security scan vb.) çıktı ve hata logları tutulur.
- Pipeline logları CI/CD platformunda (örn. GitHub Actions, GitLab CI) merkezi olarak saklanır ve geçmişe dönük erişim mümkündür.
- Hatalı adımlar ve başarısız pipeline çalışmaları ekip tarafından düzenli olarak gözden geçirilir.
- Kritik hatalar ve uyarılar için otomatik bildirim (örn. e-posta, Slack) entegrasyonu önerilir.

> Loglama ve izlenebilirlik, hata ayıklama, kalite takibi ve denetim süreçleri için zorunludur.
# CI/CD Pipeline'da Güvenlik Taramaları

Tüm kod değişikliklerinde ve release süreçlerinde CI/CD pipeline'ında otomatik güvenlik taramaları zorunludur:

- `npm audit` ile bağımlılık güvenlik açıkları kontrol edilir.
- Gerekirse ek olarak Snyk, SonarQube veya benzeri araçlarla kod güvenlik analizi yapılır.
- Güvenlik taramasında kritik açık tespit edilirse pipeline otomatik olarak durur ve deploy işlemi engellenir.
- Güvenlik raporları ekip içinde paylaşılır ve gerekli aksiyonlar alınır.

> Güvenlik taramaları, kurumsal standartların ve yasal gerekliliklerin bir parçasıdır.
# Otomatik Build ve Deploy Rollback Senaryoları

Otomatik build ve deploy süreçlerinde hata veya istenmeyen durumlarda hızlı rollback için aşağıdaki senaryolar uygulanır:

## 1. Build/Deploy Hatası Sonrası Otomatik Rollback
- CI/CD pipeline'da build veya deploy adımı başarısız olursa, pipeline otomatik olarak durur ve mevcut production sürümünde değişiklik yapılmaz.
- Deploy edilen ortamda hata tespit edilirse, otomatik olarak bir önceki başarılı sürüme (örn. önceki git tag veya release) geri dönülür.
- Rollback işlemi sonrası ekip bilgilendirilir ve hata analizi başlatılır.

## 2. Manuel Rollback
- Kritik hata veya acil durumda, ilgili git etiketi (örn. `v1.2.2`) ile manuel olarak geri dönülür:
	```bash
	git checkout v1.2.2
	# veya
git revert <hatalı-commit>
	# ardından yeni bir patch release ve deploy yapılır
	```
- Rollback işlemi sonrası yeni bir düzeltme sürümü oluşturulmalı ve tekrar deploy edilmelidir.

## 3. Rollback Prosedürleri
- Rollback işlemleri sadece yetkili ekip üyeleri tarafından yapılır.
- Tüm rollback ve düzeltme işlemleri ekip içinde duyurulur ve dokümante edilir.
- Otomasyon scriptleri ve pipeline adımları düzenli olarak test edilmelidir.

> Rollback senaryoları, kesintisiz hizmet ve hızlı müdahale için zorunludur.
# Test ve Coverage Raporlarının Merkezi Saklanması

Tüm test sonuçları ve coverage (kapsam) raporları, merkezi olarak `docs/coverage/` klasöründe saklanır ve güncellenir.

- Her test çalıştırmasından sonra coverage raporu bu klasöre kopyalanır.
- Ekip üyeleri ve yöneticiler, geçmiş test ve kapsam sonuçlarını buradan takip edebilir.
- CI/CD pipeline ile coverage raporlarının otomatik güncellenmesi önerilir.

> Raporların merkezi saklanması, kalite takibi ve denetim süreçleri için zorunludur.
# CI/CD Pipeline Şeması ve Onay Akışları

## Pipeline Şeması
```mermaid
flowchart TD
	A[Geliştirici Commit/PR] --> B[Pre-commit Lint/Format]
	B --> C[Pull Request Açılır]
	C --> D[Otomatik Testler (CI)]
	D --> E[Code Review & Onay]
	E --> F[Main Branch'e Merge]
	F --> G[Release/Tag Otomasyonu]
	G --> H[CHANGELOG.md Güncelleme]
	H --> I[Deploy (Opsiyonel)]
```

## Onay Akışları
- Her pull request (PR) için en az bir ekip üyesi tarafından code review ve onay gereklidir.
- Otomatik testler (lint, unit test, stylelint) geçmeden merge işlemi yapılamaz.
- Sürüm ve release işlemleri otomatik olarak pipeline sonunda tetiklenir.
- Kritik değişikliklerde ek onay veya manuel kontrol gerekebilir (örn. production deploy).

> Pipeline ve onay akışları, kod kalitesi ve güvenliğini sağlamak için zorunludur. Süreçler düzenli olarak gözden geçirilir ve güncellenir.
# Geriye Dönük Sürüm İnceleme ve Rollback Prosedürleri

## Sürüm İnceleme
- Tüm geçmiş sürümler ve değişiklikler `CHANGELOG.md` dosyasından takip edilir.
- Belirli bir sürümdeki değişiklikler için ilgili git etiketi (örn. `v1.2.3`) ve changelog bölümü incelenir.

## Rollback (Geri Alma)
- Hatalı veya istenmeyen bir sürüm tespit edildiğinde aşağıdaki adımlar izlenir:
	1. Geri dönülecek sürüm etiketi belirlenir (örn. `v1.2.2`).
	2. `git checkout v1.2.2` ile ilgili sürüme geçilir.
	3. Gerekirse yeni bir düzeltme (patch) branch'i açılır ve sorun giderilir.
	4. Düzeltme sonrası yeni bir sürüm (`patch release`) oluşturulur ve tekrar etiketlenir.
	5. Tüm rollback ve düzeltme işlemleri ekip içinde duyurulur ve dokümante edilir.

> Rollback işlemleri, veri kaybı ve uyumsuzluk riskine karşı dikkatle ve sorumlu kişiler tarafından yürütülmelidir.
# Sürüm Notlarının Merkezi Depoda Tutulması

Tüm sürüm notları ve değişiklik geçmişi, projenin kök dizinindeki `CHANGELOG.md` dosyasında merkezi olarak tutulur ve güncellenir.

- Otomatik release/tag işlemleri ve manuel güncellemeler bu dosyada toplanır.
- Ekip üyeleri ve dış kullanıcılar, geçmiş tüm değişiklikleri bu dosyadan takip edebilir.
# Sürüm Etiketleme ve Geri Alma Prosedürleri

## Sürüm Etiketleme (Tagging)
- Her yeni sürüm, `npm run release` komutu ile oluşturulur ve otomatik olarak git etiketi (tag) eklenir.
- Etiketler semantik versiyonlama (örn. v1.2.3) formatında olmalıdır.
- Sürüm notları ve değişiklikler otomatik olarak `CHANGELOG.md` dosyasına yazılır.

## Sürüm Geri Alma (Rollback)
- Hatalı bir sürüm yayınlandığında, ilgili git etiketi ve commit'e dönülerek (örn. `git checkout v1.2.2`) eski sürüm geri alınabilir.
- Geri alma işlemi sonrası yeni bir düzeltme sürümü (`patch release`) oluşturulmalı ve tekrar etiketlenmelidir.
- Geri alma ve düzeltme işlemleri ekip içinde duyurulmalı ve dokümante edilmelidir.

> Sürüm yönetimi ve geri alma işlemleri proje yöneticisi veya belirlenen sorumlu tarafından yürütülmelidir.
# Otomatik CHANGELOG ve Sürüm Yönetimi

Proje sürümleri ve değişiklik geçmişi otomatik olarak [standard-version](https://github.com/conventional-changelog/standard-version) ile yönetilir.

- Yeni bir sürüm ve changelog oluşturmak için:

```bash
npm run release
```

- Sadece güncel changelog'u görmek için:

```bash
npm run changelog
```

Tüm anlamlı değişiklikler otomatik olarak `CHANGELOG.md` dosyasına yazılır. Commit mesajlarında konvansiyonel commit kurallarına uyulması zorunludur.
# Kod Kalitesi Metriklerinin Periyodik Raporlanması

Kod kalitesinin sürdürülebilirliği için aşağıdaki metrikler periyodik olarak (ör. her sprint sonunda) raporlanır:

- Lint hatası ve uyarı sayısı (ESLint, Stylelint)
- Otomatik formatlama uyumsuzlukları (Prettier)
- Test kapsamı (coverage) oranı
- Kritik kod kokuları ve teknik borçlar (gerekirse SonarQube, CodeClimate vb. araçlarla)
- Açık güvenlik zafiyetleri (örn. npm audit)

Raporlar ekip içinde paylaşılır ve iyileştirme aksiyonları alınır. Kod kalitesi metriklerinin takibi, proje yöneticisi veya belirlenen sorumlu tarafından yapılır.
# Otomatik Formatlama ve Linting Scriptleri

Kodun otomatik olarak formatlanması ve lint edilmesi için aşağıdaki scriptler kullanılmalıdır:

```bash
npm run lint       # ESLint ile TypeScript/JavaScript dosyalarını kontrol eder ve düzeltir
npm run format     # Prettier ile tüm kodu otomatik olarak formatlar
npm run stylelint  # Stylelint ile CSS/SCSS dosyalarını kontrol eder ve düzeltir
```

Kod push'lamadan önce pre-commit hook ile bu kontroller otomatik olarak çalışır. Manuel olarak da yukarıdaki scriptler kullanılabilir.
# OkiremSPA — Onboarding ve Kod Standartları

## Onboarding: Temel Kod Standartları

- Tüm ekip üyeleri, kod yazarken aşağıdaki standartlara uymakla yükümlüdür:
	- TypeScript strict modu zorunludur.
	- .editorconfig ile editör ayarları standarttır.
	- ESLint, Prettier ve Stylelint kuralları CI/CD ve pre-commit ile zorunlu kılınmıştır.
	- Klasör ve dosya isimlendirme standartlarına uyulmalıdır.
	- Kod inceleme checklist'i aktif kullanılmalıdır.
	- Ortak kod ve modül sınırları dokümantasyonda belirtilmiştir.

> Detaylar için bu README ve docs/PROJECT_SNAPSHOT.md dosyasını inceleyiniz.
# TypeScript Strict Modu Politikası

Proje genelinde TypeScript'in strict modu zorunludur. Tüm ekip üyeleri, kod yazarken ve derlerken strict modun aktif olduğundan emin olmalıdır.

- `tsconfig.json` dosyasında `"strict": true` ve ilgili tüm alt kurallar aktif olarak ayarlanmıştır.
- Kodun güvenliği, sürdürülebilirliği ve hata riskinin azaltılması için strict moddan taviz verilmez.

> Kodun derlenmesi veya CI/CD süreçlerinde strict moddan kaynaklı hata alınırsa, kod gözden geçirilmeli ve strict kurallara uygun hale getirilmelidir.
# Editör ve Kod Stili Standartları

Tüm ekip üyeleri, kodun tutarlı ve standartlara uygun olması için proje kök dizinindeki [.editorconfig](.editorconfig) dosyasını IDE/editorlerine tanımlamalıdır.

> Çoğu modern IDE ve editör (VS Code, WebStorm, IntelliJ, vb.) .editorconfig dosyasını otomatik olarak algılar. Algılamayanlar için ilgili eklenti/uzantı yüklenmelidir.
# Kod İnceleme (Code Review) Politikası

Tüm ekip üyeleri, kod inceleme süreçlerinde aşağıdaki checklist'i kullanmakla yükümlüdür:

- [docs/CODE_REVIEW_CHECKLIST.md](docs/CODE_REVIEW_CHECKLIST.md)

Kod inceleme checklist'i, kod kalitesini ve sürdürülebilirliği sağlamak için zorunludur. Checklist düzenli olarak gözden geçirilir ve proje ihtiyaçlarına göre güncellenir.
# OkiremSPA

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# SSS ve Destek

### Sıkça Sorulan Sorular (FAQ)

- **Proje ile ilgili teknik destek için kimle iletişime geçmeliyim?**
  - Ekip lideriniz veya proje yöneticiniz ile iletişime geçebilirsiniz.
- **Kurulumda hata alırsam ne yapmalıyım?**
  - README ve docs/PROJECT_SNAPSHOT.md dosyasındaki adımları tekrar kontrol edin.
- **Katman mimarisiyle ilgili sorularım için hangi dokümana bakmalıyım?**
  - README’deki ilgili başlıklar ve docs/ai/GUNLUK_RUTIN.md dosyasını inceleyin.

### Destek

- Teknik destek ve öneriler için: [destek@okirem.com](mailto:destek@okirem.com)
- Proje yönetimi ve süreçler için: [proje@okirem.com](mailto:proje@okirem.com)
