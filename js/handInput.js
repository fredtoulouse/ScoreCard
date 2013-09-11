// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html



var myctx = null; 
var fontSize = null; 
var fontWidthSize = null; 

SCfoundItem = function (val) {
	var car="??";
	var cpt=0;

	switch (val)
	{
		case "1":
		case "A":
		case "I":
		case "i":
		case "L":
		case "l":
		case ",":
		case "return":
			car="+1"
			cpt=1;
			break;
		case "2":
		case "Z":
		case "z":
			car="+2"
			cpt=2;
			break;
		case "3":
		case ")":
			car="+3"
			cpt=3;
			break;
		case "Q2":
		case "prefix":
		case "C":
			car="+4"
			cpt=4;
			break;	
		case "S":
		case "5":
			car="+5"
			cpt=5;
			break;	
		case "G":
		case "6":
			car="+6"
			cpt=6;
			break;	
		case "7":
		case "T":
			car="+7"
			cpt=7;
			break;	
		case "8":
		case "0":
			car="+8"
			cpt=8;
			break;	
		case "9":
			car="+9"
			cpt=9;
			break;	
		case "E":
			car="Err"
			cpt=1;
			break;	
		case "P":
		case "P2":
		case "R":
		case "R2":
			car="Put"
			cpt=1;
			break;	
		case "blank":
		case "-":
			car="-1"
			cpt=-1;
			break;	
		default: 
			car="+1"
			//car=val+"??"
			cpt=1;
			break;
	}
	
	
	
	myctx.fillStyle = "blue";
	if (car.length > 2) {
		myctx.font = "bold "+(fontSize*2/car.length)+"px Arial";
	} else {
		myctx.font = "bold "+fontSize+"px Arial";
	}
	
	myctx.fillText(car, fontWidthSize, fontSize);

	//Stored the scored
	Score.getInstance().addValCurrentHole(cpt, 
		Distance.getInstance().getLatitude(), 
		Distance.getInstance().getLongitude(),
		Distance.getInstance().getAccuracy());

	//Update the display
	updateValue();
	
	//Init the Chrono
	Chrono.getInstance().start();

}


SCNoFoundItem = function () {
	// By default if anything is identified, add +1  to the score
	
	myctx.fillStyle = "blue";
	myctx.font = "bold "+fontSize+"px Arial";
	myctx.fillText("+1", fontWidthSize, fontSize);
	
	//Stored the scored
	Score.getInstance().addValCurrentHole(1);

	//Update the display
	updateValue();

}


$('#neuf').live('pageinit', function (event) {
	//Init jquery-cache 
	Cache.getInstance().init("handInput.js");
	
	initHw("#myHwCanvas");
})

$('#neuf').live('pageshow', function (event) {

ScoreCardLog("LARGEUR  ECRAN : " +  $(window).width());
ScoreCardLog("LARGEUR  HTML : " +  $(document).width());

	ScoreCardLog("TAILLE  HEADER : "+   $('[data-role="header"]').height());
	ScoreCardLog("TAILLE  HTML : "+ $(document).height());
		
	document.getElementsByTagName('canvas')[0].width =$(document).width() - 100;
	
	ScoreCardLog("TAILLE  TABLEAU SCORE : " +  $('.score_9').height());

	ScoreCardLog("TAILLE  BOUTON : " +  $('#myCanvasCtrl').height());

	ScoreCardLog("TAILLE  ECRAN : " +  $(window).height());

//Footer and Header should not be initialized in pageshow, with ajax navigation, first initialization is static (58 and 42). Need to be corrected after.
//76 is extra value difference between document.height and windcow.height 

	document.getElementsByTagName('canvas')[0].height  =
		$(window).height()
		- 42 //header size
		- $('.score_9').height()
		- $('#myCanvasCtrl').height()
		- $('#textualInfo').height()
		- 46; //static value, difference between html and screeen size, need to be fixed;
		
	ScoreCardLog("TAILLE  HS : " + document.getElementsByTagName('canvas')[0].height);
	ScoreCardLog("TAILLE  HTML : " + $(document).height());
	
	
	myctx=$("#myHwCanvas")[0].getContext('2d')
	fontSize=parseInt(($("#myHwCanvas").height()*0.7));
	fontWidthSize=parseInt($("#myHwCanvas").width()/2)-parseInt(($("#myHwCanvas").height()*0.35));
	functionItemFind=SCfoundItem;
	functionNoItemFind=SCNoFoundItem;
	
	

	
})
