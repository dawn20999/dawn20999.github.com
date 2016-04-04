
DOMReady(function (){
	var oWrap=document.getElementById('wrap');

	//导航运动

	var oUl=document.getElementById('nav');
	var aLi=oUl.children;
	var aPos=[];
	var oNavBox=aLi[aLi.length-1];
	var iNow=0;
	for (var i = 0; i < aLi.length-1; i++) {
		aLi[i].index=i;
		aLi[i].onmouseover=function (){
			move(oNavBox,this.offsetLeft);
		};
		aLi[i].onmouseout=function (){
			move(oNavBox,iNow*aLi[0].offsetWidth);
		};
		aLi[i].onclick=function (){
			iNow=this.index;
						
			//内容高度			
			startMove(oCon,{top:-aDiv[0].offsetHeight*(this.index)});
			aPos.push(this.index);
			top=-aDiv[0].offsetHeight*(this.index);
		}
	}
	
	//content;
	var oCon=document.getElementById('content');
	var aDiv=oCon.children;
	var clientW=document.documentElement.clientWidth || document.body.clientWidth;
	var clientH=document.documentElement.clientHeight || document.body.clientHeight;

	for (var i=0;i<aDiv.length;i++)
	{
		aDiv[i].style.height=clientH+'px';
		aDiv[i].style.width=clientW+'px';
	}

	//改变窗口大小
	window.onresize=function (){
		var clientW=document.documentElement.clientWidth || document.body.clientWidth;
		var clientH=document.documentElement.clientHeight || document.body.clientHeight;

		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.width=clientW+'px';
			aDiv[i].style.height=clientH+'px';
		}
		if(top<0){
			//oCon.style.top=-aPos[aPos.length-1]*clientH+'px';
			startMove(oCon,{top:-aPos[aPos.length-1]*clientH});
			top=-aPos[aPos.length-1]*clientH;
		}else{
			//oCon.style.top=0+'px';
			startMove(oCon,{top:0});
		}
	};


	//给元素滚轮事件
	var top=oCon.offsetTop;
	var j=0;
	addWheel(oCon,function(bDown){
		if(bDown){
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==-(aDiv.length-1)*clientH)return;
			//oCon.style.top=-clientH+top+'px';
			startMove(oCon,{top:-clientH+top});
			top=-clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			//导航滚轮			
			move(oNavBox,aLi[j].offsetLeft);

			
		}else{
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==0)return;
			startMove(oCon,{top:clientH+top});
			top=clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			//导航滚轮
			move(oNavBox,aLi[j].offsetLeft);
			
			
		}
	});

	//首页；
	var oClock=document.getElementById('clock');
	var aImg=oClock.getElementsByTagName('img');
	var arr=['seven', 'one', 'two', 'three', 'four', 'five', 'six'];
	//时间
	setInterval(tick, 1000);
	tick();
	function tick(){
		var oDate=new Date();
		var year=oDate.getFullYear();
		var month=oDate.getMonth();
		var date=oDate.getDate();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var week=oDate.getDay();

		var str=year+'-'+toDub(month+1)+'-'+toDub(date)+'-'+toDub(h)+'-'+toDub(m)+'-'+toDub(s)+'-'+week;
		for (var i=0;i<str.length;i++)
		{
			if (str.charAt(i) == '-'){
				continue;
			}
			if (i == str.length-1)
			{
				aImg[i].src='image/'+arr[str.charAt(i)]+'.png';
			}
			else
			{
				aImg[i].src='image/'+str.charAt(i)+'.png'
			}
		}
	}

	function toDub(n){
		return n<10 ? '0'+n : ''+n;
	}
	//CSS作品
	
	var oCatList=document.getElementById('catList');
	var aCLi=oCatList.getElementsByTagName('li');
	var arrName=['youxiye','iqiyi','hao360','taobao','meilishuo','OPPO','meituan','JD','sheying']

	for (var i=0;i<aCLi.length;i++)
	{
		var oSpan=document.createElement('span');
		oSpan.className="showOpa";
		oSpan.innerHTML=arrName[i];
		aCLi[i].appendChild(oSpan);
		
		//点击aCLi[i]引入文件；
		(function (index){
			aCLi[i].onclick=function (){
				window.open('cssWork/'+arrName[index]+'/index.html', target="_blank");
			};
		})(i);
	}
	//css 布局转换；
	aTmp=[];
	for (var i=0;i<aCLi.length;i++)
	{
		aTmp.push({
			left:aCLi[i].offsetLeft,
			top:aCLi[i].offsetTop
		});
	}
	for (var i=0;i<aCLi.length;i++)
	{
		aCLi[i].style.position='absolute';
		aCLi[i].style.left=aTmp[i].left+'px';
		aCLi[i].style.top=aTmp[i].top+'px';
		aCLi[i].style.margin=0;
	}
	//随机换位置
	var oRanBtn=document.getElementById('randomBtn');
	oRanBtn.onclick=function (){
		aTmp.sort(function (){
			return Math.random()-0.5;
		});
		for (var i=0;i<aCLi.length;i++)
		{
			startMove(aCLi[i], aTmp[i]);
		}
	};

	// JS作品
	(function (){
		
		var oBox=document.getElementById('jsBox');
		var aUl=oBox.children;
		var aLi=oBox.getElementsByTagName('li');
		var oBtnList=document.getElementById('btnList');
		var aBtn=oBtnList.getElementsByTagName('a');
		//选项卡
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].index=i;
			aBtn[i].onclick=function (){
				for (var i = 0; i < aBtn.length; i++) {
					aBtn[i].className='';
					aUl[i].className='';
				}
				this.className='on';
				aUl[this.index].className='jsActive';
			};
		}
		
		var oList1=document.getElementById('jsBox_list1');
		var oList2=document.getElementById('jsBox_list2');
		var oList3=document.getElementById('jsBox_list3');
		var oList4=document.getElementById('jsBox_list4');
		var aLi1=oList1.children;
		var aLi2=oList2.children;
		var aLi3=oList3.children;
		var aLi4=oList4.children;

		for (var i = 0; i < aLi1.length; i++) {
			(function (index){
				aLi1[i].onclick=function (){
					window.open('jsCont/page_1/page-'+(index+1)+'.html','_black');
				};
				aLi2[i].onclick=function (){
					window.open('jsCont/page_2/page-'+(index+1)+'.html','_black');
				};
				aLi3[i].onclick=function (){
					window.open('jsCont/page_3/page-'+(index+1)+'.html','_black');
				};
				aLi4[i].onclick=function (){
					window.open('jsCont/page_4/page-'+(index+1)+'.html','_black');
				};
			})(i);
			
		}

	})();	
	//H5
	(function (){
		var oHBox=document.getElementById('hcBox');
		var oMove=document.getElementById('moveBox');
			
		var iSpeedX=1;
		var iSpeedY=2;
		var timer=null;
		dragMove();
		oMove.onmouseover=function (){
			clearInterval(timer);	
		};
		oMove.onmouseout=function (){
			dragMove();	
		};
		function dragMove(){
			timer=setInterval(function (){
				var l=oMove.offsetLeft+iSpeedX;
				var t=oMove.offsetTop+iSpeedY;
				
				if (l>=oHBox.offsetWidth-oMove.offsetWidth)
				{
					l=oHBox.offsetWidth-oMove.offsetWidth;	
					iSpeedX*=-1;
				}
				if(l<=0)
				{
					l=0;	
					iSpeedX*=-1;
				}
				if (t>=oHBox.offsetHeight-oMove.offsetHeight)
				{
					t=oHBox.offsetHeight-oMove.offsetHeight;
					iSpeedY*=-1;	
				}
				if (t<=0)
				{
					t=0;
					iSpeedY*=-1;	
				}
				oMove.style.left=l+'px';
				oMove.style.top=t+'px';
			},30);
		}
	})();
});