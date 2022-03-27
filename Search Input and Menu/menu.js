const search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}


const menu = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}