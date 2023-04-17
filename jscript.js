const humbtn = document.querySelector('.hamburguer-img');
const uli = document.querySelector('.menu-list');
const clbtn = document.querySelector('.close-btn');
const nav = document.querySelector('.navigation_bar');
const logo = document.querySelector('.navigation_bar__link');
const lia = document.querySelector('li .li-a');
const lia2 = document.querySelector('li .li-a2');
const lia3 = document.querySelector('li .li-a3');
function displaymenu() {
  nav.classList.replace('navigation_bar', 'nav-menu');
  logo.classList.replace('navigation_bar__link', 'non-visible');
  uli.classList.replace('non-visible', 'visible');
  uli.classList.replace('menu-list', 'ul-menu');
  //first one
  lia.classList.replace('li-a', 'li-a-menu');
  lia2.classList.replace('li-a2', 'li-a-menu');
  lia3.classList.replace('li-a3', 'li-a-menu');
  clbtn.classList.replace('non-visible', 'visible');
  humbtn.classList.add('non-visible');
}
humbtn.addEventListener('click', displaymenu);
function closemenu() {
  nav.classList.replace('nav-menu', 'navigation_bar');
  logo.classList.replace('non-visible', 'navigation_bar__link');
  uli.classList.replace('visible', 'non-visible');
  lia2.classList.replace('li-a-menu', 'li-a2');
  lia3.classList.replace('li-a-menu', 'li-a3');
  clbtn.classList.replace('visible', 'non-visible');
  humbtn.classList.remove('non-visible');
  uli.classList.replace('ul-menu', 'menu-list');
  lia.classList.replace('li-a-menu', 'li-a');
  
}
clbtn.addEventListener('click', closemenu);
uli.addEventListener('click', closemenu);


