//create sesame seeds class so can randomly call later
class sesameSeeds {
  constructor (_x, _y, _w, _h) {
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
  }
  
  displaySeeds() {
    //fill and ellipse for sesame seeds, will random 
    //place each time you load
    push()
    fill(255)
    noStroke()
    ellipse(this.x, this.y, 5, 7)
    pop()
  }
}