var canvas_width = screen.availWidth;
var canvas_height = screen.availHeight;
//The 30 and 90 above are arbitrary figures to allow for other DIVS on the page
var canvas_div = window.document.getElementById("Canvas_Container");
canvas_div.innerHTML = "<canvas id='Canvas_1' width='" + canvas_width + "' height='" + canvas_height + "'></canvas>";

var canvas = document.getElementById("Canvas_1");
var context = canvas.getContext("2d");

var init = function() {
    for (var i = 0; i <= 875; i++) {
        requestAnimationFrame(froth);
    }
}

function froth() {
    var foam_x = Math.random() * canvas_width
    var foam_y = Math.random() * canvas_height
    var foam = {
        "x": foam_x,
        "y": foam_y,
        "radius": 15,
        "fill": "#5bc0de"
    }
    if (canvas.getContext) {
        context.beginPath();
        context.arc(foam.x, foam.y, foam.radius, 0, 2 * Math.PI);
        context.fillStyle = foam.fill;
        context.fill();
    }
}
