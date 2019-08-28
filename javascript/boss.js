class Boss {
    constructor (game){
        this.game = game;
        this.image = new Image();
        this.image.src = "./images/miniboss.png";
        this.context = game.context;
        this.width = this.game.canvas.width; 
        this.height = this.game.canvas.height; 
        this.bossWidth = 100; 
        this.bossHeight = 100; 
        this.x = this.width/2 - this.bossWidth/2;
        this.y = 10;
    }




    draw(){
        this.context.drawImage(this.image,this.x, this.y, this.bossWidth, this.bossHeight);
    }
}