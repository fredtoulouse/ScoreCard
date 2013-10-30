// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

function Intertionalisation(lang)  {

	var myRegex = /msg_[a-z|A-Z|0-9|_]+/
	var myThis=this;

	this.updateAllMsg = function () {
		// Accessing values through the map
		var listTranslation=$(".translate");
			
		for(var i= 0; i < listTranslation.length; i++) {
			var template=listTranslation[i].innerHTML;
			myMsg=myRegex.exec(template);
			listTranslation[i].innerHTML=listTranslation[i].innerHTML.replace(myMsg,jQuery.i18n.prop(myMsg));
		}
	}


	jQuery.i18n.properties({
		name:'Messages', 
		path:top_source+'lang/', 
		mode:'map',
		language:lang, 
		callback: function() {
			myThis.updateAllMsg();
		}
	});


}

//Singleton structure :
Intertionalisation.instance = null;  

Intertionalisation.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Intertionalisation(Configuration.getInstance().language);  
  }  
  return this.instance;  
}  



//Change the message for each selected Page

$( '#one' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#parcour' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#neuf' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#preference' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#neuf_popup' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#neuf_two' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});


$( '#consult' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#confirm_supress' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#edit_S' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#plus_info' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#reset_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#quit_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#about_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#tuto_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});


$( '#delete_history_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#install_page' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});

$( '#list_parcours' ).live( 'pageinit',function(event){
	// change the all string in the document 
	Intertionalisation.getInstance().updateAllMsg();
});


