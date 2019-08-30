const $canvas = document.querySelector('canvas');
const $button = document.querySelector('button');
const context = $canvas.getContext('2d');
const image = new Image();
image.src= './images/space1.jpg';

const game = new Game($canvas);

//makesto charge the page to load the image
image.addEventListener('load',()=>{
    context.save()
    context.fillStyle='red'
    context.fillRect(0,0,$canvas.width,$canvas.height)
    context.drawImage(image, 0, 0, $canvas.width, $canvas.height);
    context.restore()
})


$button.addEventListener('click', () => {
    game.start();
});

