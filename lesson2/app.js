console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(50,100,200,150);
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle = 'rgb(200, 50, 10)';
ctx.fillRect(75, 125, 150, 100);
ctx.clearRect(125,150, 50, 50);
