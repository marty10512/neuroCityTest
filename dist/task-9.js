function roll(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function randomColor(){
  let symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i=0;i<6;i++){
    color += symbols[Math.floor(Math.random()*16)];
  }
  return color;
}

let container = document.querySelector('.task__container');

function createBlocks(){
  let n = roll(10, 100);
  for (i=0;i<n;i++){
    let block = document.createElement('div');
      block.style.margin = '0 10px 10px 0';
      block.style.height = '50px';
      block.style.width = '50px';
      block.style.backgroundColor = randomColor();
    container.append(block);
  }
}

document.addEventListener("DOMContentLoaded", (e)=> { 
  createBlocks();
});