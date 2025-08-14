import fetch from 'node-fetch';

/**
 * Secret erişimi loglamak için kullanılır (Node.js scriptler için).
 * @param {string} user Erişen kullanıcı veya sistem
 * @param {string} secretName Erişilen secret'ın adı
 * @param {string} purpose Erişim amacı
 * @param {string} [logApiUrl] Log API endpointi (opsiyonel, default localhost)
 */
export async function logSecretAccess(user, secretName, purpose, logApiUrl = 'http://localhost:60805/api/Log') {
  const payload = {
    level: 'SecretAccess',
    message: `Secret erişimi: ${secretName}`,
    user,
    secretName,
    purpose,
    source: 'script',
    timestamp: new Date().toISOString(),
  };
  try {
    const res = await fetch(logApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.warn(`[SECRET ACCESS LOG] API response: ${res.status}`);
    }
  } catch (err) {
    console.warn('[SECRET ACCESS LOG] API error:', err);
  }
}
// Ortak görev ayıklama fonksiyonu
export function extractDayTasks(content, today) {
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const regex = new RegExp(`### Gün (\\d+) ?[-—] ?${today}(?:\\s*\\n)+([\\s\\S]*?)(?=### Gün|$)`);
  const match = regex.exec(normalizedContent);
  if (!match) return null;
  const [, dayNum, tasks] = match;
  return { dayNum, tasks: tasks.trim() };
  // GITHUB_TOKEN veya GITHUB_REPO kullanımı varsa TOKEN_GITHUB ve REPO_GITHUB olarak değiştirildi.
}
