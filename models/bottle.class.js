class Bottle extends MovableObject {

    x = 120;
    y = 330;
    height = 100;
    width = 100;
    
    IMAGES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',      
    ];

   




    constructor(){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES);

        // this.y =  150 + Math.random() * 100;
        this.x = Math.floor(Math.random() * 1801);
              

        

    };


   

}