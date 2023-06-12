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
    projectName: 'Tonic',
    listoficon: {
      l1: 'CANOPY',
      l2: './img/counter.png',
      l3: 'Back End Dev',
      l4: './img/counter.png',
      l5: '2015',
    },
    projectDescription: {
      description1: {
        p1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        p2: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      },
      description2: {
        spans: {
          s1: 'HTML',
          s2: 'CSS',
          s3: 'Javascript',
          s4: 'Ruby',
          s5: 'Bootstrap',
        },
        buttons: {
          btn1: 'See Live',
          btn2: 'See Source',
        },
      },
    },
    projectImage: './img/Portfolio.png',
    projectLinktolive: 'https://gergitokusse.github.io/Portfolio-setup-and-mobile-first/',
    projectlinktosource: 'https://github.com/gergitokusse/Portfolio-setup-and-mobile-first',
    pronav: {
      buttons: {
        btn1: 'Privouse Project',
        btn2: 'Next Project',
      },
    },
  },
  {
    projectName: 'Multi-Post Stories',
    listoficon: {
      l1: 'CANOPY',
      l2: './img/counter.png',
      l3: 'Back End Dev',
      l4: './img/counter.png',
      l5: '2015',
    },
    projectDescription: {
      description1: {
        p1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        p2: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      },
      description2: {
        spans: {
          s1: 'HTML',
          s2: 'CSS',
          s3: 'Javascript',
          s4: 'Ruby',
          s5: 'Bootstrap',
        },
        buttons: {
          btn1: 'See Live',
          btn2: 'See Source',
        },
      },
    },
    projectImage: './img/multi-post-stories.png',
    projectLinktolive: 'https://gergitokusse.github.io/Portfolio-setup-and-mobile-first/',
    projectlinktosource: 'https://github.com/gergitokusse/Portfolio-setup-and-mobile-first',
    pronav: {
      buttons: {
        btn1: 'Privouse Project',
        btn2: 'Next Project',
      },
    },
  },
  {
    projectName: 'Tonic',
    listoficon: {
      l1: 'CANOPY',
      l2: './img/counter.png',
      l3: 'Back End Dev',
      l4: './img/counter.png',
      l5: '2015',
    },
    projectDescription: {
      description1: {
        p1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        p2: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      },
      description2: {
        spans: {
          s1: 'HTML',
          s2: 'CSS',
          s3: 'Javascript',
          s4: 'Ruby',
          s5: 'Bootstrap',
        },
        buttons: {
          btn1: 'See Live',
          btn2: 'See Source',
        },
      },
    },
    projectImage: './img/tonic-orange.png',
    projectLinktolive: 'https://gergitokusse.github.io/Portfolio-setup-and-mobile-first/',
    projectlinktosource: 'https://github.com/gergitokusse/Portfolio-setup-and-mobile-first',
    pronav: {
      buttons: {
        btn1: 'Privouse Project',
        btn2: 'Next Project',
      },
    },
  },
  {
    projectName: 'Multi-Post Stories',
    listoficon: {
      l1: 'CANOPY',
      l2: './img/counter.png',
      l3: 'Back End Dev',
      l4: './img/counter.png',
      l5: '2015',
    },
    projectDescription: {
      description1: {
        p1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        p2: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      },
      description2: {
        spans: {
          s1: 'HTML',
          s2: 'CSS',
          s3: 'Javascript',
          s4: 'Ruby',
          s5: 'Bootstrap',
        },
        buttons: {
          btn1: 'See Live',
          btn2: 'See Source',
        },
      },
    },
    projectImage: './img/prof-art-project.png',
    projectLinktolive: 'https://gergitokusse.github.io/Portfolio-setup-and-mobile-first/',
    projectlinktosource: 'https://github.com/gergitokusse/Portfolio-setup-and-mobile-first',
    pronav: {
      buttons: {
        btn1: 'Privouse Project',
        btn2: 'Next Project',
      },
    },
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

    const headercontent = document.createElement('h1');
    headercontent.innerHTML = projects[button.id].projectName;

    const closebtn = document.createElement('p');
    closebtn.className = 'close';
    closebtn.innerHTML = 'X';

    divhead.appendChild(headercontent);
    divhead.appendChild(closebtn);
    container.appendChild(divhead);

    const prolist = document.createElement('div');
    prolist.className = 'popup-lists';

    const prolistp1 = document.createElement('p');
    prolistp1.textContent = projects[button.id].listoficon.l1;
    const prolistp2 = document.createElement('img');
    prolistp2.src = projects[button.id].listoficon.l2;
    const prolistp3 = document.createElement('p');
    prolistp3.textContent = projects[button.id].listoficon.l3;
    const prolistp4 = document.createElement('img');
    prolistp4.src = projects[button.id].listoficon.l4;
    const prolistp5 = document.createElement('p');
    prolistp5.textContent = projects[button.id].listoficon.l5;

    prolist.appendChild(prolistp1);
    prolist.appendChild(prolistp2);
    prolist.appendChild(prolistp3);
    prolist.appendChild(prolistp4);
    prolist.appendChild(prolistp5);
    container.appendChild(prolist);

    const proimg = document.createElement('img');
    proimg.className = 'my-image';
    proimg.src = projects[button.id].projectImage;
    container.appendChild(proimg);

    const prodec = document.createElement('div');
    prodec.className = 'project-describtion';
    const desc1 = document.createElement('div');
    desc1.className = 'description-p';
    prodec.appendChild(desc1);

    const desc1p1 = document.createElement('p');
    desc1p1.innerHTML = projects[button.id].projectDescription.description1.p1;
    const desc1p2 = document.createElement('p');
    desc1p2.innerHTML = projects[button.id].projectDescription.description1.p2;
    desc1.appendChild(desc1p1);
    desc1.appendChild(desc1p2);

    const desc2 = document.createElement('div');
    desc2.className = 'description-technology';
    prodec.appendChild(desc2);
    const desct1 = document.createElement('div');
    desct1.className = 'spans';
    desc2.appendChild(desct1);

    const desct1p1 = document.createElement('p');
    desct1p1.innerHTML = projects[button.id].projectDescription.description2.spans.s1;
    const desct1p2 = document.createElement('p');
    desct1p2.innerHTML = projects[button.id].projectDescription.description2.spans.s2;
    const desct1p3 = document.createElement('p');
    desct1p3.innerHTML = projects[button.id].projectDescription.description2.spans.s3;
    const desct1p4 = document.createElement('p');
    desct1p4.innerHTML = projects[button.id].projectDescription.description2.spans.s4;
    const desct1p5 = document.createElement('p');
    desct1p5.innerHTML = projects[button.id].projectDescription.description2.spans.s5;
    desct1.appendChild(desct1p1);
    desct1.appendChild(desct1p2);
    desct1.appendChild(desct1p3);
    desct1.appendChild(desct1p4);
    desct1.appendChild(desct1p5);

    const desct2 = document.createElement('div');
    desct2.className = 'buttons';
    desc2.appendChild(desct2);

    const a1 = document.createElement('a');
    a1.innerHTML = projects[button.id].projectDescription.description2.buttons.btn1;
    a1.href = projects[button.id].projectLinktolive;
    desct2.appendChild(a1);
    const a2 = document.createElement('a');
    a2.innerHTML = projects[button.id].projectDescription.description2.buttons.btn2;
    a2.href = projects[button.id].projectlinktosource;

    desct2.appendChild(a1);
    desct2.appendChild(a2);
    container.appendChild(prodec);

    const pronav = document.createElement('div');
    pronav.className = 'project-navigation';
    const pronavbt1 = document.createElement('button');
    pronavbt1.innerHTML = projects[button.id].pronav.buttons.btn1;
    const pronavbt2 = document.createElement('button');
    pronavbt2.innerHTML = projects[button.id].pronav.buttons.btn2;
    pronav.appendChild(pronavbt1);
    pronav.appendChild(pronavbt2);

    container.appendChild(pronav);
    pupmain.appendChild(container);
    body.appendChild(pupmain);

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      body.removeChild(pupmain);
    });
  });
});

