class Droppy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        
        // add object to existing scene 
        scene.add.existing(this);

        // enable physics on the sprite
        scene.physics.add.existing(this);

        // apply gravity to the sprite
        this.body.gravity.y = 200;

        // set the maximum velocity of the sprite
        this.maxVelocity = 300;
        
        // create cursor keys for input
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        // check for left/right arrow key input
        if (this.cursors.left.isDown) {
            this.body.velocity.x = -this.maxVelocity;
        } 
        else if (this.cursors.right.isDown) {
            this.body.velocity.x = this.maxVelocity;
        } 
        else {
            this.body.velocity.x = 0;
        }
        
        // check for up/down arrow key input
        if (this.cursors.up.isDown) {
            this.body.velocity.y = -this.maxVelocity;
        } 
        else if (this.cursors.down.isDown) {
            this.body.velocity.y = this.maxVelocity;
        } 
        else {
            this.body.velocity.y = 0;
        }
        
        // normalize the velocity if the sprite is moving diagonally
        if (this.body.velocity.x != 0 && this.body.velocity.y != 0) {
            this.body.velocity.normalize().scale(this.maxVelocity);
        }
        
        // wrap around from all edges
        if (this.x > game.config.width) {
            this.x = 0 - this.width;
        } 
        else if (this.x < 0 - this.width) {
            this.x = game.config.width;
        }
        
        if (this.y > game.config.height) {
            this.y = 0 - this.height;
        } 
        else if (this.y < 0 - this.height) {
            this.y = game.config.height;
        }
    }
}