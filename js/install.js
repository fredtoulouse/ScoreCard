// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html




$( '#install_page' ).live( 'pageinit',function(event){
	//var b = document.getElementById('applicationInstall');
	//function mozAppInstall(location,node){
	var request = window.navigator.mozApps.install("http://127.0.0.1:8000/manifest.webapp");
	request.onsuccess = function () {
		ScoreCardLog("Install successful.");
	};
	request.onerror = function () {
		ScoreCardLog("An error occured: " + this.error.name);
	};	    

});



