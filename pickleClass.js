class pickles {
    constructor(_w){
        this.w = _w
    }

    display(){
        push()
        strokeWeight(3)
        stroke(53, 84, 3)
        //left pickle
        fill(130, 201, 6)
        ellipse(160, 315, this.w, 10)
        //center pickle
        fill(128, 189, 25)
        ellipse(200, 305, this.w, 12)
        //right pickle
        fill(172, 224, 81)
        ellipse(240, 310, this.w, 9)
        pop()
    }
}