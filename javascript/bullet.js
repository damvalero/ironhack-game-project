class Bullet {
    constructor (game){
        this.game = game;
        this.image = new Image();
        this.image.src= './images/shoot-player.png';
        this.canvas = this.game.canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context = game.context;

        this.player = this.game.player
        this.xBullet= this.player.x;
        this.yBullet = this.height - this.player.playerHeight;
        this.bulletWidth = 20;
        this.bulletHeigth = 30;
        this.speed = 40;
        //this.bar = 
    }

    move(){


    }

    draw(){
        console.log('texting shoots');
        this.context.drawImage(this.image,this.xBullet,this.yBullet, this.bulletWidth,this.bulletHeigth);
        this.context.fillStyle = "red";
        //this.context.fillRect(this.xBullet,this.yBullet, this.bulletWidth,this.bulletHeigth)

    }

    update(){
        this.yBullet -= this.speed;

    }



}