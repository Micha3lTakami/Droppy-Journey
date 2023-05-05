// prefabs for obstacle

class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture){
        // call the parent constructor first
        super(scene, x, y, texture);

        // set the size and scale of the obstacle
        this.setSize(100, 100);
        this.setScale(0.5);

        // make the obstacle immovable so the raindrop bounces off it
        this.setImmovable(true);

        // add the obstacle to the scene
        scene.add.existing(this);
    }

    update() {
        // update logic goes here
    }
}