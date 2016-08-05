
var player;
var loadimg;
var url = "http://maps.googleapis.com/maps/api/staticmap?center=Rockefeller+Center,+10+Rockefeller+Plaza,+New+York,+NY+10020&zoom=15&scale=1&size=640x640&maptype=roadmap&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4&format=png&visual_refresh=true";
var frame1 = "https://spellewasc.github.io/Pokemon/assets/player_model.gif";
var direction = 90;
var mouse = false;
var cnv;
var pokeID;
var pokeimg;
var pokemon;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function changeinput() {
	if (mouse === false) {
		console.log(mouse)
		if (keyCode === TAB) {
			mouse = true;
		}
	}
	if (mouse === true) {
		if (keyCode === TAB) {
			mouse = false;
		}
	}
}

function createVariables(){
  var accounts = [];

  for (var i = 0; i <= 20; ++i) {
      accounts[i] = "whatever";
  }

  return accounts;
}

function preload() {

	var pokelist = [];
	var pokeimgs = [];

	canvas = loadImage(url);
	player_model = loadImage(frame1);

	for (var i = 0; i <= 10; ++i) {
		pokeID = Math.floor(Math.random() * (151 - 1 + 1) + 1);
		pokelist.push(pokeID);
		var base = "http://pokeapi.co/media/sprites/pokemon/";
		var png = ".png";
		pokeimg = base + pokelist[i] + png;
		loadImage(pokeimg)
		console.log(pokeimg)
	}	

}

function setup() {

    cnv = createCanvas(640, 640);
    centerCanvas();
	image(canvas,0,0);
	player = createSprite(320,320,64,64);
	player.addImage(player_model);
	for (var i = 0; i <= 10; ++i) {
		pokemon[i] = createSprite(Math.random() * 640, Math.random() * 640, 1, 1)
		player.addImage(pokeimg)
	}

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function windowResized() {
  centerCanvas();
}

function draw() {
	
	if (mouse === true) {
	}

	if (mouse === false) {
		if (keyIsDown(RIGHT_ARROW)) {
			player.setSpeed(1.5,0);
		}
		else if (keyIsDown(DOWN_ARROW)) {
			player.setSpeed(1.5,90);
		}
		else if (keyIsDown(LEFT_ARROW)) {
			player.setSpeed(1.5,180);
		}
		else if (keyIsDown(UP_ARROW)) {
			player.setSpeed(1.5,270);
		}
		else {
			player.setSpeed(0,0)
		}
	}

	image(canvas,0,0);
	drawSprites();

}
