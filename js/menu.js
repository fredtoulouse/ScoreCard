// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

	
$( '#one' ).live( 'pageinit',function(event){
	
	//Init jquery-cache 
	Cache.getInstance().init("menu.js");

	//Run first start 
	var data=localStorage["scorecard_first_start"];
	if(typeof(data)=='undefined'){
		$.mobile.changePage('first_start.html', {transition: 'pop', role: 'page'});   
	}
	
	
});

$( '#one' ).live( 'pageshow',function(event){
	if (Score.getInstance().getStoredScore()==0) {
		Cache.getInstance().CACHE_SC_REPRISE.addClass('ui-disabled');
	} else {
		Cache.getInstance().CACHE_SC_REPRISE.removeClass('ui-disabled');
	}
	
	if (new oldScore().getListScore()==0) {
		Cache.getInstance().CACHE_SC_HIGHSCORE.addClass('ui-disabled');
	} else {
		Cache.getInstance().CACHE_SC_HIGHSCORE.removeClass('ui-disabled');
	}
	
	/*if (platform=="web"){
		Cache.getInstance().CACHE_SC_MYFOOTERMENU.hide("slow");
	}*/
	
	if (platform=="android"){
		
		
		ScoreCardLog("Init hardware button");
		
		document.addEventListener("deviceready", onDeviceReady, false);
	   
		
		function onDeviceReady() {
	        // Register the event listener
	        document.addEventListener("menubutton", onMenuKeyDown, false);
	    	document.addEventListener("backbutton", backKeyDown, true); 
		}
	    
		function backKeyDown() { 
			// Call my back key code here.
			$.mobile.changePage('menu.html', 'pop', true, true);
			ScoreCardLog("GO BACK" + platform)
		}
		
		function onMenuKeyDown() {
			// Call my back key code here.
			$.mobile.changePage('preference.html', 'pop', true, true);
			ScoreCardLog("Go PREFE")
	    }
		
	
	    
	    
			
		
	}
	
})

$('#first_start').live( 'pageshow',function(event){

	//Run first start only if it's realy a first start (like back button for example)
	var data=localStorage["scorecard_first_start"];
	if(typeof(data)!='undefined'){
		$.mobile.changePage('menu.html', {transition: 'pop', role: 'page'});   
	}
	
	//Set the first start flag
	localStorage["scorecard_first_start"]=1;
		
	//Init jquery-cache 
	//Cache.getInstance().init("menu.js");

	ScoreCardLog("FIRST !!!!");
	$('#first_start').css('background-image', 'url(img/background.jpg)');
	$('#first_start').css('background-repeat', 'no-repeat');
	$('#first_start').css('background-position', 'center center');
	$('#first_start_BG').css('background', 'transparent');

	$('#first_start').css('margin-top',($(window).height() - $('[data-role=footer]').height() - $('#first_start').outerHeight())/2);
	
})
