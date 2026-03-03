/* ══════════════════════════════════════════════
   i18n DATA
══════════════════════════════════════════════ */
window.__APP_STARTED__ = true;
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
const isCoarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
const hasFinePointer = window.matchMedia?.('(pointer: fine)')?.matches ?? false;
const hasHover = window.matchMedia?.('(hover: hover)')?.matches ?? false;
const isMobileViewport = window.matchMedia?.('(max-width: 768px)')?.matches ?? false;
const initialMotionMode = prefersReducedMotion ? 'reduced' : ((isCoarsePointer || isMobileViewport) ? 'minimal' : 'full');
const UI_STATE = {
  motionMode: initialMotionMode,
  currentLang: 'ru',
  isAfterHero: false,
  generatorState: 'idle'
};
const CONTENT = { projects: [], faq: [], signals: [], skills: [] };
document.documentElement.dataset.motion = initialMotionMode;
const canUseCustomCursor = hasFinePointer && hasHover && initialMotionMode === 'full';
const shouldUseHeavyHeroEffects = initialMotionMode === 'full';

const LANG = {
  ru: {
    'hero-tag':         'Vibe Coder — Портфолио',
    'hero-sub':         'Специализируюсь на вайбкодинге и создаю проекты\n«под ключ» — от концепции до запуска.\nДумаю как предприниматель, собираю как архитектор, реализую как инженер.',
    'btn-projects':     'Смотреть проекты',
    'btn-contact':      'Связаться',
    'stat-projects':    'проекта запущено',
    'stat-prod':        'от идеи до прода',
    'scroll-hint':      'SCROLL',
    'nav-about':        'About',
    'nav-stack':        'Stack',
    'nav-projects':     'Projects',
    'nav-generator':    'AI Ideas',
    'nav-faq':          'FAQ',
    'nav-contact':      'Contact',
    'nav-btn-work':     'Проекты',
    'nav-btn-contact':  'Связаться',
    'lang-label':       'Язык:',
    'about-label':      'About',
    'about-title':      'ОБО МНЕ',
    'about-text':       'Результат — стильные, чистые и рабочие решения, ориентированные на рост бизнеса. Вайбкодинг — это не просто инструмент, это новый способ мышления: когда скорость итерации важнее бюрократии, а качество результата говорит само за себя.',
    'cnt-projects':     'Проекта',
    'cnt-launch':       'До прода',
    'cnt-reply':        'Время ответа',
    'hex-lbl':          'Projects\nLaunched',
    'stack-label':      'Stack',
    'stack-title':      'МОЙ СТЕК',
    'stack-next':       'React фреймворк\nдля прода',
    'stack-supabase':   'БД, Auth\nи Storage',
    'stack-vercel':     'Деплой\nза секунды',
    'stack-tailwind':   'Стилизация\nбез боли',
    'stack-claude':     'AI-движок\nпроектов',
    'tl-label':         'Timeline',
    'tl-title':         'BUILD SYSTEM',
    'bs-s1-title':      'Диагностика',
    'bs-s1-deliverable':'Бизнес-цели, аудитория, KPI, MVP scope',
    'bs-s1-eastlane':   'Определил SKU-фокус и сценарий первого заказа',
    'bs-s1-aletheia':   'Выделил сегменты: игроки, клубы, агенты, тренеры',
    'bs-s2-title':      'Архитектура',
    'bs-s2-deliverable':'Информационная структура, роли, сценарии, data-flow',
    'bs-s2-eastlane':   'Спроектировал каталог, карточку, корзину, checkout',
    'bs-s2-aletheia':   'Собрал структуру услуг, кейсов, FAQ и навигации',
    'bs-s3-title':      'Интерфейс',
    'bs-s3-deliverable':'UI-kit, ключевые экраны, адаптивные состояния',
    'bs-s3-eastlane':   'Собрал витрину с упором на конверсию в заявку',
    'bs-s3-aletheia':   'Сделал доверительный интерфейс для legal-tech аудитории',
    'bs-s4-title':      'Разработка',
    'bs-s4-deliverable':'Frontend/Backend интеграция, контент-модули, QA',
    'bs-s4-eastlane':   'Реализовал Next.js + Supabase: корзина и заказы',
    'bs-s4-aletheia':   'Внедрил мультиязычность, кейсы и структуру экспертности',
    'bs-s5-title':      'Запуск и рост',
    'bs-s5-deliverable':'Деплой, аналитика, SEO/итерации',
    'bs-s5-eastlane':   'Запуск на Vercel и оптимизация пути до покупки',
    'bs-s5-aletheia':   'Публикация, позиционирование, расширение охвата',
    'signals-label':    'Signal Feed',
    'projects-label':   'Work',
    'projects-title':   'МОИ ПРОЕКТЫ',
    'project-details':  'Подробнее',
    'project-open':     'Открыть',
    'case-open-site':   'Открыть сайт',
    'metrics-total':    'Систем запущено',
    'metrics-live':     'В active-состоянии',
    'metrics-cycle':    'Цикл запуска',
    'metrics-cycle-value': '3-5 дн',
    'process-log-title': 'Process Command Log',
    'process-log-lines': [
      '[01] intake -> ниша, задача, KPI',
      '[02] mapping -> роли, флоу, риски',
      '[03] build -> интерфейс + логика + интеграции',
      '[04] deploy -> релиз + аналитика + итерации'
    ],
    'process-kpi-1':    'Product fit',
    'process-kpi-2':    'Launch readiness',
    'process-kpi-3':    'Delivery speed',
    'case-role':        'РОЛЬ',
    'case-challenge':   'ЗАДАЧА',
    'case-solution':    'РЕШЕНИЕ',
    'case-outcomes':    'РЕЗУЛЬТАТ',
    'contact-label':    'Contact',
    'contact-title':    'СВЯЗЬ СО МНОЙ',
    'contact-tagline':  'Есть идея, проект или задача? Напишите — разберём концепцию, выберем стек, запустим.',
    'generator-label':  '005 - AI Tool',
    'generator-title':  'ПРИДУМАЙ ПРОЕКТ',
    'generator-badge':  '[OPENAI]',
    'generator-input-label': 'input',
    'generator-output-label': 'output',
    'generator-input-placeholder': 'ниша, идея, проблема...',
    'generator-output-placeholder': '// Введи нишу - получишь название, MVP-фичи и стек',
    'generator-run':    'RUN ->',
    'generator-running':'Running...',
    'generator-command-empty': '...',
    'generator-error-prefix': '// Error:',
    'generator-tone-brief': 'Brief',
    'generator-tone-detailed': 'Detailed',
    'generator-presets': ['Legal Tech', 'E-commerce', 'Creator Economy', 'Local Services'],
    'faq-label':        'FAQ',
    'faq-title':        'ВОПРОСЫ -> ОТВЕТЫ',
    'faq-mvp-tip':      'Минимально жизнеспособный продукт: базовая версия для быстрой проверки спроса.',
    'lead-niche-placeholder': 'Ниша / идея',
    'lead-goal-mvp':    'MVP запуск',
    'lead-goal-redesign': 'Редизайн сайта',
    'lead-goal-automation': 'Автоматизация процесса',
    'lead-budget-boot': 'Bootstrapped',
    'lead-budget-mid':  'Middle budget',
    'lead-budget-scale':'Scale budget',
    'lead-submit':      'Отправить в Telegram',
    'footer-copy':      '© 2026. All vibes reserved.',
    'skills': [
      {name:'Вайб-кодинг',  tip:'Разработка с AI как основным инструментом'},
      {name:'Full-stack',   tip:'Frontend + Backend + DevOps в одном'},
      {name:'Product thinking', tip:'Думаю о продукте, а не только о коде'},
      {name:'UI/UX',        tip:'Дизайн интерфейсов, которые хочется использовать'},
      {name:'Architecture', tip:'Выстраиваю масштабируемую структуру с нуля'},
      {name:'MVP Launch',   tip:'От идеи до рабочего прода за недели'},
      {name:'Business logic', tip:'Код, который решает реальные бизнес-задачи'},
    ]
  },
  en: {
    'hero-tag':         'Vibe Coder — Portfolio',
    'hero-sub':         'Specializing in vibe coding, building projects end-to-end — from concept to launch. I think like an entrepreneur, architect like a systems designer, execute like an engineer.',
    'btn-projects':     'View Projects',
    'btn-contact':      'Get in Touch',
    'stat-projects':    'projects launched',
    'stat-prod':        'concept to prod',
    'scroll-hint':      'SCROLL',
    'nav-about':        'About',
    'nav-stack':        'Stack',
    'nav-projects':     'Projects',
    'nav-generator':    'AI Ideas',
    'nav-faq':          'FAQ',
    'nav-contact':      'Contact',
    'nav-btn-work':     'Projects',
    'nav-btn-contact':  'Contact',
    'lang-label':       'Language:',
    'about-label':      'About',
    'about-title':      'WHO I AM',
    'about-text':       'The result — stylish, clean, and functional solutions focused on business growth. Vibe coding isn\'t just a tool, it\'s a new way of thinking: where iteration speed beats bureaucracy, and the quality of the result speaks for itself.',
    'cnt-projects':     'Projects',
    'cnt-launch':       'To prod',
    'cnt-reply':        'Response time',
    'hex-lbl':          'Projects\nLaunched',
    'stack-label':      'Stack',
    'stack-title':      'MY STACK',
    'stack-next':       'React framework\nfor production',
    'stack-supabase':   'DB, Auth\n& Storage',
    'stack-vercel':     'Deploy\nin seconds',
    'stack-tailwind':   'Styling\nwithout pain',
    'stack-claude':     'AI engine\nfor projects',
    'tl-label':         'Timeline',
    'tl-title':         'BUILD SYSTEM',
    'bs-s1-title':      'Diagnostics',
    'bs-s1-deliverable':'Business goals, audience, KPIs, MVP scope',
    'bs-s1-eastlane':   'Defined SKU focus and first-order journey',
    'bs-s1-aletheia':   'Segmented users: players, clubs, agents, coaches',
    'bs-s2-title':      'Architecture',
    'bs-s2-deliverable':'Information architecture, roles, scenarios, data flow',
    'bs-s2-eastlane':   'Designed catalog, product page, cart, and checkout',
    'bs-s2-aletheia':   'Structured services, cases, FAQ, and navigation',
    'bs-s3-title':      'Interface',
    'bs-s3-deliverable':'UI kit, key screens, and responsive states',
    'bs-s3-eastlane':   'Built a storefront focused on conversion to inquiry',
    'bs-s3-aletheia':   'Crafted a trust-first interface for legal-tech users',
    'bs-s4-title':      'Development',
    'bs-s4-deliverable':'Frontend/backend integration, content modules, QA',
    'bs-s4-eastlane':   'Implemented Next.js + Supabase: cart and orders',
    'bs-s4-aletheia':   'Shipped i18n, case sections, and expert positioning',
    'bs-s5-title':      'Launch & Growth',
    'bs-s5-deliverable':'Deployment, analytics, SEO, iteration loop',
    'bs-s5-eastlane':   'Launched on Vercel and optimized the purchase path',
    'bs-s5-aletheia':   'Published, positioned, and expanded audience reach',
    'signals-label':    'Signal Feed',
    'projects-label':   'Work',
    'projects-title':   'MY PROJECTS',
    'project-details':  'Details',
    'project-open':     'Open',
    'case-open-site':   'Open Website',
    'metrics-total':    'Systems launched',
    'metrics-live':     'Currently active',
    'metrics-cycle':    'Launch cycle',
    'metrics-cycle-value': '3-5 days',
    'process-log-title': 'Process Command Log',
    'process-log-lines': [
      '[01] intake -> niche, task, KPIs',
      '[02] mapping -> roles, flows, risks',
      '[03] build -> interface + logic + integrations',
      '[04] deploy -> release + analytics + iterations'
    ],
    'process-kpi-1':    'Product fit',
    'process-kpi-2':    'Launch readiness',
    'process-kpi-3':    'Delivery speed',
    'case-role':        'ROLE',
    'case-challenge':   'CHALLENGE',
    'case-solution':    'SOLUTION',
    'case-outcomes':    'OUTCOMES',
    'contact-label':    'Contact',
    'contact-title':    'LET\'S TALK?',
    'contact-tagline':  'Have an idea, project or task? Write me — we\'ll break down the concept, pick the stack, launch it.',
    'generator-label':  '005 - AI Tool',
    'generator-title':  'IDEA GENERATOR',
    'generator-badge':  '[OPENAI]',
    'generator-input-label': 'input',
    'generator-output-label': 'output',
    'generator-input-placeholder': 'niche, idea, problem...',
    'generator-output-placeholder': '// Enter a niche to get a name, MVP features, and stack',
    'generator-run':    'RUN ->',
    'generator-running':'Running...',
    'generator-command-empty': '...',
    'generator-error-prefix': '// Error:',
    'generator-tone-brief': 'Brief',
    'generator-tone-detailed': 'Detailed',
    'generator-presets': ['Legal Tech', 'E-commerce', 'Creator Economy', 'Local Services'],
    'faq-label':        'FAQ',
    'faq-title':        'OBJECTIONS -> ANSWERS',
    'faq-mvp-tip':      'Minimum Viable Product: a basic version to validate demand fast.',
    'lead-niche-placeholder': 'Niche / idea',
    'lead-goal-mvp':    'MVP launch',
    'lead-goal-redesign': 'Site redesign',
    'lead-goal-automation': 'Process automation',
    'lead-budget-boot': 'Bootstrapped',
    'lead-budget-mid':  'Middle budget',
    'lead-budget-scale':'Scale budget',
    'lead-submit':      'Send to Telegram',
    'footer-copy':      '© 2026. All vibes reserved.',
    'skills': [
      {name:'Vibe Coding',      tip:'Building with AI as the primary tool'},
      {name:'Full-stack',       tip:'Frontend + Backend + DevOps in one'},
      {name:'Product Thinking', tip:'I think about the product, not just the code'},
      {name:'UI/UX',            tip:'Interfaces people actually want to use'},
      {name:'Architecture',     tip:'Building scalable structure from scratch'},
      {name:'MVP Launch',       tip:'From idea to working prod in weeks'},
      {name:'Business Logic',   tip:'Code that solves real business problems'},
    ]
  }
};

