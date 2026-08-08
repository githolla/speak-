// POST /api/signups — list all newsletter signups.
// Guarded by a single admin password (ADMIN_PASSWORD environment variable).
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(503).json({ error: 'ADMIN_PASSWORD is not set in the Vercel project settings.' });
  }
  const password = req.body && req.body.password ? String(req.body.password) : '';
  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Wrong password.' });
  }
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return res.status(503).json({ error: 'Signup storage is not configured yet.' });
  }
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(['HGETALL', 'speak_signups']),
  });
  if (!r.ok) {
    return res.status(502).json({ error: 'Could not read signups.' });
  }
  const data = await r.json();
  const flat = Array.isArray(data.result) ? data.result : [];
  const signups = [];
  for (let i = 0; i < flat.length; i += 2) {
    signups.push({ email: flat[i], date: flat[i + 1] });
  }
  signups.sort((a, b) => (a.date < b.date ? 1 : -1));
  return res.status(200).json({ count: signups.length, signups });
}
