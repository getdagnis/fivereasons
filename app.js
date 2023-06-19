window.onload = letsBegin;

function letsBegin() {
  const preloadModal = document.querySelector('.preload-modal');
  const heroButton = document.getElementById('hero-button');
  const heroImage = document.getElementById('hero-image');
  const heroRight = document.querySelector('.hero-right');
  const header = document.querySelector('.header-container');
  const heroTitle = document.getElementById('hero-title');

  const heroTitleContent = `<span class="fade-down delay-1">Tastes fantastic.</span><br /><span class="fade-down delay-2">Backed by science.</span>`;
  const heroButtonContent = `Shop now <div class="button-arrow"><span class="button-arrow-head"></span></div>`;

  if (sessionStorage.getItem('visited') === null) {
    document.documentElement.style.setProperty('--additionalDelay', '3s');
    sessionStorage.setItem('visited', 'true');
    preloadModal.style.visibility = 'visible';

    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      preloadModal.style.opacity = '0';
    }, 1500);

    setTimeout(() => {
      preloadModal.remove();
    }, 2000);
  } else {
    document.body.classList.remove('no-scroll');
    document.documentElement.style.setProperty('--additionalDelay', '0s');
    preloadModal.style.opacity = '0';

    setTimeout(() => {
      preloadModal.remove();
    }, 500);
    preloadModal.remove();
  }

  function handleClick() {
    heroImage.style.backgroundPositionX = 'right';
    heroRight.style.opacity = '0';
    document.documentElement.style.setProperty('--additionalDelay', '0s');

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
