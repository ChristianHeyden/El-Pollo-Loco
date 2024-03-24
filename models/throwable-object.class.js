class ThrowableObject extends MovableObject {

    IMAGES_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    BOTTLE_SPLASH = [
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
		'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
	];



    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATION); 
        this.loadImages(this.BOTTLE_SPLASH); 
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
            this.playAnimation(this.IMAGES_ROTATION);
        }, 25)
    }



    splashAnimation() {
        console.log('splashAnimation')
        setInterval(() => {
			this.playAnimation(this.BOTTLE_SPLASH);
		}, 5);

        
		// this.splashAnimationIntervall = setInterval(() => {
		// 	this.playAnimation(this.BOTTLE_SPLASH);
		// }, 5);
		// allIntervals.push(this.splashAnimationIntervall);
	}


}