// form validation feature
const form = document.querySelector('form');
const email = document.getElementById('mail');
const nameval = document.getElementById('name');
const messageval = document.getElementById('message');
const emailError = document.querySelector('.erroremail');
const nameerror = document.querySelector('.errorname');
const messageerror = document.querySelector('.errormessage');
// parsing data from local storage
const storage = JSON.parse(localStorage.getItem('LocalData'));
if (storage !== null) {
  nameval.value = storage.Name;
  email.value = storage.Email;
  messageval.value = storage.Message;
}
function showError() {
  // name validation
  if (nameval.validity.valueMissing) {
    nameerror.innerHTML = 'Name filed can"t be empty!!!.';
    nameerror.className = 'error';
  } else if (nameval.value.match('[0-9]+')) {
    nameerror.innerHTML = 'Name can not be have numeric !!!';
    nameerror.className = 'error';
  } else {
    nameerror.innerHTML = '';
  }
  // email validation
  if (email.validity.valueMissing) {
    emailError.innerHTML = 'Email filed can"t be empty!!!.';
    emailError.className = 'error';
  } else if (email.validity.typeMismatch) {
    emailError.innerHTML = 'Entered value needs to be an email address !!!.';
    emailError.className = 'error';
  } else if (email.value.match('[A-Z]+')) {
    emailError.innerHTML = 'It is not valide email, all letter should be in lower case !!!.';
    emailError.className = 'error';
  } else {
    emailError.innerHTML = '';
  }
  // validate message
  if (messageval.validity.valueMissing) {
    messageerror.innerHTML = 'Message filed can"t be empty!!!.';
    messageerror.className = 'error';
  } else {
    messageerror.innerHTML = '';
  }
}
// local storage
const mylocaldata = { Name: nameval.value, Email: email.value, Message: messageval.value };
const ls = JSON.stringify(mylocaldata);
localStorage.setItem('LocalData', ls);
// name event listner
nameval.addEventListener('input', () => {
  let existing = localStorage.getItem('LocalData');
  existing = existing ? JSON.parse(existing) : {};
  existing.Name = nameval.value;
  localStorage.setItem('LocalData', JSON.stringify(existing));

  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});
// email event listner
email.addEventListener('input', () => {
  let existing = localStorage.getItem('LocalData');
  existing = existing ? JSON.parse(existing) : {};
  existing.Email = email.value;
  localStorage.setItem('LocalData', JSON.stringify(existing));

  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});
// message event listner
messageval.addEventListener('input', () => {
  let existing = localStorage.getItem('LocalData');
  existing = existing ? JSON.parse(existing) : {};
  existing.Message = messageval.value;
  localStorage.setItem('LocalData', JSON.stringify(existing));

  if (email.validity.valid) {
    messageerror.textContent = '';
    messageerror.className = 'error';
  } else {
    showError();
  }
});
// local storage

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

// end of form validation
