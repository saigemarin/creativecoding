class burgerPatty {
    constructor(_w) {
        this.w = _w
    }

    display() {
        push()
        noStroke()
        fill(71, 52, 21)
        rectMode(CENTER)
        rect(200, 450, this.w, 
            30, 10, 10, 10, 10)
        pop()
    }
}