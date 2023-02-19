const preloader = document.querySelector('[data-preloader]');
window.addEventListener('load', ()=>{
    preloader.classList.add('remove');
});


/**
 * Ajouter les evenements sur plusieurs elements
 */

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
        
    }
}


/**
 * Declenchement de la navbar en mode mobile
 */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');


const togglerNav = function(){
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}

addEventOnElements(navTogglers, "click", togglerNav);


/**
 * Header
 */

const header = document.querySelector('[data-header]');
window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ?  "add": "remove"]("active");

});