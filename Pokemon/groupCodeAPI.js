
var player;
var loadimg;
var url = "http://maps.googleapis.com/maps/api/staticmap?center=Rockefeller+Center,+10+Rockefeller+Plaza,+New+York,+NY+10020&zoom=15&scale=1&size=640x640&maptype=roadmap&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4&format=png&visual_refresh=true";
var markerList = ["&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/025-pikachu-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/133-eevee-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/056-mankey-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/058-growlithe-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/016-pidgey-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/063-abra-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/060-poliwag-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/043-oddish-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/041-zubat-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/043-oddish-icon.png%7Cshadow:true%7C"];
// var pikas = ["601 W 26th St. NY","500 W 30th St. NY", "551 W 26th St. NY", "685 W 26th St. NY", "600 25th St. NY"];
var pikasList = [];
var frame1 = "https://spellewasc.github.io/Pokemon/assets/player_model.gif";
var direction = 90;
var mouse = false;
var cnv;
<<<<<<< HEAD

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

=======
>>>>>>> origin/master

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
/*
for (var i = 0; i < pikas.length; i ++) {
	
	var pika = encodeURI(pikas[i]);
	var markerStart = markerList[Math.floor(Math.random()*markerList.length)];
	console.log(markerStart);
	url = url + markerStart + pika;
}
*/
function preload() {

	canvas = loadImage(url);
	player_model = loadImage(frame1);
	
}

function setup() {

<<<<<<< HEAD
    cnv = createCanvas(640, 640);
    centerCanvas();
=======
	cnv = createCanvas(640, 640);
  	centerCanvas();
>>>>>>> origin/master
	image(canvas,0,0);
	player = createSprite(320,320,64,64);
	player.addImage(player_model);
	canvas.parent('sketch-holder');

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
