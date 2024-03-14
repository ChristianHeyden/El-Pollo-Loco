class Level {

    enemies;
    clouds;
    coins;
    backgroundobjects;
    level_end_x = 2200;

    constructor(enemies, clouds, coins, backgroundobjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundobjects = backgroundobjects;
    }
}