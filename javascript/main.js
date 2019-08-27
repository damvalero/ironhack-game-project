const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

window.addEventListener('load', () => {
    

    game.start();

});

// game.draw();
