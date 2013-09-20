// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html



//Manage the history and display it
//ToDo split display and data 

var reg=/\-.*/
var selected;
var myHistoryScore= new oldScore();
var myChoosenScore;	
var myInfoScoreDisplay;	
	
		

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

//Classe that store the all score from the player in the local storage filessystem.
function oldScore()  {
	var listScore;
	this.getListScore = function () {
		var data=localStorage["scorecard_history"];
		if (data != null) {
			this.listScore=JSON.parse(data);
		} else {
			this.listScore=[];
		}
		
		ScoreCardLog ("The History "+data);
		
		return this.listScore;
	}
	
	this.addScore = function (score, par) {
		var myConfiguration = Configuration.getInstance();
		var cpt=0;
		var retry=1;
		var found=0;
		
		var tmpnameGolf=score.nameGolf;
		while (retry == 1) {
			this.listScore.forEach(function(item, i) {
				if ((score.date == item[0]) && (tmpnameGolf == item[1])) {
					cpt=cpt+1;
					tmpnameGolf=score.nameGolf+"--"+cpt;
					found=1;
				} 
			})
			if (found==1) {
				retry=1;
				found=0;
			} else {
				retry=0;
			}
		}
		this.listScore.push([score.date, score.nameGolf, myConfiguration.playerName, score.weather, score.note, score.typeGolf, score.arrayResult,score.arrayDistance,par]) 
		var data=JSON.stringify (this.listScore);
		
		ScoreCardLog ("NEW HISTORY "+data);
		
		localStorage["scorecard_history"]=data;
	}
	
	this.suppressScore = function (index) {
		ScoreCardLog("remove " + this.listScore[index][0]);
		this.listScore.remove(index);
		var data=JSON.stringify (this.listScore);
		
		ScoreCardLog ("OLD HISTORY "+data);
		
		localStorage["scorecard_history"]=data;
	}
	
	try {	
		var data=localStorage["scorecard_history"];
		if(typeof(data)=='undefined'){
			this.listScore=[];
		} else {
			this.listScore=JSON.parse(data);
		}
		
	} catch(e) {
		ScoreCardLog ("Error on store history "+e.toString());
	}
}

//Genere l'affichage selon la conf Historique
this.generateList = function() {  
	myHistory=myHistoryScore.getListScore();
	
	var cache_UL=$('ul');
	cache_UL.empty();
	var newHtml="";
	var cpt=0;
	
	var year;
	//Garante that Score displayed are from the more recent to the older
	myHistory.sort().reverse().forEach(function(item, i) {
		if (i ==0) {
			year=item[0].replace(reg,"");
			newHtml+='<li data-role="list-divider">'+ year +'</li>';
		}
		
		if (item[0].replace(reg,"") != year) {
			year=item[0].replace(reg,"");
			newHtml+='<li data-role="list-divider">'+ year +'</li>';
		}
		
		newHtml+='<li><a href="#mypanel">'+ item[0] +' '+ item[1] +'</a> <div style="visibility:hidden;">=='+cpt+'</div></li>';
		cpt++;
	})
	
	cache_UL.append(newHtml);
	
	cache_UL.children('li').bind('touchstart mousedown', function(e) {
		selected=$(this)[0].textContent;
		selectedId = parseInt(selected.replace(/.*==/, ""));
		
		ScoreCardLog("Selected index " + selectedId);
		
		myChoosenScore=myHistory[selectedId];
		myChoosenIndex=selectedId
		updateInfoScore(myChoosenScore, 0);

	})
	
	//Refresh the view 
	$('#listScore').listview('refresh');

}

this.updateInfoScore = function(item, id) {  
	$('#infoScore'+id)[0].innerHTML= "<h2>"+item[1]+"</h2><h3>"+item[0]+"</br></h3>"+jQuery.i18n.prop("msg_player_name")+":"+item[2]+"</br>"+jQuery.i18n.prop("msg_climat")+":";
	$('#infoScore'+id)[0].innerHTML=$('#infoScore'+id)[0].innerHTML+"<IMG class='meteo' SRC='img/"+item[3]+".png' ALT='"+jQuery.i18n.prop(item[3])+"'></br>"
	$('#infoScore'+id)[0].innerHTML= $('#infoScore'+id)[0].innerHTML+jQuery.i18n.prop("msg_golf_note")+":"+item[4]+"</br>";
	$('#infoScore'+id)[0].innerHTML= $('#infoScore'+id)[0].innerHTML+jQuery.i18n.prop("msg_result_score")+"&nbsp;:&nbsp;"+Score.getInstance().computeAnotherResult(item[6])+"</br>";
}


