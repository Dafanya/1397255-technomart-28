var imgMap = document.querySelector(".map-img");
var popupMap = document.querySelector(".map");
var mapClose = document.querySelector(".modal-close");


imgMap.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-show");
});

mapClose.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("map-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popupMap.classList.contains("map-show")) {
    evt.preventDefault();
    popupMap.classList.remove("map-show");
  }
  } });
