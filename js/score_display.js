// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


//Init du carroussel 
// Using custom configuration
function ScoreDisplay()  {
	var pt_carroussel;
	var pt_next;
	var pt_prev;
	var top_cache=0;
	
	
	this.init = function(id_score, id_prev, id_next) {  
		pt_carroussel=$(id_score);
		pt_next=$(id_next);
		pt_prev=$(id_prev);
		
		pt_next.css({ 'right': parseInt(-(17+144)+$(window).width()/2)+'px'});
		pt_prev.css({ 'left': parseInt(-(11+144)+$(window).width()/2)+'px'});
		
		
		
	}
	
	this.run = function() {  
		pt_carroussel.carouFredSel(
			{
			auto        : false,
			infinite    : false,
			circular    : false,
			items   : 4,
			scroll  : {
				items: 3,
				easing: "quadratic"
			    },
			width   : 272
			,
			prev: "#prev",
			next: "#next",
			swipe       : {
				onTouch     : true,
				onMouse     : true,
			}
		});
		
		
		if ( top_cache == 0 ) { top_cache=parseInt(pt_carroussel.offset().top+6)+'px' };
	//	ScoreCardLog("FBM ScoreDisplay topcache :" + pt_carroussel.offset().top);
		pt_next.css({ 'top': top_cache});
		pt_prev.css({ 'top': top_cache});
		
	}	
	
	
	this.setCenterItem = function (index) {
		if (index >= 2)  {
			pt_carroussel.trigger('slideTo', [-2, index]);
		} else if ( index >= 1 ) {
			pt_carroussel.trigger('slideTo', [-1, index]);
		} else {
			pt_carroussel.trigger('slideTo', [0, index]);
		}
	}
	
	top_cache=0;
}
