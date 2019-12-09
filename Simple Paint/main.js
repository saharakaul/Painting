// Simple Paint

// Set  up Canvas and graphics context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 600;
cnv.height = 400;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
//Global Variable
let mouseIsPressed = false;
let mouseX, mouseY;
function loop() {
    //Update Variables
    
    
    

    
    
    //Draw a circle if mouse is pressed
    if (mouseIsPressed){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    requestAnimationFrame(loop);
}
//Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
function mousedownHandler(event) {
    mouseIsPressed = true;
    console.log(event);
}
function mouseupHandler() {
    mouseIsPressed = false;
}
function mousemoveHandler(event){
    let cnvRect= cnv.getBoundingClientRect();
    console.log(cnvRect)
    mouseX= event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    //console.log(event);
}