let currentLang = 'ru';
UI_STATE.currentLang = currentLang;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&#39;');
}

function getLocalized(field, lang = currentLang) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.ru ?? field.en ?? '';
}

function domainFromUrl(url) {
  try { return new URL(url).hostname; } catch { return url; }
}

function statusClass(status) {
  if (status === 'DEPLOYED') return 'status-chip-deploy';
  if (status === 'BUILDING') return 'status-chip-build';
  return '';
}

async function loadJson(path) {
  try {
    const response = await fetch(path, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

function forceShowContent() {
  document.getElementById('preloader')?.classList.add('hide');
  document.querySelectorAll('.reveal,.reveal-left').forEach(el => el.classList.add('visible'));
  const tag = document.getElementById('heroTag');
  if (tag) tag.style.opacity = '1';
}

window.addEventListener('error', forceShowContent);
window.addEventListener('unhandledrejection', forceShowContent);

function applyLang(lang) {
  currentLang = lang;
  UI_STATE.currentLang = lang;
  const t = LANG[lang];
  document.documentElement.lang = lang;
  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  // About text has a cyan span
  const atEl = document.querySelector('[data-i18n="about-text"]');
  if (atEl) {
    atEl.innerHTML = lang === 'ru'
      ? 'Результат - стильные, чистые и рабочие решения, ориентированные на рост бизнеса. <span style="color:var(--cyan)">Вайбкодинг - это не просто инструмент</span>, это новый способ мышления: когда скорость итерации важнее бюрократии, а качество результата говорит само за себя.'
      : 'The result - stylish, clean, and functional solutions focused on business growth. <span style="color:var(--cyan)">Vibe coding is not just a tool</span>, it is a new way of thinking: where iteration speed beats bureaucracy, and the quality of the result speaks for itself.';
  }
  // Contact tagline
  const ctEl = document.querySelector('[data-i18n="contact-tagline"]');
  if (ctEl) {
    ctEl.innerHTML = t['contact-tagline'] +
      '<br><span style="color:var(--cyan)">' +
      (lang === 'ru' ? 'От слова до продукта.' : 'From word to product.') +
      '<span class="blink">_</span></span>';
  }
  // Hex label with line break
  const hexEl = document.querySelector('[data-i18n="hex-lbl"]');
  if (hexEl) hexEl.innerHTML = lang === 'ru' ? 'Projects<br>Launched' : 'Projects<br>Launched';
  // Counter suffix update
  const replyCounter = document.querySelector('#counters .counter-item:last-child .counter-num[data-target]');
  if (replyCounter) {
    const suffix = lang === 'ru' ? ' ч' : ' h';
    const value = Number.parseInt(replyCounter.textContent, 10) || Number(replyCounter.dataset.target) || 0;
    replyCounter.setAttribute('data-suffix', suffix);
    replyCounter.textContent = (value < 10 ? '0' : '') + value + suffix;
  }
  // Lang toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(b => b.textContent = lang === 'ru' ? 'EN' : 'RU');
  // Skills rebuild
  buildSkills(lang);
  renderSignals();
  renderProcessLog();
  renderProjects();
  renderCaseMetrics();
  renderFaq();
  syncGeneratorLanguage();
  observeRevealElements(document);
  // Retype hero tag
  typeHeroTag(lang);
  // title
  document.title = 'LOLYOUSEE - Vibe Coder';
}

function buildSkills(lang) {
  const list = document.getElementById('skillsList');
  if (!list) return;
  list.innerHTML = '';
  const skills = CONTENT.skills.length
    ? CONTENT.skills.map(item => ({
        name: lang === 'ru' ? item.name_ru : item.name_en,
        tip: lang === 'ru' ? item.tip_ru : item.tip_en
      }))
    : LANG[lang].skills;
  skills.forEach((s, idx) => {
    const el = document.createElement('span');
    el.className = 'skill-tag';
    if (idx === 0) el.classList.add('skill-tag-edge-left');
    if (idx === skills.length - 1) el.classList.add('skill-tag-edge-right');
    el.textContent = s.name;
    el.dataset.tooltip = s.tip;
    list.appendChild(el);
  });
}

/* ══════════════════════════════════════════════
   PRELOADER
══════════════════════════════════════════════ */
(function(){
  const pre=document.getElementById('preloader');
  const box=document.getElementById('preLines');
  const bar=document.getElementById('preBar');
  if (!pre || !box || !bar) return;
  if (prefersReducedMotion) {
    pre.classList.add('hide');
    document.dispatchEvent(new Event('preloader:done'));
    return;
  }

  const lines=[
    {p:'lolyousee@portfolio:~$',t:'init portfolio.exe',c:''},
    {p:'',t:'Loading modules...',c:'dim'},
    {p:'',t:'[████████████████████] 100%',c:'cyan'},
    {p:'lolyousee@portfolio:~$',t:'import { vibes } from "./soul"',c:''},
    {p:'',t:'✓ vibes loaded',c:'cyan'},
    {p:'lolyousee@portfolio:~$',t:'npm run start:portfolio',c:''},
    {p:'',t:'> LOLYOUSEE portfolio v3.0.0',c:'mag'},
    {p:'',t:'> Ready. Launching...',c:'cyan'},
  ];
  const delays=[350,260,380,280,280,240,220,200];
  let i=0;
  function next(){
    if(i>=lines.length){
      bar.style.width='100%';
      setTimeout(()=>{
        pre.classList.add('hide');
        document.dispatchEvent(new Event('preloader:done'));
      },520);
      return;
    }
    const l=lines[i];
    const row=document.createElement('div');row.className='pre-line show';
    if(l.p){const pr=document.createElement('span');pr.className='pre-prompt';pr.textContent=l.p;row.appendChild(pr);}
    const tx=document.createElement('span');tx.className='pre-text'+(l.c?' '+l.c:'');tx.textContent=l.t;row.appendChild(tx);
    box.appendChild(row);
    bar.style.width=((i+1)/lines.length*100)+'%';
    setTimeout(next,delays[i++]);
  }
  setTimeout(next,300);
})();

/* ══════════════════════════════════════════════
   TYPING EFFECT
══════════════════════════════════════════════ */
let typingTimer = null;
function typeHeroTag(lang) {
  const el = document.getElementById('heroTag');
  if (!el) return;
  clearTimeout(typingTimer);
  el.innerHTML = '<span class="hero-tag-cursor"></span>';
  const text = LANG[lang]['hero-tag'];
  el.style.opacity = '1';
  let i = 0;
  function type() {
    if (i < text.length) {
      const cursor = el.querySelector('.hero-tag-cursor');
      const node = document.createTextNode(text[i++]);
      el.insertBefore(node, cursor);
      typingTimer = setTimeout(type, 55);
    } else {
      const cursor = el.querySelector('.hero-tag-cursor');
      if (cursor) setTimeout(() => cursor.remove(), 1500);
    }
  }
  typingTimer = setTimeout(type, 80);
}
document.addEventListener('preloader:done', () => typeHeroTag(currentLang));
if (!document.getElementById('preloader')) typeHeroTag(currentLang);

/* ══════════════════════════════════════════════
   SCROLL PROGRESS
══════════════════════════════════════════════ */
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = (window.scrollY / maxScroll) * 100;
    progressBar.style.width = pct + '%';
  }, {passive:true});
}

