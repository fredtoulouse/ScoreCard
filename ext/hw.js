// Javascript Single-stroke Handwriting recognition
// version 0.1
// 2005-09-26
// Copyright (c) 2005, Julien Couvreur
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
// version 0.3
// 2010-07-11
// Copyright (c) 2010, John Urban
//todo:
// - add function for tangents
// - add heuristics based on tangents

//confirm('got here 1 0')
// override regular alert to print characters best matched at bottom


// version 0.3-FBM1 Fork 
// 2013-03-29 FBM add support for Score Card Marker and hope other tools 
var board = function (text) {
	text = text.replace(/\n/g, " -- ");
	
	/*
	
	switch (text) { 
	case "backspace":
		ii = $('#letter').innerHTML.length;
		span.innerHTML = span.innerHTML.substring(0, ii - 1);
		break;
	case "switch":
		UPPER_CASE = true;
		break;
	case "return":
		$('#letter').innerHTML = $('#letter').innerHTML + '\n';
		break;
	case "extended":
		EXTENDED = true;
		break;
	case "clear":
		span.innerHTML = "Best Match:";
		var image = new Image();
		image.src = "start.gif";
		clear_canvas();
		break;
	default:
		span.innerHTML = span.innerHTML + pickCase(text);
		break;
	}*/
	
	if (text != "switch" && UPPER_CASE == true) {
		UPPER_CASE = false
	}
	lasttext = text;
}

function clickHandler(e) {
	var top = 0,
	left = 0;
	if (!e) {
		e = window.event;
	}
	var myTarget = e.currentTarget;
	if (!myTarget) {
		myTarget = e.srcElement;
	} else if (myTarget == "undefined") {
		myTarget = e.srcElement;
	}
	while (myTarget != document.body) {
		top += myTarget.offsetTop;
		left += myTarget.offsetLeft;
		myTarget = myTarget.offsetParent;
	}
	//  alert("left: " + left + "\ntop: " + top); 
}

/* FBM not used
function d(A, B) { // draw polyline
	var xscale = 140;
	var yscale = 320;
	var xoffset = 100;
	var yoffset = 30;
	ctx.strokeStyle = "rgba(200, 0, 0, 0.5)";
	ctx.lineWidth = 4.0;
	ctx.beginPath();
	ctx.moveTo(A[0] * xscale + xoffset, B[0] * yscale + yoffset);
	for (i = 1; i < A.length; i = i + 1) {
		ctx.lineTo(A[i] * xscale + xoffset, B[i] * yscale + yoffset);
	}
	//ctx.closePath();
	ctx.stroke();
	
	// note that polylines of no cumulative length (ie. POINTS) do not display, so draw circle at beginning in case
	radius = ctx.lineWidth * 3; // draw circles for dots with radius set to N(line_thickness)
	var opacity = 0.8;
	for (i = 0; i < A.length; i = i + 1) {
		ctx.fillStyle = "rgba(0, 200, 0, " + opacity + ")";
		ctx.beginPath();
		ctx.arc(A[i] * xscale + xoffset, B[i] * yscale + yoffset, radius, 0, Math.PI * 2, true);
		ctx.fill();
		opacity = opacity - 0.04;
	}
}

function alphabet(yystart, yyend) {
	var STROKEIMAGE = new Image();
	STROKEIMAGE.src = "Gestures.gif";
	xx = 577;
	clear_canvas();
	ctx.drawImage(STROKEIMAGE, 0, yystart, xx, yyend - yystart, 0, 0, xx, yyend - yystart);
}
*/
var Constraint = new function () {
	this.StartTopLeft = 1; // starting in the top left corner is allowed
	this.StartTopRight = 1 << 1;
	this.StartBottomLeft = 1 << 2;
	this.StartBottomRight = 1 << 3;
	this.StartAny = this.StartTopLeft | this.StartTopRight | this.StartBottomLeft | this.StartBottomRight;
	
	this.EndTopLeft = 1 << 4;
	this.EndTopRight = 1 << 5;
	this.EndBottomLeft = 1 << 6;
	this.EndBottomRight = 1 << 7;
	this.EndAny = this.EndTopLeft | this.EndTopRight | this.EndBottomLeft | this.EndBottomRight;
	
	this.Any = this.StartAny | this.EndAny;
}

