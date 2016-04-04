function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();   
		},false);   
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn&&fn();
			}
		});
	}
}

;(function(global){
    var iSpeed=0;
    var left=0;
    var timer=null;

    global.move=function(obj,iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-left)/5;
            iSpeed*=0.7;

            left+=iSpeed;
            obj.style.left=left+'px';

            if(Math.round(iSpeed)==0 && Math.round(left)==iTarget){
                clearInterval(timer);
            }
        },30);
    }
})(window);


//封装运动move
function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function startMove(obj,json,options){
	options=options || {};
	options.duration =options.duration || 500;
	options.easing=options.easing || 'ease-out';
	
	var count=Math.floor(options.duration/30);
	var start={};
	var dis={};
	
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
					break;
				case 'opacity':
					start[name]=1;
					break;
				case 'borderWidth':
					start[name]=0;
					break;
			}   
		}
		
		dis[name]=json[name]-start[name];
	}

	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			
			switch(options.easing){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*a*a*a;
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break;
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';  
			}else{
				obj.style[name]=cur+'px';   
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	},30);
	
}

//滚轮事件封装


function addWheel(obj, fn)
{
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
	{
		obj.addEventListener('DOMMouseScroll', _wheel, false);
	}
	else
	{
		obj.onmousewheel=_wheel;
	}
	
	function _wheel(ev)
	{
		var oEvent=ev || event;
		
		if (oEvent.wheelDelta)
		{
			var down=oEvent.wheelDelta>0 ? false : true;
		}
		else
		{
			var down=oEvent.detail>0 ? true : false;
		}
		
		fn(down);
	}
}













