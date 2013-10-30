// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


var selectedGolf=listGolf[0][0];

function GuiParcour() {

	ScoreCardLog("Init Parcour Parcour");

	this.init = function() {

		currentDate=new Date();
		var day=currentDate.getDate();
		if (day<10) {day = "0" + day}
		var month=currentDate.getMonth()+1;
		if (month<10) {month = "0" + month}
		var year=1900+currentDate.getYear();

		Cache.getInstance().CACHE_SC_SELECT_CHOICE_DAY_OPTION.eq(day).attr('selected', 'selected');
		Cache.getInstance().CACHE_SC_SELECT_CHOICE_MONTH_OPTION.eq(month).attr('selected', 'selected');
		Cache.getInstance().CACHE_SC_SELECT_CHOICE_YEAR_OPTION.eq(year).attr('selected', 'selected');
		Cache.getInstance().CACHE_SC_SELECT_CHOICE_DAY.selectmenu("refresh");
		Cache.getInstance().CACHE_SC_SELECT_CHOICE_MONTH.selectmenu("refresh");
		Cache.getInstance().CACHE_SC_SELECT_CHOICE_YEAR.selectmenu("refresh");
		Cache.getInstance().CACHE_SC_GOLF_NAME_FIELD.hide();

	}
}

//Singleton structure :
GuiParcour.instance = null;  

GuiParcour.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new GuiParcour();  
      this.instance.init();
  }  
  return this.instance;  
}  

$( '#parcour' ).live( 'pageshow',function(event){
	//val="other";
	Cache.getInstance().CACHE_SC_GOLF_NAME.textContent=selectedGolf;

	ScoreCardLog("SELECTED GOLF " + selectedGolf);
	if ( selectedGolf == jQuery.i18n.prop("msg_other")) {
		Cache.getInstance().CACHE_SC_GOLF_NAME_FIELD.show("slow");
	} else {
		Cache.getInstance().CACHE_SC_GOLF_NAME_FIELD.hide("slow");
	}
	
	
})


$('#neuf_link').live('click', function()  {
    	ScoreCardLog("Click !!!! new SCORE ");
	Score.getInstance().reset();
	
	Score.getInstance().note=Cache.getInstance().CACHE_SC_GOLF_NAME_NOTE.val();
	Score.getInstance().weather=Cache.getInstance().CACHE_SC_SELECT_CHOICE_WHEATER.find(":selected").val();
	Score.getInstance().date=Cache.getInstance().CACHE_SC_SELECT_CHOICE_YEAR.val()+"-"+ Cache.getInstance().CACHE_SC_SELECT_CHOICE_MONTH.val()+"-"+Cache.getInstance().CACHE_SC_SELECT_CHOICE_DAY.val();
	
	if (Cache.getInstance().CACHE_SC_GOLF_NAME.textContent == jQuery.i18n.prop("msg_other") ) {
		ScoreCardLog("NAME" + Cache.getInstance().CACHE_SC_GOLF_NAME_INPUT.val());
		Score.getInstance().nameGolf=Cache.getInstance().CACHE_SC_GOLF_NAME_INPUT.val();
		Score.getInstance().db=1;
	} else {
		ScoreCardLog("NAME " + Cache.getInstance().CACHE_SC_GOLF_NAME.textContent);
		Score.getInstance().nameGolf=Cache.getInstance().CACHE_SC_GOLF_NAME.textContent;
		Score.getInstance().db=0;
	}
	
	//Set the type of the Golf
	//Score.getInstance().typeGolf=6;
	
	Score.getInstance().store();
	
})


$('#parcour').live( 'pageinit',function(event){
		ScoreCardLog("pageinit parcour");
		//Init the cache
		Cache.getInstance().init("parcour.js");

		// change the all string in the document 
		GuiParcour.getInstance();
});
