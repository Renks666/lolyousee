const rateBuckets = new Map();

const OFFLINE_IDEA_BANK = {
  ru: {
    starts: ['Vibe', 'Neon', 'Pulse', 'Flow', 'Orbit', 'Sprint', 'Signal', 'Pixel'],
    nouns: ['Lab', 'Studio', 'Hub', 'Board', 'Forge', 'Grid', 'Space', 'Engine'],
    audiences: [
      'для фрилансеров',
      'для локальных брендов',
      'для креаторов',
      'для экспертов и наставников',
      'для небольших команд'
    ],
    goals: [
      'быстро проверить спрос',
      'собрать первые заявки без сложной настройки',
      'запустить MVP за один вечер',
      'упростить путь клиента до покупки',
      'сделать запуск идеи предсказуемым'
    ],
    mechanics: [
      'конструктор лендингов + мини-CRM',
      'витрина услуг + автогенерация контента',
      'канбан задач + AI-помощник по приоритетам',
      'умные брифы + генератор прототипов',
      'каталог продуктов + трекер воронки'
    ],
    stacks: [
      'Next.js, Supabase, Vercel',
      'React, Supabase, Tailwind, Vercel',
      'Nuxt, PostgreSQL, Redis, Docker',
      'SvelteKit, SQLite, Drizzle, Fly.io'
    ],
    monetization: [
      'Подписка + платные расширения для команд',
      'Freemium + комиссия за успешную сделку',
      'Подписка + white-label для агентств',
      'Плата за командные места и API-доступ'
    ]
  },
  en: {
    starts: ['Vibe', 'Neon', 'Pulse', 'Flow', 'Orbit', 'Sprint', 'Signal', 'Pixel'],
    nouns: ['Lab', 'Studio', 'Hub', 'Board', 'Forge', 'Grid', 'Space', 'Engine'],
    audiences: [
      'for freelancers',
      'for local brands',
      'for creators',
      'for coaches and experts',
      'for small product teams'
    ],
    goals: [
      'validate demand quickly',
      'collect first leads with low setup effort',
      'ship an MVP in one evening',
      'reduce friction from visit to purchase',
      'make idea launch predictable'
    ],
    mechanics: [
      'a landing page builder + mini CRM',
      'a service showcase + content auto-generation',
      'a kanban planner + AI priority assistant',
      'smart briefs + rapid prototype generator',
      'a product catalog + funnel tracker'
    ],
    stacks: [
      'Next.js, Supabase, Vercel',
      'React, Supabase, Tailwind, Vercel',
      'Nuxt, PostgreSQL, Redis, Docker',
      'SvelteKit, SQLite, Drizzle, Fly.io'
    ],
    monetization: [
      'Subscription + paid team add-ons',
      'Freemium + success-based transaction fee',
      'Subscription + white-label for agencies',
      'Seat-based pricing with API add-on'
    ]
  }
};

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickUnique(arr, count) {
  const pool = [...arr];
  const out = [];
  while (pool.length && out.length < count) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

function buildOfflineFallback(niche, lang, tone) {
  const bank = OFFLINE_IDEA_BANK[lang] || OFFLINE_IDEA_BANK.en;
  const name = `${pickOne(bank.starts)} ${pickOne(bank.nouns)}`;
  const core = lang === 'ru'
    ? `${pickOne(bank.mechanics)} ${pickOne(bank.audiences)}, чтобы ${pickOne(bank.goals)}.`
    : `${pickOne(bank.mechanics)} ${pickOne(bank.audiences)} to ${pickOne(bank.goals)}.`;
  const stack = pickOne(bank.stacks);
  const monetization = pickOne(bank.monetization);
  const mvp = pickUnique(
    lang === 'ru'
      ? [
          'Генерация посадочной страницы под сегмент',
          'Сбор лидов и первичная квалификация',
          'Дашборд гипотез и конверсий',
          'База инсайтов из клиентских интервью',
          'Сценарии онбординга и e-mail цепочки'
        ]
      : [
          'Segment-specific landing generation',
          'Lead collection with basic qualification',
          'Hypothesis and conversion dashboard',
          'Customer interview insight repository',
          'Onboarding and email journey builder'
        ],
    tone === 'detailed' ? 3 : 2
  );

  if (lang === 'ru') {
    const lines = [
      `НАЗВАНИЕ: ${name}`,
      `СУТЬ: ${core}`,
      `ПРОБЛЕМА: В нише "${niche}" команды теряют время на ручной запуск и хаотичную проверку гипотез.`,
      'MVP:',
      ...mvp.map(item => `- ${item}`),
      `СТЕК: ${stack}`,
      `МОНЕТИЗАЦИЯ: ${monetization}`
    ];
    return lines.join('\n');
  }

  const lines = [
    `NAME: ${name}`,
    `CORE: ${core}`,
    `PROBLEM: In "${niche}", teams lose time on manual launch and unstructured hypothesis testing.`,
    'MVP:',
    ...mvp.map(item => `- ${item}`),
    `STACK: ${stack}`,
    `MONETIZATION: ${monetization}`
  ];
  return lines.join('\n');
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) return forwarded.split(',')[0].trim();
  if (Array.isArray(forwarded) && forwarded.length) return forwarded[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function getRateConfig() {
  const max = Number.parseInt(process.env.IDEA_RATE_LIMIT_MAX || '5', 10);
  const windowMs = Number.parseInt(process.env.IDEA_RATE_LIMIT_WINDOW_MS || '60000', 10);
  return { max: Number.isFinite(max) ? max : 5, windowMs: Number.isFinite(windowMs) ? windowMs : 60000 };
}

function isRateLimited(ip, max, windowMs) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip) || [];
  const recent = bucket.filter(ts => now - ts < windowMs);
  recent.push(now);
  rateBuckets.set(ip, recent);
  return recent.length > max;
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

function buildPrompts(lang, niche, tone) {
  const detailRule = tone === 'detailed'
    ? (lang === 'ru' ? 'Сделай формулировки более подробными.' : 'Provide more detailed formulations.')
    : (lang === 'ru' ? 'Сделай ответ максимально лаконичным.' : 'Keep the response concise.');
  if (lang === 'ru') {
    return {
      system: [
        'Ты продуктовый стратег и технический архитектор.',
        'Сформируй концепцию цифрового продукта по нише или проблеме.',
        'Ответ строго без markdown и без вступления.',
        detailRule,
        'Формат:',
        'НАЗВАНИЕ: [название]',
        'СУТЬ: [1-2 предложения]',
        'ПРОБЛЕМА: [боль пользователя]',
        'MVP:',
        '- [фича 1]',
        '- [фича 2]',
        '- [фича 3]',
        'СТЕК: [технологии]',
        'МОНЕТИЗАЦИЯ: [модель]'
      ].join('\n'),
      user: `Ниша/проблема: ${niche}`
    };
  }
  return {
    system: [
      'You are a product strategist and technical architect.',
      'Generate a digital product concept for the provided niche/problem.',
      'Reply without markdown and without intro.',
      detailRule,
      'Format:',
      'NAME: [name]',
      'CORE: [1-2 sentences]',
      'PROBLEM: [pain point]',
      'MVP:',
      '- [feature 1]',
      '- [feature 2]',
      '- [feature 3]',
      'STACK: [technologies]',
      'MONETIZATION: [model]'
    ].join('\n'),
    user: `Niche/problem: ${niche}`
  };
}

function extractOpenAIText(data) {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) return data.output_text.trim();
  if (!Array.isArray(data?.output)) return '';
  const parts = [];
  for (const item of data.output) {
    if (!Array.isArray(item?.content)) continue;
    for (const part of item.content) {
      if (typeof part?.text === 'string' && part.text.trim()) parts.push(part.text.trim());
    }
  }
  return parts.join('\n').trim();
}

