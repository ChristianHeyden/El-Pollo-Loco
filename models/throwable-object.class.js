class ThrowableObject extends MovableObject {


    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.trow(x, y);
    }
    
    trow(){
       
        this.speed = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;

        }, 25)
    }








}