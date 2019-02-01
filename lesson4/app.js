console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Sprites Loading

var bw = new Image();
var capt = new Image();
var hawkeye = new Image();
var hulk = new Image();
var im = new Image();
var thor = new Image();
bw.src = "Black-Widow.png";
capt.src = "capt.png";
hawkeye.src = "hawkeye.png";
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";

// Draw our sprite

bw.onload = function(){
	ctx.drawImage(bw,650,200,150,200);
}
im.onload = function(){
	ctx.drawImage(im,470,110,200,200);
}

hawkeye.onload = function(){
	ctx.drawImage(hawkeye,10,120,150,190);
}
hulk.onload = function(){
	ctx.drawImage(hulk,220,110,190,190);
}
capt.onload = function(){
	ctx.drawImage(capt,370,250,200,200);
}
thor.onload = function(){
	ctx.drawImage(thor,150,250,200,180);
}

// Skies and land
ctx.fillStyle = "sandybrown";
ctx.fillRect(0, 380, 800, 150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0, 0, 800, 380);

// Moon
ctx.beginPath();
ctx.arc(100,100,50,0, 6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();

//OPTIONAL - Importing a google font to load before the text shows on the canvas
WebFontConfig = {
  google:{ families: ['Bangers'] },
  active: function(){textSetup();},
};
(function(){
  var wf = document.createElement("script");
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
  wf.async = 'true';
  document.head.appendChild(wf);
})();

//Text
function textSetup(){
	ctx.font = "55px Bangers";
	ctx.fillStyle = "ivory";
	ctx.fillText("Avengers Assemble !", 210, 80);
}
