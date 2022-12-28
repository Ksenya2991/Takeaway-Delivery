const scrollToTop = document.querySelector('.scroll-back');

window.addEventListener('scroll', () => {
    if (window.scrollY > 900) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
})


const menuButton = document.querySelector('.burger');
const menuList = document.querySelector('.list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
})