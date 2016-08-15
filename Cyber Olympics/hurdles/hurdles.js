
var finish;
var w = 1350;
var h = 600;
var scene_w = w*6;
var game = false;
var limit = 163.6363636365-54.545454545;
var limit_1 = 272.7272727275-36.545454545;
var limit_2 = 381.81818181849997-36.545454545;
var limit_3 = 490.9090909095-36.545454545;
var jumping = false;
var gravity = 1;
var enemy_1_jumping = false;
var enemy_2_jumping = false;
var enemy_3_jumping = false;
var initial_jump_1 = true;
var initial_jump_2 = true;
var initial_jump_3 = true;
var player;
var enemy_1;
var enemy_2;
var enemy_3;
var background;
var cnv;
var enemy_group;
var time;
var millisecond;
var random_1;
var random_2;
var random_3;
var random_4;
var obstacle;
var obstacle_1;
var obstacle_group;
var obstacle_group_1;
var speed_increase;
var setup_time;
var int_dist_1;
var int_group_1;
var int_dist_2;
var int_group_2;
var int_dist_3;
var int_group_3;
var finish_line;
var image_url_A = "https://spellewasc.github.io/FINAL/assets/pi4xny9iA.png";
var image_url_B = "https://spellewasc.github.io/FINAL/assets/pi4xny9iB.png";
var image_url_Z = "https://spellewasc.github.io/FINAL/assets/pi4xny9iZ.jpg";
var player_url_1 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/1.png";
var player_url_2 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/2.png";
var player_url_3 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/3.png";
var player_url_4 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/4.png";
var player_url_5 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/5.png";
var player_url_6 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/6.png";
var player_url_7 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/7.png";
var player_url_8 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/8.png";
var player_url_9 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/1/9.png";
var player_url_2_1 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/1.png";
var player_url_2_2 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/2.png";
var player_url_2_3 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/3.png";
var player_url_2_4 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/4.png";
var player_url_2_5 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/5.png";
var player_url_2_6 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/6.png";
var player_url_2_7 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/7.png";
var player_url_2_9 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/2/9.png";
var player_url_3_1 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/1.png";
var player_url_3_2 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/2.png";
var player_url_3_3 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/3.png";
var player_url_3_4 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/4.png";
var player_url_3_5 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/5.png";
var player_url_3_6 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/6.png";
var player_url_3_7 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/7.png";
var player_url_3_9 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/3/9.png";
var player_url_4_1 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/1.png";
var player_url_4_2 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/2.png";
var player_url_4_3 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/3.png";
var player_url_4_4 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/4.png";
var player_url_4_5 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/5.png";
var player_url_4_6 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/6.png";
var player_url_4_7 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/7.png";
var player_url_4_9 = "https://spellewasc.github.io/FINAL/assets/archery/player_models/4/9.png";
// var canvas = loadImage();

/*
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
*/

function camera_movement() {
	camera.position.x = player.position.x + 1050/2 - 200;
}

function setup_() {
	background(0)
	strokeWeight(4);
	stroke(255);
	line(-1350,109.090909091,scene_w,109.090909091);
	for (var j = 1; j < 4; j++) {
		strokeWeight(1);
		line(-1350,109.090909091+109.090909091*j,scene_w,109.090909091+109.090909091*j);
	}
	line(-1350,545.454545455,scene_w,545.454545455);
	fill(255);
	textSize(32);
	text("Time : " + time, player.position.x - 250, 40);
   	textSize(24);
   	text("Press SPACE to jump over the hurdles.", player.position.x - 250, 70);
}

function player_() {
	player = createSprite(54.545454545,109.090909091*1.5,40,40);
	player.addAnimation("running", player_model_1, player_model_2, player_model_3, player_model_4, player_model_5, player_model_6, player_model_7);
	player.addAnimation("colliding", player_model_8)
	player.addAnimation("jumping", player_model_9)
	// player.addImage(player_model_1)
	// player.changeAnimation("running")
	player.scale = 0.5

}

