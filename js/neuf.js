// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html



// Initialise le DOM 
var myScoreDisplay;
var myPosition;
var editScore=0;

//This function update the carroussel with all score display, need to fix a cache in order to avoid to use the jquery function a lot of time.
this.updateValue = function() {  
	Score.getInstance().arrayResult.forEach(function(item, i) {
		if (i < Score.getInstance().typeGolf) {
			if (i < Score.getInstance().currentHole ) {
			
				//$('#score_dis'+i)[0].innerHTML=item;
				Cache.getInstance().CACHE_SC_SCORE_DIS[i][0].innerHTML=item;
				//$('#t'+i).removeClass("en_cours");
				Cache.getInstance().CACHE_SC_T[i].removeClass("en_cours");
				//$('#t'+i).removeClass("not_yet");
				Cache.getInstance().CACHE_SC_T[i].removeClass("not_yet");
				//$('#t'+i).addClass("yet");
				Cache.getInstance().CACHE_SC_T[i].addClass("yet");
				
				//Pas definis
				if (myPosition != null) {
					if (myPosition.arrayPar[i]==0) {
						//$('#t'+i).css({ 'border': '5px solid #c8d0d6'});
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #ffe674'});
						
					} else if ( item < (myPosition.arrayPar[i] -1) ) {
						//Eagles
						//document.getElementById('tt').style.border = '4em solid black';
						//$('#t'+i).css({ 'border': '5px solid #20fc0c'});
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #20fc0c'});
						
					} else if ( item == (myPosition.arrayPar[i] -1) ) {
						//Birdie
						//$('#t'+i).css({ 'border': '5px solid #47c639'});
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #47c639'});
						
					} else if ( item == (myPosition.arrayPar[i]) ) {
						//Par
						//$('#t'+i).css({ 'border': '5px solid #6481e5'});
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border':' 5px solid #6481e5'});
						
					} else if ( item == (myPosition.arrayPar[i] +1) ) {
						//Bogey
						//$('#t'+i).css({ 'border': '5px solid #e1a42d'});
						
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #e1a42d'});
					} else if ( item > (myPosition.arrayPar[i] +1) ) {
						//More
						//$('#t'+i).css({ 'border': '5px solid #d61c0f'});
						
						Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #d61c0f'});
					}
				} else {
					//$('#t'+i).css({ 'border': '5px solid white'});
					Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid white'});
				} 
			} else if ( i == Score.getInstance().currentHole ) {
				Cache.getInstance().CACHE_SC_SCORE_DIS[i][0].innerHTML=item;
				Cache.getInstance().CACHE_SC_T[i].removeClass("not_yet");
				Cache.getInstance().CACHE_SC_T[i].removeClass("yet");
				Cache.getInstance().CACHE_SC_T[i].addClass("en_cours");
				Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid #ffe674'});
			} else {

				Cache.getInstance().CACHE_SC_SCORE_DIS[i][0].innerHTML="&#8194;&#8194;";;
				Cache.getInstance().CACHE_SC_T[i].removeClass("en_cours");
				Cache.getInstance().CACHE_SC_T[i].removeClass("yet");
				Cache.getInstance().CACHE_SC_T[i].addClass("not_yet");
				Cache.getInstance().CACHE_SC_T[i].css({ 'border': '5px solid white'});
				
				
				
			}
		}
		
	})
	
	//Set the text of the valid button, valid hole or valid score
	if ((Score.getInstance().currentHole+1) < Score.getInstance().typeGolf) {
		Cache.getInstance().CACHE_SC_VALIDSCORE.siblings('.ui-btn-inner').children('.ui-btn-text').text(jQuery.i18n.prop("msg_valid")+(Score.getInstance().currentHole +1));
		Cache.getInstance().CACHE_SC_VALIDSCOREHW.siblings('.ui-btn-inner').children('.ui-btn-text').text(jQuery.i18n.prop("msg_valid")+(Score.getInstance().currentHole +1));
	} else {
		Cache.getInstance().CACHE_SC_VALIDSCORE.siblings('.ui-btn-inner').children('.ui-btn-text').text(jQuery.i18n.prop("msg_valid_score"));
		Cache.getInstance().CACHE_SC_VALIDSCOREHW.siblings('.ui-btn-inner').children('.ui-btn-text').text(jQuery.i18n.prop("msg_valid_score"));
	}
	
	//slide the selected hole to the third displayed item in the carroussel ;
	myScoreDisplay.setCenterItem(Score.getInstance().currentHole);
	
	//set the HCP information, FBM check my in relaod myPosition is not setted !!!!
	if (myPosition) {
		if (myPosition.hcp[Score.getInstance().currentHole] != null) {
			Cache.getInstance().CACHE_SC_INFOHCP.innerHTML=" HCP : " +myPosition.hcp[Score.getInstance().currentHole];
		} else {
			Cache.getInstance().CACHE_SC_INFOHCP.innerHTML=" HCP: N/A"
		}
	}
}  


