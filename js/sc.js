// GOLF Score Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


//Set the root directory 
//Add all javascript file requested by the software.

//Platform support 
platform="firefoxos"; //platform has three possible value : web, android, firefoxos
//top_source="file:///home/patrick/Documents/site/ScoreCard-master/"; // The top root for the source, don't forget to complete with a '/' on the end of the directory
//top_source="file:///C:/Users/fblanche/Desktop/levignac/site/gsc/"; // The top root for the source, don't forget to complete with a '/' on the end of the directory
top_source="/"; // The top root for the source, don't forget to complete with a '/' on the end of the directory
//top_source="file:///android_asset/www/"; // The top root for the source, don't forget to complete with a '/' on the end of the directory
//top_source="file:///android_asset/www/"; // The top root for the source, don't forget to complete with a '/' on the end of the directory

//if android, add the javascript phone gap support
if (platform == "android") {
	document.write('<script src="ext/cordova-2.7.0.js"><\/script>');
	document.write('<script src="ext/EmailComposer.js"><\/script>');
	document.write('<script src="ext/phonegap_video.js"><\/script>');
	
	//CSS support for android
	$('head').append('<link rel="stylesheet" href="css/android.css" type="text/css" />');

}

//DEBUG MODE fro PHONEGAP
//document.write('<script src="http://debug.phonegap.com/target/target-script-min.js#fbm197665"></script>');

document.write("<script type='application/javascript' src='ext/fastclick.js'></script>");
document.write("<script type='application/javascript'>window.addEventListener('load', function() { new FastClick(document.body); console.log ('FASTCLICK ENABLED');}, false);</script>");



document.write('<script src="ext/jquery.mobile-1.3.min.js"><\/script>');


document.write('<script src="ext/jquery.carouFredSel.js"><\/script>');
document.write('<script src="ext/hw.js"><\/script>');
document.write('<script src="ext/jquery.mousewheel.min.js"><\/script>');
document.write('<script src="ext/jquery.touchSwipe.min.js"><\/script>');
document.write('<script src="ext/jquery.transit.min.js"><\/script>');
document.write('<script src="ext/jquery.ba-throttle-debounce.min.js"><\/script>');
document.write('<script src="ext/jquery.i18n.properties.js"><\/script>');

//The all db list 
document.write('<script src="db/list.js"><\/script>');

// Get all score card javascript 
document.write('<script src="js/cache.js"><\/script>');
document.write('<script src="js/install.js"><\/script>');
document.write('<script src="js/configuration.js"><\/script>');
document.write('<script src="js/score.js"><\/script>');
document.write('<script src="js/menu.js"><\/script>');
document.write('<script src="js/intertionalisation.js"><\/script>');
document.write('<script src="js/parcour.js"><\/script>');
document.write('<script src="js/preference.js"><\/script>');
document.write('<script src="js/canvas.js"><\/script>');
document.write('<script src="js/score_display.js"><\/script>');
document.write('<script src="js/neuf.js"><\/script>');
document.write('<script src="js/distance.js"><\/script>');
document.write('<script src="js/consult.js"><\/script>');
document.write('<script src="js/pushData.js"><\/script>');
document.write('<script src="js/version.js"><\/script>');
document.write('<script src="js/reset.js"><\/script>');
document.write('<script src="js/about.js"><\/script>');
document.write('<script src="js/delete_history.js"><\/script>');
document.write('<script src="js/handInput.js"><\/script>');
document.write('<script src="js/list_parcours.js"><\/script>');
document.write('<script src="js/tutorial.js"><\/script>');
document.write('<script src="js/chrono.js"><\/script>');
document.write('<script src="js/quit.js"><\/script>');



document.write('<script src="js/store_api.js"><\/script>');


debugLog="";
//log function
function ScoreCardLog (msg) {
	var today = new Date();
	mylog=today.getFullYear()+"/"+today.getMonth()+1+"/"+today.getDate()+" " + today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+":"+ today.getMilliseconds() +" -> "+msg+"\n";
	debugLog+=mylog
	console.info(mylog);
}


	