function extractAnthropicText(data) {
  if (!Array.isArray(data?.content)) return '';
  return data.content
    .filter(part => part?.type === 'text' && typeof part?.text === 'string')
    .map(part => part.text.trim())
    .filter(Boolean)
    .join('\n')
    .trim();
}

function extractGeminiText(data) {
  if (!Array.isArray(data?.candidates)) return '';
  const first = data.candidates[0];
  if (!first || !Array.isArray(first?.content?.parts)) return '';
  return first.content.parts
    .map(part => (typeof part?.text === 'string' ? part.text.trim() : ''))
    .filter(Boolean)
    .join('\n')
    .trim();
}

async function callOpenAI(prompts) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not set');
  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      max_output_tokens: 800,
      input: [
        { role: 'system', content: [{ type: 'input_text', text: prompts.system }] },
        { role: 'user', content: [{ type: 'input_text', text: prompts.user }] }
      ]
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.error?.message || 'OpenAI API request failed');
  const result = extractOpenAIText(data);
  if (!result) throw new Error('OpenAI returned empty output');
  return result;
}

async function callAnthropic(prompts) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set');
  const model = process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-latest';
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      max_tokens: 800,
      system: prompts.system,
      messages: [{ role: 'user', content: prompts.user }]
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.error?.message || 'Anthropic API request failed');
  const result = extractAnthropicText(data);
  if (!result) throw new Error('Anthropic returned empty output');
  return result;
}

