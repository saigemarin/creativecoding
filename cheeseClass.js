class cheeseSlice {
    constructor(_w){
        this.w = _w
    }

    display(){
        push()
        noStroke()
        fill(255, 212, 23)
        rectMode(CENTER)
        rect(200, 410, this.w, 10)
        pop()
    }
}