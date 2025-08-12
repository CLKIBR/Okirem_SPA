# Kurulum Adımları

1. Bu klasör ve dosyaları repoya kopyalayın.
2. `package.json` içine aşağıdaki scriptleri ekleyin:

```json
{
  "scripts": {
    "ai:context": "node scripts/ai/docgen.mjs",
    "git:issues": "node scripts/ai/create-issues.mjs",
    "git:pr": "node scripts/ai/create-pr.mjs",
    "git:start": "node scripts/ai/log-day-plan.mjs start",
    "git:end": "node scripts/ai/log-day-plan.mjs end"
  }
}
```

3. `npm run ai:context` komutunu çalıştırın; `docs/PROJECT_SNAPSHOT.md` ve `docs/ai/AI_CONTEXT.md` üretilecektir.
4. Her yeni ChatGPT oturumunda `docs/ai/AI_CONTEXT.md` içeriğini başa yapıştırın.
5. GitHub'da `Issues` ve `Projects` kullanarak ROADMAP maddelerini iş olarak yönetin.
6. PR açarken şablon otomatik gelecektir (DoD kontrol listesi).

Not: Backend .NET eklendiğinde docgen scriptini genişletebilirsiniz.

---

## Otomasyon Scriptleri

### 1. create-issues.mjs

**Amaç:** PROJECT_PLAN_DETAY.md dosyasındaki her gün için GitHub Issues oluşturur.
**Kullanım:**

1. GitHub kişisel erişim token’ınızı `.env` dosyasına ekleyin: `GITHUB_TOKEN=token_değeriniz`
2. Terminalde çalıştırın:

```powershell
node scripts/ai/create-issues.mjs
```

Her gün için Issue açılır.

### 2. log-day-plan.mjs

**Amaç:** PROJECT_PLAN_DETAY.md dosyasındaki bugünkü görevleri PROJECT_LOG.md dosyasına gün başı ve gün sonu olarak ekler.
**Kullanım:**
Gün başı notu eklemek için:

```powershell
node scripts/ai/log-day-plan.mjs start
```

Gün sonu notu eklemek için:

```powershell
node scripts/ai/log-day-plan.mjs end
```

Gün başında bugünkü görevler otomatik eklenir, gün sonunda ise tamamlanma özeti için alan bırakılır.

### 3. log-day.mjs

**Amaç:** PROJECT_LOG.md dosyasına sadece gün başlangıcı veya gün sonu için tarih/saat ile basit not ekler.
**Kullanım:**
Gün başlangıcı eklemek için:

```powershell
node scripts/ai/log-day.mjs start
```

Gün sonu eklemek için:

```powershell
node scripts/ai/log-day.mjs end
```

Bu script, görevleri eklemez; sadece tarih/saat ile başlık ekler.
