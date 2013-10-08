// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


function htmlEncode(value){
	return $('<div/>').text(value).html();
	/*unescape(encodeURIComponent($('<div/>').text(value).html()));*/
}


function generateTxtScore (myScore, par) {
	var corp_mail = 	jQuery.i18n.prop('msg_player_name')+":\t"+Configuration.getInstance().playerName +"\n"+
						jQuery.i18n.prop('msg_date')+":\t"+myScore.date +"\n"+
						jQuery.i18n.prop('msg_golf_name') +":\t"+myScore.nameGolf+"\n"+
						jQuery.i18n.prop('msg_golf_note')+":\t"+myScore.note +"\n"+
						jQuery.i18n.prop('msg_climat') +":\t"+jQuery.i18n.prop(myScore.weather)+"\n"+
						jQuery.i18n.prop('msg_type')+":\t"+myScore.typeGolf + "\n"+jQuery.i18n.prop('msg_result_score')+"\n";

			
			
			 
			
			myScore.arrayResult.forEach(function(item, i) {
				if (i < myScore.typeGolf) {
					corp_mail=corp_mail+jQuery.i18n.prop('msg_hole_number')+" "+(i+1) + " :\t" + item; 
					if ( par != null ) {
						corp_mail=corp_mail+"\t\t Par :\t"+par[i]
					}
					corp_mail=corp_mail+"\n";
				}
			})
					
			corp_mail=corp_mail+"\n"+"TOTAL:"+myScore.getResult()+"\n";
	return corp_mail;
}

function getMaxShot (myScore) {
	var maxScore=0
	myScore.arrayResult.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			//Get the max score for the game 
			if (myScore.arrayDistance[i] != null) {
				if ( myScore.arrayDistance[i].length > maxScore) {
					maxScore=myScore.arrayDistance[i].length;
					ScoreCardLog("New MAX Value " + maxScore);
				}
			}
		}
	})
	ScoreCardLog("The MAX SHOT Value " + maxScore);
	return maxScore;
}

function generateHtmlScore (myScore, par, maxShot) {
	var corp_mail;
				
	//Le corp du mail
	corp_mail ='<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><br />';
	corp_mail +='<h1 align="center">'+myScore.nameGolf+' '+myScore.date+'</h1><br />';

	corp_mail+='<table border="0" style="width: 100%;"><tbody>\n';
	
	/*
	
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_player_name'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(Configuration.getInstance().playerName)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_golf_name'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.nameGolf)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_date'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.date)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_type'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.typeGolf)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_climat'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(jQuery.i18n.prop(myScore.weather))+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_golf_note'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.note)+'<br /></td></tr>\n';
	corp_mail+='</tbody></table><br />\n';
	
	*/
	
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_player_name'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(Configuration.getInstance().playerName)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_golf_name'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.nameGolf)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_date'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.date)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_type'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.typeGolf)+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_climat'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(jQuery.i18n.prop(myScore.weather))+'<br /></td></tr>\n';
	corp_mail+='<tr><td style="width: 50%;"><b>'+htmlEncode(jQuery.i18n.prop('msg_golf_note'))+'</b> &nbsp;</td><td style="width: 50%;">'+htmlEncode(myScore.note)+'<br /></td></tr>\n';
	corp_mail+='</tbody></table><br />\n';
	
	
	
	corp_mail+='<p><table border="1" style="width: 100%"><tbody>\n';
	
	//bla bla 
	corp_mail+='<tr style="background:#E5B8B7"><td style="width: 20%; text-align: center;"><i>'+htmlEncode(jQuery.i18n.prop('msg_hole_number'))+'</i></td>\n';
	
	myScore.arrayResult.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			if ( par != null ) {
				corp_mail+='<td style="width: 8%; text-align: center;"><i>'+(i+1)+'</i></td>\n';
			}
		}
	})
	corp_mail+='<td style="width: 8%; text-align: center;"><i>'+htmlEncode(jQuery.i18n.prop('msg_sum'))+'</i></td></tr>\n';
	
	
	//blabla2 le PAR
	corp_mail+='<tr><td style="width: 8%; text-align: center;background:#B8CCE4"><i>PAR</i></td>\n';
	var parAll=0;
	myScore.arrayResult.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			if ( par != null ) {
				corp_mail+='<td style="width: 8%; text-align: center;"><i>'+par[i]+'</i></td>\n';
				if (par[i] != "ND") {
					parAll+=par[i];
				}
			}
		}
	})
	
	corp_mail+='<td style="width: 8%; text-align: center; color:#558ED5"><b>'+parAll+'</b></td></tr>\n';
	    
	
	//Bla bla le score
	corp_mail+='<tr><td style="width: 8%; text-align: center;background:#B8CCE4"><i>'+htmlEncode(jQuery.i18n.prop('msg_result_score'))+'</i></td>\n';
	myScore.arrayResult.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			if ( par != null ) {
				corp_mail+='<td style="width: 8%; text-align: center;"><i>'+item+'</i></td>\n';
			}
		}
	})
	
	corp_mail+='<td style="width: 8%; text-align: center; color:#D5558E"><b>'+ myScore.getResult() +'</b></td></tr>\n';
	corp_mail+='</tbody></table></p><br />\n';
	
	
	if ( maxShot > 0) {
		// Table des coups 
		
		corp_mail+='<br />\n';
		corp_mail+='<p><table border="1" style="width: 100%"><tbody>\n';
	
		corp_mail+='<tr><td style="width: 8%; text-align: center;background:#d6e3bc"><i>'+htmlEncode(jQuery.i18n.prop('msg_hole_number'))+'</i></td>\n';
	
		for (var i=0;i<myScore.typeGolf;i++) {
			corp_mail+='<td style="width: 8%; text-align: center;background:#d6e3bc"><i>'+(i+1)+'</i></td>\n';
		}
		corp_mail+='</tr><br />\n';

		for (var cptNumCoup=0;cptNumCoup< maxShot;cptNumCoup++) {
			corp_mail+='<tr><td style="width: 8%; text-align: center;background:#d6e3bc"><i>Coup '+cptNumCoup+'</i></td>\n';
			myScore.arrayDistance.forEach(function(item, i) {
				if (i < myScore.typeGolf) {
					corp_mail+='<td style="width: 8%; text-align: center;"><i>';
					if (item != null) {
						if ((item[cptNumCoup-1] != null) && (item[cptNumCoup] != null)) {
							dist=Distance.getInstance().computeDistance(item[cptNumCoup-1][0], item[cptNumCoup-1][1], item[cptNumCoup][0], item[cptNumCoup][1]);
						} else {
							corp_mail+="N/A";
						}
					} else {
						corp_mail+="N/A";
					}
					corp_mail+='</i></td>\n';
				}
			})
			corp_mail+='</tr><br />\n';
		}
		//Verifier si on a une coordonées pour chaque trou
		corp_mail+='</tbody></table></p><br />\n';
	}	
	
	corp_mail+='</body></html>\n';
	return corp_mail;

}


