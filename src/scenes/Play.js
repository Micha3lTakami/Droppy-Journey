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
    

    // update()
    // update object sprites throughout gameplay(can be thought of as constant update loop body)
    update() {
        this.clouds.tilePositionY += 8;
        if(!this.gameOver) {
            this.droppy.update();
        }

        // Delay timer for enemy spawn
        let nowTime = this.time.now
        if(nowTime > (this.startTime + 1000)) {
            this.counter += 1; // Increments by a second
            this.startTime = nowTime
        }

        // Spawn timer and enemy sprite generator

        this.enemy = Phaser.Math.Between(0, 3)

        if(this.counter == Phaser.Math.Between(2, 4)) {
            if(this.enemy == 0) {
                this.obstacle1 = new Obstacle(this, game.config.width/Phaser.Math.FloatBetween(0.00, 10.00), game.config.height, 'CACA').setOrigin(0.5, 0.0);
            }
            else if(this.enemy == 1) {
                this.obstacle2 = new Obstacle(this, game.config.width/Phaser.Math.FloatBetween(0.00, 10.00), game.config.height, 'Can').setOrigin(0.5, 0.0);
            }
            else if(this.enemy == 2) {
                this.obstacle3 = new Obstacle(this, game.config.width/Phaser.Math.FloatBetween(0.00, 10.00), game.config.height, 'RottenFruit').setOrigin(0.5, 0.0);
            }
            else if(this.enemy == 3) {
                this.obstacle4 = new Obstacle(this, game.config.width/Phaser.Math.FloatBetween(0.00, 10.00), game.config.height, 'shoe').setOrigin(0.5, 0.0);
            }
            this.counter = 0;
        }
    }

    // handles droppy death state
    droppyDie(droppy){
        let death  = this.add.sprite(game.config.width/2, game.config.height/2, 'droppyDeath').setOrigin(0,0);
        death.anims.play('droppyDeath');
        death.on('animationcomplete',() => {
            droppy.destroy();
            death.destroy();
        })
    }

    // handles collision between droppy and obstacle
    handleObstacleCollision(droppy, obstacle) {
        // play death animation
        let death = this.add.sprite(droppy.x, droppy.y, 'droppyDeath').setOrigin(0, 0);
        death.anims.play('droppyDeath');
    
        // destroy droppy and obstacle
        droppy.destroy();
        obstacle.destroy();
 
    }
}
