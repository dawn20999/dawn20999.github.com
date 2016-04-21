$(document).ready(function () {
    $("#sub").click(function () {
        if(tip){
            var msg = $("#fx_text").val();
            //alert(pic);
            //alert(msg);
            $.post(site_url + 'ajax/upload', {msg:msg, pic:pic}, function (data) {
                if(data==1){
                    alert("微博发送成功");
//                    $.post(site_url+'ajax/weibo',function(data){
//                        $('#weibo').html(data);
//                    })
                }

                /*if (confirm("微博发送成功，是否关注我们")) {
                 $.post(site_url + 'ajax/gz', function (data) {
                 window.location.href=site_url+"home";
                 });
                 }*/
            });
            return false;
        }
    });
    var chackTextarea = function(obj,num,objTip){
        setInterval(function(){
            var newvalue = obj.value.replace(/[^\x00-\xff]/g, "**");
            if(newvalue.length>=0){
                if (newvalue.length > num) {
                    tip=0;
                    objTip.innerHTML="已超出" +parseInt((newvalue.length - num+2)/2)+'字';
                    objTip.style.color="#F00";
                    document.getElementById("sub").disabled="disabled";
                }else{
                    tip=1;
                    objTip.style.color="#9A47D4";
                    objTip.innerHTML='还可以输入'+(140-parseInt((newvalue.length)/2))+'个字';
                    document.getElementById("sub").disabled="";
                }
            }else{
                document.getElementById("sub").disabled="disabled";
            }
        },100)
    }
    chackTextarea(document.getElementById("fx_text"),280,document.getElementById("tip"));

    $('a').focus(function(){
        $(this).blur();
    });
    $.post(site_url+'ajax/weibo2',function(data){
        $('#weibo').html(data);
    })
    $('#more').click(function(){
        $('#more_box').show();
        //$('#more_cha').hide();
        $.post(site_url+'ajax/more',function(data){
            $('#wb_list').html(data.con);
            $('#fpage').html(data.fy);
        },'json');
    })
    $('#more_cha').click(function(){
        $('#more_box').hide();
    });
    $('#fpage a').live('click',function(data){
        var page=$(this).attr('page');
        $.post(site_url+'ajax/more',{page:page},function(data){
            $('#wb_list').html(data.con);
            $('#fpage').html(data.fy);
        },'json');
    });
//    $.post(site_url+'ajax/weibo',function(data){
//        $('#weibo').html(data);
//    })
//    scrollPic()

});
function scrollPic() {
    var scrollPic = new ScrollPic();
    scrollPic.scrollContId   = "_ul"; //内容容器ID
    scrollPic.arrLeftId      = "arrows1-l";//左箭头ID
    scrollPic.arrRightId     = "arrows1-r"; //右箭头ID

    scrollPic.frameWidth     = 336;//显示框宽度
    scrollPic.pageWidth      = 112; //每张图片的宽度

    scrollPic.speed          = 10; //移动速度(单位毫秒，越小越快)
    scrollPic.space          = 10; //每次移动像素(单位px，越大越快)
    scrollPic.autoPlay       = true; //自动播放
    scrollPic.autoPlayTime   = 2; //自动播放间隔时间(秒)

    scrollPic.initialize(); //初始化
}