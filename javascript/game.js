class Game {
    constructor (canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.background = new Background (this);
        this.enemy = new Enemy (this);
        this.player = new Player(this);
    }

    draw (){
        this.background.draw();
        this.enemy.draw();
        this.player.draw();

        console.log('everything is here');

    }
    

}