// JavaScript Document
window.onload=function (){
	var oLast=document.getElementById('last');
	var oShow=document.getElementById('show');
	
	oLast.onmouseover=function (){
		this.style.background='#fff';
		oShow.style.display='block';
		oShow.style.background='#fff';
	};	
	oLast.onmouseout=function (){
		this.style.background='#f9f9f9';
		oShow.style.display='none';
		
	};	
	//顶部右侧
	var aLi=document.getElementsByClassName('t_list');
	var aBox=document.getElementsByClassName('r_box');
	
	for (var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onmouseover=function (){
		    this.style.background='#ccc';
			aBox[this.index].style.display='block';
		};
		aLi[i].onmouseout=function (){
		    this.style.background='';
			aBox[this.index].style.display='none';
		};
	}
	//banner
	var oBanner=document.getElementById('banner');
	var oFork=document.getElementById('fork');
	
	oFork.onclick=function (){
		oBanner.style.display='none';	
	};
	//搜索框
	var oText=document.getElementById('text');
	var oAdd=document.getElementById('address');
	
	oAdd.onclick=function (){
		oAdd.style.display='none';
		oText.focus();	
	};
	oText.onfocus=function (){
		oAdd.style.display='none';	
	};
	oText.onblur=function (){
		if (oText.value.length == 0)
		{
			oAdd.style.display='block';
		}	
	};
	//sider_bar
	var oUl=document.getElementById('sider_bar');
	var aLi=oUl.getElementsByClassName('sider_list');
	
	
	for (var i=0;i<aLi.length;i++)
	{
		(function (){
			var timer=null;
			var aDiv=aLi[i].getElementsByTagName('div')[2];
			aLi[i].onmouseover=function (){
				clearTimeout(timer);
				this.style.background='#fff';	
				aDiv.style.display='block';
			};
			aLi[i].onmouseout=function (){
				this.style.background='#fafafa';
				clearTimeout(timer);
				timer=setTimeout(function (){
					aDiv.style.display='none';
				}, 200);
			};
			aDiv.onmouseover=function (){
				clearTimeout(timer);
				aDiv.style.display='block';	
			};
			aDiv.onmouseout=function (){
				timer=setTimeout(function (){
					aDiv.style.display='none';
				}, 200);	
			};
		})(i);
			
	}
	//定时器
	var oUl=document.getElementById('setInter');
	var oLeft=document.getElementById('left');
	var oRight=document.getElementById('right');
	var oBox=document.getElementById('foot_box');
	var aLi=oUl.children;
	var n=0;
	
	oLeft.onclick=function (){
		n--;
		if (n == -1)
		{
			n=aLi.length-1;	
		}
		oUl.style.left=-n*689+'px';	
	};
	oRight.onclick=next;
	
	var timer=setInterval(next, 1000);
	oBox.onmouseover=function (){
		clearInterval(timer);
		oLeft.style.display='block';
		oRight.style.display='block';	
	};
	oBox.onmouseout=function (){
		timer=setInterval(next, 1000);
		oLeft.style.display='none';
		oRight.style.display='none';	
	};
	
	function next(){
		n++;
		if (n == aLi.length)
		{
			n=0;	
		}	
		oUl.style.left=-n*689+'px';	
	}
	
	//时钟表
	var aTime=document.getElementsByClassName('time');
	var oDinner=document.getElementById('dinner');
	var aLeftPoink=document.getElementsByClassName('leftPoink');
	var aRightPoink=document.getElementsByTagName('rightPoink');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var oCon=document.getElementById('con_rFoot');
	
	var n=0;
	
	for (var i=0;i<aLeftPoink.length;i++){
		(function (index){
			aLeftPoink[i].onclick=function (){
				for (var i=0;i<aLeftPoink.length;i++)
				{
					aLeftPoink[i].className='leftPoink';
					aTime[i].className='time';	
				}
				this.className='leftPoink rightPoink';
				aTime[index].className='time active';	
			};
		})(i);
	}
	oPrev.onclick=function (){
		n--;
		if (n == -1)
		{
			n=aTime.length-1;	
		}
		aTime.style.left=-n*197+'px';
	};
	//名店抢购
	var oInter=document.getElementById('interVal');
	var oList=document.getElementById('inter_list');
	var oPrev1=document.getElementById('prev1');
	var oNext1=document.getElementById('next1');
	var oUl1=oList.children;
	var now=0;
	
	oPrev1.onclick=function (){
		now--;
		if (now == -1)
		{
			now=oUl1.length-1;
		}
		oList.style.left=-now*1170+'px';	
	};	
	oNext1.onclick=tick;
	var timer=setInterval(tick, 1000);	
	oInter.onmouseover=function (){
		oPrev1.style.display='block';
		oNext1.style.display='block';
		clearInterval(timer);
	};
	oInter.onmouseout=function (){
		oPrev1.style.display='none';
		oNext1.style.display='none';
		 timer=setInterval(tick, 1000);	
	};
		
	function tick(){
		now++;
		if (now == oUl1.length)
		{
			now=0;
		}
		oList.style.left=-now*1170+'px';
	}
	//团购分类
	var oSort=document.getElementById('contentFoot');
	var oClass=document.getElementById('conList');
	var aShow=oSort.getElementsByTagName('div');
	var aLi11=oClass.getElementsByTagName('li');
	
	for (var i=0;i<aLi11.length;i++)
	{
		(function (index){
			aLi11[i].onclick=function (){
				for (var i=0;i<aLi11.length;i++)
				{
					aLi11[i].className='';
					aShow[i].className='clearfix';
				}
				this.className='active';
				aShow[index].className='active clearfix';	
			};	
		})(i);	
	};	
};












































































