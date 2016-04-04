//版权 北京智能社©, 保留所有权利

function getStyle(obj, name)
{
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj, false)[name];
}

function startMove(obj, json, options)
{
	options=options||{};
	options.type=options.type||'ease-out';
	options.time=options.time||300;
	
	var start={};
	var dis={};
	var count=Math.ceil(options.time/30);
	var n=0;
	
	//
	for(var name in json)
	{
		if(name=='opacity')
		{
			start[name]=Math.round(parseFloat(getStyle(obj, name))*100);
		}
		else
		{
			start[name]=parseInt(getStyle(obj, name));
		}
		dis[name]=json[name]-start[name];
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		for(var name in json)
		{
			var a=n/count;
			
			switch(options.type)
			{
				case 'linear':
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var cur=start[name]+dis[name]*(a*a*a);
					break;
				case 'ease-out':
					a=1-a;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break;
			}
			
			if(name=='opacity')
			{
				obj.style.filter='alpha(opacity:'+cur+')';
				obj.style.opacity=cur/100;
			}
			else
			{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count)
		{
			clearInterval(obj.timer);
			
			options.end && options.end();
		}
	}, 30);
}