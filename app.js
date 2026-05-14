
const pages = ['home', 'faq', 'rules', 'images'];

const labels = {
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

async function render() {
    const hash = location.hash.replace('#','') || 'home';

    const response = await fetch(`content/${currentLang}_${hash}.html`);
    const html = await response.text();

    document.getElementById('content').innerHTML = html;

    const nav = document.getElementById('nav');
    nav.innerHTML = '';

    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = `#${page}`;
        link.textContent = labels[currentLang][page];
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
