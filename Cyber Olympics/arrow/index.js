
var w = 1350;
var h = 600;
var scene_h = h*2
var game = false;
var background;
var cnv;
// var time;
var millisecond;
// var setup_time;
var image_url_A = "https://spellewasc.github.io/FINAL/assets/pi5xny9iA.png";
var image_url_B = "https://spellewasc.github.io/FINAL/assets/pi5xny9iB.png";
var image_url_C = "https://spellewasc.github.io/FINAL/assets/pi5xny9iC.png";
var image_url_D = "https://spellewasc.github.io/FINAL/assets/pi5xny9iD.png";
var image_url_E = "https://spellewasc.github.io/FINAL/assets/pi5xny9iE.png";
var image_url_F = "https://spellewasc.github.io/FINAL/assets/pi5xny9iF.png";
var image_url_G = "https://spellewasc.github.io/FINAL/assets/pi5xny9iG.png";
var image_url_H = "https://spellewasc.github.io/FINAL/assets/pi5xny9iH.png";
var image_url_I = "https://spellewasc.github.io/FINAL/assets/pi5xny9iI.png";
var image_url_J = "https://spellewasc.github.io/FINAL/assets/pi5xny9iJ.png";
var image_url_1 = "https://spellewasc.github.io/FINAL/assets/pi5xny9iZ.png";
var image_url_2 = "https://spellewasc.github.io/FINAL/assets/pi5xny9iY.png";
var archery_A;
var archery_B;
var archery_C;
var archery_D;
var archery_E;
var archery_F;
var archery_G;
var archery_H;
var archery_I;
var archery_J;
var bow_image;
var bow_image_2;
var arrow_image;
var arrow_toggle = false;
var arrow_rotation_toggle = false;
var dist_1;
var dist_2;
var score = 0;
var score_toggle = true;
var score_toggle_2 = true;
var reset = false;
var limit = 5;

function score_counter() {
	if (score_toggle === false) {
		score = score + 8;
		score_toggle = true
		reset = true
	}
	if (score_toggle_2 === false) {
		score = score + 0.10526249999;
		score_toggle_2 = true
		// reset = true
	}
}

function camera_function() {
	if (arrow_toggle === true) {
		background(color(0,127,127))
		drawSprites();
		///if (dist(player_bow.position.x,player_bow.position.y,arrow.position.x,arrow.position.y) > 10) {
			camera.position.x = arrow.position.x;
  			camera.position.y = arrow.position.y;
			camera.zoom = 2
		///}
		archery_A.scale = 1.125
		archery_B.scale = 1.125
		archery_C.scale = 1.125
		archery_D.scale = 1.125
		archery_E.scale = 1.125
		archery_F.scale = 1.125
		archery_G.scale = 1.125
		archery_H.scale = 1.125
		archery_I.scale = 1.125
		archery_J.scale = 1.125
		archery_A.position.y = -750
		archery_B.position.y = -750
		archery_C.position.y = -750
		archery_D.position.y = -750
		archery_E.position.y = -750
		archery_F.position.y = -750
		archery_G.position.y = -750
		archery_H.position.y = -750
		archery_I.position.y = -750
		archery_J.position.y = -750
   	}
}

