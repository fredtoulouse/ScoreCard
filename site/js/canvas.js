// GOLF SCore Card webapp
// 2013-06-19
// Copyright (c) 2013, FBM
// Released under the GPL license v2
// http://www.gnu.org/licenses/gpl-2.0.html


function Canvas()  {  

	//Attributs
	var color = "#000";   			// Couleur du pinceau
	var width_brush = 5;  			// Largeur du pinceau
	var painting = false; 			// Suis-je en train de dessiner ?
	var started = false;  			// Ai-je commencé à dessiner ?
	var canvas, ctx, cursorX, cursorY; 	// Variables concernant le canvas définies plus tard


	this.init = function() {  
			
		//Init jquery-cache 
		Cache.getInstance().init("canvas.js");	
			
		// Init du Canvas :
		canvas = $("#dessin");
		ctx = canvas[0].getContext('2d');
		// Trait arrondi :
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		
		ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		
		//FBM
		ctx.fillStyle = "rgba(25,25,25,75)";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		
		ScoreCardLog("TTOTOTOT taille header taille footer "+$("#one").height()+ $("#myHeader").height()+ $("#myFooter").height());
		ScoreCardLog("myButton " + $("#myButton").height());
		ScoreCardLog("myScore " + $(".score_9").height());
		
		ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = $("#one").height() - ($("#myHeader").height() + $("#myButton").height() + $(".score_9").height() + 300);
		
		ScoreCardLog("canvas "+ ctx.canvas.height);
		
		// Click souris enfoncé sur le canvas, je dessine :
		canvas.mousedown(function(e) {
			painting = true;		
			// Coordonnées de la souris :
			cursorX = (e.pageX - this.offsetLeft);
			cursorY = (e.pageY - this.offsetTop);
		});
		
		// Relachement du Click sur tout le document, j'arrete de dessiner :
		canvas.mouseup(function() {
			painting = false;
			started = false;
		});
		
		// Mouvement de la souris sur le canvas :
		canvas.mousemove(function(e) {
			// Si je suis en train de dessiner (click souris enfoncé) :
			if (painting) {
				// Set Coordonnées de la souris :
				cursorX = (e.pageX - $(document).offsetLeft); // 10 = decalage du curseur
				cursorY = (e.pageY - $(document).offsetTop);
				
				// Dessine une ligne :
				drawLine();
			}
		});
		
		// Fonction qui dessine une ligne :
		function drawLine() {
			// Si c'est le debut, j'initialise
			if (!started) {
				// Je place mon curseur pour la première fois :
				ctx.beginPath();
				ctx.moveTo(cursorX, cursorY);
				started = true;
			} 
			// Sinon je dessine
			else {
				ctx.lineTo(cursorX, cursorY);
				ctx.strokeStyle = color;
				ctx.lineWidth = width_brush;
				ctx.stroke();
			}
		}
	} 
 }  
