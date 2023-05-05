// prefab for droppy character
class Droppy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        
        // add object to existing scene 
        scene.add.existing(this);

        // enable physics on the sprite
        scene.physics.add.existing(this);

        // apply gravity to the sprite
        this.body.gravity.y = 300;
    }

    update() {

    }
}