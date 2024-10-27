/* transformar o menu hamburguer em x */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer .addEventListener('click', () => {
    togglemenu();
});

function togglemenu() {
    const nav = document.querySelector('.nav-responsive');
    console.log(nav);
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

}