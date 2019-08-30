class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.background = new Background(this);
    this.FREQUENCY = 200
    this.image = new Image();
    this.image.src = "./images/Publication1.png";
    this.image1 = new Image();
    this.image1.src = "./images/gameover.png";
    this.setKeyBindings();
    this.reset();
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if ([39, 37, 32, 13].includes(key)) {
        event.preventDefault();
        switch (key) {
          case 39:
            this.player.handleControl('right')
            break;
          case 37:
            this.player.handleControl('left')
            break;
          case 32:
            this.player.handleControl('space')
            break;
          case 13:
            this.player.handleControl('enter')
            this.gameStatus = "play";
            this.reset();
            this.loop(0);
            break;
        }
      }
    });

    window.addEventListener('keyup', event => {
      const keyU = event.keyCode;
      if ([39, 37, 32].includes(keyU)) {
        switch (keyU) {
          case 39:
            this.player.handleControl('rightKeyUp')
            break;
          case 37:
            this.player.handleControl('leftKeyUp')
            break;
          case 32:
            this.player.handleControl('spaceKeyUp')
            break;
        }
      }
    });
  }

  reset() {
    this.clear();
    this.timer = 0;
    this.counter = 0;
    //this.player = new Player(this);
    this.enemies = [];
    this.bulletsArray = [];
    this.bulletsArrayMinion = [];
    this.timer = 0;
    for (let i = 0; i < 9; i++) {
      this.enemies.push(new Enemy(this, i * 90))
    }
    this.bulletMinion = new Bulletminion(this);
    this.player = new Player(this);
    this.player.explosionFrameCounter = 0
    this.bullet = new Bullet(this);
    this.gameStatus = "play"
  }

  start() {
    this.reset();
    this.loop(0);
  }

  loop(timestamp) {
    if (this.gameStatus === "play") {
      this.runLogic(timestamp);
      this.draw();
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    } else if (this.gameStatus === "winner") {
      this.drawWinningScreen()
    } else if (this.gameStatus === "game over")
      this.drawinGameOverScreen();
    //console.log("whats the stauts ---", this.gameStatus)
    // this.timer = timestamp;

  }

  runLogic(timestamp) {
    //-----UPDATING ALL VALUES --------
    this.player.update();
    this.bullet.update();
    this.bulletMinion.update();
    this.background.update()
    for (let elementBullet of this.bulletsArrayMinion) {
      elementBullet.update()
    }
    this.colition();
    this.youWIn();
    //----- PUSHING MINION BULLETS TO ARRAY------
    if (this.enemies.length && this.timer < timestamp - this.FREQUENCY) {
      this.bulletsArrayMinion.push(new Bulletminion(this))
      this.timer = timestamp
      // console.log(this.bulletsArrayMinion);
    }
    //------- DELETE USELESS BULLETS FROM ARRAY ----------

    if (this.bulletsArrayMinion.length > 20) {
      this.bulletsArrayMinion.shift();
    }
    //to do erase player bullets.
  }

  colition() {
    //-------enemy colition
    for (let bullet of this.bulletsArray) {
      for (let enemy of this.enemies) {
        if (
          bullet.x > enemy.x &&
          bullet.x < enemy.x + enemy.width &&
          bullet.y > enemy.y &&
          bullet.y < enemy.y + enemy.height &&
          enemy.explosionFrameCounter === 0
        ) {
          enemy.explosion();
        }
      }
    }

    //------player colition
    for (let bullet of this.bulletsArrayMinion) {
      if (
        bullet.xBullet > this.player.x &&
        bullet.xBullet < this.player.x + this.player.playerWidth &&
        bullet.yBullet > this.player.y &&
        bullet.yBullet < this.player.y + this.player.playerHeight
      ) {
        //this.player.explosion();
        this.player.explosion();
        //console.log('GAAAAAAAAAAAMEEEEEEEEEEEEEEEE OOOOVVEEEERRRRRRRR');
        this.gameover();
      }
    }
  }

  youWIn() {
    if (this.counter === 9) {
      //window.alert('you win!!');
      this.gameStatus = "winner"
    }
  }

  drawWinningScreen() {
    //console.log("TEEEEST")
    //this.context.fillStyle = "red"
    //this.context.fillRect(0,0,this.canvas.width, this.canvas.height)
    this.context.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height)
  }


  gameover() {
    //window.alert('GAMER OVER');
    this.gameStatus = "game over"
  }

  drawinGameOverScreen() {
    this.context.drawImage(this.image1, 0, 0, this.canvas.width, this.canvas.height);
  }


  clear() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }

  draw() {
    this.clear();
    this.background.draw();
    for (let enemy of this.enemies) {
      enemy.draw();
    }
    this.bulletMinion.draw();
    this.bulletsArrayMinion.map(elementBullet => elementBullet.draw());
    //this.bulletsArray.map(bullet => bullet.draw());

    //this.boss.draw();
    this.player.draw();
    // TO DO  - loop to update array of bullets
    this.bullet.draw();
    // console.log('everything is here');

  }

}