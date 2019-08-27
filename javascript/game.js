class Game {
    constructor (canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.background = new Background (this);
        this.enemy = new Enemy (this);
        this.player = new Player(this);
        this.bullet = new Bullet (this);
        this.SPEED = 300;/* this is a constant that will control the speed of the game*/
        this.timer = 0;
        console.log(this.bullet)
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
          // TO DO  - loop to update array of bullets
          this.bullet.update();
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
        this.player.draw();
              // TO DO  - loop to update array of bullets
        this.bullet.draw();
        // console.log('everything is here');

    }
    
  }
