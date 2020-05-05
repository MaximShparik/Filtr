$(function(){

  $('.container__questions--1').on('click',function(){
    $(this).toggleClass('container__questions-active'),
    $('.container__answer--1').toggleClass('container__answer-active--1')
  });

  $('.container__questions--2').on('click',function(){
    $(this).toggleClass('container__questions-active'),
    $('.container__answer--2').toggleClass('container__answer-active')
  });

  $('.container__questions--3').on('click',function(){
    $(this).toggleClass('container__questions-active'),
    $('.container__answer--3').toggleClass('container__answer-active')
  });

  $('.container__questions--4').on('click',function(){
    $(this).toggleClass('container__questions-active'),
    $('.container__answer--4').toggleClass('container__answer-active')
  });

  $('.description-1').on('click',function(){
    const el = $('.item__description-2')
    if(el.hasClass('description-active')){
      $('.item__description-2').removeClass('description-active')
      $('.item__description-1').toggleClass('description-active')
    } else{
      $('.item__description-1').toggleClass('description-active')
    }
  });

  $('.description-2').on('click',function(){
    const el = $('.item__description-1')
    if(el.hasClass('description-active')){
      $('.item__description-1').removeClass('description-active')
      $('.item__description-2').toggleClass('description-active')
    } else{
      $('.item__description-2').toggleClass('description-active')
    }
  });

});
