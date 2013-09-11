// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

$( '#about_page' ).live( 'pageinit',function(event){

	//Init jquery-cache 
	Cache.getInstance().init("about.js");
	
	
	Cache.getInstance().CACHE_SC_ABOUTHEADER[0].innerHTML="<center> VERSION "+SC_version+"</center>";

	var newList="";
	newList+='<li data-role="list-divider">'+jQuery.i18n.prop("msg_authors")+'</li>'
	
	SC_authors.forEach(function(item, i) {
		newList+='<li>'+item[0]+' <i>'+item[1]+'</i></li>';
	})
	
	newList+='<li data-role="list-divider">'+jQuery.i18n.prop("msg_traduc")+'</li>';
	
	SC_traduc.forEach(function(item, i) {
		newList+='<li>'+item[0]+' <i>'+item[1]+'</i></li>';
	})

	newList+='<li data-role="list-divider">'+jQuery.i18n.prop("msg_other_help")+'</li>';
	
	SC_other.forEach(function(item, i) {
		newList+='<li>'+item[0]+' <i>'+item[1]+'</i></li>';
	})
	
	Cache.getInstance().CACHE_SC_LISTABOUT.append(newList).listview('refresh');
	
});



