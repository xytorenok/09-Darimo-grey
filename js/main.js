const humburger = document.querySelector('.humburger');
const curtain = document.querySelector('.curtain');
const line = document.querySelector('.sect-1-clients-line-visible');
const sticker = document.querySelector('.square-sticker-1-tablet');
const curtainLinks = document.querySelectorAll('.curtain-link');




humburger.addEventListener('click', () => {
  humburgerMenuAction()
});

curtainLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    humburgerMenuAction()

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }, 1000);

  })
})




function humburgerMenuAction() {
  humburger.classList.toggle('open');
  curtain.classList.toggle('open');
  document.body.classList.toggle('overflow')
  line.classList.toggle('open');
  sticker.classList.toggle('open');
}


// ---------------section-8----------------------
const sliderWrapper = document.querySelector('.sect-8-slider-wrapper')
const sliderLine = document.querySelector('.sect-8-slider-line')
const slides = document.querySelectorAll('.sect-8-slide')

const sliderBtnPrev = document.querySelector('.slider-button-prev')
const sliderBtnNext = document.querySelector('.slider-button-next')

let count = 0
let width

init()
window.onresize = init

function init() {
  console.log('resize')
  width = sliderWrapper.offsetWidth
  sliderLine.style.width = width * slides.length + 'px'
  slides.forEach(slide => {
    slide.style.width = width + 'px'
  });

  // вібор стартового слайда
  sliderLine.style.transform = `translate(-${1 * width}px)`
  // rollSlider()
}

sliderBtnPrev.onclick = () => {
  count--
  if (count < 0) {
    count = slides.length - 1
  }
  rollSlider()
  console.log('prev')
}

sliderBtnNext.onclick = () => {
  count++
  if (count >= slides.length) {
    count = 0
  }
  rollSlider()
  console.log('next')
}

function rollSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`
}


// -------------------section-9--------------------


const faqPlus = document.querySelectorAll('.sect-9-block-plus')

faqPlus.forEach(button => {
  button.addEventListener('click', () => {
    console.log('press')
    const answer = button.parentNode.nextElementSibling;
    answer.classList.toggle('visible');
    button.classList.toggle('rotate');

  });
});



// ----------------section-10---------------------

const form = document.querySelector('.sect-10-form')
const submit = document.querySelector('.sect-10-submit')

form.onchange = validate


function validate(e) {
  if (!e.target.required) return


  if (e.target == form.phone) {
        if (!/^\+?\d{10,15}$/.test(e.target.value)) {
      e.target.parentNode.classList.add('invalid')
      submit.classList.add('disabled')
    } else {
      e.target.parentNode.classList.remove('invalid')
      submit.classList.remove('disabled')
    }
    }

  // if (e.target == form.name) {
  //   // длинная запись
  //   // if (e.target.value.length < 2) {
  //   //   e.target.classList.add('invalid')
  //   // } else {
  //   //   e.target.classList.remove('invalid')
  //   // }

  //   // короткая запись
  //   e.target.classList.toggle('invalid', e.target.value.length < 2)
  
  // }
  //  else if (e.target == form.phone) {
  //   e.target.classList.toggle('invalid', !/^(\+\d{0,5})?\d{10}$/.test(e.target.value) )

  // } else if (e.target == form.email) {
  //   console.log('email')
  // } else if (e.target == form.message) {
  //   console.log('message')
  // }

  
}

// ---------------footer------------

andrew.addEventListener("click", function (e) {
  e.preventDefault()

  setTimeout(function () {
    window.location.href = e.target.href
  }, 1000)
})