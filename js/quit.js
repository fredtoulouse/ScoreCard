// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

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
				window.close();
			break;
		}
	});
});



