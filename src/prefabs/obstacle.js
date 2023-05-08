class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, velocity, texture, group) {
        super(scene, x, y, texture);
        
        scene.add.existing(this);
        this.parentScene = scene;
        this.parentGroup = group;

        // Enable physics on the sprite
        this.parentScene.physics.add.existing(this);
        this.setVelocityY(velocity);
        this.setImmovable();
        this.setBounce(0, 1);
        
        // Set the world bounds to the size of the game
        this.parentScene.physics.world.setBounds(0, 0, this.parentScene.game.config.width, this.parentScene.game.config.height);
        
        // Add this obstacle to the group
        this.parentGroup.add(this);
       
        // Set a custom collision handler function for obstacles in the group
        this.parentScene.physics.add.collider(this.parentGroup, this.parentGroup, this.handleCollision, null, this);
        this.parentScene.physics.add.collider(this.parentGroup, this.parentGroup, this.handleWorldCollision, null, this);
    }


    handleCollision(obstacle1, obstacle2) {
        // Reverse the velocity of the two obstacles to create a bouncing effect
        console.log("collision handled");
        obstacle1.setVelocityY(obstacle1.body.velocity.y * -1);
        obstacle2.setVelocityY(obstacle2.body.velocity.y * -1);
    }

    update() {
        console.log(this.y)
        if (this.y > game.config.height) {
            this.y = 0 - this.height;
        } 
        else if (this.y < 0 - this.height) {
            this.y = game.config.height;
        }
    }
}