/* ══════════════════════════════════════════════
   PARTICLES
══════════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('particles-canvas');
  if (!canvas || prefersReducedMotion) return;
  const ctx=canvas.getContext('2d');
  if (!ctx) return;
  const COLORS=['#00f5ff','#ff00aa','#7b61ff','#39ff14'];
  const pointsCount = UI_STATE.motionMode === 'full' ? 95 : 36;
  const linkDistance = UI_STATE.motionMode === 'full' ? 95 : 58;
  let W,H,DPR=1,mouse={x:-999,y:-999};
  const pts=[];
  function resize(){
    W=canvas.offsetWidth;H=canvas.offsetHeight;DPR=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(W*DPR);canvas.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  window.addEventListener('resize',resize,{passive:true});resize();
  for(let i=0;i<pointsCount;i++) pts.push({
    x:Math.random()*W,y:Math.random()*H,
    vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,
    r:Math.random()*2+.8,a:Math.random()*.45+.12,
    color:COLORS[i%COLORS.length],life:Math.random()*180+80,age:Math.random()*180
  });
  function tick(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
      const mouseRadius = UI_STATE.motionMode === 'full' ? 180 : 120;
      if (d < mouseRadius && d > 0) {
        const forceBase = UI_STATE.motionMode === 'full' ? 1.4 : 1;
        const f = (mouseRadius - d) / mouseRadius * forceBase;
        p.vx += (dx / d) * f * .08;
        p.vy += (dy / d) * f * .08;
      }
      p.vx*=.985;p.vy*=.985;p.x+=p.vx;p.y+=p.vy;p.age++;
      if(p.age>p.life||p.x<-20||p.x>W+20||p.y<-20||p.y>H+20){
        p.x=Math.random()*W;p.y=Math.random()*H;p.vx=(Math.random()-.5)*.45;p.vy=(Math.random()-.5)*.45;p.age=0;p.life=Math.random()*180+80;
      }
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.globalAlpha=p.a*(1-p.age/p.life*.4);ctx.fill();
      if (UI_STATE.motionMode === 'full') pts.forEach(q=>{
        const ddx=p.x-q.x,ddy=p.y-q.y,dd=Math.sqrt(ddx*ddx+ddy*ddy);
        if(dd<linkDistance&&dd>0){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=p.color;ctx.globalAlpha=(1-dd/linkDistance)*.1;ctx.lineWidth=.5;ctx.stroke();}
      });
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(tick);
  }
  tick();
  const heroEl=document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;},{passive:true});
    heroEl.addEventListener('mouseleave',()=>{mouse.x=-999;mouse.y=-999;},{passive:true});
  }
})();

/* ══════════════════════════════════════════════
   3D NAME (CSS perspective tilt)
══════════════════════════════════════════════ */
(function(){
  const wrap = document.getElementById('glitchWrap');
  const heroEl = document.querySelector('.hero');
  if (!wrap || !heroEl || !shouldUseHeavyHeroEffects) return;
  heroEl.addEventListener('mousemove', e => {
    const r = heroEl.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
    wrap.style.transform = `perspective(700px) rotateY(${dx * 10}deg) rotateX(${-dy * 6}deg)`;
  }, {passive:true});
  heroEl.addEventListener('mouseleave', () => {
    wrap.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg)';
  }, {passive:true});
})();

