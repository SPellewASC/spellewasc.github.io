
var mode;
var gameover;
var score;
var player_1;

function setup() {
	score=0;
	mode=0;
	gameover=false;
}

function draw() {
	if (mode === 0 && gameover === false) {
		createCanvas(615,615)
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
		createCanvas(615,615);

	}
	if (mode === 1) {
		createCanvas(615,615);
		background(255);
		player_1 = loadAnimation("assets/player_model.png");
		animation(player_1,mouseX,mouseY);
		draw(mouseX,mouseY);
	}
}
