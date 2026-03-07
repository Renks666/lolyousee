export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { niche, mode } = req.body;
  if (!niche?.trim()) return res.status(400).json({ error: 'Введи нишу' });

  const prompt = mode === 'detailed'
    ? `Ты — продуктовый менеджер. Придумай стартап для ниши "${niche}".
       Верни ТОЛЬКО JSON без markdown:
       { "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [], "monetization": "...", "target_audience": "..." }`
    : `Придумай MVP-проект для ниши "${niche}".
       Верни ТОЛЬКО JSON без markdown:
       { "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [] }`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Ошибка API' });
    }

    const text = data.content[0].text;

    // Убираем markdown-обёртку если есть
    const clean = text.replace(/```json|```/g, '').trim();

    try {
      const result = JSON.parse(clean);
      res.status(200).json(result);
    } catch (parseErr) {
      // Временно — вернём сырой текст чтобы увидеть что пришло
      res.status(500).json({ error: 'JSON parse failed', raw: clean });
    }

  } catch (err) {
    res.status(500).json({ error: 'Ошибка генерации' });
  }
}
