//create burger bun class so that can 'bake' randomly 
//sized burger buns with sesame seeds
class burgerBun {
  
    //constructor for arc bun, which hopefully will be 
    //variable later on using random 
      constructor(_x, _y, _w, _h, _start, _stop, _mode) {
        this.x = _x
        this.y = _y
        this.w = _w
        this.h = _h
        this.start = _start
        this.stop = _stop
        this.mode = _mode
      }
    //display function to draw the bun and sesame seeds
      display() {
        push()
        noStroke()
        //fill and arc for top bun
        fill(217, 156, 82)
        arc(this.x, this.y, this.w, this.h, 
            this.start, this.stop, this.mode)
       
        //rounded rect for bottom bun, with random width 
        // aligned with random width for top bun
        rectMode(CENTER)
        rect(200, 500, this.w, 50, 5, 5, 40, 40)
        pop()
      }
  }