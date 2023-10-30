class tomatoSlice {
    constructor(_w){
        this.w = _w
    }

    display(){
        push()
        noStroke()
        fill(237, 44, 14)
        rectMode(CENTER)
        rect(200, 345, this.w, 15, 
            5, 5, 10, 10)
        pop()
    }
}