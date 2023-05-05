// main for Droppy's Journey

// set screen size and starting scene
let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [Loader, Menu, Play],
    physics: {
        default: 'arcade',
        arcade: {
            gravity : {y: 300} 
        }
    }
}
// main game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyENTER, keyLEFT, keyRIGHT, keyUP, keyDOWN;


