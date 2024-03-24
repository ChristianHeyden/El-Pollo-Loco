class ThrowableObject extends MovableObject {

    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];



    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES); 
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
            this.playAnimation(this.IMAGES);
        }, 25)
    }


}