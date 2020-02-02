let btn = document.querySelector('.button');
let dropdown = document.querySelectorAll('.dropdown');

btn.addEventListener('click', () => {
    for(let i=0;i<dropdown.length; i++){
      dropdown[i].classList.toggle('active')
    }
})