
const pages = ['home', 'faq', 'rules', 'images'];

const navLabels = {
    de: {home:'Startseite',faq:'FAQ',rules:'Regeln',images:'Bilder'},
    en: {home:'Home',faq:'FAQ',rules:'Rules',images:'Images'},
    nl: {home:'Home',faq:'FAQ',rules:'Regels',images:'Foto\'s'}
};

const flags = {
    de: '🇩🇪',
    en: '🇬🇧',
    nl: '🇳🇱'
};

function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if(saved) return saved;

    const lang = navigator.language.toLowerCase();

    if(lang.startsWith('de')) return 'de';
    if(lang.startsWith('nl')) return 'nl';

    return 'en';
}

let currentLang = detectLanguage();

function switchLanguage() {
    if(currentLang === 'de') currentLang = 'en';
    else if(currentLang === 'en') currentLang = 'nl';
    else currentLang = 'de';

    localStorage.setItem('lang', currentLang);
    render();
}

function lookup(key) {
    return key.split('.').reduce((obj, part) => (obj == null ? undefined : obj[part]), translations[currentLang]);
}

function applyTranslations(container) {
    container.querySelectorAll('[data-i18n]').forEach(el => {
        const value = lookup(el.getAttribute('data-i18n'));
        if (value !== undefined) el.textContent = value;
    });

    container.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const value = lookup(el.getAttribute('data-i18n-alt'));
        if (value !== undefined) el.setAttribute('alt', value);
    });
}

async function render() {
    const hash = location.hash.replace('#','') || 'home';
    const page = pages.includes(hash) ? hash : 'home';

    document.documentElement.lang = currentLang;

    const content = document.getElementById('content');

    try {
        const response = await fetch(`content/${page}.html`);
        if (!response.ok) throw new Error(`Failed to load page: ${response.status}`);
        content.innerHTML = await response.text();
    } catch (err) {
        content.innerHTML = '<p>Sorry, this page could not be loaded.</p>';
        console.error(err);
        return;
    }

    applyTranslations(content);

    if (page === 'home') {
        const poster = document.getElementById('poster-img');
        if (poster) poster.src = `img/poster.webp?v=${POSTER_VERSION}`;
    }

    const nav = document.getElementById('nav');
    nav.innerHTML = '';

    pages.forEach(p => {
        const link = document.createElement('a');
        link.href = `#${p}`;
        link.textContent = navLabels[currentLang][p];
        if (p === page) link.setAttribute('aria-current', 'page');
        nav.appendChild(link);
    });

    const langBtn = document.createElement('a');
    langBtn.href = '#';
    langBtn.className = 'lang';
    langBtn.textContent = flags[currentLang];
    langBtn.onclick = (e) => {
        e.preventDefault();
        switchLanguage();
    };

    nav.appendChild(langBtn);
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
