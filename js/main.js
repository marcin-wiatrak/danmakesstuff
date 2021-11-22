const hamburgerButton = document.querySelector('#hamburger-menu-button');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');

const toggleMenu = () => {
    nav.classList.toggle('active');
    hamburgerButton.classList.toggle('active')
}

const fn = () => {
    const scrollToTop = document.scrollingElement.scrollTop
    const xvalue = "center";
    const factor = -0.04;
    const yvalue = scrollToTop * factor;
    body.style.backgroundPosition = xvalue + " " + yvalue + "px";
    console.log(yvalue);
}


body.onscroll = () => fn();
body.addEventListener('gesturechange', fn);
body.addEventListener('scroll', fn);

const userAgent = navigator.userAgent;
let browserName;

if(userAgent.match(/safari/i)){
    console.log('safari');
    console.log(userAgent);
}