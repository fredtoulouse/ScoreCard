// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

function Configuration()  {
	var playerName; //Nom jouer
	var playerEmail; //email du joeur
	var language; //language
	var unit;//Meter or Yards
	var gps;//gps 
	var useHW;//Button or HW ?
	
	this.store = function () {
		var data=JSON.stringify (
			{playerName: this.playerName, playerEmail: this.playerEmail, language: this.language, unit: this.unit, gps: this.gps, useHW:this.useHW}
		);
		localStorage["scorecard_preference"]=data;	
		ScoreCardLog("Value Stored " + data);
	}
	
	this.setPlayerName = function(val) {
		this.playerName=val;
		this.store();
		//Stocker en local
	}


	this.setPlayerEmail = function(val) {
		this.playerEmail=val;
		this.store();
		//Stocker en local
	}
	
	
	this.setLanguage = function(val) {
		this.language=val;
		this.store();	
		//Stocker en local
	}
	
	
	this.setUnit = function(val) {
		this.unit=val;
		this.store();	
		//Stocker en local
	}
	
	
	this.setGPS = function(val) {
		this.gps=val;
		this.store();
		//Stocker en local
	}


	this.setHW = function(val) {
		this.useHW=val;
		this.store();
		//Stocker en local
	}

//default value
	this.playerName="";
	this.playerEmail="";
	this.language="en";
	this.unit="meter";
	this.gps="on";
	this.useHW="on";
	
	//Verifie storage 
	try {	
		var data=localStorage["scorecard_preference"];
		ScoreCardLog ("preference "+ data);
		if(typeof(data)=='undefined'){
			ScoreCardLog ("No preference stored, stored the default value");
			this.store();
		} else {
			ScoreCardLog ("Preference stored, get the value from local"+data);
			var myTmp=JSON.parse(data);
			//Set the date with the stored value
			this.playerName=myTmp.playerName;
			this.playerEmail=myTmp.playerEmail;
			this.language=myTmp.language;
			this.unit=myTmp.unit;
			this.gps=myTmp.gps;
			this.useHW=myTmp.useHW;
			
		}
	} catch(e) {
		ScoreCardLog ("Error on store"+e.toString());
	}
}


//Singleton structure :
Configuration.instance = null;  

Configuration.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Configuration();  
  }  
  return this.instance;  
}  

