define(function(require,exports,module){
	var M=require('move');
	exports.show=function(){
		var oBox=document.getElementById('play');	
		var oOl=oBox.children[0];
		var aBtn=oOl.children;
		var oUl=oBox.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
		
		for(var i=0; i<aBtn.length; i++){
			(function(index){
				aBtn[i].onclick=function(){
					for(var i=0; i<aBtn.length; i++){
						aBtn[i].className='';
					}
					this.className='active';
					M.move(oUl,{top:-index*aLi[0].offsetHeight});
				}
			})(i);
		}	
	};
});