$(function()
{
	init();
	function init (){
		
		$('.infor>div').eq(0).css('display','block')
		.siblings('div').css('display','none');
		
		$('.icon img').attr('src','img/car.png')
		$('.icon img').eq(0).attr('src','img/red-car.png')
		
		
	}

	var now=0;

	$('.icon a').click(
		function()
		{
			now=$(this).index();
			
			$('.infor>div').eq(now).css('display','block')
			.siblings('div').css('display','none');
			
			
			$('.icon img').attr('src','img/car.png');
			$('.icon img').eq(now).attr('src','img/red-car.png');
		})

	
	// var lastv='';
	$('.btn').click(
		function()
		{

			if($('.type').val()==''/*||$('.type').val()==lastv*/)return;
			
			var li= '<li>'+
			'<img class="fl head-img" src="img/head-img.jpg">'+
			'<div class="fl mes">'+
			'<span class="name">全新宝来:#一汽大众--宝来#</span>'+
			'<span>'+$('.type').val()+'</span>'+
			'</div>'+
			'<div class="clear"></div>'+'</li>';
			$(li).prependTo('.message');

			$('.type').val('');
			
			// lastv=$('.type').val();
		})

    var num=0;

	$('.v1').click(
		
		function()
		{
			num++;
			if(num%2==0)
			{
			    $('.pause1').css('display','block');
			    $('.vid1')[0].pause();
			}
			else
			{
				$('.pause1').css('display','none');
			 	$('.vid1')[0].play();
			}	
		})
	$('.pause2').click(
		function()
		{
			$('.vid1').attr('src','http://www.w3school.com.cn/example/html5/mov_bbb.mp4')

		})
	$('.pause3').click(
		function()
		{
			$('.vid1').attr('src','http://www.w3school.com.cn/example/html5/mov_bbb.mp4')

		})

})


		

		



		// var trueVideo=document.getElementById('vid');
		// var btn1=document.getElementById('btn1');
		// var num=0;
		
		// window.onload=function(){
			
		// }
		
		// var t=null;
		// btn1.onclick=function(){
			
		// 	num++;
		// 	if (num%2==1)
		// 	{
				
		// 		trueVideo.play();
				
		// 	}else{
		// 		trueVideo.pause();
		// 	}
		// }


     	// var random=parseInt(Math.random()*50+50);

     	// var obj={
     	// 	age:[],
     	// 	name:{},
     	// 	c:function(){..},
     	// 	d:'abc'
     	// };
     	// obj.a=[1,2,3]
     	// obj.c()



     	// 原生js对象转jquery对象
		// var vid=document.getElementById('video');
		// var vid2=$(vid);
		
		// var vid3=$('.video')[0].style.left;  //jquery转原生对象
		// document.getElementById('video').style.left


		// var currentT=document.getElementById('currentT');
		// var allT=document.getElementById('allT');
		
		// function getT()
		// {
		// 	currentT.innerText=parseInt(trueVideo.currentTime);
		// 	allT.innerText=parseInt(trueVideo.duration);
		// }

		// var t=null;
		// btn1.onclick=function(){
			
		// 	num++;
		// 	if (num%2==1) 
		// 	{
		// 		// $('#vid')[0].play()
		// 		// console.log(trueVideo.duration)
		// 		// console.log(trueVideo.currentTime)
		// 		trueVideo.play();
		// 		getT()
		// 		t=setInterval(getT,1000)
		// 	}
		// 	else
		// 	{
		// 		trueVideo.pause();
		// 		clearInterval(t)
		// 	}
		// }