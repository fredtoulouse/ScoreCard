// GOLF SCore Card webapp
// 2013-08-12
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

//only compatible with android version

//generic error handler
function onError (evt) {
	ScoreCardLog('[FAIL 2] ' + evt.target.error.code);
}

//Extract this class in inaother files
function StoreInfo (text, filename) {

    var FILENAME=filename;
    var myObject=null;
    var fullPath=null;

 	this.fail = function (evt) {
   		ScoreCardLog('[FAIL 2] ' + evt.target.error.code);
	}

    this.gotFS = function (fs) {
   		
        fs.root.getFile(FILENAME, {
                create: true,
                exclusive: false
            },
            myObject.gotFileEntry,  onError);
    }

    this.gotFileEntry = function (fileEntry) {
    
    	fullPath=fileEntry.fullPath;
    
        fileEntry.createWriter(myObject.gotFileWriter, onError);
        
        ScoreCardLog('FILEENTRY ' + fullPath);
    }

	this.getFullName = function () {
	  	return fullPath;
	}

    this.gotFileWriter = function (fileWriter) {
	    fileWriter.onwrite = function(evt) {
	        ScoreCardLog('SUCCESS WRITE DATA ');
	    };
      
      	fileWriter.onwrite = function(evt) {
	        ScoreCardLog('SUCCESS WRITE DATA ');
	    };
	    
		//Stockage Data 
		fileWriter.write(text);
		
		ScoreCardLog('SUCCESS WRITE FINISHED ');
		
    }

 	this.fail = function (evt) {
   		ScoreCardLog('[FAIL 2] ' + evt.target.error.code);
	}


	ScoreCardLog("STORE request device"); 
	myObject=this;
	document.addEventListener('deviceready', function () {
		ScoreCardLog("STORE device ready"); 
		//var fail = myObject.failCB('requestFileSystem'); 	
				
		function onError (e) {
			ScoreCardLog('STORE [FAIL2] ' + e.code); 	
		}
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, myObject.gotFS, onError);
	}, false);
	
	ScoreCardLog("STORE Finish Init"); 
}
