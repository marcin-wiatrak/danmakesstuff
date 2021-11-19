const hamburgerButton = document.querySelector('#hamburger-menu-button');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');

const toggleMenu = () => {
    nav.classList.toggle('active');
    hamburgerButton.classList.toggle('active')
}

body.onscroll = () => {
    const scrollToTop = document.scrollingElement.scrollTop
    const xvalue = "center";
    const factor = -0.04;
    const yvalue = scrollToTop * factor;
    body.style.backgroundPosition = xvalue + " " + yvalue + "px";
}