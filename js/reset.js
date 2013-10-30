// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


$( '#reset_page' ).live( 'pageshow',function(event){
	ScoreCardLog("Center the text in the Reset page");
	$('#content-reset').css('margin-top',($(window).height() - $('[data-role=footer]').height() - $('#content-reset').outerHeight())/2);
});

$( '#reset_page' ).live( 'pageshow',function(event){
	
	ScoreCardLog("Reset PAGE INIT ");
	
	$('#reset_pref').on('click',function(event, ui){
		//other code
		ScoreCardLog("Reset GM");
		//localStorage.clear();
		localStorage.removeItem("scorecard_current");
		localStorage.removeItem("scorecard_preference");
		localStorage.removeItem("scorecard_first_start");
		//Force a complete reload, without ajax
		window.location='first_start.html';   
	});
});



