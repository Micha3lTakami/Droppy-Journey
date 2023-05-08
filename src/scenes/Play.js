// play scene
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

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
    
        // create a group for the obstacles
        this.obstacles = this.physics.add.group();
        this.physics.world.setBounds(0, 0, game.config.width, game.config.height);
        this.physics.add.collider(this.obstacles, this.handleObstacleWorldCollision, null, this);
    
        this.obstacleTimer = this.time.addEvent({
            delay: 5000,
            callback: this.spawnObstacle,
            callbackScope: this,
            loop: true,
        });
    
        // flag to monitor game over state
        this.gameOver = false;
    
        console.log("Play scene created boss!");
    }
    
    handleObstacleWorldCollision(obstacle) {
        obstacle.setVelocityY(obstacle.body.velocity.y * -1);
    }
    
    spawnObstacle() {
        const obstacleKeys = ['CACA', 'Can', 'Droppy', 'RottenFruit', 'shoe'];
        const obstacleKey = Phaser.Math.RND.pick(obstacleKeys);
        const x = Phaser.Math.Between(5, this.game.config.width-5);
        const obstacle = new Obstacle(this, x, 640, 200, obstacleKey, this.obstacles);
        this.game.debug.body(obstacle, 'red', true);
        this.game.debug.spriteBounds(obstacle, 'pink', true);
        obstacle.body.setSize(1, .5);  // test set body size to match the width and height
        obstacle.body.setOffset(-(.5), -(.25)); // set the offset to center the body on the sprite
        obstacle.body.onCollide = true;     // must be set for collision event to work
        obstacle.body.onWorldBounds = true;
        obstacle.setCollideWorldBounds(true);
        this.obstacles.add(obstacle);
        console.log("Obstacle spawned boss!");
    }
    
    update() {
        this.clouds.tilePositionY += 8;
        if(!this.gameOver) {
            this.droppy.update();
        }
        
        // update obstacles
        this.obstacles.children.iterate((obstacle) => {
            obstacle.update();
        });
        
        // Delay timer for enemy spawn
        let nowTime = this.time.now
        if(nowTime > (this.startTime + 1000)) {
            this.counter += 1; // Increments by a second
            this.startTime = nowTime
        }
        
        console.log("Play scene updated boss!");
    }
    
    
    
    

    spawnObstacle() {
        const obstacleKeys = ['CACA', 'Can', 'RottenFruit', 'shoe'];
        const x = Phaser.Math.Between(2, this.game.config.width-2);
        const obstacleKey = Phaser.Math.RND.pick(obstacleKeys);
        const obstacle = new Obstacle(this, x, game.config.height, 400, obstacleKey, this.obstacles);
        obstacle.body.setSize(20, 20);  // set body size to match the width and height
        //obstacle.body.setOffset(-(1), -(1)); // set the offset to center the body on the sprite
        obstacle.body.onCollide = true;     // must be set for collision event to work
        obstacle.body.onWorldBounds = true;
        obstacle.setCollideWorldBounds(true);
        this.obstacles.add(obstacle);
        console.log("Obstacle spawned boss!");
    }

    // handles droppy death state
    droppyDie(droppy){
        let death  = this.add.sprite(game.config.width/2, game.config.height/2, 'droppyDeath').setOrigin(0,0);
        death.anims.play('droppyDeath');
        death.on('animationcomplete',() => {
            droppy.destroy();
            death.destroy();
            this.gameOver = true;
        });

        console.log("Droppy died!");
    }
} 