$( '#neuf_popup' ).live( 'pageshow',function(event){
	ScoreCardLog("POPUP SHOW ");
	
	Score.getInstance().getStoredScore();
	
	var myHistoryScore= new oldScore();
	if (myPosition!=null) {
		myHistoryScore.addScore(Score.getInstance(),myPosition.arrayPar);
	} else {
		myHistoryScore.addScore(Score.getInstance(), ["ND","ND","ND","ND","ND","ND","ND","ND","ND"]);
	}
		
	//Afficher le resultat de la partie
	$('#finalResult')[0].innerHTML=jQuery.i18n.prop("msg_result_score")+"&nbsp;:&nbsp;"+Score.getInstance().getResult();
	
	Distance.getInstance().stopLoc();
	
	Score.getInstance().getStoredScore();
	
	$('#send_email').on('click',function(event, ui){
		myMail = new PushData();
		if (myPosition!=null) {
			myMail.mail(Score.getInstance(), myPosition.arrayPar);
		} else {
			myMail.mail(Score.getInstance(), ["ND","ND","ND","ND","ND","ND","ND","ND","ND"]);
		}
	});
	
	$("#backMenu").on('click',function(event, ui){
		ScoreCardLog("RESET CURRENT SCORE !!!!" );
		Score.getInstance().reset();
	});
	
});


$( '#neuf' ).live( 'pagehide',function(event){
	ScoreCardLog("OVERFLOW2 "+   document.body.style.overflow );
	document.body.style.overflow = '';
	//$('.oneScore').die( 'tap' );
	Cache.getInstance().CACHE_SC_ONESCORE.die( 'tap' );
})

$( '#neuf' ).live( 'pagebeforeshow',function(event){
	ScoreCardLog("FBM PAGES BEFORE SHOW NEUF");
	
	//FBM a voir si on doit le deplacer sur l'init ou le laisser sur pageshow
	myScoreDisplay.init("#carte_score", "#prev", "#next");
	
	//Force the overflow mode to hidden
	document.body.style.overflow = 'hidden';
	
	ScoreCardLog("FBMPAGES BEFORESHOW 0.7 NEUF");
	Score.getInstance().getStoredScore();
	
	ScoreCardLog("FBMPAGES BEFORESHOW 1 NEUF");
		
	Cache.getInstance().CACHE_SC_SUMMARYSCORE.textContent=Score.getInstance().date;
	Cache.getInstance().CACHE_SC_VALIDSCORE[0].textContent=jQuery.i18n.prop("msg_valid")+" "+(Score.getInstance().currentHole +1);
 	Cache.getInstance().CACHE_SC_VALIDSCOREHW[0].textContent=jQuery.i18n.prop("msg_valid")+" "+(Score.getInstance().currentHole +1);
	
	//select the notation requested
	if (Configuration.getInstance().useHW == "on") {
	      	Cache.getInstance().CACHE_SC_NOHW.hide();
	      	Cache.getInstance().CACHE_SC_HW.show();	
	} else {
	 	Cache.getInstance().CACHE_SC_NOHW.show();
 		Cache.getInstance().CACHE_SC_HW.hide();
	}

	ScoreCardLog("FBMPAGES BEFORESHOW 2 NEUF");

	//Load Position if available from db 

	ScoreCardLog("Try to load :"+top_source+"db/"+Score.getInstance().nameGolf+".js");

	if (Score.getInstance().db==0)  {
		$.getScript(top_source+"db/"+Score.getInstance().nameGolf+".js", function(){
			ScoreCardLog(top_source+"db/"+Score.getInstance().nameGolf+".js  loaded");
			
			try {
				//Initialiser la carte du PAR avec les positions
				myPosition=new Position();
			} catch(err) {
				eval(xhr);
				myPosition=new Position();
			}
				
			myPosition.arrayPar.forEach(function(item, i) {
				//$('#score_par'+i)[0].innerHTML="Par<br>"+item;
				Cache.getInstance().CACHE_SC_SCORE_PAR[i][0].innerHTML="Par<br>"+item;
			})
		});
	} else {
		$.getScript(top_source+"db/"+"other.js", function(){
			ScoreCardLog(top_source+"db/other.js  loaded");
			
			try {
				//Initialiser la carte du PAR avec les positions
				myPosition=new Position();
			} catch(err) {
				eval(xhr);
				myPosition=new Position();
			}
			
			myPosition.arrayPar.forEach(function(item, i) {
			//$('#score_par'+i)[0].innerHTML="Par<br>ND";
			Cache.getInstance().CACHE_SC_SCORE_PAR[i][0].innerHTML="Par<br>ND";
			})
		});
	}
	
	if (( Score.getInstance().currentHole+1) < Score.getInstance().typeGolf) {
		Cache.getInstance().CACHE_SC_REMSCORE.button("enable");
		Cache.getInstance().CACHE_SC_ADDSCORE.button("enable");
	} else {
		Cache.getInstance().CACHE_SC_REMSCORE.button("disable");
		Cache.getInstance().CACHE_SC_ADDSCORE.button("disable");
	}
		
})

