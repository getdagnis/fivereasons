window.onload = letsBegin;

function letsBegin() {
  const preloadModal = document.querySelector('.preload-modal');
  const heroButton = document.getElementById('hero-button');
  const heroImage = document.getElementById('hero-image');
  const heroRight = document.querySelector('.hero-contents');
  const header = document.querySelector('.header-container');
  const heroTitle = document.getElementById('hero-title');

  if (sessionStorage.getItem('visited') === null) {
    document.documentElement.style.setProperty('--additionalDelay', '5s');
    sessionStorage.setItem('visited', 'true');
    preloadModal.style.visibility = 'visible';

    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      preloadModal.style.opacity = '0';
    }, 3500);

    setTimeout(() => {
      preloadModal.remove();
    }, 4000);
  } else {
    document.body.classList.remove('no-scroll');
    document.documentElement.style.setProperty('--additionalDelay', '-1s');
    preloadModal.style.opacity = '0';

    setTimeout(() => {
      preloadModal.remove();
    }, 500);
    preloadModal.remove();
  }

  let currentSlide = 0;
  const currentSlideData = [
    {
      bgColor: 'rgba(201, 150, 197, 0.5)',
      bgPos: '85% center',
      bgImg: "url('/assets/cut_brain_bliss.png')",
      bgColorPosition: 'left',
      heroTitleContent: `<span class="fade-down delay-1">Fuel your body.</span><br /><span class="fade-down delay-2">Fuel your life.</span>`,
      heroButtonContent: `Learn more <div class="button-arrow"><span class="button-arrow-head"></span></div>`,
    },
    {
      bgColor: 'rgba(148, 183, 148, 0.5)',
      bgPos: '95% bottom',
      bgImg: "url('/assets/cut_green.png')",
      bgColorPosition: 'right',
      heroTitleContent: `<span class="fade-down delay-1">Tastes fantastic.</span><br /><span class="fade-down delay-2">Backed by science.</span>`,
      heroButtonContent: `Shop now <div class="button-arrow"><span class="button-arrow-head"></span></div>`,
    },
    {
      bgColor: 'rgba(148, 183, 148, 0.5)',
      bgPos: '85% center',
      bgImg: "url('/assets/five_icon_600.png')",
      bgColorPosition: 'right',
      heroTitleContent: `<span class="fade-down delay-1">Shop can open here.</span><br /><span class="fade-down delay-2">In a seperate page.</span>`,
      heroButtonContent: `Go back <div class="button-arrow"><span class="button-arrow-head"></span></div>`,
    },
  ];

  function handleHeroButtonClick() {
    if (currentSlide === 2) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    document.documentElement.style.setProperty('--additionalDelay', '0s');
    heroRight.style.opacity = '0';
    heroImage.style.backgroundPositionX = currentSlideData[currentSlide].bgColorPosition;

    setTimeout(() => {
      heroRight.style.opacity = '1';
      heroRight.style.backgroundImage = currentSlideData[currentSlide].bgImg;
      heroRight.style.backgroundPosition = currentSlideData[currentSlide].bgPos;
      header.style.backgroundColor = currentSlideData[currentSlide].bgColor;
      heroTitle.innerHTML = currentSlideData[currentSlide].heroTitleContent;
      heroButton.innerHTML = currentSlideData[currentSlide].heroButtonContent;
      // heroButton.removeEventListener('click', handleClick);
    }, 400);
  }

  heroButton.addEventListener('click', handleHeroButtonClick);
}
