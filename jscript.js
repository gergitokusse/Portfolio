const humbtn = document.querySelector('.hamburguer-img');
const uli = document.querySelector('.menu-list');
const clbtn = document.querySelector('.close-btn');
const nav = document.querySelector('.navigation_bar');
const logo = document.querySelector('.navigation_bar__link');
const lia = document.querySelectorAll('li > *');
function displaymenu() {
  nav.classList.replace('navigation_bar', 'nav-menu');
  uli.classList.replace('non-visible', 'visible');
  uli.classList.replace('menu-list', 'ul-menu');
  lia.classList.replace('li-a', 'li-a-menu');
  clbtn.classList.replace('non-visible', 'visible');
  humbtn.classList.add('non-visible');
  logo.classList.replace('navigation_bar__link', 'non-visible');
}
humbtn.addEventListener('click', displaymenu);
function closemenu() {
  nav.classList.replace('nav-menu', 'navigation_bar');
  uli.classList.replace('visible', 'non-visible');
  uli.classList.replace('ul-menu', 'menu-list');
  lia.classList.remove('li-a-menu');
  clbtn.classList.replace('visible', 'non-visible');
  humbtn.classList.remove('non-visible');
  logo.classList.remove('non-visible');
}
clbtn.addEventListener('click', closemenu);
uli.addEventListener('click', closemenu);