$( '#neuf' ).live( 'pageshow',function(event){
	//FBM a voir si on doit le deplacer sur l'init ou le laisser sur pageshow
	myScoreDisplay.run();
	
	updateValue();
})
	
$( '#edit_S' ).live( 'pageshow',function(event){

	//Init jquery-cache 
	Cache.getInstance().init("edit_S.js");	



	//$( '#indexScore')[0].innerHTML=editScore;
	Cache.getInstance().CACHE_SC_INDEXSCORE.innerHTML=editScore;
	
	//$('#slider-score').val(Score.getInstance().arrayResult[editScore]).slider('refresh');
	Cache.getInstance().CACHE_SC_SLIDER_SCORE.val(Score.getInstance().arrayResult[editScore]).slider('refresh');
	
	Cache.getInstance().CACHE_SC_VALIDEEDITSCORE.on('click',function(event, ui){
	//$('#valideEditScore').on('click',function(event, ui){
		ScoreCardLog("New score  " + $('#slider-score').val());
		//Score.getInstance().arrayResult[editScore]= parseInt($('#slider-score').val());
		Score.getInstance().arrayResult[editScore]= parseInt(Cache.getInstance().CACHE_SC_SLIDER_SCORE.val());
		Score.getInstance().store();
	});

})

//TEST
var event_ok = true;
function TapBindEvent(element) {
		element.bind('tap', function(event, ui) {
		if (event_ok == false) {
			event.preventDefault();
			return false;
		} else {
			event_ok = false;
			setTimeout(function () {
				event_ok = true;
			}, 500);

			var myRegex = /[0-9]+/
			
			$('#'+event.currentTarget.id).addClass("edit");
			editScore=myRegex.exec(event.currentTarget.id)
			$.mobile.changePage('edit.html', 'pop', true, true);
		}
	});
}

$( '#neuf' ).live( 'pageinit',function(event){
	
	ScoreCardLog("FBM PAGES INIT NEUF");
	
	var myCanvas = new Canvas();
	myScoreDisplay = new ScoreDisplay();
	
	//FBM a voir si on doit le deplacer sur l'init ou le laisser sur pageshow
	//myScoreDisplay.init("#carte_score", "#prev", "#next");

	//Init jquery-cache 
	Cache.getInstance().init("neuf.js");	

	//Init the chronometer
	Chrono.getInstance().init();


	Cache.getInstance().CACHE_SC_REMSCORE.on('click',function(event, ui){
		//other code
		ScoreCardLog("Remove Score ");
		Score.getInstance().remCurrentHole();
		updateValue();
	});


	Cache.getInstance().CACHE_SC_CANCELSCOREHW.on('click',function(event, ui){
		//other code
		ScoreCardLog("Cancel Score ");
		Score.getInstance().cancelPrevious();
		clear_canvas();
		updateValue();
	});

	
	Cache.getInstance().CACHE_SC_VALIDSCORE.on('click',function(event, ui){
		//other code
		ScoreCardLog("Valid Score ");
		var finished=Score.getInstance().validCurrentHole();
		
		updateValue();
		
		Chrono.getInstance().stop();
		
		if ( finished == 0 ) {
			/*$('#remScore').button("disable");
			$('#addScore').button("disable");*/
			
			Cache.getInstance().CACHE_SC_REMSCORE.button("disable");
			Cache.getInstance().CACHE_SC_ADDSCORE.button("disable");

			
			$.mobile.changePage('popup.html', {transition: 'pop', role: 'page'});   
			ScoreCardLog("FINIS !!!! ");
		}
	});

//FBM
	Cache.getInstance().CACHE_SC_VALIDSCOREHW.on('tap',function(event, ui){
		//other code
		ScoreCardLog("Valid Score ");
		var finished=Score.getInstance().validCurrentHole();
		updateValue();
		clear_canvas();
		
		Chrono.getInstance().stop();
		
		if ( finished == 0 ) {
			Cache.getInstance().CACHE_SC_REMSCORE.button("disable");
			Cache.getInstance().CACHE_SC_ADDSCORE.button("disable");
			
			$.mobile.changePage('popup.html', {transition: 'pop', role: 'page'});   
			ScoreCardLog("FINIS !!!! ");
		}
	});

	
	Cache.getInstance().CACHE_SC_ADDSCORE.on('click',function(event, ui){
		//other code
		ScoreCardLog("Add Score ");
		Score.getInstance().addCurrentHole( 
			Distance.getInstance().getLatitude(), 
			Distance.getInstance().getLongitude(), 
			Distance.getInstance().getAccuracy);
			updateValue();
			Chrono.getInstance().start();
	});
	
	TapBindEvent($('.oneScore'));
	
	
	if (Configuration.getInstance().gps == "on") {
		ScoreCardLog("INIT GPS !!!!");
		Distance.getInstance().authorizeLoc();
	}
	
	ScoreCardLog("FBM FIN PAGES INIT NEUF");
	
	
});
