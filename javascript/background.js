class Background {
    constructor (game){
        this.game = game;
        this.context = game.context
        this.backgroundImage = new Image ();
        this.backgroundImage.src = './images/space2.jpg';
        this.width = game.canvas.width;
        this.height = game.canvas.height;


    }

    draw(){
        // console.log('here is the background');
        this.context.drawImage(this.backgroundImage,0,0, this.width, this.height);
    }

}