function arrow_shooting() {
	if (keyIsPressed === true && keyDown(32) && limit > 0) {
		arrow_toggle = true;
	}
	if (reset === true || arrow.position.x > width || arrow.position.x < 0 || arrow.position.y > width || arrow.position.y < archery_J.position.y-20) {
		player_bow.position.y = 597.5
		player_bow.position.x = (Math.random() * w)
		player_bow.rotation = 45
		arrow.remove()
		arrow = createSprite(player_bow.position.x,player_bow.position.y,100,25);
   		arrow.addImage(arrow_image);
   		arrow.scale = 0.25;
   		arrow_toggle = false;
   		arrow.position.x = player_bow.position.x
   		arrow.rotation = player_bow.rotation * -1
   		arrow.mirrorY(-1);
   		arrow_rotation_toggle = false;
   		camera.position.x = 675;
   		camera.position.y = 300;
   		camera.zoom = 1
   		archery_A.scale = 0.2
		archery_B.scale = 0.2
		archery_C.scale = 0.2
		archery_D.scale = 0.2
		archery_E.scale = 0.2
		archery_F.scale = 0.2
		archery_G.scale = 0.2
		archery_H.scale = 0.2
		archery_I.scale = 0.2
		archery_J.scale = 0.2
		archery_A.position.y = 75
		archery_B.position.y = 75
		archery_C.position.y = 75
		archery_D.position.y = 75
		archery_E.position.y = 75
		archery_F.position.y = 75
		archery_G.position.y = 75
		archery_H.position.y = 75
		archery_I.position.y = 75
		archery_J.position.y = 75
		limit = limit - 1
		drawSprites();
		fill(255);
		textSize(32);
		// text("Time : " + time, 45, 60);
		text("Score : " + Math.ceil(score), 1108.625, 60);
		text("Tries Left : " + limit, 1108.625, 105);
   		textSize(24);
   		text("Aim using the UP and DOWN arrows.", 50, 60);
   		text("Press SPACE to fire an arrow.", 50, 90);
   		reset = false;
   	}
	if (arrow_toggle === true) {
		if (player_bow.position.x > -1) {
			arrow.scale = 0.125
			arrow.setSpeed(-10,(player_bow.rotation + 45))
			player_bow.position.y = 597.5
			player_bow.scale = 0.2
		}
		arrow_rotation_toggle = true;
	}
	if (arrow_toggle === false) {
		player_bow.scale = 0.4
	}
}

function bow_and_arrow() {
	// bconsole.log(player_bow.rotation)
	if (arrow_rotation_toggle === false) {
		arrow.rotation = player_bow.rotation * -1;
	}
   	arrow.mirrorY(-1);
   	if (player_bow.rotation < -45) {
			player_bow.rotation = -45
		}
		if (player_bow.rotation > 135) {
			player_bow.rotation = 135
		}	
	if (arrow_rotation_toggle === false) {
		if (player_bow.rotation >= -45 && player_bow.rotation <= 135) {
			if (keyIsDown(DOWN_ARROW)) {
				player_bow.rotation = player_bow.rotation + 1;
			}
			if (keyIsDown(UP_ARROW)) {
				player_bow.rotation = player_bow.rotation - 1;
			}
			/*
			if (rand_i != 1225 && rand_i != 875) {
				player_bow.mirrorX(-1);
				arrow.mirrorX(-1);
				*/
			//}
		}	
	}	
}

function archery_targets() {
		
	archery_A = createSprite(675,75,100,100);
	archery_B = createSprite(675,75,100,100);
	archery_C = createSprite(675,75,100,100);
	archery_D = createSprite(675,75,100,100);
	archery_E = createSprite(675,75,100,100);
	archery_F = createSprite(675,75,100,100);
	archery_G = createSprite(675,75,100,100);
	archery_H = createSprite(675,75,100,100);
	archery_I = createSprite(675,75,100,100);
	archery_J = createSprite(675,75,100,100);

	archery_A.addImage(target_A_image)
	archery_B.addImage(target_B_image)
	archery_C.addImage(target_C_image)
	archery_D.addImage(target_D_image)
	archery_E.addImage(target_E_image)
	archery_F.addImage(target_F_image)
	archery_G.addImage(target_G_image)
	archery_H.addImage(target_H_image)
	archery_I.addImage(target_I_image)
	archery_J.addImage(target_J_image)

	archery_A.scale = 0.25
	archery_B.scale = 0.25
	archery_C.scale = 0.25
	archery_D.scale = 0.25
	archery_E.scale = 0.25
	archery_F.scale = 0.25
	archery_G.scale = 0.25
	archery_H.scale = 0.25
	archery_I.scale = 0.25
	archery_J.scale = 0.25

	archery_A.setCollider("circle",0,0,160)
	archery_B.setCollider("circle",0,0,144)
	archery_C.setCollider("circle",0,0,128)
	archery_D.setCollider("circle",0,0,112)
	archery_E.setCollider("circle",0,0,85)
	archery_F.setCollider("circle",0,0,76)
	archery_G.setCollider("circle",0,0,63)
	archery_H.setCollider("circle",0,0,47)
	archery_I.setCollider("circle",0,0,31)
	archery_J.setCollider("circle",0,0,1)

	
	//archery_J.debug = true;
	/*
	archery_I.debug = true;
	archery_H.debug = true;
	archery_G.debug = true;
	archery_F.debug = true;
	archery_E.debug = true;
	archery_D.debug = true;
	archery_C.debug = true;
	archery_B.debug = true;
	archery_A.debug = true;
	*/

}

