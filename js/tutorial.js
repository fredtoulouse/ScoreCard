// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


$( '#tuto_page' ).live( 'pageshow',function(event){
	$('#link_video')[0].height=parseInt((0.8*($(window).height() - 58 - 42)));
	$('#link_video')[0].width=parseInt((0.8*($(window).width() - 58 - 42)));
	
	switch (platform){
		case "web":
			//[0].src =
			$("video")[0].play();
			ScoreCardLog("No Modification VIDEO");
		break;
		
		case "android":
				//PhoneGAP https://github.com/macdonst/VideoPlayer
				ScoreCardLog("INITIALISATION video link, use external src");
			/*	$('#link_video')[0].src='http://www.lepetitfred.net/golf/video/golf.webm';
				$('#link_video')[0].poster="http://www.lepetitfred.net/golf/video/golf.jpg";*/
			
				/*$("video")[0].play();*/
				
				$('#link_video').on('click',function(event, ui){
					ScoreCardLog("Request the VIDEO");
					window.plugins.videoPlayer.play("file:///android_asset/www/video/golf.webm");
				});
				window.plugins.videoPlayer.play("file:///android_asset/www/video/golf.webm");
		break;
		
		case "firefoxos":
			//firefoxOS
			$("video")[0].play();
			ScoreCardLog("No Modification VIDEO");
		break;
		
	};
	
});



