// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

/*MODIF, be carrefull with encoding */

$( '#list_parcours' ).live( 'pageinit',function(event){
	ScoreCardLog("list_parcours appear -> load all list golf");
	var myGolf;
	var cacheListGolf=$('#listGolf');
	
	try {
		//Initialiser la carte du PAR avec les positions
		myGolf = listGolf;
	} catch(err) {
		//eval(xhr);
		ScoreCardLog("ERROR Try a new one ?");
		myGolf = listGolf;
	}
			
	//myDbGolf=new dbGolf();
	ScoreCardLog("data" + JSON.stringify (myGolf));

	ScoreCardLog("L1");

	//Remove the previous list 
	cacheListGolf.empty();
	
	//Remove the touch function
	cacheListGolf.die('touchstart mousedown');
	
	
	cacheListGolf.listview().listview('refresh');
	
	listGolf.forEach(function(item, i) {
		cacheListGolf.append('<li>'+item[0]+'-'+item[2]+'-'+item[3]+'</li>');
	})
	
	cacheListGolf.listview('refresh')
	ScoreCardLog("L3");
	
	cacheListGolf.append('<li>'+jQuery.i18n.prop("msg_other")+'</li>').listview('refresh');
	
	ScoreCardLog("L4");
	
	cacheListGolf.children('li').bind('touchstart mousedown', function(e) {
				
		//$('#'+event.currentTarget.id).addClass("edit");
		selected=$(this)[0].textContent
		
		//selected=$(this)[0].textContent;
		ScoreCardLog("data "+ JSON.stringify (selected));
		selectedGolf=selected.replace(/-.*$/,"");
		$.mobile.changePage("parcour.html");
	})
	
})