function collision_target() {
	if (arrow.overlap(archery_A)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_B)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_C)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_D)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_E)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_F)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_G)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_H)) {
		score_toggle_2 = false
	}
	if (arrow.overlap(archery_I)) {
		score_toggle_2 = false
	}
}

function collision_target_10() {
	arrow_toggle = false
	for (var i = 0; i < 10; i++) {
			score_toggle = false
	}
	// arrow.setVelocity(0,player_bow.rotation)
	// arrow.setSpeed(0,0)
	/*
	if (player_bow.position.x >= width/2) {
		arrow.position.y = archery_J.position.y + 15
		arrow.position.x = archery_J.position.x + 20
	}
	if (player_bow.position.x < width/2) {
		arrow.position.y = archery_J.position.y + 15
		arrow.position.x = archery_J.position.x - 20
	}
	*/
	// arrow.setSpeed
}

function setup_() {
	background(color(0,127,127))
	fill(255);
	textSize(32);
	// text("Time : " + time, 45, 60);
	text("Score : " + Math.ceil(score), 1108.625, 60);
	text("Tries Left : " + limit, 1108.625, 105);
   	textSize(24);
   	text("Aim using the UP and DOWN arrows.", 50, 60);
   	text("Press SPACE to fire an arrow.", 50, 90);
   	if (limit <= 0) {
   		background(0)
   		textSize(100)
   		textAlign(CENTER,CENTER)
   		text("GAME OVER", 675, 300-100);
   		textSize(32)
   		text("Score : " + Math.ceil(score), 1108.625, 60);
   		textSize(80)
   		text("Press ENTER to retry the game.",675,300+50)
		arrow.remove()
   		player_bow.remove()
   		archery_A.remove()
		archery_B.remove()
		archery_C.remove()
		archery_D.remove()
		archery_E.remove()
		archery_F.remove()
		archery_G.remove()
		archery_H.remove()
		archery_I.remove()
		archery_J.remove()
		if (keyCode === ENTER) {
			limit = 5;
			//time = parseInt(millisecond/1000) - parseInt(setup_time/1000)
			player_bow = createSprite((Math.random() * w),597.5,100,100);
			player_bow.addImage(bow_image);
			player_bow.position.y = 597.5
			player_bow.position.x = (Math.random() * w)
			player_bow.rotation = 45
			arrow.remove()
			arrow = createSprite(player_bow.position.x,player_bow.position.y,100,25);
	   		arrow.addImage(arrow_image);
	   		arrow.scale = 0.25;
	   		arrow_toggle = false;
	   		arrow.position.x = player_bow.position.x
	   		arrow.rotation = player_bow.rotation * -1
	   		arrow.mirrorY(-1);
	   		arrow_rotation_toggle = false;
	   		camera.position.x = 675;
	   		camera.position.y = 300;
	   		camera.zoom = 1
	   		score = 0
	   		// time = 0
	   		archery_A = createSprite(675,75,100,100);
			archery_B = createSprite(675,75,100,100);
			archery_C = createSprite(675,75,100,100);
			archery_D = createSprite(675,75,100,100);
			archery_E = createSprite(675,75,100,100);
			archery_F = createSprite(675,75,100,100);
			archery_G = createSprite(675,75,100,100);
			archery_H = createSprite(675,75,100,100);
			archery_I = createSprite(675,75,100,100);
			archery_J = createSprite(675,75,100,100);
			archery_A.addImage(target_A_image)
			archery_B.addImage(target_B_image)
			archery_C.addImage(target_C_image)
			archery_D.addImage(target_D_image)
			archery_E.addImage(target_E_image)
			archery_F.addImage(target_F_image)
			archery_G.addImage(target_G_image)
			archery_H.addImage(target_H_image)
			archery_I.addImage(target_I_image)
			archery_J.addImage(target_J_image)
	   		archery_A.scale = 0.2
			archery_B.scale = 0.2
			archery_C.scale = 0.2
			archery_D.scale = 0.2
			archery_E.scale = 0.2
			archery_F.scale = 0.2
			archery_G.scale = 0.2
			archery_H.scale = 0.2
			archery_I.scale = 0.2
			archery_J.scale = 0.2
			archery_A.position.y = 75
			archery_B.position.y = 75
			archery_C.position.y = 75
			archery_D.position.y = 75
			archery_E.position.y = 75
			archery_F.position.y = 75
			archery_G.position.y = 75
			archery_H.position.y = 75
			archery_I.position.y = 75
			archery_J.position.y = 75
			drawSprites();
		}
   	}
}

