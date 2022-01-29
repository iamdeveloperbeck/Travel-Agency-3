document.addEventListener('DOMContentLoaded', function() {

    const toggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-overlay');
    const searchButton = document.querySelector('.nav-search-button');
    // const searchButton2 = document.querySelector('.nav-search-button2');
    const search = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const overlayP = document.querySelector('.page-overlay');
    const cartShow = document.querySelector('.nav-cart-button');
    // const cartShow2 = document.querySelector('.nav-cart-button2');
    const cart = document.querySelector('.cart-wrapper-container');
    const overlayC = document.querySelector('.e-commerce-wrapper');
    const cartClose = document.querySelector('.cart-close-button');

    toggle.addEventListener('click', () => {
        if (toggle.classList.contains('active')) {
            toggle.classList.remove('active');
            menu.classList.remove('show');
        }
        else {
            toggle.classList.add('active');
            menu.classList.add('show');
        }
    }); 

    searchButton.addEventListener('click', () => {
        search.classList.add('show');
        overlayP.classList.add('show');
    });

    // searchButton2.addEventListener('click', () => {
    //     // search.classList.add('show');
    //     // overlayP.classList.add('show');
    // });

    searchClose.addEventListener('click', () => {
        search.classList.remove('show');
        overlayP.classList.remove('show');
    });

    cartShow.addEventListener('click', () => {
        cart.classList.add('show');
        overlayC.classList.add('show');
    });

    cartClose.addEventListener('click', () => {
        cart.classList.remove('show');
        overlayC.classList.remove('show');
    });

    window.onscroll = () => {
        if (window.scrollY > 0) {
            document.querySelector('.navbar').classList.add('scrollOn');
        }
        else {
            document.querySelector('.navbar').classList.remove('scrollOn');
        }
    }

});