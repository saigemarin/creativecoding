//create a class for the menu checkboxes
class checkBoxes{
    constructor(_x, _y, _w, _h, _c){
      this.x = _x
      this.y = _y
      this.w = _w
      this.h = _h
      this.c = _c
    }
  
    display(){
      push()
      this.c = fill(232, 232, 232)
      rect(this.x, this.y, 21, 21)
      pop()
    }
//create function to change color to use with key pressed
   colorChange (){
      this.c = fill(33, 173, 9)
    }
  }

