//task 1

let slider = document.querySelector('.slider');
let prevBtn = slider.querySelector('.slider__btn--prev');
let nextBtn = slider.querySelector('.slider__btn--next');
let sliderList = slider.querySelector('.slider__list');


let moveLeft = () => {
  let left = parseInt(getComputedStyle(sliderList).left);
  setTimeout(()=> {
    if(left > -6000){
      sliderList.style.left = left  - 400 + 'px';
    }
  }, 300)
};

let moveRight = () => {
  let left = parseInt(getComputedStyle(sliderList).left);
  
  setTimeout(()=> {
    if(left < 0){
      sliderList.style.left = left  + 400 + 'px';
    }
  }, 300)
}

nextBtn.addEventListener('click', moveLeft);
prevBtn.addEventListener('click', moveRight);

let event = null;
let direction;

sliderList.addEventListener('touchstart', function (e) {
  event = e;
});
sliderList.addEventListener('touchmove', function (e) {
  if (event) {
    direction = e.touches[0].pageX - event.touches[0].pageX;
  }
});
sliderList.addEventListener('touchend', function (e) {
  if (direction>0){
    moveRight();
  } else if (direction<0){
    moveLeft();
  }
  event = null;
});