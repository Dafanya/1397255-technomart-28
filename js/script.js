var buyButtons = document.querySelectorAll(".btn-buy");
var popupCart = document.querySelector(".popup-cart");
var cartClose = document.querySelector(".popup-cart .modal-close");
var products = document.querySelector(".products");

buyButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (!popupCart.classList.contains("popup-show")) {
      popupCart.classList.add("popup-show");
    }
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupCart.classList.contains("popup-show")) {
      evt.preventDefault();
      popupCart.classList.remove("popup-show");
    }
  }
});

var imgMap = document.querySelector(".map-img");
var popupMap = document.querySelector(".map");
var mapClose = document.querySelector(".map .modal-close");


imgMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("map-show")) {
      evt.preventDefault();
      popupMap.classList.remove("map-show");
    }
  }
});


var link = document.querySelector(".write-us");
var popup = document.querySelector(".write");
var close = document.querySelector(".write .modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");
var userTextarea = popup.querySelector("[name=textarea]");
var storageName = localStorage.getItem("user_name");
var storageEmail = localStorage.getItem("user_email");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
  if (storageName) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userTextarea.focus();
  } else {
    userName.value = storageName;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userTextarea.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно ввести Имя Фамилию и email");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});


btnDelivery.addEventListener("click", changeServiceSlide);
btnGuarantee.addEventListener("click", changeServiceSlide);
btnCredit.addEventListener("click", changeServiceSlide);



var sliderBtns = document.querySelector(".services-btn");
var slide = document.querySelector(".services-slide:not(.active)");
var slideActive = document.querySelector(".active");

sliderBtns.forEach(function (btn){
  btn.addEventListener("click", function(e) {
    if (!btn.classList.contains(".active")) {
      btn.addEventListener("click", changeServiceSlide);
    }
  })
});

function changeServiceSlide(evt) {
  evt.preventDefault();
  var slideDelivery = document.querySelector(".services-delivery");
  var slideGuarantee = document.querySelector(".services-guarantee");
  var slideCredit = document.querySelector(".services-credit");

  var slide = document.querySelector(".services-slide:not(.active)");
  var slideActive = document.querySelector(".active");

  var sliderBtn = document.querySelector(".services-btn:not(.active)");
  var activeSliderBtn = document.querySelector(".services-btn.active)");


  slide.classList.add("active");
  slideActive.classList.remove("active");
  sliderBtn.classList.add("active");
  activeSliderBtn.classList.remove("active");
}



var left = document.querySelector(".slide-left");
var right = document.querySelector(".slide-right");
var indicators = document.querySelectorAll(".slider-indicator");
left.addEventListener("click", changeSlide);
right.addEventListener("click", changeSlide);

function changeSlide(evt) {
  evt.preventDefault();
  var slide = document.querySelector(".features-slide:not(.slide-active)");
  var slideActive = document.querySelector(".slide-active");

  var indicator = document.querySelector(".slider-indicator:not(.active-indicator)");
  var activeIndicator = document.querySelector(".active-indicator");

  slide.classList.add("slide-active");
  slideActive.classList.remove("slide-active");
  indicator.classList.add("active-indicator");
  activeIndicator.classList.remove("active-indicator");
}


indicators.forEach(function (indicator) {
  indicator.addEventListener("click", function (e) {
    if (!indicator.classList.contains("active-indicator")) {
      indicator.addEventListener("click", changeSlide);
    }
  })
});
