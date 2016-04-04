$(function(){
	var aBtn=$('#sel li');
	var aShow=$('#option div ul');
	
	aBtn.click(function(){
		aBtn.removeClass('active');
		aShow.removeClass('show');
		
		$(this).addClass('active');
		aShow.eq($(this).index()).addClass('show');
	});
});

//top-nav(lenghao)
$(function (){
	$('.right li').hover(function (){
		$(this).find('ul').css('display', 'block');
	},function (){
		$(this).find('ul').css('display', 'none');
	});
});

//banner(wanchen)
$.fn.banner=function()
{
	this.each(function(index,element){
	
			var oUl=$(element).find('ul').eq(0); 
			var aUl=$(element).find('ul') 
			var aLiN=$(element).find('ul li').width();
			var aLi=$(element).find('ul li')
			var aOlli=$(element).find('ol li');
			
			$(element).find('ul').get(0).innerHTML+=$(element).find('ul').get(0).innerHTML
		
			oUl.css('width',aLiN*2*aLi.length+'px')
				
			var iNow=0;
			var w=oUl.width()/2
			var n=aOlli.length;
			
			aOlli.click(function()
			{
				iNow=$(this).index()+parseInt(iNow/n)*n;
				fn()
			})	
			function fn()
			{
				aOlli.removeClass('active')
				aOlli.eq(iNow%aLi.length).addClass('active')
				
				move(oUl,aLiN*-iNow)
			}
			function next()
			{
				iNow++
				fn()
				if(iNow==aOlli.length)
				{
					iNow
				}
			}
			setInterval(function(){
				next()	
			},3000)
			var left=0
			function move(obj,iTarget)
			{
				clearInterval(obj.timer)		
				obj.timer=setInterval(function(){
					var speed=(iTarget-left)/6;
					speed=speed>0?Math.ceil(speed):Math.floor(speed)
					left+=speed
					if(left>0)
					{
						oUl.get(0).style.left=left%w+'px'
					}
					else
					{
						oUl.get(0).style.left=(left%w-w)%w+'px'
					}		
				},30)
			}
		})
}


$(function (){
	$('#box').banner();
	$('#box1').banner();
});