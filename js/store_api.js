// GOLF SCore Card webapp
// 2013-08-12
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html

//only compatible with android version

//generic error handler
function onError (evt) {
	ScoreCardLog('[FAIL] ' + evt.target.error.code);
}


function StoreInfoFirefox (text, filename) {

	var FILENAME=filename;

	var sdcard = navigator.getDeviceStorage("sdcard");

	console.log('TRY TO DELETE :' + "GolfScoreCard/"+FILENAME);	
	var request=sdcard.delete( "GolfScoreCard/"+FILENAME);

	request.onsuccess = function () {
		var file_ID   = new Blob([text], {type: "text/plain"});

		var request2 = sdcard.addNamed(file_ID, "GSC/"+FILENAME);

		request2.onsuccess = function () {
			var name = this.result;
			ScoreCardLog('SUCCES STORE ' + name);	
		}

		// An error typically occur if a file with the same name already exist
		request2.onerror = function () {
			ScoreCardLog('ERROR Store this file ' + FILENAME+ " -> " + this.error.name);	
		}
	}

	request.onerror = function () {
		console.log("Unable to delete the file: " + this.error.name);
	}
	
	
	
}


//Extract this class in another files
function StoreInfoAndroid (text, filename) {

    var FILENAME=filename;

	// A re voir complet pour support 
	    var myObject=null;
	    var fullPath=null;

		this.fail = function (evt) {
			ScoreCardLog('[FAIL] ' + evt.target.error.code);
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

