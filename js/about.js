

$(function() {

     var swiper = new Swiper('.swiper2', {
      speed: 2000,
      slidesPerView: 10,
      spaceBetween: 0,
      slidesPerGroup: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      // effect : 'fade',



      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletElement : 'a',
        // 小圆点默认的样式
        bulletClass : 'my-bullet',
        // 当前元素
        bulletActiveClass: 'my-bullet-active',        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
              slidesPerView: 4,
              slidesPerGroup: 1,
        breakpoints: {
            414: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },                        
        },


        // 自动播放
        autoplay: {
         delay: 4000,
         stopOnLastSlide: false,
         // 当设置为false时，用户操作之后autoplay不会被禁掉
         disableOnInteraction: false,
        },

    });


    if($(window).width() <= 414) {
      var left_con = $('.content .contentss .introduct .left');
      left_con.appendTo($('.content .contentss .introduct'));
    }




})