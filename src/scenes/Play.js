// play scene
class Play2 extends Phaser.Scene {
    constructor() {
        super("playScene2");
        this.p1HighScore = 0; // initalize high score variable
        this.p1HighScore = 0; // initalize high score variable
        this.logo = null;
        this.multp1Rocket = null;
        this.multp2Rocket = null;
        this.p1Rocket = null;
        this.p2Score = 0;
    }

    // create()
    // create objects on play scene
    create() {
        /*// place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        */
        


        // add spaceships
        this.alien01 = new Alienship(this, game.config.width - 65, borderUISize*3.4, 'alien', 0, 50).setOrigin(0,0);

        
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
            this.alien01.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
        }


    }
