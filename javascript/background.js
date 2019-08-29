class Background {
    constructor (game){
        this.game = game;
        this.context = game.context
        this.backgroundImage = new Image ();
        this.backgroundImage.src = './images/space1.jpg';
        this.width = game.canvas.width;
        this.height = game.canvas.height;
        this.x = 0
        this.y = 0
        this.velocityY =0.8


    }

    draw(){
        // console.log('here is the background');
        this.context.drawImage(this.backgroundImage,this.x,this.y, this.width, this.height);
        this.context.drawImage(this.backgroundImage,this.x,this.y-this.height, this.width, this.height);

    }
    update() {
        this.y += this.velocityY
        if(this.y >= this.height)
            this.y =0
        console.log(this.y)
    }
}