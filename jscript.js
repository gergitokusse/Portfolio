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

// dynamic content
const projects = [
  {
    projectName: `
    <h1>Tonic</h1>
    <p class = "close">x</p>`,
    listoficon: `    
    <p>CANOPY</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>Back End Dev</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>2015</p>`,
    projectDescription: `
    
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
    `,
    projectImage: '<img class = "my-image" src = "./img/Portfolio.png">',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
    projectnav: `
    <button  disabled>Privouse project</button>
    <button>Next project</button>
    `,
  },
  {
    projectName: `Multi-Post Stories</h1>
    <p class = "close">x</p>`,
    listoficon: `    
    <p>CANOPY</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>Back End Dev</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>2015</p>`,
    projectDescription: `
    
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
    `,
    projectImage: '<img class = "my-image" src = "./img/multi-post-stories.png">',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
    projectnav: `
    <button>Privouse project</button>
    <button>Next project</button>
    `,
  },
  {
    projectName: `
    <h1>Tonic</h1>
    <p class = "close">x</p>`,
    listoficon: `    
    <p>CANOPY</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>Back End Dev</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>2015</p>`,
    projectDescription: `
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
    `,
    projectImage: '<img class = "my-image" src = "./img/tonic-orange.png">',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
    projectnav: `
    <button  disabled>Privouse project</button>
    <button>Next project</button>
    `,
  },
  {
    projectName: `
    <h1>Multi-Post Stories</h1>
    <p class = "close">x</p>`,
    listoficon: `    
    <p>CANOPY</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>Back End Dev</p>
    <img src = "./img/counter.png" width = 10 height = 10>
    <p>2015</p>`,
    projectDescription: `
    
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
    `,
    projectImage: '<img class = "my-image" src = "./img/prof-art-project.png">',
    projectLinktolive: '<a herf = "index.html">Link to Live</a>',
    projectlinktosource: '<a herf = "index.html">Link to Live</a>',
    projectnav: `
    <button  disabled>Privouse project</button>
    <button>Next project</button>
    `,
  },
];

const clickbtn = document.querySelectorAll('.card__btn .first-btn');
clickbtn.forEach((button) => {
  button.addEventListener('click', () => {
    const pupmain = document.createElement('div');
    pupmain.className = 'main-popup';
    const container = document.createElement('div');
    container.className = 'pop-up-container';
    const divhead = document.createElement('div');
    divhead.className = 'popup-header';
    divhead.innerHTML = projects[button.id].projectName;

    const prolist = document.createElement('div');
    prolist.className = 'popup-lists';
    prolist.innerHTML = projects[button.id].listoficon;

    const projectimg = document.createElement('div');
    projectimg.className = 'my-image';
    projectimg.innerHTML = projects[button.id].projectImage;

    const prodec = document.createElement('div');
    prodec.className = 'project-describtion';
    prodec.innerHTML = projects[button.id].projectDescription;

    const pronav = document.createElement('div');
    pronav.className = 'project-navigation';
    pronav.innerHTML = projects[button.id].projectnav;
    container.appendChild(divhead);
    container.appendChild(prolist);
    container.appendChild(projectimg);
    container.appendChild(prodec);
    pupmain.appendChild(container);
    body.appendChild(pupmain);

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      body.removeChild(pupmain);
    });
  });
});