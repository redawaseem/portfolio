const navSlide = () => {
    const burger = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.navBar');
    burger.addEventListener('click', () => {
        nav.classList.toggle('navBar-active');
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();