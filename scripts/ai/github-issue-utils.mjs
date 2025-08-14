// Issue'ya yorum ekle
export async function addIssueComment(issueNumber, comment) {
  const url = `https://api.github.com/repos/${REPO}/issues/${issueNumber}/comments`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: comment })
  });
  if (!res.ok) throw new Error('GitHub comment error: ' + res.status);
  return true;
}
// Issue içeriğindeki checklist maddelerini tamamlandı olarak işaretle
export async function updateIssueChecklist(issueNumber, checkedIndexes) {
  const url = `https://api.github.com/repos/${REPO}/issues/${issueNumber}`;
  // Issue içeriğini al
  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
  if (!res.ok) throw new Error('GitHub API error: ' + res.status);
  const issue = await res.json();
  let body = issue.body;
  // Checklist satırlarını bul ve güncelle
  let lines = body.split(/\r?\n/);
  let checklistIndex = 0;
  lines = lines.map(line => {
    if (/^- \[.\] /.test(line)) {
      if (checkedIndexes.includes(checklistIndex)) {
        line = line.replace(/^- \[.\] /, '- [x] ');
      }
      checklistIndex++;
    }
    return line;
  });
  const newBody = lines.join('\n');
  // Issue içeriğini PATCH ile güncelle
  const patchRes = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: newBody })
  });
  if (!patchRes.ok) throw new Error('GitHub PATCH error: ' + patchRes.status);
  return true;
}
// github-issue-utils.mjs
// Başlık ile GitHub Issues numarasını bulmak için fonksiyon

import fetch from 'node-fetch';
import { logSecretAccess } from './utils.mjs';

const GITHUB_TOKEN = process.env.TOKEN_GITHUB;
if (GITHUB_TOKEN) {
  logSecretAccess('script', 'TOKEN_GITHUB', 'GitHub Issue utils');
}
const REPO = process.env.REPO_GITHUB;

export async function findIssueNumberByTitle(title) {
  const url = `https://api.github.com/repos/${REPO}/issues?state=all&per_page=100`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
  if (!res.ok) throw new Error('GitHub API error: ' + res.status);
  const issues = await res.json();
  const found = issues.find(issue => issue.title.trim() === title.trim());
  return found ? found.number : null;
}

// Kullanım örneği:
// (async () => {
//   const num = await findIssueNumberByTitle('Commit & Sürüm Yönetimi');
//   console.log(num);
// })();
