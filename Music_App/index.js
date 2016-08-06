
var input;
var mode;
var gameover;
var score;
var player_1;

/*

function preload() {
	
	loadSound("http://spellewasc.github.io/Music_App/assets/Shadow_Man.mp3")
	loads song from assets
}

function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

*/


function setup() {
	score = 0;
	mode = 0;
	gameover = false;
	error = false;
	/*
	song.setVolume(0.2);
		// sets the volume for song
  	song.play();
		// plays song
	*/
	// loads input from computer
	input = new p5.AudioIn()
	input.start()
	var ghost = createSprite(50,510,50,100)
  	var myAnimation = ghost.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png");
  	ghost.addAnimation("moving", "assets/ghost_walk0001.png", "assets/ghost_walk0004.png");
	ghost.addAnimation("spinning", "assets/ghost_spin0001.png", "assets/ghost_spin0003.png");
	// fft = new p5.FFT();
}

function draw() {
	if (mode === 0 && gameover === false) {
		var cnv = createCanvas(1220,610)
		// cnv.mouseClicked(togglePlay);
		// var spectrum = fft.analyze();
		// console.log(spectrum)
		background(0)
		fill(color(255))
		rect(215,207.5,800,150,20)
		c = random();
		c2 = random();
		c3 = random();
		fill(color(c*255,c2*255,c3*255));
		if (keyCode === ENTER) {
			mode = 1
			if (input.enabled) {
				error = false
			}
			else {
				error = true
			}
		}
	}
	if (mode === 0 && gameover === true) {
		createCanvas(1220,610);
	}
	if (mode === 1 && error === false) {
		createCanvas(1220,610);
		background(255);
		inputLevel = input.getLevel();
  		// console.log(inputLevel)
		drawSprites();
	}
	if (mode === 1 && error === true) {
		createCanvas(1220,610);
		background(255);
		textSize(32);
		text("ERROR", 10, 30);

	}
}

