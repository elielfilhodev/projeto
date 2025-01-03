const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


sr.reveal('.conteudo',{delay:300, origin: 'bottom'});
sr.reveal('.hero-img',{delay:550, origin: 'bottom'});
sr.reveal('.btn-1',{delay:700, origin: 'bottom'});
sr.reveal('.btn-2',{delay:1500, origin: 'bottom'});
sr.reveal('.btn-3',{delay:2200, origin: 'bottom'});