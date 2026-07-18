// PAMANA Assistant - server-side Gemini proxy (Vercel serverless function).
// The API key lives ONLY in the Vercel env var GEMINI_API_KEY, never in the repo
// or the client. The browser calls POST /api/chat with { messages: [...] }.
const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

const SYSTEM = [
  'You are the PAMANA Assistant, a warm, concise helper inside the PAMANA dashboard.',
  'PAMANA is a Filipino estate & inheritance document-processing service that helps heirs',
  'settle an estate (PSA death certificate, government IDs, BIR TIN, affidavits, deed of',
  'extrajudicial settlement, newspaper publication, BIR 1801 estate tax return, tax declaration,',
  'and land/condo certificates of title). You coordinate with the PSA, BIR, and Registry of Deeds',
  'on the client\'s behalf; they start a request with the "Request" buttons in the Requirements',
  'Overview table. Typical PSA documents take 3-5 working days; Registry of Deeds and BIR steps',
  'take longer. Speak in friendly Taglish (mostly English with natural Tagalog phrases) the way',
  'this audience reads. Keep answers short (2-4 sentences). Never invent legal advice or exact',
  'government fees you are unsure of; if unsure, say a PAMANA specialist will confirm.',
  'PAMANA is independent and not affiliated with any brand, agency, or government entity.'
].join(' ');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    res.status(503).json({ error: 'not_configured' });
    return;
  }
  try {
    let body = req.body;
    if (typeof body === 'string') body = JSON.parse(body || '{}');
    const history = body && Array.isArray(body.messages) ? body.messages : [];

    const upstream = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-goog-api-key': key },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM }] },
        contents: history,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 800,
          thinkingConfig: { thinkingBudget: 0 }
        }
      })
    });

    if (!upstream.ok) {
      res.status(502).json({ error: 'upstream_' + upstream.status });
      return;
    }
    const data = await upstream.json();
    const parts =
      data && data.candidates && data.candidates[0] &&
      data.candidates[0].content && data.candidates[0].content.parts;
    const text = parts ? parts.map((p) => p.text || '').join('').trim() : '';
    if (!text) {
      res.status(502).json({ error: 'empty' });
      return;
    }
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: 'proxy_error' });
  }
};
