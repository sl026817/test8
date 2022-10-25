let slider;
var colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
    createButton (50, 50)
  
  button = createButton('reset sketch');
  button.position(25, 105);
  button.mousePressed(resetSketch);
  
  
   slider = createSlider(5, 360, 12);
  slider.position(20,20);
  slider .style ('width', '80px');
  slider2 = createSlider(5, 150, 5); //first two numbers are range, third number is starting value 
  slider2.position(20,40);
  slider2.style("width", "80px");
  colorPicker = createColorPicker("#BBE6E4");
  colorPicker.position(20, 65);
  colorPicker.style("width", "100px");


  background(255);
   textSize (12)
   fill(000)
  text('Pen Size', 110, 17);
  text('Eraser Size (press any letter to erase)', 110, 35)
text ('Right Click to Save Artwork (you can erase this text)', 20, 130)

}

function draw() {
  
    let val = slider.value();
let val2 = slider2.value();
  
  stroke(0);
fill (colorPicker.color())
  if (mouseIsPressed === true) {
    text("seal", mouseX, mouseY);
    textSize (val)
  }
  
   if (keyIsPressed === true) {    //eraser tool - hold any key and drag mouse around to use eraser
        noStroke();
        fill(102);
        ellipse(mouseX,mouseY,val2, val2)
        x=mouseY;
        y=mouseX;
  }
}


function resetSketch() {
   background(255)
textSize (12)
   fill(000)
  text('Pen Size', 110, 17);
  text('Eraser Size (press any letter to erase)', 110, 35)
text ('Right Click to Save Artwork (you can erase this text)', 20, 130)
}

function windowResized() {
  clear();
  resizeCanvas(windowWidth, windowHeight);
  
}
