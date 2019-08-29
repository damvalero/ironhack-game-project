class Player {
    constructor(game) {
        this.game = game;
        this.image = new Image();
        this.image.src = "./images/battleship1.png";
        this.context = game.context;
        this.width = this.game.canvas.width; // where is going to be located in x
        this.height = this.game.canvas.height; // where is going to be located in y
        this.playerWidth = 100; // x dimension of photo player
        this.playerHeight = 100; // y dimension of photo player
        this.x = this.width / 2 - this.playerWidth / 2;
        this.y = this.height - this.playerHeight;
        this.moveLeft = false; //move left flase
        this.moveRight = false; //move right false
        this.keyBar = false;
        this.speed = 10;
        //space flase not for now
        this.registerEventListeners();
    }

    registerEventListeners() {

        window.addEventListener('keydown', event => {
            const key = event.keyCode;

            if ([32].includes(key)) {
                this.shoot();
            }
        });

        window.addEventListener('keydown', event => {
            const key = event.keyCode;
            if ([39, 37, 32].includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 39:
                        this.moveRight = true;
                        //console.log('is press right');
                        break;
                    case 37:
                        this.moveLeft = true;
                        //this.x -=25;
                        //console.log('is pressed left');
                        break;
                }
            }
        });

        window.addEventListener('keyup', event => {
            const keyU = event.keyCode;
            if ([39, 37, 32].includes(keyU)) {
                switch (keyU) {
                    case 39:
                        this.moveRight = false;
                        // console.log('it stops to press right');
                        break;
                    case 37:
                        this.moveLeft = false;
                        // console.log ('it stop to press left');
                        break;
                    case 32:
                        this.keyBar = false;
                        //console.log('it stop to shoot');
                        break;

                }
            }
        });
    }
    shoot() {
        //console.log("DEBUG x",this.game.player.x)
        let game = this.game
        let x= this.x  + this.playerWidth/2
        let y= this.height - this.playerHeight

        //debugger;
        this.keyBar = true;
        game.bulletsArray.push({x,y})
        console.log(game.bulletsArray)
        game.bullet.draw()
        //console.log('is shooting',game.bullet);
    }

    move() {
    }


    draw() {
        // console.log ('aparece nave');
        this.context.drawImage(this.image, this.x, this.y, this.playerWidth, this.playerHeight);
        // window.requestAnimationFrame(() => this.draw());
    }

    update() {
        //--------conditions to move the player
        if (this.moveLeft === true && !((this.x + this.playerWidth/2) <= 50)) {
            this.x -= this.speed;
            //console.log(this.x);
        }; // if the !part is true then is not possible to move
        if (this.moveRight && !((this.x + this.playerWidth/2) >= this.width-50)) {
            this.x += this.speed;
            //console.log(this.x);
        };
        
    }
}