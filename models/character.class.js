class Character extends MovableObject{
  
    x = 120;
    y = 150;
    height = 300;
    width = 100;
    IMAGES_WALKING_Character = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING_Character);

        this.animate();

    };

    animate(){
        setInterval(() =>{
            let i = this.currentImage % this.IMAGES_WALKING_Character.length; 
            let path = this.IMAGES_WALKING_Character[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);       
    }; 



    jump(){


    };


}