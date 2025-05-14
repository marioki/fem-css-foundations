const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const body = document.querySelector('.body');

menu.addEventListener('click', () => {
    nav.classList.add('nav--visible');
    closeButton.classList.add('close-visible');
    menu.classList.add('menu-hide');
    body.classList.add('body--no-scroll');

});

closeButton.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    closeButton.classList.remove('close-visible');
    menu.classList.remove('menu-hide');
    body.classList.remove('body--no-scroll');
})