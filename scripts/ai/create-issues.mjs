// create-issues.mjs
// PRPJECT_FAZ.MD dosyasındaki faz/başlıkları ayrıştırıp GitHub Issues olarak açar


import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';
import { logSecretAccess } from './utils.mjs';

const TEST_MODE = false; // Gerçek issue açmak için test modu kapalı

// GitHub Actions ortamında secrets parametre olarak aktarılır
const GITHUB_TOKEN = process.env.TOKEN_GITHUB;
if (GITHUB_TOKEN) {
  logSecretAccess('script', 'TOKEN_GITHUB', 'GitHub Issue oluşturma');
}
const REPO = process.env.REPO_GITHUB;
const FAZ_PATH = path.resolve('docs/PRPJECT_FAZ.MD');

if (!GITHUB_TOKEN && !TEST_MODE) {
  console.error('GITHUB_TOKEN environment variable is not set.');
  process.exit(1);
}

async function parseFaz(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const lines = content.split(/\r?\n/);
  const fazlar = [];
  let currentTitle = null;
  let currentTasks = [];
  for (let line of lines) {
    // Ana başlık
    const anaBaslikMatch = line.match(/^- \*\*(.*?)\*\*/);
    if (anaBaslikMatch) {
      // Önceki başlığı kaydet
      if (currentTitle) {
        fazlar.push({
          title: currentTitle,
          body: currentTasks.length ? currentTasks.map(m => `- [ ] ${m}`).join('\n') : ''
        });
      }
      currentTitle = anaBaslikMatch[1];
      currentTasks = [];
      continue;
    }
    // Alt madde
    const altMaddeMatch = line.match(/^\s{4,}- (.*)/);
    if (altMaddeMatch) {
      currentTasks.push(altMaddeMatch[1]);
    }
  }
  // Son başlığı ekle
  if (currentTitle) {
    fazlar.push({
      title: currentTitle,
      body: currentTasks.length ? currentTasks.map(m => `- [ ] ${m}`).join('\n') : ''
    });
  }
  return fazlar;
}

async function createIssue({ title, body }) {
  const url = `https://api.github.com/repos/${REPO}/issues`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Issue creation failed: ${err}`);
  }
  return await res.json();
}

async function main() {
  const fazlar = await parseFaz(FAZ_PATH);
  for (const faz of fazlar) {
    console.log('---');
    console.log(`Issue başlığı: ${faz.title}`);
    console.log('Issue içeriği:');
    console.log(faz.body);
    if (!TEST_MODE) {
      try {
        const issue = await createIssue(faz);
        console.log(`Created: ${issue.html_url}`);
      } catch (e) {
        console.error(e.message);
      }
    }
  }
  if (TEST_MODE) {
    console.log(`Toplam ${fazlar.length} issue simüle edildi. Gerçek issue açılmadı.`);
  }
}

main();
