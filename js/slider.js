var left = document.querySelector(".slide-left");
var right = document.querySelector(".slide-right");
var slide = document.querySelector(".features-slide:not(.slide-active)");
var slideActive = document.querySelector(".slide-active");
var indicator = document.querySelector(".slider-indicator:not(.active-indicator)");
var ActiveIndicator = document.querySelector(".slider-indicator");


left.addEventListener ("click", function(evt) {
  evt.preventDefault();
  slide.classList.add("slide-active");
  slideActive.classList.remove("slide-active");
  ActiveIndicator.classList.remove("active-indicator");
  indicator.classList.add("active-indicator");
});

right.addEventListener ("click", function(evt) {
  evt.preventDefault();
  slide.classList.add("slide-active");
  slideActive.classList.remove("slide-active");
  ActiveIndicator.classList.remove("active-indicator");
  indicator.classList.add("active-indicator");
});

indicator.addEventListener ("click", function(evt) {
  evt.preventDefault();
  slide.classList.add("slide-active");
  slideActive.classList.remove("slide-active");
  ActiveIndicator.classList.remove("active-indicator");
  indicator.classList.add("active-indicator");
});
