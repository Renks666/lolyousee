/* ══════════════════════════════════════════════
   i18n DATA
══════════════════════════════════════════════ */
window.__APP_STARTED__ = true;
const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
const isCoarsePointer = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;

const LANG = {
  ru: {
    'hero-tag':         'Vibe Coder — Портфолио',
    'hero-sub':         'Специализируюсь на вайбкодинге и создаю проекты «под ключ» — от концепции до запуска. Думаю как предприниматель, собираю как архитектор, реализую как инженер.',
    'btn-projects':     'Смотреть проекты',
    'btn-contact':      'Связаться',
    'stat-projects':    'проекта запущено',
    'stat-prod':        'от идеи до прода',
    'scroll-hint':      'SCROLL',
    'nav-about':        'About',
    'nav-stack':        'Stack',
    'nav-projects':     'Projects',
    'nav-contact':      'Contact',
    'nav-btn-work':     'Проекты',
    'nav-btn-contact':  'Связаться',
    'lang-label':       'Язык:',
    'about-label':      'About',
    'about-title':      'КТО Я',
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
    'projects-label':   'Work',
    'projects-title':   'МОИ ПРОЕКТЫ',
    'p1-type':          'E-commerce',
    'p1-desc':          'Интернет-магазин для прямого выкупа одежды и аксессуаров из Китая. Бренды Nike, Gucci, Prada, Dior — напрямую с фабрик. Индивидуальный подход на всех этапах.',
    'p2-type':          'Legal Tech',
    'p2-desc':          'Платформа юридической защиты для профессионального футбола. РФС, UEFA, FIFA, CAS — от контракта до арбитража. Для игроков, клубов, агентов и тренеров.',
    'contact-label':    'Contact',
    'contact-title':    'ПОГОВОРИМ?',
    'contact-tagline':  'Есть идея, проект или задача? Напишите — разберём концепцию, выберем стек, запустим.',
    'idea-label':       'AI Idea Generator',
    'idea-btn':         'Придумай мне проект',
    'idea-loading':     'Генерирую офлайн...',
    'idea-close':       'Закрыть идею',
    'idea-prompt':      'Придумай оригинальную идею для веб-проекта для вайб-кодера. Формат ответа — три строки без markdown: 1) Название проекта, 2) Суть идеи (1-2 предложения), 3) Стек технологий. Без лишних слов.',
    'footer-copy':      '© 2025 — Vibe Coder. All vibes reserved.',
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
    'projects-label':   'Work',
    'projects-title':   'MY PROJECTS',
    'p1-type':          'E-commerce',
    'p1-desc':          'Online store for direct purchasing of clothing and accessories from China. Brands Nike, Gucci, Prada, Dior — directly from factories. Individual approach at every step.',
    'p2-type':          'Legal Tech',
    'p2-desc':          'Legal protection platform for professional football. RFU, UEFA, FIFA, CAS — from contract to arbitration. For players, clubs, agents and coaches.',
    'contact-label':    'Contact',
    'contact-title':    'LET\'S TALK?',
    'contact-tagline':  'Have an idea, project or task? Write me — we\'ll break down the concept, pick the stack, launch it.',
    'idea-label':       'AI Idea Generator',
    'idea-btn':         'Generate Project Idea',
    'idea-loading':     'Generating offline...',
    'idea-close':       'Close idea',
    'idea-prompt':      'Generate an original web project idea for a vibe coder. Response format — three plain text lines, no markdown: 1) Project name, 2) Core idea (1-2 sentences), 3) Tech stack. No extra words.',
    'footer-copy':      '© 2025 — Vibe Coder. All vibes reserved.',
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
  const t = LANG[lang];
  document.documentElement.lang = lang;
  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // About text has a cyan span
  const atEl = document.querySelector('[data-i18n="about-text"]');
  if (atEl) {
    atEl.innerHTML = lang === 'ru'
      ? 'Результат — стильные, чистые и рабочие решения, ориентированные на рост бизнеса. <span style="color:var(--cyan)">Вайбкодинг — это не просто инструмент</span>, это новый способ мышления: когда скорость итерации важнее бюрократии, а качество результата говорит само за себя.'
      : 'The result — stylish, clean, and functional solutions focused on business growth. <span style="color:var(--cyan)">Vibe coding isn\'t just a tool</span>, it\'s a new way of thinking: where iteration speed beats bureaucracy, and the quality of the result speaks for itself.';
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
  document.querySelector('[data-suffix="ч"]') && (lang === 'en'
    ? document.querySelector('[data-suffix="ч"]').setAttribute('data-suffix', 'h')
    : document.querySelector('[data-suffix="h"]')?.setAttribute('data-suffix', 'ч'));
  // Lang toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(b => b.textContent = lang === 'ru' ? 'EN' : 'RU');
  // Skills rebuild
  buildSkills(lang);
  const ideaCloseBtn = document.getElementById('ideaCloseBtn');
  if (ideaCloseBtn) {
    const closeLabel = t['idea-close'];
    ideaCloseBtn.setAttribute('title', closeLabel);
    ideaCloseBtn.setAttribute('aria-label', closeLabel);
  }
  // Retype hero tag
  typeHeroTag(lang);
  // title
  document.title = 'LOLYOUSEE — ' + (lang === 'ru' ? 'Vibe Coder' : 'Vibe Coder');
}

function buildSkills(lang) {
  const list = document.getElementById('skillsList');
  if (!list) return;
  list.innerHTML = '';
  LANG[lang].skills.forEach(s => {
    const el = document.createElement('span');
    el.className = 'skill-tag';
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
  let W,H,DPR=1,mouse={x:-999,y:-999};
  const pts=[];
  function resize(){
    W=canvas.offsetWidth;H=canvas.offsetHeight;DPR=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(W*DPR);canvas.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  window.addEventListener('resize',resize,{passive:true});resize();
  for(let i=0;i<65;i++) pts.push({
    x:Math.random()*W,y:Math.random()*H,
    vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,
    r:Math.random()*2+.8,a:Math.random()*.45+.12,
    color:COLORS[i%COLORS.length],life:Math.random()*180+80,age:Math.random()*180
  });
  function tick(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<130&&d>0){const f=(130-d)/130*.9;p.vx+=(dx/d)*f*.04;p.vy+=(dy/d)*f*.04;}
      p.vx*=.985;p.vy*=.985;p.x+=p.vx;p.y+=p.vy;p.age++;
      if(p.age>p.life||p.x<-20||p.x>W+20||p.y<-20||p.y>H+20){
        p.x=Math.random()*W;p.y=Math.random()*H;p.vx=(Math.random()-.5)*.45;p.vy=(Math.random()-.5)*.45;p.age=0;p.life=Math.random()*180+80;
      }
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.globalAlpha=p.a*(1-p.age/p.life*.4);ctx.fill();
      pts.forEach(q=>{
        const ddx=p.x-q.x,ddy=p.y-q.y,dd=Math.sqrt(ddx*ddx+ddy*ddy);
        if(dd<85&&dd>0){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=p.color;ctx.globalAlpha=(1-dd/85)*.1;ctx.lineWidth=.5;ctx.stroke();}
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
  if (!wrap || !heroEl) return;
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
    setAfterHeroState(true);
  } else {
    isAfterHero = true;
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
   OFFLINE IDEA GENERATOR
══════════════════════════════════════════════ */
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
      'быстро проверять спрос на идеи',
      'собирать первые заявки без сложной настройки',
      'запускать MVP за 1 вечер',
      'показывать кейсы и собирать лиды',
      'упрощать путь клиента до покупки'
    ],
    mechanics: [
      'конструктор лендингов + мини-CRM',
      'публичная витрина + автогенерация контента',
      'канбан задач + AI-ассистент по приоритетам',
      'умные брифы + генератор прототипов',
      'каталог услуг + трекер воронки'
    ],
    stacks: [
      'Stack: Vite, Vanilla JS, LocalStorage, Netlify',
      'Stack: React, Supabase, Tailwind, Vercel',
      'Stack: Next.js, PostgreSQL, Prisma, Docker',
      'Stack: Vue, Firebase, Cloud Functions, Hosting',
      'Stack: SvelteKit, SQLite, Drizzle, Fly.io'
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
      'validate demand fast',
      'collect first leads with minimal setup',
      'ship an MVP in one evening',
      'showcase case studies and convert traffic',
      'shorten the path from visit to purchase'
    ],
    mechanics: [
      'a landing page builder + mini CRM',
      'a public showcase + auto content generation',
      'a kanban planner + AI priority assistant',
      'smart briefs + rapid prototype generator',
      'a service catalog + funnel tracker'
    ],
    stacks: [
      'Stack: Vite, Vanilla JS, LocalStorage, Netlify',
      'Stack: React, Supabase, Tailwind, Vercel',
      'Stack: Next.js, PostgreSQL, Prisma, Docker',
      'Stack: Vue, Firebase, Cloud Functions, Hosting',
      'Stack: SvelteKit, SQLite, Drizzle, Fly.io'
    ]
  }
};

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildOfflineIdea(lang) {
  const bank = OFFLINE_IDEA_BANK[lang] || OFFLINE_IDEA_BANK.en;
  const name = `${pickOne(bank.starts)} ${pickOne(bank.nouns)}`;
  const idea = lang === 'ru'
    ? `${pickOne(bank.mechanics)} ${pickOne(bank.audiences)}, чтобы ${pickOne(bank.goals)}.`
    : `${pickOne(bank.mechanics)} ${pickOne(bank.audiences)} to ${pickOne(bank.goals)}.`;
  const stack = pickOne(bank.stacks);
  return [name, idea, stack];
}

document.getElementById('ideaBtn')?.addEventListener('click', async () => {
  const btn     = document.getElementById('ideaBtn');
  const icon    = document.getElementById('ideaBtnIcon');
  const result  = document.getElementById('ideaResult');
  const textEl  = document.getElementById('ideaText');
  if (!btn || !icon || !result || !textEl) return;
  const labelEl = btn.querySelector('[data-i18n]');
  const t       = LANG[currentLang];

  btn.disabled = true;
  icon.innerHTML = '<span class="spin">◌</span>';
  if (labelEl) labelEl.textContent = t['idea-loading'];
  result.classList.remove('show');

  try {
    await new Promise((resolve) => setTimeout(resolve, 550 + Math.random() * 450));
    const lines = buildOfflineIdea(currentLang);
    textEl.innerHTML = lines.map((l, i) => {
      const clean = l.replace(/^\d+[\)\.]\s*/, '').trim();
      if (i === 0) return `<strong>${clean}</strong>`;
      if (i === 2) return `<span style="color:var(--cyan);font-size:.7rem">${clean}</span>`;
      return clean;
    }).join('<br>');
    result.classList.add('show');
  } catch(e) {
    textEl.innerHTML = currentLang === 'ru'
      ? '<span style="color:var(--magenta)">Ошибка генерации. Попробуйте ещё раз.</span>'
      : '<span style="color:var(--magenta)">Generation error. Please try again.</span>';
    result.classList.add('show');
  }

  btn.disabled = false;
  icon.textContent = '✦';
  if (labelEl) labelEl.textContent = t['idea-btn'];
});

document.getElementById('ideaCloseBtn')?.addEventListener('click', () => {
  document.getElementById('ideaResult')?.classList.remove('show');
});

/* ══════════════════════════════════════════════
   CURSOR
══════════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
if (!isCoarsePointer && !prefersReducedMotion && cursor && ring) {
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx+'px'; cursor.style.top = my+'px';
  }, {passive:true});
  (function animRing(){
    const rx = parseFloat(ring.style.left)||0, ry = parseFloat(ring.style.top)||0;
    ring.style.left = (rx+(mx-rx)*.12)+'px';
    ring.style.top  = (ry+(my-ry)*.12)+'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter',()=>{ cursor.style.width='20px';cursor.style.height='20px';cursor.style.borderColor='#ff00aa'; });
    el.addEventListener('mouseleave',()=>{ cursor.style.width='12px';cursor.style.height='12px';cursor.style.borderColor='#00f5ff'; });
  });
}

/* ══════════════════════════════════════════════
   REVEAL (clip-path)
══════════════════════════════════════════════ */
if (!('IntersectionObserver' in window) || prefersReducedMotion) {
  document.querySelectorAll('.reveal,.reveal-left').forEach(el => el.classList.add('visible'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal,.reveal-left').forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════
   GLITCH FLICKER
══════════════════════════════════════════════ */
const heroName = document.querySelector('.hero-name');
if (!prefersReducedMotion && heroName) {
  setInterval(() => {
    if (Math.random() < .3) {
      heroName.style.textShadow = `${(Math.random()-.5)*8}px 0 #00f5ff,${(Math.random()-.5)*8}px 0 #ff00aa`;
      const s = heroName.querySelector('.see');
      if (s) s.style.textShadow = `${(Math.random()-.5)*8}px 0 #7b61ff`;
      setTimeout(() => {
        heroName.style.textShadow='none';
        const ss=heroName.querySelector('.see');if(ss)ss.style.textShadow='';
      }, 80);
    }
  }, 2000);
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
buildSkills('ru');
