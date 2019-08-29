const enemyBulletImage = new Image();
enemyBulletImage.src = './images/Livello-8.png';

class Bulletminion {
    constructor(game) {
        this.game = game;
        this.canvas = this.game.canvas;
        this.context = game.context;
        this.image = enemyBulletImage;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.bulletHeigth = 30;
        this.bulletWidth = 20;
        this.minion = this.game.enemies[Math.floor(Math.random() * this.game.enemies.length)];
        this.xBullet = (this.minion.x + this.minion.width / 2 - this.bulletWidth / 2) + (Math.floor(Math.random()*9)*90)
       // this.xBullet = 27.5
        this.yBullet = this.minion.y + this.minion.height;
        this.speed = 5;
    }

    //-------different solution from player's bullet -------
    draw() {
        this.context.drawImage(this.image, this.xBullet, this.yBullet, this.bulletWidth, this.bulletHeigth);
    }

    update() {
        this.yBullet += this.speed
    }

}