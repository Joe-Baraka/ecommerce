let currentBanner = 0;

function showBanner() {
  const banners = document.querySelector('.banner-container');
  const bannerWidth = document.querySelector('.banner').clientWidth;
  banners.style.transform = `translateX(-${currentBanner * bannerWidth}px)`;
}

function nextBanner() {
  const totalBanners = document.querySelectorAll('.banner').length;
  currentBanner = (currentBanner + 1) % totalBanners;
  showBanner();
}

function previousBanner() {
  const totalBanners = document.querySelectorAll('.banner').length;
  currentBanner = (currentBanner - 1 + totalBanners) % totalBanners;
  showBanner();
}

// Recalculate the banner position on window resize
window.addEventListener('resize', showBanner);