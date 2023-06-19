window.onload = letsBegin;

function letsBegin() {
  const heroButton = document.getElementById('hero-button');
  const heroImage = document.getElementById('hero-image');
  const heroRight = document.querySelector('.hero-right');
  const header = document.querySelector('.header-container');
  const heroTitle = document.getElementById('hero-title');

  setTimeout(() => {
    console.clear();
    console.log('🍏🥑 smoothies are awesome');
    heroRight.style.opacity = '1';
  }, 500);

  const heroTitleContent = `<span class="fade-down delay-1">Tastes fantastic.</span><br /><span class="fade-down delay-2">Backed by science.</span>`;
  const heroButtonContent = `Shop now <div class="button-arrow"><span class="button-arrow-head"></span></div>`;

  function handleClick() {
    heroImage.style.backgroundPositionX = 'right';
    heroRight.style.opacity = '0';

    setTimeout(() => {
      heroRight.style.opacity = '1';
      heroRight.style.backgroundImage = "url('/assets/cut_green.png')";
      heroRight.style.backgroundPosition = 'bottom';
      header.style.backgroundColor = 'rgba(148, 183, 148, 0.5)';
      heroTitle.innerHTML = heroTitleContent;
      heroButton.innerHTML = heroButtonContent;
      heroButton.removeEventListener('click', handleClick);
    }, 300);
  }

  heroButton.addEventListener('click', handleClick);
}