function generateKmlLocation (myScore, maxShot) {
	var kml_files="";
	kml_files='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://earth.google.com/kml/2.2"><Document><name>'+htmlEncode(myScore.nameGolf)+" "+htmlEncode(myScore.date)+'</name>\n';
	kml_files+='<description><![CDATA['+htmlEncode(myScore.note)+'\n'+htmlEncode(jQuery.i18n.prop(myScore.weather))+']]></description>';

	myScore.arrayDistance.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			//place the point 
			for (var cptNumCoup=0;cptNumCoup<maxShot;cptNumCoup++) {
				
				if (item != null) {
					if (item[cptNumCoup] != null) {
						//0.0 is point with GPS not yet activated 
						if (((item[cptNumCoup][0] != 0) && (item[cptNumCoup][1] != 0)) || ((item[cptNumCoup][1] != null)||(item[cptNumCoup][0] != null))) {
							kml_files+='<Placemark><name>'+htmlEncode(jQuery.i18n.prop('msg_hole_number'))+(i+1)+' Coup '+(cptNumCoup+1)+'</name><Point><coordinates>'+item[cptNumCoup][1]+','+ item[cptNumCoup][0]+',0.000000</coordinates></Point></Placemark>\n';
						}
					}
				}
				
			}
			//place the line
			kml_files+='<Placemark><name>'+htmlEncode(jQuery.i18n.prop('msg_hole_number'))+(i+1)+'</name><LineString><tessellate>1</tessellate><coordinates>';
			for (var cptNumCoup=0;cptNumCoup<maxShot;cptNumCoup++) {
				if (item != null) {
					if (item[cptNumCoup] != null) {
						//0.0 is point with GPS not yet activated 
						if (((item[cptNumCoup][0] != 0) && (item[cptNumCoup][1] != 0)) || ((item[cptNumCoup][1] != null)||(item[cptNumCoup][0] != null))) {
							kml_files+=item[cptNumCoup][1]+','+ item[cptNumCoup][0]+',0.000000 \n';
						}
					}
				}
				
			}
			kml_files+='</coordinates></LineString></Placemark>\n';
			//Next tee
		}
	})	
	
	kml_files+='</Document></kml>\n';

	return kml_files

}



