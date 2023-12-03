//create variables to use with mouseclicked color changes for the facial features
let serial
let portName = "/dev/tty.usbmodem145201"

// let randomEarColor = 0
// let randomNoseColor = 0
// let randomEyeColor = 0
// let randomBlushColor = 0
// let randomLipColor = 0

let activeSensor = ""
let potValue = 0
let photoValue = 0
let buttonValue = 0

function setup() {
  createCanvas(500, 500);

  serial = new p5.SerialPort()

  serial.onList(gotList)
  serial.list()

  serial.onOpen(gotOpen)
  serial.openPort(portName)

  serial.onData(gotData)
}

function draw() {
  background(227, 252, 227);
  
  //background hair
  fill(64, 48, 51)
  noStroke()
  arc(250, 395, 375, 605, PI, PI*2)
  
  //left ear
  fill(photoValue, 125, 90)
  noStroke()
  ellipse(115, 275, 35, 60)
  
  //right ear
  fill(photoValue, 125, 90)
  noStroke()
  ellipse(385, 275, 35, 60)
  
  //head
  fill(235, 179, 161)
  noStroke()
  ellipse(250, 275, 265, 300)
  
  //left earring
  fill(232, 205, 70)
  noStroke()
  rect(108, 295, potValue/4, potValue/3)
  
  //right earring
  fill(232, 205, 70)
  noStroke()
  rect(382, 295, potValue/4, potValue/3)
  
  //left bang
  fill(64, 48, 51)
  noStroke()
  quad(248, 110, 120, 177, 120, 250, 248, 180)
  
  //right bang
  fill(64, 48, 51)
  noStroke()
  quad(252, 110, 380, 177, 380, 250, 253, 180);
  
  //right eye
  fill(255)
  noStroke()
  ellipse(310, 270, 50, 25)
  
  //left eye
  fill(255)
  noStroke()
  ellipse(195, 270, 50, 25)
  
  //left pupil
  fill(photoValue, 0, 186)
  noStroke()
  ellipse(195, 270, 24, 24)
  
  //right pupil
  fill(photoValue, 0, 186)
  noStroke()
  ellipse(310, 270, 24, 24)
  
  //left blush
  fill(224, photoValue, 125)
  noStroke()
  ellipse(170, 300, 60, 35)
  
  //right blush
  fill(224, photoValue, 125)
  noStroke()
  ellipse(330, 300, 60, 35)
  
  //nose
  fill(photoValue, 125, 90)
  noStroke()
  triangle(250, 280, 270, 320, 230, 320)
  
  //nose ring
  fill(232, 205, 70)
  noStroke()
  ellipse(240, 313, 4, 4)
  
  //bottom lip
  fill(photoValue, 72, 125)
  noStroke()
  arc(250, 360, 65, 30, 0, PI)
  
  //left upper lip
  fill(photoValue, 72, 125)
  noStroke()
  ellipse(237, 360, 37, 15)
  
  //right upper lip
  fill(photoValue, 72, 125)
  noStroke()
  ellipse(263, 360, 37, 15)
  
  //chin
  fill(149, 223, 245)
  noStroke()
  ellipse(250, 415, 60, 35)
}

function gotList(ports) {
    for (let i = 0; i < ports.length; i++) {
      console.log(ports[i])
    }
  }
  
  function gotOpen() {
    console.log("Port Open!")
  }
  
  function gotData() {
    let newData = serial.readLine()
    if (newData.length <= 0) return;
    // console.log(newData)
  
    if (newData === "potentiometer" ||
      newData === "photocell") {
      activeSensor = newData
    } else {
      if (activeSensor === "potentiometer") {
        potValue = newData / 2
      }
      if (activeSensor === "photocell") {
        photoValue = newData / 4
      }
    }
  }

// //IF the mouse is clicked, the ears change color randomly
// function mouseClicked(){
//   //ear color change
//   push()
//   if (randomEarColor == 0){
//     randomEarColor = color(random(255), random(255), random(255));
//   }else{
//     randomEarColor = color(random(255), random(255), random(255));
//    } 
//   pop()
  
//   //blush color change
//   push()
//   if (randomBlushColor == 0){
//     randomBlushColor = color(random(255), random(255), random(255));
//   }else{
//     randomBlushColor = color(random(255), random(255), random(255));
//    }
//   pop()
  
//   //lip color change
//   push()
//   if (randomLipColor == 0){
//     randomLipColor = color(random(255), random(255), random(255));
//   }else{
//     randomLipColor = color(random(255), random(255), random(255));
//    } 
//   pop()
  
//   //nose color change
//   push()
//   if (randomNoseColor == 0){
//     randomNoseColor = color(random(255), random(255), random(255));
//   }else{
//     randomNoseColor = color(random(255), random(255), random(255));
//    }
//   pop()
  
  
//   //eye color change
//   push()
//   if (randomEyeColor == 0){
//     randomEyeColor = color(random(255), random(255), random(255));
//   }else{
//     randomEyeColor = color(random(255), random(255), random(255));
//    }
//   pop()
//  }


