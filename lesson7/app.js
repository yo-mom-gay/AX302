var game = new Phaser.Game(800, 600, Phaser.AUTO, '' 
	,{preload:preload, create:create, update:update})
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky' , 'assets/sky/png');
	game.load.image('ground' , 'assets/platform.png');
	game.load.image('star' , 'assets/star.png');
	game.load.sprite('dude','assets/dude.png' , 32, 48);
}

fucntion create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0 'sky');

	platform = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	var ledges = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true;

	var style = {font: "bold 32px Arial", fill: "#fff"};
	scorelabel = game.add.text(300, 560, "Score", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
}

function update(){

}