function PushData()  {  
	this.mail = function(myScore, par) {  
		ScoreCardLog("Send email with " + platform);	
				
		ScoreCardLog("Send Score BY EMAIL tp : " + Configuration.getInstance().playerEmail);
		

		
		switch (platform){
			case "web":
			
				var myTxtMail=generateTxtScore(myScore, par);
				
				window.open("mailto:" + Configuration.getInstance().playerEmail +
				"?subject=" + encodeURIComponent(jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date) + 
				"&body=" + encodeURIComponent(myTxtMail)); 
			break;
		
			case "android":
				//PhoneGAP
				var kml_files;
				
				var maxShot=getMaxShot (myScore);
				var myTxtMail=generateTxtScore(myScore, par);
				var myHtmlData=generateHtmlScore(myScore, par, maxShot);
				var myKmlData=generateKmlLocation (myScore, maxShot) 

				var my_score_html = new StoreInfo (myHtmlData, "Golf Score Card.html");
				if (maxShot != 0) {
					var my_score_kml = new StoreInfo (myKmlData, "Golf Map.kml");
 
					/* for normal  use */
					window.plugins.emailComposer.showEmailComposer(
						jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date,
						generateTxtScore(myScore, par)+"  \n  "+debugLog,
						[Configuration.getInstance().playerEmail],
						null,
						null,
						false,
						[my_score_html.getFullName(), my_score_kml.getFullName()]); 
				} else {
					/* for normal  use */
					window.plugins.emailComposer.showEmailComposer(
						jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date,
						generateTxtScore(myScore, par)+"  \n  "+debugLog,
						[Configuration.getInstance().playerEmail],
						null,
						null,
						false,
						[my_score_html.getFullName()]); 
				
				
				}
				
			break;
			
			//FirefoxOS
			case "firefoxos":
				//Mail for firefox OS	
				var maxShot=getMaxShot (myScore);
				var myTxtMail=generateTxtScore(myScore, par);
				var myHtmlData=generateHtmlScore(myScore, par, maxShot);
				var myKmlData=generateKmlLocation (myScore, maxShot);
				
				//alert(myTxtMail);		
				
				alert('V7');
				/*var sdcard1 = navigator.getDeviceStorage("sdcard");
				var sdcard2 = navigator.getDeviceStorage("sdcard");*/
				var sdcard = navigator.getDeviceStorage("sdcard");
				//var sdcard4 = navigator.getDeviceStorage("sdcard");
				
				
				//Remove old temporary files 
			/*	var requestDelHTML = sdcard1.delete("GolfScoreCard.html");

				requestDelHTML.onsuccess = function () {
					alert("File HTML deleted");
				  
				}

				requestDelHTML.onerror = function () {
					alert("Unable to delete the file HTML: " + this.error);
				}
				
				var requestDelKML = sdcard2.delete("GolfScoreCard.kml");

				requestDelKML.onsuccess = function () {
				  console.log("File KML deleted");
				}

				requestDelKML.onerror = function () {
				  console.log("Unable to delete the file KML: " + this.error);
				}*/
				
				
				//Parcour la sdcard 
				var cursor = sdcard.enumerate();
				var files_l="";
				cursor.onsuccess = function () {
					//alert("Got something");
					var file = this.result;
					if (file != null) {
					
						files_l=files_l+file.name+"\n"
						this.done = false;
					} else {
						this.done = true;
					}

					if (!this.done) {
						this.continue();
					}
				}
				
				var requestDelHTML = sdcard.delete("GolfScoreCard.html");
				
				requestDelHTML.onsuccess = function () {
					alert("File HTML deleted");
				  
				}

				requestDelHTML.onerror = function () {
					alert("Unable to delete the file HTML: " + this.error.name);
				}
				
				//Old files is deleted, so we coudl create the new one.
				
				//Create the HTML files
				var fileHTML_ID   = new Blob(["Message Perso"], {type: "text/plain"});

				var requestHTML = sdcard.addNamed(fileHTML_ID, "GolfScoreCard.html");

				requestHTML.onsuccess = function () {
					var name = this.result;
					//console.log('File "' + name + '" successfully wrote on the sdcard storage area');
					alert('SUCCES HTML ' + name);	
				}

				// An error typically occur if a file with the same name already exist
				requestHTML.onerror = function () {
					//console.warn('Unable to write the file: ' + this.error);
					alert('ERROR HTML ' + this.error.name);	
				}
				
				
				//Create the KML files
			/*	var file   = new Blob([myKmlData], {type: "text/plain"});
				var requestKML = sdcard4.addNamed(file, "GolfScoreCard.kml");

				requestKML.onsuccess = function () {
					var name = this.result;
					//console.log('File "' + name + '" successfully wrote on the sdcard storage area');
					alert('SUCCES KML ' + name);	
				}

				// An error typically occur if a file with the same name already exist
				requestKML.onerror = function () {
					//console.warn('Unable to write the file: ' + this.error);
					alert('ERROR KML ' + this.error);	
				}
				
				
				*/
				
				/*
				var createEmail = new MozActivity({
					name: "new", // Possibly compose-mail in future versions
					data: {
					    type : "mail",
					    url: "mailto:"+Configuration.getInstance().playerEmail +
							"?subject=" + encodeURIComponent(jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date) + 
							"&body=" + encodeURIComponent(myTxtMail)
					}
				});
				
				createEmail.onsuccess = function () {
					alert("EMAIL SENT");		
					ScoreCardLog("EMAIL SENT");
				}
				
				createEmail.onerror = function () {
					// If an error occurred or the user canceled the activity
					alert("NO MAIL");	
					ScoreCardLog("ERROR MAIL");
				};*/
					
			break;
		}
	}

	this.sms = function(myScore) {  
		//console.info("Send SMS with %s", myScore);	
	}
}
