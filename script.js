//declare burger bun var
let burgerBun1

//declare sesame seeds var
let sesameSeeds1
let sesameSeeds2
let sesameSeeds3
let sesameSeeds4
let sesameSeeds5
let sesameSeeds6
let sesameSeeds7
let sesameSeeds8

//declare image var so I can add in the store logo
let img 

//declare check boxes
let checkBoxes1
let checkBoxes2
let checkBoxes3
let checkBoxes4
let checkBoxes5
let checkBoxes6
let checkBoxes7

//obj for burger bun checkbox 
// (to be used in the clicking function)
let myCheckBox1 = {
  x: 530,
  y: 233,
  width: 21,
  height: 21
}

//declare pickles var
let pickles1

//declare tomato var
let tomatoSlice1

//declare lettuce var
let lettuceSlice1

//declare cheese var
let cheeseSlice1

//declare burger patty var 
let burgerPatty1

//declare instance for scribble library
let scribble

//function to pre load image so can use later, using
//format from p5js reference example format
function preload() {
  img = loadImage('images/burgerlogo.jpg');
}


//setup function with canvas
function setup() {
  createCanvas(600, 600);

  //setup randomly sized burgerbun
  burgerBun1 = new burgerBun (
      200, 
      280, 
      random(200, 260),
      random(200, 225), 
      PI, 2*PI, CHORD);

  //setup randomly placed sesameseeds
  sesameSeeds1 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds2 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds3 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds4 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds5 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds6 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds7 = new sesameSeeds (random(150,255),
  random(190, 225));
  sesameSeeds8 = new sesameSeeds (random(150,255),
  random(190, 225));

  //setup menu checkboxes
  checkBoxes1 = new checkBoxes (530, 233)
  checkBoxes2 = new checkBoxes (530, 283)
  checkBoxes3 = new checkBoxes (530, 333)
  checkBoxes4 = new checkBoxes (530, 383)
  checkBoxes5 = new checkBoxes (530, 433)
  checkBoxes6 = new checkBoxes (530, 483)

  //setup pickles
  pickles1 = new pickles 
    (random(40, 60))

  //setup tomato slice
  tomatoSlice1 = new tomatoSlice 
    (random(210, 230))

  //setup lettuce slice
  lettuceSlice1 = new lettuceSlice 
    (random(200, 260))

  //setup cheese slice
  cheeseSlice1 = new cheeseSlice 
    (random(200, 260))

  //setup burger patty
  burgerPatty1 = new burgerPatty 
    (random(210, 250))

//setup scribble for scribble box
  scribble = new Scribble ()
}

//draw function with background and different elements
function draw() {
  background(151, 210, 252);
  
  //call burgerbun display function
  burgerBun1.display()
  
  //call sesame seeds display function
  sesameSeeds1.displaySeeds()
  sesameSeeds2.displaySeeds()
  sesameSeeds3.displaySeeds()
  sesameSeeds4.displaySeeds()
  sesameSeeds5.displaySeeds()
  sesameSeeds6.displaySeeds()
  sesameSeeds7.displaySeeds()
  sesameSeeds8.displaySeeds()

  //call burger patty
  burgerPatty1.display()

  //call tomato
  tomatoSlice1.display()

  //call cheese slice
  cheeseSlice1.display()

  //call lettuce
  lettuceSlice1.display()

  //call pickles
  pickles1.display()

  //create white 'menu' rectangle background
  push()
  // noStroke()
  fill(255)
  rect(350, 150, 225, 400, 5, 5, 5, 5)
  pop()

  //call image from image load to place store 
  //logo at top of screen, using example structure 
  //from P5js reference for image loading
  image(img, 100, 10, 400, 100, 0, 0, 
    img.width, img.height, CONTAIN)

  //draw text for menu
  push()
  textFont('Impact')
  textSize(30)
  text('Menu', 430, 195)
  pop()

  //draw text for menu subtitle
  push()
  textFont('Arial')
  textSize(10)
  text('Type key below to order!', 400, 210)
  pop()

  //draw text for menu items
  push()
  textFont('Arial')
  textSize(18)
  text('A. Burger Bun 🍞', 380, 250)
  text('B. Pickles 🥒', 380, 300)
  text('C. Tomatoes 🍅', 380, 350)
  text('D. Lettuce 🥬', 380, 400)
  text('E. Cheese 🧀', 380, 450)
  text('F. Burger 🥩', 380, 500)
  pop()

  //call checkboxes display
  checkBoxes1.display()
  checkBoxes2.display()
  checkBoxes3.display()
  checkBoxes4.display()
  checkBoxes5.display()
  checkBoxes6.display()

  //add in scribble outline for menu
  push()
  strokeWeight(3)
  stroke(146, 214, 43)
  scribble.scribbleRect(462, 350, 205, 385);
  randomSeed(10)
  pop()

}

//attempting keytyped and also tried key pressed 
//functions to get specific keys to bring up
//ingredients. Used p5js reference guides.
function keyTyped(){
  if (key === 'a') {
      console.log ('hello')

      push()
      burgerBun1.display ()
      pop()

      push()
      checkBoxes1.colorChange ()
      pop()
  } else {}
}

