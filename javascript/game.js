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
        this.enemy10 = new Enemy (this,810);

        this.player = new Player(this);
        this.bullet = new Bullet (this);
        this.SPEED = 0;/* this is a constant that will control the speed of the game*/
        this.timer = 0;
        //console.log(this.player);
        //console.log(this.bullet);
        this.bulletsArray = []
        //this.bulletsArray.push(new Bullet(this))
    }
    start () {
        // this.reset();
        this.loop(0);
      }

      loop (timestamp) {
        if (this.timer < timestamp - this.SPEED) {//timestamp property from canvas
          this.runLogic();
          this.draw();
          this.timer = timestamp;
        }
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
      }

      runLogic(){
          this.player.move();
          this.player.update();
          this.bullet.update()
          // this.player.shoot(this);
          // TO DO  - loop to update array of bullets
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

        this.player.draw();
              // TO DO  - loop to update array of bullets
        this.bullet.draw();
        // console.log('everything is here');

    }
    
  }
