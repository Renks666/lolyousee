export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { niche, mode, lang: requestedLang } = req.body || {};
  const lang = requestedLang === 'ru' ? 'ru' : 'en';
  const t = TEXT[lang];

  if (!niche?.trim()) {
    return res.status(400).json({ error: t.validationNiche });
  }

  const host = String(req.headers.host || '').toLowerCase();
  const isLocalhost = /^localhost(?::\d+)?$/.test(host) || /^127\.0\.0\.1(?::\d+)?$/.test(host);

  if (isLocalhost) {
    const sample = buildLocalSample(niche.trim(), mode, lang);
    return res.status(200).json(sample);
  }

  const prompt = buildPrompt({ niche: niche.trim(), mode, lang });

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
      return res.status(response.status).json({ error: data.error?.message || t.apiError });
    }

    const text = data.content?.[0]?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();

    try {
      const result = JSON.parse(clean);
      return res.status(200).json(result);
    } catch {
      return res.status(500).json({ error: t.jsonParseFailed, raw: clean });
    }
  } catch {
    return res.status(500).json({ error: t.generationError });
  }
}

const TEXT = {
  ru: {
    validationNiche: 'Введи нишу',
    apiError: 'Ошибка API',
    generationError: 'Ошибка генерации',
    jsonParseFailed: 'Не удалось разобрать JSON'
  },
  en: {
    validationNiche: 'Enter a niche',
    apiError: 'API error',
    generationError: 'Generation error',
    jsonParseFailed: 'Failed to parse JSON'
  }
};

function buildLocalSample(niche, mode, lang) {
  const isDetailed = mode === 'detailed';
  if (lang === 'ru') {
    const sample = {
      name: `NichePilot: ${niche}`,
      tagline: `AI-помощник для команд в нише ${niche} с быстрым запуском MVP.`,
      mvp_features: [
        'Лендинг для сбора лидов с ценностным оффером',
        'Автогенерация onboarding-сценария для первого запуска',
        'Простая аналитика (активация + удержание)'
      ],
      tech_stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      monetization: 'Freemium + Pro подписка ($19/мес)',
      target_audience: `Фаундеры и небольшие продуктовые команды в нише ${niche}`
    };

    if (!isDetailed) {
      delete sample.monetization;
      delete sample.target_audience;
    }

    return sample;
  }

  const sample = {
    name: `NichePilot: ${niche}`,
    tagline: `AI co-pilot for ${niche} teams with fast MVP validation.`,
    mvp_features: [
      'Lead capture landing with instant value proposition',
      'Auto-generated onboarding flow for first-time users',
      'Simple analytics dashboard (activation + retention)'
    ],
    tech_stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    monetization: 'Freemium + Pro subscription ($19/mo)',
    target_audience: `${niche} founders and small product teams`
  };

  if (!isDetailed) {
    delete sample.monetization;
    delete sample.target_audience;
  }

  return sample;
}

function buildPrompt({ niche, mode, lang }) {
  const isDetailed = mode === 'detailed';

  if (lang === 'ru') {
    if (isDetailed) {
      return `Ты продуктовый менеджер. Придумай стартап для ниши "${niche}".\nВерни только JSON без markdown:\n{ "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [], "monetization": "...", "target_audience": "..." }`;
    }

    return `Придумай MVP-проект для ниши "${niche}".\nВерни только JSON без markdown:\n{ "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [] }`;
  }

  if (isDetailed) {
    return `You are a product manager. Create a startup idea for the niche "${niche}".\nReturn JSON only, no markdown:\n{ "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [], "monetization": "...", "target_audience": "..." }`;
  }

  return `Create an MVP project idea for the niche "${niche}".\nReturn JSON only, no markdown:\n{ "name": "...", "tagline": "...", "mvp_features": [], "tech_stack": [] }`;
}
