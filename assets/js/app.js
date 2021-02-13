AOS.init();

//Burger

let icon_manu = document.querySelector('.icon-manu'),
    manu_body = document.querySelector('.header-nav');

icon_manu.addEventListener('click', ()=>{
    icon_manu.classList.toggle('_active');
    manu_body.classList.toggle('_active');
});

//Preloader

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};