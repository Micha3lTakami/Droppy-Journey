// main for Droppy's Journey

// set screen size and starting scene
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Loader, Menu, Play]
  }
// main game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyLEFT, keyRIGHT;


