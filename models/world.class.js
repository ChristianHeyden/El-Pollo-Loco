class World{
    character = new Character(); 
    // bottle = new Bottle();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinStatusBar = new CoinStatusbar();
    collectedCoins = [];
    bottleStatusBar = new BottleStatusBar();
    collectedBottles = [];
    throwableObjects = [];
    endbossStatusBar = new EndbossStatusBar();
    
    


    constructor(canvas, keyboard){
        this.ctx  = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        
    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectCoins();
            this.collectBottles();
            this.checkBottleCollisions();
        }, 100)
    }

    checkThrowObjects(){
        if (this.keyboard.D && (this.collectedBottles.length > 0)) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);           
            this.collectedBottles.splice(0, 1); 
            this.checkBottleStatusbar(); 
         
        }
    }


    collectCoins(){
        this.level.coins.forEach((coin, indexCoins) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.level.coins.splice(indexCoins, 1);
                let coinPercentage  = (this.collectedCoins.length / 5) * 100;
                // console.log('coinpercentage', coinPercentage); 
                this.coinStatusBar.setPercentage(coinPercentage);
            }
        });
    }

    collectBottles(){
        this.level.bottles.forEach((bottle, indexBottle) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle);
                this.level.bottles.splice(indexBottle, 1);
                this.checkBottleStatusbar();
            }
        });
    }


    checkBottleCollisions(){
        this.throwableObjects.forEach((bottle, indexBottle) => {
			this.level.enemies.forEach((enemy, indexEnemy) => {
				if (this.checkBottleHitsGround(indexBottle)) {
				// 	this.setCollidingTime();
				 	this.throwableObjects[indexBottle].splashAnimation();
				// 	this.brockenBottleSplice();
				 }
				if (this.checkBottleHitsEnemy(enemy, indexBottle)) {
                    console.log('getroffen !!!')
					// this.setCollidingTime();
					this.level.enemies[indexEnemy].hit();
					this.throwableObjects[indexBottle].splashAnimation();
                    this.endbossStatusBar.setPercentage(this.level.enemies[3].energy);
					// this.brockenBottleSplice();
				}
			});
		});
	}


    checkBottleHitsEnemy(enemy, indexBottle) {
		return this.throwableObjects[indexBottle].isColliding(enemy);
	}

    checkBottleHitsGround(indexBottle) {
		return this.throwableObjects[indexBottle].y > 300 && this.throwableObjects[indexBottle].y < 370;
	}

    checkBottleStatusbar(){        
        let bottlePercentage  = (this.collectedBottles.length / 5) * 100;
        // console.log('checkBottleStatusbar', bottlePercentage); 
        this.bottleStatusBar.setPercentage(bottlePercentage);
    }


    checkCollisions(){
        this.level.enemies.forEach((enemy, indexEnemy) => {
            if (this.checkCharacterAboveGround(enemy, indexEnemy)) {
                this.character.speedY = 10;
                this.level.enemies[indexEnemy].energy = 0;
                
            } else if (this.checkEnemyEnergy(enemy, indexEnemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    checkCharacterAboveGround(enemy, indexEnemy) {
        return (
            this.character.isAboveGround() &&
            this.character.isColliding(enemy) &&
            this.level.enemies[indexEnemy].energy > 1
        )
    }

    checkEnemyEnergy(enemy, indexEnemy){
        return this.character.isColliding(enemy) && this.level.enemies[indexEnemy].energy > 0

    }




    headJumpHit(indexEnemy) {
		if (this.level.enemies[indexEnemy].energy > 1) {
			this.character.headJump();
		}
	}

    
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);        
        this.addObjectsToMap(this.level.backgroundobjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinStatusBar);
        this.addToMap(this.bottleStatusBar);
        this.addToMap(this.endbossStatusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this
        requestAnimationFrame(function(){
            self.draw()
        });
    }


    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);       
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        


        if (mo.otherDirection) {
            this.flipImageBack(mo);            
        }
    
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;  
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();

    }    


}