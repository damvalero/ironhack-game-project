const $canvas = document.querySelector('canvas');
const $button = document.querySelector('button');
const context = $canvas.getContext('2d');

const game = new Game($canvas);

context.save()
context.fillStyle='black'
context.fillRect(0,0,$canvas.width,$canvas.height)
context.restore()


$button.addEventListener('click', () => {
    game.start();
});

