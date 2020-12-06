const hamburger = document.querySelector('#hamburger');
const navbarLink = document.querySelector('.navbar_link');


hamburger.addEventListener('click', () => {
    navbarLink.classList.toggle('show');
});



