var link = document.querySelector(".write-us");
var popup = document.querySelector(".write");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email]");
var userTextarea = popup.querySelector("[name=textarea]");
var storageName = localStorage.getItem("user_name");
var storageEmail = localStorage.getItem("user_email");

var isStorageSupport = true; var storage = "";
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
    }
    else {
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
        } });