function player_movement() {
	if (player.velocity.x < (random_1 + random_2 + random_3)/3 + 0.75) {
		if (keyIsPressed === true && keyDown(32)) {
			player.velocity.x = player.velocity.x + 0.015
		}
	}
	player.changeAnimation("running")
	if (jumping === true) {
		player.changeAnimation("jumping")
	}
	if (keyIsPressed === true && keyDown(32) && jumping === false && player.position.y >= 163.6363636365 && player.velocity.y === 0) {
		jumping = true;	
		if (jumping === true && player.position.y-limit > 0) {
			player.velocity.y = player.velocity.y - gravity/0.25;
			if (player.getAnimationLabel() === "running" && keyIsPressed === true && keyDown(32)) {
				player.changeAnimation("jumping");
			} else {
				player.changeAnimation("running")
			}
		}
	}
	if (player.position.y-limit < -10 && jumping === true) {
		jumping = false
		player.velocity.y = 0
		// player.velocity.x = player.velocity.x + 10
	}
	if (jumping === false) {
		if (player.position.y <= 100.6363636365) {
			player.velocity.y = player.velocity.y + gravity/0.25;
			// player.velocity.x = player.velocity.x - 10
	 	}
	}
	if (player.position.y >= 163.6363636365 && player.velocity.y >= 4 && jumping === false) {
		player.velocity.y = 0;
		player.position.y = 163.6363636365;
		if (player.velocity.y === 0) {
			jumping = false
		}
	}
}	

function enemy_() {
	enemy_group = new Group();
	enemy_1 = createSprite(54.545454545+109.090909091*1,player.position.y+player.position.y*1/1.5,40,40);
	enemy_2 = createSprite(54.545454545+109.090909091*2,player.position.y+player.position.y*2/1.5,40,40);
	enemy_3 = createSprite(54.545454545+109.090909091*3,player.position.y+player.position.y*3/1.5,40,40);
	enemy_group.add(enemy_1)
	enemy_group.add(enemy_2)
	enemy_group.add(enemy_3)
	enemy_1.addAnimation("running", player_model_2_1, player_model_2_2, player_model_2_3, player_model_2_4, player_model_2_5, player_model_2_6, player_model_2_7);
	enemy_1.addAnimation("jumping", player_model_2_9)
	enemy_2.addAnimation("running", player_model_3_1, player_model_3_2, player_model_3_3, player_model_3_4, player_model_3_5, player_model_3_6, player_model_3_7);
	enemy_2.addAnimation("jumping", player_model_3_9)
	enemy_3.addAnimation("running", player_model_4_1, player_model_4_2, player_model_4_3, player_model_4_4, player_model_4_5, player_model_4_6, player_model_4_7);
	enemy_3.addAnimation("jumping", player_model_4_9)
}

function collision() {
	// console.log(player.velocity.x)
	if (player.velocity.x > 2) {
		player.velocity.x = player.velocity.x - 0.01875
	}
	speed_increase = true;
	player.changeAnimation("colliding")
	if (player.getAnimationLabel() === "colliding" && keyIsPressed === true && keyDown(32)) {
		player.changeAnimation("jumping");
	}
}

