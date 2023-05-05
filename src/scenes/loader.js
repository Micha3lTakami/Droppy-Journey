// anything needed to pre load goes here
class Loader extends Phaser.Scene {
    constructor() {
        super("loaderScene");
    }
    
    // preload()
    // pre-load game assets
    preload() {

        // add text object for percentage loaded
        let progressText = this.add.text(game.config.width/2, game.config.height/2, '0%', { fontFamily: 'Courier', fontSize: '48px', fill: '#fff' }).setOrigin(0.5);

        // update the loading percentage as assets are loaded
        this.load.on('progress', function (value) {
            let percentage = Math.floor(value * 100) + '%';
            progressText.setText(percentage); 
        });

        // load assets
        //this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.image('CACA', './assets/CACA.png');
        this.load.image('Can', './assets/can.png');
        this.load.image('Droppy', './assets/droppy.png');
        this.load.image('RottenFruit', './assets/rotten-apple-tomato.png')
        this.load.image('shoe', './assets/shoe.png');
        this.load.image('cloudBackg', './assets/sky.png');

        // change scene upon completion
        this.load.on('complete', function () {
            this.scene.start('menuScene');
        }, this);

    }
}