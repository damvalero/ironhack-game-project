class Game {
    constructor (canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.background = new Background (this);
        this.enemy = new Enemy (this,0);
        this.enemy2 = new Enemy (this,90);
        this.enemy3 = new Enemy (this,180);
        this.enemy4 = new Enemy (this,270);
        this.enemy5 = new Enemy (this,360);
        this.enemy6 = new Enemy (this,450);
        this.enemy7 = new Enemy (this,540);
        this.enemy8 = new Enemy (this,630);
        this.enemy9 = new Enemy (this,720);
        this.bulletMinion = new Bulletminion (this);

        this.boos = new Boss (this);

        this.player = new Player(this);
        this.bullet = new Bullet (this);
        this.FREQUENCY= 500
        this.timer = 0;
        //console.log(this.player);
        //console.log(this.bullet);
        this.bulletsArray = [];
        this.bulletsArrayMinion= [];
        //this.bulletsArray.push(new Bullet(this))
    }
    start () {
        // this.reset();
        this.loop(0);
      }

      loop (timestamp) {
        this.runLogic(timestamp);
        this.draw();
        // this.timer = timestamp;
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
      }

      runLogic(timestamp){
//-----UPDATING ALL VALUES --------
          this.player.move();
          this.player.update();
          this.bullet.update();
          this.bulletMinion.update();
          this.bulletsArrayMinion.map(elementBullet=>{
            elementBullet.update()
          })

//----- PUSHING MINION BULLETS TO ARRAY------
          if (this.timer < timestamp - this.FREQUENCY){
            this.bulletsArrayMinion.push(new Bulletminion(this))
           this.timer = timestamp
           console.log(this.bulletsArrayMinion);
          }
//------- DELETE USELESS BULLETS FROM ARRAY ----------

          if ( this.bulletsArrayMinion.length > 20){
            this.bulletsArrayMinion.shift();
          }
          //to do erase player bullets.
      }

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
      }

    draw(){
        this.clear();
        this.background.draw();
        this.enemy.draw();
        this.enemy2.draw();
        this.enemy3.draw();
        this.enemy4.draw();
        this.enemy5.draw();
        this.enemy6.draw();
        this.enemy7.draw();
        this.enemy8.draw();
        this.enemy9.draw();

        this.bulletMinion.draw();
        this.bulletsArrayMinion.map(elementBullet =>elementBullet.draw());
        //this.boss.draw();
        this.player.draw();
              // TO DO  - loop to update array of bullets
        this.bullet.draw();
        // console.log('everything is here');

    }
    
  }
