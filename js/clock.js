var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90
//call the function
drawClock();



//function used to create the face of the clock
function drawClock() {
ctx.arc(0,0,radius,0,2*Math.PI);
ctx.fillstyle = "White";
ctx.fill();

}

/*steps 
first create the object canvas
then create a 2d object for the canvas
calculate the clock radius using the canvas height this ensures that the clock works regardless of the canvas height
re map the drawing to the center of the canvas
reduce the clock radius by 90% */
