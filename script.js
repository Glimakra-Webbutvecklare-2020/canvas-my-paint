function draw(ctx) {
     // -- Green rectangle
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 150, 100);

    // -- Negative rectangle
    // ctx.fillStyle = 'green';
    // ctx.fillRect(25, 25, 100, 100);

    // ctx.clearRect(45, 45, 60, 60);
    
    // ctx.fillStyle = 'red';
    // ctx.fillRect(50, 50, 50, 50);

    // -- Stroke (not filled)
    // ctx.strokeRect(100, 100, 60, 60);

    // -- Styling 1 simple color
    // ctx.lineWidth = 4;
    // ctx.strokeStyle = 'blue';
    // ctx.strokeRect(100, 100, 60, 60);
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(100, 200,  60, 60);

    // -- Styling 2 gradient
    // ctx.lineWidth = 4;
    // // Create a linear gradient
    // // The start gradient point is at x=20, y=0
    // // The end gradient point is at x=220, y=0
    // const gradient = ctx.createLinearGradient(20, 0, 220,0);
    // // Add three color stops
    // gradient.addColorStop(0, 'green');
    // gradient.addColorStop(.5, 'cyan');
    // gradient.addColorStop(1, 'purple');

    // ctx.strokeStyle = gradient;
    // ctx.strokeRect(100, 100, 60, 60);

    // ctx.fillStyle = gradient;
    // ctx.fillRect(100, 200, 60, 60);

    // -- Styling 3 pattern
    // ctx.lineWidth = 6;
    // const imgEl = document.querySelector('#img');
    // const pattern = ctx.createPattern(imgEl, 'repeat');
    // ctx.strokeStyle = pattern;
    // ctx.strokeRect(100, 100, 90, 90);

    // ctx.fillStyle = pattern;
    // ctx.fillRect(100, 200, 190, 190);

    // -- Drawing Paths (Triangle)
    // Filled triangle
    // ctx.fillStyle='blue';
    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // Stroked triangle
    // 

    // -- Drawing Paths (circles)
    // -- Green Circle
    // ctx.fillStyle = 'green';
    // ctx.beginPath();
    // ctx.arc(40, 50, 10, 0, 2 * Math.PI);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(70, 50, 10, 0, 1 * Math.PI);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(100, 50, 10, 0, 0.5 * Math.PI);
    // ctx.fill();
    
    // ctx.beginPath();
    // ctx.arc(130, 50, 10, 0, 0.25 * Math.PI);
    // ctx.fill();

    // -- Drawing a smiley
    // ctx.lineWidth = 2;
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();


    // RESOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

}

function handleResize(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
} 

function init() {
    const canvas = document.querySelector('#canvas');
    handleResize(canvas);
    const ctx = canvas.getContext('2d');

    let isPainting = false;
    const startPainting = () => isPainting = true;
    
    const finishPainting = () => {
        isPainting = false;
        ctx.beginPath(); // stops current and create new path
    }

    const paint = (e) => {
        if (!isPainting) return;
        ctx.lineWidth = 10
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY); // Mark a line to draw from cursor position
        ctx.stroke();                     // Draw it
        ctx.moveTo(e.clientX, e.clientY); // Update cursor position (perhaps optional?)
    }
    // Events
    canvas.onmousedown = startPainting;
    canvas.onmousemove = paint;
    canvas.onmouseup= finishPainting;
}

window.onload = init;
window.onresize = handleResize;
// alt: window.addEventListener('load', init)

