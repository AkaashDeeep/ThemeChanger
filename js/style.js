const openMenu =()=>{
    document.getElementById('list').classList.add('slideMenu');
    document.getElementById('cover').classList.add('fade');
    document.body.style.overflowY = 'hidden';
}
const closeMenu =()=>{
    document.getElementById('list').classList.remove('slideMenu');
    document.getElementById('cover').classList.remove('fade');
    document.body.style.overflowY = 'scroll';
}

const themswitcher = document.querySelector('#themeSwitcher');
themswitcher.addEventListener('change', (e) => {
    setTheme(e.target.value);
});
const setTheme = (theme) =>{
    theme = theme || 'theme1';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    themswitcher.value=theme;
};
const defaultTheme = localStorage.getItem('theme') || 'theme1';
setTheme(defaultTheme);

