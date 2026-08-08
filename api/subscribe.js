// POST /api/subscribe — store a newsletter signup.
// Storage: Upstash Redis via Vercel Marketplace (KV_REST_API_URL/TOKEN
// or UPSTASH_REDIS_REST_URL/TOKEN environment variables).
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const email = (req.body && req.body.email ? String(req.body.email) : '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return res.status(503).json({ error: 'Signups are not open quite yet — please try again soon.' });
  }
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(['HSET', 'speak_signups', email, new Date().toISOString()]),
  });
  if (!r.ok) {
    return res.status(502).json({ error: 'Could not save your signup. Please try again.' });
  }
  return res.status(200).json({ ok: true });
}
