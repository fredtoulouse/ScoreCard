// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

function Score()  {

	var typeGolf;    //9 ou 18 trou 
	var arrayResult; //tableau des scores
	var currentHole; //id for the current playing hole
	var nameGolf; //Nom du golf
	var note; //Note sur la partie
	var weather; //meteo 
	var date; //Date 
	var db; //registered in database
	var previous; //registered in database
	var arrayDistance; //tableau des distances et valeur entre chaque trace
	
	this.addDistance = function (latitude, longitude, precision, valTxt) {
	
		if ((latitude!=null) && (longitude!=null)) {
			if ((latitude != 0) && (longitude !=0)) {
				if (this.arrayDistance[this.currentHole] == null) {
					this.arrayDistance[this.currentHole] = [[latitude, longitude,precision,valTxt]];
				} else {
					this.arrayDistance[this.currentHole].push([latitude, longitude,precision,valTxt]);
				}
			} else {
				ScoreCardLog("GPS unavailable for this point");
			}
		}
	}
	
	this.remDistance = function () {
		if (this.arrayDistance[this.currentHole] != null) {
			this.arrayDistance[this.currentHole].pop();
		} 
	}
	
	this.addCurrentHole = function(latitude, longitude, precision) {  
		ScoreCardLog("addCurrentHole " + this.arrayResult[this.currentHole]);
		this.arrayResult[this.currentHole]++;
		ScoreCardLog("+1 -> "+ this.arrayResult[this.currentHole]);
		this.previous.push(1);
		
		//Modif first entry
		this.addDistance(latitude, longitude, precision, "+1");
		
		this.store();
		ScoreCardLog("PREVIOUS " +JSON.stringify(this.previous));
	}  

	this.finishHole = function() {  
		ScoreCardLog("finishHole "+ this.arrayResult[this.currentHole]);
		this.arrayResult[this.currentHole]="12";
		this.store();
		this.validCurrentHole();
	}  

	this.addValCurrentHole = function(val, latitude, longitude, precision) {  
		ScoreCardLog("addCurrentHole " + this.arrayResult[this.currentHole]);
		//If val is negative, verify that the final score is not negative.
		if (this.arrayResult[this.currentHole]+parseInt(val) >= 0) {
			this.arrayResult[this.currentHole]=this.arrayResult[this.currentHole]+parseInt(val);
			if (parseInt(val) != 0) {
				this.previous.push(parseInt(val));
				var txtVal="";
				if (val >0) {
					txtVal="+"+val;
				} else {
					txtVal=" "+val;
				}
				this.addDistance(latitude, longitude, precision, txtVal);
			}		
			this.store();
			ScoreCardLog("PREVIOUS " +JSON.stringify(this.previous));
		}
	}  
	
	this.cancelPrevious = function() {
		var val=this.previous.pop();
		if (this.arrayResult[this.currentHole] - parseInt(val) >= 0) {
			this.arrayResult[this.currentHole]=this.arrayResult[this.currentHole]-parseInt(val);
			this.remDistance();
			this.store();
		} 
		ScoreCardLog("PREVIOUS " +JSON.stringify(this.previous));	
	}  
	
	this.remCurrentHole = function() {
		if (this.arrayResult[this.currentHole] > 0) {
			this.arrayResult[this.currentHole]--;
			this.store();
		} 
	}
	
	this.validCurrentHole = function() {  
		
		if ((this.currentHole+1) < this.typeGolf) {
			this.currentHole++;
			this.previous=[];
			this.store();
			ScoreCardLog("PREVIOUS " +JSON.stringify(this.previous));
			return 1;
		} else {
			this.currentHole=this.typeGolf;
			this.previous=[];
			this.store();
			ScoreCardLog("PREVIOUS " +JSON.stringify(this.previous));
			return 0;
		}
		
	}  
	
	this.getScore = function(hole) {
		return this.arrayResult[hole];	  
	}
	
	this.getResult = function() {
		var total = 0;
		
		this.arrayResult.forEach(function(item, i) {
			total += parseInt(item);
		})
		return total;	  
	}
	
	this.computeAnotherResult = function(anotherArray) {
		var total = 0;
		//TODO
		anotherArray.forEach(function(item, i) {
			total += parseInt(item);
		})
		return total;	  
	}




	this.getPar = function() {
		var total = 0;
		
		this.arrayResult.forEach(function(item, i) {
			total += parseInt(item);
		})
		return total;	  
	}
	
	
	this.reset = function () {
		localStorage.removeItem("scorecard_current");
		this.currentHole = 0;
		this.typeGolf = 9;
		this.arrayResult = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		this.previous = [];
		this.arrayDistance = [
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null
					];
		
	}
	
	this.store = function () {
		var data=JSON.stringify (
			{typeGolf: this.typeGolf, arrayResult: this.arrayResult, currentHole: this.currentHole, 
			nameGolf: this.nameGolf, //Nom du golf
			note: this.note,//Note sur la partie
			weather: this.weather, //meteo 
			date: this.date,
			db: this.db,
			arrayDistance: this.arrayDistance //distance parcour entre chaques coups
			}
		);
		localStorage["scorecard_current"]=data;	
		ScoreCardLog("Store Value Stored " + data);
	}
	
	this.getStoredScore = function () {
		try {	
			var data=localStorage["scorecard_current"];
			//If data is stored on disk, load it.
			if (data != null) {
				var myTmp=JSON.parse(data);
				//Set the date with the stored value
				this.typeGolf=myTmp.typeGolf;
				this.arrayResult=myTmp.arrayResult;
				this.currentHole=myTmp.currentHole;
				this.nameGolf=myTmp.nameGolf;
				this.note=myTmp.note
				this.weather=myTmp.weather;
				this.date=myTmp.date;
				this.db=myTmp.db;
				this.arrayDistance=myTmp.arrayDistance;
				ScoreCardLog("Get Value Stored " + data);
				return 1;		
			} else {
				return 0;
			}
				
		} catch(e) {
			ScoreCardLog("Error on store"+e.toString());
			return 0;
		}
	}
	
	
	//default value
	this.currentHole = 0;
	this.typeGolf = 9;
	this.arrayResult = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.previous = [];
	this.arrayDistance = [  null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null
					];
}



//Singleton structure :
Score.instance = null;  

Score.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Score();  
  }  
  return this.instance;  
}  
