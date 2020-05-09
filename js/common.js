$(function() {



// 一级导航
var one_nav = $('header .one_nav li');
// 二级导航
var two_nav = $('header .two_nav li');
// 三级导航
var three_nav = $('header .three_nav li');
one_nav.click(function() {

    // var index = $(this).index();
    // $('header .two_nav').show();
    // two_nav.siblings().hide();
    // three_nav.siblings().hide();
    // two_nav.eq(index).show();
    // two_nav.find('a').removeClass('active');
    // $(this).find('span, i').addClass('active');
    // $(this).siblings().find('span, i').removeClass('active');
    // // 点击 ‘应用与产品’时，‘行业应用’默认打开
    // if($(this).index() == 0) {
    //     console.log($(this).index());
    //     $('header .three_nav li.show').show();
    //     $('header .three_nav li.show .one').hide();
    //     $('header .three_nav li.show .one').eq(0).show();
    //     $('header .two_nav li a').eq(0).addClass('active');
    // }


    // 点击一级导航开启和关闭下拉
    var index = $(this).index();
    if($('header .two_nav li').eq(index).is(':hidden')) {
        $('header .two_nav').show();
        two_nav.siblings().hide();
        three_nav.hide();
        two_nav.eq(index).show();
        two_nav.find('a').removeClass('active');
        $(this).find('span, i').addClass('active');
        $(this).siblings().find('span, i').removeClass('active');
        // 点击 ‘应用与产品’时，‘行业应用’默认打开
        if($(this).index() == 0) {
            console.log($(this).index());
            $('header .three_nav li.show').show();
            $('header .three_nav li.show .one').hide();
            $('header .three_nav li.show .one').eq(0).show();
            $('header .two_nav li a').eq(0).addClass('active');
        }
    } else {
        $('header .two_nav').hide();
        three_nav.hide();
        one_nav.find('span, i').removeClass('active');
    }
});




$('header .two_nav li a').hover(function() {
    var index = $(this).index();
    var parentIndex = $(this).parent().index();
    three_nav.eq(parentIndex).show().siblings(three_nav).hide();
    three_nav.eq(parentIndex).find('.one').eq(index).show().siblings('.one').hide();
    $(this).addClass('active').siblings().removeClass('active');


});

$('header .three_nav li .one').hover(function() {
	var index = $(this).index();
	two_nav.find('a').eq(index).addClass('active').siblings().removeClass('active');
})


// 鼠标移除导航下拉隐藏
$('header').mouseleave(function() {
    $('header .two_nav').hide();
    three_nav.hide();
    one_nav.find('span, i').removeClass('active');
})





// 手机端导航逻辑
if ($(window).width() <= 768) {
    // 手机端导航开关封装
    function openCloseNav() {
        if($('.icon-guanbi').is(':hidden')) {
            $('header .phone_nav_switch').find('.icon-daohang').hide();
            $('header .phone_nav_switch').find('.icon-guanbi').show(); 
            $('.phone_nav').addClass('shows');  
            $('body').css('overflow', 'hidden');        
            $('.shadow').show();        
        } else {
            $('header .phone_nav_switch').find('.icon-daohang').show();
            $('header .phone_nav_switch').find('.icon-guanbi').hide(); 
            $('.phone_nav').removeClass('shows'); 
            $('body').css('overflow', 'visible');
            $('.shadow').hide();               
        }    
    };
    // 点击右上角导航
    $('header .phone_nav_switch').click(function() {
        openCloseNav();
    });
    // 点击遮罩
    $('.phone_nav .shadow').click(function() {
        openCloseNav();
    })


    // 点击一级导航
    $('.phone_nav .phone_navs .one .one_title').click(function() {
        var one_con = $(this).siblings('.one_con');
        $(this).parents('.one').siblings('.one').find('.one_con').slideUp();
        $(this).parents('.one').siblings('.one').find('.one_title').find('i').removeClass('overturn');
        if (one_con.is(':hidden')) {
            one_con.slideDown();
            $(this).find('i').addClass('overturn');
        } else {
            one_con.slideUp();
            $(this).find('i').removeClass('overturn');
        }
    });

    // 点击二级导航
    $('.phone_nav .phone_navs .one .one_con .two .two_title i').click(function() {
        var two_con = $(this).parents('.two_title').siblings('.two_con');
        $(this).parents('.two').siblings('.two').find('.two_con').slideUp();
        $(this).parents('.two').siblings('.two').find('.two_title').find('i').removeClass('overturn');        
        if (two_con.is(':hidden')) {
            two_con.slideDown();
            $(this).addClass('overturn');
        } else {
            two_con.slideUp();
            $(this).removeClass('overturn');
        }        
    });

    // 点击三级导航
    $('.phone_nav .phone_navs .one .one_con .three .three_title i').click(function() {
        var three_con = $(this).parents('.three_title').siblings('.three_con');
        $(this).parents('.three').siblings('.three').find('.three_con').slideUp();
        $(this).parents('.three').siblings('.three').find('.three_title').find('i').removeClass('overturn');        
        if (three_con.is(':hidden')) {
            three_con.slideDown();
            $(this).addClass('overturn');
        } else {
            three_con.slideUp();
            $(this).removeClass('overturn');
        }        
    });  
}


	
    // 返回顶部
    $('.back_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        })
    });

    //去掉video标签的下载按钮
    $('video').attr('controlslist', 'nodownload');


	// 动画效果
	new WOW().init();




 	

})


 



