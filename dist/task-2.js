function randomColor(){
  let symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i=0;i<6;i++){
    color += symbols[Math.floor(Math.random()*16)];
  }
  return color;
}

function draw(){
  let canvas = document.getElementById('canvas');
  
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = randomColor();

    let square = new Path2D();
    square.rect(0, 0, 100, 100);
    ctx.fill(square);

    let rectangle = new Path2D();
    rectangle.rect(650, 0, 150, 100);
    ctx.fill(rectangle);

    let triangle = new Path2D();
    triangle.moveTo(50, 500);
    triangle.lineTo(100, 600);
    triangle.lineTo(0, 600);
    triangle.lineTo(50, 500);
    ctx.fill(triangle);

    let circle = new Path2D();
    circle.arc(750, 550, 50, 0,Math.PI*2,true);
    ctx.fill(circle);
  }
}

draw();