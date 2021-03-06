// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


function htmlEncode(value){
	return $('<div/>').text(value).html();
	/*unescape(encodeURIComponent($('<div/>').text(value).html()));*/
}

function htmlDecode(value){
	return $('<div/>').html(value).text();
	
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
		//jQuery.i18n.prop("msg_marq")+(n+1)+" &rArr; ["+one_pos[3]+"]";
		for (var cptNumCoup=0;cptNumCoup< maxShot;cptNumCoup++) {
			corp_mail+='<tr><td style="width: 8%; text-align: center;background:#d6e3bc"><i> '+jQuery.i18n.prop("msg_marq")+(cptNumCoup+1)+'</i></td>\n';
			myScore.arrayDistance.forEach(function(item, i) {
				if (i < myScore.typeGolf) {
					corp_mail+='<td style="width: 8%; text-align: center;"><i>';
					if (item != null) {
						if ((item[cptNumCoup-1] != null) && (item[cptNumCoup] != null)) {
							dist=Distance.getInstance().computeDistance(item[cptNumCoup-1][0], item[cptNumCoup-1][1], item[cptNumCoup][0], item[cptNumCoup][1],item[cptNumCoup-1][2],item[cptNumCoup][2]);
							corp_mail+="&#x21d1;"+dist;
							corp_mail+="<br/>["+item[cptNumCoup][3]+"]";
						} else if (item[cptNumCoup] != null){
							corp_mail+="["+item[cptNumCoup][3]+"]";
						} else {
							corp_mail+="-";
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
	kml_files='<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>'+htmlDecode(myScore.nameGolf)+" "+htmlDecode(myScore.date)+'</name>\n';
	kml_files+='<description><![CDATA['+htmlDecode(myScore.note)+'\n'+htmlDecode(jQuery.i18n.prop(myScore.weather))+']]></description>';

	myScore.arrayDistance.forEach(function(item, i) {
		if (i < myScore.typeGolf) {
			//place the point 
			for (var cptNumCoup=0;cptNumCoup<maxShot;cptNumCoup++) {
				
				if (item != null) {
					if (item[cptNumCoup] != null) {
						//0.0 is point with GPS not yet activated 
						if (((item[cptNumCoup][0] != 0) && (item[cptNumCoup][1] != 0)) || ((item[cptNumCoup][1] != null)||(item[cptNumCoup][0] != null))) {
							kml_files+='<Placemark><name>'+htmlDecode(jQuery.i18n.prop('msg_hole_number'))+" "+(i+1)+' '+htmlDecode(jQuery.i18n.prop("msg_marq"))+' '+(cptNumCoup+1)+' ['+/*myScore.arrayResult[i]*/item[cptNumCoup][3]+']</name><Point><coordinates>'+item[cptNumCoup][1]+','+ item[cptNumCoup][0]+',0.000000</coordinates></Point></Placemark>\n';
						}
					}
				}
				
			}
			//place the line
			
			if (item != null) {
				if (item[0] != null) { //Save no line if any position are stored for this hole
					kml_files+='<Placemark><name>'+htmlDecode(jQuery.i18n.prop('msg_hole_number'))+" "+(i+1)+'</name><LineString><tessellate>1</tessellate><coordinates>';
					for (var cptNumCoup=0;cptNumCoup<maxShot;cptNumCoup++) {
						if (item[cptNumCoup] != null) {
							//0.0 is point with GPS not yet activated 
							if (((item[cptNumCoup][0] != 0) && (item[cptNumCoup][1] != 0)) || ((item[cptNumCoup][1] != null)||(item[cptNumCoup][0] != null))) {
								kml_files+=item[cptNumCoup][1]+','+ item[cptNumCoup][0]+',0.000000 \n';
							}
						}
					}
					kml_files+='</coordinates></LineString></Placemark>\n';
				}
			}
			//Next tee
		}
	})	
	
	kml_files+='</Document></kml>\n';

	return kml_files

}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function PushData()  {  
	this.mail = function(myScore, par) {  
		ScoreCardLog("Send email with " + platform);	
				
		ScoreCardLog("Send Score BY EMAIL to : " + Configuration.getInstance().playerEmail);
		
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

				var my_score_html = new StoreInfoAndroid (myHtmlData, "Golf Score Card.html");
				if (maxShot != 0) {
					var my_score_kml = new StoreInfoAndroid (myKmlData, "Golf Map.kml");
 
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
				
				randomId=makeid();
				
				var myHtmlData=generateHtmlScore(myScore, par, maxShot);
				var myKmlData=generateKmlLocation (myScore, maxShot);
				
				console.log ("HTML------------------------\n%s\n-----------------", myHtmlData);
				
				console.log ("KML------------------------\n%s\n-----------------", myKmlData);
				
				StoreInfoFirefox (myHtmlData, "Golf Score Card"+jQuery.i18n.prop('msg_score')+"_" + myScore.nameGolf+ "_" +myScore.date+"_"+randomId+".html");
				
				
				/*var aHTMLPart = [myHtmlData];
				var oHTMLBlob = new Blob(aHTMLPart, {type : 'text/html'}); 
				var urlHtml = URL.createObjectURL(oHTMLBlob);
				ScoreCardLog ("url = "+ url);*/
				
				
				if (maxShot != 0) {
					StoreInfoFirefox (myKmlData, "Golf Map"+jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date+"_"+randomId+".kml");
					/*
					var aKMLPart = [myKmlData];
					var oKMLBlob = new Blob(oKMLBlob, {type : 'text/xml'}); // the blob
					var urlKml = URL.createObjectURL(oKMLBlob);
					
					
					var createEmail = new MozActivity({
						name: "new", 
						data: {
							type : "mail",
							url: "mailto:"+Configuration.getInstance().playerEmail +
								"?subject=" + encodeURIComponent(jQuery.i18n.prop('msg_score')+"_" + myScore.nameGolf+ "_" +myScore.date) + 
								"&body=" + encodeURIComponent(myTxtMail+"\n\n"+debugLog),
							attachmentNames: ["Golf Score Card.html","Golf Map.kml"],
							attachmentBlobs: [oHTMLBlob, oKMLBlob]
						}

					});
				
					createEmail.onsuccess = function () {
						ScoreCardLog("EMAIL SENT");
					}
				
					createEmail.onerror = function () {
						// If an error occurred or the user canceled the activity
						ScoreCardLog("ERROR MAIL");
					};*/
					
					//Today the only way to share file with email is the share activity so couldn't edit the content of the mail :-(  but not two files
					/*
					var activity = new MozActivity({
						name: 'share',
						data: {
							// this is ugly; all share options with images are shown. But right now is the
							// only way to share with the email.
							type: 'image/*',
							number: 2,
							blobs: [oHTMLBlob, oKMLBlob],
							filenames: ["Golf Score Card"+jQuery.i18n.prop('msg_score')+"_" + myScore.nameGolf+ "_" +myScore.date+"_"+randomId+".html", "Golf Map"+jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date+"_"+randomId+".kml"],
							filepaths: [urlHtml,urlKml]
						}
					});

					activity.onerror = function(e) {
						ScoreCardLog("ERROR MAIL");
					};

					activity.onsuccess = function(e) {
						ScoreCardLog("EMAIL SENT");
					}*/
					

				}/* else {
				
				
					var activity = new MozActivity({
						name: 'share',
						data: {
							// this is ugly; all share options with images are shown. But right now is the
							// only way to share with the email.
							type: 'image/*',
							number: 1,
							blobs: [oHTMLBlob],
							filenames: ["Golf Score Card"+jQuery.i18n.prop('msg_score')+"_" + myScore.nameGolf+ "_" +myScore.date+"_"+randomId+".html"],
							filepaths: [urlHtml]
						}
					});

					activity.onerror = function(e) {
						ScoreCardLog("ERROR MAIL");
					};

					activity.onsuccess = function(e) {
						ScoreCardLog("EMAIL SENT");
					}
				
				
				}
				*/
				
				
				
				var createEmail = new MozActivity({
					name: "new", 
					data: {
						type : "mail",
						url: "mailto:"+Configuration.getInstance().playerEmail +
							"?subject=" + encodeURIComponent(jQuery.i18n.prop('msg_score')+" " + myScore.nameGolf+ " " +myScore.date) + 
							"&body=" + encodeURIComponent(myTxtMail)
					}
				});
			
				createEmail.onsuccess = function () {
					ScoreCardLog("EMAIL SENT");
				}
			
				createEmail.onerror = function () {
					// If an error occurred or the user canceled the activity
					ScoreCardLog("ERROR MAIL");
				};
					
					
				//}
			break;
		}
	}

	this.sms = function(myScore) {  
		//console.info("Send SMS with %s", myScore);	
	}
}
