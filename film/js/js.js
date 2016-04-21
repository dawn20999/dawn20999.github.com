$(function(){
    //活动规则
    $('.hdgz_an').click(function(){
        $('.hdgz').show();
    });
    $('.hdgz a').click(function(){
        $(this).parent().parent().hide();
    });
    //查看更多
    $('.wypl_an').click(function (){
        $('.box_more').show();
    });
    $('.x').click(function (){
        $(this).parent().parent().hide();
    });
    //微博矩阵头像展示
    var _ul=$('#_ul');
    var _w=$('#_ul li').width()+12;
    var timer;
    $('.txgd_right').click(function(){
        if(!_ul.is(':animated')){
            _ul.animate({marginLeft:-_w},200,function(){
                _ul.css({marginLeft:0}).children('li:first').appendTo(_ul);
            });
        }
    });
    $('.txgd_left').click(function(){
        if(!_ul.is(':animated')){

            _ul.animate({marginLeft:+_w},200,function(){
                _ul.children('li:last').prependTo(_ul).parent().css({marginLeft:0});
            });
        }
    });
    $('.txgd').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            _ul.animate({marginLeft:-_w},200,function(){
                _ul.css({marginLeft:0}).children('li:first').appendTo(_ul);
            });
        },3000);
    }).trigger('mouseleave');
    /*var _ul=$('#_ul');
    var _w=$('#txgd_div').width();
    var num=$('#_ul li').length;
    var len=Math.ceil(num/3);
    var index=1;
    var timer;
    $('.txgd_right').click(function(){
        if(!_ul.is(':animated')){
            if(index==len){
                _ul.animate({left:0},200);
                index=1;
            }else{
                _ul.animate({left:'-='+_w},200);
                index++;
            }
        };
    });
    $('.txgd_left').click(function(){
        if(!_ul.is(':animated')){
            if(index==1){
                _ul.animate({left:-_w*(len-1)},200);
                index=len;
            }else{
                _ul.animate({left:'+='+_w},200);
                index--;
            }
        }
    });
    $('.txgd').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            if(index==len){
                _ul.animate({left:0},200);
                index=1;
            }else{
                _ul.animate({left:'-='+_w},200);
                index++;
            }
        },3000);
    }).trigger('mouseleave');*/
    //卡萨帝与明星的邂逅
    $('#product_t p').click(function(){
        var index=$('#product_t p').index(this);
        $('.product_c').eq(index).show().siblings('.product_c').hide();
    });
});
//video
$(function(){
	var index=1;
    var nub=$('.video_ul li').length;
    var _video_ul=$('.video_ul');
    var video_w=_video_ul.find('li').width();
	$('.video_right').click(function(){
        if(!_video_ul.is(':animated')){
            if(index==nub){
                _video_ul.animate({left:0},200);
                index=1;
            }else{
                _video_ul.animate({left:'-='+video_w},200);
                index++;
            }
        }
    });
    $('.video_left').click(function(){
        if(!_video_ul.is(':animated')){
            if(index==1){
                _video_ul.animate({left:-video_w*(nub-1)},200);
                index=nub;
            }else{
                _video_ul.animate({left:'+='+video_w},200);
                index--;
            }
        }
    });
});
//textarea
$(function(){
    $('.cyhd_b textarea').focus(function(){
        var obj=$(this);
        $.post(site_url+'ajax/at',function(data){
            obj.text('#我想要的创艺生活# '+data+'http://t.cn/zHwpx9J');
        })
//        $(this).text('#我想要的创艺生活# @创艺私享家 @内容营销 @糖蒜广播  http://t.cn/zHwpx9J');
    });

});