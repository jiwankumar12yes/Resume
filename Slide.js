var slideIndex = 0;
setInterval(function() {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  document.querySelector('.image-container').style.left = -500 * slideIndex + 'px';
}, 2000);