/* ══════════════════════════════════════════════
   COUNTERS
══════════════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('.counter-num[data-target]').forEach(el => {
    const target = +el.dataset.target, suf = el.dataset.suffix||'', dur = 1400, t0 = performance.now();
    (function step(now){
      const t = Math.min((now-t0)/dur, 1), v = Math.floor((1-Math.pow(1-t,3))*target);
      el.textContent = (v<10?'0':'')+v+suf;
      if (t<1) requestAnimationFrame(step); else el.textContent = (target<10?'0':'')+target+suf;
    })(t0);
  });
}

const countersEl = document.getElementById('counters');
if (countersEl) {
  if ('IntersectionObserver' in window) {
    const cntObs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      animateCounters();
      cntObs.disconnect();
    }, {threshold:.4});
    cntObs.observe(countersEl);
  } else {
    animateCounters();
  }
}

/* ══════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════ */
const navbar       = document.getElementById('navbar');
const navLogo      = document.getElementById('navLogo');
const navLogoTyped = document.getElementById('navLogoTyped');
const heroEl       = document.querySelector('.hero');
const navLinks     = document.querySelectorAll('.nav-link');
const sections     = document.querySelectorAll('section[id]');

const NAV_LOGO_TEXT = 'LOLYOUSEE';
const HERO_EXIT_THRESHOLD = 80;
const HERO_ENTER_THRESHOLD = 160;
let navLogoTypingTimer = null;
let isAfterHero = false;

