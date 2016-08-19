var canvas_width = screen.availWidth;
var canvas_height = screen.availHeight;
//The 30 and 90 above are arbitrary figures to allow for other DIVS on the page
var canvas_div = window.document.getElementById("Canvas_Container");
canvas_div.innerHTML = "<canvas id='Canvas_1' width='"+canvas_width+"' height='"+canvas_height+"'></canvas>";

/*

var hypertext = document.getElementById("hypertext");

*/

var canvas = document.getElementById("Canvas_1");
var ctx = canvas.getContext("2d");
var raf;

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

function init() {
    var canvas = document.getElementById("Canvas_1");
    if (canvas.getContext) {
          var context = canvas.getContext("2d");
	      ctx.beginPath();
	      ctx.arc(95,50,40,0,2*Math.PI);
	      ctx.stroke();
	      ctx.fillStyle = "#5bc0de";
	      ctx.fill();
    }
}
