import { useState, useEffect } from 'react';
import { fetchAICTAText, getCachedCTAText, cacheCTAText } from '../services/geminiService';

const DEFAULT_TEXT = "Your team is spending hours on tasks that should take minutes. Tatua builds the automations that fix that — integrated into M-Pesa, WhatsApp, and the tools you already use.";

export function useAIText() {
  const [text, setText] = useState<string>(DEFAULT_TEXT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = getCachedCTAText();
    if (cached) {
      setText(cached);
      setLoading(false);
      return;
    }

    fetchAICTAText().then((newText) => {
      setText(newText);
      cacheCTAText(newText);
      setLoading(false);
    });
  }, []);

  return { text, loading };
}
