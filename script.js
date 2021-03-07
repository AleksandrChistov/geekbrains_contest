const navbarTogglerElement = document.querySelector('.navbar-toggler');
const topLogoElement = document.querySelector('.navbar-brand');
const headerElement = document.querySelector('.top__header');
const navbarNavElement = document.querySelector('.navbar-nav');
let navItemActiveElement = document.querySelector('.nav-item.active');

navbarTogglerElement.addEventListener('click', () => {
    navbarTogglerElement.classList.toggle('navbar-toggler_active');
    topLogoElement.classList.toggle('navbar-brand_white');
    headerElement.classList.toggle('top__header_dark');
})

navbarNavElement.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
        navItemActiveElement.classList.remove('active');
        const currentNavItemElement = event.target.closest('.nav-item');
        navItemActiveElement = currentNavItemElement;
        navItemActiveElement.classList.add('active');
    }
})