function preload() {
	target_A_image = loadImage(image_url_A);
	target_B_image = loadImage(image_url_B);
	target_C_image = loadImage(image_url_C);
	target_D_image = loadImage(image_url_D);
	target_E_image = loadImage(image_url_E);
	target_F_image = loadImage(image_url_F);
	target_G_image = loadImage(image_url_G);
	target_H_image = loadImage(image_url_H);
	target_I_image = loadImage(image_url_I);
	target_J_image = loadImage(image_url_J);
	bow_image = loadImage(image_url_1);
	arrow_image = loadImage(image_url_2);
}

function setup() {
	createCanvas(w,h);
	archery_targets();
	player_bow = createSprite((Math.random() * w),597.5,100,100);
   	player_bow.addImage(bow_image);
   	player_bow.scale = 0.4;
   	arrow = createSprite(player_bow.position.x,player_bow.position.y,100,25);
   	arrow.addImage(arrow_image);
   	arrow.scale = 0.25;
   	player_bow.rotation = 45;
   	arrow_toggle = false;
   	arrow.rotation = player_bow.rotation * -1
   	arrow.mirrorY(-1);   	
}

function draw() {
	//print(player_bow.rotation+45)
	if (game === false) {
		background(color(0,127,127))
		fill(255)
		textSize(64);
		textAlign(CENTER);
		text("Press ENTER to begin the game.",675,300)
		if (keyCode === ENTER) {
			// setup_time = millis();
			game = true;
		}
	}
	if (game === true) {	
		millisecond = millis();
		setup_();
		// time = parseInt(millisecond/1000) - parseInt(setup_time/1000)
		bow_and_arrow();
		arrow_shooting();
		drawSprites();
		collision_target(); 
		/*
		arrow.collide(archery_A,collision_target_1);
		arrow.collide(archery_B,collision_target_2);
		arrow.collide(archery_C,collision_target_3);
		arrow.collide(archery_D,collision_target_4);
		arrow.collide(archery_E,collision_target_5);
		arrow.collide(archery_F,collision_target_6);
		arrow.collide(archery_G,collision_target_7);
		arrow.collide(archery_H,collision_target_8);
		arrow.collide(archery_I,collision_target_9);
		*/
		arrow.collide(archery_J,collision_target_10);
		print(score);
		camera_function();
		score_counter();
	}
}