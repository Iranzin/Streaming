const header = document.querySelector('header');
document.addEventListener('scroll', ()=> {
    if (scrollY > 50) {
        header.classList.add('onScroll');
    } else {
        header.classList.remove('onScroll');
    }
});