function enemy_movement() {
	enemy_1.velocity.x = random_1;
	enemy_2.velocity.x = random_2;
	enemy_3.velocity.x = random_3;
	// console.log(enemy_1_jumping)
	
	enemy_1.changeAnimation("running")
	enemy_2.changeAnimation("running")
	enemy_3.changeAnimation("running")


	if (enemy_1_jumping === true && initial_jump_1 === true) {


		if (enemy_1.position.y <= 272.7272727275) {
			enemy_1.velocity.y = enemy_1.velocity.y - gravity/0.25;
			initial_jump_1 = false;
		}
	}
	if (enemy_1.position.y-limit_1 < 0 && enemy_1_jumping === true) {
		enemy_1_jumping = false
		enemy_1.velocity.y = 0
		// enemy_1.velocity.x = enemy_1.velocity.x + 10
	}
	if (enemy_1_jumping === false && enemy_1.position.y === 232.7272727275) {
		if (enemy_1.position.y <= 232.7272727275) {
			enemy_1.velocity.y = enemy_1.velocity.y + gravity/0.125;
			enemy_1.position.x = enemy_1.position.x + 35
			// enemy_1.velocity.x = enemy_1.velocity.x - 10
	 	}
	}
	if (enemy_1.position.y >= 272.7272727275 && enemy_1.velocity.y === 8) {
		enemy_1.velocity.y = 0;
		if (enemy_1.velocity.y === 0) {
			enemy_1_jumping = false;
			initial_jump_1 = true;
			enemy_1.position.y = 272.7272727275;
		}
	}

	if (enemy_2_jumping === true && initial_jump_2 === true) {


		if (enemy_2.position.y <= 381.81818181849997) {
			enemy_2.velocity.y = enemy_2.velocity.y - gravity/0.25;
			initial_jump_2 = false;
		}
	}
	if (enemy_2.position.y-limit_2 < 0 && enemy_2_jumping === true) {
		enemy_2_jumping = false
		enemy_2.velocity.y = 0
		// enemy_1.velocity.x = enemy_1.velocity.x + 10
	}
	if (enemy_2_jumping === false && enemy_2.position.y === 341.81818181849997) {
		if (enemy_2.position.y <= 341.81818181849997) {
			enemy_2.velocity.y = enemy_2.velocity.y + gravity/0.125;
			enemy_2.position.x = enemy_2.position.x + 35
			initial_jump_2 = false;
			// enemy_1.velocity.x = enemy_1.velocity.x - 10
	 	}
	}
	if (enemy_2.position.y >= 381.81818181849997 && enemy_2.velocity.y === 8) {
		enemy_2.velocity.y = 0;
		if (enemy_2.velocity.y === 0) {
			enemy_2_jumping = false;
			initial_jump_2 = true;
			enemy_2.position.y = 381.81818181849997;
		}
	}

	if (enemy_3_jumping === true && initial_jump_3 === true) {


		if (enemy_3.position.y <= 490.9090909095) {
			enemy_3.velocity.y = enemy_3.velocity.y - gravity/0.25;
			initial_jump_3 = false;
		}
	}
	if (enemy_3.position.y-limit_3 < 0 && enemy_3_jumping === true) {
		enemy_3_jumping = false
		enemy_3.velocity.y = 0
		// enemy_1.velocity.x = enemy_1.velocity.x + 10
	}
	if (enemy_3_jumping === false && enemy_3.position.y === 450.9090909095) {
		if (enemy_3.position.y <= 450.9090909095) {
			enemy_3.velocity.y = enemy_3.velocity.y + gravity/0.125;
			enemy_3.position.x = enemy_3.position.x + 35
			initial_jump_3 = false;
			// enemy_1.velocity.x = enemy_1.velocity.x - 10
	 	}
	}
	if (enemy_3.position.y >= 490.9090909095 && enemy_3.velocity.y === 8) {
		enemy_3.velocity.y = 0;
		if (enemy_3.velocity.y === 0) {
			enemy_3_jumping = false;
			initial_jump_3 = true;
			enemy_3.position.y = 490.9090909095;
		}
	}
}

function finish_collision() {
	game = false
}

function obstacles() {
	obstacle_group = new Group();
	for (var i = 1; i < 11; i++) {
		obstacle = createSprite(545.45454545*i+109.090909091*i,player.position.y+27.5,10,28.5)
		obstacle.addImage(hurdle_blue);
		obstacle.scale = 0.8;
		obstacle_group.add(obstacle);
	}
	obstacle_group_1 = new Group();
	for (var l = 1; l < 4; l++) {
		for (var m = 1; m < 11; m++) {
			obstacle_1 = createSprite(545.45454545*m+109.090909091*m,player.position.y+108 *l+28.5,10,28.5);
			obstacle_1.addImage(hurdle_red);
			obstacle_1.scale = 0.8;
			obstacle_group_1.add(obstacle_1);
		}
	}
}

function obstacle_detection() {
	for (var n = 0; n <= 9; n++) {
		int_group_1 = obstacle_group_1.get(n)
		// console.log(int_group.position.x)
		int_dist_1 = int(dist(enemy_1.position.x,enemy_1.position.y,int_group_1.position.x,int_group_1.position.y))
		// console.log(int_dist_1)
		if (int_dist_1 <= 35 && initial_jump_1 === true) {
			enemy_1_jumping = true
			// console.log(enemy_1_jumping)
		}
	}
	for (var o = 10; o <= 19; o++) {
		int_group_2 = obstacle_group_1.get(o)
		// console.log(int_group.position.x)
		int_dist_2 = int(dist(enemy_2.position.x,enemy_2.position.y,int_group_2.position.x,int_group_2.position.y))
		// console.log(int_dist_1)
		if (int_dist_2 <= 35 && initial_jump_2 === true) {
			enemy_2_jumping = true
			// console.log(enemy_2_jumping)
		}
	}
	for (var p = 20; p <= 29; p++) {
		int_group_3 = obstacle_group_1.get(p)
		// console.log(int_group.position.x)
		int_dist_3 = int(dist(enemy_3.position.x,enemy_3.position.y,int_group_3.position.x,int_group_3.position.y))
		// console.log(int_dist_1)
		if (int_dist_3 <= 35 && initial_jump_3 === true) {
			enemy_3_jumping = true
			// console.log(enemy_3_jumping)
		}
	}
}

