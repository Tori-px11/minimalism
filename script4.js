const scrollTop = document.querySelector('.scroll-top');
    
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});