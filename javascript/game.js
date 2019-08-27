class Game {
    constructor (canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.background = new Background (this);
        this.enemy = new Enemy (this,400);
        this.enemy2 = new Enemy (this,450);

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

        this.player.draw();
              // TO DO  - loop to update array of bullets
        this.bullet.draw();
        // console.log('everything is here');

    }
    
  }
