


var mode;
var gameover;
var score;
var player_1;

function preload() {
	song = loadSound("http://spellewasc.github.io/Music_App/assets/Shadow_Man.mp3")
	// loads song from assets
}

function setup() {
	score=0;
	mode=0;
	gameover=false;
	song.setVolume(0.1);
		// sets the volume for song
  		song.play();
		// plays song
}

function draw() {
	if (mode === 0 && gameover === false) {
		createCanvas(610,610)
		background(0)
		fill(color(255))
		rect(107.5,207.5,400,150,20)
		document.getElementById("sound").value
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
	}
}