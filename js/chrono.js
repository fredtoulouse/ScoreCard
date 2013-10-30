// GOLF Score Card webapp
// 2013-08-07
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

//Golbal var for timer
var myTimer;


//Need a global function for timer ? 
function myTimerFunction() {
	Chrono.getInstance().count();
}


function Chrono()  {

	var secon=0; //initialise les secondes
	var minu=0; //initialise les minutes
	var htmlId;
	var myTimer;
	var onGoing=0;
	
	function zeroPad(num, places) {
		var zero = places - num.toString().length + 1;
		return Array(+(zero > 0 && zero)).join("0") + num;
	}
	
	this.count = function (){
		secon+=1; //increment of 10s
		if (secon>59){secon=0;minu++} //si les secondes > 59, on les réinitialise à 0 et on incrémente les minutes de 1
		htmlId.innerHTML='<font color="#ff0000"><b>'+zeroPad(minu, 2)+":"+zeroPad(secon, 2)+'</b></font>'
	}

	this.stop = function reset(){ //fonction qui remet les compteurs à 0
		//window.clearTimeout(myTimer) 
		clearInterval(Chrono.getInstance().myTimer);
		secon=0;
		minu=0;
		htmlId.innerHTML='<font color="#3333ff"><b>'+zeroPad(minu, 2)+":"+zeroPad(secon, 2)+'</b></font>'
		onGoing=0;
	}

	
	this.start = function (){
		if (onGoing==0) {
			onGoing=1;
			htmlId.innerHTML=htmlId.innerHTML='<font color="#ff0000"><b>00:00</b></font>';
			Chrono.getInstance().myTimer=window.setInterval(myTimerFunction, 1000);
		}
		
	}
	
	this.init = function (){
		//Just a construtor for the singleton
	}
	
	//Hum to pass this value from gui ? 
	htmlId=Cache.getInstance().CACHE_SC_CHRONO;

	//INit the display
	htmlId.innerHTML=htmlId.innerHTML='<font color="#3333ff"><b>00:00</b></font>';

}

//Singleton structure :
Chrono.instance = null;  

Chrono.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Chrono(); 
  }  
  return this.instance;  
}  
