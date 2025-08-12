// Minimal repo introspection to generate PROJECT_SNAPSHOT.md and AI_CONTEXT.md
import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';
import { extractDayTasks } from './utils.mjs';

// Günlük görevleri PROJECT_PLAN_DETAY.md'den al
// PRPJECT_FAZ.MD'den faz başlıkları ve alt maddeleri çıkar
import readline from 'readline';

// PRPJECT_FAZ.MD'den tüm ana başlıkları çıkar
const getAllIssueTitles = async (fazPath) => {
  let content = '';
  try { content = await fs.readFile(fazPath, 'utf-8'); } catch { return [] };
  const lines = content.split(/\r?\n/);
  let titles = [];
  for (let line of lines) {
    const anaBaslikMatch = line.match(/^- \*\*(.*?)\*\*/);
    if (anaBaslikMatch) {
      titles.push(anaBaslikMatch[1]);
    }
  }
  return titles;
};

// Kullanıcıdan başlık seçmesini iste
async function askIssueTitle(titles) {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Issues başlığını giriniz (boş bırakılırsa ilk başlık kullanılır): ', answer => {
      rl.close();
      if (!answer.trim()) return resolve(titles[0]);
      return resolve(answer.trim());
    });
  });
}
const getFazSummary = async (fazPath) => {
  let content = '';
  try { content = await fs.readFile(fazPath, 'utf-8'); } catch { return null; }
  const lines = content.split(/\r?\n/);
  let fazlar = [];
  let currentFaz = null;
  for (let line of lines) {
    const fazMatch = line.match(/^# (Faz \d+ .*)/);
    if (fazMatch) {
      if (currentFaz) fazlar.push(currentFaz);
      currentFaz = { title: fazMatch[1], items: [] };
      continue;
    }
    const anaBaslikMatch = line.match(/^- \*\*(.*?)\*\*/);
    if (anaBaslikMatch && currentFaz) {
      currentFaz.items.push({
        title: anaBaslikMatch[1],
        tasks: []
      });
      continue;
    }
    const altMaddeMatch = line.match(/^\s{4,}- (.*)/);
    if (altMaddeMatch && currentFaz && currentFaz.items.length > 0) {
      currentFaz.items[currentFaz.items.length - 1].tasks.push(altMaddeMatch[1]);
    }
  }
  if (currentFaz) fazlar.push(currentFaz);
  return fazlar;
};

const readJson = async (p) => JSON.parse(await fs.readFile(p, 'utf-8'));
const exists = async (p) => fs.access(p).then(() => true).catch(() => false);


const root = process.cwd();
const outDir = path.join(root, 'docs');
await fs.mkdir(outDir, { recursive: true });

const pkgPath = path.join(root, 'package.json');
const angularJsonPath = path.join(root, 'angular.json');
const planPath = path.join(outDir, 'PROJECT_PLAN_DETAY.md');

let pkg = null, angularJson = null;
if (await exists(pkgPath)) pkg = await readJson(pkgPath);
if (await exists(angularJsonPath)) angularJson = await readJson(angularJsonPath);

const angularVersion = pkg?.dependencies?.['@angular/core'] || pkg?.devDependencies?.['@angular/core'] || 'Bulunamadı';
const deps = Object.entries({ ...(pkg?.dependencies || {}), ...(pkg?.devDependencies || {}) })
  .filter(([name]) => ['@coreui/angular', '@auth0/angular-jwt', 'ngx-toastr', 'ngx-scrollbar', '@coreui/chartjs', 'pixi.js', 'rxjs', 'zone.js'].includes(name))
  .map(([name, version]) => `- ${name}: ${version}`).join('\n');

// Collect routes, guards, interceptors, components, services
const routeFiles = glob.sync('src/app/**/*.routes.ts', { cwd: root });
const guardFiles = glob.sync('src/app/**/guards/**/*.ts', { cwd: root });
const interceptorFiles = glob.sync('src/app/**/interceptors/**/*.ts', { cwd: root });
const serviceFiles = glob.sync('src/app/**/services/**/*.ts', { cwd: root });
const componentFiles = glob.sync('src/app/**/*.component.ts', { cwd: root });

const envFiles = glob.sync('src/environments/*.ts', { cwd: root });

const snapshot = `# PROJECT_SNAPSHOT — Auto
\n## 0. Yönetici Özeti
- Angular: ${angularVersion}
- Önemli bağımlılıklar:\n${deps || '- Bulunamadı'}
\n## 1. Dosya Envanteri (özet)
- Routes: ${routeFiles.length}
- Guards: ${guardFiles.length}
- Interceptors: ${interceptorFiles.length}
- Services: ${serviceFiles.length}
- Components: ${componentFiles.length}
\n## 2. Önemli Dosya Yolları
${[...routeFiles, ...guardFiles, ...interceptorFiles].map(f => `- ${f}`).join('\n') || '- Bulunamadı'}
\n## 3. Ortam Dosyaları
${envFiles.map(f => `- ${f}`).join('\n') || '- Bulunamadı'}
`;

await fs.writeFile(path.join(outDir, 'PROJECT_SNAPSHOT.md'), snapshot, 'utf-8');

// PRPJECT_FAZ.MD'den faz özetini ekle
const fazPath = path.join(outDir, 'PRPJECT_FAZ.MD');
const fazlar = await getFazSummary(fazPath);
const allTitles = await getAllIssueTitles(fazPath);
let selectedTitle = allTitles[0];
if (allTitles.length > 0) {
  selectedTitle = await askIssueTitle(allTitles);
}
let fazSection = '';
if (fazlar && fazlar.length > 0) {
  // Sadece seçilen başlığa ait alt maddeleri ekle
  let found = null;
  for (const faz of fazlar) {
    for (const item of faz.items) {
      if (item.title === selectedTitle) {
        found = item;
        break;
      }
    }
    if (found) break;
  }
  if (found) {
    fazSection = `# ${selectedTitle}\n`;
    fazSection += found.tasks.map(task => `- ${task}`).join('\n');
  } else {
    fazSection = `Başlık bulunamadı: ${selectedTitle}`;
  }
} else {
  fazSection = 'PRPJECT_FAZ.MD dosyasından faz özeti çıkarılamadı.';
}


// AI_CONTEXT: concatenation header to paste into ChatGPT
const head = `# AI_CONTEXT
 Tarih: ${new Date().toISOString()}
 Kaynak: docs/PROJECT_SNAPSHOT.md, docs/PROJECT_LOG.md, docs/ROADMAP.md, docs/decisions/*
 Kural: Yapay zekâ çıktıları yalnızca bu belgelere ve depoya referansla üretilecek.
`;

let projectLog = '';
let roadmap = '';
try { projectLog = await fs.readFile(path.join(outDir, 'PROJECT_LOG.md'), 'utf-8'); } catch { }
try { roadmap = await fs.readFile(path.join(outDir, 'ROADMAP.md'), 'utf-8'); } catch { }

const aiContext = [fazSection, head, snapshot, projectLog, roadmap].join('\n\n---\n\n');
await fs.writeFile(path.join(root, 'docs/ai/AI_CONTEXT.md'), aiContext, 'utf-8');
console.log('Generated docs/PROJECT_SNAPSHOT.md and docs/ai/AI_CONTEXT.md with daily tasks');

// Her sabah log-day.mjs start komutunu çalıştır
import { spawn } from 'child_process';
const logDayPath = path.join(root, 'scripts/ai/log-day-plan.mjs');
const child = spawn(process.argv[0], [logDayPath, 'start', selectedTitle], { stdio: 'inherit' });
child.on('close', (code) => {
  if (code === 0) {
    console.log('Gün başlangıcı logu eklendi (log-day-plan.mjs start).');
  } else {
    console.error('log-day-plan.mjs start çalıştırılırken hata oluştu.');
  }
});
