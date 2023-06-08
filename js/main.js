const humburger = document.querySelector('.humburger');
const curtain = document.querySelector('.curtain');

  humburger.addEventListener('click', (event) => {
    humburger.classList.toggle("open");
    curtain.classList.toggle("open");
  });