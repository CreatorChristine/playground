var r = 0 //red value
var g = 265 / 2 // green value
var b = 0 //blue value

function setup() {
    createCanvas(500, 300)
}

function draw() {
    //background
    r = map(mouseX, 0, 500, 0, 255);
    g = map(mouseY, 0, 500, 0, 255);
    b = map(mouseY, 0, 300, 0, 255);
    background(r, g, b); //make diagonal gradient
    fill(120, 50, 120);
    ellipse(mouseX, mouseY, 64, 64);
}