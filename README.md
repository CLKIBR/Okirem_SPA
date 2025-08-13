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
