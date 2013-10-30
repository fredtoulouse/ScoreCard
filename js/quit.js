// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


$( '#quit_page' ).live( 'pageshow',function(event){
	ScoreCardLog("Center the text in the Quit Score page");
	$('#content-quit').css('margin-top',($(window).height() - $('[data-role=footer]').height() - $('#content-quit').outerHeight())/2);
});

$( '#quit_page' ).live( 'pageinit',function(event){
	ScoreCardLog("QUIT PAGE  ");
	$('#quitScore').on('click',function(event, ui){
		//close application
		ScoreCardLog("Quit Score ");
		switch (platform){
			case "android":
			//PhoneGAP
				navigator.app.exitApp();
			break;
			//FirefoxOS
			case "firefoxos":
				window.close();
			break;
			//web
			case "web":
				window.location.replace("http://fredtoulouse.github.io/ScoreCard/");
			break;
		}
	});
});



