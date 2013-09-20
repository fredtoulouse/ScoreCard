// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html



function Distance()  {

	var myLat = 0;
	var myLong = 0;
	var myAccuracy = 0;
	var myError;
	var survId=0;
	var meter=1;
	var myThis;
	
	myThis=this;
	
	this.authorizeLoc = function() {
		if (Configuration.getInstance().unit=="meter") {
			meter=1;
		} else {
			meter=0;
		}
		myError=jQuery.i18n.prop("msg_pos_init");
		ScoreCardLog("INITIALISATION of GPS");
		survId=navigator.geolocation.watchPosition(successCallback, errorCallback,{enableHighAccuracy : true, timeout:1000000, maximumAge:10000});
	}
	
	//Private Function
	function successCallback(position){
		myLat=position.coords.latitude;
		myLong=position.coords.longitude;	 
		 
		myAccuracy=position.coords.accuracy;
		
		
		myError="";
		
		//Display in the main windows the distance, if database is known
		if (Score.getInstance().db == 0) {
			Cache.getInstance().CACHE_SC_INFOPOS.innerHTML=Distance.getInstance().getDistance();
		}
	};
	
	this.stopLoc =function (){
		if (survId != 0) {
			navigator.geolocation.clearWatch(this.survId);
		}
	}
	
	function errorCallback(error){
		switch(error.code){
			case error.PERMISSION_DENIED:
				ScoreCardLog("PERMISSION DENIED");
				myError=jQuery.i18n.prop("msg_pos_denied");
				break;			
			case error.POSITION_UNAVAILABLE:
				ScoreCardLog("POSITION UNAVIALABLE");
				myError=jQuery.i18n.prop("msg_pos_nodispo");
				break;
			case error.TIMEOUT:
				ScoreCardLog("TIMEOUT");
				myError=jQuery.i18n.prop("msg_pos_timeout");
				break;
			}
	};
	
	//Distance en metre
	this.computeDistance = function (lat_a, lon_a, lat_b, lon_b) {
		if ((lat_a==lat_b) && (lon_a == lon_b)) {
			if (meter == 1) {
				return "0 m";
			} else {
				return "0 yards";
			}
		}
		
		a = Math.PI / 180;
		lat1 = lat_a * a;
		lat2 = lat_b * a;
		lon1 = lon_a * a;
		lon2 = lon_b * a;

		t1 = Math.sin(lat1) * Math.sin(lat2);
		t2 = Math.cos(lat1) * Math.cos(lat2);
		t3 = Math.cos(lon1 - lon2);
		t4 = t2 * t3;
		t5 = t1 + t4;
		rad_dist = Math.atan(-t5/Math.sqrt(-t5 * t5 +1)) + 2 * Math.atan(1);
		if (meter == 1) {
			return parseInt((rad_dist * 3437.74677 * 1.1508) * 1609.3470878864446)+" m";
		} else {
			return parseInt((rad_dist * 3437.74677 * 1.1508) * 1609.3470878864446*0.9144)+" yards";
		}
		
		return parseInt((rad_dist * 3437.74677 * 1.1508) * 1609.3470878864446);
	}
	
	this.getLatitude = function() {
		return myLat;
	}
	
	this.getAccuracy = function() {
		return myAccuracy;
	}
	
	this.getLongitude = function() {
		return myLong;
	}
	
	this.addDistanceEachHoleHtmlView = function() {
		var distEachHole="";
		var first_pos;
		
		if (Score.getInstance().arrayDistance[Score.getInstance().currentHole] != null) {
			first_pos=[0,0];
			Score.getInstance().arrayDistance[Score.getInstance().currentHole].forEach(function(one_pos, n) {
				if (one_pos != null) {
					if (((one_pos[0] == 0) && (one_pos[1] == 0)) || ((one_pos[0] == null) && (one_pos[1] == null))) {
						ScoreCardLog("one_pos a 0 pas de calcul\n");
					} else {
						if ((first_pos[0]==0) && (first_pos[1]==0)) {
							first_pos=one_pos; //First position initalized
						} else {
							//compute distance from last position
							ScoreCardLog("GPS : distance " + myThis.computeDistance(first_pos[0], first_pos[1], one_pos[0], one_pos[1]));
							distEachHole=distEachHole+" - "+myThis.computeDistance(first_pos[0], first_pos[1], one_pos[0], one_pos[1])+ "</br>\n"; 
							first_pos=one_pos;
						}
					}
				}
			})
		}
		return "\n"+distEachHole;
	}
	
	this.getDistance = function() {
		//Calule la distance du green 
		dist="N/A";
		if (myPosition != null) {
			if (myError=="") {
				dist=this.computeDistance(myPosition.arrayPosition[Score.getInstance().currentHole][0], myPosition.arrayPosition[Score.getInstance().currentHole][1], 
				myLat, myLong)+" +/- ";
				
				if (meter == 1) {
					dist += myAccuracy +" m";
				} else {
					dist += (myAccuracy*0.9144)+" yards";
				}
			} else {
				dist=myError;
			}
		}
		return dist
	}
}


//Singleton structure :
Distance.instance = null;  

Distance.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Distance();  
  }  
  return this.instance;  
}  




$( '#neuf_two' ).live( 'pageshow',function(event){
	ScoreCardLog("Compute Distance Show");
	
	//Init jquery-cache 
	Cache.getInstance().init("distance.js");
	
	//var messageDistance=;
	if(navigator.geolocation) {
 		if (Configuration.getInstance().gps == "on") {
			$('#show_dist')[0].innerHTML="";
			if (Score.getInstance().db == 0) {
				ScoreCardLog("messageDistance :: " + $('#show_dist')[0].innerHTML);
				$('#show_dist')[0].innerHTML=Distance.getInstance().getDistance();
			} else {
				$('#show_dist')[0].innerHTML=jQuery.i18n.prop("msg_no_dbdist");
				ScoreCardLog("messageDistance :: " + $('#show_dist')[0].innerHTML);
			}
			$('#show_dist')[0].innerHTML=$('#show_dist')[0].innerHTML+"</br>"+Distance.getInstance().addDistanceEachHoleHtmlView();
		} else {
			$('#show_dist')[0].innerHTML=jQuery.i18n.prop("msg_no_activated_gps");
		}
	} else {
		$('#show_dist')[0].innerHTML=jQuery.i18n.prop("msg_no_activated_gps");
	}
});