function renderNavLogoText(count) {
  if (!navLogoTyped) return;
  const safeCount = Math.max(0, Math.min(count, NAV_LOGO_TEXT.length));
  const head = NAV_LOGO_TEXT.slice(0, Math.min(safeCount, 6));
  const tailCount = Math.max(0, safeCount - 6);
  const tail = NAV_LOGO_TEXT.slice(6, 6 + tailCount);
  navLogoTyped.innerHTML = tail ? `${head}<span class="see" data-see="${tail}">${tail}</span>` : head;
}

function clearNavLogoTyping() {
  clearTimeout(navLogoTypingTimer);
  navLogoTypingTimer = null;
}

function resetNavLogoTyping() {
  clearNavLogoTyping();
  if (navLogoTyped) navLogoTyped.textContent = '';
  navLogo?.classList.remove('is-visible', 'is-typing');
}

function setNavLogoFull() {
  if (!navLogo || !navLogoTyped) return;
  navLogo.classList.add('is-visible');
  navLogo.classList.remove('is-typing');
  navLogoTyped.innerHTML = 'LOLYOU<span class="see" data-see="SEE">SEE</span>';
}

function startNavLogoTyping() {
  if (!navLogo || !navLogoTyped) return;
  clearNavLogoTyping();
  navLogo.classList.add('is-visible', 'is-typing');
  navLogoTyped.textContent = '';

  if (prefersReducedMotion) {
    setNavLogoFull();
    return;
  }

  let i = 0;
  const step = () => {
    i += 1;
    renderNavLogoText(i);
    if (i < NAV_LOGO_TEXT.length) {
      navLogoTypingTimer = setTimeout(step, 60);
    } else {
      navLogo.classList.remove('is-typing');
      clearNavLogoTyping();
    }
  };

  navLogoTypingTimer = setTimeout(step, 80);
}

function setAfterHeroState(nextAfterHero) {
  if (!navbar || nextAfterHero === isAfterHero) return;
  isAfterHero = nextAfterHero;
  UI_STATE.isAfterHero = nextAfterHero;
  navbar.classList.toggle('after-hero', isAfterHero);
  if (isAfterHero) startNavLogoTyping();
  else resetNavLogoTyping();
}

function onScroll() {
  if (!navbar) return;

  if (heroEl) {
    const heroBottom = heroEl.getBoundingClientRect().bottom;
    if (!isAfterHero && heroBottom < HERO_EXIT_THRESHOLD) {
      setAfterHeroState(true);
    } else if (isAfterHero && heroBottom > HERO_ENTER_THRESHOLD) {
      setAfterHeroState(false);
    }
  } else {
    setAfterHeroState(true);
  }

  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
}

