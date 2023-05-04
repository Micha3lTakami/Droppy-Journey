// prefabs for obstacle

create() {
    // create a group of obstacles
    obstacles = this.physics.add.group();
    
    // create individual obstacles and add them to the group
    const obstacle1 = obstacles.create(200, 300, 'obstacle');
    const obstacle2 = obstacles.create(600, 400, 'obstacle');
    
    // set the size and scale of the obstacles
    obstacle1.setSize(100, 100);
    obstacle2.setSize(150, 150);
    obstacle1.setScale(0.5);
    obstacle2.setScale(0.8);
    
    // make the obstacles immovable so the raindrop bounces off them
    obstacles.setImmovable(true);
}