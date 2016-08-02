
var mode;
var gameover;
var score;
var basketball;
var hoop;

function preload() {
	basketball = loadAnimation("https://spellewasc.github.io/Agar.io/assets/basketball_resource.png");
	hoop = loadAnimation("https://spellewasc.github.io/Agar.io/assets/basketball_hoop_resource.png");
}

function setup() {
	score=0;
	mode=0;
	gameover=false;
}

function draw() {
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
		background(127);
		animation(basketball,305,570);
		animation(hoop,305,127);
		
		if (mouseButton == LEFT) {
			var basketball_ = createSprite(305,127,63,63);			basketball.velocity.x = random(-5,5)
			basketball.velocity.y = random(-5,5);
		}
	}
}
