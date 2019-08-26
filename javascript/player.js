class Player {
    constructor (game){
        this.game = game;
        this.image= new Image();
        this.image.src="./images/battleship1.png";
        this.context = game.context;
        this.width = this.game.canvas.width;// where is going to be located in x
        this.height = this.game.canvas.height;// where is going to be located in y
        this.playerWidth = 100; // x dimension of photo player
        this.playerHeight =100; // y dimension of photo player
        this.x= this.width/2 - this.playerWidth/2
    }
/*
    move (){

    }
*/
    draw(){
        console.log ('aparece nave');
        this.context.drawImage(this.image, this.x, this.height - this.playerHeight, this.playerWidth,this.playerHeight);
        // window.requestAnimationFrame(() => this.draw());


    }
}