function preload() {
	hurdle_blue = loadImage(image_url_A);
	hurdle_red = loadImage(image_url_B);
	finish_line = loadImage(image_url_Z)
	player_model_1 = loadImage(player_url_1)
	player_model_2 = loadImage(player_url_2)
	player_model_3 = loadImage(player_url_3)
	player_model_4 = loadImage(player_url_4)
	player_model_5 = loadImage(player_url_5)
	player_model_6 = loadImage(player_url_6)
	player_model_7 = loadImage(player_url_7)
	player_model_8 = loadImage(player_url_8)
	player_model_9 = loadImage(player_url_9)
	player_model_2_1 = loadImage(player_url_2_1)
	player_model_2_2 = loadImage(player_url_2_2)
	player_model_2_3 = loadImage(player_url_2_3)
	player_model_2_4 = loadImage(player_url_2_4)
	player_model_2_5 = loadImage(player_url_2_5)
	player_model_2_6 = loadImage(player_url_2_6)
	player_model_2_7 = loadImage(player_url_2_7)
	player_model_2_9 = loadImage(player_url_2_9)
	player_model_3_1 = loadImage(player_url_3_1)
	player_model_3_2 = loadImage(player_url_3_2)
	player_model_3_3 = loadImage(player_url_3_3)
	player_model_3_4 = loadImage(player_url_3_4)
	player_model_3_5 = loadImage(player_url_3_5)
	player_model_3_6 = loadImage(player_url_3_6)
	player_model_3_7 = loadImage(player_url_3_7)
	player_model_3_9 = loadImage(player_url_3_9)
	player_model_4_1 = loadImage(player_url_4_1)
	player_model_4_2 = loadImage(player_url_4_2)
	player_model_4_3 = loadImage(player_url_4_3)
	player_model_4_4 = loadImage(player_url_4_4)
	player_model_4_5 = loadImage(player_url_4_5)
	player_model_4_6 = loadImage(player_url_4_6)
	player_model_4_7 = loadImage(player_url_4_7)
	player_model_4_9 = loadImage(player_url_4_9)
}

function setup() {
	// cnv = createCanvas(w,h);
	finish = createSprite()
	finish.addImage(finish_line)
	finish_1 = createSprite()
	finish_1.addImage(finish_line)
	finish_2 = createSprite()
	finish_2.addImage(finish_line)
	finish_3 = createSprite()
	finish_3.addImage(finish_line)
	fill(255)
	strokeWeight(4)
	finish.scale = 0.2
	finish.rotation = 90
	finish.position.x = 6730.3
	finish.position.y = 185.090909091
	finish_1.scale = 0.2
	finish_1.rotation = 90
	finish_1.position.x = 6730.3
	finish_1.position.y = 329.090909091
	finish_2.scale = 0.2
	finish_2.rotation = 90
	finish_2.position.x = 6730.3
	finish_2.position.y = 473.090909091
	createCanvas(w,h);
	player_();
	enemy_();
	obstacles();
	random_1 = random(3.75,4.25);
	random_2 = random(3.75,4.25);
	random_3 = random(3.75,4.25);
	console.log(random_1)
	console.log(random_2)
	console.log(random_3)
	// centerCanvas();
	// image(canvas,0,0);
}

function draw() {
	if (game === false) {
		background(0)
		fill(255)
		textSize(64);
		textAlign(CENTER);
		text("Press ENTER to begin the game.",675,300)
		if (keyCode === ENTER) {
			player.velocity.x = 6
			game = true
			setup_time = millis();
		}
	}
	if (game === true) {
		console.log(player.velocity.x)
		millisecond = millis();
		setup_();
		time = parseInt(millisecond/1000) - parseInt(setup_time/1000)
		camera_movement();
		drawSprites();
		player_movement();
		enemy_movement();
		player.collide(obstacle_group,collision);
		obstacle_detection();
		player.collide(finish,finish_collision)
		/*
		finish_3.scale = 0.2
		finish_3.rotation = 90
		finish_3.position.x = 6589.3
		finish_3.position.y = 339.090909091
		*/
	}
}

$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});