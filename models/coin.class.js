class Coin extends MovableObject {

    x = 120;
    y = 345;
    height = 100;
    width = 100;

    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',       
    ];


    constructor(){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES);

        this.animate();

        

    };


    animate(){    

        
        setInterval(() =>{
            this.playAnimation(this.IMAGES); 
        }, 100);       
    }; 


}