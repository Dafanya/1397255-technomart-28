var buy = document.querySelector(".btn-buy");
var popupCart = document.querySelector(".popup-cart");
var cartClose = document.querySelector(".modal-close");
var products = document.querySelector('.products');

products.addEventListener("click",function(e){
  if (e.target.classList.contains('btn-buy'))
  popupCart.classList.add("popup-show");
})


cartClose.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popupCart.classList.contains("popup-show")) {
    evt.preventDefault();
    popupCart.classList.remove("popup-show");
  }
  } });
