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
        this.explosionFrameCounter = 0;

        this.image1 = new Image();
        this.image1.src = "./images/explosion-player.png";
        this.explosionWidth = this.playerWidth;
        this.explosionHeight = this.playerHeight;
    }

    handleControl (control) {
        switch (control) {
            case "space":
                this.shoot();
                break;
            case 'right':
                this.moveRight = true;
                break;
            case 'left':
                this.moveLeft = true;
                break;
            case 'rightKeyUp':
                this.moveRight = false;
                break;
            case 'leftKeyUp':
                this.moveLeft = false;
                break;
            case 'enter':
                this.game.gameStatus = "play"
                break;
        }
    }

    shoot() {
        //console.log("DEBUG x",this.game.player.x)
        //let game = this.game
        let x = this.x + this.playerWidth / 2
        let y = this.height - this.playerHeight

        //debugger;
        this.keyBar = true;
        this.game.bulletsArray.push({
            x,
            y
        })
        console.log(this.keyBar)
        console.log(this.game.bulletsArray)
        console.log('is shooting', game.bullet);
    }

    explosion() {
        this.explosionFrameCounter = 1;
    }


    draw() {
        // console.log ('aparece nave');
        this.context.drawImage(this.image, this.x, this.y, this.playerWidth, this.playerHeight);
        // window.requestAnimationFrame(() => this.draw());
        if (this.explosionFrameCounter > 0) {
            this.explosionFrameCounter += 1;
            this.context.drawImage(this.image1, this.x, this.y, this.explosionWidth, this.explosionHeight);
        }
    }

    update() {
        //--------conditions to move the player
        if (this.moveLeft === true && !((this.x + this.playerWidth / 2) <= 50)) {
            this.x -= this.speed;
            //console.log(this.x);
        }; // if the !part is true then is not possible to move
        if (this.moveRight && !((this.x + this.playerWidth / 2) >= this.width - 50)) {
            this.x += this.speed;
            //console.log(this.x);
        };

    }
}