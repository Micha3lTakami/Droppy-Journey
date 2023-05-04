// prefab for droppy character
class Droppy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        
        // add object to existing scene 
        scene.add.existing(this);

        // apply gravity to the world on creation
        this.physics.world.gravity.y = 300;
    }

    update() {

    }
}