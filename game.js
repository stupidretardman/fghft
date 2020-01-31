

const gameState = {}

function preload() {
  this.load.image('bug1', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_1.png')
  this.load.image('bug2', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_2.png')
  this.load.image('bug3', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/bug_3.png')
  this.load.image('platform', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(4).png')
  this.load.image('codey', 'https://raw.githubusercontent.com/PavanKovvuru/pavankovvuru.github.io/master/New%20Piskel-1.png%20(3).png')
}
var player;
var cursors;
// https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png
function create() {
  gameState.player = this.physics.add.sprite(225, 450, 'codey').setScale(.5);
  
  const platforms = this.physics.add.staticGroup();

   platforms.create(225, 520, 'platform').setScale(1, .3).refreshBody();
   platforms.create(400, 680, 'platform').setScale(1, .3).refreshBody();
   platforms.create(800, 680, 'platform').setScale(1, .3).refreshBody();
  gameState.player.setCollideWorldBounds(true);

  // this.physics.add.collider(gameState.player, platforms);
  
  // Create your cursor object below: 

    game.world.setBounds(0, 0, 1920, 1920);

    player = game.add.sprite(game.world.centerX, game.world.centerY, 'codey');


    cursors = game.input.keyboard.createCursorKeys();

    game.camera.follow(player);

}

function update() {
   player.body.setZeroVelocity();
  // Add your conditional statements below:
    if (gameState.cursors.left.isDown) {
    gameState.player.setVelocityX(-160);
  } else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(160);
  } else {
    gameState.player.setVelocityX(0);
  }
    if ((gameState.cursors.space.isDown || 
     gameState.cursors.up.isDown)&& gameState.player.body.touching.down) {
     gameState.player.setVelocityY(-400);
  }
}
function render() {

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);

}

const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 920,
  backgroundColor: "#566061",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
