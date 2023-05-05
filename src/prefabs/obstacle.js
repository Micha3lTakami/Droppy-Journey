class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture);
  
      // Add the sprite to the scene
      scene.add.existing(this);
  
      // Enable physics on the sprite
      scene.physics.add.existing(this);
  
      // set the size and scale of the obstacle
      this.setSize(100, 100);
      this.setScale(1);
  
      // apply gravity to the sprite
      this.body.gravity.y = -1000;
  
      // Set the sprite's velocity to move upwards
  
      // Set the sprite to collide with the world bounds
      this.setCollideWorldBounds(true);
  
      // When the sprite goes out of bounds at the top, destroy it
      this.body.onWorldBounds = true;
      this.body.world.on('worldbounds', (body, up, down, left, right) => {
        if (up) {
          this.destroy();
        }
      });
    }
  }