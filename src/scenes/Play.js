// play scene
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    // create()
    // create objects on play scene
    create() {
        // place tile sprite
        this.clouds = this.add.tileSprite(0, 0,480, 640, 'cloudBackg').setOrigin(0, 0);
        /*
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        */
        


        // add spaceships
        this.droppy = new Droppy(this, game.config.width/2, game.config.height/2, 'Droppy').setOrigin(0.5);

        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // flag to monitor game over state
        this.gameOver = false;

    }
    

    // update()
    // update object sprites throughout gameplay(can be thought of as constant update loop body)
    update() {

        if(!this.gameOver) {
            this.droppy.update()
        }


    }
}
