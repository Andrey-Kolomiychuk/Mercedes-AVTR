$(function(){
    $('.design-slider').slick({
        dots: false,
        sliderToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">', 
        responsive: [
            {
              breakpoint: 1001,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 700,
              settings: {
                centerMode: true,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                   centerMode: true,
                variableWidth: false,
                sliderToShow: 1,

              }
            }
          ]
    });
});

$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-btn-active');
    $('.menu').toggleClass('menu__active')
    $('.header__logo').toggleClass('header__logo-active')
});

$('.menu__link').on('click', function(e){
    $('.menu-btn').toggleClass('menu-btn-active');
    $('.menu').toggleClass('menu__active')
    $('.header__logo').toggleClass('header__logo-active')
});

$('.premier__btn').on('click', function(e){
  $('.premier__inner-more').toggleClass('premier__inner-active');
});

function changeText(ev) {
  if(ev.getAttribute('data-show') === "true") {
      ev.innerText = "More"
      ev.setAttribute('data-show', "false"); 
  }
  else {
      ev.innerText = "Less"
      ev.setAttribute('data-show', "true"); 
  }
}