var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90
//call the function
setInterval(drawClock, 1000);



//function used to creates the face of the clock
function drawClock() {
drawFace(ctx, radius);
drawNumbers(ctx, radius);
drawTime(ctx, radius);
}

function drawFace(ctx,radius){
    var grad;
    ctx.beginPath();                //actual path begins
    ctx.arc(0,0, radius, 0, 2*Math.PI);      //draws the circle
    ctx.fillstyle = "black";                //gives the white background
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0, radius*1.05);  //creation of the gradent
    grad.addColorstop(0, '#333');
    grad.addColorstop(0.5, 'black');
    grad.addColorstop(1, '#333');     //colors represent the inner,middle and outer colors
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();               
    ctx.beginPath();            //draws the actual center of the clock
    ctx.arc(0,0, radius*0.1, 0, 2*Math.PI);
    ctx.fillstyle = '#333';
    ctx.fill();

}
function drawNumbers(){
        var ang;
        var num;
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        for(num = 1; num< 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
        
        }
    }

    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
         hour = hour%12;
         hour= (hour*Math.PI/6)+
         (minute*Math.PI/(6*60))+
         (second*Math.PI/(360*60));
         dawHand(ctx, hour,radius*0.5, radius*0.07);
         //minute
         minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
         dawHand(ctx, minute,radius*0.8, radius*0.07);
         //seconds
         second=(second*Math.PI/30);
         dawHand(ctx, second,radius*0.9, radius*0.02);

    }

    function drawHand (ctx, pos, length, width){
        ctx.beginPath();
        ctx.lineWidth= width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(- pos);

    }





















/*steps 
first create the object canvas
then create a 2d object for the canvas
calculate the clock radius using the canvas height this ensures that the clock works regardless of the canvas height
re map the drawing to the center of the canvas
reduce the clock radius by 90% */
