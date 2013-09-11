// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


$( '#reset_page' ).live( 'pageinit',function(event){
	
	$('#reset').on('click',function(event, ui){
		//other code
		ScoreCardLog("Reset GM");
		//localStorage.clear();
		localStorage.removeItem("scorecard_current");
		localStorage.removeItem("scorecard_preference");
		localStorage.removeItem("scorecard_first_start");
	});
});



