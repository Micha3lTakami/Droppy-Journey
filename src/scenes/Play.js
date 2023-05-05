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

        // add player character
        this.droppy = new Droppy(this, game.config.width/2, game.config.height/2, 'Droppy').setOrigin(0.5);
        this.obstacle1 = new Obstacle(this, game.config.width/2, game.config.height + 1000, 'CACA').setOrigin(0.5);
        this.obstacle1.setScale(3.0);
        this.obstacle2 = new Obstacle(this, game.config.width/2.5, game.config.height, 'Can').setOrigin(0.5);
        this.obstacle2.setScale(3.0);
        this.obstacle3 = new Obstacle(this, game.config.width/2.5, game.config.height, 'RottenFruit').setOrigin(0.5);
        this.obstacle3.setScale(3.0);
        this.obstacle4 = new Obstacle(this, game.config.width/2.5, game.config.height, 'shoe').setOrigin(0.5);
        this.obstacle4.setScale(3.0);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // Initialize timer and enemy number
        this.counter = 0;
        this.startTime = this.time.now; // Resets every 1000 milliseconds
        this.enemy = 0;
        

        // flag to monitor game over state
        this.gameOver = false;

    }
    

    update() {
        this.clouds.tilePositionY += 8;
        if(!this.gameOver) {
            this.droppy.update();
            this.obstacle1.update();
            this.obstacle2.update();
            this.obstacle3.update();
            this.obstacle4.update();
        }
    
        // Delay timer for enemy spawn
        let nowTime = this.time.now
        if(nowTime > (this.startTime + 1000)) {
            this.counter += 1; // Increments by a second
            this.startTime = nowTime
    
            // Respawn obstacle when it goes off the top of the screen
            if (this.obstacle1.body === null || this.obstacle1.body === undefined) {
                this.obstacle1 = new Obstacle(this, Phaser.Math.Between(50, game.config.width - 50), game.config.height + 1000, 'CACA').setOrigin(0.5);
                this.obstacle1.setScale(3.0);
            }
            if (this.obstacle2.body === null || this.obstacle2.body === undefined) {
                this.obstacle2 = new Obstacle(this, Phaser.Math.Between(50, game.config.width - 50), game.config.height + 1000, 'Can').setOrigin(0.5);
                this.obstacle2.setScale(3.0);
            }
            if (this.obstacle3.body === null || this.obstacle3.body === undefined) {
                this.obstacle3 = new Obstacle(this, Phaser.Math.Between(50, game.config.width - 50), game.config.height + 1000, 'RottenFruit').setOrigin(0.5);
                this.obstacle3.setScale(3.0);
            }
            if (this.obstacle4.body === null || this.obstacle4.body === undefined) {
                this.obstacle4 = new Obstacle(this, Phaser.Math.Between(50, game.config.width - 50), game.config.height + 1000, 'shoe').setOrigin(0.5);
                this.obstacle4.setScale(3.0);
            }
        }
    }

    // handles droppy death state
    droppyDie(droppy){
        let death  = this.add.sprite(game.config.width/2, game.config.height/2, 'droppyDeath').setOrigin(0,0);
        death.anims.play('droppyDeath');
        death.on('animationcomplete',() => {
            droppy.destroy();
            death.destroy();
            this.gameOver = true;
        })
    }
}