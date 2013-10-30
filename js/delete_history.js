// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


$( '#delete_history_page' ).live( 'pageshow',function(event){
	ScoreCardLog("Center the text in the Reset HISTORY page");
	$('#content-delete_history').css('margin-top',($(window).height() - $('[data-role=footer]').height() - $('#content-delete_history').outerHeight())/2);
});


$( '#delete_history_page' ).live( 'pageinit',function(event){
	
	ScoreCardLog("Reset HISTORY load");
	
	$('#delete_history').on('click',function(event, ui){
		//other code
		ScoreCardLog("Reset HISTORY");
		//localStorage.clear();
		localStorage.removeItem("scorecard_history");
		$.mobile.changePage('menu.html', {transition: 'pop', role: 'page'});   
	});
});





