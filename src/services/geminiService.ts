const CACHE_KEY = 'tatua_cta_text';
const CACHE_TIMESTAMP_KEY = 'tatua_cta_timestamp';
const TTL = 3600000; // 1 hour

const FALLBACK_CTAS = [
  "Your team is spending 3 hours a day on tasks that should take 3 minutes. Tatua builds the automations that fix that — integrated into the tools you already use.",
  "Every KES 1 invested in automation returns KES 4 in recovered time. Tatua has deployed this for transport companies, apparel brands, and car washes in Nairobi.",
  "Your competitors are automating M-Pesa reconciliation, WhatsApp follow-ups, and lead reactivation. Tatua helps you catch up — and pull ahead.",
  "Operations managers who automate with Tatua reclaim an average of 3 hours daily. That's time back for strategy, clients, and growth.",
  "Dead leads, manual bookkeeping, and missed follow-ups are costing you more than you think. Tatua builds the AI systems that eliminate these leaks permanently.",
];

export async function fetchAICTAText(): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return FALLBACK_CTAS[Math.floor(Math.random() * FALLBACK_CTAS.length)];
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Write a compelling 2-sentence CTA for Tatua, an AI automation consultancy in Nairobi. Speak directly to an operations manager. Be specific, confident, fresh. Vary the angle each time — sometimes ROI, sometimes time savings, sometimes competitive edge. Return only the text, no quotes.`
            }]
          }]
        })
      }
    );

    if (!response.ok) throw new Error('Gemini API error');

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('No text in response');

    return text.trim();
  } catch {
    return FALLBACK_CTAS[Math.floor(Math.random() * FALLBACK_CTAS.length)];
  }
}

export function getCachedCTAText(): string | null {
  try {
    const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const text = localStorage.getItem(CACHE_KEY);

    if (!timestamp || !text) return null;
    if (Date.now() - parseInt(timestamp) > TTL) return null;

    return text;
  } catch {
    return null;
  }
}

export function cacheCTAText(text: string): void {
  try {
    localStorage.setItem(CACHE_KEY, text);
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch {
    // localStorage unavailable
  }
}
