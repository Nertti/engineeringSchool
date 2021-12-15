const burger = document.querySelector('.nav__burger');
if (burger) {
    const menu = document.querySelector('.nav__menu');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}