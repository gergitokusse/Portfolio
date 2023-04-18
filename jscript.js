const humbtn = document.querySelector('.hamburguer-img');
const uli = document.querySelector('.menu-list');
const clbtn = document.querySelector('.close-btn');
const nav = document.querySelector('.navigation_bar');
const logo = document.querySelector('.navigation_bar__link');
const lia = document.querySelector('li .li-a');
const lia2 = document.querySelector('li .li-a2');
const lia3 = document.querySelector('li .li-a3');
const body = document.querySelector('body');
const main = document.querySelector('.section-one');
function displaymenu() {
  body.className = 'hidde-over-flow';
  main.className = 'add-blur-effect head flex section-one background-white';
  nav.classList.replace('navigation_bar', 'nav-menu');
  logo.classList.replace('navigation_bar__link', 'non-visible');
  uli.classList.replace('non-visible', 'visible');
  uli.classList.replace('menu-list', 'ul-menu');
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
  uli.classList.replace('ul-menu', 'menu-list');
  lia.classList.replace('li-a-menu', 'li-a');
  lia2.classList.replace('li-a-menu', 'li-a2');
  lia3.classList.replace('li-a-menu', 'li-a3');
  clbtn.classList.replace('visible', 'non-visible');
  humbtn.classList.remove('non-visible');
  body.className = 'non';
  main.className = 'head flex section-one background-white';
}
clbtn.addEventListener('click', closemenu);
uli.addEventListener('click', closemenu);

//  Pop up window feature
const btn1 = document.querySelector('.btn-1');
btn1.addEventListener('click', () => {
  const pupmain = document.createElement('div');
  pupmain.className = 'main-popup';
  const container = document.createElement('div');
  container.className = 'pop-up-container';
  container.innerHTML = `
  <div class = "popup-header"
    <h1 class = "h1">Tonic</h1>
    <p class = "close">x</p>
  </div>
  <div class = "popup-lists">
    <p>CANOPY</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>Back End Dev</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>2015</p>
  </div>
  <img class = "my-image" src = "./img/Portfolio.png">
  <div class = "project-describtion">
    <div class = "description-p">
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. </p><br>

      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
      releawn printer took a galley of type and scrambled it 1960s. </p>
    </div>
    <div class = "description-technology">
      <div class = "spans">
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Ruby</p>
        <p>Bootstrap</p>
      </div>
      <div class = "buttons">
        <button>See Live</button>
        <button>See Source</button>
      </div>
    </div>
  </div>
  `;
  pupmain.appendChild(container);
  body.appendChild(pupmain);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    body.removeChild(pupmain);
  });
});

// dynamic content
const projects = [
  {
    projectName: 'Tonic',
    projectDescription: 'This is project description',
    projectImage: '<img src = "./img/tonic-project-desktop.png">',
    projectTechnology: 'list of technology',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
  },
  {
    projectName: 'Multi-Post Stories',
    projectDescription: 'This is project description 2',
    projectImage: '<img src = "./img/tonic-project.png">',
    projectTechnology: 'list of technology of project 2',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
  },
];

const clickbtn = document.querySelectorAll('.card__btn .first-btn');
clickbtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 0) {
      alert(button.id);
    }
  });
});