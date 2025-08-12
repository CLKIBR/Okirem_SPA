// log-day-plan.mjs
// PROJECT_PLAN_DETAY.md dosyasındaki bugünkü görevleri PROJECT_LOG.md'ye gün başı ve gün sonu olarak ekler

import fs from 'fs/promises';
import path from 'path';
import readline from 'readline';

const PLAN_PATH = path.resolve('docs/PROJECT_PLAN_DETAY.md');
const LOG_PATH = path.resolve('docs/PROJECT_LOG.md');
const FAZ_PATH = path.resolve('docs/PRPJECT_FAZ.MD');

function getToday() {
  const now = new Date();
  // Format: 11 Ağustos 2025
  return now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
}

async function getTodayTasks() {
  // Bu fonksiyon artık kullanılmayacak
  return null;
}

async function addLog(type) {
  const today = getToday();
  const time = getTime();
  let logContent = '';
  let checklistUpdated = false;
  let note = '';
  if (type === 'end' && !addLog.selectedTitle && process.argv.length < 4) {
    try {
      logContent = await fs.readFile(LOG_PATH, 'utf-8');
    } catch (e) {
      logContent = '';
    }
    // Son Gün Başlangıcı bloğunu bul
    const gunBaslangiciRegex = /## Gün Başlangıcı — [^\n]+\n([\s\S]*?)(?=\n## |$)/g;
    let match, lastBlock = null, lastBlockStart = null, lastBlockEnd = null;
    while ((match = gunBaslangiciRegex.exec(logContent)) !== null) {
      lastBlock = match[1];
      lastBlockStart = match.index + match[0].indexOf(match[1]);
      lastBlockEnd = lastBlockStart + match[1].length;
    }
    let tumuBitti = false;
    if (lastBlock) {
      // Sadece '- [ ] ...' veya '- [x] ...' ile başlayan satırları bul
      const checklistLines = lastBlock.split('\n').filter(line => /^- \[.\] /.test(line));
      if (checklistLines.length > 0) {
        // Konsolda toplu göster
        console.log('Aşağıdaki maddeleri tamamladıysanız numaralarını virgülle ayırarak girin:');
        checklistLines.forEach((m, i) => console.log(`${i + 1}. ${m.slice(6)}`));
        const readline = await import('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        const answer = await new Promise(resolve => {
          rl.question('Tamamlananların numaralarını girin (örn: 1,3,5): ', answer => {
            rl.close();
            resolve(answer);
          });
        });
        // Seçilenleri işaretle
        const secilenler = answer.split(',').map(s => parseInt(s.trim(), 10) - 1).filter(i => i >= 0 && i < checklistLines.length);
        // Checklist satırlarını güncelle
        let yeniBlockLines = lastBlock.split('\n');
        let checklistIndex = 0;
        yeniBlockLines = yeniBlockLines.map(line => {
          if (/^- \[.\] /.test(line)) {
            if (secilenler.includes(checklistIndex)) {
              line = line.replace(/^- \[.\] /, '- [x] ');
            }
            checklistIndex++;
          }
          return line;
        });
        let yeniBlock = yeniBlockLines.join('\n');
        // logContent içinde son Gün Başlangıcı bloğunu güncelle (doğrudan metin aralığı ile)
        logContent = logContent.replace(lastBlock, yeniBlock);
        checklistUpdated = true;
        // Tüm maddeler bitti mi kontrolü
        tumuBitti = yeniBlockLines.filter(line => /^- \[.\] /.test(line)).every(line => line.startsWith('- [x] '));
      }
    }
    let bitisMesaji = tumuBitti
      ? 'Bugün yapılması gereken işaretli maddeler tamamlandı.'
      : '';
    note = `\n## Biten Maddeleri Güncelleme — ${today} ${time}\n${bitisMesaji}`;
    if (!logContent.includes(note)) {
      logContent += note;
    }
    await fs.writeFile(LOG_PATH, logContent, 'utf-8');
    if (checklistUpdated) {
      console.log('Tamamlanan maddeler işaretlendi ve log güncellendi.');
    }
    console.log('Bitiş notu eklendi.');
    return;
  }
// ...existing code...
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const arg = process.argv[2];
if (arg === 'start' || arg === 'end') {
  // Komut: node scripts/ai/log-day-plan.mjs start "Başlık Adı"
  addLog.selectedTitle = process.argv[3] || null;
  addLog(arg === 'start' ? 'start' : 'end');
} else {
  console.log('Kullanım: node scripts/ai/log-day-plan.mjs start|end "Başlık Adı"');
}
// Dışarıdan çağrı için export
export { addLog };
