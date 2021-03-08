const navbarTogglerElement = document.querySelector('.navbar-toggler');
const topLogoElement = document.querySelector('.navbar-brand');
const headerElement = document.querySelector('.top__header');
const navbarNavMobileElement = document.querySelector('.navbar-nav_mobile');
const navbarNavDesktopElement = document.querySelector('.navbar-nav_desktop');
let navItemActiveMobileElement = document.querySelector('.navbar-nav_mobile .nav-item.active');
let navItemActiveDesktopElement = document.querySelector('.navbar-nav_desktop .nav-item.active');

navbarTogglerElement.addEventListener('click', () => {
    navbarTogglerElement.classList.toggle('navbar-toggler_active');
    topLogoElement.classList.toggle('navbar-brand_white');
    headerElement.classList.toggle('top__header_dark');
})

navbarNavMobileElement.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) {
        navItemActiveMobileElement.classList.remove('active');
        const currentNavItemElement = event.target.closest('.nav-item');
        navItemActiveMobileElement = currentNavItemElement;
        navItemActiveMobileElement.classList.add('active');
    }
})

navbarNavDesktopElement.addEventListener('click', (event) => {
    if(event.target.classList.value === 'nav-link') {
        navItemActiveDesktopElement.classList.remove('active');
        const currentNavItemElement = event.target.parentElement;
        navItemActiveDesktopElement = currentNavItemElement;
        navItemActiveDesktopElement.classList.add('active');
    }
})
