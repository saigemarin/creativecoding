class lettuceSlice {
    constructor(_w){
        this.w = _w
    }

    display(){
        push()
        noStroke()
        fill(28, 224, 7)
        rectMode(CENTER)
        rect(200, 380, this.w, 15, 
            20, 20, 20, 20)
        pop()
    }
}