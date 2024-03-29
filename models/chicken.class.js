class Chicken extends MovableObject{

    x = 120;
    y = 345;
    height = 70;
    width = 70;
    energy = 5;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'       
    ];

    IMAGES_DEAD_CHICKEN = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'     
    ];
    

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD_CHICKEN);

        this.animate();

        this.x = 800 + Math.random() * 500;
        this.speed = 0.25 + Math.random() *0.5;

    };


    animate(){ 
        setInterval( () =>{
            if (!this.isDead()) {
                // this.moveLeft();
            } 
            // else console.log('Chicken dead sound');
        }, 1000 / 60);   
        
        
        setInterval(() =>{
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD_CHICKEN);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);       
    }; 



}




// Bessere Formel zur Kollisionsberechnung (Genauer)
// isColliding (obj) {
//     return  (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) && 
//             (this.Y + this.offsetY + this.height) >= obj.Y &&
//             (this.Y + this.offsetY) <= (obj.Y + obj.height) && 
//             obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

// }