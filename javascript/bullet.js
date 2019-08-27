class Bullet {
    constructor (game){
        this.game = game;
        this.image = new Image();
        this.image.src= './images/shoot-player.png';
        this.canvas = this.game.canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context = game.context;

        this.bulletHeigth = 30;
        this.bulletWidth = 20;
        this.player = this.game.player
        this.xBullet= this.player.x  + this.player.playerWidth/2 - this.bulletWidth/2;
        this.yBullet = this.height - this.player.playerHeight;
        this.speed = 20;
        //this.bar = 
    }

    move(){


    }

    draw(){
        //console.log('texting shoots');
        this.game.bulletsArray.map(pos => {
            this.context.drawImage(this.image,pos.x,pos.y, this.bulletWidth,this.bulletHeigth);
            this.context.fillStyle = "red";     
        })
        //this.context.fillRect(this.xBullet,this.yBullet, this.bulletWidth,this.bulletHeigth)
    }

    update(){
        //this.yBullet -= this.speed;
        this.game.bulletsArray.map(pos => {
         pos.y -= this.speed
        })

    }



}