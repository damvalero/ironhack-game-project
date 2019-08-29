class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.background = new Background(this);
    this.enemies = [];
    for (let i = 0; i < 9; i++) {
      this.enemies.push(new Enemy(this, i * 90))
    }
    this.bulletMinion = new Bulletminion(this);

    //this.boos = new Boss (this);

    this.player = new Player(this);
    this.bullet = new Bullet(this);
    this.FREQUENCY = 200
    this.timer = 0;
    //console.log(this.player);
    //console.log(this.bullet);
    this.bulletsArray = [];
    this.bulletsArrayMinion = [];
    //this.bulletsArray.push(new Bullet(this))
  }

  start() {
    // this.reset();
    this.loop(0);
  }

  loop(timestamp) {
    this.runLogic(timestamp);
    this.draw();
    // this.timer = timestamp;
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  runLogic(timestamp) {
    //-----UPDATING ALL VALUES --------
    this.player.move();
    this.player.update();
    this.bullet.update();
    this.bulletMinion.update();
    // this.bulletsArrayMinion.map(elementBullet => {
    //   elementBullet.update()
    // })
    for (let elementBullet of this.bulletsArrayMinion) {
      elementBullet.update()
    }
    this.colition();

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
          bullet.y < enemy.y + enemy.height
        ) {
          enemy.explosion();
          console.log('100 ptos')
        }
      }
    }
//------player colition
    for (let bullet of this.bulletsArrayMinion){
      if (
        bullet.xBullet > this.player.x &&
        bullet.xBullet < this.player.x + this.player.playerWidth &&
        bullet.yBullet < this.player.y &&
        bullet.yBullet > this.player.y + this.player.playerHeight
      ){
        console.log('game over');
      }
    }
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
    //this.boss.draw();
    this.player.draw();
    // TO DO  - loop to update array of bullets
    this.bullet.draw();
    // console.log('everything is here');

  }

}