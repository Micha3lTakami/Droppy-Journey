// menu scene
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    

    // create()
    // create menu scene
    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#000',
            color: '#FFF',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.image(0, 0, 'title_screen').setOrigin(0, 0);
        //this.add.text(game.config.width/2, game.config.height/2, '(ENTER) to Start',menuConfig).setOrigin(0.5);
        // define keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    // update()
    // menu update function
    update() {
          if (Phaser.Input.Keyboard.JustDown(keyENTER)) {

            game.settings = {
                obstacleSpeed: 5
            }
            this.scene.start('playScene');    
          }
    }

}
