// play scene
class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {

        // place tile sprite
        this.clouds = this.add.tileSprite(0, 0, 480, 640, 'cloudBackg').setOrigin(0, 0);
    
        // add player character
        this.droppy = new Droppy(this, game.config.width/2, game.config.height/2, 'Droppy').setOrigin(0.5);
    
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        // Initialize timer and enemy number
        this.counter = 0;
        this.startTime = this.time.now; // Resets every 1000 milliseconds
        this.enemy = 0;
    
        // create a group for the obstacles / colliders
        this.obstacles = this.physics.add.group();
        this.physics.world.setBounds(0, 0, game.config.width, game.config.height);
        this.physics.add.collider(this.obstacles, this.handleObstacleWorldCollision, null, this);

        this.physics.add.collider(this.droppy, this.obstacles, this.droppyDie, null, this);
        this.obstacleTimer = this.time.addEvent({
            delay: 5000,
            callback: this.spawnObstacle,
            callbackScope: this,
            loop: true,
        });
        // animation configuration
        this.anims.create({
            key: 'death',
            frames: this.anims.generateFrameNumbers('droppyDeath', { start: 0, end: 25, first: 0}),
            frameRate: 30
        });
        // flag to monitor game over state
        this.gameOver = false;
    
        console.log("Play scene created boss!");
    }
    
    handleObstacleWorldCollision(obstacle) {
        obstacle.setVelocityY(obstacle.body.velocity.y * -1);
    }
    
    // handles droppy death state
    droppyDie(droppy){
        this.gameOver = true;
        this.deathTime = this.counter; // Store the time when Droppy died
        droppy.anims.play('death');
        droppy.on('animationcomplete',() => {
            droppy.destroy();
        }); 
        console.log("Droppy died!");
    }

    spawnObstacle() {
        const obstacleKeys = ['CACA', 'Can', 'RottenFruit', 'shoe'];
        const obstacleKey = Phaser.Math.RND.pick(obstacleKeys);
        const x = Phaser.Math.Between(5, this.game.config.width-5);
        const obstacle = new Obstacle(this, x, 640, 200, obstacleKey, this.obstacles);
 
        obstacle.body.setSize(1, .5);  // test set body size to match the width and height
        //obstacle.body.setOffset(-(.5), -(.25)); // set the offset to center the body on the sprite
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
        if(this.gameOver){    
            let score = this.deathTime; // Calculate the score as the difference between deathTime and startTime
            this.obstacles.children.each(function(obstacle) {
            obstacle.destroy();
            });
             let textConfig = {
                fontFamily: 'Arial',
                fontSize: '30px',
                color: '#843605',
                align: 'center',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                fixedWidth: 300
                }
                this.add.text(game.config.width/2, game.config.height/2, 'SCORE: ' + score , textConfig).setOrigin(0.5);
                this.add.text(game.config.width/2, game.config.height/2 + 30, 'Press (R) to restart!' , textConfig).setOrigin(0.5);
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.start('playScene');    
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
    



} 