this.table9 = function(score, par) {
	par.forEach(function(item, i) {
		if ( i<9 ) {
			$('#info_score_dis'+i)[0].innerHTML=score[i];
				
				
			$('#info_t'+i).addClass("yet");
			if (item != "ND") {
				$('#info_score_par'+i)[0].innerHTML="Par<br>"+item;
			
				if (par[i]==0) {
					$('#info_t'+i).css({ 'border': '5px solid #c8d0d6'});
				} else if ( score[i] < (item -1) ) {
					//Eagles
					//document.getElementById('tt').style.border = '4em solid black';
					$('#info_t'+i).css({ 'border': '5px solid #20fc0c'});
				} else if ( score[i] == (item -1) ) {
					//Birdie
					$('#info_t'+i).css({ 'border': '5px solid #47c639'});
				} else if ( score[i] == (item) ) {
					//Par
					$('#info_t'+i).css({ 'border': '5px solid #6481e5'});
				} else if ( score[i] == (item +1) ) {
					//Bogey
					$('#info_t'+i).css({ 'border': '5px solid #e1a42d'});
				} else if ( score[i] > (item +1) ) {
					//More
					$('#info_t'+i).css({ 'border': '5px solid #d61c0f'});
				}
			} else {
				$('#info_t'+i).css({ 'border': '5px solid white'});
			}
		}
	});
}



$( '#confirm_supress' ).live( 'pageshow',function(event){
	updateInfoScore(myChoosenScore, 3);
	
	Cache.getInstance().CACHE_SC_CONFIRMSUPRESSSCORE.on('click',function(event, ui){
		//other code
		ScoreCardLog("Supress " + myChoosenScore[0] +' ' +myChoosenScore[1]);
		myHistoryScore.suppressScore(myChoosenIndex);
	});
})

$( '#plus_info' ).live( 'pagebeforeshow',function(event){
	updateInfoScore(myChoosenScore, 1);

	myInfoScoreDisplay = new ScoreDisplay();
	myInfoScoreDisplay.init("#info_carte_score", "#info_prev", "#info_next");
	
	//display the 9 holes, ToDo support for 18 holes
	table9(myChoosenScore[6], myChoosenScore[8]);
	
	Cache.getInstance().CACHE_SC_INFO_SEND_EMAIL.on('click',function(event, ui){
		myCurrentScore=new Score();
		
		ScoreCardLog("MAIL !!!!");
		
		myCurrentScore.typeGolf=myChoosenScore[5];    //9 ou 18 trou 
		myCurrentScore.arrayResult=myChoosenScore[6]; 
		myCurrentScore.nameGolf=myChoosenScore[1]; 
		myCurrentScore.note=myChoosenScore[4]; 
		myCurrentScore.weather=myChoosenScore[3]; 
		myCurrentScore.date=myChoosenScore[0]; 
		myCurrentScore.arrayDistance=myChoosenScore[7]; 
		myMail = new PushData();
		myMail.mail(myCurrentScore, myChoosenScore[8]);
	});
	
})


$( '#plus_info' ).live( 'pageshow',function(event){
	//FBM a voir si on doit le deplacer sur l'init ou le laisser sur pageshow
	myInfoScoreDisplay.run();
	//myInfoScoreDisplay.fixArrow();
})

$( '#consult' ).live( 'pageshow',function(event){
	ScoreCardLog ("Consult appear -> load the score stored on Local");
	generateList();
})


//Init the cache
$( '#consult' ).live( 'pageinit',function(event){
	//Init jquery-cache 
	Cache.getInstance().init("consult.js");
});


//Init the cache
$( '#plus_info' ).live( 'pageinit',function(event){
	//Init jquery-cache 
	Cache.getInstance().init("plus_info");
});

//Init the cache
$( '#confirm_supress' ).live( 'pageinit',function(event){
	//Init jquery-cache 
	Cache.getInstance().init("confirm_supress");
});
