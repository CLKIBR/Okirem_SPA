// Ortak görev ayıklama fonksiyonu
export function extractDayTasks(content, today) {
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const regex = new RegExp(`### Gün (\\d+) ?[-—] ?${today}(?:\\s*\\n)+([\\s\\S]*?)(?=### Gün|$)`);
  const match = regex.exec(normalizedContent);
  if (!match) return null;
  const [, dayNum, tasks] = match;
  return { dayNum, tasks: tasks.trim() };
}
