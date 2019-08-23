export function setRem (maxSize,MaxfontSize) {
	var doc=document;
	var win=window;
	var docEl = doc.documentElement;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function () {
			  var clientWidth = docEl.clientWidth;
			  if (!clientWidth) return;
			  if (clientWidth >= maxSize) {
				   docEl.style.fontSize = MaxfontSize+'px';
			  } else {
				   docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			  }
		};
  
	 if (!doc.addEventListener) return;
	  win.addEventListener(resizeEvt, recalc, false);                     
	  doc.addEventListener('DOMContentLoaded', recalc, false); 
	  recalc();
};