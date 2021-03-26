$(document).ready(function() {

    let btnMenu = document.querySelectorAll('.menu');
    let btnBack = document.querySelectorAll('.back');
    let headNav = document.querySelector('.header-navigation');
    let btnMenuItem2 = document.querySelectorAll('.menu-item-link');
    let btnMenuItem3 = document.querySelectorAll('.side-menu-list-1-item-link');
    let searchForm = document.querySelectorAll('.search-form')
    let menu2lv = document.querySelectorAll('.side-menu-list-1')
    let menu3lv = document.querySelectorAll('.side-menu-list-2')
    let backToMenuBtn = document.querySelectorAll('.back-to-menu');
    let backToMainMenuBtn = document.querySelectorAll('.back-to-main-menu');
    let backToMenuLv2Btn = document.querySelectorAll('.back-menu-1');
    let page = document.querySelectorAll('.page-wrapper')
    let productBtn = document.querySelector('.product')
    let aboutBtn = document.querySelectorAll('.about')
    let menuAbout = document.querySelectorAll('.menu-item-about')

    // Footer position

    if (($('.content').height() < $(window).height())) {
        $('.footer').addClass('fixed');
    } else {
        $('.footer').removeClass('fixed');
    }

    // Popup window of location

    $('.popup-wrapper').addClass('active');
    $('.popup-wrapper').hide();

    $('.location').on('click', function() {
        $('.popup-wrapper').fadeIn(300);
    })

    $('.close-popup').on('click', function() {
        $('.popup-wrapper').hide(300);
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

    $(btnBack).on('click', () => {
        $(headNav).toggleClass('active');
        $(btnMenu).toggleClass('active');
        $(btnBack).toggleClass('active');
        $(page).toggleClass('open-menu');
        $(menuAbout).removeClass('active');
        $(searchForm).addClass('active')

        $(menu2lv).removeClass('active');
        $(menu3lv).removeClass('active');
    })

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


    // jquery animate


    $('.jquery-item-1').animate({
        height: 50 + '%',
    }, 2000, function() {});
    $('.jquery-item-2').animate({
        height: 75 + '%',
    }, 2500, function() {});
    $('.jquery-item-3').animate({
        height: 100 + '%',
    }, 3000, function() {});


});