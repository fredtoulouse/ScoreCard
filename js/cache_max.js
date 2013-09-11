// Score Card files
// 2013-06-01
// Copyright (c) 2013, FBM
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html

function Cache()  {
	var CACHE_SC_ABOUTHEADER ;
	var CACHE_SC_LISTABOUT ;

	var CACHE_SC_DESSIN ;
	var CACHE_SC_ONE ;
	var CACHE_SC_MYBUTTON ;
	var CACHE_SC_SCORE_9 ;
	var CACHE_SC_ONE ;
	var CACHE_SC_DOCUMENT ;

	var CACHE_SC_INFO_SCORE;

       var CACHE_SC_INFO_SCORE_DIS;

	var CACHE_SC_INFO_SCORE_PAR;

	var CACHE_SC_INFO_T;

	var CACHE_SC_CONFIRM_SUPRESS ;
	var CACHE_SC_CONFIRMSUPRESSSCORE ;
	var CACHE_SC_PLUS_INFO ;
	var CACHE_SC_INFO_SEND_EMAIL ;
	var CACHE_SC_CONSULT ;

	var CACHE_SC_SHOW_DIST ;

	var CACHE_SC_NEUF ;
	var CACHE_SC_WINDOW ;
	var CACHE_SC_DOCUMENT ;
	var CACHE_SC_DATA_ROLE_HEADER ;
	var CACHE_SC_DOCUMENT ;
	var CACHE_SC_DATA_ROLE_FOOTER ;
	var CACHE_SC_SCORE_9 ;
	var CACHE_SC_MYCANVASCTRL ;
	var CACHE_SC_MYHWCANVAS ;

	var CACHE_SC_LIST_PARCOURS ;
	var CACHE_SC_LISTGOLF ;
	var CACHE_SC_UL ;
	var CACHE_SC_THIS ;

	var CACHE_SC_ONE ;
	var CACHE_SC_QUITSCORE ;
	var CACHE_SC_REPRISE ;
	var CACHE_SC_HIGHSCORE ;
	var CACHE_SC_MYFOOTERMENU ;

	var CACHE_SC_SCORE_DIS;

	var CACHE_SC_T;

	var CACHE_SC_VALIDSCORETEXT ;
	var CACHE_SC_VALIDSCORETEXTHW ;
	var CACHE_SC_NEUF_POPUP ;
	var CACHE_SC_SEND_EMAIL ;
	var CACHE_SC_BACKMENU ;
	var CACHE_SC_NEUF ;
	var CACHE_SC_ONESCORE ;
	var CACHE_SC_SUMMARYSCORE ;
	var CACHE_SC_NOHW ;
	var CACHE_SC_HW ;

	var CACHE_SC_SCORE_PAR;

	var CACHE_SC_REMSCORE ;
	var CACHE_SC_ADDSCORE ;
	var CACHE_SC_EDIT_S ;
	var CACHE_SC_INDEXSCORE ;
	var CACHE_SC_SLIDER_SCORE ;
	var CACHE_SC_VALIDEEDITSCORE ;
	var CACHE_SC_VALIDSCORE ;
	var CACHE_SC_CANCELSCOREHW ;
	var CACHE_SC_VALIDSCOREHW ;
	var CACHE_SC_MYPLAYHEADER ;
	var CACHE_SC_CHRONO;
	var CACHE_SC_INFOHCP;
	var CACHE_SC_INFOPOS ;

	var CACHE_SC_SELECT_CHOICE_DAY_OPTION ;
	var CACHE_SC_SELECT_CHOICE_MONTH_OPTION ;
	var CACHE_SC_SELECT_CHOICE_YEAR_OPTION ;
	var CACHE_SC_SELECT_CHOICE_DAY ;
	var CACHE_SC_SELECT_CHOICE_MONTH ;
	var CACHE_SC_SELECT_CHOICE_YEAR ;
	var CACHE_SC_GOLF_NAME_FIELD ;
	var CACHE_SC_PARCOUR ;
	var CACHE_SC_GOLF_NAME ;
	var CACHE_SC_NEUF_LINK ;
	var CACHE_SC_GOLF_NAME_NOTE ;
	var CACHE_SC_SELECT_CHOICE_WHEATER ;
	var CACHE_SC_GOLF_NAME ;
	var CACHE_SC_GOLF_NAME_INPUT ;

	var CACHE_SC_EMAIL_PLAYER ;
	var CACHE_SC_NAME_PLAYER ;
	var CACHE_SC_SELECT_CHOICE_LANG ;
	var CACHE_SC_SELECT_CHOICE_UNIT ;
	var CACHE_SC_FLIP_GPS ;
	var CACHE_SC_FLIP_USEHW ;
	var CACHE_SC_PREFERENCE ;






	//Reset cache value
	this.resetVar = function (pts) {
		pts=null;
	}
	
	
		
	
	//Init cache value
	this.init = function (requestbyfile) {
	
		ScoreCardLog(">>>>>INIT CACHE for "+requestbyfile);
		
		ScoreCardLog(">>>>>Activate DOM caching ");
		$.mobile.page.prototype.options.domCache = true;
	
		switch (requestbyfile){



	case "about.js": 											
	if	(	this.CACHE_SC_ABOUTHEADER	==	null	)	{	this.CACHE_SC_ABOUTHEADER	=	$('#aboutHeader')	;	}	;
	if	(	this.CACHE_SC_LISTABOUT	==	null	)	{	this.CACHE_SC_LISTABOUT	=	$('#listAbout')	;	}	;
	break;												
	case "canvas.js": 											
	if	(	this.CACHE_SC_DESSIN	==	null	)	{	this.CACHE_SC_DESSIN	=	$("#dessin")	;	}	;
	if	(	this.CACHE_SC_ONE	==	null	)	{	this.CACHE_SC_ONE	=	$("#one")	;	}	;
	if	(	this.CACHE_SC_MYBUTTON	==	null	)	{	this.CACHE_SC_MYBUTTON	=	$("#myButton")	;	}	;
	if	(	this.CACHE_SC_SCORE_9	==	null	)	{	this.CACHE_SC_SCORE_9	=	$(".score_9")	;	}	;
	if	(	this.CACHE_SC_ONE	==	null	)	{	this.CACHE_SC_ONE	=	$("#one")	;	}	;
	if	(	this.CACHE_SC_DOCUMENT	==	null	)	{	this.CACHE_SC_DOCUMENT	=	$(document)	;	}	;
	break;												
													
	case "consult.js": 											
													
	/*T4*/												
	if	(	this.CACHE_SC_INFO_SCORE_0	==	null	)	{	this.CACHE_SC_INFO_SCORE_0	=	$('#infoScore0')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_1	==	null	)	{	this.CACHE_SC_INFO_SCORE_1	=	$('#infoScore1')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_2	==	null	)	{	this.CACHE_SC_INFO_SCORE_2	=	$('#infoScore2')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_3	==	null	)	{	this.CACHE_SC_INFO_SCORE_3	=	$('#infoScore3')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_4	==	null	)	{	this.CACHE_SC_INFO_SCORE_4	=	$('#infoScore4')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_5	==	null	)	{	this.CACHE_SC_INFO_SCORE_5	=	$('#infoScore5')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_6	==	null	)	{	this.CACHE_SC_INFO_SCORE_6	=	$('#infoScore6')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_7	==	null	)	{	this.CACHE_SC_INFO_SCORE_7	=	$('#infoScore7')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_8	==	null	)	{	this.CACHE_SC_INFO_SCORE_8	=	$('#infoScore8')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_9	==	null	)	{	this.CACHE_SC_INFO_SCORE_9	=	$('#infoScore9')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_10	==	null	)	{	this.CACHE_SC_INFO_SCORE_10	=	$('#infoScore10')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_11	==	null	)	{	this.CACHE_SC_INFO_SCORE_11	=	$('#infoScore11')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_12	==	null	)	{	this.CACHE_SC_INFO_SCORE_12	=	$('#infoScore12')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_13	==	null	)	{	this.CACHE_SC_INFO_SCORE_13	=	$('#infoScore13')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_14	==	null	)	{	this.CACHE_SC_INFO_SCORE_14	=	$('#infoScore14')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_15	==	null	)	{	this.CACHE_SC_INFO_SCORE_15	=	$('#infoScore15')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_16	==	null	)	{	this.CACHE_SC_INFO_SCORE_16	=	$('#infoScore16')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_17	==	null	)	{	this.CACHE_SC_INFO_SCORE_17	=	$('#infoScore17')	;	}	;
													
	/*T3*/												
	if	(	this.CACHE_SC_INFO_SCORE_DIS_0	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_0	=	$('#info_score_dis0')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_1	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_1	=	$('#info_score_dis1')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_2	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_2	=	$('#info_score_dis2')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_3	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_3	=	$('#info_score_dis3')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_4	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_4	=	$('#info_score_dis4')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_5	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_5	=	$('#info_score_dis5')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_6	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_6	=	$('#info_score_dis6')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_7	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_7	=	$('#info_score_dis7')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_8	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_8	=	$('#info_score_dis8')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_9	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_9	=	$('#info_score_dis9')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_10	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_10	=	$('#info_score_dis10')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_11	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_11	=	$('#info_score_dis11')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_12	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_12	=	$('#info_score_dis12')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_13	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_13	=	$('#info_score_dis13')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_14	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_14	=	$('#info_score_dis14')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_15	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_15	=	$('#info_score_dis15')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_16	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_16	=	$('#info_score_dis16')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_DIS_17	==	null	)	{	this.CACHE_SC_INFO_SCORE_DIS_17	=	$('#info_score_dis17')	;	}	;
													
													
	/*T2*/												
	if	(	this.CACHE_SC_INFO_SCORE_PAR_0	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_0	=	$('#info_score_par0')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_1	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_1	=	$('#info_score_par1')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_2	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_2	=	$('#info_score_par2')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_3	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_3	=	$('#info_score_par3')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_4	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_4	=	$('#info_score_par4')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_5	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_5	=	$('#info_score_par5')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_6	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_6	=	$('#info_score_par6')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_7	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_7	=	$('#info_score_par7')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_8	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_8	=	$('#info_score_par8')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_9	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_9	=	$('#info_score_par9')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_10	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_10	=	$('#info_score_par10')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_11	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_11	=	$('#info_score_par11')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_12	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_12	=	$('#info_score_par12')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_13	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_13	=	$('#info_score_par13')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_14	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_14	=	$('#info_score_par14')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_15	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_15	=	$('#info_score_par15')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_16	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_16	=	$('#info_score_par16')	;	}	;
	if	(	this.CACHE_SC_INFO_SCORE_PAR_17	==	null	)	{	this.CACHE_SC_INFO_SCORE_PAR_17	=	$('#info_score_par17')	;	}	;
													
													
	/*T1*/												
	if	(	this.CACHE_SC_INFO_T0	==	null	)	{	this.CACHE_SC_INFO_T0	=	$('#info_t0')	;	}	;
	if	(	this.CACHE_SC_INFO_T1	==	null	)	{	this.CACHE_SC_INFO_T1	=	$('#info_t1')	;	}	;
	if	(	this.CACHE_SC_INFO_T2	==	null	)	{	this.CACHE_SC_INFO_T2	=	$('#info_t2')	;	}	;
	if	(	this.CACHE_SC_INFO_T3	==	null	)	{	this.CACHE_SC_INFO_T3	=	$('#info_t3')	;	}	;
	if	(	this.CACHE_SC_INFO_T4	==	null	)	{	this.CACHE_SC_INFO_T4	=	$('#info_t4')	;	}	;
	if	(	this.CACHE_SC_INFO_T5	==	null	)	{	this.CACHE_SC_INFO_T5	=	$('#info_t5')	;	}	;
	if	(	this.CACHE_SC_INFO_T6	==	null	)	{	this.CACHE_SC_INFO_T6	=	$('#info_t6')	;	}	;
	if	(	this.CACHE_SC_INFO_T7	==	null	)	{	this.CACHE_SC_INFO_T7	=	$('#info_t7')	;	}	;
	if	(	this.CACHE_SC_INFO_T8	==	null	)	{	this.CACHE_SC_INFO_T8	=	$('#info_t8')	;	}	;
	if	(	this.CACHE_SC_INFO_T9	==	null	)	{	this.CACHE_SC_INFO_T9	=	$('#info_t9')	;	}	;
	if	(	this.CACHE_SC_INFO_T10	==	null	)	{	this.CACHE_SC_INFO_T10	=	$('#info_t10')	;	}	;
	if	(	this.CACHE_SC_INFO_T11	==	null	)	{	this.CACHE_SC_INFO_T11	=	$('#info_t11')	;	}	;
	if	(	this.CACHE_SC_INFO_T12	==	null	)	{	this.CACHE_SC_INFO_T12	=	$('#info_t12')	;	}	;
	if	(	this.CACHE_SC_INFO_T13	==	null	)	{	this.CACHE_SC_INFO_T13	=	$('#info_t13')	;	}	;
	if	(	this.CACHE_SC_INFO_T14	==	null	)	{	this.CACHE_SC_INFO_T14	=	$('#info_t14')	;	}	;
	if	(	this.CACHE_SC_INFO_T15	==	null	)	{	this.CACHE_SC_INFO_T15	=	$('#info_t15')	;	}	;
	if	(	this.CACHE_SC_INFO_T16	==	null	)	{	this.CACHE_SC_INFO_T16	=	$('#info_t16')	;	}	;
	if	(	this.CACHE_SC_INFO_T17	==	null	)	{	this.CACHE_SC_INFO_T17	=	$('#info_t17')	;	}	;
													
	break;												
													
	case "plus_info": 											
	if	(	this.CACHE_SC_INFO_SEND_EMAIL	==	null	)	{	this.CACHE_SC_INFO_SEND_EMAIL	=	$('#info_send_email')	;	}	;
	break												
													
	case "confirm_supress": 											
	if	(	this.CACHE_SC_CONFIRMSUPRESSSCORE	==	null	)	{	this.CACHE_SC_CONFIRMSUPRESSSCORE	=	$('#confirmSupressScore')	;	}	;
	break;												
													
	case "distance.js": 											
	if	(	this.CACHE_SC_NEUF_TWO	==	null	)	{	this.CACHE_SC_NEUF_TWO	=	$('#neuf_two')	;	}	;
	if	(	this.CACHE_SC_SHOW_DIST	==	null	)	{	this.CACHE_SC_SHOW_DIST	=	$('#show_dist')	;	}	;
	break;												
													
	case "handInput.js": 											
	if	(	this.CACHE_SC_WINDOW	==	null	)	{	this.CACHE_SC_WINDOW	=	$(window)	;	}	;
	if	(	this.CACHE_SC_DOCUMENT	==	null	)	{	this.CACHE_SC_DOCUMENT	=	$(document)	;	}	;
	if	(	this.CACHE_SC_DATA_ROLE_HEADER	==	null	)	{	this.CACHE_SC_DATA_ROLE_HEADER	=	$('[data-role="header"]')	;	}	;
	if	(	this.CACHE_SC_DATA_ROLE_FOOTER	==	null	)	{	this.CACHE_SC_DATA_ROLE_FOOTER	=	$('[data-role="footer"]')	;	}	;
	if	(	this.CACHE_SC_SCORE_9	==	null	)	{	this.CACHE_SC_SCORE_9	=	$('.score_9')	;	}	;
	if	(	this.CACHE_SC_MYCANVASCTRL	==	null	)	{	this.CACHE_SC_MYCANVASCTRL	=	$('#myCanvasCtrl')	;	}	;
	if	(	this.CACHE_SC_MYHWCANVAS	==	null	)	{	this.CACHE_SC_MYHWCANVAS	=	$("#myHwCanvas")	;	}	;
													
	break;												
													
	case "intertionalisation.js": 											
	if	(	this.CACHE_SC_TRANSLATE	==	null	)	{	this.CACHE_SC_TRANSLATE	=	$(".translate")	;	}	;
	if	(	this.CACHE_SC_ONE	==	null	)	{	this.CACHE_SC_ONE	=	$('#one')	;	}	;
	if	(	this.CACHE_SC_PARCOUR	==	null	)	{	this.CACHE_SC_PARCOUR	=	$('#parcour')	;	}	;
	if	(	this.CACHE_SC_NEUF	==	null	)	{	this.CACHE_SC_NEUF	=	$('#neuf')	;	}	;
	if	(	this.CACHE_SC_PREFERENCE	==	null	)	{	this.CACHE_SC_PREFERENCE	=	$('#preference')	;	}	;
	if	(	this.CACHE_SC_NEUF_POPUP	==	null	)	{	this.CACHE_SC_NEUF_POPUP	=	$('#neuf_popup')	;	}	;
	if	(	this.CACHE_SC_NEUF_TWO	==	null	)	{	this.CACHE_SC_NEUF_TWO	=	$('#neuf_two')	;	}	;
	if	(	this.CACHE_SC_CONSULT	==	null	)	{	this.CACHE_SC_CONSULT	=	$('#consult')	;	}	;
	if	(	this.CACHE_SC_CONFIRM_SUPRESS	==	null	)	{	this.CACHE_SC_CONFIRM_SUPRESS	=	$('#confirm_supress')	;	}	;
	if	(	this.CACHE_SC_EDIT_S	==	null	)	{	this.CACHE_SC_EDIT_S	=	$('#edit_S')	;	}	;
	if	(	this.CACHE_SC_PLUS_INFO	==	null	)	{	this.CACHE_SC_PLUS_INFO	=	$('#plus_info')	;	}	;
	if	(	this.CACHE_SC_RESET_PAGE	==	null	)	{	this.CACHE_SC_RESET_PAGE	=	$('#reset_page')	;	}	;
	if	(	this.CACHE_SC_TUTO_PAGE	==	null	)	{	this.CACHE_SC_TUTO_PAGE	=	$('#tuto_page')	;	}	;
	if	(	this.CACHE_SC_INSTALL_PAGE	==	null	)	{	this.CACHE_SC_INSTALL_PAGE	=	$('#install_page')	;	}	;
	if	(	this.CACHE_SC_LIST_PARCOURS	==	null	)	{	this.CACHE_SC_LIST_PARCOURS	=	$('#list_parcours')	;	}	;
	break;												
													
	case "menu.js": 											
	if	(	this.CACHE_SC_ONE	==	null	)	{	this.CACHE_SC_ONE	=	$("#one")	;	}	;
	if	(	this.CACHE_SC_QUITSCORE	==	null	)	{	this.CACHE_SC_QUITSCORE	=	$('#quitScore')	;	}	;
	if	(	this.CACHE_SC_REPRISE	==	null	)	{	this.CACHE_SC_REPRISE	=	$('#reprise')	;	}	;
	if	(	this.CACHE_SC_HIGHSCORE	==	null	)	{	this.CACHE_SC_HIGHSCORE	=	$('#highscore')	;	}	;
	if	(	this.CACHE_SC_MYFOOTERMENU	==	null	)	{	this.CACHE_SC_MYFOOTERMENU	=	$('#myFooterMenu')	;	}	;
	break;												
													
	case "neuf.js": 											
	
	
	/*T5*/												
	if	(	this.CACHE_SC_SCORE_DIS[0]	==	null	)	{	this.CACHE_SC_SCORE_DIS[0]	=	$('#score_dis0')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[1]	==	null	)	{	this.CACHE_SC_SCORE_DIS[1]	=	$('#score_dis1')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[2]	==	null	)	{	this.CACHE_SC_SCORE_DIS[2]	=	$('#score_dis2')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[3]	==	null	)	{	this.CACHE_SC_SCORE_DIS[3]	=	$('#score_dis3')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[4]	==	null	)	{	this.CACHE_SC_SCORE_DIS[4]	=	$('#score_dis4')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[5]	==	null	)	{	this.CACHE_SC_SCORE_DIS[5]	=	$('#score_dis5')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[6]	==	null	)	{	this.CACHE_SC_SCORE_DIS[6]	=	$('#score_dis6')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[7]	==	null	)	{	this.CACHE_SC_SCORE_DIS[7]	=	$('#score_dis7')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[8]	==	null	)	{	this.CACHE_SC_SCORE_DIS[8]	=	$('#score_dis8')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[9]	==	null	)	{	this.CACHE_SC_SCORE_DIS[9]	=	$('#score_dis9')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[10]	==	null	)	{	this.CACHE_SC_SCORE_DIS[10]	=	$('#score_dis10')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[11]	==	null	)	{	this.CACHE_SC_SCORE_DIS[11]	=	$('#score_dis11')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[12]	==	null	)	{	this.CACHE_SC_SCORE_DIS[12]	=	$('#score_dis12')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[13]	==	null	)	{	this.CACHE_SC_SCORE_DIS[13]	=	$('#score_dis13')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[14]	==	null	)	{	this.CACHE_SC_SCORE_DIS[14]	=	$('#score_dis14')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[15]	==	null	)	{	this.CACHE_SC_SCORE_DIS[15]	=	$('#score_dis15')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[16]	==	null	)	{	this.CACHE_SC_SCORE_DIS[16]	=	$('#score_dis16')	;	}	;
	if	(	this.CACHE_SC_SCORE_DIS[17]	==	null	)	{	this.CACHE_SC_SCORE_DIS[17]	=	$('#score_dis17')	;	}	;
													
													
	/*T6*/												
	if	(	this.CACHE_SC_T[0]	==	null	)	{	this.CACHE_SC_T[0]	=	$('#t0')	;	}	;
	if	(	this.CACHE_SC_T[1]	==	null	)	{	this.CACHE_SC_T[1]	=	$('#t1')	;	}	;
	if	(	this.CACHE_SC_T[2]	==	null	)	{	this.CACHE_SC_T[2]	=	$('#t2')	;	}	;
	if	(	this.CACHE_SC_T[3]	==	null	)	{	this.CACHE_SC_T[3]	=	$('#t3')	;	}	;
	if	(	this.CACHE_SC_T[4]	==	null	)	{	this.CACHE_SC_T[4]	=	$('#t4')	;	}	;
	if	(	this.CACHE_SC_T[5]	==	null	)	{	this.CACHE_SC_T[5]	=	$('#t5')	;	}	;
	if	(	this.CACHE_SC_T[6]	==	null	)	{	this.CACHE_SC_T[6]	=	$('#t6')	;	}	;
	if	(	this.CACHE_SC_T[7]	==	null	)	{	this.CACHE_SC_T[7]	=	$('#t7')	;	}	;
	if	(	this.CACHE_SC_T[8]	==	null	)	{	this.CACHE_SC_T[8]	=	$('#t8')	;	}	;
	if	(	this.CACHE_SC_T[9]	==	null	)	{	this.CACHE_SC_T[9]	=	$('#t9')	;	}	;
	if	(	this.CACHE_SC_T[10]	==	null	)	{	this.CACHE_SC_T[10]	=	$('#t10')	;	}	;
	if	(	this.CACHE_SC_T[11]	==	null	)	{	this.CACHE_SC_T[11]	=	$('#t11')	;	}	;
	if	(	this.CACHE_SC_T[12]	==	null	)	{	this.CACHE_SC_T[12]	=	$('#t12')	;	}	;
	if	(	this.CACHE_SC_T[13]	==	null	)	{	this.CACHE_SC_T[13]	=	$('#t13')	;	}	;
	if	(	this.CACHE_SC_T[14]	==	null	)	{	this.CACHE_SC_T[14]	=	$('#t14')	;	}	;
	if	(	this.CACHE_SC_T[15]	==	null	)	{	this.CACHE_SC_T[15]	=	$('#t15')	;	}	;
	if	(	this.CACHE_SC_T[16]	==	null	)	{	this.CACHE_SC_T[16]	=	$('#t16')	;	}	;
	if	(	this.CACHE_SC_T[17]	==	null	)	{	this.CACHE_SC_T[17]	=	$('#t17')	;	}	;
													
													
													
	if	(	this.CACHE_SC_VALIDSCORETEXT	==	null	)	{	this.CACHE_SC_VALIDSCORETEXT	=	$('#validScoreText')	;	}	;
	if	(	this.CACHE_SC_VALIDSCORETEXTHW	==	null	)	{	this.CACHE_SC_VALIDSCORETEXTHW	=	$('#validScoreTextHW')	;	}	;
	if	(	this.CACHE_SC_NEUF	==	null	)	{	this.CACHE_SC_NEUF	=	$('#neuf')	;	}	;
	if	(	this.CACHE_SC_ONESCORE	==	null	)	{	this.CACHE_SC_ONESCORE	=	$('.oneScore')	;	}	;
	if	(	this.CACHE_SC_SUMMARYSCORE	==	null	)	{	this.CACHE_SC_SUMMARYSCORE	=	$('#summaryScore')[0]	;	}	;
	if	(	this.CACHE_SC_NOHW	==	null	)	{	this.CACHE_SC_NOHW	=	$('#noHW')	;	}	;
	if	(	this.CACHE_SC_HW	==	null	)	{	this.CACHE_SC_HW	=	$('#HW')	;	}	;
													
	if	(	this.CACHE_SC_SCORE_PAR[0]	==	null	)	{	this.CACHE_SC_SCORE_PAR[0]	=	$('#score_par0')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[1]	==	null	)	{	this.CACHE_SC_SCORE_PAR[1]	=	$('#score_par1')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[2]	==	null	)	{	this.CACHE_SC_SCORE_PAR[2]	=	$('#score_par2')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[3]	==	null	)	{	this.CACHE_SC_SCORE_PAR[3]	=	$('#score_par3')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[4]	==	null	)	{	this.CACHE_SC_SCORE_PAR[4]	=	$('#score_par4')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[5]	==	null	)	{	this.CACHE_SC_SCORE_PAR[5]	=	$('#score_par5')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[6]	==	null	)	{	this.CACHE_SC_SCORE_PAR[6]	=	$('#score_par6')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[7]	==	null	)	{	this.CACHE_SC_SCORE_PAR[7]	=	$('#score_par7')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[8]	==	null	)	{	this.CACHE_SC_SCORE_PAR[8]	=	$('#score_par8')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[9]	==	null	)	{	this.CACHE_SC_SCORE_PAR[9]	=	$('#score_par9')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[10]	==	null	)	{	this.CACHE_SC_SCORE_PAR[10]	=	$('#score_par10')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[11]	==	null	)	{	this.CACHE_SC_SCORE_PAR[11]	=	$('#score_par11')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[12]	==	null	)	{	this.CACHE_SC_SCORE_PAR[12]	=	$('#score_par12')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[13]	==	null	)	{	this.CACHE_SC_SCORE_PAR[13]	=	$('#score_par13')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[14]	==	null	)	{	this.CACHE_SC_SCORE_PAR[14]	=	$('#score_par14')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[15]	==	null	)	{	this.CACHE_SC_SCORE_PAR[15]	=	$('#score_par15')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[16]	==	null	)	{	this.CACHE_SC_SCORE_PAR[16]	=	$('#score_par16')	;	}	;
	if	(	this.CACHE_SC_SCORE_PAR[17]	==	null	)	{	this.CACHE_SC_SCORE_PAR[17]	=	$('#score_par17')	;	}	;
													
													
	if	(	this.CACHE_SC_REMSCORE	==	null	)	{	this.CACHE_SC_REMSCORE	=	$('#remScore')	;	}	;
	if	(	this.CACHE_SC_ADDSCORE	==	null	)	{	this.CACHE_SC_ADDSCORE	=	$('#addScore')	;	}	;
	if	(	this.CACHE_SC_EDIT_S	==	null	)	{	this.CACHE_SC_EDIT_S	=	$('#edit_S')	;	}	;
	if	(	this.CACHE_SC_VALIDSCORE	==	null	)	{	this.CACHE_SC_VALIDSCORE	=	$('#validScore')	;	}	;
	if	(	this.CACHE_SC_CANCELSCOREHW	==	null	)	{	this.CACHE_SC_CANCELSCOREHW	=	$('#cancelScoreHW')	;	}	;
	if	(	this.CACHE_SC_VALIDSCOREHW	==	null	)	{	this.CACHE_SC_VALIDSCOREHW	=	$('#validScoreHW')	;	}	;
	if	(	this.CACHE_SC_MYPLAYHEADER	==	null	)	{	this.CACHE_SC_MYPLAYHEADER	=	$("#myPlayHeader")	;	}	;
	if	(	this.CACHE_SC_CHRONO	==	null	)	{	this.CACHE_SC_CHRONO	=	$('#textualInfo')[0]	;	}	;
	if	(	this.CACHE_SC_INFOHCP	==	null	)	{	this.CACHE_SC_INFOHCP	=	$('#infoHCP')[0]	;	}	;
	if	(	this.CACHE_SC_INFOPOS	==	null	)	{	this.CACHE_SC_INFOPOS	=	$('#infoPos')[0]	;	}	;
													
	break;												
													
	case "edit_S.js": 											
													
	if	(	this.CACHE_SC_INDEXSCORE	==	null	)	{	this.CACHE_SC_INDEXSCORE	=	$('#indexScore')[0]	;	}	;
	if	(	this.CACHE_SC_SLIDER_SCORE	==	null	)	{	this.CACHE_SC_SLIDER_SCORE	=	$('#slider-score')	;	}	;
	if	(	this.CACHE_SC_VALIDEEDITSCORE	==	null	)	{	this.CACHE_SC_VALIDEEDITSCORE	=	$('#valideEditScore')	;	}	;
													
													
	break;												
													
	case "parcour.js": 											
	if	(	this.CACHE_SC_SELECT_CHOICE_DAY_OPTION	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_DAY_OPTION	=	$('#select-choice-day option')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_MONTH_OPTION	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_MONTH_OPTION	=	$('#select-choice-month option')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_YEAR_OPTION	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_YEAR_OPTION	=	$('#select-choice-year option')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_DAY	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_DAY	=	$('#select-choice-day')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_MONTH	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_MONTH	=	$('#select-choice-month')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_YEAR	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_YEAR	=	$('#select-choice-year')	;	}	;
	if	(	this.CACHE_SC_GOLF_NAME_FIELD	==	null	)	{	this.CACHE_SC_GOLF_NAME_FIELD	=	$('#golf_name_field')	;	}	;
	if	(	this.CACHE_SC_GOLF_NAME	==	null	)	{	this.CACHE_SC_GOLF_NAME	=	$('#golf_name')[0]	;	}	;
	if	(	this.CACHE_SC_NEUF_LINK	==	null	)	{	this.CACHE_SC_NEUF_LINK	=	$('#neuf_link')	;	}	;
	if	(	this.CACHE_SC_GOLF_NAME_NOTE	==	null	)	{	this.CACHE_SC_GOLF_NAME_NOTE	=	$('#golf_name_note')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_WHEATER	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_WHEATER	=	$('#select-choice-wheater')	;	}	;
	if	(	this.CACHE_SC_GOLF_NAME_INPUT	==	null	)	{	this.CACHE_SC_GOLF_NAME_INPUT	=	$('#golf_name_input')	;	}	;
													
	break;												
													
	case "preference.js": 											
	if	(	this.CACHE_SC_EMAIL_PLAYER	==	null	)	{	this.CACHE_SC_EMAIL_PLAYER	=	$('#email_player')	;	}	;
	if	(	this.CACHE_SC_NAME_PLAYER	==	null	)	{	this.CACHE_SC_NAME_PLAYER	=	$('#name_player')	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_LANG	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_LANG	=	$("#select-choice-lang")	;	}	;
	if	(	this.CACHE_SC_SELECT_CHOICE_UNIT	==	null	)	{	this.CACHE_SC_SELECT_CHOICE_UNIT	=	$("#select-choice-unit")	;	}	;
	if	(	this.CACHE_SC_FLIP_GPS	==	null	)	{	this.CACHE_SC_FLIP_GPS	=	$("#flip-GPS")	;	}	;
	if	(	this.CACHE_SC_FLIP_USEHW	==	null	)	{	this.CACHE_SC_FLIP_USEHW	=	$("#flip-USEHW")	;	}	;
	if	(	this.CACHE_SC_PREFERENCE	==	null	)	{	this.CACHE_SC_PREFERENCE	=	$('#preference')	;	}	;
	break;												






		//TOTOJS
																																	
	
		
		
		}
	}
	
	//Reset cache value
	this.resetAll = function () {
		this.CACHE_SC_ABOUTHEADER  = null;
		this.CACHE_SC_LISTABOUT  = null;
		 
		 
		this.CACHE_SC_DESSIN  = null;
		this.CACHE_SC_ONE  = null;
		this.CACHE_SC_MYBUTTON  = null;
		this.CACHE_SC_SCORE_9  = null;
		this.CACHE_SC_ONE  = null;
		this.CACHE_SC_DOCUMENT  = null;
		 
		 
		 
		this.CACHE_SC_INFO_SCORE  = [,,,,,,,,,,,,,,,,,,];
		 
		this.CACHE_SC_INFO_SCORE_DIS  = [,,,,,,,,,,,,,,,,,,];
		 
		this.CACHE_SC_INFO_SCORE_PAR  = [,,,,,,,,,,,,,,,,,,];		 
		 
		this.CACHE_SC_INFO_T  = [,,,,,,,,,,,,,,,,,,];
				 
		this.CACHE_SC_CONFIRM_SUPRESS  = null;
		this.CACHE_SC_CONFIRMSUPRESSSCORE  = null;
		this.CACHE_SC_PLUS_INFO  = null;
		this.CACHE_SC_INFO_SEND_EMAIL  = null;
		this.CACHE_SC_CONSULT  = null;
		 
		 
		 
		 
		this.CACHE_SC_SHOW_DIST  = null;
		 
		 
		 
		this.CACHE_SC_NEUF  = null;
		this.CACHE_SC_WINDOW  = null;
		this.CACHE_SC_DOCUMENT  = null;
		this.CACHE_SC_DATA_ROLE_HEADER  = null;
		this.CACHE_SC_DOCUMENT  = null;
		this.CACHE_SC_DATA_ROLE_FOOTER  = null;
		this.CACHE_SC_SCORE_9  = null;
		this.CACHE_SC_MYCANVASCTRL  = null;
		this.CACHE_SC_MYHWCANVAS  = null;
		 
		 
		 
		 
		this.CACHE_SC_LIST_PARCOURS  = null;
		this.CACHE_SC_LISTGOLF  = null;
		 
		this.CACHE_SC_ONE  = null;
		this.CACHE_SC_QUITSCORE  = null;
		this.CACHE_SC_REPRISE  = null;
		this.CACHE_SC_HIGHSCORE  = null;
		this.CACHE_SC_MYFOOTERMENU  = null;
		 
		 
		 
		 
		this.CACHE_SC_SCORE_DIS  = [,,,,,,,,,,,,,,,,,,];
		 
		this.CACHE_SC_T = [,,,,,,,,,,,,,,,,,,];
		 
		 
		 
		this.CACHE_SC_VALIDSCORETEXT  = null;
		this.CACHE_SC_VALIDSCORETEXTHW  = null;
		this.CACHE_SC_NEUF_POPUP  = null;
		this.CACHE_SC_SEND_EMAIL  = null;
		this.CACHE_SC_BACKMENU  = null;
		this.CACHE_SC_NEUF  = null;
		this.CACHE_SC_ONESCORE  = null;
		this.CACHE_SC_SUMMARYSCORE  = null;
		this.CACHE_SC_NOHW  = null;
		this.CACHE_SC_HW  = null;
		 
		this.CACHE_SC_SCORE_PAR = [,,,,,,,,,,,,,,,,,,];
		 
		 
		this.CACHE_SC_REMSCORE  = null;
		this.CACHE_SC_ADDSCORE  = null;
		this.CACHE_SC_EDIT_S  = null;
		this.CACHE_SC_INDEXSCORE  = null;
		this.CACHE_SC_SLIDER_SCORE  = null;
		this.CACHE_SC_VALIDEEDITSCORE  = null;
		this.CACHE_SC_VALIDSCORE  = null;
		this.CACHE_SC_CANCELSCOREHW  = null;
		this.CACHE_SC_VALIDSCOREHW  = null;
		this.CACHE_SC_MYPLAYHEADER  = null;
		this.CACHE_SC_CHRONO  = null;
		this.CACHE_SC_INFOHCP  = null;
		this.CACHE_SC_INFOPOS  = null;
		 
		 
		 
		 
		this.CACHE_SC_SELECT_CHOICE_DAY_OPTION  = null;
		this.CACHE_SC_SELECT_CHOICE_MONTH_OPTION  = null;
		this.CACHE_SC_SELECT_CHOICE_YEAR_OPTION  = null;
		this.CACHE_SC_SELECT_CHOICE_DAY  = null;
		this.CACHE_SC_SELECT_CHOICE_MONTH  = null;
		this.CACHE_SC_SELECT_CHOICE_YEAR  = null;
		this.CACHE_SC_GOLF_NAME_FIELD  = null;
		this.CACHE_SC_PARCOUR  = null;
		this.CACHE_SC_GOLF_NAME  = null;
		this.CACHE_SC_NEUF_LINK  = null;
		this.CACHE_SC_GOLF_NAME_NOTE  = null;
		this.CACHE_SC_SELECT_CHOICE_WHEATER  = null;
		this.CACHE_SC_GOLF_NAME  = null;
		this.CACHE_SC_GOLF_NAME_INPUT  = null;
		 
		 
		 
		this.CACHE_SC_EMAIL_PLAYER  = null;
		this.CACHE_SC_NAME_PLAYER  = null;
		this.CACHE_SC_SELECT_CHOICE_LANG  = null;
		this.CACHE_SC_SELECT_CHOICE_UNIT  = null;
		this.CACHE_SC_FLIP_GPS  = null;
		this.CACHE_SC_FLIP_USEHW  = null;
		this.CACHE_SC_PREFERENCE  = null;


	}

	
	this.CACHE_SC_ABOUTHEADER  = null;
	this.CACHE_SC_LISTABOUT  = null;
	 
	 
	this.CACHE_SC_DESSIN  = null;
	this.CACHE_SC_ONE  = null;
	this.CACHE_SC_MYBUTTON  = null;
	this.CACHE_SC_SCORE_9  = null;
	this.CACHE_SC_ONE  = null;
	this.CACHE_SC_DOCUMENT  = null;
	 
	 
	 
	this.CACHE_SC_INFO_SCORE  = [,,,,,,,,,,,,,,,,,,];
	 
	this.CACHE_SC_INFO_SCORE_DIS  = [,,,,,,,,,,,,,,,,,,];
	 
	this.CACHE_SC_INFO_SCORE_PAR  = [,,,,,,,,,,,,,,,,,,];		 
	 
	this.CACHE_SC_INFO_T  = [,,,,,,,,,,,,,,,,,,];
			 
	this.CACHE_SC_CONFIRM_SUPRESS  = null;
	this.CACHE_SC_CONFIRMSUPRESSSCORE  = null;
	this.CACHE_SC_PLUS_INFO  = null;
	this.CACHE_SC_INFO_SEND_EMAIL  = null;
	this.CACHE_SC_CONSULT  = null;
	 
	 
	 
	 
	this.CACHE_SC_SHOW_DIST  = null;
	 
	 
	 
	this.CACHE_SC_NEUF  = null;
	this.CACHE_SC_WINDOW  = null;
	this.CACHE_SC_DOCUMENT  = null;
	this.CACHE_SC_DATA_ROLE_HEADER  = null;
	this.CACHE_SC_DOCUMENT  = null;
	this.CACHE_SC_DATA_ROLE_FOOTER  = null;
	this.CACHE_SC_SCORE_9  = null;
	this.CACHE_SC_MYCANVASCTRL  = null;
	this.CACHE_SC_MYHWCANVAS  = null;
	 
	 
	 
	 
	this.CACHE_SC_LIST_PARCOURS  = null;
	this.CACHE_SC_LISTGOLF  = null;
	 
	this.CACHE_SC_ONE  = null;
	this.CACHE_SC_QUITSCORE  = null;
	this.CACHE_SC_REPRISE  = null;
	this.CACHE_SC_HIGHSCORE  = null;
	this.CACHE_SC_MYFOOTERMENU  = null;
	 
	this.CACHE_SC_SCORE_DIS  = [,,,,,,,,,,,,,,,,,,];
	 
	this.CACHE_SC_T = [,,,,,,,,,,,,,,,,,,];
	 
	 
	 
	this.CACHE_SC_VALIDSCORETEXT  = null;
	this.CACHE_SC_VALIDSCORETEXTHW  = null;
	this.CACHE_SC_NEUF_POPUP  = null;
	this.CACHE_SC_SEND_EMAIL  = null;
	this.CACHE_SC_BACKMENU  = null;
	this.CACHE_SC_NEUF  = null;
	this.CACHE_SC_ONESCORE  = null;
	this.CACHE_SC_SUMMARYSCORE  = null;
	this.CACHE_SC_NOHW  = null;
	this.CACHE_SC_HW  = null;
	 
	this.CACHE_SC_SCORE_PAR = [,,,,,,,,,,,,,,,,,,];
	 
	 
	this.CACHE_SC_REMSCORE  = null;
	this.CACHE_SC_ADDSCORE  = null;
	this.CACHE_SC_EDIT_S  = null;
	this.CACHE_SC_INDEXSCORE  = null;
	this.CACHE_SC_SLIDER_SCORE  = null;
	this.CACHE_SC_VALIDEEDITSCORE  = null;
	this.CACHE_SC_VALIDSCORE  = null;
	this.CACHE_SC_CANCELSCOREHW  = null;
	this.CACHE_SC_VALIDSCOREHW  = null;
	this.CACHE_SC_MYPLAYHEADER  = null;
	this.CACHE_SC_CHRONO  = null;
	this.CACHE_SC_INFOPOS  = null;
	 
	 
	 
	 
	this.CACHE_SC_SELECT_CHOICE_DAY_OPTION  = null;
	this.CACHE_SC_SELECT_CHOICE_MONTH_OPTION  = null;
	this.CACHE_SC_SELECT_CHOICE_YEAR_OPTION  = null;
	this.CACHE_SC_SELECT_CHOICE_DAY  = null;
	this.CACHE_SC_SELECT_CHOICE_MONTH  = null;
	this.CACHE_SC_SELECT_CHOICE_YEAR  = null;
	this.CACHE_SC_GOLF_NAME_FIELD  = null;
	this.CACHE_SC_PARCOUR  = null;
	this.CACHE_SC_GOLF_NAME  = null;
	this.CACHE_SC_NEUF_LINK  = null;
	this.CACHE_SC_GOLF_NAME_NOTE  = null;
	this.CACHE_SC_SELECT_CHOICE_WHEATER  = null;
	this.CACHE_SC_GOLF_NAME  = null;
	this.CACHE_SC_GOLF_NAME_INPUT  = null;
	 
	 
	 
	this.CACHE_SC_EMAIL_PLAYER  = null;
	this.CACHE_SC_NAME_PLAYER  = null;
	this.CACHE_SC_SELECT_CHOICE_LANG  = null;
	this.CACHE_SC_SELECT_CHOICE_UNIT  = null;
	this.CACHE_SC_FLIP_GPS  = null;
	this.CACHE_SC_FLIP_USEHW  = null;
	this.CACHE_SC_PREFERENCE  = null;


}


//Singleton structure :
Cache.instance = null;  

Cache.getInstance = function() {  
  if (this.instance == null) {  
      this.instance = new Cache();  
  }  
  return this.instance;  
}  
