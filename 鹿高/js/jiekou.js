$(document).ready(function(){
    //二级导航
    $.ajax({
        url: "http://mock.shtodream.cn/mock/5e98325c0f0ab03f6d504720/xiaolu/dh",
        dataType: "json",
        type: "get",
        success: function(res){
            console.log(res)
            $.each(res.data,function(index,value){
                    console.log(value.secondNav)
                 $("#nv").append("<li><div class='dropdown'><a id='product' href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>"+value.firstNav+"</a><span class='glyphicon glyphicon-chevron-down' aria-hidden='true'></span><ul class='dropdown-menu' aria-labelledby='product'>")
                 value.secondNav?$.each(value.secondNav,function(i,v){
                     $(".dropdown-menu").eq(index).append(
                         `
                         <li><div class='dropdown2'><a id='mobile' href='/mobile'class='dropdown-toggle'>${v.name}</a></div></li></div></li>
                         `
                     )
                }):null
            })
        }
    })
    // 轮播图
    $.ajax({
        url: "http://mock.shtodream.cn/mock/5e98325c0f0ab03f6d504720/xiaolu/xiaolu",
        dataType: "json",
        type: "get",
        success: function(res){
            $.each(res.data,function(index,value){
                
                if(index==0){
                 $("#bannner").append(
                     "<div class='item active'><a href="+value.href+" target='_blank'><img src='"+value.url+"' class='desk'><img src='"+value.url2+"' class='mobile'></a></div>"
                 )
                }else{
                    $("#bannner").append(
                        "<div class='item'><a href="+value.href+" target='_blank'><img src='"+value.url+"' class='desk'><img src='"+value.url2+"' class='mobile'></a></div>"
                    ) 
                }
            })
        }
    })
})