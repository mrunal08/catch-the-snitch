var snitchImage, harryImage, backdrop, harry, snitch
function preload(){
    snitchImage = loadImage("snitch_image.jpg")
    harryImage = loadImage("harry.png")
    backdrop = loadImage("backdrop.jpg")
}

function setup(){
    createCanvas(1200,400)
    harry = createSprite(200, 200, 50, 50)
    harry.addImage("harry",harryImage)
   
}

function draw(){
    background(backdrop)
    drawSprites()
}