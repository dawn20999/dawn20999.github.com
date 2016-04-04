//版权 北京智能社©, 保留所有权利

/**
 * 描述
 * @param fn function 页面加载完成执行的函数
 * @return undefined
 */
function $(fn)
{
	if (document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded', fn, false);
	}
	else
	{
		document.onreadystatechange=function (){
			if (document.readyState == 'complete')
			{
				fn();
			}
		};
	}
}

/**
 * getStyle 获取指定元素的样式
 * @param obj object   对象
 * @param sName string 样式名
 *
 * @return string 样式的值
 */
function getStyle(obj, sName)
{
	return (obj.currentStyle || getComputedStyle(obj, false))[sName];
}


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
		var down=false;
		
		if(oEvent.wheelDelta)
		{
			down=oEvent.wheelDelta>0 ? false : true;
		}
		else
		{
			down=oEvent.detail>0 ? true : false;
		}
		
		fn(down);
	}
}








