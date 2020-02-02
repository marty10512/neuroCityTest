let container = document.querySelector('.task__container');


let block = document.createElement('div');
  block.className = 'block--js';
  block.style.margin = 'auto';
  block.style.height = '300px';
  block.style.width = '300px';
  block.style.backgroundColor = '#4a4a4a';
  block.style.display = 'flex';

let blockInner = document.createElement('div');
  blockInner.className = 'block__inner--js';
  blockInner.style.margin = 'auto';
  blockInner.style.height = '100px';
  blockInner.style.width = '100px';
  blockInner.style.backgroundColor = '#ff7c7c';

block.append(blockInner);
container.append(block);