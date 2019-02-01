console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ironman = new Image();
ironman.src = "ironman.png";

ironman.onload = function(){
	ctx.drawImage(ironman, 100, 100, 100, 100,)
}

ctx.font = "40px Roboto"
ctx.fillStyle = "blue";
ctx.fillText("Haro there!", 10, 50);
ctx.strokeText("World", 100 , 250);


var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d"); 
ctx1.fillStyle = "red";

ctx1.fillStyle = "cyan"
ctx1.fillRect(0, 0, 800, 400);

var strange = new Image();
strange.src = "strange.jpg"

strange.onload = function(){
	ctx1.drawImage(strange, 100, 100, 300, 300,)
} 

ctx1.font = "40px Roboto"
ctx1.fillStyle = "green";
ctx1.fillText("I am da meme-lord", 10, 50);
ctx1.strokeText("World", 200, 250);