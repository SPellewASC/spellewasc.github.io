
var input;
var mode;
var gameover;
var score;
var player;
var inputLevel;

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

function player_movement() {
	if (keyIsDown(RIGHT_ARROW)) {
		player.changeAnimation("moving")
		player.setSpeed(2.25,0);
	}
	if (keyIsDown(LEFT_ARROW)) {
		player.mirrorX(1);
		player.changeAnimation("moving")
		player.setSpeed(2.25,180);
	}
	if (player.position.x < 47.75) {
		player.setSpeed(0,0)
		if (keyIsDown(RIGHT_ARROW)) {
		player.changeAnimation("moving")
		player.setSpeed(2.25,0);
		}
	}
	if (player.position.x > width-player.width-2.5 && player.position.x < width) {
		player.setSpeed(0,0);
		if (keyIsDown(LEFT_ARROW)) {
			player.mirrorX(1);
			player.changeAnimation("moving")
			player.setSpeed(2.25,180);
		}
	}
}

function enemy_movement() {
	
}

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
	player = createSprite(50,280,50,100)
	obstacle = createSprite(610,inputLevel,510,150)
  	var myAnimation = player.addAnimation("floating", "assets/ghost_standing0001.png", "assets/ghost_standing0007.png");
  	player.addAnimation("moving", "assets/ghost_walk0001.png", "assets/ghost_walk0004.png");
	player.addAnimation("spinning", "assets/ghost_spin0001.png", "assets/ghost_spin0003.png");
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
			console.log(input.enabled)
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
		background(0)
	}
	if (mode === 1 && error === false) {
		createCanvas(1220,610);
		background(0);
		inputLevel = input.getLevel();
  		// console.log(inputLevel)
		drawSprites();
		player_movement()
		inputLevel = input.getLevel();
		enemy_movement()
	}
	if (mode === 1 && error === true) {
		createCanvas(1220,610);
		background(255);
		textSize(32);
		text("ERROR", 10, 30);
		if (keyIsDown(ENTER)) {
			input = new p5.AudioIn()
			input.start()
			console.log(input.enabled)
			if (input.enabled === true) {
				error = false;
			}
		}
		if (keyIsDown(CONTROL)) {
			error = false;
		}
	}
}
