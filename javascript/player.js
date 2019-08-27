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
        this.moveLeft= false;//move left flase
        this.moveRight= false;//move right false
        this.keyBar= false;
        this.speed = 20;
        //space flase not for now

    }

    move (){
// if key is left or right, this.x position should be updated!
        window.addEventListener('keydown', event => {
            const key = event.keyCode;
            if ([ 39, 37, 32].includes(key)){
                switch (key){
                    case 39:
                        this.moveRight=true;
                        console.log('is press right');
                        break;
                    case 37:
                        this.moveLeft=true; 
                        //this.x -=25;
                        console.log('is pressed left');
                        break;
                    case 32:
                        this.keyBar= true;
                        this.game.bullet.draw()
                        console.log('is shooting',this.game.bullet);
                        break;
                }
            }
        });

            window.addEventListener('keyup', event =>{
                const keyU = event.keyCode;
                if([39,37,32].includes(keyU)){
                    switch (keyU){
                        case 39:
                            this.moveRight = false;
                            console.log('it stops to press right');
                            break;
                        case 37:
                            this.moveLeft = false;
                            console.log ('it stop to press left');
                            break;
                        case 32:
                            this.keyBar = false;
                            console.log('it stop to shoot');
                            break;        

                    }
                }
            });
    }        
    

    draw(){
        // console.log ('aparece nave');
        this.context.drawImage(this.image, this.x, this.height - this.playerHeight, this.playerWidth,this.playerHeight);
        // window.requestAnimationFrame(() => this.draw());
    }

    update(){
        //if checkin with both if is left and right
        if(this.moveLeft===true) {
            this.x -=this.speed
        };//move left flase
        if(this.moveRight) {
            this.x +=this.speed
        };
    }
}