async function callGemini(prompts) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set');
  const rawModel = process.env.GEMINI_MODEL || 'gemini-flash-latest';
  const model = rawModel.startsWith('models/') ? rawModel.slice('models/'.length) : rawModel;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: prompts.system }] },
      contents: [{ role: 'user', parts: [{ text: prompts.user }] }],
      generationConfig: { maxOutputTokens: 800, temperature: 1.0, topP: 0.95, topK: 40 }
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.error?.message || 'Gemini API request failed');
  const result = extractGeminiText(data);
  if (!result) throw new Error('Gemini returned empty output');
  return result;
}

async function tryProviders(order, prompts) {
  const errors = [];
  for (const provider of order) {
    try {
      if (provider === 'openai') return { result: await callOpenAI(prompts), source: 'openai' };
      if (provider === 'anthropic') return { result: await callAnthropic(prompts), source: 'anthropic' };
      if (provider === 'gemini') return { result: await callGemini(prompts), source: 'gemini' };
    } catch (error) {
      errors.push(`${provider}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  throw new Error(errors.join(' | ') || 'No provider succeeded');
}

async function runWithFallback(prompts, niche, lang, tone) {
  const mode = (process.env.IDEA_MODE || 'free').toLowerCase();
  const provider = (process.env.PAID_PROVIDER || 'auto').toLowerCase();
  try {
    if (mode === 'paid') {
      if (provider === 'openai') return tryProviders(['openai'], prompts);
      if (provider === 'anthropic' || provider === 'claude') return tryProviders(['anthropic'], prompts);
      if (provider === 'gemini') return tryProviders(['gemini'], prompts);
      return tryProviders(['openai', 'anthropic', 'gemini'], prompts);
    }
    return tryProviders(['gemini', 'openai', 'anthropic'], prompts);
  } catch {
    return { result: buildOfflineFallback(niche, lang, tone), source: 'offline' };
  }
}

function sendError(res, status, code, message) {
  return res.status(status).json({ error: message, code });
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') return sendError(res, 405, 'METHOD_NOT_ALLOWED', 'Method not allowed');

  const { max, windowMs } = getRateConfig();
  const ip = getClientIp(req);
  if (isRateLimited(ip, max, windowMs)) {
    return sendError(res, 429, 'RATE_LIMITED', 'Too many requests, try again later');
  }

  const body = await readJsonBody(req);
  const niche = typeof body?.niche === 'string' ? body.niche.trim() : '';
  const lang = body?.lang === 'ru' ? 'ru' : 'en';
  const tone = body?.tone === 'detailed' ? 'detailed' : 'brief';
  if (!niche || niche.length > 200) return sendError(res, 400, 'INVALID_INPUT', 'Invalid niche');

  const prompts = buildPrompts(lang, niche, tone);
  const startedAt = Date.now();
  try {
    const payload = await runWithFallback(prompts, niche, lang, tone);
    return res.status(200).json({
      result: payload.result,
      source: payload.source,
      latencyMs: Date.now() - startedAt
    });
  } catch (error) {
    return sendError(
      res,
      500,
      'PROVIDER_ERROR',
      error instanceof Error ? error.message : 'Internal server error'
    );
  }
}
