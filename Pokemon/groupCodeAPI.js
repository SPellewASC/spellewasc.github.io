
var loadurl;
var url = "http://maps.googleapis.com/maps/api/staticmap?center=601%20W.%2026th%20ST.%20NY&zoom=16&size=600x300&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4&visual_refresh=true";
var trainer = "https://spellewasc.github.io/Pokemon/assets/trainer/front/Untitled.png";
var loadtrainer;

/*

var center = "center=601 W. 26th ST. NY";
var zoom = "zoom=16";
var size = "size=600x300";

url = url + center + "&" + zoom + "&" + size;

url = encodeURI(url);

*/

var markerList = ["&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/025-pikachu-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/133-eevee-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/056-mankey-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/058-growlithe-icon.png%7Cshadow:true%7C", "&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/016-pidgey-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/063-abra-icon.png%7Cshadow:true%7C","&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/060-poliwag-icon.png%7Cshadow:true%7C"];

var pikas = ["601 W 26th St. NY","500 W 30th St. NY", "551 W 26th St. NY", "685 W 26th St. NY", "600 25th St. NY"];

var pikasList = [];

for (var i = 0; i < pikas.length; i ++) {
	var pika = encodeURI(pikas[i]);
	var markerStart = markerList[Math.floor(Math.random()*markerList.length)];
	console.log(markerStart);
	url = url + markerStart + pika;
	console.log(i);
}

/*

http://maps.googleapis.com/maps/api/staticmap?

*/

function preload() {

	loadurl = loadImage(url);
	loadtrainer = loadImage(trainer);
}

function setup() {

createCanvas(600,300);
image(loadurl,0,0);
image(trainer,0,0);

/*

&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CAlbany,+NY

*/

}

function draw() {
	animation(trainer,305,305);
}
