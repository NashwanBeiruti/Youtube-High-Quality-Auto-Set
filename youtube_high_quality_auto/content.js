
// Function to set the highest video quality
function setHighestQuality() {
  const player = document.querySelector('video');

  if (player) {
    player.addEventListener('loadeddata', () => {
      const qualities = document.querySelectorAll('.ytp-quality-menu .ytp-quality-menu-item');
      if (qualities.length > 0) {
        qualities[0].click();
        console.log('Set to highest quality');
      }
    });
  }
}

// Observe changes in the URL and reapply the highest quality setting
let currentUrl = window.location.href;
setInterval(() => {
  if (currentUrl !== window.location.href) {
    currentUrl = window.location.href;
    setHighestQuality();
  }
}, 1000);

// Initial setting
setHighestQuality();
