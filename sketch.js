let webcam;

function setup() {
    let canvas = createCanvas(100,200);

    webcam = createCapture(VIDEO, {flipped: true})
    webcam.hide() //hide html default one

    canvas.parent('you');
    // webcam.size(100,100)
}


function draw() {
  image(webcam, 0, 0, width, height);
  filter(THRESHOLD, .58); 



}