function Path() {
	this.xs = new Array();
	this.ys = new Array();
	var ls = new Array();
	var normalized = false;
	
	
	this.init = function (inX, inY) {
		for (var i = 0; i < inX.length; i++) {
			this.add(inX[i], inY[i]);
		}
		this.normalize();
		
	}
	
	
	function distancePoints(x0, y0, x1, y1) {
		return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
	}
	
	this.distancePath = function (path) {
		var ret = 0;
		var len = this.xs.length;
		
		if (path == null) {
		   return; 
		}
		
		if (path.xs.length != len) {
			// throw
			return;
		}
		for (var i = 0; i < len; i++) {
			ret += distancePoints(this.xs[i], this.ys[i], path.xs[i], path.ys[i]);
		}
		return ret;
	}
	
	
	this.closest = function (paths) {
		var closestIndex = 0;
		var minDist = this.distancePath(paths[0]);
		
		for (var i = 1; i < paths.length; i++) {
			var dist = this.distancePath(paths[i]);
			if (dist < minDist) {
				minDist = dist;
				closestIndex = i;
			}
		}
		return closestIndex;
	}
	
	
	this.add = function (x, y) {
		var i = ls.length;
		this.xs.push(x);
		this.ys.push(y);
		
		if (i > 0) {
			var l = distancePoints(this.xs[i - 1], this.ys[i - 1], this.xs[i], this.ys[i]);
			ls.push(ls[i - 1] + l);
		} else {
			ls.push(0);
		}
	}
	this.board = function () {
		var out = "";
		var n = this.xs.length;
		
		for (var i = 0; i < n; i++) {
			out += this.xs[i] + ", " + this.ys[i] + "\n";
		}
		board(out);
	}
	
	// todo: move this method onto Array.prototype
	
	function minMax(array) {
		if (array.lengh == 0) return;
		
		var min = array[0];
		var max = array[0];
		
		for (var i = 0; i < array.length; i++) {
			if (array[i] < min) {
				min = array[i];
			} else if (array[i] > max) {
				max = array[i];
			}
		}
		
		return {
			min: min,
			max: max
		};
	}
	
	this.getLength = function () {
		return ls[ls.length - 1];
	}
	
	
	function interpolate(array, index, ratio) {
		var v0 = array[index];
		var v1 = array[index + 1];
		
		return v0 + (v1 - v0) * ratio;
	}
	
	this.normalize = function () {
		if (normalized) {
			return;
		}
		normalized = true;
		
		var normLen = 10;
		var normXs = new Array();
		var normYs = new Array();
		var len = this.getLength();
		
		var mx = minMax(this.xs);
		var my = minMax(this.ys);
		var proportion = Math.abs((mx.max - mx.min) / (my.max - my.min));
		
		var curIndex = 0;
		
		for (var i = 0; i <= normLen; i++) {
			var targetLen = i * len / normLen;
			
			while (ls[curIndex + 1] < targetLen) {
				curIndex++;
			}
			var ratio = (targetLen - ls[curIndex]) / (ls[curIndex + 1] - ls[curIndex]);
			var x = interpolate(this.xs, curIndex, ratio);
			var y = interpolate(this.ys, curIndex, ratio);
			
			if (proportion < 0.2) {
				normXs.push(0);
				normYs.push((y - my.min) / (my.max - my.min));
			} else if (proportion > 5) {
				normXs.push((x - mx.min) / (mx.max - mx.min));
				normYs.push(0);
			} else {
				normXs.push((x - mx.min) / (mx.max - mx.min));
				normYs.push((y - my.min) / (my.max - my.min));
			}
		}
		
		this.xs = normXs;
		this.ys = normYs;
	}
	
	var posValue = function (x, y) {
		if (x < 0.5 && y < 0.5) {
			return Constraint.StartTopLeft;
		}
		if (x > 0.5 && y < 0.5) {
			return Constraint.StartTopRight;
		}
		if (x < 0.5 && y > 0.5) {
			return Constraint.StartBottomLeft;
		}
		if (x > 0.5 && y > 0.5) {
			return Constraint.StartBottomRight;
		}
	}
	
	this.matchConstraint = function (c) {
		if (!c) {
			return true;
		}
		if (!normalized) {
			return false;
		}
		
		var startValue = posValue(this.xs[0], this.ys[0]);
		var endValue = posValue(this.xs[this.xs.length - 1], this.ys[this.ys.length - 1]) << 4;
		
		//alert("startValue: " + startValue + " endValue: " + endValue + ", constraint: " + c);
		
		return ((startValue | endValue) & (~c)) == 0;
	}
	
}

