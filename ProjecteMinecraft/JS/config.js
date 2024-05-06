const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const config = {
    type: Phaser.CANVAS,
    width: screenWidth,
    height: screenHeight,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
const game = new Phaser.Game(config);