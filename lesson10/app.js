var game = new Phaser.Game(800, 600, Phaser.AUTO, '' 
	,{preload:preload, create:create, update:update})
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky' , 'assets/sky.png');
	game.load.image('ground' , 'assets/platform.png');
	game.load.image('star' , 'assets/star.png');
	game.load.spritesheet('dude','assets/dude.png' , 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32);
	game.load.image('health', 'assets/firstaid.png')
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0, 'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	var ledges = platforms.create(400, 400, 'ground');
	ledges.body.immovable = true;
	ledges = platforms.create(-100, 250, 'ground');
	ledges.body.immovable = true;

	var style = {font: "bold 32px Arial", fill: "#fff"};
	//positioning the score 
	scorelabel = game.add.text(300, 560, "Score", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2); 

	//positioning the lives
	lifelabel = game.add.text(10,5, "Lives:", style);
	lifetext = game.add.text(120,5, life,style);
	lifelabel.setShadow(3,3, 'rgba(0,0,0,0.5',2);
	lifetext.setShadow(3,3, 'rgba(0,0,0,0.5',2); 

	player = game.add.sprite(32, 400, 'dude');
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animation.add('left', [5,6,7,8], 10, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy1 = game.add.sprite(750, 20, 'baddie');
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [0,1], 10, true);
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y= 300;
		enemy1.body.collideWorldBounds = true;

		//Create keyboard entries
		cursors = game.input.keyboard.createCursorKeys();

		//lesson 10
		heaths = game.add.physicsGroup();
		healths.enableBody = true;

		enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)

		goText = game.add.text(0,0, style);
		goText.visible = false;
		goText.setTextBounds(100,200,300,800,1000)

	stars = game.app.physicsGroup();
	stars.enableBody = true;

	for (var i = 0; i < 12; i++)
{
	var star = stars.create(i=70, 0, 0, 'star')
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.7 + Math.random() * 0.2;

	}
	cursors = game.input.keyboard.createCursorKey();
	
}

function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(enemy1, platforms); 
	player.body.velocity.x = 0;
	// Moving player 
	if(cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play("left")
	} else{
		player.animations.stop();
		player.frame = 4;
	}

	// Making player jump

	// Start of L9
	game.physics.aracde.overlap(player, stars, collectStar);
	game.physics.arcade.overlap(player, enemy1, loseLife);

	moveEnergy();

	if(life < 0);{
		endGame();

	}
 }

function collectStar(player, star){
	score += 1;
	scoretext.setText(score);
	star.kill();
	star.reset (Math.floor(Math.random() * 750), 0);

	if(score % 10 == 0){
		health = healths.create(Math.floor(Math.random() * 750), 0, "health");
		health.body.gravity.y = 200;
		health.body.bounce.y = 0.2
	}

}


function collectHealth(player, health){
	life += 1;
	lifetext.setText(life);
	health.kill();
}

function LoseLife(player, enemy){
	Life -= 1;
	lifetext.setText(life);
	enemy.kill();
	enemy.reset(10, 20);
}

//Lesson 10
game.physics.arcade.overlap(player, healths, collectHealth);


function moveEnemy(){
if(enemy1.x > 759){
	enemy1.animations.play('left');
	enemy1.body.velocity.x = -120;
	} else if(enemy1.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 120;

	} else {
		player.animations.stop();
		player.frame = 4;    
	}

} 

function restartGame(){
	stars.callALL('kill');
	healths.callALL('kill');
	for (var i = 0; i < 12; i++){
		var star = stars.create(i*70, 0, "star");
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}
	player.reset(32, 400);
	score = 0;
	life = 3;
	lifetext.setText(life);
	scorelabel.setText(score);
	goText.visible = false;
	scorelabel.visible = true;
	scoretext.visible = true;
	lifelabel.visible = true;
	lifetext.visible = true;	

}


function endGame(){
	player.kill();
	lifelabel.visible = false;
	lifetext.visible = false;
	scoretext.visible = false;
	scorelabel.text = 'Game over! You scored: ${score}';
	scorelabel.visible = false;

	enterKey.onDown.addOnce(restartGame);

} 











