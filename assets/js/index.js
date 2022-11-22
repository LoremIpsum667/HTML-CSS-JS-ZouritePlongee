// slideshow
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// slideshowMobile
let slideIndexMobile = 1;

showSlidesMobile(slideIndexMobile);

function plusSlidesMobile(y) {
  showSlidesMobile((slideIndexMobile += y));
}

function currentSlide(y) {
  showSlidesMobile((slideIndexMobile = y));
}
function showSlidesMobile(y) {
  let a;
  let slidesMobile = document.getElementsByClassName("mySlidesMobile");
  let dotsMobile = document.getElementsByClassName("dotMobile");
  if (y > slidesMobile.length) {
    slideIndexMobile = 1;
  }
  if (y < 1) {
    slideIndexMobile = slidesMobile.length;
  }
  for (a = 0; a < slidesMobile.length; a++) {
    slidesMobile[a].style.display = "none";
  }
  for (a = 0; a < dotsMobile.length; a++) {
    dotsMobile[a].className = dotsMobile[a].className.replace(" active", "");
  }
  slidesMobile[slideIndexMobile - 1].style.display = "block";
  dotsMobile[slideIndexMobile - 1].className += " active";
}

//button go to top
const buttonGoToTop = document.getElementById("btnGoToTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    buttonGoToTop.style.display = "block";
  } else {
    buttonGoToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

