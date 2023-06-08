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



  
  function humburgerMenuAction(){
    humburger.classList.toggle('open');
    curtain.classList.toggle('open');
    document.body.classList.toggle('overflow')
    line.classList.toggle('open');
    sticker.classList.toggle('open');
  }



