// JavaScript Document
$(document).ready(function(){
    $('.carousel').carousel();
    
    var hide=false;
    $('#main-nav-btn').click(function(){
      $("#top-navigation").height($(window).height()-60);
      $('.navbar-fixed-top .navbar-collapse').slideToggle();
      if(hide==true){
          $('body').css({"overflow-y":"auto"});
          hide=false;
      }else if(hide==false){
          $('body').css({"overflow-y":"hidden"});
          //$(".sticky-navigation").css({'height':"100%"});
          hide=true; 
      }
    });
    $('.dropdown').click(function(e) {
        //$(".navbar-collapse").height($(window).height()-60);
        if (matchMedia('(max-width: 990px)').matches){
            $(this).find('.dropdown-menu').slideToggle();
            $("#top-navigation").height($(window).height()-60);
        }
    });
    
    $('.dropdown').mouseover(function(e){
        if (matchMedia('(min-width: 991px)').matches){
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }
    });
    $('.dropdown').mouseout(function(e){
        if (matchMedia('(min-width: 991px)').matches){
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        }
    });
    $('.dropdown2').mouseover(function(e){
        if (matchMedia('(min-width: 991px)').matches){
            $(this).find('.dropdown-menu2').stop(true, true).delay(200).fadeIn(500);
        }
    });
    $('.dropdown2').mouseout(function(e){
        if (matchMedia('(min-width: 991px)').matches){
            $(this).find('.dropdown-menu2').stop(true, true).delay(200).fadeOut(500);
        }
    });
    //drop down menu control END
});