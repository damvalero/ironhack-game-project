class Bulletminion {
    constructor(game) {
        this.game = game;
        this.image = new Image();
        this.image.src = './images/Livello-8.png';
        this.context = game.context;
        this.canvas = this.game.canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.bulletHeigth = 30;
        this.bulletWidth = 20;
        this.minion = this.game.enemy;
        this.xBullet = (this.minion.xDistance + this.minion.minionWidth / 2 - this.bulletWidth / 2) + (Math.floor(Math.random()*9)*90)
       // this.xBullet = 27.5
        this.yBullet = this.minion.yLocation + this.minion.minionHeight;
        this.speed = 5;

    }

    //-------different solution from player's bullet -------
    draw() {
        console.log(this.xBullet)
        this.context.drawImage(this.image, this.xBullet, this.yBullet, this.bulletWidth, this.bulletHeigth);
    }

    update() {
        this.yBullet += this.speed
    }

}