function DigitsReference() {
	var ref = new Array();
	
	
	var create = function (s, xs, ys, c) {
		var p = new Path();
		p.init(xs, ys)
		ref.push({
				symbol: s,
				path: p,
				constraint: c
		});
	}
	
	
	create("A", [0, 5, 10], [10, 0, 10], Constraint.StartBottomLeft | Constraint.EndBottomRight);
	create("B", [1, 0, 0, 0, 10, 10, 0, 10, 0], [0, 5, 10, 0, 0, 5, 5, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("C", [10, 0, 0, 10], [0, 0, 10, 10], Constraint.StartTopRight | Constraint.EndBottomRight);
	create("D", [0, 0, 0, 10, 10, 0], [0, 10, 0, 0, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("E", [10, 0, 0, 3, 0, 0, 10], [0, 0, 5, 5, 5, 10, 10], Constraint.StartTopRight | Constraint.EndBottomRight);
	create("F", [10, 0, 0], [0, 0, 10], Constraint.StartTopRight | Constraint.EndBottomLeft);
	create("G", [10, 0, 0, 10, 10, 5], [0, 0, 10, 10, 5, 5], Constraint.StartTopRight | Constraint.EndAny);
	create("H", [0, 0, 0, 3, 3], [0, 10, 7, 7, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("I", [5, 5], [0, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("J", [10, 10, 0], [0, 10, 10], Constraint.StartTopRight | Constraint.EndBottomLeft | Constraint.EndTopLeft);
	create("L", [0, 0, 10], [0, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("K", [10, 0, 0, 10], [0, 10, 0, 10], Constraint.StartTopRight | Constraint.EndBottomRight);
	create("M", [0, 0, 5, 10, 10], [10, 0, 5, 0, 10], Constraint.StartBottomLeft | Constraint.EndBottomRight);
	create("N", [0, 0, 10, 10], [10, 0, 10, 0], Constraint.StartBottomLeft | Constraint.EndTopRight);
	create("O", [5, 0, 0, 10, 10, 5], [0, 0, 10, 10, 0, 0], Constraint.StartTopLeft | Constraint.StartTopRight | Constraint.EndTopLeft | Constraint.EndTopRight);
	
	create("P", [0, 0, 0, 10, 10, 0], [0, 10, 0, 0, 5, 5], Constraint.StartTopLeft | Constraint.EndAny);
	
	create("Q", [5, 0, 0, 10, 10, 5, 10], [0, 0, 10, 10, 0, 0, 0], Constraint.StartTopLeft | Constraint.StartTopRight | Constraint.EndTopRight);
	create("R", [0, 0, 0, 10, 10, 0, 10], [0, 10, 0, 0, 5, 5, 10], Constraint.TopLeft | Constraint.BottomRight);
	create("S", [10, 0, 0, 10, 10, 0], [0, 2, 4, 6, 8, 10], Constraint.StartTopRight | Constraint.EndBottomLeft);
	create("T", [0, 8, 8], [0, 0, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("U", [0, 2, 8, 10], [0, 10, 10, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("V", [0, 3, 6, 10], [0, 10, 0, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("W", [0, 0, 5, 10, 10], [0, 10, 5, 10, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("prefix", [0, 10], [0, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("X", [10, 10], [0, 0], Constraint.StartTopRight | Constraint.EndBottomLeft);
	create("Y", [0, 0, 5, 5, 5, 5, 5, 10], [0, 5, 5, 0, 5, 10, 5, 5], Constraint.StartTopLeft | Constraint.EndAny);
	create("Z", [0, 10, 0, 10], [0, 0, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("blank", [0, 3, 5, 10], [5, 5, 5, 5], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("backspace", [10, 5, 3, 0], [5, 5, 5, 5], Constraint.StartTopRight | Constraint.EndTopLeft);
	create("switch", [5, 5], [10, 0], Constraint.StartBottomLeft | Constraint.EndTopLeft);
	create("return", [10, 0], [0, 10], Constraint.StartTopRight | Constraint.EndBottomLeft);
	create("extended", [0, 0], [10, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create("tap", [0], [0], Constraint.StartTopLeft | Constraint.EndTopLeft);
	create("0", [5, 10, 10, 0, 0, 5], [0, 0, 10, 10, 0, 0], Constraint.StartTopLeft | Constraint.StartTopRight | Constraint.EndTopLeft | Constraint.EndTopRight);
	create("1", [3, 4, 5, 5], [3, 3, 0, 10]);
	create("2", [0, 0, 5, 7, 10, 9, 0, 10], [5, 0, 0, 0, 3, 4, 10, 10]);
	create("3", [0, 10, 10, 7, 10, 10, 0], [0, 0, 5, 5, 5, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("4", [0, 0, 10], [0, 5, 5], Constraint.StartTopLeft | Constraint.EndBottomRight);
	
	create("5", [10, 0, 0, 10, 10, 0, 0], [0, 0, 5, 5, 10, 10, 5], Constraint.StartTopRight);
	
	create("6", [10, 0, 0, 9, 9, 0], [0, 0, 10, 10, 4, 4], Constraint.StartTopRight, Constraint.EndAny);
	
	create("7", [0, 5, 0], [0, 0, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("8", [10, 0, 0, 10, 10, 0, 10], [0, 2, 4, 6, 8, 10, 0], Constraint.StartTopRight | Constraint.EndTopRight);
	create("9", [4, 0, 0, 4, 4, 4], [0, 0, 4, 4, 0, 7]);
	create("P2", [0, 0, 10, 10, 0], [10, 0, 0, 5, 5], Constraint.StartBottomLeft | Constraint.EndAny);
	create("Q2", [4, 0, 0, 4, 4], [0, 0, 4, 4, 7]);
	create("R2", [0, 0, 10, 10, 0, 10], [10, 0, 0, 5, 5, 10], Constraint.StartBottomLeft | Constraint.EndBottomRight);
	create("U2", [0, 0, 10, 10], [0, 10, 10, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("V2", [10, 5, 0], [0, 10, 0], Constraint.StartTopRight | Constraint.EndTopLeft);
	create("X2", [0, 10, 0, 10], [0, 10, 10, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("b", [0, 0, 0, 3, 3, 0], [0, 10, 7, 7, 10, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	
	// Punctuation mode
	create("?", [0, 0, 10, 10, 5, 5], [1, 0, 0, 5, 5, 10], Constraint.StartTopLeft);
	create(".", [5, 5], [5, 5], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create(",", [5, 0], [5, 10], Constraint.StartTopRight | Constraint.EndBottomLeft);
	create("'", [5, 0], [0, 5], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("`", [10, 0, 10], [0, 0, 10], Constraint.StartBottomLeft | Constraint.EndBottomLeft);
	create("-", [3, 5], [5, 5], Constraint.StartTopLeft | Constraint.EndTopRight);
	create("_", [0, 10, 0], [5, 5, 5], Constraint.StartBottomLeft | Constraint.EndTopLeft);
	create("\"", [0, 10], [0, 10], Constraint.StartTopLeft | Constraint.EndBottomRight);
	create(":", [0, 0, 7, 7], [10, 0, 10, 0], Constraint.StartBottomLeft | Constraint.EndTopLeft);
	create("(", [0, 0, 0], [0, 10, 0], Constraint.StartTopLeft | Constraint.EndTopRight);
	create(")", [5, 3, 0, 3, 5], [0, 4, 5, 6, 10], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("{", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("}", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("[", [2, 0, 0, 2], [0, 0, 10, 10], Constraint.StartTopRight | Constraint.EndBottomRight);
	create("]", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("<", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create(">", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create(";", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("@", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("#", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("$", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("%", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("^", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("&", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("*", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("!", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("~", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("+", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("=", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("\\", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("|", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("/", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	create("\t", [], [], Constraint.StartTopLeft | Constraint.EndBottomLeft);
	
	
	/* Not used
	this.drawTemplate = function (lettername) {
		var minRefItem;
		clear_canvas();
		for (var refItemName in ref) {
			refItem = ref[refItemName];
			if (lettername == refItem.symbol) {
				//alert("symbol: " + refItem.symbol + ", refItem.path: " + refItem.path.xs + refItem.path.ys);
				d(refItem.path.xs, refItem.path.ys);
			}
		}
	}*/
	
	this.findBestMatch = function (path) {
		path.normalize();
		
		var minDist = 100;
		var minRefItem;
		
		//JSU: MOD Sat Mar  1 21:08:13 EST 2008
		//__________________________________________________________
		//  for each(var refItem in ref) {   // CURRENTLY NOT IMPLEMENTED EXCEPT IN FIREFOX: iterate over the values of an object, and not the keys
		//__________________________________________________________
		for (var refItemName in ref) {
			refItem = ref[refItemName];
			//__________________________________________________________
			// if constraints are not compatible, skip
			if (!path.matchConstraint(refItem.constraint)) {
				continue;
			}
			var dist = path.distancePath(refItem.path);
			//alert("symbol: " + refItem.symbol + ", dist: " + dist);
			if (dist < minDist) {
				minDist = dist;
				minRefItem = refItem;
			}
		}
		return minRefItem;
	}
	
}
//confirm('got here 7 00')

function pickCase(text) {
	if (UPPER_CASE == true) {
		return text.toUpperCase();
	} else {
		return text.toLowerCase();
	}
}



// GLOBAL VARIABLES

var EXTENDED = false;
var UPPER_CASE = false;
var UPPER_CASE_LOCK = false;
var PREFIX = false;

var drawing = false;
var lasttext = "never";
var lastpos = {
	x: -1,
	y: -1
};

var beginPos = {
	x: -1,
	y: -1
};
var path;
var ref;
var pos;

function on_mousedown(ev) {
	ev.preventDefault();

	drawing = true;
	clear_canvas();
	
	lastpos = GetPos(ev); //JSU WAS: lastpos = {x: e.clientX, y: e.clientY};
	
	//Some draw init
	ctx.moveTo(lastpos.x, lastpos.y);
	
	path = new Path(); // start new path
	path.add(lastpos.x, lastpos.y); // add current position at mousedown as first point
}


function on_mousemove(ev) {
	ev.preventDefault();
	if (!drawing)
		return;

	ScoreCardLog("PERF  canvas on_mousemove");

	pos = GetPos(ev); //JSU WAS: var pos = {x: e.clientX, y: e.clientY};
	
	// draw
	//ScoreCardLog("PERF  on_mousemove 1");
	ctx.lineTo(pos.x, pos.y);
	ctx.stroke();
	
	lastpos = pos; // update last position
	
	//FBM test operfo
	path.add(pos.x, pos.y); // add point to current path
}



// More generic than var pos = {x: e.clientX, y: e.clientY};
// JSU Sat Mar  1 18:47:10 EST 2008

//For use with Mobile or Mouse event
function GetPos(ev) {
	var pos;

	if (mouse_input) {
		pos = {
			x: ev.pageX-beginPos.x,
			y: ev.pageY-beginPos.y
		};
	} else {
		pos = {
			x: ev.originalEvent.targetTouches[0].pageX - beginPos.x,
			y: ev.originalEvent.targetTouches[0].pageY - beginPos.y
		};
	}

	return pos;
}


function on_mouseup() {
	drawing = false;
	
	//Finish the draw
	//ctx.stroke();
	
	clear_canvas();
	if (path != null) {
		var refItem = ref.findBestMatch(path);
		if (refItem) {
			functionItemFind(refItem.symbol);
		} else { // no reasonable match found, refItem undefined
			functionNoItemFind();
		}
	} else {
		functionNoItemFind();
	}	
}

var canvas;
var ctx;
var HwTxtMsg;
var mouse_input=false; //By default use as mobile screen 

var functionItemFind;
var functionNoItemFind;

function clear_canvas() {
	ctx.clearRect(0,0, canvas.width(), canvas.height());
	ctx.beginPath();
	ctx.strokeStyle = "rgb(227,126,127)";
	ctx.lineWidth = 4.0;
}

function setTxtMsg(myTxt) {
   HwTxtMsg=myTxt;
}

function initHw(idCanvas) {	
		ref = new DigitsReference()
		canvas = $(idCanvas);
		ctx = canvas[0].getContext('2d');
		
		//event for Mobile
		//Catch event from mobile
		canvas.bind('touchstart', function(e) {
			ScoreCardLog("PERF  canvas.bind touchstart");
			
			//Set the top corner
			beginPos = {
				x: this.offsetLeft,
				y: this.offsetTop
			};
			
			mouse_input=false;
			on_mousedown(e);
		});
		
		// Relachement du doigt sur tout le document, j'arrete de dessiner :
		$(this).bind('touchend', function() {
			ScoreCardLog("PERF  this.bind touchend");
			drawing = false;
		});

		canvas.bind('touchend', function() {
			ScoreCardLog("PERF  canvas.bind touchend");
			on_mouseup();
		});
		
		// Mouvement du doigt sur le canvas :
		canvas.bind('touchmove', function(e) {
			ScoreCardLog("PERF  canvas.bind touchmove");
			on_mousemove(e);
		});
		
		//Event for Mouse
		// Click souris enfonce sur le canvas, je dessine :
		canvas.mousedown(function(e) {
				ScoreCardLog("PERF  canvas mousedown");
				
				//Set the top corner
				beginPos = {
					x: this.offsetLeft,
					y: this.offsetTop
				};
				
				mouse_input=true;
				on_mousedown(e);
		});
		
		// Relachement du Click sur tout le document, j'arrête de dessiner :
		$(this).mouseup(function() {
			ScoreCardLog("PERF  this mouseup");
			drawing = false;
		});

		canvas.mouseup(function() {
			ScoreCardLog("PERF  canvas mouseup");
			on_mouseup();
		});
		
		// Mouvement de la souris sur le canvas :
		canvas.mousemove(function(e) {
			e.preventDefault();
			on_mousemove(e);
		});
}