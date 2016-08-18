
var mode = 0;
var gameover = false;
var score = 0;
var player;
var frame1 = "http://spellewasc.github.io/Agar.io/assets/player_model.png";
var size = 64;

function preload() {
	player_model = loadImage(frame1);
}

function setup() {
	player = createSprite(mouseX,mouseY,size,size);
	player.shapeColor = color(0);
	// player.addImage(player_model);
}

function draw() {

	drawSprites();
	
	if (mode === 0 && gameover === false) {
		createCanvas(610,610)
		background(0)
		fill(color(255))
		rect(107.5,207.5,400,150,20)
		document.getElementById("agar").value
		c = random();
		c2 = random();
		c3 = random();
		fill(color(c*255,c2*255,c3*255));
		if (keyCode == ENTER) {
			mode = 1
		}
		// rect(257.5,257.5,100,50,5)
	}
	if (mode === 0 && gameover === true) {
		createCanvas(610,610);

	}
	if (mode === 1) {
		createCanvas(610,610);
		background(255);
		player.position.x = mouseX;
		player.position.y = mouseY;

	}
}
