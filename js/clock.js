var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90
//call the function
drawClock();



//function used to create the face of the clock
function drawClock() {
drawFace(ctx, radius);

}

function drawFace(ctx,radius){
    var grad;
    ctx.beginPath();                //actual path begins
    ctx.arc(0,0, radius, 0, 2*Math.PI);      //draws the circle
    ctx.fillstyle = "White";                //gives the white background
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0, radius*1.05);  //creation of the gradent
    grad.addColorstop(0, '#333');
    grad.addColorstop(0.5, 'White');
    grad.addColorstop(1, '#333');     //colors represent the inner,middle and outer colors
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();               
    ctx.beginPath();            //draws the actual center of the clock
    ctx.arc(0,0, radius*0.1, 0, 2*Math.PI);
    ctx.fillstyle = '#333';
    ctx.fill();

}

















/*steps 
first create the object canvas
then create a 2d object for the canvas
calculate the clock radius using the canvas height this ensures that the clock works regardless of the canvas height
re map the drawing to the center of the canvas
reduce the clock radius by 90% */
