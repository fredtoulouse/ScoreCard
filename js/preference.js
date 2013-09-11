// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

var loadedPreference = 0;
var myConfiguration;

function initPreference() {
	myConfiguration = Configuration.getInstance();
	$('#name_player').val(myConfiguration.playerName);
	$('#email_player').val(myConfiguration.playerEmail);
	
	$('#select-choice-lang').val(myConfiguration.language).selectmenu("refresh");
	$('#select-choice-unit').val(myConfiguration.unit).selectmenu("refresh");
	$('#flip-GPS').val(myConfiguration.gps).slider('refresh');
	$('#flip-USEHW').val(myConfiguration.useHW).slider('refresh');
}
	
$('#name_player').live('input', function() {
    	myConfiguration.setPlayerName($('#name_player').val());
})
    
$('#email_player').live('input', function() {
    	myConfiguration.setPlayerEmail($('#email_player').val());
})
    

$("#select-choice-lang").live( "change", function(event, ui) {
   	myConfiguration.setLanguage($('#select-choice-lang').val());
	location.reload() ;
});

$("#select-choice-unit").live( "change", function(event, ui) {
	myConfiguration.setUnit($('#select-choice-unit').val());
});

$("#flip-GPS").live( "change", function(event, ui) {
	myConfiguration.setGPS($('#flip-GPS').val());
});
   
$("#flip-USEHW").live( "change", function(event, ui) {
	myConfiguration.setHW($('#flip-USEHW').val());
});
   
   
$( '#preference' ).live( 'pageinit',function(event){
		ScoreCardLog("pageinit Preference");
		
		//Init jquery-cache 
		Cache.getInstance().init("preference.js");
		
		if (loadedPreference==0) {
			initPreference();
			loadedPreference=1
		}
		
});

