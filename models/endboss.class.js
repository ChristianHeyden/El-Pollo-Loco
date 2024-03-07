class Endboss extends MovableObject{


    
    y = 370;
    height = 70;
    width = 70;
    speed = 0.25;
    IMAGES_WALKING_Endboss = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',   
        'img/4_enemie_boss_chicken/2_alert/G12.png'    
    ];
    

    constructor(){
        super().loadImage(this.IMAGES_WALKING_Endboss[0]);
        this.loadImages(this.IMAGES_WALKING_Endboss);
        x = 700;

        this.animate();

        this.x = 200 + Math.random() * 500;
        this.speed = 0.25 + Math.random() *0.5;

    };


    animate(){    
        this.moveLeft();
        
        setInterval(() =>{
            let i = this.currentImage % this.IMAGES_WALKING_Endboss.length; 
            let path = this.IMAGES_WALKING_Endboss[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);       
    }; 




}