/********************************cursor ********************************/
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})


/********************************apparition au scroll********************************/
function observeSection(id) {
    const sections = document.querySelectorAll(`#${id}`);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "-300px"
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

observeSection("about");
observeSection("services");
observeSection("work");
observeSection("contact");


/********************************apparition loader********************************/
const navbar = document.querySelector('.navbar');
const fadeInElements = document.querySelectorAll('.home_loading_animation');

window.addEventListener('load', () => {
    navbar.classList.add('fadeIn');
    
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('loading_animation');
        }, 100 * (index + 1));
    });
});

const h1Element = document.querySelector('h1');
const h2Element = document.querySelector('h2');
const h3Element = document.querySelector('h3');
const pElement = document.querySelector('p');

let animationDelay = 500;

h1Element.classList.add('fadeIn');
h1Element.style.animationDelay = `${animationDelay}ms`;
animationDelay += 200; // add delay of 200ms

h2Element.classList.add('fadeIn');
h2Element.style.animationDelay = `${animationDelay}ms`;
animationDelay += 200; // add delay of 200ms

h3Element.classList.add('fadeIn');
h3Element.style.animationDelay = `${animationDelay}ms`;
animationDelay += 200; // add delay of 200ms

pElement.classList.add('fadeIn');
pElement.style.animationDelay = `${animationDelay}ms`;


window.addEventListener('load', function() {
    setTimeout(function() {
        var emailDiv = document.querySelector('.email');
        var reseausociauxDiv = document.querySelector('#réseau_sociaux');
        emailDiv.style.opacity = 1;
        reseausociauxDiv.style.opacity = 1;
    }, 1800);
});

