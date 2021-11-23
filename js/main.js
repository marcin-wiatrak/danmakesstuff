const hamburgerButton = document.querySelector('#hamburger-menu-button');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const scrollBtn = document.querySelector('.scroll-top-btn');
const headerHeight = header.style.height;

let lastScrollPosition = 0;
let previousScroll = window.scrollY || document.scrollTop;
let currentScroll;
let direction = 0;
let previousDirection = 0;
let isMenuOpen = false;

const toggleHeader = (direction, currentScroll) => {
  if (direction === 2 && currentScroll > headerHeight) {
    //replace 52 with the height of your header in px

    header.classList.add('hide');
    previousDirection = direction;
  } else if (direction === 1) {
    header.classList.remove('hide');
    previousDirection = direction;
  }
};

const checkScroll = () => {
  if (isMenuOpen) {
    return;
  }
  currentScroll = window.scrollY || document.scrollTop;
  if (currentScroll > previousScroll) {
    //scrolled up
    direction = 2;
  } else if (currentScroll < previousScroll) {
    //scrolled down
    direction = 1;
  }

  if (direction !== previousDirection) {
    toggleHeader(direction, currentScroll);
  }

  previousScroll = currentScroll;
};

const toggleMenu = () => {
  nav.classList.toggle('active');
  hamburgerButton.classList.toggle('active');
};

const fn = () => {
  const scrollToTop = document.scrollingElement.scrollTop;
  const xvalue = 'center';
  const factor = -0.02;
  const yvalue = scrollToTop * factor;
  body.style.backgroundPosition = xvalue + ' ' + yvalue + 'px';
};

const changeMenuStatus = () => {
  isMenuOpen = !isMenuOpen;
};

const scrollToTop = () => {
  window.scroll(0, 0);
};

const toggleBtnVisibility = () => {
  if (!window.scrollY) {
    scrollBtn.classList.remove('active');
  } else if (window.scrollY > 500) {
    scrollBtn.classList.add('active');
  }
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('scroll', toggleBtnVisibility);
body.onscroll = () => fn();
body.addEventListener('gesturechange', fn);
body.addEventListener('scroll', fn);
hamburgerButton.addEventListener('click', changeMenuStatus);
scrollBtn.addEventListener('click', scrollToTop);

const userAgent = navigator.userAgent;
