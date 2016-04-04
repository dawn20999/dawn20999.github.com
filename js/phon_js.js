$(function(){
	FastClick.attach(document.body);
	init();
	function init(){
		$('.issue_btn, .issue, .success, .big')
		.css('display','none');
	}

	var now=0;

	$('.praise').click(
		function()
		{
			
			now=$(this).parent().index();
			var src=$('.praise').eq(now).attr('src');
			
			// console.log(src);
			//为什么申明num=0要在外面，num++要写在里面
			console.log(src)
			if(src=='img/heart1.png')
			{
				
			$('.praise').eq(now).attr('src','img/heart2.png');

			}
			else
			{
			$('.praise').eq(now).attr('src','img/heart1.png');

			}
		
		})

	var i=0;

	$('.model li').click(
		function()
		{
			i=$(this).index();
			// console.log(i)
			$('.model li').eq(i).addClass('creat_active')
			.siblings('li').removeClass('creat_active');
		})


	$('.next2').click(
		function(){
			$('.issue_btn').css('display','block');
			$('.issue').css('display','block');
			$('.next2').css('display','none');

		})

	$('.issue_btn').click(
		function(){
			$('.success').css('display','block');
		})

	$('.user_img, .heart li span').click(
		function(){
			$('.big').css('display','block');
			$('.share_friends').css('display','none');

		})

	$('.share_btn1').click(
		function(){
			$('.big_infor').css('display','none');
			$('.share_friends').css('display','block');
		})

	$('.del_1').click(
		function(){
			$('.big').css('display','none');
			$('.big_infor').css('display','block');
		})




	$('.del').click(function(){
		$('.big').hide();
	})




	$('.heart_btn1').click(
		
		function(){

			var src1=$('.heart_btn1 img').attr('src');
			
			if(src1=='img/heart1.png')
			{
				
			$('.heart_btn1 img').attr('src','img/heart2.png');

			}
			else
			{
			$('.heart_btn1 img').attr('src','img/heart1.png');

			}
		})
			
})