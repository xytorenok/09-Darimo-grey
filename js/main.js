const humburger = document.querySelector('.humburger');
const curtain = document.querySelector('.curtain');
const line = document.querySelector('.sect-1-clients-line-visible');
const sticker = document.querySelector('.square-sticker-1-tablet');
const curtainLinks = document.querySelectorAll('.menu-link');




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

// ---------------section-5----------------------

const section = document.querySelector('.section-5');
const line5 = document.querySelector('.sect-5-slider-line');
const h2 = document.querySelector('.sect-5-block-h2');

let square = 0
const last = {}
const k = 1







section.addEventListener('mouseover', function (e) {
  line5.style.transform = "translate(-12%)"
  h2.style.transform = "translate(-200%)"

  // onwheel = e => {
  //   console.log(e);
  //   square -= e.deltaY * 2
  //   line5.style.transform = `translate(${square}px, 0px)`

  // }
});



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
  // sliderLine.style.transform = `translate(-${1 * width}px)`
  rollSlider()
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

form.onsubmit = () => {


  const formData = Object.fromEntries(new FormData(form))

  const text = `Ім'я: ${formData.name}\nТелефон: ${formData.phone}`

  // const text = JSON.stringify(formData)

  // const url = `${baseUrl}/${method}?chat_id=${chatId}&text=${text}`;

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));

  fetch(`${baseUrl}/${method}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ chat_id, text }) })
}

// ---------------footer------------

andrew.addEventListener("click", function (e) {
  e.preventDefault()

  setTimeout(function () {
    window.location.href = e.target.href
  }, 1000)
})




const token = '6300826819:AAGQJEqFloVvQpyRzVsT4JmO-8tvn0jLGO4'

const chat_id = -923822539



const baseUrl = `https://api.telegram.org/bot${token}`;

const method = 'sendMessage';

