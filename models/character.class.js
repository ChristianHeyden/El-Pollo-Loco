class Character extends MovableObject{
  
    x = 120;
    y = 150;
    height = 300;
    width = 100;
    speed = 10;
    IMAGES_WALKING_Character = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING_Character);

        this.animate();

    };

    animate(){

        setInterval(() =>{
            if(this.world.keyboard.RIGHT){
                this.x += this.speed;
                this.otherDirection = false;
            } 
            
            if(this.world.keyboard.LEFT){
                this.x -= this.speed;
                this.otherDirection = true;
            } 
            this.world.camera_x = -this.x;
        }, 1000 / 60); 







        setInterval(() =>{

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                let i = this.currentImage % this.IMAGES_WALKING_Character.length; 
                let path = this.IMAGES_WALKING_Character[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } 
             
        }, 50);  

     
    }; 



    jump(){


    };


}