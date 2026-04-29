'use strict';

const switcher = document.querySelector('.btn');

// Bij het laden: check localStorage en zet juiste theme
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(savedTheme);
        switcher.textContent = savedTheme === 'light-theme' ? 'Dark' : 'Light';
    }
});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    // Sla de huidige theme op
    localStorage.setItem('theme', className);
    console.log('current class name: ' + className);
});

document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.carousel-video');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  let current = 0;

  function showVideo(idx) {
    videos.forEach((vid, i) => {
      vid.classList.toggle('active', i === idx);
    });
  }

  leftBtn.addEventListener('click', function() {
    current = (current - 1 + videos.length) % videos.length;
    showVideo(current);
  });

  rightBtn.addEventListener('click', function() {
    current = (current + 1) % videos.length;
    showVideo(current);
  });

  showVideo(current);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}