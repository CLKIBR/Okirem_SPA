// create-pr.mjs
// PROJECT_PLAN_DETAY.md dosyasındaki bugünkü görevleri başlık ve açıklama olarak kullanarak otomatik PR açar


import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';
import { logSecretAccess } from './utils.mjs';

import readline from 'readline';

const GITHUB_TOKEN = process.env.TOKEN_GITHUB;
if (GITHUB_TOKEN) {
  logSecretAccess('script', 'TOKEN_GITHUB', 'GitHub PR oluşturma');
}
const REPO = process.env.REPO_GITHUB;
const PLAN_PATH = path.resolve('docs/PROJECT_PLAN_DETAY.md');
const FAZ_PATH = path.resolve('docs/PRPJECT_FAZ.MD');

// Test modunda gerçek PR açılmaz
const TEST_MODE = false; // Gerçek PR açılır, test modu kapalı
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function askTitle() {
  return new Promise(resolve => {
    rl.question('Issues başlığını giriniz (boş bırakılırsa ilk başlık kullanılır): ', answer => {
      rl.close();
      resolve(answer.trim() || null);
    });
  });
}

// Komut satırından başlık adı al
const selectedTitle = process.argv[2] || null;

// PRPJECT_FAZ.MD'den başlık ve alt maddeleri çekmek için fonksiyon
async function getFazTasks(selectedTitle = null) {
  const content = await fs.readFile(FAZ_PATH, 'utf-8');
  const lines = content.split(/\r?\n/);
  let currentTitle = null;
  let currentTasks = [];
  for (let line of lines) {
    const anaBaslikMatch = line.match(/^- \*\*(.*?)\*\*/);
    if (anaBaslikMatch) {
      if (currentTitle && (!selectedTitle || currentTitle === selectedTitle)) {
        return { title: currentTitle, tasks: currentTasks };
      }
      currentTitle = anaBaslikMatch[1];
      currentTasks = [];
      continue;
    }
    const altMaddeMatch = line.match(/^\s{4,}- (.*)/);
    if (altMaddeMatch) {
      currentTasks.push(altMaddeMatch[1]);
    }
  }
  if (currentTitle && (!selectedTitle || currentTitle === selectedTitle)) {
    return { title: currentTitle, tasks: currentTasks };
  }
  return null;
}

async function getToday() {
  const now = new Date();
  return now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function getTodayTasks() {
  const content = await fs.readFile(PLAN_PATH, 'utf-8');
  const today = getToday();
  // Daha esnek: başlık ile görevler arasında bir veya daha fazla boş satır olabilir
  // Dosya içeriğini normalize et (CRLF -> LF)
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const regex = new RegExp(`### Gün (\\d+) ?[-—] ?${today}(?:\\s*\\n)+([\\s\\S]*?)(?=### Gün|$)`);
  const match = regex.exec(normalizedContent);
  if (!match) {
    console.log('DEBUG: Normalized Dosya İçeriği:', normalizedContent.slice(normalizedContent.indexOf(`### Gün`), normalizedContent.indexOf(`### Gün`, 10) + 500));
    console.log('DEBUG: Regex:', regex);
    return null;
  }
  const [, dayNum, tasks] = match;
  return { dayNum, tasks: tasks.trim() };
}

async function createPR({ head, base, title, body }) {
  const url = `https://api.github.com/repos/${REPO}/pulls`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ head, base, title, body })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`PR creation failed: ${err}`);
  }
  return await res.json();
}

async function main() {
  if (!GITHUB_TOKEN && !TEST_MODE) {
    console.error('TOKEN_GITHUB environment variable is not set.');
    process.exit(1);
  }
  const selectedTitle = await askTitle();
  const fazTasks = await getFazTasks(selectedTitle);
  if (!fazTasks) {
    console.error(`PRPJECT_FAZ.MD dosyasında '${selectedTitle || "(ilk başlık)"}' başlığı bulunamadı. PR açılmadı.`);
    return;
  }
  const { execSync } = await import('child_process');
  let head = 'main';
  try {
    head = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch {
    console.warn('Aktif branch adı alınamadı, main olarak ayarlandı.');
  }
  const base = 'main';
  const title = `PR — ${fazTasks.title}`;
  const checklist = fazTasks.tasks.map(task => `- [ ] ${task.trim()}`).join('\n');
  const body = `Aşağıdaki maddeler için PR açıldı:\n\n${checklist}`;
  if (TEST_MODE) {
    console.log('---');
    console.log(`PR başlığı: ${title}`);
    console.log('PR içeriği:');
    console.log(body);
    console.log('Simülasyon: Gerçek PR açılmadı.');
    return;
  }
  try {
    const pr = await createPR({ head, base, title, body });
    console.log(`Created: ${pr.html_url}`);
  } catch (e) {
    console.error(e.message);
  }
}

main();
