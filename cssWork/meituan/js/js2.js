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
};

