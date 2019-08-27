class Enemy {
    constructor (game){
        this.game = game;
        this.image = new Image();
        this.image.src= "./images/minion.png";
        this.context = game.context;
        this.width = this.game.canvas.width;
        this.yLocation = 100;// y location of enemy ships from de canvas
        this.minionWidth = 75;
        this.minionHeight = 75;

    }

    draw (){
        // console.log("DEBUG canvas width", this.game.canvas.width);
        for ( let xDistance = 0 ; xDistance<= this.width  ; xDistance += 90){
            this.context.drawImage(this.image, xDistance, this.yLocation, this.minionWidth, this.minionHeight);
            //console.log(xDistance);
        }
        

    }

    // location (){
    //     const width = this.game.canvas.width;
    //     for ( let xDistance = 0 ; xDistance<= width ; xDistance ++){
    //         let arrayMinion = [];
    //         const measureBetween= 20; // space between ships.
    //         if (xDistance <width){
    //             xDistance += (this.minionWidth + measureBetween);

    //         }
    //     }
    // }
}