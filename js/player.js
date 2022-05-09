class Player {
    constructor (x, y, width, height){
        this.x = x;
        this.y = y;
        this.width =width;
        this. height = height;
    }

    moveRight (){
        this.x += 25;
        if(this.x + this.width > 1000){
            this.x = 990;
        } 
    }
    moveLeft () {
        this.x -= 25;
        if(this.x + this.width < 0){
            this.x = 0;
        } 
    }

}

class Circle {
    constructor (x, y, size, dx, dy){
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy; 
    }
}

class Brick {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
    }
}
