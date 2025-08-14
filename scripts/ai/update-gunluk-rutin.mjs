// Otomatik başlık güncelleme scripti
// Bu script, docs/ai/GUNLUK_RUTIN.md dosyasındaki güncellenmesi gereken başlıkları Copilot/OpenAI API ile günceller.
// Gerekli: OPENAI_API_KEY (GitHub Secrets üzerinden alınmalı)

import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

const GUNLUK_RUTIN_PATH = path.join('docs', 'ai', 'GUNLUK_RUTIN_TEST.md');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY environment variable is not set.');
  process.exit(1);
}

async function getUpdatedHeadings(headings) {
  const prompt = `Aşağıdaki başlıkları güncelle ve kısaca doldur. Sadece başlık ve güncellenmiş içeriği döndür.\nBaşlıklar:\n${headings.join('\n')}`;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 512
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error('OpenAI API error: ' + errorText);
  }
  const data = await response.json();
  return data.choices[0].message.content;
}

async function main() {
  const content = await fs.readFile(GUNLUK_RUTIN_PATH, 'utf-8');
  const lines = content.split('\n');
  const startIdx = lines.findIndex(l => l.includes('GÜNCELLENMESİ GEREKEN BAŞLIKLAR'));
  const endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('#'));
  if (startIdx === -1 || endIdx === -1) {
    console.error('Başlık bölümü bulunamadı.');
    process.exit(1);
  }
  const headings = lines.slice(startIdx + 1, endIdx).filter(l => l.trim().startsWith('-'));
  if (headings.length === 0) {
    console.log('Güncellenecek başlık yok.');
    return;
  }
  const updated = await getUpdatedHeadings(headings.map(h => h.replace(/^[-*]\s*/, '')));
  // Eski başlıkları güncellenmiş içerikle değiştir
  const newLines = [
    ...lines.slice(0, startIdx + 1),
    updated,
    ...lines.slice(endIdx)
  ];
  await fs.writeFile(GUNLUK_RUTIN_PATH, newLines.join('\n'), 'utf-8');
  console.log('Başlıklar güncellendi.');
}

main().catch(e => { console.error(e); process.exit(1); });
