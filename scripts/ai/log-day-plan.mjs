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
  if (type === 'start' && addLog.selectedTitle) {
    // PRPJECT_FAZ.MD'den başlığa göre maddeleri bul ve loga ekle
    let fazContent = '';
    try {
      fazContent = await fs.readFile(FAZ_PATH, 'utf-8');
    } catch (e) {
      fazContent = '';
    }
    // Ana başlıkları ve alt maddeleri bul
    const lines = fazContent.split(/\r?\n/);
    let found = false;
    let items = [];
    for (let i = 0; i < lines.length; i++) {
      const anaBaslikMatch = lines[i].match(/^- \*\*(.*?)\*\*/);
      if (anaBaslikMatch && anaBaslikMatch[1] === addLog.selectedTitle) {
        found = true;
        // Alt maddeleri topla
        let j = i + 1;
        while (j < lines.length) {
          const altMaddeMatch = lines[j].match(/^\s{4,}- (.*)/);
          if (altMaddeMatch) {
            items.push(altMaddeMatch[1]);
          } else if (lines[j].match(/^- \*\*/)) {
            break; // Sonraki ana başlığa geçildi
          }
          j++;
        }
        break;
      }
    }
    // Loga ekle
    let logContent = '';
    try {
      logContent = await fs.readFile(LOG_PATH, 'utf-8');
    } catch (e) {
      logContent = '';
    }
    let checklist = items.map(m => `- [ ] ${m}`).join('\n');
    let logBlock = `\n## Gün Başlangıcı — ${today} ${time}\nBaşlık: ${addLog.selectedTitle}\n${checklist}`;
    logContent += logBlock;
    await fs.writeFile(LOG_PATH, logContent, 'utf-8');
    console.log(`Başlık: ${addLog.selectedTitle} için maddeler loga eklendi.`);
    return;
  }
  // ...existing code...
  if (type === 'end' && !addLog.selectedTitle && process.argv.length < 4) {
    try {
      logContent = await fs.readFile(LOG_PATH, 'utf-8');
    } catch (e) {
      logContent = '';
    }
    // Son Gün Başlangıcı bloğunu bul
    const gunBaslangiciRegex = /## Gün Başlangıcı — [^\n]+\n([\s\S]*?)(?=\n## |$)/g;
    let match, lastBlock = null, lastBlockStart = null, lastBlockEnd = null, lastBlockRaw = null;
    while ((match = gunBaslangiciRegex.exec(logContent)) !== null) {
      lastBlock = match[1];
      lastBlockRaw = match[0];
      lastBlockStart = match.index + match[0].indexOf(match[1]);
      lastBlockEnd = lastBlockStart + match[1].length;
    }
    let tumuBitti = false;
    let blockTitle = null;
    if (lastBlockRaw) {
      // Başlığı çek
      const titleMatch = lastBlockRaw.match(/Başlık: (.*)/);
      if (titleMatch) blockTitle = titleMatch[1].trim();
    }
    // Başlık varsa GitHub Issues numarasını bul ve yazdır
    if (blockTitle) {
      try {
        const { findIssueNumberByTitle } = await import('./github-issue-utils.mjs');
        const issueNum = await findIssueNumberByTitle(blockTitle);
        if (issueNum) {
          console.log(`GitHub Issue numarası: #${issueNum}`);
        } else {
          console.log('GitHub Issue bulunamadı.');
        }
      } catch (err) {
        console.log('GitHub Issue sorgusunda hata:', err.message);
      }
    }
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
        // GitHub Issue checklistini de güncelle ve yorum ekle
        if (blockTitle) {
          try {
            const { findIssueNumberByTitle, updateIssueChecklist, addIssueComment } = await import('./github-issue-utils.mjs');
            const issueNum = await findIssueNumberByTitle(blockTitle);
            if (issueNum) {
              await updateIssueChecklist(issueNum, secilenler);
              console.log('GitHub Issue checklist güncellendi.');
              // Kapanan maddeler için kısa açıklama ekle
              if (secilenler.length > 0) {
                const closedItems = secilenler.map(i => checklistLines[i].slice(6)).join(', ');
                const comment = `Tamamlandı olarak işaretlenen maddeler: ${closedItems}`;
                await addIssueComment(issueNum, comment);
                console.log('GitHub Issue yorum eklendi.');
              }
            } else {
              console.log('GitHub Issue bulunamadı, checklist güncellenemedi.');
            }
          } catch (err) {
            console.log('GitHub Issue checklist/yorum güncelleme hatası:', err.message);
          }
        }
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
