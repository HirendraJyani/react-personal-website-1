


const hamburger = document.getElementById('hamburger');
const navul =document.getElementById('nav__components');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
});