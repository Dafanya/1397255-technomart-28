var ActiveSliderBtn = document.querySelector(".services-btn");
var SliderBtn = document.querySelector(".services-btn:not(.active)");
var slide = document.querySelector(".services-slide:not(.active)");
var slideActive = document.querySelector(".active");

SliderBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  slide.classList.add("active");
  slideActive.classList.remove("active");
});
