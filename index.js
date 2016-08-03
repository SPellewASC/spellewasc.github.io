
var canvas_width = screen.availWidth;
var canvas_height = screen.availHeight;
//The 30 and 90 above are arbitrary figures to allow for other DIVS on the page
var canvas_div = window.document.getElementById("Canvas_Container");
canvas_div.innerHTML = "<canvas id='Canvas_1' width='"+canvas_width+"' height='"+canvas_height+"'></canvas>";

var canvas = document.getElementById("Canvas_1");
var hypertext = document.getElementById("hypertext");
var ctx = canvas.getContext("2d");
var raf;

/*
var bubble = {
	create: function (color, dx, dy) {
        var newBubble = Object.create(this);
        x: 100,
		y: 100,
		vx: 5,
		vy: 2,
		radius:25,
		color: 'blue',
		draw: function() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fillStyle = this.color;
			ctx.fill();
		}
};

function draw() {
	ctx.clearRect(0,0,canvas_width, canvas_height);
	bubble.draw();
	bubble.x += bubble.vx;
	bubble.y += bubble.vy;
	if (bubble.y + bubble.vy > canvas_height - 115 || bubble.y + bubble.vy < 25) {
  bubble.vy = -bubble.vy;
}
if (bubble.x + bubble.vx > canvas_width - 25|| bubble.x + bubble.vx < 25) {
  bubble.vx = -bubble.vx;
}
	raf = window.requestAnimationFrame(draw);

}

hypertext.addEventListener('mousemove', function(e){
	raf = window.requestAnimationFrame(draw);
});

bubble.draw();

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("button");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/