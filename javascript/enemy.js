const enemyImage = new Image();
enemyImage.src = "./images/minion.png";
const explotionImage = new Image();
// explotionImage.src = "./images/explotion.jpg";
explotionImage.src = "./images/explosion.png";

class Enemy {
    constructor (game,x){
        this.game = game;
        this.context = game.context;
        this.canvasWidth = this.game.canvas.width;
        this.image = enemyImage;
        
        this.y = 100;// y location of enemy ships from de canvas
        this.x = x;
        this.width = 75;
        this.height = 75;
        this.image1= explotionImage;
        this.explotionWidth= this.width;
        this.explotionHeight = this.height;
        this.explosionFrameCounter = 0;
    }

    explosion() {
        this.explosionFrameCounter = 1;
    }
    
    remove () {
        const index = this.game.enemies.findIndex((enemy) => enemy === this);
        this.game.enemies.splice(index, 1);
    }

    shoot(){
        
    }

    draw (){
        if (this.explosionFrameCounter >= 10) {
            this.remove();
            return;
        }
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        if (this.explosionFrameCounter > 0) {
            this.explosionFrameCounter += 1;
            this.context.drawImage(this.image1,this.x, this.y, this.explotionWidth, this.explotionHeight);
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