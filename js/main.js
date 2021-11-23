const hamburgerButton = document.querySelector('#hamburger-menu-button');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');

let lastScrollPosition = 0;

const toggleMenu = () => {
    nav.classList.toggle('active');
    hamburgerButton.classList.toggle('active')
}

const fn = () => {
    const scrollToTop = document.scrollingElement.scrollTop
    const xvalue = "center";
    const factor = -0.02;
    const yvalue = scrollToTop * factor;
    body.style.backgroundPosition = xvalue + " " + yvalue + "px";

}

const showMenu = () => {
    lastScrollPosition = window.scrollY;
    console.log(lastScrollPosition);
}

window.addEventListener('scroll', showMenu)
body.onscroll = () => fn();
body.addEventListener('gesturechange', fn);
body.addEventListener('scroll', fn);

const userAgent = navigator.userAgent;
