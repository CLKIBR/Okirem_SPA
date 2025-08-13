# Konvansiyonel Commit Kuralları — Eğitim Dokümanı

Konvansiyonel commit mesajları, kod değişikliklerinin daha anlaşılır, izlenebilir ve otomasyon dostu olmasını sağlar. Tüm ekip üyeleri aşağıdaki kurallara uymalıdır.

## Temel Yapı

```
tip(isteğe bağlı kapsam): açıklama
```

- **tip**: Değişikliğin türü (örn. feat, fix, chore, docs, refactor, test, style)
- **kapsam**: (isteğe bağlı) Değişikliğin etki alanı (örn. user, login, api)
- **açıklama**: Kısa ve öz değişiklik özeti (en fazla 72 karakter)

### Örnekler

```
feat(login): kullanıcı giriş akışı eklendi
fix(user): profil güncelleme hatası düzeltildi
chore: bağımlılıklar güncellendi
refactor(core): kod yapısı sadeleştirildi
```

## Sık Kullanılan Tipler
- **feat**: Yeni özellik
- **fix**: Hata düzeltme
- **docs**: Sadece dokümantasyon değişikliği
- **style**: Biçimsel değişiklik (boşluk, noktalama, vs.)
- **refactor**: Refaktörizasyon (işlev değişmeden kodun iyileştirilmesi)
- **test**: Test ekleme veya güncelleme
- **chore**: Yapı, araç veya yardımcı işlerde değişiklik

## En İyi Pratikler
- Açıklama kısa, öz ve emir kipinde olmalı.
- Her commit tek bir amaca hizmet etmeli.
- Gerekirse ek açıklama için ikinci satırdan sonra boşluk bırakıp detay eklenebilir.
- Türkçe karakter kullanılabilir, ancak açıklama İngilizce de olabilir (ekip kararıyla).

## Kaynaklar
- [conventionalcommits.org](https://www.conventionalcommits.org/tr/v1.0.0/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)

---

> Bu doküman, ekip içi eğitim ve onboarding süreçlerinde referans olarak kullanılmalıdır.
