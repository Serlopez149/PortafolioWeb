$(document).ready(function(){
    $('.main_menu ul li a').click(function(event){
      $('.main_menu ul li a').removeClass('active');
      $(this).addClass('active');
      thisAttrHref = $(this).attr('href');
      thisAttrHrefOffset = $(thisAttrHref).offset().top + 50;
      $('html,body').animate({scrollTop:thisAttrHrefOffset});
      event.preventDefault();         
    });
});

$(window).scroll(function() {
  $('.container_row').each(function() {
    containerRowTop = $(this).offset().top;
    if($(document).scrollTop() > containerRowTop){
      thisOfs = $(this).attr('id');
      $('.container_row').removeClass('active');
      ActiveID = $(this).addClass('active').attr('id');
    }

  });

  $('.main_menu ul li').each(function(index, el) {
    thisChildren = $(this).children('a');
    thisChildrenHref = $(this).children('a').attr('href');
    if(thisChildrenHref === '#' +ActiveID){
        $('.main_menu ul li a').removeClass('active');
        $(thisChildren).addClass('active');
    }
  });
});

window.addEventListener("scroll", function(){
  var header = document.querySelector("#header");
  header.classList.toggle("sticky",window.scrollY > 0);
  if(header > 0){
    $('section#header a.logo1').removeClass('Logo1');
    $(sticky).addClass('logo2');
  }
});

/* variable slider */



