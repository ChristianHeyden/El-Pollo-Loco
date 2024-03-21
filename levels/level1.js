// const level1 = new Level(

//     [
//     new Chicken(),
//     new Chicken(),
//     new Chicken(),
//     new Endboss()
//     ],
//     [
//     new Cloud(),
//     ],
//     [
//     new Coin()
//     ],
//     [
//     new BackgroundObject(`img/5_background/layers/air.png`, -719),
//     new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, -719),
//     new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, -719),
//     new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, -719),
//     new BackgroundObject(`img/5_background/layers/air.png`, 0),
//     new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 0),
//     new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 0),
//     new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 0),
//     new BackgroundObject(`img/5_background/layers/air.png`, 719),
//     new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719),
//     new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719),
//     new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719),
//     new BackgroundObject(`img/5_background/layers/air.png`, 719*2),
//     new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 719*2),
//     new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 719*2),
//     new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 719*2),
//     new BackgroundObject(`img/5_background/layers/air.png`, 719*3),
//     new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719*3),
//     new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719*3),
//     new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719*3)        
//     ], 
    


// );

let level1;


function initLevel1 (){
    level1 = new Level (
        setEnemies(),
        setCloud(),
        setCoin(),
        setBackground(),
        
        
    )
    
}


function setEnemies(){
    return [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ]
}

function setCloud(){
    return [
        new Cloud()
    ]
}


function setCoin(){
    return [
        new Coin(),
        new Coin() ,
        new Coin(),
        new Coin(),
        new Coin()
    ]
}

function setBackground(){
    return [
        new BackgroundObject(`img/5_background/layers/air.png`, -719),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, -719),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, -719),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, -719),
        new BackgroundObject(`img/5_background/layers/air.png`, 0),
        new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 0),
        new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 0),
        new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 0),
        new BackgroundObject(`img/5_background/layers/air.png`, 719),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719),
        new BackgroundObject(`img/5_background/layers/air.png`, 719*2),
        new BackgroundObject(`img/5_background/layers/3_third_layer/1.png`, 719*2),
        new BackgroundObject(`img/5_background/layers/2_second_layer/1.png`, 719*2),
        new BackgroundObject(`img/5_background/layers/1_first_layer/1.png`, 719*2),
        new BackgroundObject(`img/5_background/layers/air.png`, 719*3),
        new BackgroundObject(`img/5_background/layers/3_third_layer/2.png`, 719*3),
        new BackgroundObject(`img/5_background/layers/2_second_layer/2.png`, 719*3),
        new BackgroundObject(`img/5_background/layers/1_first_layer/2.png`, 719*3) 
    ]
}



