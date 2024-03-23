class Level {

    enemies;
    clouds;
    coins;
    bottles;
    backgroundobjects;
    level_end_x = 2200;

    constructor(enemies, clouds, coins, bottles, backgroundobjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundobjects = backgroundobjects;
    }
}