if (navbar) {
  if (!heroEl || heroEl.getBoundingClientRect().bottom < HERO_EXIT_THRESHOLD) {
    isAfterHero = false;
    UI_STATE.isAfterHero = false;
    setAfterHeroState(true);
  } else {
    isAfterHero = true;
    UI_STATE.isAfterHero = true;
    setAfterHeroState(false);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

/* ══════════════════════════════════════════════
   BURGER + LANG TOGGLE
══════════════════════════════════════════════ */
const burger = document.getElementById('burger');
const mob    = document.getElementById('mobileMenu');
if (burger && mob) {
  burger.addEventListener('click', () => {
    const o = burger.classList.toggle('open');
    mob.classList.toggle('open', o);
  });
  document.querySelectorAll('[data-mob]').forEach(el =>
    el.addEventListener('click', () => { burger.classList.remove('open'); mob.classList.remove('open'); })
  );
}

function toggleLang() {
  applyLang(currentLang === 'ru' ? 'en' : 'ru');
}
document.getElementById('langToggle')?.addEventListener('click', toggleLang);
document.getElementById('langToggleMob')?.addEventListener('click', toggleLang);

/* ══════════════════════════════════════════════
   DYNAMIC CONTENT + GENERATOR
══════════════════════════════════════════════ */
async function loadContentData() {
  const [projects, faq, signals, skills] = await Promise.all([
    loadJson('/content/projects.json'),
    loadJson('/content/faq.json'),
    loadJson('/content/signals.json'),
    loadJson('/content/skills.json')
  ]);
  CONTENT.projects = Array.isArray(projects?.items) ? projects.items : [];
  CONTENT.faq = Array.isArray(faq?.items) ? faq.items : [];
  CONTENT.signals = Array.isArray(signals?.items) ? signals.items : [];
  CONTENT.skills = Array.isArray(skills?.items) ? skills.items : [];
}

function renderSignals() {
  const holder = document.getElementById('signalsTicker');
  if (!holder) return;
  const lines = CONTENT.signals.length
    ? CONTENT.signals.map(item => currentLang === 'ru' ? item.ru : item.en)
    : [currentLang === 'ru' ? '[signal] Обновлений пока нет' : '[signal] No updates yet'];
  const row = [...lines, ...lines].map(line => `<span class="signal-item">${escapeHtml(line)}</span>`).join('');
  holder.innerHTML = `<div class="signals-track">${row}</div>`;
}

function renderProcessLog() {
  const box = document.getElementById('processLog');
  if (!box) return;
  const t = LANG[currentLang];
  const lines = t['process-log-lines']
    .map(line => `<p class="process-line">${escapeHtml(line)}</p>`)
    .join('');
  box.innerHTML = `
    <div class="process-head">
      <span class="status-chip status-chip-build">BUILDING</span>
      <span>${escapeHtml(t['process-log-title'])}</span>
    </div>
    <div class="process-lines">${lines}</div>
    <div class="process-kpi-row" id="processKpis">
      <div class="process-kpi"><span class="process-kpi-num" data-target="96">00</span>% ${escapeHtml(t['process-kpi-1'])}</div>
      <div class="process-kpi"><span class="process-kpi-num" data-target="94">00</span>% ${escapeHtml(t['process-kpi-2'])}</div>
      <div class="process-kpi"><span class="process-kpi-num" data-target="98">00</span>% ${escapeHtml(t['process-kpi-3'])}</div>
    </div>
  `;
  const nums = box.querySelectorAll('.process-kpi-num[data-target]');
  nums.forEach(el => {
    const target = Number(el.dataset.target) || 0;
    const t0 = performance.now();
    const dur = 900;
    (function step(now){
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = String(Math.floor(target * p)).padStart(2, '0');
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });
}

function renderCaseMetrics() {
  const holder = document.getElementById('caseMetrics');
  if (!holder) return;
  const t = LANG[currentLang];
  const total = CONTENT.projects.length || 2;
  const live = CONTENT.projects.filter(item => item.status === 'ONLINE' || item.status === 'DEPLOYED').length || 2;
  holder.innerHTML = `
    <article class="metric-card reveal"><div class="metric-value">${String(total).padStart(2, '0')}</div><div class="metric-label">${escapeHtml(t['metrics-total'])}</div></article>
    <article class="metric-card reveal"><div class="metric-value">${String(live).padStart(2, '0')}</div><div class="metric-label">${escapeHtml(t['metrics-live'])}</div></article>
    <article class="metric-card reveal"><div class="metric-value">${escapeHtml(t['metrics-cycle-value'])}</div><div class="metric-label">${escapeHtml(t['metrics-cycle'])}</div></article>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  if (!CONTENT.projects.length) {
    grid.innerHTML = `<p class="project-empty">${currentLang === 'ru' ? 'Кейсы загружаются...' : 'Cases are loading...'}</p>`;
    return;
  }
  grid.innerHTML = CONTENT.projects.map((project, idx) => {
    const accent = project.accent === 'violet' ? '#a855f7' : '#00f5ff';
    const type = getLocalized(project.type);
    const summary = getLocalized(project.summary);
    const role = getLocalized(project.role);
    const host = domainFromUrl(project.url);
    const status = project.status || 'ONLINE';
    const preview = UI_STATE.motionMode === 'full'
      ? `<iframe src="${escapeHtml(project.preview || project.url)}" loading="lazy" title="${escapeHtml(project.name)}" sandbox="allow-same-origin allow-scripts"></iframe>`
      : `<div class="project-preview-lite">${escapeHtml(host)}</div>`;
    return `
      <article class="project-card reveal" style="--project-accent:${accent}">
        <div class="project-preview">${preview}</div>
        <div class="project-top">
          <p class="project-num">PROJECT - ${String(idx + 1).padStart(2, '0')}</p>
          <span class="status-chip ${statusClass(status)}">${escapeHtml(status)}</span>
        </div>
        <h3 class="project-title">${escapeHtml(project.name)}</h3>
        <span class="project-type">${escapeHtml(type)}</span>
        <p class="project-desc">${escapeHtml(summary)}</p>
        <p class="project-role">${escapeHtml(role)}</p>
        <div class="project-actions">
          <button class="project-btn" data-case-open="${escapeHtml(project.id)}">${escapeHtml(LANG[currentLang]['project-details'])}</button>
          <a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(LANG[currentLang]['project-open'])} ${escapeHtml(host)}</a>
        </div>
      </article>
    `;
  }).join('');
  grid.querySelectorAll('[data-case-open]').forEach(btn => {
    btn.addEventListener('click', () => openCaseDrawer(btn.dataset.caseOpen));
  });
}

function syncFaqRowHeight(row) {
  const answer = row?.querySelector('.faq-answer');
  if (!answer) return;
  if (row.classList.contains('is-open')) {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  } else {
    answer.style.maxHeight = '0px';
  }
}

function syncFaqLayout() {
  document.querySelectorAll('#faqList .faq-row').forEach(syncFaqRowHeight);
}

function bindFaqAccordion(box) {
  const rows = box.querySelectorAll('.faq-row');
  rows.forEach(row => {
    const toggle = row.querySelector('.faq-toggle');
    const answer = row.querySelector('.faq-answer');
    if (!toggle || !answer) return;
    syncFaqRowHeight(row);
    toggle.addEventListener('click', () => {
      const isOpen = row.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      answer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      syncFaqRowHeight(row);
    });
  });
}

window.addEventListener('resize', syncFaqLayout, { passive: true });

function renderFaq() {
  const box = document.getElementById('faqList');
  if (!box) return;
  const items = CONTENT.faq.length ? CONTENT.faq : [{
    q_ru: 'Q> Сколько занимает разработка?',
    a_ru: 'A> Обычно 1-3 дня. В зависимости от сложности проекта.',
    q_en: 'Q> How long does development take?',
    a_en: 'A> Usually 3-5 days.'
  }];

  function decorateFaqMvp(text) {
    const safeText = escapeHtml(text ?? '');
    const tip = escapeHtml(LANG[currentLang]['faq-mvp-tip'] || '');
    if (!tip) return safeText;
    return safeText.replace(
      /\bMVP\b/g,
      `<span class="skill-tag faq-mvp-tag" data-tooltip="${tip}" aria-label="MVP">MVP</span>`
    );
  }

  box.innerHTML = items.map((item, idx) => {
    const q = currentLang === 'ru' ? item.q_ru : item.q_en;
    const a = currentLang === 'ru' ? item.a_ru : item.a_en;
    const answerId = `faq-answer-${idx + 1}`;
    return `
      <article class="faq-row">
        <button class="faq-toggle" type="button" aria-expanded="false" aria-controls="${answerId}">
          <span class="faq-q">${decorateFaqMvp(q)}</span>
          <span class="faq-arrow" aria-hidden="true"></span>
        </button>
        <div class="faq-answer" id="${answerId}" aria-hidden="true">
          <p class="faq-a">${decorateFaqMvp(a)}</p>
        </div>
      </article>
    `;
  }).join('');
  bindFaqAccordion(box);
  requestAnimationFrame(syncFaqLayout);
}

const caseDrawer = document.getElementById('caseDrawer');
const caseBackdrop = document.getElementById('caseBackdrop');
const caseClose = document.getElementById('caseClose');
const caseDrawerType = document.getElementById('caseDrawerType');
const caseDrawerTitle = document.getElementById('caseDrawerTitle');
const caseDrawerSummary = document.getElementById('caseDrawerSummary');
const caseDrawerRole = document.getElementById('caseDrawerRole');
const caseDrawerChallenge = document.getElementById('caseDrawerChallenge');
const caseDrawerSolution = document.getElementById('caseDrawerSolution');
const caseDrawerOutcomes = document.getElementById('caseDrawerOutcomes');
const caseDrawerStack = document.getElementById('caseDrawerStack');
const caseDrawerLink = document.getElementById('caseDrawerLink');

function drawerBlock(label, text) {
  return `<span class="case-key">${escapeHtml(label)}</span><p>${escapeHtml(text)}</p>`;
}

function openCaseDrawer(caseId) {
  if (!caseDrawer) return;
  const project = CONTENT.projects.find(item => item.id === caseId);
  if (!project) return;
  caseDrawerType.textContent = getLocalized(project.type);
  caseDrawerTitle.textContent = project.name;
  caseDrawerSummary.textContent = getLocalized(project.summary);
  caseDrawerRole.innerHTML = drawerBlock(LANG[currentLang]['case-role'], getLocalized(project.role));
  caseDrawerChallenge.innerHTML = drawerBlock(LANG[currentLang]['case-challenge'], getLocalized(project.challenge));
  caseDrawerSolution.innerHTML = drawerBlock(LANG[currentLang]['case-solution'], getLocalized(project.solution));
  caseDrawerOutcomes.innerHTML = (project.outcomes || []).map(item => `<li>${escapeHtml(getLocalized(item))}</li>`).join('');
  caseDrawerStack.innerHTML = (project.stack || []).map(item => `<span>${escapeHtml(item)}</span>`).join('');
  if (caseDrawerLink) caseDrawerLink.href = project.url;
  caseDrawer.classList.add('open');
  caseDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCaseDrawer() {
  if (!caseDrawer) return;
  caseDrawer.classList.remove('open');
  caseDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

caseClose?.addEventListener('click', closeCaseDrawer);
caseBackdrop?.addEventListener('click', closeCaseDrawer);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeCaseDrawer();
});

const generatorForm = document.getElementById('generatorForm');
const generatorInput = document.getElementById('generatorInput');
const generatorTone = document.getElementById('generatorTone');
const generatorRunBtn = document.getElementById('generatorRunBtn');
const generatorEcho = document.getElementById('generatorEcho');
const generatorOutput = document.getElementById('generatorOutput');
const generatorPresets = document.getElementById('generatorPresets');
let generatorRenderToken = 0;

function generatorKeywords(lang) {
  return lang === 'ru'
    ? ['НАЗВАНИЕ:', 'СУТЬ:', 'ПРОБЛЕМА:', 'MVP:', 'СТЕК:', 'МОНЕТИЗАЦИЯ:']
    : ['NAME:', 'CORE:', 'PROBLEM:', 'MVP:', 'STACK:', 'MONETIZATION:'];
}

function formatGeneratorLine(rawLine, lang) {
  const line = rawLine.trimEnd();
  if (!line) return '&nbsp;';
  const upper = line.toUpperCase();
  for (const key of generatorKeywords(lang)) {
    if (upper.startsWith(key)) {
      const head = line.slice(0, key.length);
      const tail = line.slice(key.length).trimStart();
      return `<span class="generator-key">${escapeHtml(head)}</span>${tail ? ` ${escapeHtml(tail)}` : ''}`;
    }
  }
  return escapeHtml(line);
}

function renderGeneratorPresets() {
  if (!generatorPresets) return;
  const presets = LANG[currentLang]['generator-presets'];
  generatorPresets.innerHTML = presets
    .map(item => `<button type="button" class="preset-btn" data-preset="${escapeHtml(item)}">${escapeHtml(item)}</button>`)
    .join('');
  generatorPresets.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!generatorInput) return;
      generatorInput.value = btn.dataset.preset || '';
      syncGeneratorEcho();
      generatorInput.focus();
    });
  });
}

function setGeneratorOutputPlaceholder() {
  if (!generatorOutput) return;
  generatorOutput.innerHTML = `<span class="generator-output-placeholder">${escapeHtml(LANG[currentLang]['generator-output-placeholder'])}</span>`;
}

function syncGeneratorEcho() {
  if (!generatorEcho) return;
  generatorEcho.textContent = generatorInput?.value || LANG[currentLang]['generator-command-empty'];
}

function setGeneratorLoading(isLoading) {
  if (!generatorRunBtn) return;
  if (isLoading) UI_STATE.generatorState = 'loading';
  else if (UI_STATE.generatorState === 'loading') UI_STATE.generatorState = 'idle';
  generatorRunBtn.disabled = isLoading;
  const label = generatorRunBtn.querySelector('[data-i18n]');
  if (label) label.textContent = isLoading ? LANG[currentLang]['generator-running'] : LANG[currentLang]['generator-run'];
}

function syncGeneratorLanguage() {
  if (!generatorForm) return;
  syncGeneratorEcho();
  renderGeneratorPresets();
  if (UI_STATE.generatorState !== 'done' && UI_STATE.generatorState !== 'error') {
    setGeneratorOutputPlaceholder();
  }
}

async function typeGeneratorResult(text) {
  if (!generatorOutput) return;
  const token = ++generatorRenderToken;
  const lines = text.replace(/\r/g, '').split('\n');
  generatorOutput.innerHTML = '';
  for (const line of lines) {
    if (token !== generatorRenderToken) return;
    const row = document.createElement('div');
    row.innerHTML = formatGeneratorLine(line, currentLang);
    generatorOutput.appendChild(row);
    await new Promise(resolve => setTimeout(resolve, 40));
  }
}

function showGeneratorError(message) {
  if (!generatorOutput) return;
  const prefix = LANG[currentLang]['generator-error-prefix'];
  generatorOutput.innerHTML = `<span class="generator-error">${escapeHtml(`${prefix} ${message}`)}</span>`;
}

if (generatorForm && generatorInput && generatorRunBtn && generatorEcho && generatorOutput) {
  syncGeneratorLanguage();
  generatorInput.addEventListener('input', syncGeneratorEcho);
  generatorForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (UI_STATE.generatorState === 'loading') return;
    const niche = generatorInput.value.trim();
    const tone = generatorTone?.value === 'detailed' ? 'detailed' : 'brief';
    if (!niche || niche.length > 200) {
      UI_STATE.generatorState = 'error';
      showGeneratorError('niche must be 1-200 chars');
      return;
    }
    generatorRenderToken += 1;
    setGeneratorLoading(true);
    generatorOutput.innerHTML = '<span class="generator-loading blink">█</span>';
    try {
      const response = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ niche, lang: currentLang, tone })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || `HTTP ${response.status}`);
      const result = typeof data?.result === 'string' ? data.result.trim() : '';
      if (!result) throw new Error('Empty result');
      UI_STATE.generatorState = 'done';
      await typeGeneratorResult(result);
    } catch (error) {
      UI_STATE.generatorState = 'error';
      showGeneratorError(error instanceof Error ? error.message : 'Request failed');
    } finally {
      setGeneratorLoading(false);
    }
  });
}

const leadForm = document.getElementById('leadForm');
const leadNiche = document.getElementById('leadNiche');
const leadGoal = document.getElementById('leadGoal');
const leadBudget = document.getElementById('leadBudget');

if (leadForm && leadGoal && leadBudget) {
  leadForm.addEventListener('submit', event => {
    event.preventDefault();
    const niche = leadNiche?.value?.trim() || (currentLang === 'ru' ? 'Не указано' : 'Not specified');
    const goal = leadGoal.options[leadGoal.selectedIndex]?.text || '';
    const budget = leadBudget.options[leadBudget.selectedIndex]?.text || '';
    const message = currentLang === 'ru'
      ? `Новый бриф:%0A- Ниша: ${niche}%0A- Цель: ${goal}%0A- Бюджет/этап: ${budget}`
      : `New brief:%0A- Niche: ${niche}%0A- Goal: ${goal}%0A- Budget/stage: ${budget}`;
    const url = `https://t.me/lolyousee?text=${message}`;
    const popup = window.open(url, '_blank', 'noopener');
    if (!popup) window.location.href = url;
  });
}

/* ══════════════════════════════════════════════
   CURSOR
══════════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
if (canUseCustomCursor && cursor && ring) {
  document.documentElement.classList.add('has-custom-cursor');

  let mx = 0, my = 0;
  let hasPointerMove = false;
  cursor.style.opacity = '0';
  ring.style.opacity = '0';

  function revealCursor() {
    if (hasPointerMove) return;
    hasPointerMove = true;
    cursor.style.opacity = '1';
    ring.style.opacity = '1';
    ring.style.left = mx + 'px';
    ring.style.top = my + 'px';
  }

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx+'px'; cursor.style.top = my+'px';
    revealCursor();
  }, {passive:true});

  (function animRing(){
    if (!hasPointerMove) {
      requestAnimationFrame(animRing);
      return;
    }
    const rx = parseFloat(ring.style.left)||0, ry = parseFloat(ring.style.top)||0;
    ring.style.left = (rx+(mx-rx)*.12)+'px';
    ring.style.top  = (ry+(my-ry)*.12)+'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter',()=>{ cursor.style.width='20px';cursor.style.height='20px';cursor.style.borderColor='#ff00aa'; });
    el.addEventListener('mouseleave',()=>{ cursor.style.width='12px';cursor.style.height='12px';cursor.style.borderColor='#00f5ff'; });
  });
} else {
  document.documentElement.classList.remove('has-custom-cursor');
}

/* ══════════════════════════════════════════════
   REVEAL (clip-path)
══════════════════════════════════════════════ */
let revealObserver = null;
function observeRevealElements(root = document) {
  const nodes = root.querySelectorAll('.reveal,.reveal-left');
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    nodes.forEach(el => el.classList.add('visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
      });
    }, {threshold:.12});
  }
  nodes.forEach(el => revealObserver.observe(el));
}
observeRevealElements(document);

