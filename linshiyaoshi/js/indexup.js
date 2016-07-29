/**
 * Created by ZT on 2016/5/9.
 */
    //设置字体大小
    (function(win,doc){
        win.onload=win.onresize=function(){
            doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/375+'px';
        };
    })(window,document);
//点击出现声波
var oKey2=document.getElementById('key2');
var oIcon=document.getElementById('icon');
oIcon.onclick=function (){
    oKey2.style.display='block';
    this.style.display='none';
};
// 点击刷新钥匙加载
var oBtn=document.getElementById('rebox');
var oFail=document.getElementById('fail');
var oLoading=document.getElementById('loading');
oBtn.onclick=function(){
    oLoading.style.display='block';
    oFail.style.display='none';
};

    //判断手机浏览器
    function _IsIOS() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os") {
            return true;
        } else {
            return false;
        }
    }
    function _IsAndroid() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/Android/i) == "android") {
            return true;
        } else {
            return false;
        }
    }
    if(_IsAndroid()){
        var oBox=document.getElementById('andro');
        oBox.style.display='block';
        // var oKey=document.getElementById('key');
        // var oKey2=document.getElementById('key2');
        // var oIcon=document.getElementById('icon');
        // oIcon.onclick=function (){
        //     oKey2.style.display='block';
        //     oIcon.style.display='none';
        // };
        // // 点击刷新钥匙加载
        // var oBtn=document.getElementById('rebox');
        // var oFail=document.getElementById('fail');
        // var oLoading=document.getElementById('loading');
        // oBtn.onclick=function(){
        //     oLoading.style.display='block';
        //     oFail.style.display='none';
        // };
    }else if(_IsIOS()){
        var iosBox=document.getElementById('ios');
        iosBox.style.display='block';
        // var oKey=document.getElementById('key');
        // var oKey2=document.getElementById('key2');
        // var oIcon=document.getElementById('icon');
        // oIcon.onclick=function (){
        //     oKey2.style.display='block';
        //     oIcon.style.display='none';
        // };
        // 点击刷新钥匙加载
        // var oBtn=document.getElementById('rebox');
        // var oFail=document.getElementById('fail');
        // var oLoading=document.getElementById('loading');
        // oBtn.onclick=function(){
        //     oLoading.style.display='block';
        //     oFail.style.display='none';
        // };
    }else{
        alert('请用手机访问');
    }

