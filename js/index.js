$(document).ready(function() {

    let btnMenu = document.querySelectorAll('.menu');
    let btnBack = document.querySelectorAll('.back');
    let headNav = document.querySelector('.header-navigation');
    let sideMenu = document.querySelector('.side-menu');
    let btnMenuItem2 = document.querySelectorAll('.menu-item-link');
    let btnMenuItem3 = document.querySelectorAll('.side-menu-list-1-item-link');
    let searchForm = document.querySelectorAll('.search-form');
    let menu2lv = document.querySelectorAll('.side-menu-list-1');
    let menu3lv = document.querySelectorAll('.side-menu-list-2');
    let backToMenuBtn = document.querySelectorAll('.back-to-menu');
    let backToMainMenuBtn = document.querySelectorAll('.back-to-main-menu');
    let backToMenuLv2Btn = document.querySelectorAll('.back-menu-1');
    let page = document.querySelector('.page-wrapper');
    let productBtn = document.querySelector('.product');
    let aboutBtn = document.querySelectorAll('.about');
    let menuAbout = document.querySelectorAll('.menu-item-about');
    let popup = document.querySelector('.popup');
    let searchBtn = document.querySelector('.search-btn');
    let englishBtn = document.querySelector('.english'),
        ukrainianBtn = document.querySelector('.ukrainian'),
        polishBtn = document.querySelector('.polish'),
        russianBtn = document.querySelector('.russian');

    // Footer position

    if (($('.content').height() < $(window).height())) {
        $('.footer').addClass('fixed');
    } else {
        $('.footer').removeClass('fixed');
    }

    // Popup window of location

    $(popup).addClass('active');
    $(popup).hide();

    $('.location').on('click', function() {
        $(popup).fadeIn(300);
    })

    $('.close-popup').on('click', function() {
        $(popup).hide(300);
    })

    $(window).on('click', function(e) {
        if (e.target == popup) {
            $(popup).hide(300);
        }
    })

    //Tabs
    $('#location-tabs-btns:first-child').addClass('active');
    $('.location-tabs-content-item').hide();
    $('.location-tabs-content-item:first').show();

    $('.tabs-btn').on('click', function() {
        $('.tabs-btn').removeClass('active')
        $(this).addClass('active')
        $('.location-tabs-content-item').hide();
        let activeTab = $(this).find('button').attr('name');
        $(activeTab).fadeIn();
    })


    // Menu 

    $(btnMenu).on('click', () => {
        $(headNav).toggleClass('active');
        $(btnMenu).toggleClass('active');
        $(btnBack).toggleClass('active');
        $(page).toggleClass('open-menu');
    })

    $(productBtn).on('click', () => {
        $(headNav).addClass('active');
        $(btnMenu).removeClass('active');
        $(btnBack).addClass('active');
        $(page).addClass('open-menu');
        $(menuAbout).removeClass('active');
        $(menu2lv).removeClass('active');
        $(menu3lv).removeClass('active');
        $(searchForm).addClass('active')
    })

    // function closeMenu() {
    $(btnBack).on('click', function() {
            $(headNav).toggleClass('active');
            $(btnMenu).toggleClass('active');
            $(btnBack).toggleClass('active');
            $(page).toggleClass('open-menu');
            $(menuAbout).removeClass('active');
            $(searchForm).addClass('active')
            $(menu2lv).removeClass('active');
            $(menu3lv).removeClass('active');
        })
        // }
        // closeMenu();

    //????????????????

    $('.main').on('click', function() {
        $(headNav).removeClass('active');
        $(btnMenu).addClass('active');
        $(btnBack).removeClass('active');
        $(page).removeClass('open-menu');
        $(menuAbout).removeClass('active');
        $(searchForm).removeClass('active')
        $(menu2lv).removeClass('active');
        $(menu3lv).removeClass('active');

        $(ukrainianBtn).addClass('hidden');
        $(polishBtn).addClass('hidden');
        $(russianBtn).addClass('hidden');
    })

    //????????????????

    $(aboutBtn).on('click', () => {
        $(headNav).addClass('active');
        $(btnMenu).removeClass('active');
        $(btnBack).addClass('active');
        $(menuAbout).addClass('active');
        $(page).addClass('open-menu');
    })

    $(btnMenuItem2).on('click', function() {
        $(this).siblings(".side-menu-list-1").toggleClass('active');
        $(searchForm).toggleClass('active')
    })

    $(btnMenuItem3).on('click', () => {
        $(menu3lv).toggleClass('active');
    })

    $(backToMenuBtn).on('click', function() {
        $(this).closest('.side-menu-list-1').removeClass('active');
        $(searchForm).toggleClass('active');

    })

    $(backToMainMenuBtn).on('click', () => {
        $(menuAbout).removeClass('active');

    })

    $(backToMenuLv2Btn).on('click', () => {
        $(menu3lv).toggleClass('active');
    })


    //Focus input search

    $(searchBtn).on('click', function() {
        $('#search-input').focus();
        $(headNav).addClass('active');
        $(btnMenu).removeClass('active');
        $(btnBack).addClass('active');
        $(page).addClass('open-menu');
    })


    //Focus languages

    $(englishBtn).on('click', function() {
        $(ukrainianBtn).toggleClass('hidden');
        $(polishBtn).toggleClass('hidden');
        $(russianBtn).toggleClass('hidden');
    })


    // jquery animate

    let item1 = document.querySelector('.jquery-item-1'),
        item2 = document.querySelector('.jquery-item-2'),
        item3 = document.querySelector('.jquery-item-3');

    const items = [item1, item2, item3];

    function incrementHeight(start, step, delay, stepDelay) {
        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                setTimeout(() => {
                    $(items[i]).animate({
                        height: start + '%',
                    }, 1000);
                    start += step;
                }, delay);
                delay += stepDelay;
            }
        } else {
            console.log('error');
        }
    }
    incrementHeight(50, 25, 1000, 1000);


    // setTimeout(() => {
    //     $(item1).animate({
    //         height: 50 + '%',
    //     }, 1000, function() {});
    // }, 1000);
    // setTimeout(() => {
    //     $(item2).animate({
    //         height: 75 + '%',
    //     }, 1000, function() {});
    // }, 2000);
    // setTimeout(() => {
    //     $(item3).animate({
    //         height: 100 + '%',
    //     }, 1000, function() {});
    // }, 3000);


});