/* ══════════════════════════════════════════════
   GLITCH FLICKER
══════════════════════════════════════════════ */
const heroName = document.querySelector('.hero-name');
let lowPerformance = false;

(function performanceProbe() {
  if (!shouldUseHeavyHeroEffects) return;
  const start = performance.now();
  let frames = 0;
  function frame(now) {
    frames += 1;
    if (now - start < 2200) return requestAnimationFrame(frame);
    const fps = frames / ((now - start) / 1000);
    if (fps < 50) {
      lowPerformance = true;
      UI_STATE.motionMode = 'minimal';
      document.documentElement.dataset.motion = 'minimal';
    }
  }
  requestAnimationFrame(frame);
})();

if (shouldUseHeavyHeroEffects && heroName) {
  setInterval(() => {
    const inHeroZone = window.scrollY <= window.innerHeight * 0.8;
    if (!inHeroZone || lowPerformance) return;
    if (Math.random() < .25) {
      heroName.style.textShadow = `${(Math.random()-.5)*8}px 0 #00f5ff,${(Math.random()-.5)*8}px 0 #ff00aa`;
      const s = heroName.querySelector('.see');
      if (s) s.style.textShadow = `${(Math.random()-.5)*8}px 0 #7b61ff`;
      setTimeout(() => {
        heroName.style.textShadow='none';
        const ss=heroName.querySelector('.see');if(ss)ss.style.textShadow='';
      }, 80);
    }
  }, 2400);
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
applyLang('ru');
loadContentData().then(() => {
  buildSkills(currentLang);
  renderSignals();
  renderProcessLog();
  renderProjects();
  renderCaseMetrics();
  renderFaq();
  renderGeneratorPresets();
  observeRevealElements(document);
}).catch(() => {
  buildSkills(currentLang);
  renderSignals();
  renderProcessLog();
  renderProjects();
  renderCaseMetrics();
  renderFaq();
  renderGeneratorPresets();
  observeRevealElements(document);
});
